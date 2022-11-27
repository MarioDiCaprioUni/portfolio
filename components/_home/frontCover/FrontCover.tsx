import styles from "./FrontCover.module.scss";
import React, {ReactNode} from "react";
import {motion, Variants} from "framer-motion";


/**
 * Variants for the letters. Each letter can be in one of two
 * states: `hidden` or `visible`.
 */
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


/**
 * Creates a list of JSX components from a given string. Each letter has the
 * following properties:
 * - glows in themed colors
 * - hides initially
 * - shows on viewport enter
 * @param text The string to convert to the described JSX component
 * @return The described JSX component
 * @see letterVariants
 */
function buildLettersWithAnimation(text: string): ReactNode {
    const letters = Array.from(text).map((char, index) => {
        if (char === '\n') {
            return <br key={index} className={styles.letter}/>;
        }
        if (char === ' ') {
            return <span key={index} className={styles.letter} style={{ margin: 20 }} />
        }
        return (
            <motion.span
                key={index}
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
        <motion.h1
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
        </motion.h1>
    );
}


/**
 * The main display on the home page. This display consists of the author's
 * name in glowing, vibrant colors. Each letter has an intro-animation.
 */
const FrontCover: React.FC = () => {
    return (
        <div className={styles.context}>
            { buildLettersWithAnimation(`Hello,\nI'm Mario`) }
        </div>
    );
}


export default FrontCover;
