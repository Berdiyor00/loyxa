import React, { useEffect, useState } from 'react';

const AdminPanel = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const storedSubmissions = JSON.parse(localStorage.getItem('submissions')) || [];
    setSubmissions(storedSubmissions);
  }, []);

  return (
    <div className="container pt-[40px]">
      <h1>Admin Panel</h1>
      <table className="min-w-full ">
        <thead>
          <tr>
            <th className="py-2">ID</th>
            <th className="py-2">Selected Item</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission) => (
            <tr key={submission.id}>
              <td className="border px-4 py-2">{submission.id}</td>
              <td className="border px-4 py-2">{submission.item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;
