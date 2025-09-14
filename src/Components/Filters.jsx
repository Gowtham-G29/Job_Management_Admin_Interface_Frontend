import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Divider,
  RangeSlider,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import { useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";
import axios from "axios"; // Make sure axios is installed

function Filters() {
  const { control, register, watch } = useForm({
    defaultValues: {
      search: "",
      location: "",
      jobType: "",
      salaryRange: [100, 500],
    },
  });

  const filters = watch();

  useEffect(() => {
    const fetchFilteredJobs = async () => {
      try {
        const response = await axios.get("/api/jobs", {
          params: {
            search: filters.search,
            location: filters.location,
            jobType: filters.jobType,
            minSalary: filters.salaryRange[0],
            maxSalary: filters.salaryRange[1],
          },
        });

        console.log("API Response:", response.data);

        // You can store the results in local state if needed
        // setJobs(response.data);
      } catch (error) {
        console.error("Failed to fetch filtered jobs:", error);
      }
    };

    fetchFilteredJobs();
  }, [filters]);

  return (
    <div
      className="flex items-center justify-around px-6 py-2 w-full mx-auto gap-6"
      style={{ fontFamily: "Satoshi, sans-serif" }}
    >
      <div className="flex items-center min-w-[250px] gap-2 text-sm">
        <IoIosSearch className="w-[25px] h-[25px]" />
        <TextInput
          variant="unstyled"
          size="lg"
          radius="md"
          placeholder="Search By Job Title, Role"
          fullWidth
          {...register("search")}
          styles={{
            input: { height: "32px", fontSize: "16px" },
          }}
        />
      </div>

      <Divider
        size="sm"
        orientation="vertical"
        style={{ marginTop: "15px", marginBottom: "15px" }}
      />

      <div className="flex items-center min-w-[200px] gap-2">
        <CiLocationOn className="w-[25px] h-[25px]" />
        <TextInput
          variant="unstyled"
          size="lg"
          radius="md"
          placeholder="Preferred Location"
          fullWidth
          {...register("location")}
          styles={{
            input: { height: "32px", fontSize: "16px" },
          }}
        />
      </div>

      <Divider
        size="sm"
        orientation="vertical"
        style={{ marginTop: "15px", marginBottom: "15px" }}
      />

      <div className="flex items-center justify-center gap-3 ">
        <MdOutlineRecordVoiceOver className="w-[25px] h-[25px] text-gray-500" />
        <Controller
          control={control}
          name="jobType"
          render={({ field }) => (
            <Select
              variant="unstyled"
              withCheckIcon={false}
              data={["Internship", "Full-time", "Part-time", "Contract"]}
              placeholder="Job Type"
              rightSection={<IoChevronDown size={20} color="#686868" />}
              rightSectionWidth={50}
              styles={{
                input: { height: "32px", fontSize: "16px" },
              }}
              {...field}
            />
          )}
        />
      </div>

      <Divider
        size="sm"
        orientation="vertical"
        style={{ marginTop: "15px", marginBottom: "15px" }}
      />

      <div className="flex flex-col min-w-[220px] mb-5 gap-2" >
        <div className="flex items-center justify-between mb-1 gap-8">
          <Text
            styles={{
              root: { fontSize: "16px", fontWeight: 600 },
            }}
          >
            Salary Per Month
          </Text>
          <Text
            styles={{
              root: { fontSize: "16px", fontWeight: 600,paddingLeft:"10px" ,paddingRight:"10px"},
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
