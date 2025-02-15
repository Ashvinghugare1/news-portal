// App.jsx
import React, { useState } from "react";
import Dashboard from "./Pages/Dashboard/Dashboard";
import SideNav from "./components/SideNav/SideNav";
import Navbar from "./components/Navbar/Navbar";
import Notification from "./Pages/Notification/Notification";
import Footer from "./components/Footer/Footer";
import SearchHistory from "./Pages/Setting/SearchHistory";
import TermsAndServices from "./Pages/Setting/TermsAndService";
import Profile from "./Pages/Profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManageVideo from "./Pages/Management/ManageVideo";
import ManageArticle from "./Pages/Management/ManageArticle";
import ManageHeadline from "./Pages/Management/ManageHeadline";
import PostNewHeadline from "./Pages/New/PostNewHeadline";
import PostNewArticle from "./Pages/New/PostNewArticle";
import PostVideo from "./Pages/New/PostVideo";
import Faq from "./Pages/Setting/faq";

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
            isSidebarOpen ? "translate-x-64" : "translate-x-0"
          }`}
        >
          <Navbar />
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/post-new-headline" element={<PostNewHeadline />} />
              <Route path="/post-new-article" element={<PostNewArticle />} />
              <Route path="/post-video" element={<PostVideo />} />
              <Route path="/manage-headline" element={<ManageHeadline />} />
              <Route path="/manage-article" element={<ManageArticle />} />
              <Route path="/manage-video" element={<ManageVideo />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/search-history" element={<SearchHistory />} />
              <Route path="/terms-services" element={<TermsAndServices />} />
              <Route path="/faq" element={<Faq />} />
              
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Router>
          <Footer className="w-full fixed bottom-0" />
        </div>
      </div>
    </div>
  );
}

export default App;
