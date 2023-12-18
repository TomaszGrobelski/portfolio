import PropTypes from "prop-types";

const Button = ({ title }) => {
    return <button className="rounded-3xl border border-black p-2 ">{title}</button>;
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Button;
