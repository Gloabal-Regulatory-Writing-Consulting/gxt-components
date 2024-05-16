import type { Meta, StoryObj } from "@storybook/react";
import SvgIcon from "../SvgIcon";

const meta: Meta<typeof SvgIcon> = {
  title: "SVG",
  component: SvgIcon,
};

export default meta;
type Story = StoryObj<typeof SvgIcon>;

const modalRoot = () => {
  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);
  return modalRoot;
}

export const Primary: Story = {
  args: {
    userName: 'John Doe',
    onClickHandler: () => console.log("Button"),
    logOutHandler: () => console.log("Button"),
    portal: modalRoot(),
  },
};
export const Secondary: Story = {
  args: {
    userName: 'John Doe',
    onClickHandler: () => console.log("Button"),
    logOutHandler: () => console.log("Button"),
    portal: modalRoot(),
  },
};
export const Disabled: Story = {
  args: {
    userName: 'John Doe',
    onClickHandler: () => console.log("Button"),
    logOutHandler: () => console.log("Button"),
    portal: modalRoot(),
  },
};
