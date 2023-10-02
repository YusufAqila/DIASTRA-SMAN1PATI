import PropTypes from 'prop-types';
function Team({ title, children }) {
  return (
    <>
      <h1>{title}</h1>
      <ul>{children}</ul>
    </>
  );
}
Team.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Team;
