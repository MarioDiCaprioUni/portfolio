import styles from "../styles/Projects.module.scss";
import {NextPage} from "next";
import Base from "../components/base/Base";
import {DomcolJS} from "../components/projectPreview/ProjectPreview";


const Projects: NextPage = () => {
    return (
        <Base title="Mario Di Caprio | Projects">
            <div className={styles.context}>

                {/* Top Canvas with page description */}
                <div className={styles.canvas}>
                    <div className={styles.canvasWrapper}>
                        <h1>Projects.</h1>
                        <p>
                            Here you can find most of my finished projects. As you can see,
                            I am (mostly) a web developer and thus lay my focus on creating
                            beautiful, interactive UIs.
                        </p>
                    </div>
                </div>

                <h2 className={styles.projectsHeader}>
                    personal.
                </h2>
                <div className={styles.projectsWrapper}>
                    <DomcolJS />
                </div>

            </div>
        </Base>
    );
}


export default Projects;
