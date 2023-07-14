import { createContext } from 'react';

interface IContext {
    configs?: RuntimeEnvConfig
    loading: boolean
    failed: boolean
    fetchCount: number
}

export const DEFAULT_VALUE: IContext = {
    loading: false,
    failed: false,
    fetchCount: 0
}

export const ConfigContext = createContext<IContext>(DEFAULT_VALUE);