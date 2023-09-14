import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  Navbar,
  About,
  Experience,
  Works,
  Tech,
  FeedBacks,
  Contact,
} from "./components";
import  {StarsCanvas}  from "./components/canvas";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        <Tech />
        <Works />
        {/* <FeedBacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
