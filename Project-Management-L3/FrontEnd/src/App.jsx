import { Outlet } from "react-router";
import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import { Provider } from "react-redux";
import store from "./store/Store.js";
function App() {
  return (
    <Provider store={store}>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </Provider>
  );
}

export default App;
