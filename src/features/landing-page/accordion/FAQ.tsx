import React from "react";
import { Item, Header, Body } from "./styles/faq";

type FAQPropsType = {
  item: { id: number; header: string; body: string };
  setToggledID: (id: number | null) => void;
  toggled: boolean;
};

export default function FAQ({ item, setToggledID, toggled }: FAQPropsType) {
  return (
    <Item>
      <Header
        onClick={() => {
          setToggledID(toggled ? null : item.id);
        }}
      >
        {item.header}
        {toggled ? (
          <img src="/images/icons/close-slim.png" alt="Close" />
        ) : (
          <img src="/images/icons/add.png" alt="Open" />
        )}
      </Header>
      {toggled && <Body>{item.body}</Body>}
    </Item>
  );
}
