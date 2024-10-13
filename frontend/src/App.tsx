import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
import Split from "./Split";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Result from "./Result";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Result1 from "./Result1";
import Result2 from "./Result2";
import Result3 from "./Result3";

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
            <Route path="/results/1" element={<Result1 />} />
            <Route path="/results/2" element={<Result2 />} />
            <Route path="/results/3" element={<Result3 />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
