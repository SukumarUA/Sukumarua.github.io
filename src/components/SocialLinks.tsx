import React from 'react';
import { socials } from '../data';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const SocialLinks: React.FC = () => {
  // Function to render the correct icon based on icon name
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github size={20} />;
      case 'Linkedin':
        return <Linkedin size={20} />;
      case 'Mail':
        return <Mail size={20} />;
      default:
        return <ExternalLink size={20} />;
    }
  };

  return (
    <div className="flex space-x-4">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
          aria-label={social.name}
        >
          {renderIcon(social.icon)}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;