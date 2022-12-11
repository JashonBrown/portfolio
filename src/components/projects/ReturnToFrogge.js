import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectVideoCard from '../ProjectVideoCard';
import ProjectWebGLCard from "../ProjectWebGLCard";
import ProjectYoutubeEmbedCard from "../ProjectYoutubeEmbedCard";
import ItchDownload from "../ItchDownload";

export default function ReturnToFrogge() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>

                    {/* ------ Row 1 ------ */}
                    <Row>
                        <ProjectTextCard>
                            <h2>Bills Bussin' Buffet</h2>
                            <h5>Status: Released (2022)</h5>
                            <br />
                            <h3>Summary</h3>
                            <p>
                                Our submission for Kiwi Jam 2022
                            </p>
                        </ProjectTextCard>
                    </Row>

                    {/* ------ Row 2 ------ */}

                    <Row>
                        <ProjectWebGLCard url="https://itch.io/embed-upload/6410898?color=333333" width="960" height="650"/>
                    </Row>

                </Col>

                {/* ------ Right Column ------ */}
                <Col md={3}>

                    <ProjectImageCard src="/images/return-to-frogge/card-return-to-frogge.png" />

                    {/* ------ */}

                    <ProjectTextCard>
                        <h2>Team Members</h2>
                        <ul>
                            <li>Jared (Designer)</li>
                            <li>Cameron (Designer)</li>
                            <li>Travers (Programmer)</li>
                            <li>Jashon (Programmer)</li>
                            <li>Scott (Tech Art)</li>
                            <li>Hunter (Audio)</li>
                            <li>Shan (Artist)</li>
                            <li>Arlena (Artist)</li>
                            <li>Lachlan (Artist)</li>
                            <li>Max (Artist)</li>
                            <li>Sara (Artist)</li>
                            <li>Andy (Artist)</li>
                        </ul>
                    </ProjectTextCard>

                    {/* ------ */}

                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Unity</li>
                            <li>C#</li>
                            <li>Inky</li>
                        </ul>
                    </ProjectTextCard>

                    {/* ------ */}

                    <ItchDownload src="1679377"/>
                </Col>
            </Row>
        </div>
    )
}
