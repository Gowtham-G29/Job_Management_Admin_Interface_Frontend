import { useForm, Controller } from "react-hook-form";
import { Divider, RangeSlider, Select, Text, TextInput } from "@mantine/core";
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
      salaryRange: [50, 80], // default
    },
  });

  const filters = watch();
  const initialRender = useRef(true);
  const prevFilters = useRef(filters);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      prevFilters.current = filters;
      return;
    }

    const filtersChanged = Object.keys(filters).some((key) => {
      const currentValue = filters[key];
      const prevValue = prevFilters.current[key];

      if (Array.isArray(currentValue) && Array.isArray(prevValue)) {
        return (
          currentValue[0] !== prevValue[0] || currentValue[1] !== prevValue[1]
        );
      }
      return currentValue !== prevValue;
    });

    if (!filtersChanged) return;

    const getJobs = async () => {
      let activeFilters = {};

      if (filters.jobTitle.trim() !== "") {
        activeFilters.jobTitle = filters.jobTitle;
      }
      if (filters.location.trim() !== "") {
        activeFilters.location = filters.location;
      }
      if (filters.jobType !== "") {
        activeFilters.jobType = filters.jobType;
      }

      if (
        filters.salaryRange[0] !== 50 ||
        filters.salaryRange[1] !== 80
      ) {
        activeFilters.minSalary = filters.salaryRange[0] * 1000;
        activeFilters.maxSalary = filters.salaryRange[1] * 1000;
      }

      if (Object.keys(activeFilters).length > 0) {
        console.log(activeFilters)
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
    prevFilters.current = filters;
  }, [filters]);

  return (
    <div
      className="flex flex-col md:flex-row items-start md:items-center justify-around px-4 md:px-6 py-4 w-full mx-auto gap-4 md:gap-6"
      style={{ fontFamily: "Satoshi, sans-serif" }}
    >
      <div className="flex items-center min-w-[250px] gap-2 text-sm w-full md:w-auto">
        <IoIosSearch className="w-[25px] h-[25px] text-[#686868]" />
        <TextInput
          variant="unstyled"
          size="lg"
          radius="md"
          placeholder="Search By Job Title, Role"
          {...register("jobTitle")}
          styles={{
            input: {
              height: "32px",
              fontSize: "16px",
              fontFamily: "satoshi, san-serif",
            },
          }}
          className="flex-1 font-medium"
        />
      </div>

      <Divider
        size="sm"
        orientation="vertical"
        className="hidden md:block"
        style={{ marginTop: "15px", marginBottom: "15px" }}
      />

      <div className="flex items-center min-w-[200px] gap-2 w-full md:w-auto">
        <CiLocationOn className="w-[25px] h-[25px] text-[#686868]" />
        <TextInput
          variant="unstyled"
          size="lg"
          radius="md"
          placeholder="Preferred Location"
          {...register("location")}
          styles={{
            input: {
              height: "32px",
              fontSize: "16px",
              fontFamily: "satoshi, san-serif",
            },
          }}
          className="flex-1 font-medium"
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
              rightSection={<IoChevronDown className="w-[25px] h-[25px] text-[#686868]"/>}
              rightSectionWidth={50}
              styles={{
                input: {
                  height: "32px",
                  fontSize: "16px",
                  fontFamily: "satoshi, san-serif",
                },
              }}
              {...field}
              className="flex-1 font-medium"
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
          <div className="font-semibold text-[16px]">Salary Per Month</div>
          <Text
            styles={{
              root: {
                fontSize: "16px",
                fontWeight: 600,
                paddingLeft: "10px",
                paddingRight: "10px",
              },
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
              size="2px"
              thumbSize={13}
              min={50}
              max={120}
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
