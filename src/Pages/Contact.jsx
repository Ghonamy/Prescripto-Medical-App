import Contact_Image from "../Assets/contact_image.png";

const Contact = () => {
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20 py-5">
      <div className="text-center text-2xl text-[#707070]">
        <h1>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-10 my-10">
          <img
            src={Contact_Image}
            alt="About_Image"
            className="max-w-full md:max-w-[350px]"
          />
          <div className="flex flex-col text-[14px] md:text-[15px] gap-6 text-left">
            <p className="text-gray-600 font-semibold text-[17px] md:text-[20px]">
              OUR OFFICE
            </p>
            <div>
              <p>00000 Willms Station</p>
              <p>Suite 000, Washington, USA</p>
            </div>
            <div>
              <p>Tel: (000) 000-0000</p>
              <p>Email: greatstackdev@gmail.com</p>
            </div>
            <p className="text-gray-600 font-semibold text-[17px] md:text-[20px]">
              CAREERS AT PRESCRIPTO
            </p>
            <p>Learn more about our teams and job openings</p>
            <button className="flex border border-black hover:border-[var(--primary-color)] text-black w-fit px-6 py-4 duration-500 hover:bg-[var(--primary-color)] hover:text-white">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
