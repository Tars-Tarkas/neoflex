import "./App.css";
import Main from "./Pages/Main";
import ShopList from "./Pages/ShopList";
import Favorites from "./Pages/Favourites";
import Contacts from "./Pages/Contacts";
import Requirement from "./Pages/Requirement";
import PageNotFound from "./Pages/PageNotFound";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Main />} />
        <Route path="/shoplist" element={<ShopList title="Корзина" />} />
        <Route path="/favourites" element={<Favorites title="Избранное" />} />
        <Route path="/contacts" element={<Contacts title="Контакты" />} />
        <Route
          path="/Requirement"
          element={<Requirement title="Условия сервиса" />}
        />
      </Routes>
    </>
  );
}

export default App;
