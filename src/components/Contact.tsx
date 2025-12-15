import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-12 md:py-24 bg-white dark:bg-gray-900 w-full transition-colors duration-300"
    >
      <div className="container mx-auto max-w-4xl px-8 md:px-12 text-center md:text-left pt-6">
        <h2 className="text-sm md:text-base font-bold text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-300">
          CONTACT
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-8 md:mb-12 transition-colors duration-300">
          Don't be shy! Hit me up! 👇
        </h3>
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-8 md:gap-30 pt-7 pb-6">
          <div className="flex items-center gap-5">
            <div className="text-blue-500 p-3 rounded-full shadow-md bg-white dark:bg-gray-800 dark:shadow-gray-700 transition-colors duration-300">
              <FaMapMarkerAlt size={20} />
            </div>
            <div className="text-left">
              <h4 className="text-sm text-black dark:text-white font-bold transition-colors duration-300">
                Location
              </h4>
              <p className="text-gray-500 dark:text-gray-400 pt-1 transition-colors duration-300">
                Pune, India
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="text-blue-500 p-3 rounded-full shadow-md bg-white dark:bg-gray-800 dark:shadow-gray-700 transition-colors duration-300">
              <FaEnvelope size={20} />
            </div>
            <div className="text-left">
              <h4 className="text-sm text-black dark:text-white font-bold transition-colors duration-300">
                Mail
              </h4>
              <p className="text-gray-500 dark:text-gray-400 pt-1 transition-colors duration-300">
                harshbhosale232@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
