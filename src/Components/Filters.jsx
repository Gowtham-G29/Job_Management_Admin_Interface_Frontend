import {
  Box,
  Divider,
  RangeSlider,
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
  const [range, setRange] = useState([20, 60]);

  return (
    <div className="flex items-center justify-around px-6 py-4 w-full mx-auto gap-6">
      <div className="flex items-center min-w-[250px] gap-2">
        <IoIosSearch className="w-[25px] h-[25px]" />
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
        <CiLocationOn className="w-[25px] h-[25px]" />

        <TextInput
          variant="unstyled"
          size="lg"
          radius="md"
          placeholder="Preferred Location"
          classNames={{ input: "text-base" }}
          fullWidth
        />
      </div>

      <Divider size="sm" orientation="vertical" />

      <div className="flex items-center justify-center gap-3 min-w-[180px]">
        <MdOutlineRecordVoiceOver className="w-[25px] h-[25px] text-gray-500" />
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

      <div className="flex flex-col min-w-[220px] mb-5">
        <Box mx="auto" maw={400} className="w-full">
          <div className="flex justify-between mb-5">
            <p className="font-semibold text-md">Salary Per Month</p>
            <p className="font-semibold text-sm">
              ₹ {range[0]}k - ₹ {range[1]}k
            </p>
          </div>

          <RangeSlider
            color="black"
            size="sm"
            value={range}
            onChange={setRange}
            min={50}
            max={1000}
            step={1}
          />
        </Box>
      </div>
    </div>
  );
}

export default Filters;
