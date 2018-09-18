import React from 'react';
import PageIcon from "./PageIcon";
import ContatComponent from "./ContatComponent";


class Head extends React.Component {
  render() {
    return (

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm">
            <PageIcon />
          </div>
          <div className="col-sm">
            <ContatComponent />
          </div>
        </div>
      </div>

    );
  }
}

export default Head;

