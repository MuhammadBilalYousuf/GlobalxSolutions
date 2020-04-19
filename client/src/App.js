import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { gsap } from "gsap";
import "./styles/App.scss";
import Header from "./components/header";
import Navigation from "./components/navigation";
import Careers from "./pages/careers";
import CaseStudies from "./pages/work";
import Approach from "./pages/approach";
import Audit from "./pages/audit";
import Services from "./pages/services";
import About from "./pages/about";
import Home from "./pages/home";
import Software from "./pages/software";
import SoftwareDevelopment from "./pages/software-development";
import MobileApplication from "./pages/mobile-application";
import WebDesign from "./pages/web-design";
import Ui from "./pages/ui-ux";
import Ecommerce from "./pages/ecommerce";
import ItServices from "./pages/it-services";
import Startup from "./pages/startup";
import Digital from "./pages/digital";
import VideoMotionGraphics from "./pages/video-motion-graphics";
import Production from "./pages/production";
import TvcDvc from "./pages/tvc-dvc";
import CorporateVideos from "./pages/corporate-videos";
import FlimsDocumentary from "./pages/flims-documentary";
import MusicVideos from "./pages/music-videos";
import EventCoverage from "./pages/event-coverage";
import Demo from "./pages/demo";

const routes = [
  { path: "/careers", name: "Careers", Component: Careers },
  { path: "/", name: "Home", Component: Home },
  { path: "/work", name: "work", Component: CaseStudies },
  { path: "/approach", name: "approach", Component: Approach },
  { path: "/audit", name: "audit", Component: Audit },
  { path: "/services", name: "services", Component: Services },
  { path: "/about-us", name: "about", Component: About },
  { path: "/software", name: "software", Component: Software },
  { path: "/software-development", name: "softwaredevelopment", Component: SoftwareDevelopment },
  { path: "/mobile-application", name: "mobileapplication", Component: MobileApplication },
  { path: "/web-design", name: "webdesign", Component: WebDesign },
  { path: "/ui-ux", name: "ui", Component: Ui },
  { path: "/ecommerce", name: "ecommerce", Component: Ecommerce },
  { path: "/it-services", name: "itservices", Component: ItServices },
  { path: "/startup", name: "startup", Component: Startup },
  { path: "/digital", name: "digital", Component: Digital },
  { path: "/video-motion-graphics", name: "videomotiongraphics", Component: VideoMotionGraphics },
  { path: "/production", name: "production", Component: Production },
  { path: "/tvc-dvc", name: "tvcdvc", Component: TvcDvc },
  { path: "/corporate-videos", name: "corporatevideos", Component: CorporateVideos },
  { path: "/flims-documentary", name: "flimsdocumentary", Component: FlimsDocumentary },
  { path: "/music-videos", name: "musicvideos", Component: MusicVideos },
  { path: "/event-coverage", name: "eventcoverage", Component: EventCoverage },
  { path: "/demo", name: "demo", Component: Demo },
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  return (
    <>
      <Header dimensions={dimensions} />
      <div className='App'>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component dimensions={dimensions} />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
