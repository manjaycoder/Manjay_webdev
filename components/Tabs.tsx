import { useState } from "react";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { SiCoursera } from "react-icons/si";
import Card from "./Card";
import About from "./About";
import Contact from "../components/Contact";

const tabs = [
    
  {
    id: "home",
    icon: <FaHome />,
    label: "Home",
    content: (
      <div className="flex flex-wrap gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="How to Encrypt PDF Files Using Python | Secure Your Documents!"
            description="This is a cool-looking card component using React and Tailwind CSS."
            image="https://i.ytimg.com/an_webp/SaJhhakMpnU/mqdefault_6s.webp?du=3000&sqp=CPX18r8G&rs=AOn4CLCL1q1PDiQUBfBK_hXXQfnRI15_1Q"
          />
        ))}
      </div>
    ),
  },
  {
    id: "about",
    icon: <FaInfoCircle />,
    label: "About",
    content: <About />,
  },
  {
    id: "projects",
    icon: <GoProjectSymlink />,
    label: "Projects",
    content: (
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Bazaar Pro"
            description="NextMerce is an e-commerce boilerplate template built with Next.js 14. It has powerful integrations and functionality"
            image="https://cdn.sanity.io/images/hvisvj7q/production/1b305e5f9621081221640d792bd8bf013a583272-2160x1215.png"
          />
        ))}
      </div>
    ),
  },
  {
    id: "courses",
    icon: <SiCoursera />,
    label: "Courses",
    content: (
      <div className="flex flex-wrap gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Next.js 15 & React - The Complete Guide"
            description="Learn NextJS 15 from the ground up and build fullstack ReactJS + NextJS apps with the App Router or Pages Router!"
            image="https://img-c.udemycdn.com/course/480x270/3873464_403c_3.jpg"
          />
        ))}
      </div>
    ),
  },
  {
    id: "contact",
    icon: <FaPhone />,
    label: "Contact",
    content: <Contact />,
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className="pr-10 p-4 mt-[3rem]">
      {/* Tabs Nav */}
      <div className="flex border-b border-gray-200 ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex  items-center justify-center gap-2 py-2 px-4 pl-20 whitespace-nowrap font-medium text-sm transition-all ${
              activeTab === tab.id
                ? "border-b-2 border-blue-500 text-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-4 p-4 overflow-auto max-h-[80vh]">
        {activeContent}
      </div>
    </div>
  );
};

export default Tabs;
