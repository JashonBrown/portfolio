import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectWebGLCard from "../ProjectWebGLCard";
import ProjectYoutubeEmbedCard from "../ProjectYoutubeEmbedCard";
import ItchDownload from "../ItchDownload";

export default function AreYaWinningSon() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>

                    {/* ------ Row 1 ------ */}

                    <ProjectTextCard>
                        <h2>Are Ya Winning Son?</h2>
                        <h5>Status: Released (2022)</h5>
                        <br />
                        <h3>Summary</h3>
                        <p>
                            Developed for the 48 hour Aotearoa Game Jam 2022, 'Are ya winning son?' is a game about becoming your dad.
                            The theme was <i>"Transition"</i> and our game is about the transition from youth to adulthood.
                        </p>
                        <p>
                            As is tradition in game jams, we over scoped the art and were in a desperate rush at the end.
                            Everything came together in the end and we were the runners up in the people choice category.
                        </p>
                    </ProjectTextCard>

                    {/* ------ Row 2 ------ */}
                    <ProjectWebGLCard url="https://itch.io/embed-upload/7738244?color=333333" width="960" height="650"/>

                    {/* ------ Row 3 ------ */}
                    <ProjectYoutubeEmbedCard src={"zXl_KuPrGQc"}/>

                </Col>

                {/* ------ Right Column ------ */}
                <Col md={3}>

                    <ProjectImageCard src="/images/are-ya-winning-son/card-are-ya-winning-son.png" />

                    {/* ------ */}

                    <ProjectTextCard>
                        <h2>Team Members</h2>
                        <ul>
                            <li>Lauryn Dorne (Artist)</li>
                            <li>Arlena Hosking (Artist)</li>
                            <li>Jashon Brown (Programmer)</li>
                            <li>Jiaheng Wang (Programmer)</li>
                            <li>Gareth Fox (Programmer)</li>
                            <li>Hamish Oliver (Audio)</li>
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

                    <ItchDownload src="1541161"/>
                </Col>
            </Row>
        </div>
    )
}
