import styles from "./AnimateLetters.module.scss";
import React, {ReactNode} from "react";
import {motion, Variant, Variants} from "framer-motion";


const defaultLetterVariants: Variants = {
    before: {
        opacity: 0,
        y: -20,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 200
        }
    },
    after: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 200
        }
    }
}


const defaultContainerVariants: Variants = {
    before: { transition: { staggerChildren: 0.015 } },
    after: { transition: { staggerChildren: 0.03 } }
}


interface AnimateLettersProps {
    containerVariants?: {
        before: Variant;
        after: Variant;
    };
    letterVariants?: {
        before: Variant;
        after: Variant;
    };
    children?: ReactNode;
}

const AnimateLetters: React.FC<AnimateLettersProps> = ({ containerVariants, letterVariants, children }) => {
    if (typeof children !== 'string') {
        return <></>;
    }

    const words = children.split(' ').map((word, wordIndex) => {
        let letters = Array.from(word).map((letter, letterIndex) => (
            <motion.span
                key={`word-${wordIndex}-letter-${letterIndex}`}
                className={styles.letter}
                variants={letterVariants ?? defaultLetterVariants}
            >
                {letter === " " ? "\u00A0" : letter}
            </motion.span>
        ));

        return (
            <div className={styles.word} key={`word-${wordIndex}`}>
                { letters }
            </div>
        );
    });

    return (
        <motion.div
            className={styles.words}
            initial="before"
            animate="after"
            variants={containerVariants ?? defaultContainerVariants}
        >
            { words }
        </motion.div>
    );
}

export default AnimateLetters;
