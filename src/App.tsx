import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { LoginForm } from './components/LoginForm';
import { Dashboard } from './components/Dashboard';
import { StreamView } from './components/StreamView';
import { EmbedView } from './components/EmbedView';

function App() {
  const { user, login, logout, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/stream/:streamId" element={<StreamView />} />
        <Route path="/embed/:streamId" element={<EmbedView />} />
        <Route path="/" element={
          user ? (
            <Dashboard user={user} onLogout={logout} />
          ) : (
            <LoginForm onLogin={login} />
          )
        } />
      </Routes>
    </Router>
  );
}

export default App;