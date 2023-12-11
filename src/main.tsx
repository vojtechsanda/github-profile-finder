import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './styles/theme.ts';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes/routes.tsx';

const router = createBrowserRouter(routes, {
  basename: '/inqool-react-interview',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
