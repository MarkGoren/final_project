import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { InputGroup, Button } from "react-bootstrap";

export default function MyLogin(props){
    return (
        <Modal show={props.showLogin} onHide={props.handleCloseLogin} style={{'marginTop': '8rem'}}>
                <Modal.Header style={{'paddingRight': '1.5rem'}} closeButton>
                <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                
                <Form>
                    <InputGroup className="mb-3" controlId="formBasicEmail">
                    
                        <InputGroup.Text id="emailAddon" style={{'backgroundColor': 'white', 'borderColor': 'white', 'fontSize': '2rem'}}><i className="fa fa-user" aria-hidden="true"></i></InputGroup.Text>
                        <Form.Control aria-describedby='emailAddon' type="email" placeholder="Enter Username or Email" style={{'borderRadius': '0'}}/>
                    
                    </InputGroup>

                    <InputGroup className="mb-3" controlId="formBasicPassword">
                    
                        <InputGroup.Text id="passwordAddon" style={{'backgroundColor': 'white', 'borderColor': 'white', 'fontSize': '2rem'}}><i className="fa fa-key" aria-hidden="true"></i></InputGroup.Text>
                        <Form.Control aria-describedby='passwordAddon' type="password" placeholder="Enter Password" style={{'borderRadius': '0'}}/>
                        
                    </InputGroup>
                    <Button style={{'backgroundColor': 'white', 'color': 'black', 'borderColor': 'white', 'marginLeft': '22rem', 'padding': '0', 'fontSize': '0.9rem'}}>forgot password</Button>

                    <Button type='submit' className="rounded-pill btn-lg" variant="dark" style={{'marginLeft': '10rem'}}>
                    Login Now
                    </Button>
                </Form>
                
                </Modal.Body>
                <Modal.Footer>
                
                

                <div style={{'marginRight': '5.2rem'}}>
                <span>Don't have an account yet? </span>
                <Button onClick={() => {props.handleCloseLogin(); props.handleShowSignup()}} style={{'backgroundColor': 'white', 'color': 'black', 'borderColor': 'white', 'padding': '0', 'fontWeight': 'bold'}}>Signup here</Button>
                </div>
                </Modal.Footer>
            </Modal>
    )
}