import { createContext } from 'react'

export interface IAppContext {
    calculateLove: (name1: string, name2: string) => void
    clear: () => void
}

const INITIAL_CONTEXT: IAppContext = {
    calculateLove: () => { },
    clear: () => { }
}

export const AppContext = createContext<IAppContext>(INITIAL_CONTEXT)