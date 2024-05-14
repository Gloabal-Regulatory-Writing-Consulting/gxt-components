import { FC } from "react";
import "./tab.css";

export type TabProps = {
  onClickHandler: () => void;
  title: string;
  active?: boolean;
  disabled?: boolean;
  className?: string;
};

const Tab: FC<TabProps> = ({
  active = false,
  onClickHandler,
  title,
  disabled = false,
  className = "",
}) => {
  const styles = active ? "active-tab" : "inactive-tab";

  return (
    <button
      onClick={onClickHandler}
      disabled={disabled}
      className={`tab ${styles} ${className}`}
    >
      {title}
    </button>
  );
};

export default Tab;
