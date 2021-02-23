import React from 'react';
import Candy from './components/Candy';
import Chart from './Chart/Chart';
import Calculator from './components/Calculator';
import {Tab, Tabs} from 'react-bootstrap';

function App () {

  return (
    <div className="container mt-4">
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Candy Dispenser">
          <Candy/>
        </Tab>
        <Tab eventKey="profile" title="Chart">
          <Chart/>  
        </Tab>
        <Tab eventKey="contact" title="Calculator">
          <Calculator/>
        </Tab>
      </Tabs>
    </div>
  )
}

export default App;