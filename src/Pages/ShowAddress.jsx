import "../assets/show.css";
import { updateDoc, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase_config";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ShowAddress() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  // Function to fetch data from Firestore
  const fetchData = async () => {
    try {
      setIsLoading(true); // Set loading to true when fetching data
      const docRef = doc(db, "Address", "UserAddress");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setData(docSnap.data().address || []);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false); // Set loading to false after fetching data
    }
  };

  // Function to handle delete operation
  const handleDelete = async (id) => {
    try {
      setIsLoading(true); // Set loading to true when deleting data
      const docRef = doc(db, "Address", "UserAddress");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        let dataArray = docSnap.data().address;
        dataArray = dataArray.filter((obj) => obj.id !== id);
        await updateDoc(docRef, { address: dataArray });
        fetchData(); // Refresh data after deletion
      }
    } catch (error) {
      console.error("Error deleting object:", error);
    } finally {
      setIsLoading(false); // Set loading to false after deleting data
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter data based on search query
  const filteredData = data.filter((add) =>
    `${add.street} ${add.city} ${add.state} ${add.zipCode}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="loading-indicator">
        {isLoading && <p>Loading...</p>}
      </div>
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
          {filteredData.length > 0 ? (
            filteredData.map((add) => (
              <tr key={add.id}>
                <td>{add.street}</td>
                <td>{add.city}</td>
                <td>{add.state}</td>
                <td>{add.zipCode}</td>
                <td>
                  <Link className="btns" to={`/edit/${add.id}`}>
                    Edit
                  </Link>
                  <button className="btns" onClick={() => handleDelete(add.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No matching data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
