import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LiveMatches from "./components/LiveMatches";
import TrendingMatches from "./components/TrendingMatches";

function App() {
  return (
    <div className="min-h-screen bg-[#0f162a]">
      <Navbar />
      <Hero />
      <div className="mx-32">
        <LiveMatches />
        <TrendingMatches />
      </div>
    </div>
  );
}

export default App;
