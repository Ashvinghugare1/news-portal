// App.jsx
import React, { useState } from 'react';
import SideNav from './components/SideNav/SideNav';
import Navbar from './components/Navbar/Navbar';
import Notification from './components/Notification/Notification';
import Footer from './components/Footer/Footer';
import SearchHistory from './components/Setting/SearchHistory';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (

    <div className="h-screen bg-gray-100 overflow-scroll">
      <div className="flex">
        <SideNav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <div
          className={`flex flex-col w-full transition-transform duration-300 md:ml-64 ${
            isSidebarOpen ? 'translate-x-64' : 'translate-x-0'
          }`}
        >
          <Navbar />
          <Router>
            <Routes>
              <Route path="/" element={<Notification />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/search-history" element={<SearchHistory />} />
            </Routes>
          </Router>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
