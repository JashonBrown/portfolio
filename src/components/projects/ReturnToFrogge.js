import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectWebGLCard from "../ProjectWebGLCard";
import ItchDownload from "../ItchDownload";

export default function ReturnToFrogge() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>

                    {/* ------ Row 1 ------ */}
                    <ProjectTextCard>
                        <h2>Return to Frogge</h2>
                        <h5>Status: Released (2022)</h5>
                        <br />
                        <h3>Summary</h3>
                        <p>
                            As a farewell to our old game studio (we ran out of funding RIP), a number of us got together and ran our own game jam.
                        </p>
                        <p>
                            The theme was <i>"Reversal"</i> so we reversed the story of the frog prince.
                            We created a bullet hell game where as a frog, you must deflect kisses being shot at you by princesses carried by simp knights.
                        </p>
                        <p>
                            We ran the event over a weekend but we didn't finish our game as everyone was busy.
                        </p>
                    </ProjectTextCard>

                    {/* ------ Row 2 ------ */}

                    <ProjectWebGLCard url="https://itch.io/embed-upload/6410898?color=333333" width="960" height="650"/>

                </Col>

                {/* ------ Right Column ------ */}
                <Col md={3}>

                    <ProjectImageCard src="/images/return-to-frogge/card-return-to-frogge.png" />

                    {/* ------ */}

                    <ProjectTextCard>
                        <h2>Team Members</h2>
                        <ul>
                            <li>Chris Knowles (Designer)</li>
                            <li>Josh Grant (Designer)</li>
                            <li>Scott Thomson (Tech Artist)</li>
                            <li>Jashon Brown (Programmer)</li>
                            <li>Gareth Fox (Programmer)</li>
                            <li>Rachel Khan (Artist)</li>
                            <li>Sara Ransley (Artist)</li>
                            <li>Arlena Hosking (Artist)</li>
                            <li>Lauryn Dorne (Artist)</li>
                        </ul>
                    </ProjectTextCard>

                    {/* ------ */}

                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Unity</li>
                            <li>C#</li>
                        </ul>
                    </ProjectTextCard>

                    {/* ------ */}

                    <ItchDownload src="1679377"/>
                </Col>
            </Row>
        </div>
    )
}
