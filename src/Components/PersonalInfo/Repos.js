import React from 'react'

const Info = (props) =>{
    const repoList=props.repos.map((repo,id)=>{
        return(
        <div className="row" key={id}>
            <div className="col-lg-6">{id+1}-{repo} </div>
            <div className="col-lg-6"><button style={styles} type="button" className="btn btn-sm btn-light"><a style={linkStyle} href={"https://github.com/"+props.username+"/"+repo}>Code</a></button></div>
            <br />
        </div>
        )
    })
    return(
        <div>{repoList}</div>
    )
}


const styles={
    height:"25px",
    textAlign: "center",
    margin:"0 auto",
    padding:"0 5px",
    borderRadius:"5px"
}

const linkStyle = {
    color:"black"
}

export default Info;