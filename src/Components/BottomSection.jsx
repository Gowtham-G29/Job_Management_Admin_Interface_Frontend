import { ScrollArea, Text, Center } from "@mantine/core";
import JobPostCard from "./JobPostCard";
import { fetchAllJobPosts } from "../Api";
import { useEffect, useState } from "react";

function BottomSection({ fetchedJobs, refresh }) {
  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllJobs = async () => {
      setLoading(true);
      try {
        const jobs = await fetchAllJobPosts();
        setAllJobs(jobs || []);
      } catch (error) {
        console.error("Failed to fetch all jobs:", error);
        setAllJobs([]);
      } finally {
        setLoading(false);
      }
    };

    getAllJobs();
  }, [refresh]);

  if (typeof fetchedJobs === "string") {
    return (
      <div
        style={{
          width: "100%",
          height: "450px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text size="lg" weight={600} align="center" color="gray">
          No job posts available.
        </Text>
      </div>
    );
  }

  const displayJobs =
    fetchedJobs && fetchedJobs.length > 0
      ? fetchedJobs
      : allJobs && allJobs.length > 0
      ? allJobs
      : [];

  const showNoJobsMessage =
    !fetchedJobs || fetchedJobs.length === 0 || allJobs.length === 0;

  return (
    <div>
      <ScrollArea h={450} scrollbarSize={2} scrollHideDelay={0}>
        {loading || (showNoJobsMessage && displayJobs.length === 0) ? (
          <div
            style={{
              width: "100%",
              height: "450px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text size="lg" weight={600} align="center" color="gray">
              {loading ? "Loading jobs..." : "No job posts available."}
            </Text>
          </div>
        ) : (
          <div className="flex flex-wrap gap-6 justify-center mt-10 mb-10">
            {[...displayJobs].reverse().map((job) => (
              <JobPostCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </ScrollArea>
    </div>
  );
}

export default BottomSection;
