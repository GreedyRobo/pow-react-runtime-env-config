import './App.css'
import {ConfigContext} from "./contexts";
import {Table} from "./components";
import {useConfigs} from "./hooks";

function App() {
    const {configs, fetchCount, loading, failed} = useConfigs()

    return (
        <ConfigContext.Provider value={{configs, fetchCount, loading, failed}}>
            <Table/>
        </ConfigContext.Provider>
    )
}

export default App
