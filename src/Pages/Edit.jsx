import "../assets/add.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../firebase_config";
import { useNavigate } from "react-router-dom";

import { collection, setDoc, getDoc, doc, updateDoc } from "firebase/firestore";

export default function Edit() {
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const params = useParams();
  const id = params.id;

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "Address", `UserAddress`);
    const docSnap = await getDoc(docRef);
    const addresses = docSnap.data().address;

    const upDatedAddress = addresses.map((add) => {
      if (add.id === id) {
        return {
          id: id,
          street: streetAddress,
          city: city,
          state: state,
          zipCode: zipCode,
        };
      }
      return add;
    });
    // console.log(upDatedAddress);
    await updateDoc(docRef, {address: upDatedAddress});
    console.log("DONE");
    navigate("/show-address")
  };

  const fetchData = async () => {  

    const docRef = doc(db, "Address", `UserAddress`);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const DB = docSnap.data().address;
      DB.map((rec) => {
        if (rec.id == id) {
          setStreetAddress(rec.street);
          setCity(rec.city);
          setState(rec.state);
          setZipCode(rec.zipCode);
        }
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
      <div className="login-box">
        <p style={{ color: "white" }}>
        <span className="fancy">Upadte</span>
           <br />
           Address
        </p>

        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              value={streetAddress}
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
              value={city}
              className=""
              required=""
              onInput={(text) => {
                setCity(text.target.value);
              }}
            />
            <label>City</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              value={state}
              className=""
              required=""
              onInput={(text) => {
                setState(text.target.value);
              }}
            />
            <label>State</label>
          </div>

          <div className="user-box">
            <input
              type="number"
              value={zipCode}
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
            Update
          </button>
        </form>
      </div>
    </>
  );
}
