import { ComponentMeta, ComponentStory } from "@storybook/react";
import About from "./About";


export default {
    title: 'components/_home/About',
    component: About
} as ComponentMeta<typeof About>;


export const Main: ComponentStory<typeof About> = (props) => {
    return (
        <About {...props} />
    );
}
