
import './App.css';
import MyNavbar from "./common/myNavbar";
import MyFooter from './common/myFooter';
import './my_website.css'
import { Container, Tab, Tabs } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  return (
    <>
      <MyNavbar></MyNavbar>

      <Tabs
                
                id="my-tabs"
                className="mb-3"
                justify
                
                >
                <Tab eventKey="tshirts" title={<span style={{color: 'black'}}>Tshirts</span>} id='myTab'>
                    <Container style={{padding: '1.5rem 0 100% 0'}}>
                        
                    </Container>
                </Tab>

                <Tab eventKey="hoodies" title={<span style={{color: 'black'}}>Hoodies</span>}>
                    <Container style={{padding: '1.5rem 0 100% 0'}}>
                        
                    </Container>
                </Tab>

                <Tab eventKey="pants" title={<span style={{color: 'black'}}>Pants</span>}>
                    <Container style={{padding: '1.5rem 0 100% 0'}}>
                        
                    </Container>
                </Tab>

                <Tab eventKey="socks" title={<span style={{color: 'black'}}>Socks</span>}>
                    <Container style={{padding: '1.5rem 0 100% 0'}}>
                        
                    </Container>
                </Tab>

                <Tab eventKey="favorites" title={<i style={{color: 'black'}} className="fa fa-heart" aria-hidden="true" title="favorites"></i>}>
                    <Container style={{padding: '1.5rem 0 100% 0'}}>
                        <h4>Favorites</h4>
                        
                    </Container>
                </Tab>

                <Tab eventKey="cart" title={<i style={{color: 'black'}} className="fa fa-shopping-cart" aria-hidden="true" title="shopping cart"></i>}>
                    <Container style={{padding: '1.5rem 0 100% 0'}}>
                        <h4>Cart</h4>
                        
                    </Container>
                </Tab>

                <Tab eventKey="history" title={<i style={{color: 'black'}} className="fa fa-history" aria-hidden="true" title="history"></i>}>
                    <Container style={{padding: '1.5rem 0 100% 0'}}>
                        <h4>Purchased Products</h4>
                        
                    </Container>
                </Tab>

                <Tab eventKey="info" title={<i style={{color: 'black'}} className="fa fa-info-circle" aria-hidden="true" title="about us"></i>}>
                    <Container style={{padding: '1.5rem 0 100% 0'}}>
                        <h4>About Us</h4>
                        <p>One Man Selling Some Stuff</p>
                    </Container>
                </Tab>

                <Tab eventKey="help" title={<i style={{color: 'black'}} className="fa fa-question-circle" aria-hidden="true" title="help"></i>}>
                    <Container style={{padding: '1.5rem 0 100% 0'}}>
                        <h4>Contact Us</h4>
                        <p>Leave us your contacts and your message and we'll get back to you asap!</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Your Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicText">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control maxLength={'300'} as="textarea" type="textarea" placeholder="Write Here (300 characters)" />
                            </Form.Group>

                            <Button id='submitButton' variant="primary" type="submit" style={{'lineHeight': '0', 'margin': '0', 'padding': '0'}}>
                                Submit
                            </Button>
                        </Form>
                    </Container>
                </Tab>
            </Tabs>

      <MyFooter></MyFooter>
    </>
  );
}

export default App;
