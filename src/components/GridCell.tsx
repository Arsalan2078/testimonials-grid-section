import { ChildrenProps } from "../libs/types";
import classes from "./GridCell.module.css";

function GridCell({ children }: ChildrenProps) {
  return <div className={`${classes.gridCell}`}>{children}</div>;
}

export default GridCell;
