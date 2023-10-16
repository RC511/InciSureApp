import Userfront from "@userfront/core";
import "./ChangePass.css";

// Userfront.sendResetLink("kathysophia1@gmail.com")

export default function ChangePass() 
   {
    let handleSubmit = async (e) => {
      e.preventDefault();

      // const data = {
      //   token: this.token,
      //   password: this.password,
      //   password_confirm : this.password_confirm,
      // }
     };
    

    return(
      <div className="ChangePass-body">
        <div className="ChangePass-content">
          <div className="Title "> Reset Your Password</div>
          

          
          <form className="ChangePass-form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            
            <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2 text-left" for="token">Token</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="token" type="text" placeholder="Token" onChange={e => this.token = e.target.value}/>
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2 text-left" for="newPass">New Password</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="newPass" type="password" placeholder="New Password" onChange={e => this.password = e.target.value}/>
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2 text-left" for="confirmPass">Confirm New Password</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirmPass" type="password" placeholder="Confirm Password" onChange={e => this.password_confirm = e.target.value}/>
            </div>

            <div className="flex items-center justify-center mt-6">
              <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:shadow-outline text-center" type="button">
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
