import {useCallback, useEffect, useState} from "react";
import Joi from 'joi'

import type {RuntimeEnvConfig} from "../types"

const SCHEMA = Joi.object<RuntimeEnvConfig, true>({
    APP_TITLE: Joi.string().required()
}).options({allowUnknown: true, presence: 'required' })

export const useConfigs = () => {
    const [configs, setConfigs] = useState<RuntimeEnvConfig>()

    const [fetchCount, setFetchCount] = useState(0);

    const [loading, setLoading] = useState(false)

    const [failed, setFailed] = useState(false)

    const initConfig = useCallback(async () => {
        const CONFIG_URL = new URL('/config.json', window.location.href)

        console.debug(`Config url constructed: ${CONFIG_URL.href}`)

        console.debug('Fetching configs...')

        setFetchCount(prev => prev + 1)

        const response = await fetch(CONFIG_URL)

        console.debug('Fetch ended...')

        const content = await response.json() as RuntimeEnvConfig;

        console.debug('Values fetched: ', content)

        console.debug("Validating values...")

        const {error} = SCHEMA.validate(content)

        if(error) {
            console.debug("Invalid config...")
            setFailed(true);
            return;
        }

        setConfigs(content)
    }, [])

    useEffect(() => {
        console.debug('Starting config setup...')

        setLoading(true)

        initConfig().finally(() => {
            setLoading(false)
        })
    }, [initConfig])

    return {configs, fetchCount, loading, failed}
}