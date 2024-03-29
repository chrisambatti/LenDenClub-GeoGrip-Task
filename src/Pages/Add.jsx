import { useState } from "react";
import { db } from "../firebase_config";
import "../assets/add.css";
// import './script1'
import { collection, setDoc,getDoc,doc } from "firebase/firestore";

export default function Add() {
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [prevData,setPrevData] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(streetAddress, city, state, zipCode);
    const updatedData = {
      "street":streetAddress,
      'city':city,
      'state':state,
      'zipCode':zipCode
    }
    const docRef = doc(db, "Address", "UserAddress");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setPrevData(docSnap.data().address || [])
      console.log(prevData);
      await setDoc(doc(collection(db, 'Address'), 'UserAddress'), {
        address: [...prevData, updatedData],
      });
      alert("Data Submitted")
    } else {
      
      console.log("No such document!");
    }
  };

  return (
    <>
      <div className="login-box">
        <p style={{ color: "white" }}>
          Address <span className="fancy">Updator</span>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              className=""
              required=""
              onInput={(text) => {
                setStreetAddress(text.target.value);
                console.log(streetAddress);
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
          <div className="use-box">
            <select
              id="state"
              className="state"
              required
              onChange={(text) => {
                setState(text.target.value);
              }}
            >
              <option value="">Select State</option>
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
