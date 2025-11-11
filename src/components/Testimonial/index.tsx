import styles from "./index.module.css";

type TestimonialProps = {
  name: string;
  status: string;
  img: string;
  testimonial: {
    short: string;
    long: string;
  };
  color?: "violet" | "white" | "dark-grayish-blue" | "dark-blackish-blue";
};

export default function Testimonial({
  name,
  status,
  img,
  testimonial,
  color = "white",
}: TestimonialProps) {
  return (
    <div className={styles.testimonial} data-color={color}>
      <div>
        <div>
          <img src={img} alt={name} />

          <div>
            <div data-text-preset="name">{name}</div>
            <div data-text-preset="status">{status}</div>
          </div>
        </div>

        <p data-text-preset="display">{testimonial.short}</p>
      </div>

      <blockquote>{testimonial.long}</blockquote>
    </div>
  );
}
