import { ChildrenProps } from "../libs/types";
import classes from "./Grid.module.css";

function Grid({ children }: ChildrenProps) {
  return <section className={`${classes.grid}`}>{children}</section>;
}

export default Grid;
