import styles from "./Navbar.module.scss";
import React from "react";
import {motion, MotionProps} from "framer-motion";


const Navbar: React.FC = () => {
    const logoMotion: MotionProps = {
        whileTap: { scale: 0.6 },
        transition: { type: 'spring', duration: 0.4 }
    };

    return (
        <div className={styles.context}>

            <motion.div className={styles.logoWrapper} {...logoMotion}>
                <img src="/logo50.png" alt="logo" style={{ width: '100%', height: '100%' }} />
            </motion.div>

        </div>
    );
}


export default Navbar;
