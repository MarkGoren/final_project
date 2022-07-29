import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { InputGroup, Button } from "react-bootstrap";
import ErrorMessages from "./ErrorMessages";

export default function MySignup(props) {
  return (
    <Modal
      show={props.showSignup}
      onHide={props.handleCloseSignup}
      style={{ marginTop: "2.5rem" }}
    >
      <Modal.Header style={{ paddingRight: "1.5rem" }} closeButton>
        <Modal.Title>SignUp</Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <Form onSubmit={props.handleSubmit}>
          <InputGroup
            value={props.emailValue}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <InputGroup.Text
              id="emailAddon"
              style={{
                backgroundColor: "white",
                borderColor: "white",
                fontSize: "2rem",
              }}
            >
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </InputGroup.Text>
            <Form.Control
              autoComplete="email"
              name={"email"}
              onBlur={props.validateInput}
              type="email"
              placeholder="Enter Email"
              style={{ borderRadius: "0" }}
            />
          </InputGroup>

          <ErrorMessages errors={props.emailErrors}></ErrorMessages>

          <InputGroup
            value={props.usernameValue}
            className="mb-3"
            controlId="formBasicUsername"
          >
            <InputGroup.Text
              id="usernameAddon"
              style={{
                backgroundColor: "white",
                borderColor: "white",
                fontSize: "2rem",
              }}
            >
              <i className="fa fa-user" aria-hidden="true"></i>
            </InputGroup.Text>
            <Form.Control
              autoComplete="username"
              name={"username"}
              onBlur={props.validateInput}
              type="text"
              placeholder="Enter Username"
              style={{ borderRadius: "0" }}
            />
          </InputGroup>
          <ErrorMessages errors={props.usernameErrors}></ErrorMessages>

          <InputGroup
            value={props.passwordValue}
            className="mb-3"
            controlId="formBasicPassword"
          >
            <InputGroup.Text
              id="passwordAddon"
              style={{
                backgroundColor: "white",
                borderColor: "white",
                fontSize: "2rem",
              }}
            >
              <i className="fa fa-key" aria-hidden="true"></i>
            </InputGroup.Text>
            <Form.Control
              autoComplete="new-password"
              name={"password"}
              onBlur={props.validateInput}
              type="password"
              placeholder="Enter Password"
              style={{ borderRadius: "0" }}
            />
          </InputGroup>
          <ErrorMessages errors={props.passwordErrors}></ErrorMessages>

          <InputGroup
            value={props.passwordRepeatValue}
            className="mb-3"
            controlId="formBasicPassword"
          >
            <InputGroup.Text
              id="passwordAddon"
              style={{
                backgroundColor: "white",
                borderColor: "white",
                fontSize: "2rem",
              }}
            >
              <i className="fa fa-lock"></i>
            </InputGroup.Text>
            <Form.Control
              autoComplete="current-password"
              name={"passwordRepeat"}
              onBlur={props.validateInput}
              type="password"
              placeholder="Repeat Password"
              style={{ borderRadius: "0" }}
            />
          </InputGroup>
          <ErrorMessages
            errors={props.passwordRepeatErrors}
          ></ErrorMessages>

          <Button
            type="submit"
            className="rounded-pill btn-lg"
            variant="dark"
            style={{ marginLeft: "9.7rem", marginTop: "1rem" }}
          >
            SignUp Now
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <div style={{ marginRight: "6.4rem" }}>
          <span>Already have an account? </span>
          <Button
            onClick={() => {
              props.handleCloseSignup();
              props.handleShowLogin();
            }}
            style={{
              backgroundColor: "white",
              color: "black",
              borderColor: "white",
              padding: "0",
              fontWeight: "bold",
            }}
          >
            Login here
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
