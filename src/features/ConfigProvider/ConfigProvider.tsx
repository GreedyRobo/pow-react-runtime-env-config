import {FC, PropsWithChildren} from "react";

import {ConfigContext} from "./contexts"
import {useConfigs} from "./hooks"

export const ConfigProvider: FC<PropsWithChildren> = ({children}) => {
    const {configs, fetchCount, loading, failed} = useConfigs()

    return (
        <ConfigContext.Provider value={{configs, fetchCount, loading, failed}}>
            {children}
        </ConfigContext.Provider>
    )
}