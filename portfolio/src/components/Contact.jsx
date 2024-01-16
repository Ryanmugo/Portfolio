const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/868f365b-14a2-4dc0-99a3-e523d7b64438"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name...."
              className="p-2 bg-transparent rounded-md border-2 focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email...."
              className="my-4 p-2 bg-transparent rounded-md border-2 focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
              placeholder="Enter Your Message...."
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let&apos;s talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
