import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data'

const Achievements = () => {
  return (
    <div className="py-20" id="testimonials">
    <h1 className="heading">
      My <span className="text-purple"> Achievements </span>
    </h1>
    <div className="flex flex-col items-center">
      {/* <div className='h-[vh50] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'> */}
      <InfiniteMovingCards items={testimonials}
      direction='right'
      speed='slow' />
      {/* </div> */}
    </div>
    </div>
  )
}

export default Achievements