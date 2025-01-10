import { TestimonialProps } from "../libs/types";
import classes from "./GridCell.module.css";
import Testimonial from "./Testimonial";

function GridCell({
  authorImage,
  authorName,
  authorStatus,
  testimonialShort,
  testimonialLong,
}: TestimonialProps) {
  return (
    <div className={`${classes.gridCell}`}>
      <Testimonial
        authorImage={authorImage}
        authorName={authorName}
        authorStatus={authorStatus}
        testimonialShort={testimonialShort}
        testimonialLong={testimonialLong}
      />
    </div>
  );
}

export default GridCell;
