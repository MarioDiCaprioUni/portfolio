import styles from "./MaskedImage.module.scss";
import React from "react";


interface MaskedImageProps {
    width: number | string;
    height: number | string;
    src: string;
}

const MaskedImage: React.FC<MaskedImageProps> = ({ src, width, height }) => {
    return (
        <div className={styles.context}>

            {/* The image */}
            <img src={src} alt="" style={{ width, height }} />

            {/* The mask */}
            <div style={{ width, height }} />

        </div>
    );
}


export default MaskedImage;
