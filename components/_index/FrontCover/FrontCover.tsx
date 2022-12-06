import styles from "./FrontCover.module.scss";
import React from "react";



/**
 * The main display on the home page. This display consists of the author's
 * name in glowing, vibrant colors. Each letter has an intro-animation.
 */
const FrontCover: React.FC = () => {
    return (
        <div className={styles.context}>

            <div className={styles.myNameIs}>
                Hi, I am
            </div>

            <div className={styles.name}>
                Mario Di Caprio
            </div>

            <div className={styles.slogan}>
                Your friendly neighbourhood web-dev.
            </div>

            <div className={styles.summary}>
                I'm an aspiring software developer specializing in web-development.
            </div>

        </div>
    );
}


export default FrontCover;
