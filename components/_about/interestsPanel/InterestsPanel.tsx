import React, {useState, useEffect} from 'react';
import styles from './InterestsPanel.module.scss';
import {motion, MotionProps, useScroll} from "framer-motion";


const fadeOnScrollEffect: MotionProps = {
    initial: { opacity: 0 },
    viewport: { once: true, margin: '-200px' },
    whileInView: { opacity: 1, transition: { duration: 0.8 } }
}


const ChessWheel: React.FC = () => {
    const [rotation, setRotation] = useState<number>(0);
    const { scrollY } = useScroll();

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


const InterestsPanel: React.FC = () => {
    return (
        <motion.div className={styles.context} {...fadeOnScrollEffect}>

            <ChessWheel />

            <div className={styles.interestsList}>
                <h1>My Interests</h1>
                <p>
                    <span>I like developing new skills</span>
                    <span>I <b>LOVE</b> playing chess</span>
                    <span>I take an interest in cooking</span>
                    <span>I enjoy traveling and exploring new cultures</span>
                </p>
            </div>

        </motion.div>
    );
}

export default InterestsPanel;
