import { ComponentStory, ComponentMeta } from "@storybook/react";
import InterestsPanel from "./InterestsPanel";


export default {
    title: 'components/_about/InterestsPanel',
    component: InterestsPanel
} as ComponentMeta<typeof InterestsPanel>;


export const Main: ComponentStory<typeof InterestsPanel> = () => {
    return (
        <InterestsPanel />
    );
}
