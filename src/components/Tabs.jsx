import React, { useState } from "react";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex justify-around border-b border-[#545C89] mb-4">
        {React.Children.map(children, (child, index) => (
          <button
            className={`p-2 flex-1 text-center rounded-ss-md rounded-se-md ${
              activeTab === index ? "bg-[#545C89] text-white" : "text-white"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div>{children[activeTab]}</div>
    </div>
  );
};

export default Tabs;
