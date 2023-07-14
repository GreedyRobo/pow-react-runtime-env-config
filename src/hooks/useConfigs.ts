import {useEffect, useState} from "react";

const CACHE_KEY = 'ENV-CONFIG'

export const useConfigs = () => {
    const [configs, setConfigs] = useState<{value: RuntimeEnvConfig  | null}>({value: null})

    const [fetchCount, setFetchCount] = useState(0);

    const [loading, setLoading] = useState(false)

    const initConfig = async () => {
        const CACHE_URL = new URL('/config.json', window.location.href)

        console.debug(`Config url constructed: ${CACHE_URL.href}`)

        const cache = await caches.open(CACHE_KEY)

        const response = await cache.match(CACHE_URL);

        console.debug('Checking cache..')

        if(response){
            console.debug('Cache exists...')
            const content = await response.json() as RuntimeEnvConfig;

            console.debug('Saved configs: ', content)

            setConfigs({value: content})
            return;
        }

        console.debug('Cache not found...')

        console.debug('Fetching configs...')

        const newResponse = await fetch(CACHE_URL)

        setFetchCount((prev) => prev + 1)

        console.debug('Saving response to cache...')

        await cache.put(CACHE_URL, newResponse)

        const content = await newResponse.json() as RuntimeEnvConfig;

        console.debug('Configs fetched: ', content)

        setConfigs({value: content})
    }

    useEffect(() => {
        console.debug('Starting config setup...')

        setLoading(true)

        initConfig().finally(() => {
            setLoading(false)
        })
    }, [])

    return {configs: configs.value, fetchCount, loading}
}