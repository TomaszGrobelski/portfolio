import PropTypes from 'prop-types';

const ToolTip = ({ children, tooltip }) => {
  return (
    <div>
      {children}
      <span>{tooltip}</span>
    </div>
  );
};

ToolTip.propTypes = {
  children: PropTypes.node.isRequired,
  tooltip: PropTypes.string.isRequired,
};

export default ToolTip;