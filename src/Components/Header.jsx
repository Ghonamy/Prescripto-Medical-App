import Group_Profiles from "../Assets/group_profiles.png";
import Arrow_Icon from "../Assets/arrow_icon.svg";
import Header_Image from "../Assets/header_img.png";
const Header = () => {
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20">
      <div className="bg-[var(--primary-color)] text-white rounded-lg py-8 md:py-28 px-10 md:px-20 relative">
        <div className="flex flex-col md:flex-row items-center justify-center gap-52 md:gap-0">
          <div className="w-full md:w-1/2">
            <h1 className="max-w-[500px] text-[30px] md:text-[50px] font-semibold">
              Book Appointment With Trusted Doctors
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-3 my-5">
              <img
                className="w-[119px] h-[51px]"
                src={Group_Profiles}
                alt="Group_Profiles"
              />
              <p className="text-[13px] md:text-[15px]">
                Simply browse through our extensive list of trusted doctors,
                schedule your appointment hassle-free.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-white text-[#595959] w-fit rounded-full px-4 md:px-6 py-1.5 md:py-3 cursor-pointer mt-3 md:mt-8 duration-300 hover:scale-105 text-[14px] md:text-[17px] mx-auto md:mx-0">
              <a href="#speciality">Book Appointment</a>
              <img src={Arrow_Icon} alt="Arrow_Icon" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              className="absolute bottom-0 max-w-[280px] md:max-w-[550px] mx-auto"
              src={Header_Image}
              alt="Header_Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

