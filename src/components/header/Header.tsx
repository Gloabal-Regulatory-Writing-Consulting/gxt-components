import React, { FC, HTMLAttributes } from "react";
import {
  MainContainer,
  Container,
  Heading,
  ActionsContainer,
} from "./Header.styles";
import { useSlots } from "../../hooks/useSlots";
import Breadcrumbs, { breadcrumbItem } from "../breadcrums/Breadcrumbs";

export const Actions: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => <ActionsContainer {...rest}>{children}</ActionsContainer>;

export const HeadingComponent: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => <Heading {...rest}>{children}</Heading>;

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  breadcrumbItems?: breadcrumbItem[];
}

const Header: FC<HeaderProps> & {
  Heading: typeof HeadingComponent;
  Actions: typeof Actions;
  Breadcrumbs: FC<{ items: breadcrumbItem[] }>;
} = ({ children, breadcrumbItems, ...rest }: HeaderProps) => {
  const [{ HeadingSlot, ButtonSlot }, restChildren] = useSlots(children, {
    HeadingSlot: HeadingComponent,
    ButtonSlot: Actions,
  });

  return (
    <MainContainer {...rest}>
      <Container>
        {HeadingSlot && <HeadingSlot />}
        {ButtonSlot && <ButtonSlot />}
      </Container>
      {breadcrumbItems && <Breadcrumbs items={breadcrumbItems} />}
      {restChildren}
    </MainContainer>
  );
};

Header.Heading = HeadingComponent;
Header.Actions = Actions;
Header.Breadcrumbs = Breadcrumbs;

export default Header;
