import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Chat from './pages/Chat';


function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/home" component={<Home />} />
                <Route path="/login" component={<Login />} />
                <Route path="/signup" component={<Signup />} />
                <Route path="/chat" component={<Chat />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;