import styles from "./Navbar.module.scss";
import React from "react";
import Logo from "../Logo/Logo";
import {motion, MotionProps} from "framer-motion";


const Navbar: React.FC = () => {
    const logoMotion: MotionProps = {
        whileTap: { scale: 0.6 },
        transition: { type: 'spring', duration: 0.4 }
    };

    return (
        <div className={styles.context}>

            <motion.div className={styles.logoWrapper} {...logoMotion}>
                <Logo />
            </motion.div>

        </div>
    );
}


export default Navbar;
