import React from "react";

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to the Homepage</h1>

      <table className="simple-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>Developer</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>Designer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;