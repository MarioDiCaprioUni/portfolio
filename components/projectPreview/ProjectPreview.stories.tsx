import { ComponentMeta, ComponentStory } from "@storybook/react";
import {DomcolJS} from "./ProjectPreview";


export default {
    title: 'components/ProjectPreview',
    component: DomcolJS,
} as ComponentMeta<typeof DomcolJS>;


export const Main: ComponentStory<typeof DomcolJS> = (props) => {
    return (
        <DomcolJS {...props} />
    );
}
