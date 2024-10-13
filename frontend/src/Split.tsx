import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import "./Split.css"; // Import the CSS file for styling
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

import SendIcon from "@mui/icons-material/Send"; // Send icon resembles a paper airplane

import "./Split.css";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Navbar from "./Navbar";
import { ring } from "ldrs";

ring.register();

// Default values shown
import CircularProgress from "@mui/material/CircularProgress";

// Import the Loader component
import Loader from "./Loader";

const SquareFilledButton = styled(IconButton)(({ theme }) => ({
  width: "48px",
  height: "48px",
  borderRadius: "4px",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const URL = "http://localhost:5000";

const Split = () => {
  const [url, setUrl] = useState("");
  const [maxSeconds, setMax] = useState("30");
  const [loading, setLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true); // Page loading state
  const navigate = useNavigate();

  // Simulate page loading delay (e.g., fetching initial data)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPageLoading(false); // After 3 seconds, page loading will stop
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    setLoading(true); // Start loader when form is submitted

    try {
      const response = await fetch(`${URL}/snatch`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, maxSeconds }),
      });

      if (response.ok) {
        const data = await response.json();
        navigate("/result", { state: { data } });
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setLoading(false); // Stop loader after the request completes
    }
  };

  // If the page or request is loading, show the Loader component
  if (isPageLoading || loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="fixed top-0 left-0 bg-white w-full">
        <Button>
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
      <div className="h-screen flex split-background">
        {/* Form Section */}
        <div className="flex-1 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 w-full flex flex-col items-center"
          >
            <h1 className="text-8xl font-bold text-center text-white mb-4 poppins-bold w-max-xl">
              ScoreSnag
            </h1>
            <h3 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 poppins-bold">
              Instant Sheet Music from Your Favorite Piano Videos
            </h3>
            <h5 className="text-2xl font-normal text-center poppins bg-clip-text text-transparent w-[30%] bg-gradient-to-r text-gray-50 pb-8">
              Just upload the URL of any MIDI YouTube video to get a PDF version
              of the sheet music.
            </h5>

            <div className="flex flex-row items-center">
              <TextField
                label="YouTube URL"
                variant="outlined"
                fullWidth
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                sx={{
                  marginRight: "1rem",
                  width: "30rem",
                  "& label": {
                    color: "white", // Label color
                    fontFamily: "Poppins, sans-serif",
                  },
                  "& label.Mui-focused": {
                    color: "white",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& input": {
                      color: "white",
                      fontFamily: "Poppins, sans-serif",
                    },
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "white",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white",
                    },
                  },
                  flexGrow: 1,
                }}
              />

              <SquareFilledButton
                onClick={handleSubmit}
                aria-label="submit"
                className="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded font-sans"
                disabled={loading}
              >
                <SendIcon />
              </SquareFilledButton>
            </div>
            <div className="flex flex-col items-center pt-2">
              <TextField
                label="Max Secs"
                variant="standard"
                type="number"
                required
                value={maxSeconds}
                onChange={(e) => setMax(e.target.value)}
                size="small"
                sx={{
                  width: "8rem",
                  "& label": {
                    color: "white",
                    fontFamily: "Poppins, sans-serif",
                  },
                  "& label.Mui-focused": {
                    color: "white",
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                    fontFamily: "Poppins, sans-serif",
                  },
                  "& .MuiInput-underline:before": {
                    borderBottom: "1px solid white",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottom: "2px solid white",
                  },
                  "&:hover .MuiInput-underline:before": {
                    borderBottom: "1px solid white",
                  },
                }}
              />
              <p className="w-[40%] mt-2 text-gray-200">
                This process does take a while, so for testing purposes we have
                provided a field to limit your sheet music to the first x
                seconds of the video.
              </p>
            </div>
          </form>
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
              <Typography variant="h6" color="white">
                <div className="flex flex-col">
                  <l-ring
                    size="40"
                    stroke="5"
                    bg-opacity="0"
                    speed="2"
                    color="black"
                  ></l-ring>
                  Loading...
                </div>
              </Typography>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Split;