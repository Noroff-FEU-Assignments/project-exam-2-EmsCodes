import propTypes from "prop-types";

function MenuBtn({ onclickFunction, name }) {
  return <button onClick={onclickFunction}>{name}</button>;
}

export default MenuBtn;

MenuBtn.propTypes = {
  onclickFunction: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
};
