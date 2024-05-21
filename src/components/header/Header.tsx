import { FC, ReactNode } from "react";
import {
  MainContainer,
  Container,
  Heading,
  BreadcrumbsContainer,
  ActionsContainer,
} from "./Header.styles";
import { useSlots } from "../../utils/useSlots";

interface ActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface HeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
}

interface BreadcrumbsProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Actions: FC<ActionsProps> = ({ children, ...rest }) => (
  <ActionsContainer {...rest}>{children}</ActionsContainer>
);

export const HeadingComponent: FC<HeadingProps> = ({ children, ...rest }) => (
  <Heading {...rest}>{children}</Heading>
);

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ children, ...rest }) => (
  <BreadcrumbsContainer {...rest}>{children}</BreadcrumbsContainer>
);

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

const Header: FC<HeaderProps> & {
  Heading: typeof HeadingComponent;
  Actions: typeof Actions;
  Breadcrumbs: typeof Breadcrumbs;
} = ({ children, ...rest }: HeaderProps) => {
  const [slots, restChildren] = useSlots(children, {
    heading: HeadingComponent,
    buttons: Actions,
    breadcrumbs: Breadcrumbs,
  });

  return (
    <MainContainer {...rest}>
      <Container>
        {slots.heading}
        {slots.buttons}
      </Container>
      {slots.breadcrumbs}
      {restChildren}
    </MainContainer>
  );
};

Header.Heading = HeadingComponent;
Header.Actions = Actions;
Header.Breadcrumbs = Breadcrumbs;

export default Header;
