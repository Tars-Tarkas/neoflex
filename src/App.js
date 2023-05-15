import "./App.css";
import Main from "./Pages/Main";
import ShopList from "./Pages/ShopList";
import PageNotFound from "./components/PageNotFound.tsx";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Main />} />
        <Route path="/shoplist" element={<ShopList />} />
      </Routes>
    </>
  );
}

export default App;
