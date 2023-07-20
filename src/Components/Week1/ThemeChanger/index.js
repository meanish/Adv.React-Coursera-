import { GlobalTheme } from "./ThemeContext";
import Switch from "./Switch";

const Title = ({ children }) => {
  const { darkTheme } = GlobalTheme();
  return (
    <h2
      style={{
        color: darkTheme === "light" ? "grey" : "white",
        margin: 0,
      }}
    >
      {children}
    </h2>
  );
};

const Paragraph = ({ children }) => {
  const { darkTheme } = GlobalTheme();
  return (
    <p
      style={{
        color: darkTheme === "light" ? "blue" : "white",
      }}
    >
      {children}
    </p>
  );
};

const Content = () => {
  return (
    <div>
      <Paragraph>
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would make
        me stop trying all of the others.
      </Paragraph>
    </div>
  );
};

const Header = () => {
  return (
    <>
      <Title>Little Lemon</Title>
      <Switch />
    </>
  );
};

const Page = () => {
  return (
    <div className="Page">
      <Title>When it comes to dough</Title>
      <Content />
    </div>
  );
};

function Main() {
  const { darkTheme } = GlobalTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: darkTheme === "light" ? "white" : "black",
      }}
    >
      <Header />
      <Page />
    </div>
  );
}

export default Main;
