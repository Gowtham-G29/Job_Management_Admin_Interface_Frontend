import { useState } from "react";
import BottomSection from "../Components/BottomSection";
import TopSection from "../Components/TopSection";

function Home() {
  const [fetchedJobs, setFetchedJobs] = useState([]);
  return (
    <div>
      <TopSection setFetchedJobs={setFetchedJobs} />
      <BottomSection fetchedJobs={fetchedJobs} />
    </div>
  );
}

export default Home;
