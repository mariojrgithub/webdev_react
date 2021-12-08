import NavBar from "./components/navbar";
import Title from "./components/title";
import Technology from "./components/technology";
import HowItWorks from "./components/howItWorks";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <div id="myPage" data-spy="scroll" data-target=".navbar" data-offset="60">
        <NavBar />
        <Title />
        <Technology />
        <HowItWorks />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
