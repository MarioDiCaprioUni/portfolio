import { ComponentMeta, ComponentStory } from "@storybook/react";
import Interests from "./Interests";


export default {
    title: 'components/_home/Interests',
    component: Interests
} as ComponentMeta<typeof Interests>;


export const Main: ComponentStory<typeof Interests> = (props) => {
    return (
        <Interests {...props} />
    );
}
