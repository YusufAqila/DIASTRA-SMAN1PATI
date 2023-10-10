function Navigation({ logo, keyword, changeKeyword }) {
  const handleSearch = (event) => {
    changeKeyword(event.target.value);
  };
  return (
    <>
      <nav className="flex p-3 backdrop-blur-md sticky top-2 mt-8 border border-black rounded-full w-[80%] box-border flex justify-evenly">
        <img
          src={logo}
          alt="Logo SMAN 1 Pati"
          title="SMAN 1 Pati"
          className="w-10"
        />
        <h1 className="text-xl font-bold text-black text-center flex items-center font-[montserrat]">
          DIASTRA SMAN 1 PATI
        </h1>
        <input
          type="text"
          placeholder="Cari Tim Kerja"
          value={keyword}
          onChange={handleSearch}
        />
      </nav>
    </>
  );
}

export default Navigation;
