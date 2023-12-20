import styles from './theme-switcher.module.css';

const THEMES = [
  "theme-blue",
  "theme-indigo",
  "theme-purple",
  "theme-pink",
  "theme-red",
  "theme-orange",
  "theme-yellow",
  "theme-green",
  "theme-teal",
  "theme-cyan",
];

function ThemeSwitcher() {
  const toggleTheme = () => {
    if (document.documentElement.getAttribute("data-bs-theme") == "dark") {
      document.documentElement.setAttribute("data-bs-theme", "light");
    } else {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    }
  };
  const toggleCustomTheme = (name) => {
    document.documentElement.setAttribute("data-custom-theme", name);
  };

  return (
    <nav className={styles.navigator + " bg-secondary-subtle"}>
      <ul>
        <li>
          <button className={styles.btn + " " + styles.normal + " btn btn-primary"} onClick={toggleTheme}>
            Toggle Lights
          </button>
        </li>

        {THEMES.map((item) => {
          return (
            <li key={item}>
              <button
                className={styles.btn + " " + styles[`btn-${item}`]}
                onClick={() => toggleCustomTheme(item)}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default ThemeSwitcher;
