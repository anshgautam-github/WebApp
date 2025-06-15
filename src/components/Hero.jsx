import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
        
        {/**This below div is for video  */}
        <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
            <div>
                <div className='mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>
                    <div> {/**Mini clickable video player that allows us to change the bg */}
                        MiniVideoPlayer
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero