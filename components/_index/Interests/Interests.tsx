import React, {useState, useEffect} from 'react';
import styles from './Interests.module.scss';
import {motion, MotionProps, useScroll, Variants} from "framer-motion";


const listItemVariants: Variants = {
    before: {
        opacity: 0,
        translateX: -20,
    },
    after: {
        opacity: 1,
        translateX: 0,
        transition: {
            duration: 0.5
        }
    }
}


const listContainerMotion: MotionProps = {
    initial: "before",
    whileInView: "after",
    viewport: {
        once: true
    },
    transition: {
        staggerChildren: 0.4
    }
}


/**
 * Framer-Motion effect that fades-in when a component is scrolled
 * into view.
 */
const fadeOnScrollEffect: MotionProps = {
    initial: { opacity: 0 },
    viewport: { once: true, margin: '-300px' },
    whileInView: { opacity: 1, transition: { duration: 0.8 } }
}


/**
 * This is a decorative wheel made of chess pieces. It rotates on scroll.
 */
const ChessWheel: React.FC = () => {
    /** The wheel's current rotation */
    const [rotation, setRotation] = useState<number>(0);
    /** The global scroll value. Used to update rotation. */
    const { scrollY } = useScroll();

    /* Updates the wheel's rotation on scroll */
    useEffect(() => {
        scrollY.onChange(x => {
            setRotation(x * 0.25);
        });
    }, [scrollY])

    return (
        <div className={styles.interestsImages}>
            <motion.img
                src="/img/chesswheel.png"
                animate={{
                    rotate: rotation
                }}
                transition={{
                    duration: 2,
                    ease: 'easeOut'
                }}
            />
        </div>
    );
}


/**
 * This is the panel displaying the author's interests. On the left can be
 * found a decorative {@link ChessWheel}, while on the right is a list of
 * interests. This component is responsive: On small screens the wheel
 * is on top and the list is on the bottom.
 */
const Interests: React.FC = () => {
    return (
        <motion.div id="interests" className={styles.context} {...fadeOnScrollEffect}>

            <ChessWheel />

            <div className={styles.interestsList}>

                <h1>
                    <span>03.</span>
                    My Interests
                </h1>

                <motion.p {...listContainerMotion}>
                    <motion.span variants={listItemVariants}>
                        I like developing new skills
                    </motion.span>
                    <motion.span variants={listItemVariants}>
                        I <b>LOVE</b> playing chess
                    </motion.span>
                    <motion.span variants={listItemVariants}>
                        I take an interest in cooking
                    </motion.span>
                    <motion.span variants={listItemVariants}>
                        I enjoy traveling and exploring new cultures
                    </motion.span>
                </motion.p>

            </div>

        </motion.div>
    );
}

export default Interests;
