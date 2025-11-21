import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Phone, Mail } from "lucide-react";

const SocialMedia = () => {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "#", color: "hover:text-blue-600" },
    { name: "Instagram", icon: Instagram, url: "#", color: "hover:text-pink-600" },
    { name: "LinkedIn", icon: Linkedin, url: "#", color: "hover:text-blue-700" },
    { name: "Twitter", icon: Twitter, url: "#", color: "hover:text-blue-400" },
    { name: "YouTube", icon: Youtube, url: "#", color: "hover:text-red-600" },
  ];

  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <Button
            key={social.name}
            variant="ghost"
            size="icon"
            className={`rounded-full ${social.color} transition-all duration-300 hover:scale-110`}
            asChild
          >
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <Icon className="w-5 h-5" />
            </a>
          </Button>
        );
      })}
      <div className="w-px h-6 bg-border mx-2"></div>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full hover:text-green-600 transition-all duration-300 hover:scale-110"
        asChild
      >
        <a href="https://wa.me/27619065523" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <Phone className="w-5 h-5" />
        </a>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full hover:text-primary transition-all duration-300 hover:scale-110"
        asChild
      >
        <a href="mailto:chservicesfire@telkomsa.net" aria-label="Email">
          <Mail className="w-5 h-5" />
        </a>
      </Button>
    </div>
  );
};

export default SocialMedia;


