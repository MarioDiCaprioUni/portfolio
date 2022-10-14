import {NextPage} from "next";
import Base from "../components/base/Base";
import styles from "../styles/About.module.scss";
import SkillsPanel from "../components/_about/skillsPanel/SkillsPanel";
import InterestsPanel from "../components/_about/interestsPanel/InterestsPanel";


const About: NextPage = () => {
    return (
        <Base title="Mario Di Caprio | About">

            {/* Canvas with profile description */}
            <div className={styles.canvas}>

                {/* profile summary */}
                <div className={styles.canvasProfileSummaryWrapper}>

                    {/* textual infos */}
                    <div className={styles.canvasProfileSummary}>
                        <h1>about.</h1>
                        <h2>
                            I'm an aspiring web developer based in Paderborn, Germany
                        </h2>
                        <p>
                            Since I was fourteen years old, I've loved the art of coding and
                            turning complex problems into simple, beautiful solutions. If i am
                            not coding, I am most likely developing my cooking skills, devouring
                            chess books or enjoying a nice evening with friends and family.
                        </p>
                    </div>

                    {/* profile picture */}
                    <div className={styles.canvasProfilePicture}>

                    </div>

                </div>

            </div>

            <SkillsPanel />

            <InterestsPanel />

        </Base>
    );
}

export default About;
