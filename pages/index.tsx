import type { NextPage } from 'next';
import Base from "../components/base/Base";
import styles from '../styles/Home.module.scss';
import ProjectPreview from "../components/projectPreview/ProjectPreview";


const Home: NextPage = () => {
    return (
        <Base title="Mario Di Caprio | Home">

            <div className={styles.canvas}>

            </div>

            <div className={styles.latestWorkHeaderWrapper}>
                <span>some of my latest work</span>
            </div>

            <div className={styles.projects}>
                <ProjectPreview
                    id="domcol-js"
                    title="Domcol JS"
                    thumbnailSrc="/thumbnails/domcol_js.png"
                    summary="Plot complex-valued functions"
                />
            </div>

        </Base>
    );
}

export default Home;
