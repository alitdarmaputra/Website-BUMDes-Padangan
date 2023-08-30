import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import UnitUsaha from "./components/UnitUsaha";
import Galeri from "./components/Galeri";
import PageNotFound from "./components/PageNotFound";

function App() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Landing />}></Route>
                    <Route path="/profil-usaha" element={<Profile />}></Route>
                    <Route path="/unit-usaha" element={<UnitUsaha />}></Route>
                    <Route path="/galeri" element={<Galeri />}></Route>
                    <Route path="*" element={<PageNotFound />}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
