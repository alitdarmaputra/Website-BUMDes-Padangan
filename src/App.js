import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Layout from "./components/Layout";
import Profile from "./components/Profile";

function App() {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/profil-usaha" element={<Profile />}></Route>
                    <Route path="/" element={<Landing />}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
