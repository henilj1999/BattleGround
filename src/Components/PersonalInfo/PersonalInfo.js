import React,{Component} from 'react'
import Repos from './Repos'

class PersonalInfo extends Component{
    constructor(props){
        super(props);
        this.state={
            location:"",
            email:"",
            name:"",
            username:"",
            img:'',
            followers:0,
            following:0,
            noOfRepos:0,
            score:0,
            repos:[],
            loading:true
        }
    }
    componentDidMount(){
    const url="https://api.github.com/users/"+this.props.user;
      fetch(url)
      .then((response)=>response.json())
      .then((data)=>{
            this.setState({
                username:this.props.user,
                name:data.name,
                email:data.email,
                location:data.location,
                img:data.avatar_url,
                followers:data.followers,
                following:data.following,
                noOfRepos:data.public_repos,
                score:117*15*data.followers + 13*17*data.public_repos
            })
      })
        const url2="https://api.github.com/users/"+this.props.user+"/repos";
        fetch(url2)
        .then(response=>response.json())
        .then(data=>{
            var temp=[];
            data.forEach((repo)=>{
                temp.push(repo.name);
            })
            if(temp.length>10)
                temp.length=10;
            this.setState({repos:temp})
        })
        this.setState({loading:false})
    }
    render(){
        console.log(this.state.repos)
        if(this.state.loading === true)
        {
            console.log("loading")
            return(
                <div>Loading</div>
            )
        }
        else {return (
            <div className="container text-left" style = {style}>
                <div className="row">
                    <div className="col-lg-6">
                        <img src={this.state.img} alt="..." style={{width:"100%",height:"100%"}}></img><br />
                    </div>
                    <div className="col-lg-1">
                    </div>
                    <div className="col-lg-5" style = {style2}>
                    {this.state.name === null ? "" : "Name: "+this.state.name}
                    {this.state.name===null ? <span></span> : <br /> }
                    {this.state.email === null ? "" : "Email: "+this.state.email}
                    {this.state.email===null ? <span></span> : <br /> }
                    {"Username: " + this.state.username}<br />
                    {this.state.location === null ? "" : "Location: "+this.state.location}
                    {this.state.location===null ? <span></span> : <br /> }
                    {"Followers: "+this.state.followers}<br />
                    {"Following: "+this.state.following}<br />
                    {"Number Of Repos: "+this.state.noOfRepos}<br />
                    {"Your Score: "+this.state.score}<br />
                    <br />
                    {this.state.repos.length>0?"Some of the projects by "+this.state.username : <div></div>}
                    <br />
                    <Repos repos={this.state.repos} username={this.props.user}/><br />
                    <button style={styles} type="button" className="btn btn-lg btn-light"><a style={linkStyle} href={"https://github.com/"+this.state.username}>GitHub Page</a></button>
                    </div>
                </div>
            </div>
        )
    }}
}

const linkStyle = {
    color:"black"
}

const style={
    
    color:"white",
    margin:"30px auto"
}

const styles={
    height:"40px",
    textAlign: "center",
    margin:"20px 77px",
    padding:"5px 5px",
    borderRadius:"5px"
}

const style2 = {
    marginTop:"20px"
}

export default PersonalInfo;