import axios from 'axios';
import  React,{Component} from 'react';
import ReactDOM from 'react-dom';  
import BrowserRouter from 'react-router-dom'; 

class Empdet extends Component{

    constructor(props){
        super(props);
        this.state={ employees: [], error:[] };
    }

    componentDidMount() {
        var url = 'http://localhost/atease-backend/details.php'
        axios.get(url)
        .then((response) => {
          this.setState({ employees: response.data.results });
          console.log(this.state.employees)
          .catch(error => this.setState({ error })); 
          //console.log(error);
         })
      }
    
     /* getPosts() {
        axios
          // This is where the data is hosted
          .get("http://localhost/atease-backend/details.php")
          // Once we get a response and store data, let's change the loading state
          .then(request => request.json())
          .then((req) => {
            this.setState({ employees: req.data})
            console.log(this.state.employees);
           })

          // If we catch any errors connecting, let's update accordingly
        .catch(error => this.setState({ error }));  
      }
      // Let's our app know we're ready to render the data
      componentDidMount() {
        this.getPosts();
      }*/

     

    render(){
        const { employees } = this.state;

        return(
            <>
            <h1>Hello Welcome</h1>
            <div>
            <h1>Contact Management</h1>
            <table border='1' width='50%' align="center" >
                <tr>
                    <th>Name</th>
                    <th>Phno</th>
                    <th>City</th>
                    <th>Service</th>     
                </tr>
                {this.props.employees.map((emp)=> { const { name, phno, city, service } = emp;
                return(  
                <tr>
                    <td> Sailab </td>
                    <td>{phno}</td>
                    <td></td>
                    <td></td>
                </tr>
                );
                }
                )}   
    
            </table>
            </div>
            
            
            
            </>
        );


    }
}
export default Empdet;