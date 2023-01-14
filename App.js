import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import Start from './Pages/Start';

export default function App() {
  const [currentPage, goToPage] = useState(0)
  const pages = [<Start goToPage={goToPage}/>]
  return (
    <>
      {pages[currentPage]}
      <StatusBar style="auto" />
    </>
  );
}
