import { ComponentMeta, ComponentStory } from "@storybook/react";
import Projects from "./Projects";


export default {
    title: 'components/_home/Projects',
    component: Projects
} as ComponentMeta<typeof Projects>;


export const Main: ComponentStory<typeof Projects> = (props) => {
    return (
        <Projects {...props} />
    );
}
