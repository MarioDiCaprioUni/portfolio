import { ComponentMeta, ComponentStory } from "@storybook/react";
import Skills from "./Skills";


export default {
    title: 'components/_home/Skills',
    component: Skills
} as ComponentMeta<typeof Skills>;


export const Main: ComponentStory<typeof Skills> = (props) => {
    return (
        <Skills {...props} />
    );
}
