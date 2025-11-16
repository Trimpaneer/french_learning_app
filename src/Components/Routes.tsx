import { Routes, Route } from 'react-router-dom';
import Home from '../Page/Homes.tsx';
import Exercises from '../Page/Exercises-Menu.tsx';
import About from '../Page/About.tsx';
import Exercise1 from '../Page/Exercises/Exercise-1-Pronoms-Sujets.tsx';
import Exercise2 from '../Page/Exercises/Exercise-2-Etre.tsx'
import Tutorials from '../Page/Tutorials-Menu.tsx';
import SubjectPronouns from '../Page/Tutorials/Tuto-1-Subject-Pronouns.tsx';
import Etre1 from '../Page/Tutorials/Tuto-2-Etre.tsx';
import AlphabetAndPronunciation from '../Page/Tutorials/Tuto-0-Alphabet-and-Pronnunciation.tsx';
import Login from '../Page/Login.tsx';
import Register from '../Page/Register.tsx';
import Profile from '../Page/Profile.tsx';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Tutorials Routes */}
            <Route path="/tutorials-menu" element={<Tutorials />} />
            <Route path="/tutorials/tuto-0-alphabet-and-pronunciation" element={<AlphabetAndPronunciation />} />
            <Route path="/tutorials/tuto-1-subject-pronouns" element={<SubjectPronouns />} />
            <Route path="/tutorials/tuto-2-etre" element={<Etre1 />} />
            
            {/* Exercises Routes */}
            <Route path="/exercises-menu" element={<Exercises />} />
            <Route path="/exercises/exercise-1-pronoms-sujets" element={<Exercise1 />} />
            <Route path="/exercises/exercise-2-etre" element={<Exercise2 />} />
            
            {/* Other Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            
            {/* 404 Page - Add this if you have a 404 component */}
            {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
    )
} 

export default Router;