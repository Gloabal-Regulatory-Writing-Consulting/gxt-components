import React, { act } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Avatar, { AvatarProps, UserObj } from '../Avatar';
import { describe, expect, it, vi } from 'vitest';

describe('Avatar', () => {
  const mockUser: UserObj = {
    firstName: 'John',
    lastName: 'Doe',
  };

  const renderComponent = (props?: Partial<AvatarProps>) => {
    const defaultProps: AvatarProps = {
      size: 'small',
      user: mockUser,
    };
    return render(<Avatar {...defaultProps} {...props} />);
  };

  it('renders the user initials when no image is provided', () => {
    renderComponent({ imageUrl: undefined });

    const userInitials = screen.getByTestId('user-initials');
    expect(userInitials).toBeInTheDocument();
    expect(userInitials.textContent).toBe('JD');
  });

  it('renders the user image when imageUrl is provided', () => {
    renderComponent({ imageUrl: 'image.jpg' });

    const userImage = screen.getByAltText('Avatar');
    expect(userImage).toBeInTheDocument();
    expect(userImage).toHaveAttribute('src', 'image.jpg');
  });

  it('calls onClickHandler when the avatar button is clicked', () => {
    const onClickHandler = vi.fn();
    renderComponent({ onClickHandler });

    const avatarButton = screen.getByTestId('avatarIcon');
    fireEvent.click(avatarButton);

    expect(onClickHandler).toHaveBeenCalledTimes(1);
  });

  it('calls handleImageUpload when a file is selected', () => {
    const handleImageUpload = vi.fn();
    renderComponent({ handleImageUpload });

    const fileInput = screen.getByTestId('user-image-input');
    fireEvent.change(fileInput, { target: { files: ['image.jpg'] } });

    expect(handleImageUpload).toHaveBeenCalledTimes(1);
  });

  it('renders the user name and "View profile" text when isExpanded is true', () => {
    renderComponent({ isExpanded: true });
    act(() => {
      const userName = screen.getByText("John Doe");
      const viewProfileText = screen.getByText("View profile");
      expect(userName).toBeInTheDocument();
      expect(viewProfileText).toBeInTheDocument();
    });
  });
});
