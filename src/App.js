import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/home.components";

const Shop = () => {
  return <h1>I am the shop Page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
