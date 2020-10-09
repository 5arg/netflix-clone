import React from "react";
import { Spinner, LockBody, Picture } from "./styles/loading";

type LoadingPropsType = {
  src: string;
};

export default function Loading({ src }: LoadingPropsType) {
  return (
    <Spinner>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  );
}
