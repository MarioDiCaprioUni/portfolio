import { ComponentMeta, ComponentStory } from "@storybook/react";
import ProjectPreview from "./ProjectPreview";


export default {
    title: 'components/ProjectPreview',
    component: ProjectPreview
} as ComponentMeta<typeof ProjectPreview>;


const Preset: ComponentStory<typeof ProjectPreview> = (props) => {
    return (
        <ProjectPreview {...props} />
    );
}


export const DomcolJS = Preset.bind({});
DomcolJS.args = {
    id: 'domcol-js',
    title: 'Domcol JS',
    thumbnailSrc: '/thumbnails/domcol_js.png'
}
