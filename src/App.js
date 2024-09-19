import "./styles.css";
import { useFetch } from "./useFetch";
import { useEffect, useRef } from "react";
import DateTimer from "./DateTimer";
import Timer from "./Timer";
import StopWatch from "./StopWatch";
import CountrySelection from "./CountrySelection";
import Counter from "./HOC/Counter";
import SignInForm from "./SignInForm";

export default function App() {
  // const [data, loading, error] = useFetch(
  //   "https://jsonplaceholder.typicode.com/users",
  // );
  // const usersRef = useRef([]);

  // useEffect(() => {
  //   console.log("executing");
  //   usersRef.current.forEach((el) => {
  //     console.log("innerText is ", el.innerText);
  //     if (el.innerText.includes("Lea")) {
  //       el.style.backgroundColor = "red";
  //     }
  //   });
  // }, []);

  // console.log("hellooo");
  return (
    // <div className="App">
    //   {loading && <p>Loading...</p>}
    //   {console.log("incoming....")}
    //   {data && (
    //     <ul>
    //       {data.map((user, index) => (
    //         <li
    //           key={user.name + index}
    //           ref={(el) => (usersRef.current[index] = el)}
    //         >
    //           {user.name}
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </div>
    <>
      {/* <DateTimer /> */}
      {/* <Timer /> */}
      {/* <StopWatch /> */}
      {/* <CountrySelection /> */}
      {/* <Counter test="something" /> */}
      <SignInForm />
    </>
  );
}
