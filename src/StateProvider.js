import React, { createContext, useContext, useReducer } from "react";

// Prepares the DataLayer
export const StateContext = createContext();

// Wrap our App and Provide the DataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer( reducer, initialState )}>
        {children}
    </StateContext.Provider>
);

// Pulls Information from DataLayer
export const useStateValue = () => useContext(StateContext);