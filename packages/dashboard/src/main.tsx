import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/app';

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('No root element found');

const root = createRoot(rootEl);
root.render(<App />);
