import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
function Header() {
    const [role, setRole] = useState(null);
    const user=role;
    const navigate=useNavigate();
    return (
        <>
           
           <header className="bg-primary text-primary-foreground flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <img
            src=".\src\components\logo.png" // Replace with your logo path
            alt="Logo"
            className="h-8 w-8" // Adjust size as needed
          />
          <a className="flex items-center gap-2" onClick={() => navigate('/home')}>
            
            <span className="text-xl font-bold">
              Complaint Care {user && <span className="pl-8">{user}</span>}
            </span>
          </a>
        </div>

                <div className="flex items-center gap-2">
                    
                <button onClick={() => { navigate("/Register") }} className="bg-blue-600 text-white border border-blue-700 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 hover:bg-blue-500 hover:underline hover:underline-offset-4 hover:decoration-blue-300 disabled:pointer-events-none disabled:opacity-50">Register
</button>

<button onClick={() => { navigate("/login") }} className="bg-purple-600 text-white border border-pink-700 inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md px-5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 hover:bg-purple-500 hover:underline hover:underline-offset-4 hover:decoration-pink-300 disabled:pointer-events-none disabled:opacity-50">
  Login
</button>


                </div>
                
            </header>
            
        </>
    )
}

export default Header
