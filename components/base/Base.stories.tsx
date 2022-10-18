import { ComponentMeta, ComponentStory } from "@storybook/react";
import Base from "./Base";


export default {
    title: 'components/Base',
    component: Base
} as ComponentMeta<typeof Base>;


export const Main: ComponentStory<typeof Base> = (props) => {
    return (
        <Base {...props} />
    );
}
