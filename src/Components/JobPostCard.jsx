import { Avatar, Card } from "@mantine/core";
import Amazon from "../assets/images/amazon.png";
import { GoPersonAdd } from "react-icons/go";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GoStack } from "react-icons/go";

function JobPostCard({ job }) {
  return (
    <div className="shadow-lg drop-shadow-[0_0_14px_0_rgba(211,211,211,0.15)]  bg-[#FFFFFF]">
      <Card padding="lg" radius="md" className="w-[316px] h-[360px] ">
        <div className="flex justify-between mb-3">
          <div className="shadow-sm rounded-[13.18px] bg-[linear-gradient(180deg,#FEFEFD_0%,#F1F1F1_100%)]">
            <div className="w-[83.46px] h-[82px] flex items-center justify-center">
              <Avatar
                color="cyan"
                radius="xl"
                variant="filled"
                style={{
                  height: "65.89px",
                  width: "65.89px",
                }}
              >
                <span className="text-2xl">
                  {" "}
                  {job.companyName
                    ? job.companyName.charAt(0).toUpperCase()
                    : "?"}
                </span>
              </Avatar>
            </div>
          </div>

          <span
            className="inline-flex w-max-md h-[33px] p-2 rounded-[10px] bg-[#B0D9FF] text-sm font-medium text-center items-center justify-center"
            style={{ fontSize: "14px", fontWeight: "500", color: "#000000" }}
          >
            {(() => {
              const created = new Date(job.createdDate);
              const now = new Date();
              const diffMs = now - created;

              const diffMins = Math.floor(diffMs / 1000 / 60);
              const diffHours = Math.floor(diffMs / 1000 / 60 / 60);
              const diffDays = Math.floor(diffMs / 1000 / 60 / 60 / 24);

              if (diffMins < 60)
                return `${diffMins} min${diffMins !== 1 ? "s" : ""} ago`;
              if (diffHours < 24)
                return `${diffHours} hr${diffHours !== 1 ? "s" : ""} ago`;
              return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
            })()}
          </span>
        </div>

        <p
          className="mb-3 font-bold "
          style={{ fontSize: "20px", fontWeight: "700px" }}
        >
          {job.jobTitle}
        </p>

        <div className="flex items-center justify-between mb-3 font-medium w-full max-w-[264px]">
          <div className="flex items-center space-x-1">
            <GoPersonAdd size={20} color="#5A5A5A" />
            <p className="text-[16px] font-medium text-[#5A5A5A]">
              1-3 Yrs Exp
            </p>
          </div>

          <div className="flex items-center space-x-1">
            <HiOutlineBuildingOffice2 size={20} color="#5A5A5A" />
            <p className="text-[14px] font-medium text-[#5A5A5A]">
              {job.jobType}
            </p>
          </div>

          <div className="flex items-center space-x-1">
            <GoStack size={20} color="#5A5A5A" />
            <p className="text-[14px] font-medium text-[#5A5A5A]">
              {job.maxSalary
                ? `${Math.round(job.maxSalary / 100000)} LPA`
                : "N/A"}
            </p>
          </div>
        </div>

        <div className=" w-[300px] h-[76px] right-[9px] overflow-hidden">
          <p
            className="text-[12px] text-[#555555] font-medium line-clamp-4 wrap-break-word"
            style={{
              fontWeight: "500",
            }}
          >
            {job.jobDescription}
          </p>
        </div>

        <button className="bg-[#00AAFF] w-full h-[45px] rounded-[10px] text-white mt-5 hover:bg-[#008FCC]">
          <p className="font-medium">Apply Now</p>
        </button>
      </Card>
    </div>
  );
}
export default JobPostCard;
