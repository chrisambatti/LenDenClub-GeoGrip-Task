import "../assets/show.css";
import { collection, setDoc, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase_config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ShowAddress() {
  const [data, SetData] = useState([]);

  // data fetching
  const fetchData = async () => {
    const docRef = doc(db, "Address", "UserAddress");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      SetData(docSnap.data().address || []);
      console.log(data);
      // console.log("Data Loaded");
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <table className="ShowTable">
        <thead>
          <tr>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data ? (
            <>
              {data.map((add) => {
                return (
                  <tr key={add.id}>
                    <td>{add.street}</td>
                    <td>{add.city}</td>
                    <td>{add.state}</td>
                    <td>{add.zipCode}</td>
                    <td>
                        <Link className="btns" to={`/edit/${add.id}`}>Edit</Link>
                      <button className="btns">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </>
          ) : (
            <tr>
              <td colSpan="5">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}