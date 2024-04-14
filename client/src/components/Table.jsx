import React from "react";

const Details = ({ details }) => {
  return (
    <div>
      {details && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Number</th>
              <th>Challan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{details.name}</td>
              <td>{details.vehicleNumber}</td>
              <td>{details.challan}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Details;
