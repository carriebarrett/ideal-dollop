import React from "react";

interface ColumnProps {
  style: React.CSSProperties,
  className: string
  children: React.ReactNode
}

const Column = (props: ColumnProps) => {
  return (
    <div
      className={props.className}
      style={{ ...props.style, display: 'flex', flexDirection: 'column' }}
    >
      {props.children}
    </div>
  )
};

export default Column