import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'

export const ListCategories = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    window.fetch('https://petgram-server-sullon.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, [])
  return (
    <List>
      {categories.map(c => (
        <Item key={c.id}>
          <Category {...c} />
        </Item>
      ))}
    </List>
  )
}
