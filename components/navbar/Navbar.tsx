import React, {ReactNode} from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import {motion, useCycle, Variants} from "framer-motion"
import {BsGithub as GitHubIcon} from "react-icons/bs";
import styles from './Navbar.module.scss';


const navbarVariants: Variants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(0px at 40px 40px)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};


interface NavbarMasterProps {
    children?: ReactNode;
}

const NavbarMaster: React.FC<NavbarMasterProps> = ({ children }) => {
    const [isOpen, toggleOpen] = useCycle<boolean>(false, true);

    return (
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

            <motion.div className={styles.navigation} variants={navbarVariants}>
                { children }
            </motion.div>

        </motion.nav>
    );
}


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
