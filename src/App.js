import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Project from "./components/Project";
import Newsletter from "./components/Newsletter";
import Experience from "./components/Experience";

export default function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Experience />
      <Project />
      <Newsletter />
      <Newsletter />
    </div>
  );
}
