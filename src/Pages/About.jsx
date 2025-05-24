import About_Image from "../Assets/about_image.png";
const About = () => {
  return (
    <div className="container mx-auto px-5 md:px-10 lg:px-20 py-5">
      <div className="text-center text-2xl text-[#707070]">
        <h1>
          ABOUT <span className="text-gray-700 font-semibold">US</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row mt-8 items-center">
        <img
          src={About_Image}
          alt="About_Image"
          className="max-w-full md:max-w-[350px] mr-0 md:mr-10 mb-8"
        />
        <div className="flex flex-col gap-5 text-[15px] max-w-[650px] text-gray-600">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <p className="font-semibold text-black">Our Vision</p>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      <div className="my-10">
        <h2 className="text-xl">
          WHY <span className="text-gray-700 font-bold">CHOOSE US</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center mt-5">
          <div className="border border-gray-200 px-12 md:px-14 py-14 md:py-16 cursor-pointer hover:bg-[var(--primary-color)] hover:text-white duration-200 text-sm text-gray-600">
            <h3 className="font-semibold text-[16px] mb-4">EFFICIENCY:</h3>
            <p>
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className="border border-gray-200 px-14 py-16 cursor-pointer hover:bg-[var(--primary-color)] hover:text-white duration-200 text-sm text-gray-600">
            <h3 className="font-semibold text-[16px] mb-4">PERSONALIZATION:</h3>
            <p>
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
          <div className="border border-gray-200 px-14 py-16 cursor-pointer hover:bg-[var(--primary-color)] hover:text-white duration-200 text-sm text-gray-600">
            <h3 className="font-semibold text-[16px] mb-4">CONVENIENCE:</h3>
            <p>
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
