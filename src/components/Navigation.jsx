function Navigation({ logo, keyword, changeKeyword }) {
  const handleSearch = (event) => {
    changeKeyword(event.target.value);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Cari Tim Kerja"
        value={keyword}
        onChange={handleSearch}
        className="rounded-xl p-2 border-white flex p-3 backdrop-blur-lg bg-white/40 sticky top-2 my-8 border-2 border-white/40 rounded-full  box-border h-fit w-[80%] z-10 outline-none focus:shadow-[0px_0px_0px_4px_rgba(9,140,9,.3)]"
      />
    </>
  );
}

export default Navigation;
