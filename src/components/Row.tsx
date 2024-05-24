import React from "react";

interface RowProps {
  style: React.CSSProperties,
  className: string
  children: React.ReactNode
}

const Row = (props: RowProps) => {
  return (
    <div
      className={props.className}
      style={{ ...props.style, display: 'flex', flexDirection: 'row' }}
    >
      {props.children}
    </div>
  )
};

export default Row