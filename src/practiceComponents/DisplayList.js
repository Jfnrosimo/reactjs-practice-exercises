import { useState } from "react";

//Import data
import mockData from "../data/MOCK_DATA.json";

const DisplayList = () => {
  const [details, setDetails] = useState(mockData);
  return (
    <div className="text-center py-5 border border-slate-500 m-2">
      <h1 className="text-3xl font-semibold">Display List</h1>
      <table className="relative mt-2 m-auto shadow-lg bg-white">
        <thead>
          <tr className="text-center bg-blue-100">
            <th className=" border text-left px-8 py-4">FIRST NAME</th>
            <th className="border text-left px-8 py-4">LAST NAME</th>
            <th className="border text-left px-8 py-4">EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {details.map((item, index) => {
            return (
              index < 10 && (
                <tr key={item.email}>
                  <td className="border px-8 py-2">{item.first_name}</td>
                  <td className="border px-8 py-2">{item.last_name}</td>
                  <td className="border px-8 py-2">{item.email}</td>
                </tr>
              )
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayList;
