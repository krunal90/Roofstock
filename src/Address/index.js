import React, { Component } from 'react';

const Address = (value) => {
  return (
    <div>
      <span>{value.address1}</span> <br/>
      <span>{value.city+", " + value.state + "-" + value.zip}</span>
    </div>)


};
export default Address;