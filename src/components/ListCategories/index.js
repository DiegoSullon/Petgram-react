import React from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'
import { categories } from '../../../api/db.json'
export const ListCategories = () => {
  return (
    <List>
      {
        categories.map((c) =>
          <Item key={c.id}><Category {...c} /></Item>
        )
      }
    </List>
  )
}
