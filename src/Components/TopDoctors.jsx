import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Doctor from "./Doctor";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <div className="container mx-auto py-5 px-5 md:px-10 lg:px-20">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center text-[#262626] mb-5">
          <h1 className="text-[28px] md:text-[35px] font-medium">
            Top Doctors to Book
          </h1>
          <p className="text-[13px] md:text-[15px] max-w-[330px] mt-2">
            Simply browse through our extensive list of trusted doctors.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-5">
          {doctors.slice(0, 10).map((doctor) => {
            const { _id, name, image, speciality } = doctor;
            return (
              <Doctor
                key={_id}
                name={name}
                _id={_id}
                image={image}
                speciality={speciality}
              />
            );
          })}
        </div>
        <button
          onClick={() => navigate("/doctors")}
          className="bg-[#EAEFFF] px-10 py-2 rounded-full my-10 text-[20px] text-gray-600"
        >
          More
        </button>
      </div>
    </div>
  );
};

export default TopDoctors;
