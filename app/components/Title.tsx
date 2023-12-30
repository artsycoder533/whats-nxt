import React from 'react'
import { HiArrowRight } from 'react-icons/hi2'

type Props = {
    text: string;
    alt?: boolean;
}
const Title = ({text, alt}: Props) => {
  return (
    // <h2 className="text-3xl pb-10 flex items-center gap-2 font-light"><HiArrowRight className="text-[#B76E79]" />{text}</h2>
    <h2 className={`text-3xl pb-10 flex items-center gap-2 font-light ${alt ? 'text-white' : null} `}>
      <HiArrowRight className={`${alt ? 'text-black' : 'text-[#B76E79]'}`} />
      {text}
    </h2>
  )
}

export default Title