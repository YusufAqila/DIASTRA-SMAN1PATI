import backgroundImage from '../assets/bgByDave.jpg';
import homepageImage from '../assets/environtmentImage.svg';
function HomePage({ logo }) {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: '100vh',
      }}
      className="flex items-center justify-center"
    >
      <div className="backdrop-blur-md h-screen w-screen flex  items-center flex-col">
        <div className="border border-black w-screen pl-5 px-10 min-h-[10vh] flex items-center">
          <img
            src={logo}
            alt="Logo SMAN 1 Pati"
            title="SMAN 1 Pati"
            className="w-10"
          />
        </div>
        <div className="h-[90vh] border border-black w-screen flex flex-col">
          <img src={homepageImage} alt="Menanam" />
          <div>
            <h3>Selamat Datang!</h3>
            <h1>DIASTRA SMAN 1 Pati</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
