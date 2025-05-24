import { useNavigate } from "react-router-dom";

const Doctor = ({ name, _id, image, speciality }) => {
  const navigate = useNavigate();
  return (
    <div
      key={_id}
      onClick={() => {
        navigate(`/appointment/${_id}`);
        scrollTo(0, 0);
      }}
      className="border border-[#C9D8FF] rounded-2xl transition-all duration-500 hover:translate-y-[-10px] cursor-pointer"
    >
      <img
        className="bg-[#EAEFFF] rounded-t-2xl object-cover"
        src={image}
        alt="Doctor Image"
      />
      <div className="p-4">
        <div className="flex items-center gap-2">
          <span className="w-[8px] h-[8px] bg-green-500 rounded-full"></span>
          <span className="text-green-500 text-[15px]">Available</span>
        </div>
        <h2 className="text-[19px] font-medium my-1">{name}</h2>
        <p className="text-[15px] text-[#5C5C5C]">{speciality}</p>
      </div>
    </div>
  );
};

export default Doctor;
