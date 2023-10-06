import { useState } from 'react';
import Navigation from './components/Navigation.jsx';
import teamsData from './data/teams.js';
import Team from './components/Team.jsx';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        {teamsData.map((team, index) => (
          <Team key={index} title={team.title}>
            {team.members.map((member, memberIndex) => (
              <li key={memberIndex}>{member}</li>
            ))}
          </Team>
        ))}
      </main>
    </>
  );
}

export default App;
