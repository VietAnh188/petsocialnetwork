import { useEffect, useContext } from 'react';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { Routes, Route, useNavigate } from 'react-router-dom';
import QNA from './pages/qna/QNA';
import { useSelector } from 'react-redux';
import { authSelector } from './redux/features/auth/authSlice';
import Profile from './pages/profile/Profile';
import SearchResult from './pages/searchResult/SearchResult';
import LogoutDialog from './components/logoutDialog/LogoutDialog';
import { LogoutContext } from './context/logoutContext/logoutContext';

function App() {
    const { user } = useSelector(authSelector);
    const { isMount } = useContext(LogoutContext);

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else {
            navigate('/');
        }
    }, [user?._id]);

    return (
        <>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/qna" element={<QNA />} />
                    <Route path="/profile/:username" element={<Profile />} />
                    <Route path="/search/" element={<SearchResult />} />
                </Routes>
            </div>
            {isMount && <LogoutDialog />}
        </>
    );
}

export default App;
