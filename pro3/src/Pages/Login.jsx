import { FaUser, FaLock } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
     <div className="flex items-center justify-center min-h-screen bg-sky-700">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login to Your Account
        </h2>
        <form className="space-y-4">
          {/* Email Input */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FaUser />
            </span>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-10 py-2 mt-1 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {/* Password Input */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <FaLock />
            </span>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-10 py-2 mt-1 border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-sky-700 rounded-lg hover:bg-indigo-700 focus:ring focus:ring-indigo-300"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
         <h1> Don not have an account?{' '}</h1>
          <Link
            to="/signup"
            className="text-sky-700 hover:underline"
          >
            Sign up
          </Link>
          <div className='pt-4'>  
            <Link
            to="/"
            className="px-3 py-1 bg-black text-white rounded-2xl"
          >
            Home Back   
          </Link>  </div> 
        </p>
      </div>
    </div>
  )
}

export default Login