import { createContext } from 'react';

interface IContext {
    configs: RuntimeEnvConfig | null
    loading: boolean
    fetchCount: number
}

export const DEFAULT_VALUE: IContext = {
    configs: null,
    loading: false,
    fetchCount: 0
}

export const ConfigContext = createContext<IContext>(DEFAULT_VALUE);