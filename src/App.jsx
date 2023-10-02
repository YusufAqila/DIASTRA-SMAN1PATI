import { useState } from 'react';
import Team from './components/Team.jsx';
function App() {
  const [count, setCount] = useState(0);
  const teamsData = [
    {
      title: 'Tim Kerja 1',
      members: ['Fatih Adianta Hutomo', 'Gelar Abdi Fistawan'],
    },
    {
      title: 'Tim Kerja 2',
      members: [
        'Tiara Ayu Sukma Inar Rahmadani',
        "La'viera Meland Athaya",
        'Amanda Balqis Sia Setianengrum',
      ],
    },
    {
      title: 'Tim Kerja 3',
      members: [
        'Allisha Della Daryanti',
        'Vianka Rindya Putri',
        'Riyard Falah Bahrunnaja',
      ],
    },
    {
      title: 'Tim Kerja 4',
      members: [
        'Ismah Nur Nabillah',
        'Firli Itha Arfany',
        'Selviana Dwi Indriani',
        'Nayla Aulia Zahra',
      ],
    },
    {
      title: 'Tim Kerja 5',
      members: [
        'Aulya Bunga Salwa',
        'Apuilana Wijaya',
        'Biyan Al Farisy',
        'Ferlin Lingga Anandia',
      ],
    },
    {
      title: 'Tim Kerja 6',
      members: [
        'Ladyasha Abiantono Putri',
        'Mulya Ana Santika',
        'Vharel Wesdansyah Verdinantaka',
        'Safira Khairunnisa',
      ],
    },
    {
      title: 'Tim Kerja 7',
      members: [
        'Ado Wani Habibirahim',
        'Muhammad Azwar Hadi Khoirullah',
        'Putri Wijayanti',
      ],
    },
    {
      title: 'Tim Kerja 8',
      members: [
        'Fajri Lathief',
        'Eka Sabrina Dewi',
        'Della Pena Sitiaji',
        'Rafael Irdanaya Prabandaru',
      ],
    },
    {
      title: 'Tim Kerja 9',
      members: [
        'Nadya Nathania',
        "Dinda Cantika Qurrota A'yun",
        'Nafis Alsela Wahyudi',
      ],
    },
    {
      title: 'Tim Kerja 10',
      members: [
        'Damara Ivancalya',
        'Nur Faizatus Sholihah',
        'Febi Lestari',
        'Anggara Hastanul Hakim',
      ],
    },
    {
      title: 'Tim Kerja 11',
      members: [
        'Eva Fitria Sugiyono',
        'Arindya Salwa Azzahra',
        'Ahmad Fajril Falah',
      ],
    },
    {
      title: 'Tim Kerja 12',
      members: ['Firstian Daffa Bhayangkara', 'Nazwa Cantika Diant'],
    },
  ];
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
