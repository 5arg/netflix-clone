import React from "react";
import { Container, Button, Input, Text, Break } from "./styles/optform";

export default function OptForm() {
  return (
    <Container>
      <Input placeholder="Email address" />
      <Button>
        Try it now
        <img src="/images/icons/chevron-right.png" alt="send" />
      </Button>
      <Break />
      <Text>
        Ready to watch? Enter your e-mail to create or restart your membership.
      </Text>
    </Container>
  );
}
