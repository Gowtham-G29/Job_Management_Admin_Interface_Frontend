import { useState } from "react";
import Logo from "../assets/images/logo.png";
import JobCreateForm from "./JobCreateForm";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function NavBar() {
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
      <header className="flex items-center justify-between px-4 md:px-10 py-4 border-b border-gray-300 shadow-md relative bg-white rounded-full">
        <img src={Logo} alt="logo" className="h-10 w-10" />

        <nav className="hidden md:flex items-center gap-4 font-bold">
          {navItems.map((item) => (
            <button
              key={item}
              className="w-[120px] h-[38px] rounded-[10px] px-2 py-2 hover:bg-white hover:shadow-lg hover:-translate-y-0.5 transition-transform duration-200 ease-in-out flex items-center justify-center cursor-pointer text-gray-700 font-medium"
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

      <JobCreateForm opened={modalOpened} onClose={handleModalClose} />
    </>
  );
}

export default NavBar;
