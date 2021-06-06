import React from 'react'
import { ListCategories } from './components/ListCategories'
import { ListPhotoCards } from './components/ListPhotoCards'
import {GlobalStyle}from './GlobalStyle'
export const App = ()=>{
  return(
    <>
    <GlobalStyle/>
    <ListCategories />
    <ListPhotoCards/>
    </>
  )
}

