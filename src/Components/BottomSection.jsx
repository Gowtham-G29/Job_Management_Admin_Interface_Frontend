import { ScrollArea } from "@mantine/core";
import JobPostCard from "./JobPostCard";

function BottomSection() {
  return (
    <div>
      <ScrollArea h={450} scrollbarSize={2} scrollHideDelay={0}>
        <div className="flex flex-wrap gap-6 justify-center mt-10 mb-10">
          <JobPostCard />
          <JobPostCard />
          <JobPostCard />
          <JobPostCard />
          <JobPostCard />
          <JobPostCard />
          <JobPostCard />
          <JobPostCard />
        </div>
      </ScrollArea>
    </div>
  );
}

export default BottomSection;
