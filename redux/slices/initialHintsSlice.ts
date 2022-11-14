import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface InitialHintsState {
    navbarClickMeDialog: boolean;
}


const initialHintsSlice = createSlice({
    name: 'initialHints',
    initialState: {
        navbarClickMeDialog: true
    } as InitialHintsState,
    reducers: {

        consume: (state, action: PayloadAction<keyof InitialHintsState>) => {
            state[action.payload] = false
        }

    }
});


export const { consume } = initialHintsSlice.actions;
export default initialHintsSlice.reducer;
