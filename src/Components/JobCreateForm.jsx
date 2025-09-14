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
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";
import { IoCalendarClearOutline } from "react-icons/io5";

function JobCreateForm({ opened, onClose }) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      size="xl"
      withCloseButton={false}
      styles={{
        content: {
          borderRadius: "16px",
          scrollbarWidth: "none",
          padding: "20px",
          fontFamily: "Satoshi, san-serif",
        },
      }}
    >
      <h2 className="text-2xl font-bold mb-8 text-center">Create New Job</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Group grow spacing="md">
          <TextInput
            label="Job Title"
            placeholder="Full Stack Developer"
            {...register("jobTitle", { required: "Job Title is required" })}
            error={errors.jobTitle && errors.jobTitle.message}
            styles={{
              input: { borderRadius: "10px", height: "48px" },
            }}
          />

          <TextInput
            label="Company Name"
            placeholder="Amazon, Microsoft, Swiggy"
            {...register("companyName", {
              required: "Company Name is required",
            })}
            error={errors.companyName && errors.companyName.message}
            styles={{
              input: { borderRadius: "10px", height: "48px" },
            }}
          />
        </Group>

        <Group grow spacing="md">
          <TextInput
            label="Location"
            placeholder="Choose Preferred Location"
            {...register("location", { required: "Location is required" })}
            error={errors.location && errors.location.message}
            styles={{
              input: { borderRadius: "10px", height: "48px" },
            }}
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
                error={errors.jobType && errors.jobType.message}
                styles={{
                  input: { borderRadius: "10px", height: "48px" },
                }}
              />
            )}
          />
        </Group>

        <Group grow spacing="md">
          <div className="flex justify-between">
            <TextInput
              label="Salary Min (₹)"
              placeholder="₹0"
              leftSection={<span className="text-[#BCBCBC]">&#8645;</span>}
              {...register("salaryMin", {
                required: "Minimum salary is required",
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Only numbers are allowed",
                },
              })}
              error={errors.salaryMin && errors.salaryMin.message}
              styles={{
                input: { borderRadius: "10px", height: "48px", width: "170px" },
              }}
            />

            <TextInput
              label="Salary Max (₹)"
              placeholder="₹12,00,000"
              leftSection={<span className="text-[#BCBCBC]">&#8645;</span>}
              {...register("salaryMax", {
                required: "Maximum salary is required",
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Only numbers are allowed",
                },
              })}
              error={errors.salaryMax && errors.salaryMax.message}
              styles={{
                input: { borderRadius: "10px", height: "48px", width: "170px" },
              }}
            />
          </div>
          <TextInput
            id="application-deadline"
            label="Application Deadline"
            type="date"
            placeholder="Select Deadline"
            rightSection={
              <IoCalendarClearOutline
                size={20}
                color="#686868"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  document
                    .getElementById("application-deadline")
                    .showPicker?.();
                }}
              />
            }
            {...register("applicationDeadline", {
              required: "Deadline is required",
            })}
            error={
              errors.applicationDeadline && errors.applicationDeadline.message
            }
            styles={{
              input: { borderRadius: "10px", height: "48px" },
            }}
          />
        </Group>

        <Textarea
          label="Job Description"
          placeholder="Please share a description to let the candidate know more about the job role"
          {...register("jobDescription", {
            required: "Job Description is required",
          })}
          error={errors.jobDescription && errors.jobDescription.message}
          minRows={6}
          resize="vertical"
          size="md"
          styles={{
            input: { borderRadius: "8px", width: "730px", height: "130px" },
          }}
        />

        <div className="flex justify-between">
          <Button
            variant="default"
            onClick={onClose}
            style={{ borderRadius: "8px" }}
          >
            Save Draft{" "}
            <MdOutlineKeyboardDoubleArrowDown className="ml-2" size={20} />
          </Button>

          <Button type="submit" color="blue" style={{ borderRadius: "8px" }}>
            Publish <MdKeyboardDoubleArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default JobCreateForm;
