import React, {ReactNode} from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import {AnimatePresence, motion, Variants} from "framer-motion"
import {BsGithub as GitHubIcon} from "react-icons/bs";
import styles from './Navbar.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import * as NavbarState from "../../redux/slices/navbarStateSlice";
import * as InitialHints from "../../redux/slices/initialHintsSlice";


/**
 * These are the navbar variants. The navbar can be in one of two states:
 * It can be `open` or it can be `closed`.
 */
const navbarVariants: Variants = {
    open: {
        scale: 1,
        opacity: 1
    },
    closed: {
        scale: 0,
        opacity: 0
    }
};


/**
 * This is the navbar base. It consists of a button and its children that should
 * be laid out right next to it. In our case, the children are the navbar itself.
 * When the button is clicked, the navbar toggles between `open` and `closed`
 * and changes its appearance accordingly. This state is managed via a redux
 * reducer. Also, there is a pop-up dialog that hints at the button to be pressed.
 * This dialog is only shown initially and hidden once the button is clicked.
 * This state is also managed via a redux reducer.
 * @param props The children to lay out
 */
const NavbarMaster: React.FC<{ children?: ReactNode }> = ({ children }) => {
    /** Whether the navbar is open */
    const { isOpen } = useSelector((state: RootState) => state.navbarState);
    /** Whether to show the initial dialog that hints at the button. */
    const { navbarClickMeDialog } = useSelector((state: RootState) => state.initialHints);
    /** Used to dispatch information to redux */
    const dispatch = useDispatch();

    /* Toggles the navbar state and dispatches it to redux. Also disables initial pop-up hint. */
    function toggleOpen() {
        dispatch(InitialHints.consume('navbarClickMeDialog'));
        dispatch(NavbarState.toggle());
    }

    return (
        <AnimatePresence>
            <motion.nav animate={isOpen? 'open' : 'closed'}>

                {/* Logo */}
                <motion.div
                    className={styles.logoWrapper}
                    onClick={() => toggleOpen()}
                    whileTap={{ scale: 0.7 }}
                    whileHover={{ scale: 0.9 }}
                    transition={{ type: 'spring', duration: 0.3 }}
                >
                    <img src="/logo.png"  alt=''/>
                </motion.div>

                {/* Helper Popup */}
                {
                    navbarClickMeDialog &&
                    <motion.div
                        className={styles.clickMeDialog}
                        initial={{ opacity: 1, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                    >
                        If you click me, I will show you magic!
                    </motion.div>
                }

                {/* Navigation */}
                <motion.div className={styles.navigation} variants={navbarVariants}>
                    { children }
                </motion.div>

            </motion.nav>
        </AnimatePresence>
    );
}


/**
 * This component is the application's navbar. For more information,
 * see {@link NavbarMaster}.
 * @see NavbarMaster
 */
const Navbar: React.FC = () => {
    const router = useRouter();

    function getNavLinkClass(url: string): string | undefined {
        return (router.pathname === url)? styles.activeLink : undefined;
    }

    return (
        <NavbarMaster>

            {/* Pages */}
            <div className={styles.pagesWrapper}>

                <Link href="/">
                    <a className={getNavLinkClass("/")}>
                        home
                    </a>
                </Link>

                <Link href="/about">
                    <a className={getNavLinkClass("/about")}>
                        about
                    </a>
                </Link>

                <Link href="/projects">
                    <a className={getNavLinkClass("/projects")}>
                        projects
                    </a>
                </Link>

                <Link href="/contact">
                    <a className={getNavLinkClass("/contact")}>
                        contact
                    </a>
                </Link>

            </div>

            {/* Links */}
            <div className={styles.linksWrapper}>
                <a href="https://github.com/MarioDiCaprioUni">
                    <GitHubIcon />
                </a>
            </div>

        </NavbarMaster>
    );
}

export default Navbar;
