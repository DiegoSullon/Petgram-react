import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'

export const ListCategories = () => {
  const [categories, setCategories] = useState([])
  const [showFixed, setShowFixed] = useState(false)
  useEffect(() => {
    window
      .fetch('https://petgram-server-sullon.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = fixed => (
    <List className={fixed ? 'fixed' : ''}>
      {categories.map(c => (
        <Item key={c.id}>
          <Category {...c} />
        </Item>
      ))}
    </List>
  )
  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}
