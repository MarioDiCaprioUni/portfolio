import type { NextPage } from 'next';
import Base from "../components/base/Base";
import styles from '../styles/Home.module.scss';


const Home: NextPage = () => {
    return (
        <Base title="Mario Di Caprio | Home">

            <div className={styles.canvas}>

            </div>

            <div className={styles.latestWorkHeaderWrapper}>
                <span>some of my latest work</span>
            </div>

        </Base>
    );
}

export default Home;
