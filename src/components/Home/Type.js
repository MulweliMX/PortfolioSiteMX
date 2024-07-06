import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Software Developer',
          'Data Analyst',
          'Full Stack Developer',
          'Open Source Contributor',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type