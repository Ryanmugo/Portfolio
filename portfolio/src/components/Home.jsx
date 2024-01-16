import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            Full Stack Developer
          </h1>
          <p className=" text-gray-500 py-4 max-w-md">
            My name is Ryan, your Full Stack Developer Extraordinaire, sculpting
            seamless digital experiences with a mastery of React, MongoDB,
            Express, TypeScript, and Node.js. Where innovation meets expertise,
            your vision comes to life!
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
