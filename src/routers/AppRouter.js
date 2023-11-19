import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header, Footer } from '../components'
import { Home, Job } from '../views'

export default function AppRouter () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} exact></Route>
        <Route path='/job' element={<Job />} exact></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
