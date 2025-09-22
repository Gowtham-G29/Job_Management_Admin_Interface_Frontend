import { useState } from "react";
import Logo from "../assets/images/logo.png";
import JobCreateForm from "./JobCreateForm";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function NavBar({setRefresh}) {
  const [modalOpened, setModalOpened] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleButtonClick = () => setModalOpened(true);
  const handleModalClose = () => setModalOpened(false);

  const navItems = [
    "Home",
    "Find Jobs",
    "Find Talents",
    "About Us",
    "Testimonial",
  ];

  return (
    <>
      <header className="top-[21px] left-[275px] md:w-[890px] h-[80px] flex items-center justify-between px-4 md:px-10 border border-[#FCFCFC] rounded-[122px] bg-[#FFFFFF] shadow-[0_0_20px_0_rgba(127,127,127,0.15)]">
        <img src={Logo} alt="logo" className="h-10 w-10 " />
        <nav className="hidden md:flex items-center justify-center font-bold">
          <div className="flex items-center gap-4">
            <button className="h-[38px] rounded-[10px] px-4 py-2 hover:bg-white hover:shadow-[0_0_14px_0_rgba(198,191,191,0.25)] hover:-translate-y-0.5 transition-transform duration-200 ease-in-out flex items-center justify-center cursor-pointer text-gray-700 font-medium">
              Home
            </button>

            <button className="h-[38px] rounded-[10px] px-4 py-2 hover:bg-white hover:shadow-[0_0_14px_0_rgba(198,191,191,0.25)] hover:-translate-y-0.5 transition-transform duration-200 ease-in-out flex items-center justify-center cursor-pointer text-gray-700 font-medium">
              Find Jobs
            </button>

            <button className="h-[38px] rounded-[10px] px-4 py-2 hover:bg-white hover:shadow-[0_0_14px_0_rgba(198,191,191,0.25)] hover:-translate-y-0.5 transition-transform duration-200 ease-in-out flex items-center justify-center cursor-pointer text-gray-700 font-medium">
              Find Talents
            </button>

            <button className="h-[38px] rounded-[10px] px-4 py-2 hover:bg-white hover:shadow-[0_0_14px_0_rgba(198,191,191,0.25)] hover:-translate-y-0.5 transition-transform duration-200 ease-in-out flex items-center justify-center cursor-pointer text-gray-700 font-medium">
              About Us
            </button>

            <button className="h-[38px] rounded-[10px] px-4 py-2 hover:bg-white hover:shadow-[0_0_14px_0_rgba(198,191,191,0.25)] hover:-translate-y-0.5 transition-transform duration-200 ease-in-out flex items-center justify-center cursor-pointer text-gray-700 font-medium">
              Testimonials
            </button>
          </div>
        </nav>
        <button
          onClick={handleButtonClick}
          className="group relative w-[123px] h-[38px] hidden md:flex items-center justify-center gap-[10px] bg-gradient-to-tr from-[#A128FF] to-[#6100AD] rounded-[30px] text-white overflow-hidden"
        >
          <span className="block font-bold transform transition-all duration-300 ease-in-out group-hover:-translate-y-4 group-hover:opacity-0">
            Create Jobs
          </span>

          <span className="absolute font-bold inset-0 flex items-center justify-center transform translate-y-4 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
            Login
          </span>
        </button>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {mobileMenuOpen ? (
              <HiOutlineX size={30} />
            ) : (
              <HiOutlineMenu size={30} />
            )}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white flex flex-col items-center p-6 gap-6 z-50">
            <div className="w-full flex justify-end">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 focus:outline-none"
              >
                <HiOutlineX size={30} />
              </button>
            </div>

            {navItems.map((item) => (
              <button
                key={item}
                className="w-full max-w-xs h-12 px-4 py-2 bg-gray-100 rounded-lg text-gray-700 font-medium text-lg text-center transition hover:bg-gray-200"
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
              className="w-full max-w-xs h-12 bg-gradient-to-tr from-[#A128FF] to-[#6100AD] text-white rounded-lg font-bold text-lg transition hover:opacity-90"
            >
              Create Jobs
            </button>
          </div>
        )}
      </header>

      <JobCreateForm opened={modalOpened} onClose={handleModalClose} setRefresh={setRefresh} />
    </>
  );
}

export default NavBar;
