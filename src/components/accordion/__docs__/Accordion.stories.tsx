import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "../Accordion";
import CheckboxInput from "../../checkboxInput/CheckboxInput";

const meta: Meta<typeof Accordion> = {
  title: "Accordion",
  render: function Render({ isSearchAble, isAccordionOpen }) {
    return (
      <div style={{ width: "20rem", color: "#414141" }}>
        <Accordion
          isSearchAble={isSearchAble}
          isAccordionOpen={isAccordionOpen}
        >
          <Accordion.Header key="1">Accordion 1</Accordion.Header>
          <Accordion.Content key="2">
            <div>
              <CheckboxInput $inputSize="xs" label="Automated" />
            </div>
          </Accordion.Content>
        </Accordion>
      </div>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const AccordionComponent: Story = {
  args: {
    isSearchAble: true,
    isAccordionOpen: true,
  },
};
