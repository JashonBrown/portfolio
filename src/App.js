import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

// Font awesome icons
import {library} from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';

// Stand alone components
import Header from "./components/Header";

// Nav page components
import Projects from "./components/pages/Projects";

// Project components
import WhoCaresIfItsBuggy from "./components/projects/WhoCaresIfItsBuggy";
import WhyDoesNoOneLoveMe from "./components/projects/WhyDoesNoOneLoveMe";
import ClimbPrincessClimb from "./components/projects/ClimbPrincessClimb";
import Experiments from "./components/projects/Experiments";
import Simpli from "./components/projects/Simpli";
import OneInOneOut from "./components/projects/OneInOneOut";
import NetworkingLibrary from "./components/projects/NetworkingLibrary";
import Nuwave from "./components/projects/Nuwave";
import GrandmasSpecialBoy from "./components/projects/GrandmasSpecialBoy";
import Visceral from "./components/projects/Visceral";
import FlappyKyata from "./components/projects/FlappyKyata";
import AreYaWinningSon from "./components/projects/AreYaWinningSon";
import BillsBussinBuffet from "./components/projects/BillsBussinBuffet";
import ReturnToFrogge from "./components/projects/ReturnToFrogge";
import UntamedIsles from "./components/projects/UntamedIsles";

// import Screeps from "./components/projects/old/Screeps";
// import PortfolioSite from "./components/projects/old/PortfolioSite";
// import CatCatMagicAttack from "./components/projects/old/CatCatMagicAttack";
// import Givey from "./components/projects/old/Givey";
// import ShankTheWorld from "./components/projects/ShankTheWorld";
// import DungeonCrawler from "./components/projects/DungeonCrawler";

// Font awesome setup
const iconList = Object.keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Icons[icon]);

library.add(...iconList);

export default function App() {
  return (
    <Router>
      <Container fluid className="main">

        {/* Adds page header to all pages */}
        <Header />

        <Container>
          <Row className="justify-content-center">
            {/* Registers route listeners */}
            <Switch>
              <Route path="/" exact component={() => <Projects />} />
              <Route path="/projects" exact component={() => <Projects />} />

              {/* Projects */}
              <Route path="/projects/who-cares-if-its-buggy" exact component={() => <WhoCaresIfItsBuggy />} />
              <Route path="/projects/experiments" exact component={() => <Experiments />} />
              <Route path="/projects/why-does-no-one-love-me" exact component={() => <WhyDoesNoOneLoveMe />} />
              <Route path="/projects/climb-princess-climb" exact component={() => <ClimbPrincessClimb />} />
              <Route path="/projects/simpli" exact component={() => <Simpli />} />
              <Route path="/projects/one-in-one-out" exact component={() => <OneInOneOut />} />
              <Route path="/projects/networking-library" exact component={() => <NetworkingLibrary />} />
              <Route path="/projects/nuwave" exact component={() => <Nuwave />} />
              <Route path="/projects/grandmas-special-boy" exact component={() => <GrandmasSpecialBoy />} />
              <Route path="/projects/visceral" exact component={() => <Visceral />} />
              <Route path="/projects/flappy-kyata" exact component={() => <FlappyKyata />} />
              <Route path="/projects/are-ya-winning-son" exact component={() => <AreYaWinningSon />} />
              <Route path="/projects/bills-bussin-buffet" exact component={() => <BillsBussinBuffet />} />
              <Route path="/projects/return-to-frogge" exact component={() => <ReturnToFrogge />} />
              <Route path="/projects/untamed-isles" exact component={() => <UntamedIsles />} />

              {/* OLD */}
              {/*<Route path="/projects/screeps" exact component={() => <Screeps />} />*/}
              {/*<Route path="/projects/givey" exact component={() => <Givey />} />*/}
              {/*<Route path="/projects/portfolio-site" exact component={() => <PortfolioSite />} />*/}
              {/*<Route path="/projects/cat-cat-magic-attack" exact component={() => <CatCatMagicAttack />} />*/}
              {/*<Route path="/projects/shank-the-world" exact component={() => <ShankTheWorld />} />*/}
              {/*<Route path="/projects/dungeon-crawler" exact component={() => <DungeonCrawler />} />*/}
            </Switch>
          </Row>
        </Container>

      </Container>
    </Router>
  );
}
