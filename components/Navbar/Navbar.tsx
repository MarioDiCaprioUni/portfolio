import styles from "./Navbar.module.scss";
import React from "react";
import {motion, MotionProps} from "framer-motion";
import {Link as ScrollLink} from "react-scroll";
import {ReactScrollLinkProps} from "react-scroll/modules/components/Link";
import AnimateLetters from "../AnimateLetters/AnimateLetters";


interface NavbarLinkProps {
    scrollLinkId: string;
    prefix: string;
    title: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ scrollLinkId, prefix, title }) => {
    const linkScrollStyle: Partial<ReactScrollLinkProps> = {
        spy: true,
        smooth: true,
        duration: 1000
    }

    return (
        <ScrollLink to={scrollLinkId} {...linkScrollStyle}>
            <div className={styles.link}>
                <div className={styles.linkPrefix}>
                    <AnimateLetters>{ prefix }</AnimateLetters>
                </div>
                <div className={styles.linkTitle}>
                    <AnimateLetters>{ title }</AnimateLetters>
                </div>
            </div>
        </ScrollLink>
    );
}


const Navbar: React.FC = () => {
    const logoMotion: MotionProps = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: { duration: 0.5 }
        },
        whileTap: { scale: 0.6 },
        transition: { type: 'spring', duration: 0.4 }
    };

    return (
        <div className={styles.context}>

            <motion.div className={styles.logoWrapper} {...logoMotion}>
                <img src="/logo50.png" alt="logo" style={{ width: '100%', height: '100%' }} />
            </motion.div>

            <div className={styles.links}>

                <NavbarLink scrollLinkId="about" prefix="0.1" title="About" />

                <NavbarLink scrollLinkId="skills" prefix="0.2" title="Skills" />

                <NavbarLink scrollLinkId="interests" prefix="0.3" title="Interests" />

                <NavbarLink scrollLinkId="projects" prefix="0.4" title="Projects" />

            </div>

        </div>
    );
}


export default Navbar;
