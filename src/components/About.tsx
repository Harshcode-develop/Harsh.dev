import aboutme from "../assets/aboutme.png"; // Import the image

export default function About() {
  return (
    <section
      id="about"
      className="py-8 md:py-24 bg-white dark:bg-gray-900 w-full transition-colors duration-300"
    >
      <div className="container mx-auto max-w-4xl px-8 md:px-9 pt-0 pb-6 md:pt-24 md:pb-20">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-18">
          {/* Left Side: About Image Container with Rotating Text */}
          <div className="w-full md:w-1/2 relative flex justify-center md:justify-start">
            <div className="w-full max-w-[380px] h-[220px] md:h-[280px] bg-gray-300 dark:bg-gray-800 rounded-lg relative transition-colors duration-300">
              {/* Replace with your actual image file name */}
              <img
                src={aboutme}
                alt="About Me"
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Rotating text container group */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-bottom-12 md:-right-12 w-32 h-30 md:w-48 md:h-46 bg-white dark:bg-gray-900 rounded-full p-1 z-10 block transition-colors duration-300">
                {/* Static Center Logo */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="text-2xl md:text-4xl pb-1">👨🏻‍💻</div>
                </div>

                {/* Spinning Text */}
                <div className="w-full h-full animate-[spin_10s_linear_infinite] relative z-10">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <path
                      id="textPath"
                      d="M 20,50 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
                      fill="none"
                    />
                    <text className="text-[8.8px] uppercase font-bold tracking-wide fill-gray-800 dark:fill-white transition-colors duration-300">
                      <textPath href="#textPath" startOffset="0%">
                        Data-driven • Software • Developer •
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full md:w-1/2 text-center mt-10 md:mt-0 md:text-left">
            <h2 className="text-sm md:text-base font-bold text-blue-600 dark:text-blue-400 mb-2 transition-colors duration-300">
              ABOUT ME
            </h2>
            <h3 className="text-xl md:text-[1rem] font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">
              A dedicated Developer based in [Pune, India]📍
            </h3>
            <p className="pt-0 text-sm md:text-[0.85rem] text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              As a Certified Data Engineer and Developer, I possess a versatile
              skill set in React, JS, TS, Python, Java and SQL. I excel in
              designing responsive user interfaces while simultaneously building
              robust, scalable data pipelines across Azure, Fabric, and AWS. My
              expertise lies in bridging the gap between complex data analytics
              and engaging web applications through clean, optimized code. I am
              a collaborative team player who thrives in cross-functional
              environments to deliver outstanding end-to-end technical
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
