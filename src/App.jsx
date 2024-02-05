import { useState, useEffect } from "react";
import "./App.scss";
import Add from "./Components/Add/Add";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Carousel from "./Components/Carousel/Carousel";
import Shop from "./containers/Shop/Shop";
import Collections from "./containers/Collections/Collections";
import SearchResults from "./containers/SearchResults/SearchResults";
import Cart from "./containers/Cart/Cart";
import CartContextProvider from "./Context/CartContext";

function App() {
  const [collection, setCollection] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [linkClicked, setLinkClicked] = useState(false);

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          {/* <Add /> */}
          <Navbar
            setCollection={setCollection}
            setSearchTerm={setSearchTerm}
            setLinkClicked={setLinkClicked}
          />
          <Routes>
            <Route path="/" element={<Carousel />} />
            <Route
              path="shop"
              element={<Shop />}
              setLinkClicked={setLinkClicked}
              linkClicked={linkClicked}
            />
            <Route
              path="collections"
              element={
                <Collections
                  collection={collection}
                  setLinkClicked={setLinkClicked}
                  linkClicked={linkClicked}
                />
              }
            />
            <Route
              path="search"
              element={<SearchResults searchTerm={searchTerm} />}
            />
            <Route
              path="cart"
              element={<Cart />}
              setLinkClicked={setLinkClicked}
              linkClicked={linkClicked}
            />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
