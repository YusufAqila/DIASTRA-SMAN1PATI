function Navigation({ keyword, changeKeyword }) {
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
        className="rounded-full px-4 py-2 backdrop-blur-lg bg-white/40 my-8 border-2 border-white/40 box-border h-fit w-[80%] z-10 outline-none focus:shadow-[0px_0px_0px_4px_rgba(9,140,9,.3)] placeholder:text-black/70 font-[poppins] font-semibold"
      />
    </>
  );
}

export default Navigation;
