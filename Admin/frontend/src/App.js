import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { AllStates } from "./Components/context/AllStates";
import TopBar from "./Components/Fixed/TopBar/Index";
import DesktopLeft from "./Components/Fixed/Left/Index";
import MobileLeft from "./Components/Fixed/MobileLeft/Index";
import Home from "./Components/Pages/Home/Index";
import Products from "./Components/Pages/Products/Index";
import AddProduct from "./Components/Pages/Products/AddProduct/Index";
import Categories from "./Components/Pages/Categories/Index";
import AddCategory from "./Components/Pages/Categories/AddCategory/Index";
import Order from "./Components/Pages/Orders/Index";
import OrderDetail from "./Components/Pages/Orders/OrderDetail/Index";
import Vendors from "./Components/Pages/Vendors/Index";
import Reviews from "./Components/Pages/Reviews/Index";
import Customers from "./Components/Pages/Customers/Index";

function App() {
  return (
    <>
      <AllStates>
        <HashRouter>
          <div>
            <TopBar />
            <div className="main-wrapper">
              {/* <!-- navbar vertical --> */}
              <DesktopLeft />
              <MobileLeft />

              <Routes>
                <Route exact path="" element={<Home />}></Route>
                <Route exact path="/products" element={<Products />}></Route>
                <Route
                  exact
                  path="/products/addProduct"
                  element={<AddProduct />}
                ></Route>
                <Route
                  exact
                  path="/categories"
                  element={<Categories />}
                ></Route>
                <Route
                  exact
                  path="/categories/addCategory"
                  element={<AddCategory />}
                ></Route>
                <Route exact path="/orders" element={<Order />}></Route>
                <Route
                  exact
                  path="/orders/orderDetail"
                  element={<OrderDetail />}
                ></Route>
                <Route exact path="/vendors" element={<Vendors />}></Route>
                <Route exact path="/reviews" element={<Reviews />}></Route>
                <Route exact path="/customers" element={<Customers />}></Route>
              </Routes>
            </div>
          </div>
        </HashRouter>
      </AllStates>
    </>
  );
}

export default App;
