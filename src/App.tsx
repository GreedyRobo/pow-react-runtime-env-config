import './App.css'
import {useConfigs} from "./hooks";

function App() {
    const {configs, fetchCount} = useConfigs()

    console.log({configs, fetchCount})

    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <td>Fetch count:</td>
                    <td>{fetchCount}</td>
                </tr>
                {!!configs && Object.entries(configs).map(([key, value]) => (
                    <tr key={key}>
                        <td>{key}:</td>
                        <td>{value}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default App
