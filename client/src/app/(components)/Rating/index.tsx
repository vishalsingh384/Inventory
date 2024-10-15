import { Star } from 'lucide-react'
import React from 'react'

type Rating = {
    rating:number
}

const Rating = ({rating}: Rating) => {
  return [1,2,3,4,5].map((index)=>(
    <Star key={index} color={index<=rating?"#FFC107":"#E4E5E9"} className='w-4 hh-4'/>
  ))
}

export default Rating