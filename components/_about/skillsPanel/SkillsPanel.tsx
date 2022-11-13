import React, {useEffect, useRef, useState} from 'react';
import {motion, Transition, useScroll} from "framer-motion";
import {dimensions} from "../../../scssGlobals";
import {useMediaQuery} from "react-responsive";
import styles from "./SkillsPanel.module.scss";


interface Card {
    title: string;
    imageSrc: string;
    text: string;
    className: string;
}

interface CardCoupleProps {
    left: Card;
    right: Card;
}

const CardCouple: React.FC<CardCoupleProps> = ({ left, right }) => {
    const ref = useRef(null);
    const [progress, setProgress] = useState<number>(0);
    const isSmallScreen = useMediaQuery({ query: `(max-width: ${dimensions.medium}px)` });
    const shouldNotInlineIcon = useMediaQuery({ query: '(max-width: 1300px)' });
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end end']
    });

    useEffect(() => {
        scrollYProgress.onChange(setProgress);
    }, []);

    const transition: Transition = {
        duration: 0.4,
        type: "spring",
        stiffness: 100,
        damping: 10
    };

    return (
        <div ref={ref} className={styles.cardCouple}>

            <motion.div
                animate={isSmallScreen? undefined : { translateX: -100 * progress }}
                transition={transition}
                className={left.className}
            >
                <div>
                    {
                        shouldNotInlineIcon?
                            <>
                                <img src={left.imageSrc} alt="" />
                                <h1>{ left.title }</h1>
                            </>
                            :
                            <>
                                <h1>{ left.title }</h1>
                                <img src={left.imageSrc} alt="" />
                            </>
                    }
                </div>
                <div>
                    { left.text }
                </div>
            </motion.div>

            <motion.div
                animate={isSmallScreen? undefined : { translateX: 100 * progress }}
                transition={transition}
                className={right.className}
            >
                <div>
                    <img src={right.imageSrc} alt="" />
                    <h1>{ right.title }</h1>
                </div>
                <div>
                    { right.text }
                </div>
            </motion.div>

        </div>
    );
}

const SkillsPanel: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [scroll, setScroll] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end center']
    });

    useEffect(() => {
        setHeight(ref.current?.clientHeight ?? 0);
    });

    useEffect(() => {
        scrollYProgress.onChange(setScroll);
    }, []);


    const arrowMaxLength = scroll * height * 1.1;
    const arrowTransition: Transition = {
        type: "spring",
        stiffness: 100,
        damping: 13,
        duration: 0.5
    }

    return (
        <div className={styles.context}>
            <h1 className={styles.title}>My Skills</h1>

            <motion.svg
                className={styles.arrowBody}
                animate={{ scaleY: arrowMaxLength, originY: 0 }}
                transition={arrowTransition}>
                <line x1={0} y1={0} x2={0} y2={1} />
            </motion.svg>

            <motion.svg
                className={styles.arrowHead}
                animate={{ translateY: arrowMaxLength + 60, scaleY: -1, originY: 0 }}
                transition={arrowTransition}
                viewBox="0 0 237.64 237.64">
                <path xmlns="http://www.w3.org/2000/svg" d="M7.954,226.53c-2.23,4.623-2.295,8.072-0.609,9.915c3.911,4.275,15.926-3.905,23.323-9.051   l58.416-40.662c7.397-5.145,20.402-11.835,29.414-11.993c0.897-0.016,1.8-0.011,2.703,0.011c9.007,0.218,21.958,7.016,29.3,12.238   l56.403,40.151c7.343,5.221,19.303,13.473,23.301,9.219c1.74-1.849,1.751-5.33-0.381-9.997L129.648,7.047   c-4.264-9.333-11.335-9.404-15.79-0.163L7.954,226.53z"/>
            </motion.svg>

            <div ref={ref} className={styles.cards}>

                {/* React & Next */}
                <CardCouple
                    left={{
                        className: styles.react,
                        title: 'React Js',
                        imageSrc: '/img/react.png',
                        text:
                            `I love the way React lets you isolate each part of a website into single components.
                            The event-driven style that comes with this library is also extremely useful and easy
                            to use.`
                    }}
                    right={{
                        className: styles.next,
                        title: 'Next Js',
                        imageSrc: '/img/next.png',
                        text:
                            `Built on top of React, Next Js is my framework of choice. I love how it provides a clear
                            project structure and many useful features from the get-go. It is also really easy to deploy
                            projects to Vercel!`
                    }}
                />

                {/* Redux & Framer */}
                <CardCouple
                    left={{
                        className: styles.redux,
                        title: 'Redux',
                        imageSrc: '/img/redux.png',
                        text:
                            `This is perhaps the best state-management library there is. Redux lets you easily manage
                            states across your whole application. RTK-Query also adds seamless support for
                            connecting to a REST service!`
                    }}
                    right={{
                        className: styles.framer,
                        title: 'Framer',
                        imageSrc: '/img/framer.png',
                        text:
                            `Framer helps to create beautiful animations with few lines of code, such as this one!
                            If used correctly, it can help to create awesome-looking applications.`
                    }}
                />

                {/* Cypress & Storybook */}
                <CardCouple
                    left={{
                        className: styles.cypress,
                        title: 'Cypress',
                        imageSrc: '/img/cypress.png',
                        text:
                            `This is my testing library of choice. Cypress seamlessly provides unit tests and
                            integration tests out of the box. It also has support for modern third-party libraries,
                            making the whole process even more straightforward.`
                    }}
                    right={{
                        className: styles.storybook,
                        title: 'Storybook',
                        imageSrc: '/img/storybook.png',
                        text:
                            `Along with Cypress, Storybook is extremely useful to test and view components in isolation.
                            This becomes especially clear when the application grows in size and keeping track of
                            each component becomes harder!`
                    }}
                />

                {/* Typescript & Sass */}
                <CardCouple
                    left={{
                        className: styles.typescript,
                        title: 'TypeScript',
                        imageSrc: '/img/typescript.png',
                        text:
                            `TypeScript is, simply but, the complete version of JavaScript. Adding typing compatibility,
                            it makes up for what JavaScript simply lacks. Developing larger applications becomes
                            much easier too, because of the additional documentation that types infer.`
                    }}
                    right={{
                        className: styles.sass,
                        title: 'Sass',
                        imageSrc: '/img/sass.png',
                        text:
                            `Sass (or Scss) is a helpful precompiler for standard CSS. It adds a ton of features, such as
                            mixins, extensions and a proper support for variables, which makes development much more
                            compact.`
                    }}
                />

            </div>

        </div>
    );
}

export default SkillsPanel;
