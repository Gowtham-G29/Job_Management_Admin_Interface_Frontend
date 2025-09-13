import Filters from "../Components/Filters"
import NavBar from "../Components/NavBar"

function TopSection() {
    return (
        <div className="flex flex-col gap-5 mt-10 items-center justify-center shadow-lg">
            <NavBar/>
            <Filters/>
        </div>
    )
}

export default TopSection
