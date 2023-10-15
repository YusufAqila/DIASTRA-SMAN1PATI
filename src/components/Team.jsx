import PropTypes from 'prop-types';
function Team({ title, children }) {
  return (
    <>
      <div className="border-2 border-white/40  w-[200px] relative backdrop-blur-md rounded-md p-2 h-fit flex flex-col justify-center bg-white/40">
        <h1 className="font-[poppins] font-bold text-lg">{title}</h1>
        <ul className="h-28 overflow-auto list-disc">{children}</ul>
      </div>
    </>
  );
}
Team.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Team;
