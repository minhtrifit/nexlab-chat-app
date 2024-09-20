export const toggleThemeMode = () => {
  const themeMode = localStorage.getItem("theme");

  if (themeMode === "light") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};
