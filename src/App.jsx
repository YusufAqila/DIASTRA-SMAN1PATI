import { useState } from 'react';
import Navigation from './components/Navigation';
import Team from './components/Team';
import teamsData from './data/teams';
import HomePage from './pages/HomePage';
import logoSman1Pati from './assets/logoSman1Pati.png';
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
        <Navigation logo={logoSman1Pati} />
      </header>
      <main>
        <HomePage logo={logoSman1Pati} />
        <div className="w-screen flex flex-row flex-wrap justify-center gap-2">
          {teamsData.map((team, index) => (
            <Team key={index} title={team.title}>
              {team.members.map((member, memberIndex) => (
                <ul>
                  <li key={memberIndex}>{member}</li>
                </ul>
              ))}
            </Team>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
