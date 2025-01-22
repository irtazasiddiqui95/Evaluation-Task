import React, { Component } from 'react';
/* import Factory from '../Components/Factory/Factory';
import Machine from '../Components/Machine/Machine';
import Zone from '../Components/Zone/Zone';
import Workshop from '../Components/Workshop/Workshop'; */
import Logout from '../Logout/Logout';
import Button from '../Button';
class employee extends Component {

    render () {
        return (
             <div>
                <Button type = "Factory" onClick={() => {alert('Unauthorized')}} >Visit Factory</Button>
                <Button className="Workshop" onClick={() => {alert('Unauthorized')}} >Visit Workshop</Button>
                <Button type="Zone" onClick={() => this.props.history.push('/Zone')} >Visit Zone</Button>
                <Button type="Machine" onClick={() => this.props.history.push('/Machine')} >Visit Machine</Button>
                <Logout/>
            </div>
            
    
        )
    }

    }
    
export default employee;