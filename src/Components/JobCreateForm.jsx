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
import { createNewJobPost } from "../Api";

function JobCreateForm({ opened, onClose }) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);

    try {
      await createNewJobPost(data);
    } catch (error) {
      console.error("Failed to create job post:", error);
    }

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
      <h2
        className="text-[24px] font-bold mb-8 text-center"
        style={{ fontWeight: 700 }}
      >
        Create New Job
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Group grow spacing="md">
          <TextInput
            label="Job Title"
            placeholder="Full Stack Developer"
            {...register("jobTitle", { required: "Job Title is required" })}
            error={errors.jobTitle && errors.jobTitle.message}
            styles={{
              input: {
                borderRadius: "10px",
                height: "48px",
                fontFamily: "Satoshi, san-serif",
              },
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
              input: {
                borderRadius: "10px",
                height: "48px",
                fontFamily: "Satoshi, san-serif",
              },
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
              input: {
                borderRadius: "10px",
                height: "48px",
                fontFamily: "Satoshi, san-serif",
              },
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
                  input: {
                    borderRadius: "10px",
                    height: "48px",
                    fontFamily: "Satoshi, san-serif",
                  },
                }}
              />
            )}
          />
        </Group>

        <Group grow spacing="md">
          <div className="flex justify-between">
            <Controller
              name="minSalary"
              control={control}
              rules={{
                required: "Minimum salary is required",
                min: { value: 0, message: "Salary must be positive" },
              }}
              render={({ field }) => (
                <NumberInput
                  label="Salary Min (₹)"
                  placeholder="₹0"
                  min={0}
                  step={1000}
                  value={field.value}
                  onChange={field.onChange}
                
                  hideControls
                  error={errors.salaryMin && errors.salaryMin.message}
                  styles={{
                    input: {
                      borderRadius: "10px",
                      height: "48px",
                      width: "170px",
                      fontFamily: "Satoshi, san-serif",
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
                  label="Salary Max (₹)"
                  placeholder="₹12,00,000"
                  min={0}
                  step={1000}
                  value={field.value}
                  onChange={field.onChange}
                  hideControls
                  error={errors.salaryMax && errors.salaryMax.message}
                  styles={{
                    input: {
                      borderRadius: "10px",
                      height: "48px",
                      width: "170px",
                      fontFamily: "Satoshi, san-serif",
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
                styles={{ input: { borderRadius: "10px", height: "48px" } }}
              />
            )}
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
            input: {
              borderRadius: "8px",
              width: "730px",
              height: "130px",
              fontFamily: "Satoshi, san-serif",
            },
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
