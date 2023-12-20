import "../../assets/styles/styles.scss";
import styles from "./app.module.css";
import ThemeSwitcher from "../theme-switcher/ThemeSwitcher";
import RawText from "../sink/RawText";
import Hero from "../sink/Hero";

function App() {
  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        <ThemeSwitcher />
        <Hero />
        <div className="container">
          <RawText />
        </div>
      </main>
    </div>
  );
}

export default App;
