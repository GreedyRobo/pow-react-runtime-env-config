import './App.css'
import {ConfigProvider} from "./features";
import {Table} from "./components";

function App() {
    return (
        <ConfigProvider>
            <Table/>
        </ConfigProvider>
    )
}

export default App
