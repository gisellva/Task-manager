import React  from 'react';
import './App.css';
import AuthProvaider from './auth/AuthProvaider';
import AppRouter from './router/approuter';

function App() {
  return (
    <div className="App">
      <AuthProvaider>
       <AppRouter/>
      </AuthProvaider>

   

    </div>

  );
   
}

export default App;
