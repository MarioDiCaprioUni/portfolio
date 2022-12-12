import styles from "./Projects.module.scss";
import React, {ReactNode} from "react";
import MaskedImage from "../../MaskedImage/MaskedImage";
import {BsGithub as GithubIcon} from "react-icons/bs";
import {MdOpenInBrowser as OfficialWebsiteIcon} from "react-icons/md";
import {motion, MotionProps, Variants} from "framer-motion";
import {useMaxScreen} from "../../../hooks/useScreen";


/**
 * Framer-Motion effect that fades-in when a component is scrolled
 * into view.
 */
const fadeOnScrollEffect: MotionProps = {
    initial: { opacity: 0 },
    viewport: { once: true, margin: '-100px' },
    whileInView: { opacity: 1, transition: { duration: 0.8 } }
}


const infoItemVariants: Variants = {
    before: {
        opacity: 0,
        translateX: -20,
    },
    after: {
        opacity: 1,
        translateX: 0,
        transition: {
            duration: 0.7
        }
    }
}


const infoContainerMotion: MotionProps = {
    initial: "before",
    whileInView: "after",
    viewport: {
        once: true,
        margin: '-150px'
    },
    transition: {
        staggerChildren: 0.4
    }
}


const thumbnailMotion: MotionProps = {
    initial: {
        opacity: 0,
        translateX: -20
    },
    whileInView: {
        opacity: 1,
        translateX: 0
    },
    viewport: {
        once: true,
        margin: '-150px'
    },
    transition: {
        staggerChildren: 0.4,
        duration: 0.7
    }
}


interface FeaturedProjectProps {
    imgSrc: string;
    title: string;
    align: 'left' | 'right';
    links?: {
        official?: string;
        github?: string;
    }
    children?: ReactNode;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ imgSrc, title, align, links, children }) => {
    const isSmallScreen = useMaxScreen(1100);
    const projectClass = align === 'left'? styles.featuredProjectLeft : styles.featuredProjectRight;

    if (isSmallScreen) {
        return (
            <motion.div className={styles.featuredProjectSmall} {...infoContainerMotion}>

                <motion.h1 variants={infoItemVariants}>
                    <span>Featured Project<br/></span>
                    { title }
                </motion.h1>

                <motion.p variants={infoItemVariants}>
                    { children }
                </motion.p>

                <motion.div variants={infoItemVariants}>
                    {
                        links?.github &&
                        <a href={links.github}>
                            <GithubIcon />
                        </a>
                    }
                    {
                        links?.official &&
                        <a href={links.official}>
                            <OfficialWebsiteIcon />
                        </a>
                    }
                </motion.div>

            </motion.div>
        );
    }

    return (
        <div className={projectClass}>

            <motion.div {...thumbnailMotion}>
                <MaskedImage width="580px" height="340px" src={imgSrc} />
            </motion.div>

            <motion.div className={styles.featuredProjectContent} {...infoContainerMotion}>

                <motion.h1 variants={infoItemVariants}>
                    <span>Featured Project<br/></span>
                    { title }
                </motion.h1>

                <motion.p variants={infoItemVariants}>
                    { children }
                </motion.p>

                <motion.div variants={infoItemVariants}>
                    {
                        links?.github &&
                        <a href={links.github}>
                            <GithubIcon />
                        </a>
                    }
                    {
                        links?.official &&
                        <a href={links.official}>
                            <OfficialWebsiteIcon />
                        </a>
                    }
                </motion.div>

            </motion.div>

        </div>
    );
}


const Projects: React.FC = () => {
    return (
        <div id="projects" className={styles.context}>
            <div>

                <motion.h1 className={styles.title} {...fadeOnScrollEffect}>
                    <span>04.</span>
                    Some of my projects
                </motion.h1>

                <FeaturedProject
                    imgSrc="/thumbnails/domcol_js.png"
                    title="Domcol-JS"
                    align="right"
                    links={{
                        official: 'https://domcol-js.vercel.app',
                        github: 'https://github.com/MarioDiCaprioUni/domcol-js'
                    }}
                >
                    A tool for visualizing complex-valued functions using a method called
                    <i>Domain Coloring</i>. Check it out if you are a math-geek, you can even
                    plot the famous Mandelbrot-Set!
                </FeaturedProject>

            </div>
        </div>
    );
}


export default Projects;
