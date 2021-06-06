import React from 'react'
import { ListCategories } from './components/ListCategories'
import {PhotoCard}from './components/PhotoCard'
import {GlobalStyle}from './GlobalStyle'
export const App = ()=>{
  return(
    <>
    <GlobalStyle/>
    <ListCategories />
    <PhotoCard/>
    </>
  )
}

