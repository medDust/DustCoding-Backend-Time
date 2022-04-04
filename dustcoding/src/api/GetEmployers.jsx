import axios from "axios";
import { useEffect, useState } from "react";

function GetEmployers() {
  const [Employers, setEmployers] = useState([]);
  const GetEmps = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem(process.env.JWT_ACCESS)}`,
      },
    };
    
    const res = await axios
      .get("http://localhost:5000/api/auth/infos", config)
      .then((response) => response.json())
      .then((res) => setEmployers(res.data))
      .catch((err) => console.log("err axios :", err));

    return res;
  };
  useEffect(() => {
    GetEmps();
  }, []);

  return { employers: [Employers, setEmployers] };
}

export default GetEmployers;
