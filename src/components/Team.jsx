import PropTypes from 'prop-types';
function Team({ title, children }) {
  return (
    <>
      <div className="border-2 border-white/40  w-[150px] sm:w-[190px] md:w-[200px] lg:w-[240px] relative backdrop-blur-md rounded-md p-2 h-fit flex flex-col justify-center bg-white/40">
        <h1 className="font-[poppins] font-bold text-lg text-black/70">
          {title}
        </h1>
        <ul className="h-28 overflow-auto list-disc text-black/70">
          {children}
        </ul>
      </div>
    </>
  );
}
Team.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Team;
