import React from "react";

const FriendProfile = (props) => {
  return (
    <div>
      <ul>
        <li>
          Name: {props.firstName} {props.lastName}
        </li>
        <li>
          Address:{props.streetName}, {props.addressNumber}, {props.city} ,{" "}
          {props.state}
        </li>
        <li>Country: {props.country}</li>
        <li>Email: {props.email}</li>
        <li>Phone number: {props.phoneNumber}</li>
      </ul>
    </div>
  );
};

export default FriendProfile;
