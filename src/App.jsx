import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { render } from 'react-dom'
import Sidebar from './component/Sidebar'
import Feed from './component/Feed'
import Widgets from './component/Widgets'

export default function App() {


      return (
        <>
        <div className='app'>
         <Sidebar/>
         <Feed/>
         <Widgets />
        </div>
        </>
      );
}


