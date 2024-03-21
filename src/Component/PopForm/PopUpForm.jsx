import { VscChromeClose } from "react-icons/vsc";

export const PopupForm = ({onClose}) => {

//   const [err, setErr] = useState(false);
//   const [brandname, setbrandname] = useState("");
//   const [email, setemail] = useState("");
  

//   async function handlepop(e) {
//     e.preventDefault();
//     console.log(brandname);
//     console.log(email);

//     const data = {
//       brandname: brandname,
//       email: email,
//     };

//     axios.post(`${base_url}/popup`, data)
//       .then((result) => {
//         console.log(" popup submit Sucessful" , result);
//         setErr(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setErr(true);
//       })
      
//   }

  return (
    <div className="popmodel fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex py-12 justify-center items-center">
          <div className="popup bg-white p-4 w-1/2 rounded-lg"> 
        <div className="flex flex-col float-right">  
            <div className="cursor-pointer" onClick={onClose}>          
                <VscChromeClose />
            </div>    
        </div>
        <div className="flex flex-col justify-center items-center">
            <img
              className="w-16"
              src="/Image/pop_logo.png"
            />
        </div>
        <div className="form-title text-center p-4">
          <h1 className="pop_heading text-black">BE THE FIRST TO KNOW</h1>
          <p className="pop_content text-gray-500">
            Stay up with the marketing trends Subtitle.
            </p><p className="pop_content text-gray-500">Sign up for Alpha Zeal
            emails to be the first to see inspiring content, news and exclusive
            offers
          </p>
        </div>
        <div className="form-section p-8">
          <form>
            <label className="pop_label">Email Address</label>
            <input
              type="text"
              className="pop_label w-full p-4 shadow-md"
            //   onChange={(e) => setemail(e.target.value)}
              placeholder="Email Address"
              required
            ></input>
            <label className=" pop_label mt-4">Brand Name</label>
            <input
              type="text"
              className="pop_label w-full p-4 shadow-md"
            //   onChange={(e) => setbrandname(e.target.value)}
              placeholder="Brand Name"
              required
            ></input>
            <button
              type="submit"
              className="pop_button w-full p-2 mt-8 bg-black text-white rounded-md"
            >
              Notify Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};