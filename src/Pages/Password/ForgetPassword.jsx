import React from 'react'

export default function ForgetPassword() {

    const [email, setEmail] = useState("");
  const [showVerification, setShowVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const handleReset = () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    alert(`Password reset link sent to: ${email}`);
    setShowVerification(true);
  };

  const handleVerify = () => {
    if (!verificationCode) {
      alert("Please enter the verification code.");
      return;
    }
    alert("Verification successful! Redirecting to reset password page...");
    // Redirect logic or state update can go here
  };



  return (
    <div className="flex h-screen font-sans">
      {/* Left Section */}
      <div className="w-1/2 bg-blue-900 text-white flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-3xl font-bold">
          Welcome to <span className="text-orange-400">Super Admin!</span>
        </h1>
        <p className="mt-2 text-lg">Your command center for ultimate control.</p>
        <img src="/images/images (1).png" alt="Forget password" className="w-48 mt-4" />
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-white flex flex-col items-center justify-center p-8 shadow-lg">
        {!showVerification ? (
          <>
            <h2 className="text-2xl font-semibold text-gray-800">Forget Password</h2>
            <p className="text-gray-500 text-sm mt-2">Enter your registered email to receive a password reset link.</p>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-4/5 p-3 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              onClick={handleReset} 
              className="w-4/5 bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md mt-4 transition-all"
            >
              Reset Password
            </button>
            <p className="mt-4 text-sm">
              Go back to <a href="/login" className="text-blue-600 hover:underline">LOGIN</a>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-gray-800">Verification Code Sent!</h2>
            <p className="text-gray-500 text-sm mt-2">A verification code has been sent to your email for password change.</p>
            <input
              type="text"
              placeholder="Enter Verification Code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="w-4/5 p-3 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex justify-between w-4/5 mt-3 text-sm">
              <span className="text-gray-500 cursor-pointer hover:text-blue-600">Resend (30s)</span>
              <a href="/login" className="text-blue-600 hover:underline">Go back to LOGIN</a>
            </div>
            <button 
              onClick={handleVerify} 
              className="w-4/5 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md mt-4 transition-all"
            >
              Verify
            </button>
          </>
        )}
      </div>
    </div>

  )
}
