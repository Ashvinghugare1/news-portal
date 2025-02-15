import React from 'react'

export default function TermsAndService() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="container mx-auto py-4 px-5 flex items-center justify-between">
          {/* Search Bar */}
          <div className="flex items-center">
            <input
              type="search"
              placeholder="Search"
              className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a1.5 1.5 0 012.018.637l.75 1.5a1.5 1.5 0 01-2.018 2.363L15.61 14.19a1.5 1.5 0 01-2.018-.637l-.75-1.5a1.5 1.5 0 012.018-2.363l.75.75zm-7.5 0a1.5 1.5 0 012.018.637l.75 1.5a1.5 0 01-2.018 2.363L8.11 14.19a1.5 1.5 0 01-2.018-.637l-.75-1.5a1.5 1.5 0 012.018-2.363l.75.75z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.547 9.547a.75.75 0 00-1.06 1.06l3.217 3.217H9.75a.75.75 0 000 1.5h2.25a.75.75 0 000-1.5H10.827l3.217-3.217a.75.75 0 00-1.06-1.06l-2.5 2.5a.75.75 0 000 1.06l2.5 2.5a.75.75 0 101.06-1.06l-3.217-3.217H14.25a.75.75 0 000-1.5H12a.75.75 0 000 1.5h1.173l-3.217 3.217a.75.75 0 001.06 1.06l2.5-2.5a.75.75 0 000-1.06l-2.5-2.5z"
                clipRule="evenodd"
              />
            </svg>
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf49a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User Avatar"
              className="rounded-full w-8 h-8"
            />
          </div>
        </div>
      </header>

      <div className="container mx-auto mt-8 p-5 bg-white shadow-md rounded-md">
        {/* Settings Title */}
        <h1 className="text-2xl font-semibold text-gray-700 mb-5">Settings</h1>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-4">
            <a
              href="#"
              className="py-4 px-1 text-gray-500 hover:text-blue-500 focus:outline-none border-b-2 border-transparent hover:border-blue-500 font-medium text-sm"
            >
              General
            </a>
            <a
              href="#"
              className="py-4 px-1 text-gray-500 hover:text-blue-500 focus:outline-none border-b-2 border-transparent hover:border-blue-500 font-medium text-sm"
            >
              FAQ
            </a>
            <a
              href="#"
              className="py-4 px-1 text-blue-500 focus:outline-none border-b-2 border-blue-500 font-medium text-sm"
            >
              Terms & Services
            </a>
          </nav>
        </div>

        {/* Terms & Services Content */}
        <div className="mt-6 text-gray-600">
          <ol className="list-decimal pl-5 space-y-4">
            <li>
              <p className="font-semibold">Introduction</p>
              <p>
                By accessing the Super Admin Panel, you agree to comply with these Terms & Services. This panel is
                for authorized personnel only and is used to manage the news portal's content, users, and system
                settings.
              </p>
            </li>
            <li>
              <p className="font-semibold">Admin Responsibilities</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Ensure all published news content is accurate, ethical, and legally compliant.</li>
                <li>Manage user accounts, including journalists, editors, and subscribers.</li>
                <li>Maintain platform security, prevent unauthorized access, and report any breaches.</li>
                <li>Monitor and manage advertisements in a transparent manner.</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Content & Copyright Policies</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>All news articles, images, and videos must comply with copyright laws.</li>
                <li>Plagiarism and the spread of misinformation are strictly prohibited.</li>
                <li>Proper attribution is required when using third-party content.</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Data Usage & Privacy</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Super Admins must handle user data responsibly and comply with data protection laws (e.g., GDPR,
                  CCPA).
                </li>
                <li>Personal user data cannot be shared, sold, or misused.</li>
                <li>Audit logs will be maintained to track all admin activities for transparency.</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Security & Compliance</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Super Admins must handle user data responsibly and comply with data protection laws (e.g., GDPR,
                  CCPA).
                </li>
                <li>Personal user data cannot be shared, sold, or misused.</li>
                <li>Audit logs will be maintained to track all admin activities for transparency.</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Account Suspension & Termination</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Misuse of admin privileges will result in account suspension or termination.</li>
                <li>Any attempt to manipulate or exploit the platform is strictly prohibited.</li>
                <li>Security violations, hacking attempts, or policy breaches will lead to immediate removal.</li>
              </ul>
            </li>
            <li>
              <p className="font-semibold">Agreement & Acceptance</p>
              <p>
                By accessing the Super Admin Panel, you acknowledge that you have read, understood, and agree to abide
                by these Terms & Services. Failure to comply may result in loss of access or legal action.
              </p>
            </li>
          </ol>
        </div>

        {/* Change Terms & Services Button */}
        <div className="mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Change Terms & Services
          </button>
        </div>
      </div>

      
    </div>
  )
}
