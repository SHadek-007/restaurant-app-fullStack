
import { AnimatePresence } from 'framer-motion';
import { Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header';

function App() {
  return (
    <AnimatePresence>
      <div>
        <Header></Header>
        <Routes>

        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default App;
