import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import Start from './Pages/Start';
import Login from './Pages/Login'

export default function App() {
  const [currentPage, goToPage] = useState(1)
  const pages = [<Start goToPage={goToPage}/>, <Login goToPage={goToPage}/>]
  return (
    <>
      {pages[currentPage]}
      <StatusBar style="auto" />
    </>
  );
}
