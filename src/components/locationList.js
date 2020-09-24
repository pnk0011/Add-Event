import React from "react";
import { Link, useHistory } from "react-router-dom";
import { del } from "idb-keyval";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./styles/homeComponent.css";
import { MDBBtn } from "mdbreact";

const LocationList = (props) => {
  const handleDelete = (key) => {
    del(key);
    window.location.reload(true);
  };
  if (props.events.length > 0) {
    return (
      <table className="table table-sm border">
        <thead>
          <tr>
            <th scope="col">Location Name </th>
            <th scope="col">Address</th>
            <th scope="col">Phone No.</th>
            <th> </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.events.map((item, index) => (
            <tr key={index}>
              <td scope="row">{item.locationName}</td>
              <td>{item.addressLineOne}</td>
              <td>{item.phoneNumber}</td>
              <td>
                <Link
                  to={{
                    pathname: "add/",
                    locationName: { key: item.locationName },
                  }}
                  className="link"
                >
                  <MDBBtn size="sm" color="blue-grey">
                    Edit
                  </MDBBtn>
                </Link>
              </td>
              <td>
                <Link
                  to={{
                    pathname: "/",
                    locationName: { key: item.locationName },
                  }}
                  className="link"
                >
                  <MDBBtn
                    size="sm"
                    color="danger"
                    onClick={() => handleDelete(item.locationName)}
                  >
                    Delete
                  </MDBBtn>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    return (
      <div>
        <div className="NoLocation">
          <h3>Kindly Add Your Location First!!</h3>
        </div>
        <div className="NoLocation">
          <p>Some of the validations are missing !! </p>
          <br />
          <p>working on the same, will soon push the changes. </p>
        </div>
      </div>
    );
  }
};

export default LocationList;
