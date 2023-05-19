import "./App.css";
import Main from "./Pages/Main";
import ShopList from "./Pages/ShopList";
import Favorites from "./Pages/Favourites";
import Contacts from "./Pages/Contacts";
import Requirement from "./Pages/Requirement";
import PageNotFound from "./components/PageNotFound.tsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Main />} />
        <Route path="/shoplist" element={<ShopList />} />
        <Route path="/favourites" element={<Favorites />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/Requirement" element={<Requirement />} />
      </Routes>
    </>
  );
}

export default App;