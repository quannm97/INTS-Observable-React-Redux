import React from 'react'
import pagesData from './pagesData'
import { Route, Routes, useParams } from 'react-router-dom'


const Router = () => {
  const dataRounter = pagesData.map(({title, element, path}) => {
    return <Route key={title} path={path} element={element}/>
    
  })
  return <Routes>{dataRounter}</Routes>
}

export default Router