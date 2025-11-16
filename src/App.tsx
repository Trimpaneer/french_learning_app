import './App.css'
import Router from './Components/Routes.tsx';
import NavBar from './Components/Navbar.tsx';
import Footer from './Components/Footer.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-white text-slate-800">
        <NavBar/>
        <main className="pt-16">
          <Router/>
        </main>
        <Footer/>
      </div>
    </AuthProvider>
  )
}

export default App
