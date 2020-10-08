import React, { FormEvent, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  Container,
  Error,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
  Base,
} from "./styles/form";
import * as ROUTES from "../../constants/routes";
import { useFirebase } from "../../context/Firebase";

export default function Form() {
  const [firstName, setFirstName] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>();
  const { firebase } = useFirebase();
  const history = useHistory();
  const location = useLocation();

  const isInvalid =
    location.pathname === ROUTES.SIGN_IN
      ? password === "" || emailAddress === ""
      : firstName === "" || password === "" || emailAddress === "";

  const handleSignIn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  const handleSignUp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user
          ?.updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5 + 1) + "",
          })
          .then(() => history.push(ROUTES.BROWSE));
      })
      .catch((error) => {
        setFirstName("");
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };

  return (
    <Container>
      <Title>
        {location.pathname === ROUTES.SIGN_IN ? "Sign In" : "Sign Up"}
      </Title>
      {error && <Error>{error}</Error>}
      <Base
        onSubmit={
          location.pathname === ROUTES.SIGN_IN ? handleSignIn : handleSignUp
        }
        method="POST"
      >
        {location.pathname === ROUTES.SIGN_UP && (
          <Input
            placeholder="First Name"
            value={firstName}
            onChange={({ target }) => setFirstName(target.value)}
          />
        )}
        <Input
          placeholder="E-mail address"
          value={emailAddress}
          onChange={({ target }) => setEmailAddress(target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <Submit disabled={isInvalid}>Submit</Submit>
      </Base>
      {location.pathname === ROUTES.SIGN_IN ? (
        <Text>
          New to Netflix? <Link to={ROUTES.SIGN_UP}>Sign up now.</Link>
        </Text>
      ) : (
        <Text>
          Already a user? <Link to={ROUTES.SIGN_IN}>Sign in now.</Link>
        </Text>
      )}

      <TextSmall>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        Learn more.
      </TextSmall>
    </Container>
  );
}
