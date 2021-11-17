import About from "./components/about/about";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Services from "./components/services/services";

function App() {
  return (
    <div>
      <Header></Header>

      <About></About>
      <Services></Services>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
