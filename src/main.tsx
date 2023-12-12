import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './styles/theme.ts';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { routes } from './routes/routes.tsx';
import { MotionConfig } from 'framer-motion';

const router = createHashRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <MotionConfig transition={{ duration: 0.5 }}>
        <CssBaseline />
        <RouterProvider router={router} />
      </MotionConfig>
    </ThemeProvider>
  </StrictMode>,
);
