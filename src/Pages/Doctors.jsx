import { useContext, useState, useEffect, use } from "react";
import { AppContext } from "../Context/AppContext";
import Doctor from "../Components/Doctor";
import { useNavigate, useParams } from "react-router-dom";

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  const [category, setCategory] = useState("All");
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    if (speciality) {
      setCategory(speciality);
    } else {
      setCategory("All");
    }
  }, [speciality]);
  return (
    <div className="container mx-auto pt-5 pb-10 px-5 md:px-10 lg:px-20">
      <h2 className="text-[14px] md:text-[16px] text-[#4B5563] mb-4">
        Browse through the doctors specialist.
      </h2>
      <div>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="border border-[#E2E5FF] px-4 py-0.5 mb-3 rounded bg-[var(--primary-color)] text-white md:hidden"
        >
          Filter
        </button>
        {showMenu ? (
          <div className="flex flex-col gap-2 md:hidden mb-5">
            <p
              onClick={() => {
                setCategory(
                  category === "General physician" ? "All" : "General physician"
                );
                speciality === "General physician"
                  ? navigate("/doctors")
                  : navigate("/doctors/General physician");
              }}
              className={`border border-gray-300 text-[15px] cursor-pointer px-6 py-2 rounded hover:bg-[#E2E5FF] duration-300 ${
                category === "General physician"
                  ? "bg-[#E2E5FF] text-black"
                  : "text-[#4B5563]"
              }`}
            >
              General physician
            </p>
            <p
              onClick={() => {
                setCategory(
                  category === "Gynecologist" ? "All" : "Gynecologist"
                );
                speciality === "Gynecologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Gynecologist");
              }}
              className={`border border-gray-300 text-[15px] cursor-pointer px-6 py-2 rounded hover:bg-[#E2E5FF] duration-300 ${
                category === "Gynecologist"
                  ? "bg-[#E2E5FF] text-black"
                  : "text-[#4B5563]"
              }`}
            >
              Gynecologist
            </p>
            <p
              onClick={() => {
                setCategory(
                  category === "Dermatologist" ? "All" : "Dermatologist"
                );
                speciality === "Dermatologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Dermatologist");
              }}
              className={`border border-gray-300 text-[15px] cursor-pointer px-6 py-2 rounded hover:bg-[#E2E5FF] duration-300 ${
                category === "Dermatologist"
                  ? "bg-[#E2E5FF] text-[#000]"
                  : "text-[#4B5563]"
              }`}
            >
              Dermatologist
            </p>
            <p
              onClick={() => {
                setCategory(
                  category === "Pediatricians" ? "All" : "Pediatricians"
                );
                speciality === "Pediatricians"
                  ? navigate("/doctors")
                  : navigate("/doctors/Pediatricians");
              }}
              className={`border border-gray-300 text-[15px] cursor-pointer px-6 py-2 rounded hover:bg-[#E2E5FF] duration-300 ${
                category === "Pediatricians"
                  ? "bg-[#E2E5FF] text-[#000]"
                  : "text-[#4B5563]"
              }`}
            >
              Pediatricians
            </p>
            <p
              onClick={() => {
                setCategory(category === "Neurologist" ? "All" : "Neurologist");
                speciality === "Neurologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Neurologist");
              }}
              className={`border border-gray-300 text-[15px] cursor-pointer px-6 py-2 rounded hover:bg-[#E2E5FF] duration-300 ${
                category === "Neurologist"
                  ? "bg-[#E2E5FF] text-[#000]"
                  : "text-[#4B5563]"
              }`}
            >
              Neurologist
            </p>
            <p
              onClick={() => {
                setCategory(
                  category === "Gastroenterologist"
                    ? "All"
                    : "Gastroenterologist"
                );
                speciality === "Gastroenterologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Gastroenterologist");
              }}
              className={`border border-gray-300 text-[15px] cursor-pointer px-6 py-2 rounded hover:bg-[#E2E5FF] duration-300 ${
                category === "Gastroenterologist"
                  ? "bg-[#E2E5FF] text-[#000]"
                  : "text-[#4B5563]"
              }`}
            >
              Gastroenterologist
            </p>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="flex gap-0 md:gap-8">
        <div>
          <div className="hidden md:flex flex-col gap-2">
            <p
              onClick={() => {
                setCategory(
                  category === "General physician" ? "All" : "General physician"
                );
                speciality === "General physician"
                  ? navigate("/doctors")
                  : navigate("/doctors/General physician");
              }}
              className={`border border-gray-300 text-[15px] cursor-pointer px-6 py-2 rounded hover:bg-[#E2E5FF] duration-300 ${
                category === "General physician"
                  ? "bg-[#E2E5FF] text-black"
                  : "text-[#4B5563]"
              }`}
            >
              General physician
            </p>
            <p
              onClick={() => {
                setCategory(
                  category === "Gynecologist" ? "All" : "Gynecologist"
                );
                speciality === "Gynecologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Gynecologist");
              }}
              className={`border border-gray-300 text-[15px] cursor-pointer px-6 py-2 rounded hover:bg-[#E2E5FF] duration-300 ${
                category === "Gynecologist"
                  ? "bg-[#E2E5FF] text-black"
                  : "text-[#4B5563]"
              }`}
            >
              Gynecologist
            </p>
            <p
              onClick={() => {
                setCategory(
                  category === "Dermatologist" ? "All" : "Dermatologist"
                );
                speciality === "Dermatologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Dermatologist");
              }}
              className={`border border-gray-300 text-[15px] cursor-pointer px-6 py-2 rounded hover:bg-[#E2E5FF] duration-300 ${
                category === "Dermatologist"
                  ? "bg-[#E2E5FF] text-[#000]"
                  : "text-[#4B5563]"
              }`}
            >
              Dermatologist
            </p>
            <p
              onClick={() => {
                setCategory(
                  category === "Pediatricians" ? "All" : "Pediatricians"
                );
                speciality === "Pediatricians"
                  ? navigate("/doctors")
                  : navigate("/doctors/Pediatricians");
              }}
              className={`border border-gray-300 text-[15px] cursor-pointer px-6 py-2 rounded hover:bg-[#E2E5FF] duration-300 ${
                category === "Pediatricians"
                  ? "bg-[#E2E5FF] text-[#000]"
                  : "text-[#4B5563]"
              }`}
            >
              Pediatricians
            </p>
            <p
              onClick={() => {
                setCategory(category === "Neurologist" ? "All" : "Neurologist");
                speciality === "Neurologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Neurologist");
              }}
              className={`border border-gray-300 text-[15px] cursor-pointer px-6 py-2 rounded hover:bg-[#E2E5FF] duration-300 ${
                category === "Neurologist"
                  ? "bg-[#E2E5FF] text-[#000]"
                  : "text-[#4B5563]"
              }`}
            >
              Neurologist
            </p>
            <p
              onClick={() => {
                setCategory(
                  category === "Gastroenterologist"
                    ? "All"
                    : "Gastroenterologist"
                );
                speciality === "Gastroenterologist"
                  ? navigate("/doctors")
                  : navigate("/doctors/Gastroenterologist");
              }}
              className={`border border-gray-300 text-[15px] cursor-pointer px-6 py-2 rounded hover:bg-[#E2E5FF] duration-300 ${
                category === "Gastroenterologist"
                  ? "bg-[#E2E5FF] text-[#000]"
                  : "text-[#4B5563]"
              }`}
            >
              Gastroenterologist
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all">
          {doctors.map((doctor) => {
            const { _id, name, image, speciality } = doctor;
            if (category === "All" || category === speciality) {
              return (
                <Doctor
                  key={_id}
                  name={name}
                  _id={_id}
                  image={image}
                  speciality={speciality}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
