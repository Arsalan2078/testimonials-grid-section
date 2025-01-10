import { TestimonialProps } from "../libs/types";
import classes from "./Testimonial.module.css";

function Testimonial({
  authorImage,
  authorName,
  authorStatus,
  testimonialShort,
  testimonialLong,
}: TestimonialProps) {
  return (
    <div className={`${classes.testimonial}`}>
      <div className={classes.authorContainer}>
        <img
          src={authorImage}
          alt={authorName}
          className={classes.authorImage}
        />

        <div className={classes.authorNameContainer}>
          <p className={classes.authorName}>{authorName}</p>
          <p className={classes.authorStatus}>{authorStatus}</p>
        </div>
      </div>

      <div className={classes.testimonialText}>
        <p className={classes.testimonialShort}>{testimonialShort}</p>
        <q className={classes.testimonialLong}>{testimonialLong}</q>
      </div>
    </div>
  );
}

export default Testimonial;
