import { configureStore } from '@reduxjs/toolkit';
import initialHintsReducer from "./slices/initialHintsSlice";
import navbarStateReducer from "./slices/navbarStateSlice";


export const store = configureStore({
    reducer: {
        initialHints: initialHintsReducer,
        navbarState: navbarStateReducer
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
