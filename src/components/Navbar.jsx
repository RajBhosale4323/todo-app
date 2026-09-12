import styles from './Navbar.module.css';
const Navbar = ({ title = 'My To-Do' }) => {
  return (
    <nav className={`navbar px-4 py-3 ${styles.navbar}`}>
      <span className={`navbar-brand mb-0 ${styles.brand}`}>{title}</span>
    </nav>
  );
};
 
export default Navbar;