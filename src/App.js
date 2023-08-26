import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Layout from "./components/Layout";

function App() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Landing />}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
