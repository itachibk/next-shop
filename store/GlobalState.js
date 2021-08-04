import { createContext, useReducer, useEffect } from 'react'
import reducers from './Reducers'


export const DataContext = createContext()


export const DataProvider = ({ children }) => {
    const initialState = {
        notify: {}, auth: {}
    }

    const [state, dispatch] = useReducer(reducers, initialState)
    const { cart, auth } = state


    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    )
}