import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectWebGLCard from "../ProjectWebGLCard";
import ItchDownload from "../ItchDownload";

export default function BillsBussinBuffet() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>

                    {/* ------ Row 1 ------ */}

                    <ProjectTextCard>
                        <h2>Bills Bussin' Buffet</h2>
                        <h5>Status: Released (2022)</h5>
                        <br />
                        <h3>Summary</h3>
                        <p>
                            Myself and a group of colleagues got together to join Kiwi Jam 2022.
                        </p>
                        <p>
                            The theme was <i>"Together"</i> so our game is about getting together with some bussin babes at a diner.
                            The game is narrative based with branching dialogue leading to 16 different endings.
                        </p>
                        <p>
                            Most of the artists drew and then created the dialogue for their characters.
                            Everyone split off to write their narrative and when we all joined back up, it was a nightmare weaving them together.
                        </p>

                    </ProjectTextCard>

                    {/* ------ Row 2 ------ */}

                    <ProjectWebGLCard url="https://itch.io/embed-upload/6221691?color=333333" width="960" height="650"/>

                </Col>

                {/* ------ Right Column ------ */}
                <Col md={3}>

                    <ProjectImageCard src="/images/bills-bussin-buffet/card-bills-bussin-buffet.png" />

                    {/* ------ */}

                    <ProjectTextCard>
                        <h2>Team Members</h2>
                        <ul>
                            <li>Jared Bakker (Designer)</li>
                            <li>Cameron Edwards (Designer)</li>
                            <li>Travers Cole (Programmer)</li>
                            <li>Jashon Brown (Programmer)</li>
                            <li>Scott Thomson (Tech Art)</li>
                            <li>Hunter Craig (Audio)</li>
                            <li>Shan Singleton (Artist)</li>
                            <li>Arlena Hosking (Artist)</li>
                            <li>Lachlan Walsh (Artist)</li>
                            <li>Max Skerrett (Artist)</li>
                            <li>Sara Ransley (Artist)</li>
                            <li>Andy Christensen (Artist)</li>
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
                    <ItchDownload src="1633513"/>
                </Col>
            </Row>
        </div>
    )
}
