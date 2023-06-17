import React from 'react'
import '../styles/header.css'

function Header() {
  return (
    <>
    <div className='header'>
    <div className='header_right'>
   
      <div className='searchBar'>
      <svg  className='searchIcon' style={{color:'red'}} width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3417 19.25C16.1512 19.25 20.0501 15.3512 20.0501 10.5417C20.0501 5.7322 16.1512 1.83334 11.3417 1.83334C6.53225 1.83334 2.63339 5.7322 2.63339 10.5417C2.63339 15.3512 6.53225 19.25 11.3417 19.25Z" stroke="#787486" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.9667 20.1667L19.1334 18.3333" stroke="#787486" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
        <input type='text' placeholder='Search for anything...' />
      </div>


    <div className='header_notification'>
    <svg style={{marginRight:'1rem'}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2V5" stroke="#787486" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 2V5" stroke="#787486" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 9.09H20.5" stroke="#787486" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#787486" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9955 13.7H12.0045" stroke="#787486" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.29431 13.7H8.30329" stroke="#787486" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.29431 16.7H8.30329" stroke="#787486" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

<svg  style={{marginRight:'1rem'}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 18.4301H13L8.54999 21.39C7.88999 21.83 7 21.3601 7 20.5601V18.4301C4 18.4301 2 16.4301 2 13.4301V7.42999C2 4.42999 4 2.42999 7 2.42999H17C20 2.42999 22 4.42999 22 7.42999V13.4301C22 16.4301 20 18.4301 17 18.4301Z" stroke="#787486" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 11.36V11.15C12 10.47 12.42 10.11 12.84 9.82001C13.25 9.54001 13.66 9.18002 13.66 8.52002C13.66 7.60002 12.92 6.85999 12 6.85999C11.08 6.85999 10.34 7.60002 10.34 8.52002" stroke="#787486" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9955 13.75H12.0045" stroke="#787486" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.02 2.91C8.71 2.91 6.02 5.6 6.02 8.91V11.8C6.02 12.41 5.76 13.34 5.45 13.86L4.3 15.77C3.59 16.95 4.08 18.26 5.38 18.7C9.69 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91C18.02 5.61 15.32 2.91 12.02 2.91Z" stroke="#787486" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
<path d="M13.87 3.2C13.56 3.11 13.24 3.04 12.91 3C11.95 2.88 11.03 2.95 10.17 3.2C10.46 2.46 11.18 1.94 12.02 1.94C12.86 1.94 13.58 2.46 13.87 3.2Z" stroke="#787486" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.02 19.06C15.02 20.71 13.67 22.06 12.02 22.06C11.2 22.06 10.44 21.72 9.89999 21.18C9.35999 20.64 9.01999 19.88 9.01999 19.06" stroke="#787486" strokeWidth="1.5" strokeMiterlimit="10"/>
<circle cx="18" cy="4" r="3" fill="#D8727D"/>
</svg>


    </div>
    <div className='header_profile'>

      <div style={{marginRight:'1rem'}}>
      <p> Anima Agrawal</p>
      <p> U.P, India</p>
      </div>
      <div className='profile_pic' style={{marginRight:'1rem'}}><img src='profile1.png' alt='' /></div>
      <svg style={{marginRight:'1rem'}} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.00002 12.6C8.47502 12.6 7.95002 12.3975 7.55252 12L2.66251 7.11001C2.44501 6.89251 2.44501 6.53251 2.66251 6.31501C2.88001 6.09751 3.24001 6.09751 3.45751 6.31501L8.34752 11.205C8.70752 11.565 9.29252 11.565 9.65252 11.205L14.5425 6.31501C14.76 6.09751 15.12 6.09751 15.3375 6.31501C15.555 6.53251 15.555 6.89251 15.3375 7.11001L10.4475 12C10.05 12.3975 9.52502 12.6 9.00002 12.6Z" fill="#292D32"/>
</svg>

    </div>
    </div>
    </div>

    </>
    
  )
}
export default Header