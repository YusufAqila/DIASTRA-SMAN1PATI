import { useState } from 'react';
import Navigation from './components/Navigation';
import Team from './components/Team';
import teamsData from './data/teams';
import HomePage from './pages/HomePage';
import logoSman1Pati from './assets/logoSman1Pati.png';
function App() {
  const [count, setCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [keyword, setKeyword] = useState('');
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 50);
  };
  const changeKeyword = (newKeyword) => {
    setKeyword(newKeyword);
  };
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  return (
    <>
      <main>
        <HomePage logo={logoSman1Pati} />
        <div className="w-screen flex flex-row flex-wrap justify-center gap-2 bg-white/50 backdrop-blur-md rounded-t-[50px]">
          <Navigation
            logo={logoSman1Pati}
            changeKeyword={changeKeyword}
            keyword={keyword}
          />
          {teamsData.map((team, index) =>
            team.title.toLowerCase().includes(keyword) ||
            team.members.some((member) =>
              member.toLowerCase().includes(keyword)
            ) ? (
              <Team key={index} title={team.title}>
                {team.members.map((member, memberIndex) => (
                  <li key={memberIndex}>{member}</li>
                ))}
              </Team>
            ) : null
          )}
        </div>
      </main>
    </>
  );
}

export default App;
