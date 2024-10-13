import { AuthProvider, AppProvider, SignInPage } from "@toolpad/core";
import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";  // Import useNavigate
// preview-start
const providers: AuthProvider[] = [
  { id: "github" as "github", name: "GitHub" },
  { id: "google" as "google", name: "Google" },
  { id: "facebook" as "facebook", name: "Facebook" },
  { id: "twitter" as "twitter", name: "Twitter" },
  { id: "linkedin" as "linkedin", name: "LinkedIn" },
];
import "./Split.css";

export default function Login() {
  const theme = useTheme();
  const navigate = useNavigate();  // Initialize useNavigate

  const signIn: (provider: AuthProvider) => void = async (provider) => {
    const promise = new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(`Sign in with ${provider.id}`);
        resolve();
        if (provider.id === 'github') {  // Check if GitHub is selected
          navigate("/dashboard");  // Redirect to the /dashboard route
        }
      }, 500);
    });
    return promise;
  };

  return (
    <div className="min-h-screen h-screen split-background">
      <div>
        <div className="bg-white">
          <Button>
            <Link to="/" style={{
              textDecoration: 'none', 
              color: 'inherit', 
              fontFamily: 'Poppins', 
              fontSize: '20px', 
              fontWeight: 'bold',
            }}>
              Hack Tua
            </Link>
          </Button>
        </div>
        <div className="font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <AppProvider theme={theme}>
            <SignInPage signIn={signIn} providers={providers} />
          </AppProvider>
        </div>
      </div>
    </div>
  );
}
