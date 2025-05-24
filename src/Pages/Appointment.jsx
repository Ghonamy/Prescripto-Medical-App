import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import Verified_Icon from "../Assets/verified_icon.svg";
import Info_Icon from "../Assets/info_icon.svg";
import RelatedDoctors from "../Components/RelatedDoctors";
import { ToastContainer, toast } from "react-toastify";

const Appointment = () => {
  const navigate = useNavigate();
  const notify = () => toast.warn("Login to book appointment");
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setslotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const fetchDoctorInfo = async () => {
    const doctorInfo = doctors.find((doc) => docId === doc._id);
    setDocInfo(doctorInfo);
  };
  const getAvailableSlots = async () => {
    setDocSlots([]);
    // Getting Current Date
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      // Getting Date With Index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      // Setting End Time Of The Date With Index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);
      // Settings Hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.getMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }
      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        // Add Slots To Array
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime,
        });
        // Increment Current Time By 30 Minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };
  useEffect(() => {
    fetchDoctorInfo();
  }, [doctors, docId]);
  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);
  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20">
      {docInfo && (
        <div>
          <div className="flex flex-col md:flex-row gap-4">
            <img
              className="max-w-full md:w-[300px] h-auto md:h-[300px] bg-[var(--primary-color)] rounded-lg"
              src={docInfo.image}
              alt={docInfo.name}
            />
            <div className="border border-[#ADADAD] rounded-lg p-4 md:p-6 w-full">
              <div className="flex items-center gap-2">
                <h3 className="text-[25px] md:text-[30px] font-medium text-gray-700">
                  {docInfo.name}
                </h3>
                <img
                  className="w-4 md:w-5"
                  src={Verified_Icon}
                  alt="Verified_Icon"
                />
              </div>
              <div className="flex items-center gap-2 text-gray-600 my-2 text-[15px] md:text-[16px]">
                <p>
                  {docInfo.degree} - {docInfo.speciality}
                </p>
                <span className="text-[13px] border border-[#ADADAD] rounded-full px-1.5 py-0.5">
                  {docInfo.experience}
                </span>
              </div>
              <div>
                <p className="text-[#262626] mb-2 flex gap-1">
                  About <img src={Info_Icon} alt="Info_Icon" />
                </p>
              </div>
              <p className="max-w-[700px] text-gray-600 text-[15px]">
                {docInfo.about}
              </p>
              <div className="text-gray-600 font-medium mt-3">
                <p>
                  Appointment fee:{" "}
                  <span className="text-gray-800">${docInfo.fees}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="font-medium text-gray-700 ml-0 md:ml-72 mt-6">
            <h3>Booking Slots</h3>
            <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
              {docSlots.length &&
                docSlots.map((item, index) => (
                  <div
                    onClick={() => setslotIndex(index)}
                    className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                      slotIndex === index
                        ? "bg-[var(--primary-color)] text-white"
                        : "border border-gray-200"
                    }`}
                    key={index}
                  >
                    <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                    <p>{item[0] && item[0].dateTime.getDate()}</p>
                  </div>
                ))}
            </div>
            <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
              {docSlots.length &&
                docSlots[slotIndex].map((item, index) => (
                  <p
                    key={index}
                    onClick={() => setSlotTime(item.time)}
                    className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                      item.time === slotTime
                        ? "bg-[var(--primary-color)] text-white"
                        : "border border-gray-300 text-gray-400"
                    }`}
                  >
                    {item.time.toLowerCase()}
                  </p>
                ))}
            </div>
            <div>
              <button
                onClick={notify}
                className="bg-[var(--primary-color)] text-white text-sm font-light px-10 py-3 rounded-full my-6 m-auto md:mx-0 block"
              >
                Book an Appointment
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      )}
      {docInfo && (
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      )}
    </div>
  );
};

export default Appointment;
