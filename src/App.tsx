import './App.css'
import {ConfigContext, DEFAULT_VALUE} from "./contexts";
import {Table} from "./components";

function App() {
    return (
        <ConfigContext.Provider value={DEFAULT_VALUE}>
            <Table/>
        </ConfigContext.Provider>
    )
}

export default App
