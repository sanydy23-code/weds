import Hero from "./components/Hero";
import Invitation from "./components/Invitation";
import Countdown from "./components/Countdown";

function App() {
  return (
    <div className="max-w-full min-h-screen bg-slate-900 mx-auto border overflow-x-hidden">
      <Hero />
      <Invitation />
      <Countdown />
    </div>
  );
}

export default App;
