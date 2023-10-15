import { useState } from 'react';
import Navigation from './components/Navigation';
import Team from './components/Team';
import Footer from './components/Footer';
import teamsData from './data/teams';
import HomePage from './pages/HomePage';
import logoSman1Pati from './assets/logoSman1Pati.png';
import backgroundImage from './assets/bgByDave.jpg';
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
      <main
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: ' no-repeat',
          backgroundSize: 'cover',
          minHeight: '100vh',
        }}
        className="max-w-screen box-border overflow-x-hidden"
      >
        <HomePage logo={logoSman1Pati} />
        <div className="w-full min-h-screen flex flex-col items-center bg-white/20 backdrop-blur-lg sticky top-0 pb-8">
          <Navigation
            logo={logoSman1Pati}
            changeKeyword={changeKeyword}
            keyword={keyword}
          />
          <div className="flex flex-row flex-wrap w-full justify-evenly gap-2">
            {teamsData.map((team, index) =>
              team.title.toLowerCase().includes(keyword) ||
              team.members.some((member) =>
                member.toLowerCase().includes(keyword)
              ) ? (
                <Team key={index} title={team.title}>
                  {team.members.map((member, memberIndex) => (
                    <li key={memberIndex} className="font-[lato]">
                      {memberIndex + 1 + '. '} {member}
                    </li>
                  ))}
                </Team>
              ) : null
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
