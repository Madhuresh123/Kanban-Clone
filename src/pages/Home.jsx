import React from 'react'
import Header from '../components/Header'
import Menu from '../components/Menu'
import ProjectSection from '../components/ProjectSection'


function Home() {
  return (
    <div style={{display:'flex'}}> 
    <div style={{flex:'1'}}>
    <Menu/>
    </div>  


    <div style={{flex:'9'}}>
    <Header/>
    <ProjectSection/>
    </div>   

    </div>
  )
}

export default Home