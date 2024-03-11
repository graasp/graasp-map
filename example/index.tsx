import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { QueryClientProvider, queryClient } from './queryClient';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div style={{ width: '100vw', height: '100vh', margin: 0 }}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </div>
  </StrictMode>,
);
