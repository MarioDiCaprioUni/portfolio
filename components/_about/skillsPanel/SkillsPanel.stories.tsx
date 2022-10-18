import { ComponentMeta, ComponentStory } from "@storybook/react";
import SkillsPanel from "./SkillsPanel";


export default {
    title: 'components/_about/SkillsPanel',
    component: SkillsPanel
} as ComponentMeta<typeof SkillsPanel>;


export const Main: ComponentStory<typeof SkillsPanel> = () => {
    return (
        <div>
            <SkillsPanel />
        </div>
    );
}
