import Image from "next/image";
import {signIn} from "next-auth/client"

function Login() {
  return (
    <div className="grid place-items-center mt-20">
      <Image className="mt-20"
      src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-1024.png" 
      width={300} 
      height={300} 
      objectFit="contain"
      />
      <h1 onClick={signIn} className="mt-20 p-5 bg-blue-500 rounded-full shadow-md hover:bg-blue-700 cursor-pointer text-white font-bold text-center">Login with Facebook</h1>
    </div>
  )
}

export default Login
