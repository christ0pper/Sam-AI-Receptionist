import { useState } from "react";
import { Menu, X } from "lucide-react";

interface MobileNavProps {
  currentPage?: "home" | "demo";
}

export default function MobileNav({ currentPage = "home" }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { 
      href: currentPage === "demo" ? "/" : "#home", 
      label: "Home" 
    },
    { 
      href: currentPage === "demo" ? "/#about" : "#about", 
      label: "About" 
    },
    { 
      href: currentPage === "demo" ? "/#services" : "#services", 
      label: "Services" 
    },
    { 
      href: currentPage === "demo" ? "/demo" : "/demo", 
      label: "Demo" 
    },
    { 
      href: currentPage === "demo" ? "/#contact" : "#contact", 
      label: "Contact" 
    },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-700" />
        ) : (
          <Menu className="w-6 h-6 text-gray-700" />
        )}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div className={`
        fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex justify-between items-center p-6 border-b">
          <div
            className="w-16 h-12 bg-primary rounded-lg flex items-center justify-center"
            style={{
              backgroundImage: "url(/logo.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close mobile menu"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        
        <nav className="px-6 py-8">
          <div className="space-y-6">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg text-gray-700 hover:text-primary font-work-sans font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t">
            <a
              href={currentPage === "demo" ? "/#contact" : "#contact"}
              onClick={() => setIsOpen(false)}
              className="block w-full bg-primary hover:bg-primary/90 text-white font-work-sans font-semibold px-6 py-3 rounded-lg text-center transition-colors duration-200"
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}