import React from 'react'

export default function Submit(props) {
  console.log(props);
  return (
    <div>
    <h1>Submitted form</h1>
      <ul>
        <h2>First Name : {props.fName}</h2>
        <h2>Last Name : {props.lName}</h2>
        <h2>E-mail : {props.email}</h2>
        <h2>Phone No:{props.phoneNo}</h2>
        <h2>Passport :{props.passport}</h2>
        <h2>Start date:{props.startDate}</h2>
        <h2>End Date:{props.endDate}</h2>
        <h2>Destination :{props.destination}</h2>
        <h2>Reason For Travel:{props.reasonForTravel}</h2>
      </ul>
    </div>
  )
}