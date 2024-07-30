import React, { useState, useEffect } from 'react';
import './AdminReports.css';

const AdminReports = () => {
  const [reports, setReports] = useState({
    totalSales: 0,
    totalUsers: 0,
    totalOrders: 0,
    recentActivity: []
  });

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch('/api/reports'); // Replace with your actual API endpoint
        const data = await response.json();
        setReports(data);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="admin-reports">
      <h2>Reports Dashboard</h2>
      <div className="report-summary">
        <div className="report-card">
          <h3>Total Sales</h3>
          <p>${reports.totalSales.toFixed(2)}</p>
        </div>
        <div className="report-card">
          <h3>Total Users</h3>
          <p>{reports.totalUsers}</p>
        </div>
        <div className="report-card">
          <h3>Total Orders</h3>
          <p>{reports.totalOrders}</p>
        </div>
      </div>
      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <ul>
          {reports.recentActivity.map((activity, index) => (
            <li key={index}>
              {activity.timestamp}: {activity.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminReports;
