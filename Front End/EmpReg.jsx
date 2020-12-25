import axios from 'axios';
import  React,{Component} from 'react';
import './custlogin.css';
//import DropdownButton from 'react-bootstrap/DropdownButton';
//import Dropdown from 'react-bootstrap/Dropdown';


class EmpReg extends React.Component{
    constructor(props){
        super(props);
        this.state={city:"Gangtok",service:"Carpenter", name :"",phno : "",errors: []};

    }
    onCityChange(e){
        this.setState({city: e.target.value});
        this.clearValidationErr("city");
    }

    onServiceChange(e){
        this.setState({service: e.target.value});
        this.clearValidationErr("service");
    }
    

    onNameChange(e){
        this.setState({name: e.target.value});
        this.clearValidationErr("name");
    }

    onPhnoChange(e){
        this.setState({phno: e.target.value});
        this.clearValidationErr("phno");
    }
    submitregister(e){
         
        e.preventDefault();
        let formData= new FormData();
        formData.append("name",this.state.name);
        formData.append("phno",this.state.phno);
        formData.append("city",this.state.city);
        formData.append("service",this.state.service);
        

        var headers = {
            'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*"
          }
      axios.post("http://localhost/atease-backend/empreg.php", formData, headers
      ).then(res=>
      {
       alert(res.data);
      })
      .catch(err=>
      {
          console.log(err.data);
      }    
      );
  
       if(this.state.city===""){
           this.showValidationErr("city", "Please select a City");
       }
        
      
       if(this.state.name===""){
          this.showValidationErr("name", "Name can't be empty");
       }

       if(this.state.phno===""){
          this.showValidationErr("phno", "Phone Number can't be empty");
      }

      if(this.state.service==="")
      {
        this.showValidationErr("service", "Please select a valid service");
    }
     this.refs.nm.value="";
     this.refs.ph.value="";
     
      
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

        let cityerr=null,nameerr=null,phnoerr=null,serviceerr=null;

        for(let err of this.state.errors){
            if(err.elm==="city"){
                cityerr=err.msg;
            }

            

            if(err.elm==="name"){
                nameerr=err.msg;
            }

            if(err.elm==="phno"){
                phnoerr=err.msg;
            }

            if(err.elm==="service"){
                serviceerr=err.msg;
            }
            

        }

        return(
            <>
            <div className="root-container">
                
                <div className="inner-container">
                    <div className="header">
                        Register
                    </div>
                    <form>
                    <div className="box">
                <div className="input-group">
                    <label className="login-label" htmlFor="name">Name</label>
                    <input type="text" ref="nm" name="name" className="login-input" onChange={this.onNameChange.bind(this)} placeholder="Enter your Name"/>
                    <small className="danger-error">{nameerr? nameerr: ""}</small> 
                </div>
                <div className="input-group">
                    <label className="login-label" htmlFor="phno">Phone Number</label>
                    <input type="text" name="phno" ref="ph" className="login-input" onChange={this.onPhnoChange.bind(this)} placeholder="Enter your Phone Number"/>
                    <small className="danger-error">{phnoerr? phnoerr: ""}</small>

                </div>
                <div className="input-group">
                    <label className="login-label" htmlFor="city">City</label>
                    <select className="login-input" value={this.state.city} onChange={this.onCityChange.bind(this)} >            
                        <option value="Gangtok" >Gangtok</option>
                        <option value="Rangpo">Rangpo</option>
                    </select>
                    <small className="danger-error">{cityerr? cityerr: ""}</small>

                </div>
                <div className="input-group">
                    <label className="login-label" htmlFor="service">Select your service</label>
                    <select  className="login-input" value={this.state.service} onChange={this.onServiceChange.bind(this)} >            
                        <option value="Carpenter">Carpenter</option>
                        <option value="Plumber">Plumber</option>
                        <option value="Electrician">Electrician</option>
                        <option value="Grocery Delivery">Grocery Delivery</option>
                        <option value="House Cleaning">House Cleaning</option>
                        <option value="Laundry Service">Laundry Service</option>
                        <option value="A/C Repair">A/C Repair</option>
                        <option value="Refrigerator Repair">Refrigerator Repair</option>
                        
                    </select>
                    <small className="danger-error">{serviceerr? serviceerr: ""}</small>
                    
                </div>
               

                <button type="button" className="login-btn" onClick={this.submitregister.bind(this)}>Register</button> 
                    </div>
                </form>
                </div>
            </div>


        
        </>



        );
     }
}
export default EmpReg;