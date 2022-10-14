import React from 'react';
import Navbar from "../navbar/Navbar";
import Head from "next/head";
import styles from './Base.module.scss';


interface BaseProps {
    title: string;
    children?: React.ReactNode;
}

const Base: React.FC<BaseProps> = ({ children, title }) => {
    return (
        <div className={styles.context}>

            <Head>
                <title>{ title }</title>
            </Head>

            <Navbar />

            <main id="main">
                { children }
            </main>

        </div>
    );
}

export default Base;
