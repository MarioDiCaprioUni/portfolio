import React from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import styles from './Navbar.module.scss';


const Navbar: React.FC = () => {
    const router = useRouter();

    function getNavLinkClass(url: string): string | undefined {
        return (router.pathname === url)? styles.activeLink : undefined;
    }

    return (
        <nav className={styles.context}>

            {/* Logo */}
            <div className={styles.logoWrapper}>
                <img src="/logo.png"  alt=''/>
            </div>

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

            </div>

        </nav>
    );
}

export default Navbar;
