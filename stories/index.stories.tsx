import { ComponentStory, ComponentMeta } from "@storybook/react";
import Home from "../pages/index";


export default {
    title: 'pages/Home',
    component: Home,
    parameters: {
        nextRouter: {
            path: '/'
        }
    }
} as ComponentMeta<typeof Home>;


export const Main: ComponentStory<typeof Home> = () => {
    return (
        <Home />
    );
}
