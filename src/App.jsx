import { useState } from 'react';
import Navigation from './components/Navigation';
import teamsData from './data/teams';
import Team from './components/Team';
import backgroundImage from './assets/bgByDave.jpg';
function App() {
  const [count, setCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 50);
  };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <>
      <header
        className={`${
          isScrolled ? 'bg-white text-black' : 'backdrop-blur-md text-white'
        } border-white border-b-[1px] top-0 fixed z-50`}
      >
        <Navigation />
      </header>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: '70vh',
        }}
        className="flex items-center justify-center"
      >
        <h1>Selamat Datang!</h1>
      </div>
      <main className="w-screen flex flex-row flex-wrap justify-center gap-2">
        {teamsData.map((team, index) => (
          <Team key={index} title={team.title}>
            {team.members.map((member, memberIndex) => (
              <ul>
                <li key={memberIndex}>{member}</li>
              </ul>
            ))}
          </Team>
        ))}
      </main>
    </>
  );
}

export default App;
