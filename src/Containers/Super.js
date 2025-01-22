import React, { Component } from 'react';
/* import Factory from '../Components/Factory/Factory';
import Machine from '../Components/Machine/Machine';
import Zone from '../Components/Zone/Zone';
import Workshop from '../Components/Workshop/Workshop'; */
import Logout from '../Logout/Logout';
import Button from '../Button';
class superUser extends Component {
    render () {
        return (
            <div style={{alignContent: 'center'}} >
                <Button type="factory" onClick={() => this.props.history.push('/Factory')} >Visit Factory</Button>
                <Button type="Workshop" onClick={() => this.props.history.push('/Workshop')} >Visit Workshop</Button>
                <Button type="Zone" onClick={() => this.props.history.push('/Zone')} >Visit Zone</Button>
                <Button type="Machine" onClick={() => this.props.history.push('/Machine')} >Visit Machine</Button>
                <Logout/>
            </div>
            
    
        )
    }

    }
    
export default superUser;