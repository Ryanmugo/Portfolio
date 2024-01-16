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
          <p className="text-xl mt-17 mb-20">
            I blend creativity with technical prowess to craft outstanding web
            applications, ensuring your vision exceeds expectations. Whether you
            need an e-commerce platform, project management tool, or enterprise
            application, I&apos;m your trusted partner. Beyond coding, I bring a
            deep understanding of user experience, design principles, and the
            latest web development trends. I&apos;m not just a developer;
            I&apos;m a problem solver and a passionate advocate for your digital
            success. Let me unlock the boundless potential of the digital
            landscape for you.
          </p>

          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
