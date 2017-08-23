import React from 'react';
import AlertList from '../containers/alert-list';
import AlertDetails from '../containers/alert-detail';
require('../../scss/style.scss');

/*
const App = () => (
    <div>
        <h2>Alert List</h2>
        <AlertList />
        <hr />
        <h2>Alert Details</h2>
        <AlertDetails />
    </div>
);
*/

const App = () => (
    
  <div className="container">
  <div className="fixed">
    <div >
      <div className="list-row">Structure</div>
      <div className="list-row">Group</div>
      <div className="list-row">Node</div>
      <div className="list-row">Type</div>
      <div className="list-row-wide">Read/threshold</div>
      <div className="list-row">Date</div>             
    </div>
    <AlertList />
  </div>
  <div className="flex-item">
    <AlertDetails />
  </div>
</div>
);


export default App;
