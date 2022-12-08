import { ComponentMeta, ComponentStory } from "@storybook/react";
import FrontCover from "./FrontCover";


export default {
    title: 'components/_home/FrontCover',
    component: FrontCover
} as ComponentMeta<typeof FrontCover>;


export const Main: ComponentStory<typeof FrontCover> = (props) => {
    return (
        <FrontCover {...props} />
    );
}
