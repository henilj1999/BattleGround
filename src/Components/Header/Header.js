import React from 'react'

const Header = () =>{
    return(
        <div>
            <h1 style={header}>BattleGround</h1>
            <h3 style = {h3style} >The actual battleground for GitHub users</h3>
        </div>
    )
}

const header = {
    marginTop:"10px",
    fontSize:"60px",
    color:"white"
}

const h3style ={
    fontSize:"20px",
    color:"white"
}

export default Header