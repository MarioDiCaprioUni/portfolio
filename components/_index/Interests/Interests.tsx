import React, {useState, useEffect} from 'react';
import styles from './Interests.module.scss';
import {motion, useScroll} from "framer-motion";


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
        <motion.div id="interests" className={styles.context}>

            <ChessWheel />

            <div className={styles.interestsList}>

                <h1>
                    <span>03.</span>
                    My Interests
                </h1>

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

export default Interests;
