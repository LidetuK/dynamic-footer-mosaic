import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

const Footer = () => {
  const [activeTab, setActiveTab] = useState<'facebook'>('facebook'); // Remove 'twitter'

  return (
    <footer className="w-full bg-[#0f1117] text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Social Media Feeds Column */}
          <div className="md:col-span-7 space-y-8">
            {/* Social Media Tabs */}
            <div className="flex gap-4 mb-4">
              <button 
                className={`flex items-center gap-2 px-6 py-2 rounded-lg transition-colors ${
                  activeTab === 'facebook' ? 'bg-blue-600 text-white' : 'bg-[#1e2029] text-gray-400 hover:bg-[#2a2b36]'
                }`}
                onClick={() => setActiveTab('facebook')}
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </button>
            </div>

            <div className="bg-[#1e2029] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">
                {activeTab === 'facebook' ? 'Latest Facebook Posts' : 'Latest Tweets'}
              </h3>
              <ScrollArea className="h-[500px]">
                {activeTab === 'facebook' ? (
                  <div className="space-y-4 animate-slide-in-right">
                    <iframe 
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fprofile.php%3Fid%3D61573019588483&tabs=timeline&width=400&height=500&small_header=true&adapt_container_width=true&hide_cover=false" 
                      width="100%" 
                      height="500" 
                      style={{ border: 'none', overflow: 'hidden' }} 
                      scrolling="no" 
                      frameBorder="0" 
                      allowFullScreen={true} 
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    />
                  </div>
                ) : (
                  <div className="space-y-4 animate-slide-in-right">
                    <iframe
                      id="twitter-widget-0"
                      scrolling="no"
                      frameBorder="0"
                      allowTransparency={true}
                      allowFullScreen={true}
                      className="w-full h-[500px]"
                      src="https://platform.twitter.com/embed/Timeline.html?dnt=false&embedId=twitter-widget-0&frame=false&hideCard=false&hideThread=false&id=somaliabuletin&lang=en&theme=dark&widgetsVersion=2615f7e52b7e0%3A1702314776716"
                    ></iframe>
                  </div>
                )}
              </ScrollArea>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-5 space-y-8">
            {/* Logo */}
            <div className="w-48 h-48 mx-auto relative">
              <img
                src="/lovable-uploads/output-onlinepngtools (78).png"
                alt="Somalia Bulletin Logo"
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Stay Updated Section */}
            <div className="bg-[#1e2029] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-[#0f1117] border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center space-x-6">
              <a href="https://web.facebook.com/profile.php?id=61573019588483" target="_blank" rel="noopener noreferrer" className="bg-[#1e2029] p-3 rounded-full transform transition-all duration-300 hover:scale-110 hover:text-blue-400">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/somaliabuletin" target="_blank" rel="noopener noreferrer" className="bg-[#1e2029] p-3 rounded-full transform transition-all duration-300 hover:scale-110 hover:text-blue-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://x.com/somaliabuletin" target="_blank" rel="noopener noreferrer" className="bg-[#1e2029] p-3 rounded-full transform transition-all duration-300 hover:scale-110 hover:text-blue-400">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@somaliaBulletin" target="_blank" rel="noopener noreferrer" className="bg-[#1e2029] p-3 rounded-full transform transition-all duration-300 hover:scale-110 hover:text-blue-400">
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-gray-400">
              <p>© Copyright East Africa Bulletin {new Date().getFullYear()}.</p>
              <p>Designed and Developed by{' '}
                <a href="https://godigitalafrica.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
                  Go Digital Africa
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
