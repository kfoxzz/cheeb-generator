import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, FormControl, FormGroup, Button } from 'react-bootstrap';

function CheebInput (props) {

    const [word, setWord] = useState('');

    function handleChange(e) {
        e.preventDefault();
        setWord(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.cheebify(word);
        setWord('');
    }

    return (
        <Container className="py-3 font-link text-center">
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col xs={8}>
                        <FormGroup>
                            <FormControl size="lg" type="text" placeholder="Enter the word you want to be cheebified" value={word} onChange={handleChange} />
                        </FormGroup>
                    </Col>
                    <Col xs={3}>
                        <div className="d-grid">
                            <Button variant="secondary" size="lg" type="submit">Cheebify</Button>
                        </div>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}


export default CheebInput;