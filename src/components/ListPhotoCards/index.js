import React from 'react'
import { PhotoCard } from '../PhotoCard'

export const ListPhotoCards = () => {
  return (
    <ul>
      {
          [1, 2, 3, 4, 5].map((item) => <PhotoCard key={item} />)
        }
    </ul>
  )
}
