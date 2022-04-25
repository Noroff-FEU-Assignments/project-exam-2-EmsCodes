import PropTypes from "prop-types";
import styles from "../../../styles/components/utils/forms/FormError.module.css";

export default function ValidationError({ children }) {
  return <div className={styles.formError}>{children}</div>;
}

ValidationError.proptTypes = {
  children: PropTypes.node.isRequired,
};
