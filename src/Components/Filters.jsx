import {
  Box,
  Divider,
  Select,
  Slider,
  Text,
  TextInput,
  Typography,
} from "@mantine/core";
import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";

function Filters() {
  const [value, setValue] = useState(50);
  const [endValue, setEndValue] = useState(50);

  return (
    <div className="flex items-center justify-around px-6 py-4  w-full mx-auto gap-6">
      <div className="flex items-center min-w-[250px] gap-2">
        <IoIosSearch />
        <TextInput
          variant="unstyled"
          size="lg"
          radius="md"
          placeholder="Search By Job Title, Role"
          classNames={{ input: "text-base" }}
          fullWidth
        />
      </div>

      <Divider size="sm" orientation="vertical" />

      <div className="flex items-center min-w-[200px] gap-2">
        <CiLocationOn />

        <TextInput
          variant="unstyled"
          size="lg"
          radius="md"
          placeholder="Location"
          classNames={{ input: "text-base" }}
          fullWidth
        />
      </div>

      <Divider size="sm" orientation="vertical" />

      <div className="flex items-center justify-center gap-3 min-w-[180px]">
        <MdOutlineRecordVoiceOver size={20}  color="#686868" />
        <Select
          variant="unstyled"
          checkIconPosition="right"
          data={["Internship", "Full-time", "Part-time", "Contract"]}
          placeholder="Job Type"
          defaultValue="React"
          rightSection={<IoChevronDown size={20} color="#686868" />}
          rightSectionWidth={30}
          sx={{ minWidth: 120 }}
        />
      </div>

      <Divider size="sm" orientation="vertical" />

      <div className="flex flex-col min-w-[220px]">
        <Box mx="auto" maw={400} className="w-full">
          <div className="flex justify-between mb-1">
            <p className="font-semibold text-sm" >
              Salary per month
            </p>
            <p className="font-semibold text-sm">
                
              ₹ {value}k - ₹ {endValue}k
            </p>
          </div>

          <Slider
            color="dark"
            value={value}
            onChange={setValue}
            onChangeEnd={setEndValue}
            size="sm"
            className="w-full"
          />
        </Box>
      </div>
    </div>
  );
}

export default Filters;
