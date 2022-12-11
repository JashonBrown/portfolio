import '../../styles/Project.scss';
import {Row, Col} from 'react-bootstrap';
import ProjectTextCard from '../ProjectTextCard';
import ProjectImageCard from '../ProjectImageCard';
import ProjectVideoCard from '../ProjectVideoCard';

export default function UntamedIsles() {
    return (
        <div className="project">
            <Row>
                {/* ------ Left Column ------ */}
                <Col md={9}>

                    {/* ------ Row 1 ------ */}
                    <Col>
                        <ProjectTextCard>
                            <h2>Untamed Isles</h2>
                            <h5>Status: Cancelled (2022)</h5>
                            <br />
                            <h3>Summary</h3>
                            <p>
                                Untamed Isles is a monster taming MMO that was being developed by Phat Loot Studios.
                                Unfortunately we ran out of funding before we could finish the game and the studio closed down whilst it continues to search for further funding.
                            </p>
                        </ProjectTextCard>
                    </Col>

                    {/* ------ Row 2 ------ */}

                    <Col>
                        <ProjectVideoCard src={"/videos/untamed-isles/untamed-trailer.mp4"} autoplay="true" type={"video/mp4"}/>
                    </Col>

                </Col>
                {/* ------ Right Column ------ */}
                <Col md={3}>

                    <ProjectImageCard src="/images/untamed-isles/card-untamed-isles.png" />

                    {/* ------ */}

                    <ProjectTextCard>
                        <h2>Studio</h2>
                        <ul>
                            <li>Phat Loot Studios</li>
                            <li>Technical/Team Lead</li>
                            <li>New Zealand</li>
                            <li>70 Employees</li>
                        </ul>
                    </ProjectTextCard>

                    {/* ------ */}

                    <ProjectTextCard>
                        <h2>Technologies</h2>
                        <ul>
                            <li>Unity</li>
                            <li>C#</li>
                            <li>.NET</li>
                            <li>Mirror</li>
                            <li>Unity ECS</li>
                            <li>Firebase</li>
                            <li>DynamoDB (AWS)</li>
                        </ul>
                    </ProjectTextCard>
                </Col>
            </Row>

            {/* ------ Bottom Row ------ */}

            <Row>
                <Col>
                    <ProjectTextCard>
                        <h2>Combat</h2>
                        <p>I played a key role in developing the turn-based combat system where actions played out in the world where all other players could watch.</p>
                        <p>
                            The intricacies of a turn-based system were one thing but the real difficulty was in enabling bystanders to observe the battle and securely managing the varying types of data traveling across the network.
                        </p>
                    </ProjectTextCard>
                </Col>
                <Col>
                    <ProjectTextCard>
                        <h2>Leadership</h2>
                        <p>Eventually my role shifted from extensive programming to more mentoring, strategy and production.</p>
                        <p>Helping team members grow their technical and leadership skills was wonderfully rewarding.</p>
                        <p>The experience also pushed me to grow my crisis management skills as things got stressful when the project ran into difficulty with scoping and funding.</p>
                    </ProjectTextCard>
                </Col>
            </Row>

            {/* ------ Row 2 ------ */}

            <Row>
                <Col>
                    <ProjectTextCard>
                        <h2>Remote Team Work</h2>
                        <p>The studio was fully remote and as game development is a highly collaborative and multi-disciplinary activity, we needed to figure out ways to improve the flow of information online.</p>
                        <p>
                            This led to my involvement in developing and rolling out feature pods across the teams.
                            Members would be involved in many features at a time however have different working groups for each feature.
                        </p>
                        <p>
                            These groups were then supported with tools to assist remote collaboration, documentation and note taking.
                        </p>
                    </ProjectTextCard>
                </Col>
                <Col>
                    <ProjectVideoCard src="/videos/untamed-isles/untamed-combat.mp4" autoplay={false} type="video/mp4"/>
                </Col>
            </Row>

            {/* ------ Row 3 ------ */}

            <Row>
                <Col>
                    <ProjectImageCard src="/images/untamed-isles/combat-npc.png" />
                </Col>
                <Col>
                    <ProjectImageCard src="/images/untamed-isles/wild-encounter.png" />
                </Col>
            </Row>
        </div>
    )
}
