import { createSlice } from "@reduxjs/toolkit";


interface NavbarState {
    isOpen: boolean;
}


const navbarStateSlice = createSlice({
    name: 'navbarState',
    initialState: {
        isOpen: false
    } as NavbarState,
    reducers: {

        toggle: (state) => {
            state.isOpen = !state.isOpen;
        },

        open: (state) => {
            state.isOpen = true;
        },

        close: (state) => {
            state.isOpen = false;
        }

    }
});


export const { toggle, open, close } = navbarStateSlice.actions;
export default navbarStateSlice.reducer;
