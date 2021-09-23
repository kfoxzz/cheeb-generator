import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, } from 'react-bootstrap';
import "animate.css/animate.min.css";
import { Animated } from "react-animated-css";

function Results(props) {
    return (
        <Animated animationIn="rubberBand">
            <Container className="font-link text-center" >
                <Row>
                    <Col>
                        <h5>Results:</h5>
                        <h2>{props.newWord ? props.newWord : '*cheebified word here*'}</h2>
                    </Col>
                </Row>
            </Container>
        </Animated>
    )
}

export default Results;