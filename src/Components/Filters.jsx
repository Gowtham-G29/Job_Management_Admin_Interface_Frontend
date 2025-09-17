import { useForm, Controller } from "react-hook-form";
import {
  Divider,
  RangeSlider,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import { useEffect, useRef } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";
import { fetchFilteredJobPosts } from "../Api";

function Filters({ setFetchedJobs }) {
  const { control, register, watch } = useForm({
    defaultValues: {
      jobTitle: "",
      location: "",
      jobType: "",
      salaryRange: [100, 500],
    },
  });

  const filters = watch();
  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    const getJobs = async () => {
      let activeFilters = Object.fromEntries(
        Object.entries(filters).filter(([, value]) => {
          if (Array.isArray(value)) {
            return value[0] !== 100 || value[1] !== 500;
          }
          return value !== "" && value !== null && value !== undefined;
        })
      );

      if (activeFilters.salaryRange) {
        activeFilters = {
          ...activeFilters,
          minSalary: activeFilters.salaryRange[0],
          maxSalary: activeFilters.salaryRange[1],
        };
        delete activeFilters.salaryRange;
      }

      if (Object.keys(activeFilters).length > 0) {
        try {
          const jobs = await fetchFilteredJobPosts(activeFilters);
          setFetchedJobs(jobs || []);
        } catch (error) {
          console.error("Failed to fetch filtered jobs:", error);
          setFetchedJobs([]);
        }
      }
    };

    getJobs();
  }, [filters]);

  return (
    <div
      className="flex flex-col md:flex-row items-start md:items-center justify-around px-4 md:px-6 py-4 w-full mx-auto gap-4 md:gap-6"
      style={{ fontFamily: "Satoshi, sans-serif" }}
    >
      <div className="flex items-center min-w-[250px] gap-2 text-sm w-full md:w-auto">
        <IoIosSearch className="w-[25px] h-[25px]" />
        <TextInput
          variant="unstyled"
          size="lg"
          radius="md"
          placeholder="Search By Job Title, Role"
          {...register("jobTitle")}
          styles={{ input: { height: "32px", fontSize: "16px" } }}
          className="flex-1"
        />
      </div>

      <Divider
        size="sm"
        orientation="vertical"
        className="hidden md:block"
        style={{ marginTop: "15px", marginBottom: "15px" }}
      />

      <div className="flex items-center min-w-[200px] gap-2 w-full md:w-auto">
        <CiLocationOn className="w-[25px] h-[25px]" />
        <TextInput
          variant="unstyled"
          size="lg"
          radius="md"
          placeholder="Preferred Location"
          {...register("location")}
          styles={{ input: { height: "32px", fontSize: "16px" } }}
          className="flex-1"
        />
      </div>

      <Divider
        size="sm"
        orientation="vertical"
        className="hidden md:block"
        style={{ marginTop: "15px", marginBottom: "15px" }}
      />

      <div className="flex items-center justify-center gap-3 w-full md:w-auto">
        <MdOutlineRecordVoiceOver className="w-[25px] h-[25px] text-gray-500" />
        <Controller
          control={control}
          name="jobType"
          render={({ field }) => (
            <Select
              variant="unstyled"
              withCheckIcon={false}
              data={["Internship", "Full Time", "Part Time", "Contract"]}
              placeholder="Job Type"
              rightSection={<IoChevronDown size={20} color="#686868" />}
              rightSectionWidth={50}
              styles={{ input: { height: "32px", fontSize: "16px" } }}
              {...field}
              className="flex-1"
            />
          )}
        />
      </div>

      <Divider
        size="sm"
        orientation="vertical"
        className="hidden md:block"
        style={{ marginTop: "15px", marginBottom: "15px" }}
      />

      <div className="flex flex-col min-w-[220px] w-full md:w-auto mb-2 md:mb-0 gap-2">
        <div className="flex items-center justify-between mb-1 gap-4 md:gap-8">
          <Text styles={{ root: { fontSize: "16px", fontWeight: 600 } }}>
            Salary Per Month
          </Text>
          <Text
            styles={{
              root: { fontSize: "16px", fontWeight: 600, paddingLeft: "10px", paddingRight: "10px" },
            }}
          >
            ₹ {filters.salaryRange[0]}k - ₹ {filters.salaryRange[1]}k
          </Text>
        </div>

        <Controller
          control={control}
          name="salaryRange"
          render={({ field }) => (
            <RangeSlider
              color="black"
              size="sm"
              min={50}
              max={1000}
              step={1}
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </div>
    </div>
  );
}

export default Filters;
