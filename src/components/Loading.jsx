import React from 'react'
import { Loader } from '@mantine/core'

function Loading() {
  return (
    <div className=' flex justify-center mt-60'>
        <Loader color="grape" variant="bars" />
    </div>
  )
}

export default Loading