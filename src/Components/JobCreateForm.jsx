import { Controller, useForm } from "react-hook-form";
import {
  Modal,
  TextInput,
  Select,
  NumberInput,
  Textarea,
  Button,
  Group,
} from "@mantine/core";
import {
  MdKeyboardDoubleArrowRight,
  MdOutlineKeyboardDoubleArrowDown,
} from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";
import { createNewJobPost } from "../Api";

function JobCreateForm({ opened, onClose, setRefresh }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await createNewJobPost(data);
      setRefresh((old) => old + 1);
    } catch (error) {
      console.error("Error creating job post:", error);
    }
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      size="xxl"
      withCloseButton={false}
      centered={false}
      styles={{
        content: {
          borderRadius: "16px",
          padding: "20px",
          fontFamily: "Satoshi, sans-serif",
          width: "848px",
          top: "117px",
          bottom: "0px",
          left: "269px",
          height: "auto",
          overflowY: "auto",
          scrollbarWidth: "none",
        },
      }}
      classNames={{
        content: "hide-scrollbar",
      }}
    >
      <h2 className="text-[24px] font-bold mb-8 text-center top-[30px] h-[32px] ">
        Create New Job
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Group grow spacing="md" className="flex flex-col md:flex-col">
          <Controller
            name="jobTitle"
            control={control}
            rules={{ required: "Job Title is required" }}
            render={({ field }) => (
              <TextInput
                label="Job Title"
                placeholder="Full Stack Developer"
                {...field}
                error={errors.jobTitle?.message}
                styles={{
                  input: {
                    borderRadius: "10px",
                    height: "58px",
                    width: "100%", 
                    maxWidth: "376px",
                    border: "1px solid #BCBCBC",
                    fontFamily: "Satoshi, sans-serif",
                    marginTop: "5px",
                  },
                  label: {
                    width: "100%",
                    maxWidth: "376px",
                    height: "27px",
                    fontSize: "20px",
                    fontWeight: 500,
                  },
                }}
              />
            )}
          />
          <Controller
            name="companyName"
            control={control}
            rules={{ required: "Company Name is required" }}
            render={({ field }) => (
              <TextInput
                label="Company Name"
                placeholder="Amazon, Microsoft, Swiggy"
                {...field}
                error={errors.companyName?.message}
                styles={{
                  input: {
                    borderRadius: "10px",
                    height: "58px",
                    width: "100%",
                    maxWidth: "376px",
                    border: "1px solid #BCBCBC",
                    fontFamily: "Satoshi, sans-serif",
                    marginTop: "5px",
                  },
                  label: {
                    width: "100%",
                    maxWidth: "376px",
                    height: "27px",
                    fontSize: "20px",
                    fontWeight: 500,
                  },
                }}
              />
            )}
          />
        </Group>

        <Group grow spacing="md" className="flex flex-col md:flex-row">
          <Controller
            name="location"
            control={control}
            rules={{ required: "Location is required" }}
            render={({ field }) => (
              <TextInput
                label="Location"
                placeholder="Choose Preferred Location"
                {...field}
                error={errors.location?.message}
                styles={{
                  input: {
                    borderRadius: "10px",
                    height: "58px",
                    width: "100%",
                    maxWidth: "376px",
                    border: "1px solid #BCBCBC",
                    fontFamily: "Satoshi, sans-serif",
                    marginTop: "5px",
                  },
                  label: {
                    width: "100%",
                    maxWidth: "376px",
                    height: "27px",
                    fontSize: "20px",
                    fontWeight: 500,
                  },
                }}
              />
            )}
          />
          <Controller
            name="jobType"
            control={control}
            rules={{ required: "Job Type is required" }}
            render={({ field }) => (
              <Select
                label="Job Type"
                placeholder="Full Time"
                withCheckIcon={false}
                rightSection={<IoChevronDown size={20} color="#686868" />}
                data={["Internship", "Full Time", "Part Time", "Contract"]}
                {...field}
                error={errors.jobType?.message}
                styles={{
                  input: {
                    borderRadius: "10px",
                    height: "58px",
                    width: "100%",
                    maxWidth: "376px",
                    border: "1px solid #BCBCBC",
                    fontFamily: "Satoshi, sans-serif",
                    marginTop: "5px",
                  },
                  label: {
                    width: "100%",
                    maxWidth: "376px",
                    height: "27px",
                    fontSize: "20px",
                    fontWeight: 500,
                  },
                }}
              />
            )}
          />
        </Group>

        <Group grow spacing="md" className="flex flex-col md:flex-row">
          <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-2 w-full">
            <Controller
              name="minSalary"
              control={control}
              rules={{
                required: "Minimum salary is required",
                min: { value: 0, message: "Salary must be positive" },
              }}
              render={({ field }) => (
                <NumberInput
                  label="Salary Range"
                  placeholder="₹0"
                  min={0}
                  step={1000}
                  value={field.value}
                  onChange={field.onChange}
                  hideControls
                  error={errors.minSalary?.message}
                  styles={{
                    input: {
                      borderRadius: "10px",
                      height: "58px",
                      width: "100%",
                      maxWidth: "183px",
                      border: "1px solid #BCBCBC",
                      fontFamily: "Satoshi, sans-serif",
                      marginTop: "5px",
                    },
                    label: {
                      width: "100%",
                      maxWidth: "183px",
                      height: "27px",
                      fontSize: "20px",
                      fontWeight: 500,
                    },
                  }}
                  leftSection={
                    <span style={{ fontSize: "14px", color: "#BCBCBC" }}>
                      &#8645;
                    </span>
                  }
                  leftSectionWidth={30}
                />
              )}
            />
            <Controller
              name="maxSalary"
              control={control}
              rules={{
                required: "Maximum salary is required",
                min: { value: 0, message: "Salary must be positive" },
              }}
              render={({ field }) => (
                <NumberInput
                  label=" "
                  placeholder="₹12,00,000"
                  min={0}
                  step={1000}
                  value={field.value}
                  onChange={field.onChange}
                  hideControls
                  error={errors.maxSalary?.message}
                  styles={{
                    input: {
                      borderRadius: "10px",
                      height: "58px",
                      width: "100%",
                      maxWidth: "183px",
                      border: "1px solid #BCBCBC",
                      fontFamily: "Satoshi, sans-serif",
                      marginTop: "5px",
                    },
                    label: {
                      width: "100%",
                      maxWidth: "183px",
                      height: "22px",
                      fontSize: "20px",
                      fontWeight: 500,
                    },
                  }}
                  leftSection={
                    <span style={{ fontSize: "14px", color: "#BCBCBC" }}>
                      &#8645;
                    </span>
                  }
                  leftSectionWidth={30}
                />
              )}
            />
          </div>

          <Controller
            name="applicationDeadLine"
            control={control}
            rules={{ required: "Deadline is required" }}
            render={({ field }) => (
              <TextInput
                type="date"
                label="Application Deadline"
                placeholder="Select Deadline"
                value={field.value || ""}
                onChange={(e) => field.onChange(e.target.value)}
                error={errors.applicationDeadLine?.message}
                styles={{
                  input: {
                    borderRadius: "10px",
                    height: "58px",
                    width: "100%",
                    maxWidth: "376px",
                    border: "1px solid #BCBCBC",
                    fontFamily: "Satoshi, sans-serif",
                    marginTop: "5px",
                  },
                  label: {
                    width: "100%",
                    maxWidth: "376px",
                    height: "27px",
                    fontSize: "20px",
                    fontWeight: 500,
                  },
                }}
              />
            )}
          />
        </Group>

        <Controller
          name="jobDescription"
          control={control}
          rules={{ required: "Job Description is required" }}
          render={({ field }) => (
            <Textarea
              label="Job Description"
              placeholder="Please share a description to let the candidate know more about the job role"
              {...field}
              error={errors.jobDescription?.message}
              minRows={6}
              resize="vertical"
              size="md"
              styles={{
                input: {
                  borderRadius: "10px",
                  height: "169px",
                  width: "100%",
                  maxWidth: "768px",
                  border: "1px solid #BCBCBC",
                  fontFamily: "Satoshi, sans-serif",
                  marginTop: "5px",
                },
                label: {
                  width: "100%",
                  maxWidth: "376px",
                  height: "27px",
                  fontSize: "20px",
                  fontWeight: 500,
                },
              }}
            />
          )}
        />

        <div className="flex flex-col md:flex-row justify-between gap-4 w-full">
          <Button
            variant="default"
            onClick={onClose}
            style={{
              borderRadius: "10px",
              border: "2px solid #222222",
              backgroundColor: "#FFFFFF",
              color: "#222222",
              height: "59px",
              width: "232px", // ✅ keeps desktop width
            }}
            className="flex items-center justify-center gap-2 w-full md:w-[232px] mt-4"
          >
            <span className="w-[94px] h-[27px] text-[20px] text-[#222222] font-medium">
              Save Draft
            </span>
            <MdOutlineKeyboardDoubleArrowDown className="mb-1" size={20} />
          </Button>

          <Button
            type="submit"
            color="#00AAFF"
            style={{
              borderRadius: "10px",
              height: "59px",
              width: "232px", 
            }}
            className="flex items-center justify-center gap-3 w-full md:w-[232px] mt-4"
          >
            <span className="text-[20px] text-white font-medium">Publish</span>
            <MdKeyboardDoubleArrowRight className="mt-0.5" size={22} />
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default JobCreateForm;
