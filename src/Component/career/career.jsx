// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { useInView } from "react-intersection-observer";
import "./career.css"; // Import the CSS file for styling
import axios from "axios";
import { base_url } from "../../Api/api";

export const Career = () => {
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
          className={`career-heading my-5 text-center font-extrabold text-6xl text-transform:uppercase ${
            inView ? "animate-featured" : ""
          }`}
          ref={ref}
        >
          Join the media revolution
        </h1>
        {/* <br/>
        <br/> */}
        <h2
            className={`career-heading my-5 text-center font-extrabold text-6xl text-transform:uppercase ${inView ? "animate-featured" : ""}`}
            ref={ref}>
                Explore career opportunities 
        </h2>
        </div>

      <div className="flex flex-col bg-white text-black">
      
        {/* <h2
            className={`c-main-text my-5 text-center font-extrabold text-6xl text-black text-transform:uppercase ${inView ? "animate-featured" : ""}`}
            ref={ref}>
                Explore career opportunities 
        </h2> */}
        <br/>
        <br/>
        

        <div className="list-item">
            <div className="flex justify-between items-center mb-4">
                 <div className="flex flex-col justify-start ">
                     <h1>Bussiness Analyst/Associate</h1>
                     <p className="career_content text-sm text-left ml-0 w-full">Location: New Delhi</p>
                     
                 </div>
                 <a href={`https://forms.gle/952w858GCG8J23Xs8`} className="button-red">Apply Now</a>
            </div>
        </div>

        <div className="list-item">
            <div className="flex justify-between items-center mb-4">
                 <div className="flex flex-col justify-start ">
                     <h1>Bussiness Analyst/Associate </h1>
                     <p className="career_content text-sm text-left ml-0 w-full">Location: New Delhi</p>
                    
                 </div>
                 <a href={`https://forms.gle/952w858GCG8J23Xs8`} className="button-red">Apply Now</a>
            </div>
        </div>

        <div className="list-item">
            <div className="flex justify-between items-center mb-4">
                 <div className="flex flex-col justify-start ">
                     <h1>Bussiness Analyst/Associate</h1>
                     <p className="career_content text-sm text-left ml-0 w-full">Location: New Delhi</p>
                    
                 </div>
                 <a href={`https://forms.gle/952w858GCG8J23Xs8`} className="button-red">Apply Now</a>
            </div>
        </div>

        <div className="list-item">
            <div className="flex justify-between items-center mb-4">
                 <div className="flex flex-col justify-start ">
                     <h1>Bussiness Analyst/Associate </h1>
                     <p className="career_content text-sm text-left ml-0 w-full">Location: New Delhi</p>
                    
                 </div>
                 <a href={`https://forms.gle/952w858GCG8J23Xs8${1234}`} className="button-red">Apply Now</a>
            </div>
        </div>

        <div className="list-item">
            <div className="flex justify-between items-center mb-4">
                 <div className="flex flex-col justify-start ">
                     <h1>Bussiness Analyst/Associate</h1>
                     <p className="career_content text-sm text-left ml-0 w-full">Location: New Delhi</p>
                     
                 </div>
                 <a href={`https://forms.gle/952w858GCG8J23Xs8`} className="button-red">Apply Now</a>
            </div>
        </div>

        <div className="list-item">
            <div className="flex justify-between items-center mb-4">
                 <div className="flex flex-col justify-start ">
                     <h1>Bussiness Analyst/Associate </h1>
                     <p className="career_content text-sm text-left ml-0 w-full">Location: New Delhi</p>
                     
                 </div>
                 <a href={`https://forms.gle/952w858GCG8J23Xs8`} className="button-red">Apply Now</a>
            </div>
        </div>

        <div className="list-item">
            <div className="flex justify-between items-center mb-4">
                 <div className="flex flex-col justify-start ">
                     <h1>Bussiness Analyst/Associate </h1>
                     <p className="career_content text-sm text-left ml-0 w-full">Location: New Delhi</p>
                 </div>
                 <a href={`https://forms.gle/952w858GCG8J23Xs8`} className="button-red">Apply Now</a>
            </div>
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
