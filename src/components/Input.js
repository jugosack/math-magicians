// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

function Input(props) {
  Input.defaultProps = {
    id: '',
    value: '',
    className: '',
    onClick: () => {},
  };
  Input.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
  };
  const {
    id, value, className, onClick,
  } = props;

  return (
    <input type="button" value={value} className={className} onClick={onClick} id={id} />

  );
}

export default Input;
