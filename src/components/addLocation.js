import React from "react";
import { set } from "idb-keyval";

import TimePicker from "react-time-picker";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBBtn,
  MDBModal,
  MDBModalBody,
} from "mdbreact";
import { Link } from "react-router-dom";
import { get } from "idb-keyval";
import "./styles/homeComponent.css";
import "./styles/mainComponent.css";

export class AddLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationName: "",
      addressLineOne: "",
      email: "",
      suiteNo: "",
      addressLineTwo: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
      timeZone: "",
      facilityTime: {
        Sun: {
          checked: false,
          from: "",
          to: "",
        },
        Mon: {
          checked: false,
          from: "",
          to: "",
        },
        Tue: {
          checked: false,
          from: "",
          to: "",
        },
        Wed: {
          checked: false,
          from: "",
          to: "",
        },
        Thr: {
          checked: false,
          from: "",
          to: "",
        },
        Fri: {
          checked: false,
          from: "",
          to: "",
        },
        Sat: {
          checked: false,
          from: "",
          to: "",
        },
      },
      appointmentPool: "",
      modal: false,
      time: "10:00",
    };
  }

  async componentWillMount() {
    if (this.props.location.locationName) {
      console.log(this.props.location.locationName.key);
      this.locationData = await get(this.props.location.locationName.key);
      console.log(this.locationData);
      this.setState({ ...this.locationData });
      console.log(this.state);
    }
  }
  submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
    this.addLocation();
  };

  handleApplyToAll = (val1, val2) => {
    if (this.state.facilityTime.Sun.checked) {
      const facilityTimeItem = { ...this.state.facilityTime };
      facilityTimeItem.Sun.from = val1;
      facilityTimeItem.Sun.to = val2;
      this.setState({ facilityTime: facilityTimeItem });
    }
    if (this.state.facilityTime.Mon.checked) {
      const facilityTimeItem = { ...this.state.facilityTime };
      facilityTimeItem.Mon.from = val1;
      facilityTimeItem.Mon.to = val2;
      this.setState({ facilityTime: facilityTimeItem });
    }
    if (this.state.facilityTime.Tue.checked) {
      const facilityTimeItem = { ...this.state.facilityTime };
      facilityTimeItem.Tue.from = val1;
      facilityTimeItem.Tue.to = val2;
      this.setState({ facilityTime: facilityTimeItem });
    }
    if (this.state.facilityTime.Wed.checked) {
      const facilityTimeItem = { ...this.state.facilityTime };
      facilityTimeItem.Wed.from = val1;
      facilityTimeItem.Wed.to = val2;
      this.setState({ facilityTime: facilityTimeItem });
    }
    if (this.state.facilityTime.Thr.checked) {
      const facilityTimeItem = { ...this.state.facilityTime };
      facilityTimeItem.Thr.from = val1;
      facilityTimeItem.Thr.to = val2;
      this.setState({ facilityTime: facilityTimeItem });
    }
    if (this.state.facilityTime.Fri.checked) {
      const facilityTimeItem = { ...this.state.facilityTime };
      facilityTimeItem.Fri.from = val1;
      facilityTimeItem.Fri.to = val2;
      this.setState({ facilityTime: facilityTimeItem });
    }
    if (this.state.facilityTime.Sat.checked) {
      const facilityTimeItem = { ...this.state.facilityTime };
      facilityTimeItem.Sat.from = val1;
      facilityTimeItem.Sat.to = val2;
      this.setState({ facilityTime: facilityTimeItem });
    }
  };

  handleFacilityCheck = (param) => {
    console.log("heyy buddy" + param);

    if (param == "Sun") {
      var properties = { ...this.state.facilityTime };
      properties.Sun.checked = !this.state.facilityTime.Sun.checked;
      this.setState({ facilityTime: properties });
      console.log("Sun" + param);
    }
    if (param == "Mon") {
      var properties = { ...this.state.facilityTime };
      properties.Mon.checked = !this.state.facilityTime.Mon.checked;
      this.setState({ facilityTime: properties });
      console.log("Mon" + param);
    }
    if (param == "Tue") {
      var properties = { ...this.state.facilityTime };
      properties.Tue.checked = !this.state.facilityTime.Tue.checked;
      this.setState({ facilityTime: properties });
      console.log("Tue" + param);
    }
    if (param == "Wed") {
      var properties = { ...this.state.facilityTime };
      properties.Wed.checked = !this.state.facilityTime.Wed.checked;
      this.setState({ facilityTime: properties });
      console.log("Wed" + param);
    }
    if (param == "Thr") {
      var properties = { ...this.state.facilityTime };
      properties.Thr.checked = !this.state.facilityTime.Thr.checked;
      this.setState({ facilityTime: properties });
      console.log("Thr" + param);
    }
    if (param == "Fri") {
      var properties = { ...this.state.facilityTime };
      properties.Fri.checked = !this.state.facilityTime.Fri.checked;
      this.setState({ facilityTime: properties });
    }
    if (param == "Sat") {
      var properties = { ...this.state.facilityTime };
      properties.Sat.checked = !this.state.facilityTime.Sat.checked;
      this.setState({ facilityTime: properties });
    }
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  onChange = (time) => this.setState({ time });

  handleInputChange = (inputName) => (value) => {
    const nextValue = value;

    this.setState({
      [inputName]: nextValue,
    });

    console.log("now this !!");
  };

  addLocation = () => {
    set(this.state.locationName, this.state);
    console.log("data added successfully !!");
    this.props.history.push("/");
  };
  render() {
    return (
      <MDBContainer size="sm">
        <MDBRow size="sm">
          <MDBCol size="sm" md="12">
            <MDBCard>
              <MDBCardBody size="sm">
                <form onSubmit={this.submitHandler}>
                  <p className="h5 text-center mb-4">Add Locations</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Location name"
                      name="locationName"
                      required
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={this.state.locationName}
                      getValue={this.handleInputChange("locationName")}
                    />
                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput
                          label="Address Line 1"
                          name="addressLineOne"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          value={this.state.addressLineOne}
                          getValue={this.handleInputChange("addressLineOne")}
                        />
                      </MDBCol>
                      <MDBCol md="6">
                        <MDBInput
                          label="Suite No."
                          name="suiteNo"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          value={this.state.suiteNo}
                          getValue={this.handleInputChange("suiteNo")}
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput
                          label="Address Line 2"
                          name="addressLineTwo"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          value={this.state.addressLineTwo}
                          getValue={this.handleInputChange("addressLineTwo")}
                        />
                      </MDBCol>
                      <MDBCol md="3">
                        <MDBInput
                          label="City"
                          name="city"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          value={this.state.city}
                          getValue={this.handleInputChange("city")}
                        />
                      </MDBCol>
                      <MDBCol md="3">
                        <MDBInput
                          label="State"
                          name="state"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          value={this.state.state}
                          getValue={this.handleInputChange("state")}
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBRow>
                      <MDBCol md="3">
                        <MDBInput
                          label="Zip Code"
                          name="zipCode"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          value={this.state.zipCode}
                          getValue={this.handleInputChange("zipCode")}
                        />
                      </MDBCol>
                      <MDBCol md="3">
                        <MDBInput
                          label="Phone Number"
                          name="phoneNumber"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          value={this.state.phoneNumber}
                          getValue={this.handleInputChange("phoneNumber")}
                        />
                      </MDBCol>
                      <MDBCol md="6">
                        <MDBInput
                          label="Time Zone"
                          name="timeZone"
                          group
                          type="time"
                          validate
                          error="wrong"
                          success="right"
                          value={this.state.timeZone}
                          getValue={this.handleInputChange("timeZone")}
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput
                          label="Facility Time"
                          name="facilityTime"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          onClick={() => this.toggle()}
                        />
                      </MDBCol>
                      <MDBCol md="6">
                        <MDBInput
                          label="Appointment Pool"
                          name="appointmentPool"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          value={this.state.appointmentPool}
                          getValue={this.handleInputChange("appointmentPool")}
                        />
                      </MDBCol>
                    </MDBRow>
                  </div>
                  <div className="text-right">
                    <Link
                      to={{
                        pathname: "/",
                      }}
                      className="link"
                    >
                      <MDBBtn size="sm" color="danger">
                        Cancel
                      </MDBBtn>
                    </Link>

                    <MDBBtn size="sm" color="primary" type="submit">
                      Save
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBModal
          isOpen={this.state.modal}
          toggle={() => this.toggle()}
          centered
          size="lg"
        >
          <MDBModalBody>
            <h5> Facility Times</h5>
            <MDBRow>
              <MDBCol md="2"></MDBCol>
              <MDBCol md="3">
                <p>From</p>
              </MDBCol>
              <MDBCol md="3">
                <p>To</p>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="2">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="sun"
                    checked={this.state.facilityTime.Sun.checked}
                    onChange={() => this.handleFacilityCheck("Sun")}
                  />
                  <label className="custom-control-label" htmlFor="sun">
                    Sun
                  </label>
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div>
                  <TimePicker
                    onChange={(e) => {
                      const time = { ...this.state.facilityTime };
                      time.Sun.from = e;
                      this.setState({ facilityTime: time });
                    }}
                    value={this.state.facilityTime.Sun.from}
                  />
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div>
                  <TimePicker
                    onChange={(e) => {
                      const time = { ...this.state.facilityTime };
                      time.Sun.to = e;
                      this.setState({ facilityTime: time });
                    }}
                    value={this.state.facilityTime.Sun.to}
                  />
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div
                  className="applyToAll"
                  onClick={() =>
                    this.handleApplyToAll(
                      this.state.facilityTime.Sun.from,
                      this.state.facilityTime.Sun.to
                    )
                  }
                >
                  Apply to All Checked
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow className="facilityTimes">
              <MDBCol md="2">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="Mon"
                    checked={this.state.facilityTime.Mon.checked}
                    onChange={() => this.handleFacilityCheck("Mon")}
                  />
                  <label className="custom-control-label" htmlFor="Mon">
                    Mon
                  </label>
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div>
                  <TimePicker
                    onChange={(e) => {
                      const time = { ...this.state.facilityTime };
                      time.Mon.from = e;
                      this.setState({ facilityTime: time });
                    }}
                    value={this.state.facilityTime.Mon.from}
                  />
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div>
                  <TimePicker
                    onChange={(e) => {
                      const time = { ...this.state.facilityTime };
                      time.Mon.to = e;
                      this.setState({ facilityTime: time });
                    }}
                    value={this.state.facilityTime.Mon.to}
                  />
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div
                  className="applyToAll"
                  onClick={() =>
                    this.handleApplyToAll(
                      this.state.facilityTime.Mon.from,
                      this.state.facilityTime.Mon.to
                    )
                  }
                >
                  Apply to All Checked
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow className="facilityTimes">
              <MDBCol md="2">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="Tue"
                    checked={this.state.facilityTime.Tue.checked}
                    onChange={() => this.handleFacilityCheck("Tue")}
                  />
                  <label className="custom-control-label" htmlFor="Tue">
                    Tue
                  </label>
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div>
                  <TimePicker
                    onChange={(e) => {
                      const time = { ...this.state.facilityTime };
                      time.Tue.from = e;
                      this.setState({ facilityTime: time });
                    }}
                    value={this.state.facilityTime.Tue.from}
                  />
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div>
                  <TimePicker
                    onChange={(e) => {
                      const time = { ...this.state.facilityTime };
                      time.Tue.to = e;
                      this.setState({ facilityTime: time });
                    }}
                    value={this.state.facilityTime.Tue.to}
                  />
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div
                  className="applyToAll"
                  onClick={() =>
                    this.handleApplyToAll(
                      this.state.facilityTime.Tue.from,
                      this.state.facilityTime.Tue.to
                    )
                  }
                >
                  Apply to All Checked
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow className="facilityTimes">
              <MDBCol md="2">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="Wed"
                    checked={this.state.facilityTime.Wed.checked}
                    onChange={() => this.handleFacilityCheck("Wed")}
                  />
                  <label className="custom-control-label" htmlFor="Wed">
                    Wed
                  </label>
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div>
                  <TimePicker
                    onChange={(e) => {
                      const time = { ...this.state.facilityTime };
                      time.Wed.from = e;
                      this.setState({ facilityTime: time });
                    }}
                    value={this.state.facilityTime.Wed.from}
                  />
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div>
                  <TimePicker
                    onChange={(e) => {
                      const time = { ...this.state.facilityTime };
                      time.Wed.to = e;
                      this.setState({ facilityTime: time });
                    }}
                    value={this.state.facilityTime.Wed.to}
                  />
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div
                  className="applyToAll"
                  onClick={() =>
                    this.handleApplyToAll(
                      this.state.facilityTime.Wed.from,
                      this.state.facilityTime.Wed.to
                    )
                  }
                >
                  Apply to All Checked
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow className="facilityTimes">
              <MDBCol md="2">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="Thr"
                    checked={this.state.facilityTime.Thr.checked}
                    onChange={() => this.handleFacilityCheck("Thr")}
                  />
                  <label className="custom-control-label" htmlFor="Thr">
                    Thr
                  </label>
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div>
                  <TimePicker
                    onChange={(e) => {
                      const time = { ...this.state.facilityTime };
                      time.Thr.from = e;
                      this.setState({ facilityTime: time });
                    }}
                    value={this.state.facilityTime.Thr.from}
                  />
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div>
                  <TimePicker
                    onChange={(e) => {
                      const time = { ...this.state.facilityTime };
                      time.Thr.to = e;
                      this.setState({ facilityTime: time });
                    }}
                    value={this.state.facilityTime.Thr.to}
                  />
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div
                  className="applyToAll"
                  onClick={() =>
                    this.handleApplyToAll(
                      this.state.facilityTime.Thr.from,
                      this.state.facilityTime.Thr.to
                    )
                  }
                >
                  Apply to All Checked
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow className="facilityTimes">
              <MDBCol md="2">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="Fri"
                    checked={this.state.facilityTime.Fri.checked}
                    onChange={() => this.handleFacilityCheck("Fri")}
                  />
                  <label className="custom-control-label" htmlFor="Fri">
                    Fri
                  </label>
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div>
                  <TimePicker
                    onChange={(e) => {
                      const time = { ...this.state.facilityTime };
                      time.Fri.from = e;
                      this.setState({ facilityTime: time });
                    }}
                    value={this.state.facilityTime.Fri.from}
                  />
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div>
                  <TimePicker
                    onChange={(e) => {
                      const time = { ...this.state.facilityTime };
                      time.Fri.to = e;
                      this.setState({ facilityTime: time });
                    }}
                    value={this.state.facilityTime.Fri.to}
                  />
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div
                  className="applyToAll"
                  onClick={() =>
                    this.handleApplyToAll(
                      this.state.facilityTime.Fri.from,
                      this.state.facilityTime.Fri.to
                    )
                  }
                >
                  Apply to All Checked
                </div>
              </MDBCol>
            </MDBRow>
            <MDBRow className="facilityTimes">
              <MDBCol md="2">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="Sat"
                    checked={this.state.facilityTime.Sat.checked}
                    onChange={() => this.handleFacilityCheck("Sat")}
                  />
                  <label className="custom-control-label" htmlFor="Sat">
                    Sat
                  </label>
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div>
                  <TimePicker
                    onChange={(e) => {
                      const time = { ...this.state.facilityTime };
                      time.Sat.from = e;
                      this.setState({ facilityTime: time });
                    }}
                    value={this.state.facilityTime.Sat.from}
                  />
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div>
                  <TimePicker
                    onChange={(e) => {
                      const time = { ...this.state.facilityTime };
                      time.Sat.to = e;
                      this.setState({ facilityTime: time });
                    }}
                    value={this.state.facilityTime.Sat.to}
                  />
                </div>
              </MDBCol>
              <MDBCol md="3">
                <div
                  className="applyToAll"
                  onClick={() =>
                    this.handleApplyToAll(
                      this.state.facilityTime.Sat.from,
                      this.state.facilityTime.Sat.to
                    )
                  }
                >
                  Apply to All Checked
                </div>
              </MDBCol>
            </MDBRow>

            <br></br>
            <div className="text-right">
              <MDBBtn color="secondary " size="sm" onClick={this.toggle}>
                Close
              </MDBBtn>
              <MDBBtn size="sm" rounded color="primary" onClick={this.toggle}>
                Save
              </MDBBtn>
            </div>
          </MDBModalBody>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default AddLocation;
