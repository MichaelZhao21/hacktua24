import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { blue } from '@mui/material/colors';

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      
      const result = await signInWithPopup(auth, provider);
      console.log('User signed in:', result.user);
      // Handle successful sign-in here (e.g., redirect to another page)
      navigate('/dashboard');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleEmailPasswordSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isRegistering) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User registered:', userCredential.user);
        navigate('/dashboard');
      } catch (error) {
        console.error('Error registering:', error);
      }
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('User signed in:', userCredential.user);
        navigate('/dashboard');
      } catch (error) {
        console.error('Error signing in:', error);
      }
    }
  };

  return (
    <div>
      <Button>
      <Link to="/" style={{ 
        textDecoration: 'none', 
        color: 'inherit', 
        fontFamily: 'Poppins', 
        fontSize: '20px', 
        fontWeight: 'bold',
      }}>
        Score Snag
      </Link>
    </Button>
      <div className="poppins-bold">

        <div className="flex flex-col items-center justify-center min-h-screen h-screen split-background">
            <div className="bg-white rounded-md py-10 px-5 ">
          <form onSubmit={handleEmailPasswordSubmit} className=" flex flex-col items-center ">
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
            >
              {isRegistering ? 'Register' : 'Login'}
            </Button>
          </form>
          <div className='flex flex-col'>
          <Button onClick={signInWithGoogle} sx={{ mt: 2}}>
            Sign in with Google
          </Button>
          <Button onClick={() => setIsRegistering((prev) => !prev)} sx={{ mt: 2 }}>
            {isRegistering ? 'Have an account? Switch to Login' : 'New User? Register with us'}
          </Button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
