import PropTypes from "prop-types";

function TitleCard({ title }) {
  return (
    <p
      className="border
      rounded-2xl
      w-fit
      px-4
      py-2
      transition-colors
      text-sm text-slate-500
      cursor-pointer
      flex
      gap-2
      items-center
      hover:bg-slate-100 hover:text-slate-600
      sm:w-full sm:text-center"
    >
      {title}
    </p>
  );
}

TitleCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleCard;
