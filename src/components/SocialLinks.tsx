import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { SocialLink } from '../types';

interface SocialLinksProps {
  socialLinks: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ socialLinks }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github size={24} />;
      case 'Linkedin':
        return <Linkedin size={24} />;
      case 'Mail':
        return <Mail size={24} />;
      default:
        return <ExternalLink size={24} />;
    }
  };

  const getHoverColor = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return 'hover:bg-gray-900';
      case 'Linkedin':
        return 'hover:bg-blue-600';
      case 'Mail':
        return 'hover:bg-red-600';
      default:
        return 'hover:bg-blue-600';
    }
  };

  return (
    <div className="flex justify-center lg:justify-start space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 rounded-full bg-gray-100 text-gray-600 hover:text-white transition-all duration-200 transform hover:scale-110 ${getHoverColor(link.icon)}`}
          aria-label={link.name}
        >
          {getIcon(link.icon)}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;