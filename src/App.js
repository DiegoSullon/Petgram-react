import React from 'react'
import { ListCategories } from './components/ListCategories'
import { ListPhotoCards } from './components/ListPhotoCards'
import Logo from './components/Logo'
import {GlobalStyle}from './GlobalStyle'
export const App = ()=>{
  return(
    <>
    <Logo/>
    <GlobalStyle/>
    <ListCategories />
    <ListPhotoCards/>
    </>
  )
}

