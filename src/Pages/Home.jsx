import { useState } from "react";
import BottomSection from "../Components/BottomSection";
import TopSection from "../Components/TopSection";

function Home() {
  const [fetchedJobs, setFetchedJobs] = useState([]);
  const [refresh,setRefresh]=useState(0);
  return (
    <div>
      <TopSection setFetchedJobs={setFetchedJobs} setRefresh={setRefresh} />
      <BottomSection fetchedJobs={fetchedJobs} refresh={refresh} />
    </div>
  );
}

export default Home;
