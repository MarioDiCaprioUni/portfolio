import { ComponentMeta, ComponentStory } from "@storybook/react";
import About from "../pages/about";


export default {
    title: 'pages/About',
    component: About
} as ComponentMeta<typeof About>;


export const Main: ComponentStory<typeof About> = () => {
    return (
        <About />
    );
}
