import { useState } from "react";

export const PostRequest = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUserName] = useState(""); 
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
          const body = { username, email, password };
          console.log(body);
          const response = await fetch("https://haven-nodejs.herokuapp.com/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          });
          const parseRes = await response.json();
          localStorage.setItem("token", parseRes.token);
          props.setAuth(true);
          setSuccess("Welcome to Haven");
        } catch (error) {
          setError("Something went wrong");
         }
     
      };

      return { HandleSubmit, error, success, email, password, username };
}

