import axios from 'axios';
import  React,{Component} from 'react';

import img1 from './asset/35701455-construction-worker-in-new-house-.jpg';
import img2 from './asset/Discovering-Plumbing-Leaks-in-Your-Southern-California-Home-is-Tricky-750x420 (1).jpg'
import img3 from './asset/Fotolia_170179753_Subscription_Monthly_M.jpg';
import img4 from './asset/AzcygWMQuzHjqD9o3JoWzk.jpg';
import img5 from './asset/download (1).jpg';
import img6 from './asset/download.jpg';
import img7 from './asset/fridge-repair.jpg';
import img8 from './asset/images.jpg'

import Service from './Service';

class AllServices extends Component{
    render(){
        return(
            <>
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Service imgsrc={img1} title="Carpenter" url="./empdetails"/>
                    </div>
                    <div className="col-md-4">
                        <Service imgsrc={img2} title="Plumber"/>
                    </div>
                    <div className="col-md-4">
                        <Service imgsrc={img3} title="Electrician" />
                    </div>
                   
                   
                </div>
            </div>
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Service imgsrc={img4} title="Grocery Delivery"/>
                    </div>
                    <div className="col-md-4">
                        <Service imgsrc={img5} title="A/C Repair"/>
                    </div>
                    <div className="col-md-4">
                        <Service imgsrc={img6} title="Laundry Service"/>
                    </div>
                   
                   
                </div>
            </div>

            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-6">
                        <Service imgsrc={img7} title="Refrigerator Repair"/>
                    </div>
                    <div className="col-md-6">
                        <Service imgsrc={img8} title="House Cleaning"/>
                    </div>
                    
                   
                   
                </div>
            </div>
            </>
        );
    }
}
export default AllServices;