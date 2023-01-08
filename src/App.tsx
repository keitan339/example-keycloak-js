import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopPage } from "./components/pages/TopPage";
import { AuthProvider } from "./auth/AuthProvider";
import { AuthGuard } from "./auth/AuthGuard";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <>
      <AuthProvider>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route element={<AuthGuard />}>
              <Route path="/" element={<TopPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
