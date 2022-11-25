import styles from '../styles/Home.module.scss';
import type { NextPage } from 'next';
import Base from "../components/base/Base";
import {DomcolJS} from "../components/projectPreview/ProjectPreview";
import FrontCover from "../components/_home/frontCover/FrontCover";
import {AnimateSharedLayout, motion} from "framer-motion";


const Home: NextPage = () => {
    return (
        <Base title="Mario Di Caprio | Home">
            <div className={styles.context}>

                <div className={styles.canvas}>
                    <FrontCover />
                </div>

                <div className={styles.latestWorkHeaderWrapper}>
                    <span>some of my latest work</span>
                </div>

                <AnimateSharedLayout>
                    <motion.div layout className={styles.projects}>
                        <DomcolJS />
                    </motion.div>
                </AnimateSharedLayout>

            </div>
        </Base>
    );
}

export default Home;
