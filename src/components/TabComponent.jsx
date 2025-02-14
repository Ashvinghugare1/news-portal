// import { useState } from "react";
// import Faq from "./SettingComponents/Faq";

// const FAQ = () => (<Faq/>);
// const Terms = () => <div className="p-4">These are the Terms and Conditions.</div>;
// const General = () => <div className="p-4">This is the General information section.</div>;

// const TabComponent = () => {
//   const [activeTab, setActiveTab] = useState("FAQ");

//   const renderContent = () => {
//     switch (activeTab) {
//       case "FAQ":
//         return <FAQ />;
//       case "Terms":
//         return <Terms />;
//       case "General":
//         return <General />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="mx-auto mt-10 rounded-lg ">
//       <div className="flex bg-gray-100 p-2 rounded-t-lg w-[100%] ">
//         {["General","FAQ","Terms"].map((tab) => (
//           <button
//             key={tab}
//             className={`flex w-[100%] p-2 justify-center text-center rounded-md transition-all duration-200 ${
//               activeTab === tab
//                 ? "text-blue-500"
//                 : "text-gray-700"
//             }`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>
//       <div className="bg-white p-4">{renderContent()}</div>
//     </div>
//   );
// };

// export default TabComponent;



import { useState } from "react";
import Faq from "./SettingComponents/Faq";

const FAQ = () => (<Faq/>);
const Terms = () => <div className="p-4">These are the Terms and Conditions.</div>;
const General = () => <div className="p-4">This is the General information section.</div>;

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("FAQ");

  const renderContent = () => {
    switch (activeTab) {
      case "FAQ":
        return <FAQ />;
      case "Terms":
        return <Terms />;
      case "General":
        return <General />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto mt-10 rounded-lg ">
      <div className="flex bg-gray-100 p-2 rounded-t-lg w-[100%] ">
        {["General","FAQ","Terms"].map((tab) => (
          <button
            key={tab}
            className={`flex w-[100%] p-2 justify-center text-center rounded-md transition-all duration-200 ${
              activeTab === tab ? "text-blue-500" : "text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-white p-4">{renderContent()}</div>
    </div>
  );
};

export default TabComponent;
