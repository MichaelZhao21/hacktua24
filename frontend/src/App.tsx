import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
import Split from "./Split";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Result from "./Result";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#545dde", // Replace with your desired primary color (hex, RGB, etc.)
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Split />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/result"
              element={<Result xmlPath={"http://localhost:5000/xml"} />}
            />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
