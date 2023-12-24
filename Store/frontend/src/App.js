import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { AllStates } from "./Components/context/AllStates";
import Footer from "./Components/Footer/Index";
import TopBar from "./Components/Top/Topbar/Index";
import Navbar from "./Components/Top/Navbar/Index";
import StoreHome from "./Components/Store/Home/Index";
import Categories from "./Components/Store/Pages/Categories/Index";
import Wishlist from "./Components/Store/Pages/WishList/Index";
import SingleProduct from "./Components/Store/Pages/SingleProduct/Index";
import StoresList from "./Components/Store/Pages/Stores/Index";
import StoreDetail from "./Components/Store/Pages/Stores/Single/Index";
import UserSignin from "./Components/Store/Pages/User/Signin/Index";
import UserSignup from "./Components/Store/Pages/User/Signup/Index";
import ForgotPassword from "./Components/Store/Pages/User/ForgotPassword/Index";
import AccountOrders from "./Components/Store/Pages/User/MyAccount/Orders/Index";
import AccountSettings from "./Components/Store/Pages/User/MyAccount/Settings/Index";
import AccountAddress from "./Components/Store/Pages/User/MyAccount/Address/Index";
import AccountPaymentMethod from "./Components/Store/Pages/User/MyAccount/PaymentMethod/Index";
import AccountNotifications from "./Components/Store/Pages/User/MyAccount/Notifications/Index";

function App() {
  return (
    <>
      <AllStates>
        <HashRouter>
          <TopBar />
          <Navbar />
          <Routes>
            <Route exact path="" element={<StoreHome />}></Route>
            <Route
              exact
              path="/store/categories"
              element={<Categories />}
            ></Route>
            <Route exact path="/store/wishlist" element={<Wishlist />}></Route>
            <Route
              exact
              path="/store/singleProduct"
              element={<SingleProduct />}
            ></Route>
            <Route
              exact
              path="/store/account/signin"
              element={<UserSignin />}
            ></Route>
            <Route
              exact
              path="/store/account/signup"
              element={<UserSignup />}
            ></Route>
            <Route
              exact
              path="/store/account/forgotPassword"
              element={<ForgotPassword />}
            ></Route>
            <Route
              exact
              path="/store/myAccount/orders"
              element={<AccountOrders />}
            ></Route>
            <Route
              exact
              path="/store/myAccount/settings"
              element={<AccountSettings />}
            ></Route>
            <Route
              exact
              path="/store/myAccount/address"
              element={<AccountAddress />}
            ></Route>
            <Route
              exact
              path="/store/myAccount/paymentMethod"
              element={<AccountPaymentMethod />}
            ></Route>
            <Route
              exact
              path="/store/myAccount/notifications"
              element={<AccountNotifications />}
            ></Route>
            <Route
              exact
              path="/dashboard/storesList"
              element={<StoresList />}
            ></Route>
            <Route
              exact
              path="/dashboard/storeDetail"
              element={<StoreDetail />}
            ></Route>
          </Routes>
          <Footer />
        </HashRouter>
      </AllStates>
    </>
  );
}

export default App;
