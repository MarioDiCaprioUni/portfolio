import React, {useEffect, useRef, useState} from 'react';
import {motion, MotionProps, Transition, useScroll} from "framer-motion";
import {dimensions} from "../../../scssGlobals";
import {useMediaQuery} from "react-responsive";
import styles from "./Skills.module.scss";


/**
 * Framer-Motion effect that fades-in when a component is scrolled
 * into view.
 */
const fadeOnScrollEffect: MotionProps = {
    initial: { opacity: 0 },
    viewport: { once: true, margin: '-100px' },
    whileInView: { opacity: 1, transition: { duration: 0.8 } }
}


/**
 * This interface represents a card that describes a skill.
 * Note that this interface is solely used for its corresponding
 * component.
 * @see CardCoupleProps
 * @see CardCouple
 */
interface Card {
    /** The skill's title */
    title: string;
    /** The source of an image of this skill */
    imageSrc: string;
    /** A description for this skill */
    text: string;
}

/**
 * This interface represents a couple of cards. That is, in a table
 * of cards this interface holds two cards in the same row.
 * Note that this interface is solely used for its corresponding
 * component.
 * @see Card
 * @see CardCouple
 */
interface CardCoupleProps {
    /** The card on the left */
    left: Card;
    /** The card on the right */
    right: Card;
}

/**
 * This component places two {@link Card}s in one row. These cards have an
 * animation: The distance to each other increases as the page is scrolled.
 * This component is responsive: On small screens the cards aren't placed
 * besides each other, but on top of each other. Therefore, the animation
 * is removed in that case.
 * @param props The props for this component
 * @see Card
 * @see CardCoupleProps
 */
const CardCouple: React.FC<CardCoupleProps> = ({ left, right }) => {
    /** A reference to a wrapper for the cards. Used to identify scrolling events. */
    const ref = useRef(null);
    /** The progress of the animation. Between 0 and 1. */
    const [progress, setProgress] = useState<number>(0);
    /** Whether the screen is small, so to stack the cards instead of inlining them. */
    const isSmallScreen = useMediaQuery({ query: `(max-width: ${dimensions.medium}px)` });
    /** Whether a skill's icon should be inlined with its description. Depends on screen width. */
    const shouldNotInlineIcon = useMediaQuery({ query: '(max-width: 1300px)' });
    /** The overall scroll progress with respects to this component. */
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end end']
    });

    /* Delegates `onChange` events for the scroll animation.  */
    useEffect(() => {
        scrollYProgress.onChange(setProgress);
    }, []);

    /** The card animation's transition. */
    const transition: Transition = {
        duration: 0.4,
        type: "spring",
        stiffness: 100,
        damping: 10
    };

    return (
        <div ref={ref} className={styles.cardCouple}>

            {/* The left card */}
            <motion.div
                {...fadeOnScrollEffect}
                animate={isSmallScreen? undefined : { translateX: -100 * progress }}
                transition={transition}
                className={styles.card}
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

            {/* The right card */}
            <motion.div
                {...fadeOnScrollEffect}
                animate={isSmallScreen? undefined : { translateX: 100 * progress }}
                transition={transition}
                className={styles.card}
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


/**
 * This component highlights the author's skills. It consists of skills
 * wrapped inside of {@link CardCouple}s stacked upon each other. Also,
 * there is an arrow on top of this component that expands downwards
 * as the page scrolls, fitting perfectly with the `CardCouple` animation.
 * This component is responsive: The arrow is hidden on small screens.
 * @see CardCouple
 */
const SkillsPanel: React.FC = () => {
    /** A reference to a wrapper for this component. Used for the arrow's scroll animation. */
    const ref = useRef<HTMLDivElement>(null);
    /** The arrow's scroll progression. Between 0 and 1. */
    const [scroll, setScroll] = useState<number>(0);
    /** This component's height. This is the arrow's maximum length. */
    const [height, setHeight] = useState<number>(0);
    /** Scroll progression with respects to this component.  */
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end center']
    });

    /* Delegates `onChange` events for the component's height. */
    useEffect(() => {
        setHeight(ref.current?.clientHeight ?? 0);
    });

    /* Delegates `onChange` events for the arrow's scroll progression. */
    useEffect(() => {
        scrollYProgress.onChange(setScroll);
    }, []);

    /** The arrow's current length with respects to scroll progression. */
    const arrowLength = scroll * height * 1.1;

    /** The arrow's transition for the animation. */
    const arrowTransition: Transition = {
        type: "spring",
        stiffness: 100,
        damping: 13,
        duration: 0.5
    }

    return (
        <div className={styles.context}>

            {/* The panel's title */}
            <h1 className={styles.title}>
                <span>02.</span>
                My Skills
            </h1>

            <h2 className={styles.subtitle}>
                What tools do I use?
            </h2>

            {/* The arrow's body */}
            <motion.svg
                className={styles.arrowBody}
                animate={{ scaleY: arrowLength, originY: 0 }}
                transition={arrowTransition}>
                <line x1={0} y1={0} x2={0} y2={1} />
            </motion.svg>

            {/* The arrow's head */}
            <motion.svg
                className={styles.arrowHead}
                animate={{ translateY: arrowLength + 60, scaleY: -1, originY: 0 }}
                transition={arrowTransition}
                viewBox="0 0 237.64 237.64">
                <path xmlns="http://www.w3.org/2000/svg" d="M7.954,226.53c-2.23,4.623-2.295,8.072-0.609,9.915c3.911,4.275,15.926-3.905,23.323-9.051   l58.416-40.662c7.397-5.145,20.402-11.835,29.414-11.993c0.897-0.016,1.8-0.011,2.703,0.011c9.007,0.218,21.958,7.016,29.3,12.238   l56.403,40.151c7.343,5.221,19.303,13.473,23.301,9.219c1.74-1.849,1.751-5.33-0.381-9.997L129.648,7.047   c-4.264-9.333-11.335-9.404-15.79-0.163L7.954,226.53z"/>
            </motion.svg>

            {/* A wrapper for the cards */}
            <div ref={ref} className={styles.cards}>

                {/* React & Next */}
                <CardCouple
                    left={{
                        title: 'React Js',
                        imageSrc: '/img/react.png',
                        text:
                            `I love the way React lets you isolate each part of a website into single components.
                            The event-driven style that comes with this library is also extremely useful and easy
                            to use.`
                    }}
                    right={{
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
                        title: 'Redux',
                        imageSrc: '/img/redux.png',
                        text:
                            `This is perhaps the best state-management library there is. Redux lets you easily manage
                            states across your whole application. RTK-Query also adds seamless support for
                            connecting to a REST service!`
                    }}
                    right={{
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
                        title: 'Cypress',
                        imageSrc: '/img/cypress.png',
                        text:
                            `This is my testing library of choice. Cypress seamlessly provides unit tests and
                            integration tests out of the box. It also has support for modern third-party libraries,
                            making the whole process even more straightforward.`
                    }}
                    right={{
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
                        title: 'TypeScript',
                        imageSrc: '/img/typescript.png',
                        text:
                            `TypeScript is, simply but, the complete version of JavaScript. Adding typing compatibility,
                            it makes up for what JavaScript simply lacks. Developing larger applications becomes
                            much easier too, because of the additional documentation that types infer.`
                    }}
                    right={{
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
