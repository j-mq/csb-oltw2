import React from "react";
import "./mycoolbutton.css";

export interface Props {
  /**
   * Is this the principal call to action on the page?
   */
  type: "basic" | "primary" | "outline" | "cancel" | "text";
  size: "tiny" | "small" | "medium" | "large" | "giant";
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const MyCoolButton: React.FC<Props> = ({
  type,
  size = "medium",
  label,
  ...props
}) => {
  return (
    <button
      type="button"
      className={["fds-btn", `fds-btn--${type}`, `fds-btn--${size}`].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};
