import logoSman1Pati from './assets/logoSman1Pati.png';
function Navigation() {
  return (
    <>
      <nav>
        <img
          src={logoSman1Pati}
          alt="Logo SMAN 1 Pati"
          title="SMAN 1 Pati"
          class="w-10"
        />
        <h1 className="text-3xl font-bold underline">DIASTRA SMAN 1 Pati</h1>
      </nav>
    </>
  );
}

export default Navigation;
