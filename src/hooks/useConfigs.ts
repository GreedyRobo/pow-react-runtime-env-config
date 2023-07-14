import {useEffect, useState} from "react";

export const useConfigs = () => {
    const [configs, setConfigs] = useState<RuntimeEnvConfig>()

    const [fetchCount, setFetchCount] = useState(0);

    const [loading, setLoading] = useState(false)

    const initConfig = async () => {
        const CONFIG_URL = new URL('/config.json', window.location.href)

        console.debug(`Config url constructed: ${CONFIG_URL.href}`)

        console.debug('Fetching configs...')

        setFetchCount(prev => prev + 1)

        const response = await fetch(CONFIG_URL)

        console.debug('Fetch ended...')

        const content = await response.json() as RuntimeEnvConfig;

        console.debug('Values fetched: ', content)

        setConfigs(content)
    }

    useEffect(() => {
        console.debug('Starting config setup...')

        setLoading(true)

        initConfig().finally(() => {
            setLoading(false)
        })
    }, [])

    return {configs, fetchCount, loading}
}