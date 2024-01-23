import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

//import styles from './style/application.scss';

const root = createRoot(document.getElementById('app')).render(<App />);