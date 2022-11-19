import React from 'react';
import Navbar from "../navbar/Navbar";
import Head from "next/head";
import {motion} from 'framer-motion';
import styles from './Base.module.scss';


interface BaseProps {
    title: string;
    children?: React.ReactNode;
}

const Base: React.FC<BaseProps> = ({ children, title }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8 } }}
            className={styles.context}
        >

            <Head>
                <title>{ title }</title>
            </Head>

            <Navbar />

            <main id="main">
                { children }
            </main>

        </motion.div>
    );
}

export default Base;
