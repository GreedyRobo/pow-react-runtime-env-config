import {useEffect, useState} from "react";

// interface ICache {
//     value: Record<string, string> | null
// }
//
// const cache: ICache = {value: null}

export const useConfigs = () => {
    const [configs, setConfigs] = useState<{value: RuntimeEnvConfig  | null}>({value: null})

    const [fetchCount, setFetchCount] = useState(0);

    useEffect(() => {
        console.debug('Getting configs...')

        if(configs.value) {
            console.debug('Cache value exists...')
            return;
        }

        console.debug('Fetching configs...')
        //TODO::Fetch request
        setFetchCount((prev) => prev + 1)

        setConfigs({value: {APP_TITLE: "config1"}})

    }, [configs.value])

    return {configs: configs.value, fetchCount}
}