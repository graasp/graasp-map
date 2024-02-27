import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { QueryClientProvider, queryClient } from './queryClient';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div style={{ width: '90vw', height: '90vh' }}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </div>
  </StrictMode>,
);
