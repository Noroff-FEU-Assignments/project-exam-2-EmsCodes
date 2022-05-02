import propTypes from "prop-types";
import styles from "../../../styles/components/utils/buttons/categoryBtn.module.css";

function MenuBtn({ onclickFunction, name }) {
  return (
    <button className={styles.nav} onClick={onclickFunction}>
      {name}
    </button>
  );
}

export default MenuBtn;

MenuBtn.propTypes = {
  onclickFunction: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
};
