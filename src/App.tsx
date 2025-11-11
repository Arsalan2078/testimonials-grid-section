import styles from "./App.module.css";
import TestimonialsGrid from "./components/TestimonialsGrid";

export default function App() {
  return (
    <main className={styles.app} data-text-preset="main">
      <TestimonialsGrid />
    </main>
  );
}
