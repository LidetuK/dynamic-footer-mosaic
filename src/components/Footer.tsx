
import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Social Media Feeds Column */}
          <div className="md:col-span-7 space-y-8">
            {/* Social Media Tabs */}
            <div className="flex gap-4 mb-4">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Facebook className="w-5 h-5" />
                Facebook
              </button>
              <button className="flex items-center gap-2 bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors">
                <Twitter className="w-5 h-5" />
                Twitter
              </button>
            </div>

            <div className="bg-[#1a1b1e] rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">Latest Facebook Posts</h3>
              <ScrollArea className="h-[400px]">
                <div className="space-y-4">
                  <iframe 
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2Fprofile.php%3Fid%3D61573019588483&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false" 
                    width="100%" 
                    height="500" 
                    style={{ border: 'none', overflow: 'hidden' }} 
                    scrolling="no" 
                    frameBorder="0" 
                    allowFullScreen={true} 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    className="animate-slide-in-right"
                  />
                </div>
              </ScrollArea>
            </div>
          </div>

          {/* Logo and Social Links Column */}
          <div className="md:col-span-5 flex flex-col items-center justify-between space-y-8">
            <div className="w-48 h-48 relative">
              <img
                src="/lovable-uploads/92a760e1-f72f-4fbe-9e0c-cf49ab547bad.png"
                alt="Somalia Bulletin Logo"
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transform transition-all duration-300 hover:scale-110 hover:text-blue-400">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transform transition-all duration-300 hover:scale-110 hover:text-blue-400">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transform transition-all duration-300 hover:scale-110 hover:text-blue-400">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="transform transition-all duration-300 hover:scale-110 hover:text-blue-400">
                <Youtube className="w-6 h-6" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-gray-400">
              <p>© Copyright Somalia Bulletin {new Date().getFullYear()}.</p>
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
