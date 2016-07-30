import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router';

const DashboardWrapper = () => {
  return (<div className="dashboard-wrapper">
    <Header />
    <div className="container">
      <h1>Dashboard</h1>
      <Link to="/hobbies/new" className="btn btn-success">Add New Hobby</Link>
    </div>
  </div>);
};

export default DashboardWrapper;
