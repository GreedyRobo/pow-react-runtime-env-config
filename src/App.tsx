import './App.css'
import {ConfigContext} from "./contexts";
import {Table} from "./components";
import {useConfigs} from "./hooks";

function App() {
    const {configs, fetchCount, loading} = useConfigs()

    return (
        <ConfigContext.Provider value={{configs, fetchCount, loading}}>
            <Table/>
        </ConfigContext.Provider>
    )
}

export default App
