import React from "react";
import { createPortal } from "react-dom";
import { Container, Overlay, Inner, Button, Close } from "./styles/player";

type PlayerPropsType = {
  showPlayer: boolean;
  src: string;
  setShowPlayer: (show: boolean) => void;
};

export default function Player({
  showPlayer,
  src,
  setShowPlayer,
}: PlayerPropsType) {
  return (
    <>
      <Button onClick={() => setShowPlayer(!showPlayer)}>Play</Button>
      <Container>
        {showPlayer
          ? createPortal(
              <Overlay onClick={() => setShowPlayer(false)}>
                <Inner>
                  <video id="netflix-player" controls>
                    <source src={src} type="video/mp4"></source>
                  </video>
                  <Close />
                </Inner>
              </Overlay>,
              document.body
            )
          : null}
      </Container>
    </>
  );
}
