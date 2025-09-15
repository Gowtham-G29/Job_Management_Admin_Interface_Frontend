import { useState } from "react";
import Logo from "../assets/images/logo.png";
import JobCreateForm from "./JobCreateForm";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function NavBar() {
  const [modalOpened, setModalOpened] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleButtonClick = () => setModalOpened(true);
  const handleModalClose = () => setModalOpened(false);

  const navItems = ["Home", "Find Jobs", "Find Talents", "About Us", "Testimonial"];

  return (
    <>
      <header className="flex rounded-full items-center justify-between px-4 md:px-10 py-4 border-b border-gray-300 shadow-md relative bg-white">
        <img src={Logo} alt="logo" className="h-10 w-10" />

        <nav className="hidden md:flex items-center gap-4 font-bold">
          {navItems.map((item) => (
            <button
              key={item}
              className="w-[120px] h-[38px] rounded-[10px] px-2 py-2 hover:#FFFFFF hover:shadow-lg hover:-translate-y-0.5 transition-transform duration-200 ease-in-out flex items-center justify-center cursor-pointer text-gray-700 font-medium"
            >
              {item}
            </button>
          ))}
          <button
            onClick={handleButtonClick}
            className="group relative bg-gradient-to-tr from-[#A128FF] to-[#6100AD] rounded-full text-white px-6 py-2 overflow-hidden font-bold"
          >
            <span className="block transform transition-all duration-300 ease-in-out group-hover:-translate-y-4 group-hover:opacity-0">
              Create Jobs
            </span>
            <span className="absolute inset-0 flex items-center justify-center transform translate-y-4 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
              Login
            </span>
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-3xl text-gray-700"
          >
            {mobileMenuOpen ? <HiOutlineX size={30} /> : <HiOutlineMenu size={30}/>}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="fixed inset-0 w-full rounded-lg h-full bg-white flex flex-col items-center justify-center gap-6 z-50">
            {navItems.map((item) => (
              <button
                key={item}
                className="w-full h-[60px] px-6 py-2 hover:bg-gray-100 transition duration-200 flex items-center justify-center text-gray-700 font-medium text-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => {
                handleButtonClick();
                setMobileMenuOpen(false);
              }}
              className="w-full h-[60px] bg-gradient-to-tr from-[#A128FF] to-[#6100AD] text-white rounded-full font-bold text-lg transition hover:opacity-90"
            >
              Create Jobs
            </button>
          </div>
        )}
      </header>

      <JobCreateForm opened={modalOpened} onClose={handleModalClose} />
    </>
  );
}

export default NavBar;
