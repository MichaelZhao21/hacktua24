import * as React from 'react';
import { AuthProvider, AppProvider, SignInPage } from '@toolpad/core';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
// preview-start
const providers: AuthProvider[] = [
  { id: 'github' as 'github', name: 'GitHub' },
  { id: 'google' as 'google', name: 'Google' },
  { id: 'facebook' as 'facebook', name: 'Facebook' },
  { id: 'twitter' as 'twitter', name: 'Twitter' },
  { id: 'linkedin' as 'linkedin', name: 'LinkedIn' },
];
// preview-end

const signIn: (provider: AuthProvider) => void = async (provider) => {
  const promise = new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log(`Sign in with ${provider.id}`);
      resolve();
    }, 500);
  });
  return promise;
};

export default function Login() {
  const theme = useTheme();
  return (
    <div>
    <Button>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Hack Tua</Link>
    </Button>
    <AppProvider theme={theme}>
      <SignInPage signIn={signIn} providers={providers} />
    </AppProvider>
    </div>
  );
}