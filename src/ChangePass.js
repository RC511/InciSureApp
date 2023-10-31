import Userfront from "@userfront/core";
import "./ChangePass.css";
import { useState } from "react";
import { getAuth, confirmPasswordReset } from "firebase/auth";
import app from "./firebase";
import { useNavigate } from "react-router-dom";

// Userfront.sendResetLink("kathysophia1@gmail.com")



export default function ChangePass({oobCode}) 
   {
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const auth = getAuth(app);
    const navigate = useNavigate();

    let handleSubmit = async (e) => {
      e.preventDefault();
      if (password === confirmPassword)
      {
        confirmPasswordReset(auth, oobCode, password)
        .then(res => {
          alert("Password changed!");
          navigate("/");
        })
        .catch(err => {alert(err);})
      }
      else
        alert("Passwords do not match!");
     };
    
    if (!oobCode)
    {
      alert("no oobcode detected");
      navigate("/");
    }

    return(
      <div className="ChangePass-body">
        <div className="ChangePass-content">
          <div className="Title "> Reset Your Password</div>
          

          
          <form className="ChangePass-form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            

            <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2 text-left" for="newPass">New Password</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="newPass" type="password" placeholder="New Password" onChange={e => setPassword(e.target.value)}/>
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2 text-left" for="confirmPass">Confirm New Password</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirmPass" type="password" placeholder="Confirm Password" onChange={e => setConfirmPassword(e.target.value)}/>
            </div>

            <div className="flex items-center justify-center mt-6">
              <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:shadow-outline text-center" type="submit">
                Submit
              </button>

            </div>


        </form>
      
        </div>
        
      </div>
    )

}

// export default class ChangePass extends Component {
//   render() {
//     return(
//       <form onSubmit={this.handleSubmit}>
//         </form>
//     )
//   }
// }
