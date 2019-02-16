import React from 'react'

const DisplayResult = ({score1,score2,user1,user2}) =>{
    if(score1 === score2)
        return(<div style={style} className="alert alert-light" role="alert">The battleground ends as a tie</div>)
    else if (score1 > score2) 
        return (<div style={style} className="alert alert-light" role="alert">{user1 + " beats "+user2+" in this battleground"}</div>)
    else return (<div style={style} className="alert alert-light" role="alert">{user2 + " beats "+user1+" in this battleground"}</div>)
}

const style={
    margin:"10px auto",
    width:"60%"
}

export default DisplayResult;

