import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navber from "./Components/Shared/Navber";

gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <>
      <main>
        <Navber />
      </main>
    </>
  );
}

export default App;
