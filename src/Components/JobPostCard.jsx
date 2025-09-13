import { Card } from "@mantine/core";
import Amazon from "../assets/images/amazon.png";
import { GoPersonAdd } from "react-icons/go";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GoStack } from "react-icons/go";

function JobPostCard() {
  return (
    <div className="shadow-lg ">
      <Card padding="lg" radius="md" className="w-[316px] h-[360px] ">
        <div className="flex justify-between mb-3">
          <div className="shadow-md">
            <Card className="w-[83.46px] h-[82px] rounded-[20px]  flex items-center justify-center">
              <img
                src={Amazon}
                alt="Thumbnail"
                className="w-[65px] h-[65px] "
              />
            </Card>
          </div>

          <span className=" inline-flex w-[75px] h-[33px]  rounded-[10px] bg-[#B0D9FF] text-sm font-semibold text-center items-center justify-center">
            24hrs ago
          </span>
        </div>

        <p className="mb-5 font-bold text-xl">Frontend Developer</p>

        <div className="flex items-center justify-between gap-2 mb-3 font-semibold text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <GoPersonAdd size={20} />
            <p>1-3 Yrs Exp</p>
          </div>
          <div className="flex items-center gap-1">
            <HiOutlineBuildingOffice2 size={20} />
            <p>Onsite</p>
          </div>
          <div className="flex items-center gap-1">
            <GoStack size={20} />
            <p>12LPA</p>
          </div>
        </div>
        <div className=" max-w-md h-auto right-[9px] overflow-hidden">
          <p className="text-[13px] text-[#555555] font-medium line-clamp-4 wrap-break-word">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
            excepturi temporibus fugit laudantium dolorem corporis, consequatur
            perferendis, aut ratione quas eos commodi incidunt hic adipisci iure
            accusamus. Ducimus, tempore suscipit.
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
