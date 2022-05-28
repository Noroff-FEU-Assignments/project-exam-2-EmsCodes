import propTypes from "prop-types";
import styles from "./MenuBtn.module.css";
function MenuBtn({ onclickFunction, name, style }) {
  return (
    <button
      id="btn"
      className={`${styles.nav} ${style}`}
      onClick={onclickFunction}
    >
      {name}
    </button>
  );
}

export default MenuBtn;

MenuBtn.propTypes = {
  onclickFunction: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
};
