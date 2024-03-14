// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { useInView } from "react-intersection-observer";
import "./work.css"; // Import the CSS file for styling
import axios from "axios";
import { base_url } from "../../Api/api";

export const Work = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });



  const [flag, setFlag] = useState(false);
  const [err, setErr] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [whyyou, setwhyyou] = useState("");
  const [jobid, setjobid] = useState("");
  const [resumelink, setresumlink] = useState("");

  async function handleInquiry(e) {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(inquiry);

    const data = {
      name: name,
      email: email,
      phone: phone,
      jobid: jobid,
      resumelink: resumelink,
      whyyou: whyyou,

    };

    axios.post(`${base_url}/career`, data)
      .then((result) => {
        console.log(" Enquiry submit Sucessful" , result);
        setFlag(true);
        setErr(false);
      })
      .catch((error) => {
        console.log(error);
        setErr(true);
        setFlag(false);
      })
      
  }

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowText(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="bg-black text-white p-2 w-full h-full">
      <Header />
      <div className="">
        <h1
          className={`c-main-text my-5 text-center font-extrabold text-6xl text-transform:uppercase ${
            inView ? "animate-featured" : ""
          }`}
          ref={ref}
        >
          Join the media revolution
        </h1>
        <br/>
        {/* <h2
          className={`c-main-text my-5 text-center font-extrabold text-6xl text-transform:uppercase ${
            inView ? "animate-featured" : ""
          }`}
          ref={ref}
        >
          Explore career opportunities 
        </h2> */}
        
      </div>
      <br/>
      <div className={`c-form-text border-2 flex flex-col ${showText ? "animated" : ""}`}>
        <div className="c-text p-2 w-4/5 border-2">

        
           <h3
          className={`c-main-text my-5 text-center font-extrabold text-4xl text-transform:uppercase ${
            inView ? "animate-featured" : ""
          }`}
          ref={ref}
        >
          Explore career opportunities 
        </h3>
        <hr style={{ margin: '0px 60px 20px 60px' }} />
        <br/>
            
          <span className=" text-gray-400 text-transform:uppercase">
            JOB 2 -
          </span>
          <br />
          <p className="text-xl my-2">
            &#160;&#160;&#160;&#160;&#160;Role:
              <br /> 
            &#160;&#160;&#160;&#160;&#160;Description:
              <br />
            &#160;&#160;&#160;&#160;&#160;Requirements:
              <br />
          </p>
          <br />
          <span className=" text-gray-400 text-transform:uppercase">
            JOB 3 - 
          </span>
          <br />
          <p className="text-xl my-2">
            &#160;&#160;&#160;&#160;&#160;Role:
              <br /> 
            &#160;&#160;&#160;&#160;&#160;Description:
              <br />
            &#160;&#160;&#160;&#160;&#160;Requirements:
              <br />
          </p>
          <br />
          <span className=" text-gray-400 text-transform:uppercase">
            JOB 4 - 
          </span>
          <br />
          <p className="text-xl my-2">
            &#160;&#160;&#160;&#160;&#160;Role:
              <br /> 
            &#160;&#160;&#160;&#160;&#160;Description:
              <br />
            &#160;&#160;&#160;&#160;&#160;Requirements:
              <br />
          </p>
          <br />
          <span className=" text-gray-400 text-transform:uppercase">
            JOB 5 - 
          </span>
          <br />
          <p className="text-xl my-2">
            &#160;&#160;&#160;&#160;&#160;Role:
              <br /> 
            &#160;&#160;&#160;&#160;&#160;Description:
              <br />
            &#160;&#160;&#160;&#160;&#160;Requirements:
              <br />
          </p>
          <br />
          <span className=" text-gray-400 text-transform:uppercase">
            JOB 6 - 
          </span>
          <br />
          <p className="text-xl my-2">
            &#160;&#160;&#160;&#160;&#160;Role:
              <br /> 
            &#160;&#160;&#160;&#160;&#160;Description:
              <br />
            &#160;&#160;&#160;&#160;&#160;Requirements:
              <br />
          </p>
          <br />
        </div>
        <div className="c-form w-9/10 p-5 border-2">
          <h1 className="text-2xl text-center my-5 ">
            {flag ? 'Your data is successfully submitted ✅' : ''}
            {err ? 'Something Went Wrong, Try Again ❌' : ''}
            {flag || err ? '' : 'Apply Now'}
          </h1>
          <form onSubmit={handleInquiry} className="my-4">
            <input
              type="text"
              placeholder="NAME"
              onChange={(e) => setname(e.target.value)}
              name="name"
              className="my-6 rounded-lg p-3 w-full bg-black border-x-2 border-y-2"
            />
            <br />
            <input
              type="text"
              placeholder="EMAIL ID"
              onChange={(e) => setemail(e.target.value)}
              name="email"
              className="my-6 rounded-lg p-3 w-full bg-black border-x-2 border-y-2"
            />
            <br />
            <input
              type="text"
              placeholder="PHONE NUMBER"
              onChange={(e) => setemail(e.target.value)}
              name="phone"
              className="my-6 rounded-lg p-3 w-full bg-black border-x-2 border-y-2"
            />
            <br />
            <input
              type="text"
              placeholder="JOB ID"
              onChange={(e) => setemail(e.target.value)}
              name="jobid"
              className="my-6 rounded-lg p-3 w-full bg-black border-x-2 border-y-2"
            />
            <br />
            <input
              type="text"
              placeholder="RESUME LINK"
              onChange={(e) => setemail(e.target.value)}
              name="resumelink"
              className="my-6 rounded-lg p-3 w-full bg-black border-x-2 border-y-2"
            />
            <br/>
            <textarea
              type="text"
              placeholder="WHY YOU"
              onChange={(e) => setinquiry(e.target.value)}
              name="whyyou"
              className="my-6 rounded-lg p-3 py-9  w-full bg-black border-x-2 border-y-2"
            />
            <br />
            {
              flag ?
                <h1 text-center>Thank You, Your submission has been received!</h1>
                :
                <button
              type="submit"
              className="bg-white w-full rounded-lg p-1 my-6 text-black text-2xl hover:bg-slate-200"
            >
              Submit
            </button>
            }
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};    







//   return (
//     <div>
//       <h1 style={{ color: 'white' }}>Empowering Change</h1>
//       <h2 style={{ color: 'white' }}>We Make the Change</h2>
//       <div style={{ display: 'flex' }}>
//         <div style={{ flex: 1, border: '1px solid white', margin: '5px', padding: '10px', color: 'white' }}>
//           <h3>Name: Box 1</h3>
//           <p>Description: Description 1</p>
//           <p>ID: 1</p>
//         </div>
//         <div style={{ flex: 1, border: '1px solid white', margin: '5px', padding: '10px', color: 'white' }}>
//           <h3>Name: Box 2</h3>
//           <p>Description: Description 2</p>
//           <p>ID: 2</p>
//         </div>
//         <div style={{ flex: 1, border: '1px solid white', margin: '5px', padding: '10px', color: 'white' }}>
//           <h3>Name: Box 3</h3>
//           <p>Description: Description 3</p>
//           <p>ID: 3</p>
//         </div>
//       </div>
//     </div>
//   );
// };

