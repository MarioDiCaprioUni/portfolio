import styles from "./Projects.module.scss";
import React, {ReactNode} from "react";
import MaskedImage from "../../MaskedImage/MaskedImage";
import {BsGithub as GithubIcon} from "react-icons/bs";
import {MdOpenInBrowser as OfficialWebsiteIcon} from "react-icons/md";


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
    const projectClass = align === 'left'? styles.featuredProjectLeft : styles.featuredProjectRight;

    return (
        <div id="projects" className={projectClass}>

            <MaskedImage width="580px" height="340px" src={imgSrc} />

            <div className={styles.featuredProjectContent}>

                <h1>
                    <span>Featured Project<br/></span>
                    { title }
                </h1>

                <p>
                    { children }
                </p>

                <div>
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
                </div>

            </div>

        </div>
    );
}


const Projects: React.FC = () => {
    return (
        <div className={styles.context}>

            <h1 className={styles.title}>
                <span>04.</span>
                Some of my projects
            </h1>

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
    );
}


export default Projects;
