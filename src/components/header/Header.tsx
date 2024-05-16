import React, { FC, ReactNode } from "react";
import {
  MainContainer,
  Container,
  Heading,
  BreadcrumbsContainer,
  BreadcrumbsText,
  ButtonContainer,
} from "./Header.styles";

interface ButtonProps {
  children: ReactNode;
}

interface HeadingProps {
  children: string;
}

interface BreadcrumbsProps {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({ children }) => <>{children}</>;

export const HeadingComponent: FC<HeadingProps> = ({ children }) => (
  <Heading>{children}</Heading>
);

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ children }) => (
  <BreadcrumbsContainer>
    <BreadcrumbsText>{children}</BreadcrumbsText>
  </BreadcrumbsContainer>
);

interface HeaderProps {
  children?: ReactNode;
}

export const Header: FC<HeaderProps> & {
  Heading: typeof HeadingComponent;
  Button: typeof Button;
  Breadcrumbs: typeof Breadcrumbs;
} = ({ children }) => {
  const buttons: ReactNode[] = [];
  let heading: ReactNode | null = null;
  let breadcrumbs: ReactNode | null = null;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === Button) {
        buttons.push(child);
      } else if (child.type === HeadingComponent) {
        heading = child;
      } else if (child.type === Breadcrumbs) {
        breadcrumbs = child;
      }
    }
  });

  return (
    <MainContainer>
      <Container hasBreadcrumbs={!breadcrumbs}>
        {heading}
        <ButtonContainer>{buttons}</ButtonContainer>
      </Container>
      {breadcrumbs}
    </MainContainer>
  );
};

Header.Heading = HeadingComponent;
Header.Button = Button;
Header.Breadcrumbs = Breadcrumbs;

export default Header;
