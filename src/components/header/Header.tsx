import { FC, HTMLAttributes } from "react";
import {
  MainContainer,
  Container,
  Heading,
  BreadcrumbsContainer,
  ActionsContainer,
} from "./Header.styles";
import { useSlots } from "../../utils/useSlots";

export const Actions: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => <ActionsContainer {...rest}>{children}</ActionsContainer>;

export const HeadingComponent: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => <Heading {...rest}>{children}</Heading>;

export const Breadcrumbs: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...rest
}) => <BreadcrumbsContainer {...rest}>{children}</BreadcrumbsContainer>;

const Header: FC<HTMLAttributes<HTMLDivElement>> & {
  Heading: typeof HeadingComponent;
  Actions: typeof Actions;
  Breadcrumbs: typeof Breadcrumbs;
} = ({ children, ...rest }: HTMLAttributes<HTMLDivElement>) => {
  const [{ HeadingSlot, ButtonSlot, BreadcrumbsSlot }, restChildren] = useSlots(
    children,
    {
      HeadingSlot: HeadingComponent,
      ButtonSlot: Actions,
      BreadcrumbsSlot: Breadcrumbs,
    },
  );

  return (
    <MainContainer {...rest}>
      <Container>
        {HeadingSlot && <HeadingSlot />}
        {ButtonSlot && <ButtonSlot />}
      </Container>
      {BreadcrumbsSlot && <BreadcrumbsSlot />}
      {restChildren}
    </MainContainer>
  );
};

Header.Heading = HeadingComponent;
Header.Actions = Actions;
Header.Breadcrumbs = Breadcrumbs;

export default Header;
