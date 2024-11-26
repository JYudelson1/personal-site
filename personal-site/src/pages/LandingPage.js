import React from 'react';
import ProjectCard from '../components/ui/cards/ProjectCard';
import { Camera } from 'lucide-react';
import { getFeaturedProjects } from '../data/projects';

const NavigationBar = () => {
  return (
    <div className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl" style={{ fontFamily: 'EB Garamond' }}>Joey Yudelson</span>
          </div>
          <nav className="flex space-x-8">
            <button className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base" style={{ fontFamily: 'EB Garamond' }}>
              Projects
            </button>
            <button className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base" style={{ fontFamily: 'EB Garamond' }}>
              Quick Links
            </button>
            <button className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-base" style={{ fontFamily: 'EB Garamond' }}>
              Map View
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex gap-4 items-center">
      <a href="#" className="text-gray-600 hover:text-gray-900">
        <Camera className="w-6 h-6" />
      </a>
      <a href="#" className="text-gray-600 hover:text-gray-900">
        <Camera className="w-6 h-6" />
      </a>
      <a href="#" className="text-gray-600 hover:text-gray-900">
        <Camera className="w-6 h-6" />
      </a>
      <a href="#" className="text-blue-600 hover:text-blue-800 text-lg" style={{ fontFamily: 'EB Garamond' }}>
        View Resume →
      </a>
    </div>
  );
};

const FeaturedProjects = () => {
  const featuredProjects = getFeaturedProjects();
  
  return (
    <section>
      <h2 className="text-3xl mb-6" style={{ fontFamily: 'EB Garamond' }}>
        Featured Projects
      </h2>
      <div className="relative">
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-6" style={{ paddingRight: '20px' }}>
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FDF6E3' }}>
      <NavigationBar />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl mb-6" style={{ fontFamily: 'EB Garamond' }}>Hello! 👋</h1>
          <div className="prose max-w-none">
            <p className="text-xl mb-6 text-gray-700" style={{ fontFamily: 'EB Garamond' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <h2 className="text-3xl mb-4" style={{ fontFamily: 'EB Garamond' }}>Navigating This Site</h2>
            <p className="text-lg text-gray-700 mb-8" style={{ fontFamily: 'EB Garamond' }}>
              This website showcases my work across technical research, religious scholarship, and creative writing. You can explore my projects in three ways: as a traditional gallery, through quick links, or as an interactive map showing connections between different pieces of work.
            </p>
            
            <div className="mb-12">
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <FeaturedProjects />
      </main>
      
      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500" style={{ fontFamily: 'EB Garamond' }}>
            © 2024 Joey Yudelson. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;