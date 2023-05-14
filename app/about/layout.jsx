import React from 'react'
import Image from 'next/image'

const AboutLayout = ({ children }) => {
  return (
    <div>
        <Image src="/vercel.svg" width={150} height={150} alt="" />
        {children}
    </div>
  )
}

export default AboutLayout