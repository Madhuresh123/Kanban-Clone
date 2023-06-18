import React from 'react'

function menuProjectsOption(props) {
  return (
    <div className='menu_projects_option'>
      <div className='menu_projects_option_content' style={{display:'flex', alignItems:'center'}}>
    <div className='point' style={{marginRight: '0.5rem', backgroundColor:props.color  }}></div>
    <p style={{marginRight: '1rem', marginLeft:'10px'}}>{props.title}</p>
    </div>
    <div>
    <p style={{fontWeight:'bolder', marginBottom:'5px'}}>...</p>
    </div>
</div>
  )
}

export default menuProjectsOption