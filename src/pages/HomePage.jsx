import backgroundImage from '../assets/bgByDave.jpg';
import homepageImage from '../assets/heroWithBlobGreen.webp';
function HomePage({ logo, logoDiastra }) {
  return (
    <div className="flex items-center justify-center">
      <div className="backdrop-blur-sm backdrop-brightness-75 h-screen w-full flex  items-center flex-col">
        <div className=" w-full pl-5 md:pl-7 py-5 md:py-7 min-h-[10vh] flex items-center gap-2 md:gap-5 justify-center md:justify-start">
          <img
            src={logo}
            alt="Logo SMAN 1 Pati"
            title="SMAN 1 Pati"
            className="w-8 md:w-10"
          />
          <img
            src={logoDiastra}
            alt="Logo DIASTRA"
            title="DIASTRA"
            className="w-8 md:w-10"
          />
          <h1 className="text-xl font-bold text-white font-[montserrat] sm:text-3xl md:text-2xl">
            DIASTRA SMAN 1 PATI
          </h1>
        </div>
        <div className="h-[90vh] w-screen flex flex-col-reverse md:flex-row items-center justify-evenly">
          <div className="flex  flex-col items-center">
            <h3 className="text-white font-[poppins] font-semibold text-xl sm:text-3xl md:text-5xl md:text-left  text-center">
              Adiwiyata Castra <br className="hidden md:block"></br> Jayecwara
            </h3>
          </div>
          <img
            src={homepageImage}
            alt="Menanam"
            className="w-[270px] md:w-[350px]"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
