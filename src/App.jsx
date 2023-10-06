import { useState } from 'react';
import teamsData from './data/teams.js';
import Team from './components/Team.jsx';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <h1 className="text-3xl font-bold underline">DIASTRA SMAN 1 Pati</h1>
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
