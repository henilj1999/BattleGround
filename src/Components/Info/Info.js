import React from 'react'
import { Link } from 'react-router-dom'

const Info = (props) =>{
    const {name,followers,following,noOfRepos,img,score} = props.user
    return(
        <div style={style2}>
            <div className="card" style={{width: '18rem',textAlign:"center",margin:"10px auto"}}>
            <img src={img} className="card-img-top" alt="..." style={{width:"100%",height:"100%"}} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    {"Followers: "}<span style={boldStyle}>{followers}</span><br />
                    {"Following: "}<span style={boldStyle}>{following}</span><br />
                    {"Number Of Repos: "}<span style={boldStyle}>{noOfRepos}</span><br />
                    {"Your Score: "}<span style={boldStyle}>{score}</span><br />
                    <Link to={'/'+name}><button className="btn btn-dark" style={{color:"white",marginTop:"5px"}}>More Info</button></Link>
                </p>
            </div>
            </div>
        </div>
    )
}

const style2 ={
    margin:"0 auto"
}

const boldStyle = {
    fontWeight:"500"
}

export default Info;