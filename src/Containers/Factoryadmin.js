import React, { Component } from 'react';
import Logout from '../Logout/Logout';
import Button from '../Button';
class factoryadmin extends Component {

    render () {
        return (
            <div>
                <Button className="btn btn-danger m-1" onClick={() => {alert('Unauthorized')}} >Visit Factory</Button>
                <Button type="Workshop" onClick={() => this.props.history.push('/Workshop')} >Visit Workshop</Button>
                <Button type="Zone" onClick={() => this.props.history.push('/Zone')} >Visit Zone</Button>
                <Button type="Machine" onClick={() => this.props.history.push('/Machine')} >Visit Machine</Button>
                <Logout/>
            </div>
        );
    }

    }
    
export default factoryadmin;