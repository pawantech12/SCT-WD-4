import React, { useState } from "react";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex border-b">
        {React.Children.map(children, (child, index) => (
          <button
            className={`p-2 ${
              activeTab === index ? "border-b-2 border-blue-500" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="">{children[activeTab]}</div>
    </div>
  );
};

export default Tabs;
