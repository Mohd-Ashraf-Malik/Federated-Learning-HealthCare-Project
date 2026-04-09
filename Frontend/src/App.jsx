import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7w] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/verify' element={<Verify/>} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App