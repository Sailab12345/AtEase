import axios from 'axios';
import  React,{Component} from 'react';
import './custlogin.css';



class LoginBox extends React.Component{
   
        constructor(props){
            super(props);
            this.state={name:"", phno:"",errors:[]};
        }

        onNameChange(e){
            this.setState({name: e.target.value});
            this.clearValidationErr("name");
        }

        onPhnoChange(e){
            this.setState({phno: e.target.value});
            this.clearValidationErr("phno");
        }

        submitlogin(e){
            e.preventDefault();
            let formData= new FormData();
            
            formData.append("name",this.state.name);
            formData.append("phno",this.state.phno);
    
            var headers = {
                'Content-Type': 'application/json;charset=UTF-8',
                  "Access-Control-Allow-Origin": "*"
              }
          axios.post("http://localhost/atease-backend/custlogin.php", formData, headers
          ).then(res=>
          {
           alert(res.data);
          })
          .catch(err=>
          {
              console.log(err.data);
          }    
          );
      
           if(this.state.name===""){
               this.showValidationErr("name", "Name can't be empty");
           }
            
           if(this.state.phno===""){
               this.showValidationErr("phno", "Phone number is mandatory");
           }

           if((this.state.phno.length)>10){
            this.showValidationErr("phno", "Invalid number");
           }
           if(this.state.name!="" && this.state.phno!=""){
            this.props.history.push('/AllServices');
           }
           
           
    
        }
        showValidationErr(elm,msg){
            this.setState((prevState) => ({errors:[...prevState.errors,{elm,msg}]}));
        }
      
        clearValidationErr(elm){
            this.setState((prevState) => {
                let newArr=[];
                for(let err of prevState.errors){
                    if(elm !== err.elm){
                        newArr.push(err);
                    }
                }
                return {errors:newArr};
            });
        }
      
        render(){
            let nameerr=null,phnoerr=null;
            for(let err of this.state.errors){
                if(err.elm==="name"){
                    nameerr=err.msg;
                }
    
                if(err.elm==="phno"){
                    phnoerr=err.msg;
                }
            }
            return(
            <>
            <div className="root-container">
            <div className="inner-container">
            <div className="header">
                Login
            </div>
                <div className="box">
                    <div className="input-group">
                        <label className="login-label" htmlFor="name">Name</label>
                        <input type="text" name="name" className="login-input" onChange={this.onNameChange.bind(this)} placeholder="Enter your Name"/>
                        <small className="danger-error">{nameerr? nameerr: ""}</small>
                    
                    </div>
                    <div className="input-group">
                        <label className="login-label" htmlFor="phno">Phone Number</label>
                        <input type="number" name="phno" className="login-input" onChange={this.onPhnoChange.bind(this)} placeholder="Enter 10 digit mobile number"/>
                        <small className="danger-error">{phnoerr? phnoerr: ""}</small>
                        
                    </div>

                    <button type="button" className="login-btn" onClick={this.submitlogin.bind(this)}>Login</button>
                </div>
            </div>
            </div>
            </>
            );
        }
    
}


export default LoginBox;
