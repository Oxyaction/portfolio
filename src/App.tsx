import { ReactComponent as TypescriptLogo } from 'assets/logo/typescript.svg';
import Navbar from 'components/Navbar';
import Home from 'components/Home';
import About from 'components/About';

function App() {
  return (
    <div className="snap-y snap-mandatory overflow-scroll h-screen w-full">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
