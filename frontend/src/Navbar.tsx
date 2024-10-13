
import { Button } from "@mui/material";

import { Link } from "react-router-dom";
import logo from './logo.png';


function Navbar() {
    return (
      <div className="fixed top-0 left-0 bg-blue-100 rounded-b-lg drop-shadow-md w-full p-2 flex flex-row pr-6 items-center">
        <div
          style={{ textAlign: "center", padding: "5px", paddingLeft: "20px" }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{ width: "30px", height: "auto" }}
          />
        </div>
        <div className="poppins-bold grow ml-2 text-xl text-primary">ScoreSnag</div>
        <Button sx={{}}>
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "inherit",
              fontFamily: "Poppins",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Login
          </Link>
        </Button>
      </div>
    )
}

export default Navbar;