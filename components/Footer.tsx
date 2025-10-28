import React from 'react';

interface FooterProps {
  content: {
    social_title: string;
    rights_reserved: string;
  };
}

const SocialIcon: React.FC<{ href: string; 'aria-label': string; children: React.ReactNode }> = ({ href, 'aria-label': ariaLabel, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-500 transition-colors" aria-label={ariaLabel}>
    {children}
  </a>
);

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6 text-center text-slate-400">
        <h4 className="text-xl font-bold mb-4">{content.social_title}</h4>
        <div className="flex justify-center items-center gap-x-4 sm:gap-x-6 mb-6">
          <SocialIcon href="https://www.instagram.com/chefeyad.jeddah/" aria-label="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.585.069-4.85c.149-3.225 1.664 4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
            </svg>
          </SocialIcon>
          
          <span className="text-slate-600">|</span>
          
          <SocialIcon href="https://www.tiktok.com/@chefeyadjeddah" aria-label="TikTok">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 448 512">
                <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.25V349.4a162.6 162.6 0 1 1 -185-185V288a16.1 16.1 0 0 1 16 16v128a128 128 0 0 0 256 0V160a16.1 16.1 0 0 1 16-16h32a16.1 16.1 0 0 1 16 16v50.9z"/>
            </svg>
          </SocialIcon>
          
          <span className="text-slate-600">|</span>

          <SocialIcon href="https://api.whatsapp.com/send?phone=9660552218833" aria-label="WhatsApp">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.287.468-1.171 4.254 4.379-1.142.446.273zM8.228 9.333c-.341-.532-.672-.544-.946-.554-.265-.009-.556-.009-.847.009-.299.02-1.218.232-1.218 1.232 0 1 .494 2.312 1.218 3.312 1.312 1.002 2.768 2.014 4.882 2.014 1.282 0 2.25-.494 2.25-1.218s-1.218-1.72-1.72-1.952c-.5-.232-1.002-.232-1.218.232-.208.468-.494.702-.702.936-.208.232-.494.232-.702.009-.468-.494-1.218-1.218-2.21-2.21s-1.488-2.21-1.72-2.712z"/>
            </svg>
          </SocialIcon>
          
          <span className="text-slate-600">|</span>

          <SocialIcon href="https://maps.app.goo.gl/1QDtKfx4cCRrVsq79" aria-label="Google Maps">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </SocialIcon>
        </div>
        <p className="text-sm">{content.rights_reserved}</p>
      </div>
    </footer>
  );
};

export default Footer;
