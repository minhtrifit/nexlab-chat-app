import { useEffect } from "react";

interface PropType {
  children: React.ReactElement;
}

const ThemeProvider = (props: PropType) => {
  const { children } = props;

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode === null) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  });

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  }, []);

  return <>{children}</>;
};

export default ThemeProvider;
