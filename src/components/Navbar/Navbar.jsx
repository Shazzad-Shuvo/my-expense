// styles
import styles from './Navbar.module.css'
// react router
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.title}>MyExpense</li>
                <li><Link to='/signup'>Signup</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;