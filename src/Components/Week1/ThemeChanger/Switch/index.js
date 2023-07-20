import "./style.css";
import { GlobalTheme } from "../ThemeContext";

const Switch = () => {
  const { darkTheme, toggleTheme } = GlobalTheme();

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={darkTheme === "light"}
        onChange={toggleTheme}
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
