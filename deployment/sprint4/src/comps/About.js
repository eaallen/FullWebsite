import React from 'react';
import { Container, Row, Col,Jumbotron } from 'react-bootstrap';

function About(props){

    return(
        <div>

            <Jumbotron className='text-center'>
                <h1>About</h1>
                <h3>
                    Feel free to contact me! <br/>
                </h3>
                elijah.a.allen@gmail.com 
                <a href='https://www.linkedin.com/in/elijah-andrew-allen/'>
                    <i class="fab fa-linkedin" style={{color:'#0077b5', fontSize:'1.5rem',marginLeft:'1rem'}}></i>
                </a>
                <a href='https://www.facebook.com/profile.php?id=100023896663762'>
                    <i class="fab fa-facebook-square" style={{color:'#4267b2', fontSize:'1.5rem',marginLeft:'1rem'}}></i>
                </a>
                
            </Jumbotron>

            <Row  className='center-row'>
                <Col>
                    <h2>
                        Education
                    </h2>
                    <Container>
                    <p>
                        I went to High School at Utah County Academy of Science (2013-2016), where I received an associate degree from Utah
                        Valley University. I am currently a student at Brigham Young University majoring in Information Systems. 
                        I am on track for a bachelor’s degree and I intend to receive a master’s as well.    
                    </p>
                    </Container>
                </Col>
                <Col>
                    <h2>
                        Motivation
                    </h2>
                    <p>
                        I am a software engineer. I really enjoy write code that changes what people do and think about. 
                        I have completed several personal and scholarly coding projects which has given me the skill set to make an impact.
                        I am a published develop in <a className='outside-link' href='https://appsource.microsoft.com/en-us/product/office/WA200001383?src=office&tab=Overview'>Microsoft’s add-in library.</a>   
                    </p>
                
                
                </Col>
                <Col>
                    <h2>
                      Service
                    </h2>
                    <p>
                        Between 2016 and 2018 I served as a missionary for the <a className='outside-link' href="https://www.comeuntochrist.org/">Church of Jesus Christ of Latter-Day Saints</a>. Because I was 
                        in the Hawaiian Islands, I was able to serve and connect with many people from very different cultures and backgrounds. 
                        Serving them had a profound and positive impact on interpersonal skills. 
                    </p>

                </Col>
            </Row>
        </div>
    )
}
export default About;