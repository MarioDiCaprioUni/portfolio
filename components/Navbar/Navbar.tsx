import styles from "./Navbar.module.scss";
import React, {useState} from "react";
import {AnimatePresence, motion, MotionProps} from "framer-motion";
import {Link as ScrollLink} from "react-scroll";
import {ReactScrollLinkProps} from "react-scroll/modules/components/Link";
import AnimateLetters from "../AnimateLetters/AnimateLetters";
import {AiOutlineMenu as MenuButtonClosedIcon} from "react-icons/ai";
import {IoClose as MenuButtonOpenIcon} from "react-icons/io5";
import {useSmallScreen} from "../../hooks/useScreen";


const logoMotion: MotionProps = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: { duration: 0.5 }
    },
    whileTap: { scale: 0.6 },
    transition: { type: 'spring', duration: 0.4 }
};


const menuButtonMotion: MotionProps = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 0 },
    transition: { type: 'spring', duration: 0.5 }
}


const linkScrollStyle: Partial<ReactScrollLinkProps> = {
    spy: true,
    smooth: true,
    duration: 1000
}


interface NavbarLinkProps {
    scrollLinkId: string;
    prefix: string;
    title: string;
    onLinkClick?: () => void;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ scrollLinkId, prefix, title, onLinkClick }) => {
    const isSmallScreen = useSmallScreen();

    function handleLinkClicked() {
        if (onLinkClick) onLinkClick();
    }

    if (isSmallScreen) {
        return (
            <ScrollLink to={scrollLinkId} {...linkScrollStyle}>
                <div className={styles.link} onClick={handleLinkClicked}>
                    <div className={styles.linkPrefix}>
                        {prefix}
                    </div>
                    <div className={styles.linkTitle}>
                        {title}
                    </div>
                </div>
            </ScrollLink>
        );
    }

    return (
        <ScrollLink to={scrollLinkId} {...linkScrollStyle}>
            <div className={styles.link}>
                <div className={styles.linkPrefix}>
                    <AnimateLetters>{ prefix }</AnimateLetters>
                </div>
                <div className={styles.linkTitle}>
                    <AnimateLetters>{ title }</AnimateLetters>
                </div>
            </div>
        </ScrollLink>
    );
}


interface SidebarProps {
    open: boolean;
    onLinkClick?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open , onLinkClick }) => {
    function handleLinkClick() {
        if (onLinkClick) onLinkClick();
    }

    const Content: React.FC = () => (
        <>
            <motion.div
                className={styles.sidebar}
                initial={{ translateX: '100vw' }}
                animate={{ translateX: '0px' }}
                exit={{ translateX: '100vw' }}
                transition={{ type: 'smooth' }}
            >
                <div className={styles.linksInSidebar}>

                    <NavbarLink scrollLinkId="about" prefix="0.1" title="About" onLinkClick={handleLinkClick} />

                    <NavbarLink scrollLinkId="skills" prefix="0.2" title="Skills" onLinkClick={handleLinkClick} />

                    <NavbarLink scrollLinkId="interests" prefix="0.3" title="Interests" onLinkClick={handleLinkClick} />

                    <NavbarLink scrollLinkId="projects" prefix="0.4" title="Projects" onLinkClick={handleLinkClick} />

                </div>
            </motion.div>

            <motion.div
                className={styles.sidebarMask}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            />
        </>
    );

    return (
        <AnimatePresence>
            { open? <Content /> : undefined }
        </AnimatePresence>
    );
}


const Navbar: React.FC = () => {
    const isSmallScreen = useSmallScreen();
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    function toggleMenuOpen() {
        setIsMenuOpen(!isMenuOpen);
    }

    const MenuButton: React.FC = () => (
        <AnimatePresence>
            {
                isMenuOpen ?
                    <motion.div className={styles.menuButton} onClick={toggleMenuOpen} {...menuButtonMotion}>
                        <MenuButtonOpenIcon />
                    </motion.div>
                    :
                    <motion.div className={styles.menuButton} onClick={toggleMenuOpen} {...menuButtonMotion}>
                        <MenuButtonClosedIcon />
                    </motion.div>
            }
        </AnimatePresence>
    );

    if (isSmallScreen) {
        return (
            <div className={styles.context}>

                <motion.div className={styles.logoWrapper} {...logoMotion}>
                    <img src="/logo50.png" alt="logo" style={{ width: '100%', height: '100%' }} />
                </motion.div>

                <MenuButton />

                <Sidebar open={isMenuOpen} onLinkClick={toggleMenuOpen} />

            </div>
        );
    }

    return (
        <div className={styles.context}>

            <motion.div className={styles.logoWrapper} {...logoMotion}>
                <img src="/logo50.png" alt="logo" style={{ width: '100%', height: '100%' }} />
            </motion.div>

            <div className={styles.links}>

                <NavbarLink scrollLinkId="about" prefix="0.1" title="About" />

                <NavbarLink scrollLinkId="skills" prefix="0.2" title="Skills" />

                <NavbarLink scrollLinkId="interests" prefix="0.3" title="Interests" />

                <NavbarLink scrollLinkId="projects" prefix="0.4" title="Projects" />

            </div>

        </div>
    );
}


export default Navbar;
