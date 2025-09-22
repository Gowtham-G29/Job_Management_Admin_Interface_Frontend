import Filters from "./Filters";
import NavBar from "./NavBar";

function TopSection({ setFetchedJobs ,setRefresh }) {
  return (
    <div className="flex flex-col gap-3 mt-5 shadow-lg w-full md:items-center items-stretch">
      <NavBar setRefresh={setRefresh}/>
      <Filters setFetchedJobs={setFetchedJobs} />
    </div>
  );
}

export default TopSection;
