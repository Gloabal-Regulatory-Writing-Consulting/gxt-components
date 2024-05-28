import React, { FC } from "react";
import Accordion, { AccordionProps } from "../Accordion";

const AccordionExample: FC<AccordionProps> = ({ isSearchAble }) => {
  return (
    <div style={{ width: "50rem" }}>
      <h1>Accordion Example</h1>
      <Accordion isSearchAble={isSearchAble}>
        <Accordion.Header>Title</Accordion.Header>
        <Accordion.Content>here is content</Accordion.Content>
      </Accordion>
    </div>
  );
};

export default AccordionExample;
