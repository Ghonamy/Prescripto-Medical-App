import { useNavigate } from "react-router-dom";
import Banner_Image from "../Assets/appointment_img.png";
const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-10 px-5 md:px-10 lg:px-20">
      <div className="bg-[var(--primary-color)] rounded-xl py-8 md:py-0 px-8 md:px-18 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-[30px] md:text-[50px] font-semibold">Book Appointment</h1>
            <h1 className="text-[30px] md:text-[50px] font-semibold">
              With 100+ Trusted Doctors
            </h1>
            <button
              onClick={() => navigate("/SignUp")}
              className="text-[#595959] bg-[#fff] rounded-full px-6 py-3 mt-8"
            >
              Create Account
            </button>
          </div>
          <div>
            <img
              className="hidden md:block max-w-[400px]"
              src={Banner_Image}
              alt="Banner_Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
