import { useState } from "react";
import ProjectImage1 from "../assets/project-img1.png";
import ProjectImage2 from "../assets/project-img2.png";
import ProjectImage3 from "../assets/project-img3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsTab1 = [
    {
      title: "Travel The World",
      description:
        "You're welcome! 😊 I'm glad it worked for you. If you have any more questions or want to enhance it further, feel free to ask. Happy coding ",
        imgUrls: [ProjectImage1, ProjectImage2, ProjectImage3],
      url: "https://google.com",
    },
    {
      title: "Let's Do It Together",
      description: "Collaboration App",
      imgUrls: [ProjectImage1, ProjectImage2, ProjectImage3],
      url: "https://google.com",
    },
    {
      title: "Boost Your Startup",
      description: "Business Page",
      imgUrls: [ProjectImage1, ProjectImage2, ProjectImage3],
      url: "https://google.com",
    },
  ];

  const projectsTab2 = [
    {
      title: "E-Commerce App",
      description: "Online Store",
      imgUrls: [ProjectImage1, ProjectImage2, ProjectImage3],
      url: "https://google.com",
    },
    {
      title: "Recipe Finder",
      description: "Cooking Helper App",
      imgUrls: [ProjectImage1, ProjectImage2, ProjectImage3],
      url: "https://google.com",
    },
    {
      title: "Social Network",
      description: "Community App",
      imgUrls: [ProjectImage1, ProjectImage2, ProjectImage3],
      url: "https://google.com",
    },
  ];

  const projectsTab3 = [
    {
      title: "Fitness Tracker",
      description: "Health & Wellness App",
      imgUrl: ProjectImage3,
    },
    {
      title: "Personal Portfolio",
      description: "Showcase Website",
      imgUrl: ProjectImage1,
    },
    {
      title: "Event Planner",
      description: "Event Management App",
      imgUrl: ProjectImage2,
    },
  ];

  const getProjectsForActiveTab = () => {
    switch (activeTab) {
      case 1:
        return projectsTab1;
      case 2:
        return projectsTab2;
      case 3:
        return projectsTab3;
      default:
        return projectsTab1;
    }
  };

  const projects = getProjectsForActiveTab();

  const closePopup = () => setSelectedProject(null);

  return (
    <div className="bg-gray-900 text-white py-28">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">Projects</h2>
        <p className="text-gray-400 mt-2">
          Explore some of the projects I’ve worked on across different areas.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        {["Tab 1", "Tab 2", "Tab 3"].map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index + 1)}
            className={`px-6 py-2 mx-2 text-sm font-medium rounded-lg transition ${
              activeTab === index + 1
                ? "bg-purple-600 text-white"
                : "bg-gray-700 hover:bg-purple-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-24 mb-5 md:px-10">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-[0_4px_15px_rgba(255,255,255,0.6)] cursor-pointer"
          >
            <img
               src={project.imgUrls ? project.imgUrls[0] : project.imgUrl}
              alt={project.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
              {/* <p className="text-gray-400">{project.description}</p> */}
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 rounded-lg p-6 max-w-lg w-full">
            <button
              onClick={closePopup}
              className="text-gray-400 hover:text-gray-300 absolute top-4 right-4 text-2xl font-bold"
            >
              ×
            </button>
            <Swiper
              navigation
              pagination={{ clickable: true }}
              spaceBetween={10}
              slidesPerView={1}
            >
              {selectedProject.imgUrls.map((imgUrl, idx) => (
                <SwiperSlide key={idx}>
                  <img src={imgUrl} alt={`Slide ${idx}`} />
                </SwiperSlide>
              ))}
            </Swiper>
            <h4 className="text-2xl font-semibold mb-2">
              {selectedProject.title}
            </h4>
            <p className="text-gray-400">{selectedProject.description}</p>
            {selectedProject.url && (
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-500 hover:underline"
              >
                Visit Project
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
