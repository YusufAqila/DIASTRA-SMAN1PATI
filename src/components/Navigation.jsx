function Navigation({ logo }) {
  return (
    <>
      <nav className="flex p-5 hidden">
        <img
          src={logo}
          alt="Logo SMAN 1 Pati"
          title="SMAN 1 Pati"
          className="w-10"
        />
        <h1 className="text-3xl font-bold underline text-white">
          DIASTRA SMAN 1 Pati
        </h1>
      </nav>
    </>
  );
}

export default Navigation;
