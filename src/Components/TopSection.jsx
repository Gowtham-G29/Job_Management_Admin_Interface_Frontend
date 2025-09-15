import Filters from "./Filters"
import NavBar from "./NavBar"

function TopSection() {
    return (
        <div className="flex flex-col gap-3 mt-5 items-center justify-center shadow-lg">
            <NavBar/>
            <Filters/>
        </div>
    )
}

export default TopSection
