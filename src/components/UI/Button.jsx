import './Button.css';

const Button = (props) => {
  const classes = props.classes || '';
  return (
    <button
      className={`button ${classes}`}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
