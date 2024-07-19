import { Outlet } from "react-router";
import "./App.css";
import Header from "./Component/Header";
import { Provider } from "react-redux";
import store from "./store/Store.js";
function App() {
  return (
    <Provider store={store}>
      <Header></Header>
      <Outlet></Outlet>
    </Provider>
  );
}

export default App;
