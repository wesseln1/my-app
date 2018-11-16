import React, { Component } from 'react'
import EmployeeList from "./Employees/employeeList"  // Import EmployeeList component
import LocationList from "./Locations/locationsList"

export default class Kennel extends Component {
    render() {
        return (
            <div>
                <h3>Student Kennels</h3>
                <h4>Nashville North Location</h4>
                <h5>500 Puppy Way</h5>
                <EmployeeList />
                <LocationList/>
            </div>
        );
    }
}
