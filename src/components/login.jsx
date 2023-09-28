import React from "react";
import { Form, FormControl, FormGroup, Button } from "react-bootstrap";

const LoginForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data
    if (username === "" || password === "") {
      setError("Please enter your username and password.");
      return;
    }

    // Submit the form data to the backend
    // ...
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup controlId="username">
        <FormControl type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </FormGroup>
      <FormGroup controlId="password">
        <FormControl type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormGroup>
      <Button type="submit">Login</Button>
      {error && <p className="text-danger">{error}</p>}
    </Form>
  );
};

export default LoginForm;
