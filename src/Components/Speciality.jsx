import { specialityData } from "../Assets/Assets";
import { Link } from "react-router-dom";
const Speciality = () => {
  return (
    <div
      id="speciality"
      className="container mx-auto py-10 px-5 md:px-10 lg:px-20"
    >
      <div className="flex items-center justify-center flex-col gap-5">
        <div className="text-center text-[#262626]">
          <h1 className="text-[28px] md:text-[35px] font-medium">
            Find by Speciality
          </h1>
          <p className="text-[13px] md:text-[15px] max-w-[400px] my-4">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>
        <div className="w-full overflow-x-auto">
          <div className="flex gap-4 md:gap-6 w-max px-2 pb-2 mx-auto">
            {specialityData.map((item) => {
              const { id, speciality, image } = item;
              return (
                <Link
                  to={`/doctors/${speciality}`}
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-center flex flex-col gap-2 my-3 cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                  key={id}
                >
                  <img
                    className="w-[70px] md:w-[100px] h-[70px] md:h-[100px] m-auto"
                    src={image}
                    alt="speciality image"
                  />
                  <p className="text-[13px] md:text-[15px]">{speciality}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
