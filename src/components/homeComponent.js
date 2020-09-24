import React from "react";
import { Link } from "react-router-dom";
import { keys } from "idb-keyval";
import { get } from "idb-keyval";
import "./styles/homeComponent.css";
import { MDBBtn } from "mdbreact";
import LocationList from "./locationList";

export class HomeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    };

    //this.dataSet.columns = [];
  }

  async componentWillMount() {
    this.listItems = [];
    keys().then(async (keys) => {
      keys.map(async (key, index) => {
        this.listItems[index] = await get(key);
        this.setState({ events: this.listItems });
      });
    });
  }
  render() {
    return (
      <div className="container-div">
        <div>
          <nav className="navbar navbar-expand-lg  primary-color">
            <div className=" ">
              <form className="form-inline">
                <div className="md-form my-0 ">
                  <div>
                    <Link to={"add"} className="" key={0}>
                      <MDBBtn color="primary">+ Add Location</MDBBtn>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </nav>
        </div>
        <div className="  items-area">
          <div className="item-container">
            <LocationList events={this.state.events} />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
