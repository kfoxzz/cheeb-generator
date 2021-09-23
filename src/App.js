import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import "animate.css/animate.min.css";
import { Animated } from "react-animated-css";
import CheebInput from './CheebInput';
import Results from './Results';

function App() {

  const [cheebifiedWord, setCheebifiedWord] = useState('');

  const ruleset1 = ['a', 'e', 'i', 'o', 'u']


  function cheebify(word) {
    let newWord = '';
    let slicedWord = word.slice(0, 2);
    if (ruleset1.includes(slicedWord[1])) {
      newWord = slicedWord + "cheeb";
    } else {
      newWord = slicedWord + "eeb";
    }
    setCheebifiedWord(newWord);
  }

  return (
    <>
        <Jumbotron className="font-link orange-bg text-white text-center">
          <Container>
            <Row>
            <Animated animationIn="fadeInLeft">
                <Col className="my-3">
                  <h1><strong>Cheebify</strong></h1>
                  <p>Need more cheeb? We got u</p>
                </Col>
              </Animated>
            </Row>
          </Container>
        </Jumbotron>

        <CheebInput cheebify={cheebify}/>

        <Results newWord={cheebifiedWord}/>
    </>
  );
}

export default App;
