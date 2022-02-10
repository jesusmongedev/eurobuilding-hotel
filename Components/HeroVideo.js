import React from 'react'

const HeroVideo = () => {
  return (
    <div>
      <video autoPlay loop muted className="mx-auto">
        <source src="https://i.imgur.com/vI2MKJJ.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default HeroVideo
