
import { ArrowDown, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-6 leading-tight">
          Sophia
          <span className="block text-gold-400 text-4xl md:text-5xl font-medium mt-2">
            Professional Model
          </span>
        </h1>
        
        <p className="font-inter text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Fashion • Beauty • Editorial • Commercial
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
            onClick={scrollToGallery}
          >
            View Portfolio
          </Button>
          
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="text-white hover:text-gold-400 hover:bg-white/10">
              <Instagram className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-gold-400 hover:bg-white/10">
              <Mail className="w-6 h-6" />
            </Button>
          </div>
        </div>
        
        <div className="animate-bounce">
          <ArrowDown className="w-8 h-8 mx-auto text-gold-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
