import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LiveMatches from "./components/LiveMatches";

function App() {
  return (
    <div className="min-h-screen bg-[#0f162a]">
      <Navbar />
      <Hero />
      <div className="mx-32">
        <LiveMatches />
      </div>
    </div>
  );
}

export default App;
