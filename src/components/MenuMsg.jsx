import React from 'react'

function MenuMsg() {
  return (
    <div className='menu_msg'>

<svg className='lamp_icon_glow' width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_1_309)">
<circle cx="50.5" cy="50.5" r="16.5" fill="#FCD64A" fill-opacity="0.7"/>
</g>
<defs>
<filter id="filter0_f_1_309" x="0" y="0" width="101" height="101" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="17" result="effect1_foregroundBlur_1_309"/>
</filter>
</defs>
</svg>


<span className='lamp_icon'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.21 6.36C18.17 4.26 16.16 2.71 13.83 2.2C11.39 1.66 8.88997 2.24 6.97997 3.78C5.05997 5.31 3.96997 7.6 3.96997 10.05C3.96997 12.64 5.51997 15.35 7.85997 16.92V17.75C7.84997 18.03 7.83997 18.46 8.17997 18.81C8.52997 19.17 9.04997 19.21 9.45997 19.21H14.59C15.13 19.21 15.54 19.06 15.82 18.78C16.2 18.39 16.19 17.89 16.18 17.62V16.92C19.28 14.83 21.23 10.42 19.21 6.36Z" fill="#FBCB18"/>
<path d="M15.26 22C15.2 22 15.13 21.99 15.07 21.97C13.06 21.4 10.95 21.4 8.93997 21.97C8.56997 22.07 8.17997 21.86 8.07997 21.49C7.96997 21.12 8.18997 20.73 8.55997 20.63C10.82 19.99 13.2 19.99 15.46 20.63C15.83 20.74 16.05 21.12 15.94 21.49C15.84 21.8 15.56 22 15.26 22Z" fill="#FBCB18"/>
</svg>
</span>
<div className='circle'></div>


<div className='msg_box'>

    <p className='title'>Thoughts Time</p>
    <p className='para'>We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
    <input type='text' placeholder='Write a message'/>

</div>



    </div>
  )
}

export default MenuMsg