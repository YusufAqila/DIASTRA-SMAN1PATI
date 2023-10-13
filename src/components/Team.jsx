import PropTypes from 'prop-types';
function Team({ title, children }) {
  const showMore = (event) => {
    console.log(event.target.parentElement.parentElement.querySelector('ul'));
    event.target.parentElement.parentElement
      .querySelector('ul')
      .classList.toggle('line-clamp-none');
  };
  return (
    <>
      <div className="border border-white w-[200px] relative">
        <h1>{title}</h1>
        <ul className="line-clamp-3">{children}</ul>

        <div className="absolute bottom-0 bg-gradient-to-t from-white to-[rgba(255,255,255,0)] to-90% w-full">
          <button
            onClick={showMore}
            className="underline bg-green-600/70 rounded-sm font-['lato'] text-white px-2 py-1 text-sm backdrop-blur-md float-right"
          >
            Show More
          </button>
        </div>
      </div>
    </>
  );
}
Team.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Team;
