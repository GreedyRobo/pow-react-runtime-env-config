import { createContext } from 'react';

interface IContext {
    configs?: RuntimeEnvConfig
    loading: boolean
    fetchCount: number
}

export const DEFAULT_VALUE: IContext = {
    loading: false,
    fetchCount: 0
}

export const ConfigContext = createContext<IContext>(DEFAULT_VALUE);