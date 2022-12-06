import styles from '../styles/Home.module.scss';
import type { NextPage } from 'next';
import FrontCover from "../components/_index/FrontCover/FrontCover";
import About from "../components/_index/About/About";
import Skills from "../components/_index/Skills/Skills";
import Interests from "../components/_index/Interests/Interests";
import Projects from "../components/_index/Projects/Projects";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";


const Home: NextPage = () => {
    return (
        <div className={styles.context}>

            {/* Appendix to document head */}
            <Head>
                <title>Mario Di Caprio</title>
            </Head>

            <Navbar />

            <FrontCover />
            <About />
            <Skills />
            <Interests />
            <Projects />

        </div>
    );
}

export default Home;
