import Sink from "./sink";
import "./styles.scss";

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

function App() {
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
    <>
    <nav className="navigator">
      <ul>
        <li className="list">
          <button className="btn btn-primary" onClick={toggleTheme}>
            Toggle Lights
          </button>
        </li>

        {THEMES.map((item) => {
          return (
            <li key={item}>
              <button
                className={`btn btn-${item}`}
                onClick={() => toggleCustomTheme(item)}
              >
                {item}
              </button>
            </li>
          );
        })}
        <li>
          <a href="#">Just a link</a>
        </li>
      </ul>
      </nav>

      <Sink />

    </>
  );
}

export default App;
