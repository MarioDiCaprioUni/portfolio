import styles from "./About.module.scss";
import React from "react";


const About: React.FC = () => {
    return (
        <div className={styles.context}>

            <h1 className={styles.title}>
                <span>01.</span>
                Who is Mario?
            </h1>

            <h2 className={styles.summary}>
                I'm an aspiring web developer based in Paderborn, Germany
            </h2>

            <p className={styles.description}>
                Since I was fourteen years old, I've loved the art of coding and
                turning complex problems into simple, beautiful solutions. If i am
                not coding, I am most likely developing my cooking skills, devouring
                chess books or enjoying a nice evening with friends and family.
            </p>

        </div>
    );
}


export default About;
