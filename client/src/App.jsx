import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from './Components/Chat';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;