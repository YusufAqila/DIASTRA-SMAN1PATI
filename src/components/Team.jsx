import PropTypes from 'prop-types';
function Team({ title, children }) {
  return (
    <>
      <div className="border border-white w-[200px]">
        <h1>{title}</h1>
        <ul>{children}</ul>
      </div>
    </>
  );
}
Team.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Team;
