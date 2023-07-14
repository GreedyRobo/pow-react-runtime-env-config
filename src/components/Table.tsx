import {useContext} from "react";
import {ConfigContext} from "../contexts";

export const Table = () => {
    const {loading, configs, fetchCount} = useContext(ConfigContext)

    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <td>Loading:</td>
                    <td>{loading ? 'YES' : 'NO'}</td>
                </tr>
                <tr>
                    <td>Fetch count:</td>
                    <td>{fetchCount}</td>
                </tr>
                {!configs && (
                    <tr>
                        <td colSpan={2}>No configs provided!</td>
                    </tr>
                )}
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