import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LiveMatches from "./components/LiveMatches";

function App() {
  return (
    <div className="min-h-screen bg-[#0f162a]">
      <Navbar />
      <Hero />
       <LiveMatches />
    </div>
  );
}

export default App;
