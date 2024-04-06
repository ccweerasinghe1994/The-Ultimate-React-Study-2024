import { Outlet } from "react-router-dom";
import PaginationPage from "./components/PaginationPage";
import Header from "./components/Header";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="container grid grid-rows-10 gap-2 h-screen">
        <Header />
        <Outlet />
        <PaginationPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
