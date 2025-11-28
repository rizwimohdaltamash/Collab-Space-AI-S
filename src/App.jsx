import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load all page components for code splitting
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Boards = lazy(() => import('./pages/Boards'));
const Board = lazy(() => import('./pages/Board'));

function App() {
  return (
    <Router>
      <AuthProvider>
        <Suspense fallback={<LoadingSpinner text="Loading page..." />}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/boards"
              element={
                <PrivateRoute>
                  <Boards />
                </PrivateRoute>
              }
            />
            <Route
              path="/board/:boardId"
              element={
                <PrivateRoute>
                  <Board />
                </PrivateRoute>
              }
            />
            <Route path="/" element={<Navigate to="/boards" />} />
          </Routes>
        </Suspense>
      </AuthProvider>
    </Router>
  )
}

export default App

