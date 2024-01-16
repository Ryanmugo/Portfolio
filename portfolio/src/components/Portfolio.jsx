import picture from "../assets/portfolio/picture.png";
import estate from "../assets/portfolio/estate.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: picture,
      links: "https://maishalondon.onrender.com",
      github: "https://github.com/Ryanmugo/mern-hotel-bookingApp",
    },
    {
      id: 2,
      src: estate,
      links: "https://mern-estate-kcla.onrender.com",
      github: "https://github.com/Ryanmugo/Emba-Enterprises",
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold norder-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-8">
          {portfolios.map(({ id, src, links, github }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="picture"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => window.open(links)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => window.open(github)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
