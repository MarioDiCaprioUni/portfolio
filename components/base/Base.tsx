import React from 'react';
import Navbar from "../navbar/Navbar";
import Head from "next/head";
import {motion} from 'framer-motion';
import styles from './Base.module.scss';


/**
 * The base accepts a title and children to lay out as content.
 */
interface BaseProps {
    /** The page's title (as in, the head) */
    title: string;
    /** The actual content */
    children?: React.ReactNode;
}

/**
 * This is considered to be the base of all pages. It consists of a {@link Navbar}
 * and the page's content, which is passed as this component's children. The children
 * are laid out in a `<main>` tag with its ID set to `"main"`.
 * @param props This component's props
 * @see BaseProps
 */
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
