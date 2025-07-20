import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);
function App() {
  return (
    <>
      <div className="h-[100vh] flex-center">
  
        <p className="text-blue-400 text-9xl">Hellow ! Gsap</p>
      </div>
    </>
  );
}

export default App;
