import styles from "./About.module.scss";
import React from "react";
import {motion, MotionProps, Variants} from "framer-motion";


const childVariants: Variants = {
    before: {
        opacity: 0,
        translateY: -20,
    },
    after: {
        opacity: 1,
        translateY: 0,
        transition: {
            duration: 0.5
        }
    }
}

const containerMotion: MotionProps = {
    initial: "before",
    whileInView: "after",
    viewport: {
        once: true,
        margin: '-400px'
    },
    transition: {
        staggerChildren: 0.4
    }
}


const About: React.FC = () => {
    return (
        <motion.div id="about" className={styles.context} {...containerMotion}>

            <motion.h1 className={styles.title} variants={childVariants}>
                <span>01.</span>
                Who is Mario?
            </motion.h1>

            <motion.h2 className={styles.summary} variants={childVariants}>
                I'm an aspiring web developer based in Paderborn, Germany
            </motion.h2>

            <motion.p className={styles.description} variants={childVariants}>
                Since I was fourteen years old, I've loved the art of coding and
                turning complex problems into simple, beautiful solutions. If i am
                not coding, I am most likely developing my cooking skills, devouring
                chess books or enjoying a nice evening with friends and family.
            </motion.p>

        </motion.div>
    );
}


export default About;
