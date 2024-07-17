import { Outlet } from "react-router";
import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
