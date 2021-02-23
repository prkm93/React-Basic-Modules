import React, {useState} from 'react'
import {Form, Button, Alert, Container} from 'react-bootstrap';

function Calculator() {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');
    let [error, setError] = useState('');
    
    
    const addHandler = (e) => {
        e.preventDefault();
        if (validateForm()) {
            let temp = Math.floor(parseInt(num1,10) + parseInt(num2,10));
            setResult(temp);
        }
    }

    const subtractHandler = (e) => {
        e.preventDefault();
        if (validateForm()) {
            let temp = Math.floor(parseInt(num1,10) - parseInt(num2,10));
            setResult(temp);
        }
    }

    const multiplyHandler = (e) => {
        e.preventDefault();
        if (validateForm()) {
            let temp = parseInt(num1,10)*parseInt(num2,10);
            setResult(temp);
        }
    }
    
    const divideHandler = (e) => {
        e.preventDefault();
        if (validateForm()) {
            let temp = Math.round(parseInt(num1,10)/parseInt(num2,10));
            setResult(temp);
        }
    }
    
    const validateForm = () => {
        let errors = {num1: '', num2: ''};

        if (num1 === '') {
            errors.num1 = "Please enter valid 1st No"
        } 
        
        if (num2 === '') {
            errors.num2 = "Please enter valid 2nd No"
        }
        setError(errors);
        console.log("errors", errors);
        if( errors.num1 !== '' || errors.num2 !== ''){
            return false;
        } else {
            return true;
        }
    }

    const resetHandler = (e) => {
        e.preventDefault();
        setNum1('');
        setNum2('');
        setResult('');
        setError('');
    }

    return (
        <Container>
            <div><h3>Basic Calculator</h3></div>
            <Form>
                <Form.Group controlId="1st">
                    <Form.Label>1st No</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Enter 1st No" 
                        value={num1}
                        onChange={(e) => setNum1(e.target.value)}
                    />
                    {error.num1 && <Alert variant='danger'>{error.num1}</Alert>}
                </Form.Group>

                <Form.Group controlId="2nd">
                    <Form.Label>2nd No</Form.Label>
                    <Form.Control 
                        type="number" 
                        placeholder="Enter 2nd No"
                        value={num2} 
                        onChange={(e) => setNum2(e.target.value)}
                    />
                    {error.num2 && <Alert variant='danger'>{error.num2}</Alert>}
                </Form.Group>

                <Button variant="primary" className="mr-2" type="submit" onClick={(e) => addHandler(e)}>
                    Addition
                </Button>
                <Button variant="primary" className="mr-2" type="submit" onClick={(e) => subtractHandler(e)}>
                    Subtraction
                </Button>
                <Button variant="primary" className="mr-2" type="submit" onClick={(e) => multiplyHandler(e)}>
                    Multiply
                </Button>
                <Button variant="primary" className="mr-2" type="submit" onClick={(e) => divideHandler(e)}>
                    Divide
                </Button>
                <Button variant="primary" type="submit" onClick={(e) => resetHandler(e)}>
                    Reset
                </Button>
                <div>
                <Form.Label className=""> The result is : {result}</Form.Label>
                </div>
                
            </Form>
        </Container>
    )
}

export default Calculator
