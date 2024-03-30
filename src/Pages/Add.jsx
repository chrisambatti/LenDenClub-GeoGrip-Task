import { useState } from "react";
import { db } from "../firebase_config";
import {v4 as uuidv4} from 'uuid';
import "../assets/add.css";
// import './script1'
import { collection, setDoc,getDoc,doc,updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Add() {
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(streetAddress, city, state, zipCode);
    const newObj = {
      id: uuidv4(),
      "street":streetAddress,
      'city':city,
      'state':state,
      'zipCode':zipCode
    }
    const docRef = doc(db, "Address", "UserAddress");
    const docSnap = await getDoc(docRef);
    
    if(docSnap.exists()){
      const prevData = docSnap.data().address || []; // Get the current array data or initialize an empty array
      const updatedData = [...prevData, newObj]; // Add the new JSON object to the array

      // Step 3: Write the updated document back to Firestore
      await updateDoc(docRef, { address: updatedData });
      console.log("added to Firestore successfully!");
      alert("Added To Database")
    } else {
      console.log("Document does not exist.");
    }
    navigate("/show-address")

  };

  return (
    <>
      <div className="login-box">
        <p style={{ color: "white" }}>
           <span className="fancy">Add</span>
           <br />
           Address
        </p>

        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              className=""
              required=""
              onInput={(text) => {
                setStreetAddress(text.target.value);
              }}
            />
            <label>Street Address</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              className=""
              required=""
              onInput={(text) => {
                setCity(text.target.value);
              }}
            />
            <label>City</label>
          </div>
          <div className="use-box select-wrapper">
            <select
              id="state"
              className="state"
              required
              onChange={(text) => {
                setState(text.target.value);
              }}
            >
              <option value="" hidden>Select State</option>
              <option value="MH">Maharastra</option>
              <option value="DL">Delhi</option>
              <option value="HY">Hydrabad</option>
            </select>
          </div>

          <div className="user-box">
            <input
              type="number"
              className=""
              required=""
              onInput={(text) => {
                setZipCode(text.target.value);
              }}
            />
            <label>Zip code</label>
          </div>
          <button type="submit" className="textt">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
