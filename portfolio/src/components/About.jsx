const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 mb-6">
            About
          </p>

          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-6 mt-6">
            Ryan: The Full Stack Developer Extraordinaire <br />
          </h1>
          <p className="text-xl mt-17">
            In a world where digital experiences define the way we interact, I,
            Ryan, am your Full Stack Developer Extraordinaire, transforming
            visions into seamless realities. With my mastery of React, MongoDB,
            Express, JavaScript, TypeScript, Node.js and Playwright Testing Kit
            By Microsoft, I seamlessly blend creativity and technical prowess to
            craft exceptional web applications. My passion for innovation fuels
            my dedication to crafting user-centric experiences that captivate
            and engage. I approach every project with an unwavering commitment
            to quality, ensuring that your vision is not just met but exceeded.
            Whether you&apos;re seeking a dynamic e-commerce platform, an
            intuitive project management tool, or a sophisticated enterprise
            application, I&apos;m your trusted partner in translating your ideas
            into tangible solutions. My expertise extends beyond the coding
            realm, encompassing a deep understanding of user experience, design
            principles, and the latest web development trends. I&apos;m not just
            a developer; I&apos;m a problem solver, a creative thinker, and a
            passionate advocate for your digital success. Let me be your key to
            unlocking the boundless potential of the digital landscape.
          </p>

          <h1 className="mt-6 text-2xl underline">
            Contact me today to discuss how I can bring your vision to life.
          </h1>

          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
