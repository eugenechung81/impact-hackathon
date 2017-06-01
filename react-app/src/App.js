import "../bower_components/jquery/dist/jquery.min";
import "../bower_components/bootstrap/dist/css/bootstrap.min.css";
import React, {Component} from "react";
// import "./dataflow_client"
//import '../bower_components/bootstrap/dist/js/bootstrap.min'

class App extends Component {

  componentDidMount() {
    // WebFont.load({
    //   google: {
    //     families: ['Open Sans:400,600'],
    //   },
    //   active: diagram.redraw.bind(diagram),
    //   inactive: diagram.redraw.bind(diagram),
    // });
  }

  renderX() {
    return (
      <div>
        <div className="col-sm-2">Tree</div>
        <div className="col-sm-10">
          <div>
            <div id="menu">
              <div id="buttons">
                <div id="selector"></div>
              </div>
            </div>
            <div id="diagram-container">
              <div className="toolbar">
                <img className="toolbar-button" id="btn-hide-links" src="images/Hide.png"/>
              </div>
              <div id="globalDiagram" className="height50"></div>
            </div>
          </div>
          <div>Tree</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
Test      </div>
    );
  }
}

export default App;
