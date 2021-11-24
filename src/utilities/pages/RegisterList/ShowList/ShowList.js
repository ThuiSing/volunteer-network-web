import React from "react";

const ShowList = () => {
  return (
    <table className="w-full">
      <thead className="bg-gray-200 rounded-3xl p-3">
        <tr>
          <th>Name</th>
          <th>Email ID</th>
          <th>Registration date</th>
          <th>Volunteer list</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="bg-emerald-200 text-center mt-4">
        <tr className="mt-5">
          <td>tera bap</td>
          <td>terabap@gmail.com</td>
          <td>20,10,2020</td>
          <td>Organize books</td>
          <td>X</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ShowList;
