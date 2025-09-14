import { useState } from "react";
import Logo from "../assets/images/logo.png";
import JobCreateForm from "./JobCreateForm";

function NavBar() {
  const [modalOpened, setModalOpened] = useState(false);

  const handleButtonClick = () => {
    setModalOpened(true);
  };

  const handleModalClose = () => {
    setModalOpened(false);
  };

  const navItems = [
    "Home",
    "Find Jobs",
    "Find Talents",
    "About Us",
    "Testimonial",
  ];

  return (
    <>
      <header className="flex items-center justify-between px-10 py-4 border-b border-gray-300 shadow-md rounded-full gap-3">
        <img src={Logo} alt="logo" className="h-10 w-10" />

        <nav className="flex items-center gap-4  font-bold">
          {navItems.map((item) => (
            <button
              key={item}
              className="
                w-[120px] h-[38px] 
                rounded-[10px] 
                px-2 py-2 
                hover:#FFFFFF
                hover:shadow-lg 
                hover:-translate-y-0.5 
                transition-transform duration-200 ease-in-out 
                flex items-center justify-center
                cursor-pointer
                text-gray-700
                font-medium
              "
            >
              {item}
            </button>
          ))}
        </nav>

        <button
          className="
            group
            relative
            bg-gradient-to-tr from-[#A128FF] to-[#6100AD]
            rounded-full
            text-white
            px-6 py-2
            overflow-hidden
            font-bold
          "
          onClick={handleButtonClick}
        >
          <span className="
            block
            transform transition-all duration-300 ease-in-out
            group-hover:-translate-y-4 group-hover:opacity-0
          ">
            Create Jobs
          </span>

          <span className="
            absolute inset-0 flex items-center justify-center
            transform translate-y-4 opacity-0 transition-all duration-300 ease-in-out
            group-hover:translate-y-0 group-hover:opacity-100
          ">
            Login
          </span>
        </button>
      </header>

      <JobCreateForm opened={modalOpened} onClose={handleModalClose} />
    </>
  );
}

export default NavBar;
