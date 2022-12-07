import styles from "./Navbar.module.scss";
import React from "react";
import {motion, MotionProps} from "framer-motion";
import {Link as ScrollLink} from "react-scroll";
import {ReactScrollLinkProps} from "react-scroll/modules/components/Link";


const Navbar: React.FC = () => {
    const logoMotion: MotionProps = {
        whileTap: { scale: 0.6 },
        transition: { type: 'spring', duration: 0.4 }
    };

    const linkScrollStyle: Partial<ReactScrollLinkProps> = {
        spy: true,
        smooth: true,
        duration: 1000
    }

    return (
        <div className={styles.context}>

            <motion.div className={styles.logoWrapper} {...logoMotion}>
                <img src="/logo50.png" alt="logo" style={{ width: '100%', height: '100%' }} />
            </motion.div>

            <motion.div className={styles.links}>

                <ScrollLink to="about" {...linkScrollStyle}>
                    <span className={styles.link}>
                        <span>01.</span> About
                    </span>
                </ScrollLink>

                <ScrollLink to="skills" {...linkScrollStyle}>
                    <span className={styles.link}>
                        <span>02.</span> Skills
                    </span>
                </ScrollLink>

                <ScrollLink to="interests" {...linkScrollStyle}>
                    <span className={styles.link}>
                        <span>03.</span> Interests
                    </span>
                </ScrollLink>

                <ScrollLink to="projects" {...linkScrollStyle}>
                    <span className={styles.link}>
                        <span>04.</span> Projects
                    </span>
                </ScrollLink>

            </motion.div>

        </div>
    );
}


export default Navbar;
