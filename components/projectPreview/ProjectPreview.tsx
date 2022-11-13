import styles from "./ProjectPreview.module.scss";
import React from "react";


interface ProjectProps {
    id: string;
    title: string;
    thumbnailSrc: string;
    summary: string;
}

const ProjectPreview: React.FC<ProjectProps> = ({ title, thumbnailSrc, summary }) => {
    return (
        <div className={styles.context}>

            {/* Thumbnail */}
            <img className={styles.thumbnail} src={thumbnailSrc} alt="" />

            {/* Title */}
            <h1 className={styles.title}>
                { title }
            </h1>

            {/* Summary */}
            <p className={styles.summary}>
                { summary }
            </p>

        </div>
    );
}


export default ProjectPreview;
