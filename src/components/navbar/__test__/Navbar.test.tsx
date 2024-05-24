import React from "react";
import {
  screen,
  fireEvent,
  render,
  waitFor,
  act,
} from "@testing-library/react";
import Navbar, { NavbarProps } from "../Navbar";
import { UserObj } from "../../avatar/Avatar";
import { INavItem } from "../../navitem/Navitem";
import { vi, it, describe, expect } from "vitest";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const renderWithRouter = (ui: React.ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes>
        <Route path="*" element={ui} />
      </Routes>
    </MemoryRouter>,
  );
};

const footerLinks: INavItem[] = [
  {
    navigateTo: "user",
    text: "Footer Link 1",
    Icon: () => <span>FL1</span>,
  },
  {
    navigateTo: "user",
    text: "Footer Link 2",
    Icon: () => <span>FL2</span>,
  },
];

const contentLinks: INavItem[] = [
  {
    navigateTo: "user",
    text: "Content Link 1",
    Icon: () => <span>CL1</span>,
  },
  {
    navigateTo: "user",
    text: "Content Link 2",
    Icon: () => <span>CL2</span>,
  },
];

const user: UserObj = {
  firstName: "Test",
  lastName: "User",
  avatar: "http://example.com/avatar.jpg",
};

const clientStyling = {
  thumbnail: "http://example.com/thumbnail.jpg",
  logo: "http://example.com/logo.jpg",
};

const setShowAvatarMenu = vi.fn();

const isLinkActive = (path: string) => path === "user";

const defaultProps: NavbarProps = {
  footerLinks,
  contentLinks,
  setShowAvatarMenu,
  showAvatarMenu: false,
  clientStyling,
  user,
  isLinkActive,
};

describe("Navbar Component", () => {
  it("renders correctly and matches snapshot", () => {
    const { asFragment } = renderWithRouter(<Navbar {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("expands on mouse enter", async () => {
    renderWithRouter(<Navbar {...defaultProps} />);
    const sidebar = screen.getByTestId("sidebar");

    act(() => {
      fireEvent.mouseEnter(sidebar);
    });
    await waitFor(() => {
      expect(sidebar).toHaveStyle("width: 15.7rem");
    });
  });

  it("collapses on mouse leave", async () => {
    renderWithRouter(<Navbar {...defaultProps} />);
    const sidebar = screen.getByTestId("sidebar");

    act(() => {
      fireEvent.mouseEnter(sidebar);
    });
    await waitFor(() => {
      expect(sidebar).toHaveStyle("width: 15.7rem");
    });
    fireEvent.mouseLeave(sidebar);

    await waitFor(() => {
      expect(sidebar).toHaveStyle("width: 5rem");
    });
  });

  it("toggles avatar menu on avatar click", () => {
    renderWithRouter(<Navbar {...defaultProps} />);
    const avatar = screen.getByRole("img", { name: /avatar/i });

    fireEvent.click(avatar);
    expect(setShowAvatarMenu).toHaveBeenCalledWith(true);
  });

  it("renders content links", () => {
    renderWithRouter(<Navbar {...defaultProps} />);
    contentLinks.forEach((link) => {
      expect(screen.getByText(link.text)).toBeInTheDocument();
    });
  });

  it("renders footer links", () => {
    renderWithRouter(<Navbar {...defaultProps} />);
    footerLinks.forEach((link) => {
      expect(screen.getByText(link.text)).toBeInTheDocument();
    });
  });

  it("renders logo or thumbnail based on expansion state", async () => {
    renderWithRouter(<Navbar {...defaultProps} />);
    const logo = screen.getByTestId("logo");

    act(() => {
      fireEvent.mouseEnter(screen.getByTestId("sidebar"));
    });
    await waitFor(() => {
      expect(logo).toHaveAttribute("src", clientStyling.logo);
    });

    act(() => {
      fireEvent.mouseLeave(screen.getByTestId("sidebar"));
    });
    await waitFor(() => {
      expect(logo).toHaveAttribute("src", clientStyling.thumbnail);
    });
  });
});
