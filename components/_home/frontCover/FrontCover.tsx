import styles from "./FrontCover.module.scss";
import React, {ReactNode} from "react";
import {motion, Variants} from "framer-motion";


const letterVariants: Variants = {
    hidden: {
        opacity: 0,
        scale: 0,
        rotate: -90
    },
    visible: {
        opacity: 1,
        scale: 1,
        rotate: 0
    }
}


function buildLettersWithAnimation(text: string): ReactNode {
    const letters = Array.from(text).map(char => {
        if (char === '\n') {
            return <span style={{ margin: 20 }} />;
        }
        return (
            <motion.span
                key={char}
                className={styles.letter}
                variants={letterVariants}
                transition={{
                    duration: 0.5
                }}
            >
                {char}
            </motion.span>
        );
    });

    return (
        <motion.div
            className={styles.letters}
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: {
                    transition: { staggerChildren: 0.1 }
                }
            }}
        >
            { letters }
        </motion.div>
    );
}


const FrontCover: React.FC = () => {
    return (
        <motion.div className={styles.context}>
            { buildLettersWithAnimation('Mario\nDi Caprio') }
        </motion.div>
    );
}


export default FrontCover;
