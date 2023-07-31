import Image from 'next/image'
import React from 'react'

const Avatar = () => {
    return (
        <Image src={"/images/placeholder.jpg"} className='rounded-full' width={30} height={30} alt='avatar' />
    )
}

export default Avatar