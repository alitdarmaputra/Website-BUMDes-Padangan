import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import UnitUsaha from "./components/UnitUsaha";

function App() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Landing />}></Route>
                    <Route path="/profil-usaha" element={<Profile />}></Route>
                    <Route path="/unit-usaha" element={<UnitUsaha />}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
