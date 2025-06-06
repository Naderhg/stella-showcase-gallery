
import { Award, Camera, Heart, Star } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Camera, label: "Photoshoots", value: "200+" },
    { icon: Star, label: "Magazine Features", value: "15+" },
    { icon: Award, label: "Awards", value: "8" },
    { icon: Heart, label: "Happy Clients", value: "150+" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              About Sophia
            </h2>
            
            <div className="space-y-6 font-inter text-lg text-gray-700 leading-relaxed">
              <p>
                With over 5 years of experience in the modeling industry, I've had the privilege 
                of working with renowned photographers, designers, and brands across fashion, 
                beauty, and commercial sectors.
              </p>
              
              <p>
                My passion lies in bringing creative visions to life through authentic expression 
                and professional dedication. I specialize in high-fashion editorial work, beauty 
                campaigns, and commercial photography that tells compelling stories.
              </p>
              
              <p>
                Based in New York City, I'm available for shoots worldwide and always excited 
                to collaborate on new and innovative projects that push creative boundaries.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-4">
                  Measurements
                </h3>
                <div className="space-y-2 font-inter text-gray-600">
                  <p>Height: 5'9" (175cm)</p>
                  <p>Bust: 34" (86cm)</p>
                  <p>Waist: 24" (61cm)</p>
                  <p>Hips: 35" (89cm)</p>
                  <p>Dress Size: 4 US</p>
                  <p>Shoe Size: 8.5 US</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-4">
                  Details
                </h3>
                <div className="space-y-2 font-inter text-gray-600">
                  <p>Hair: Blonde</p>
                  <p>Eyes: Blue</p>
                  <p>Ethnicity: Caucasian</p>
                  <p>Age Range: 20-25</p>
                  <p>Languages: English, French</p>
                  <p>Location: New York, NY</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-scale-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Sophia professional portrait"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold-500 text-black p-6 rounded-lg shadow-lg">
                <p className="font-playfair text-2xl font-bold">5+</p>
                <p className="font-inter text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold-100 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-gold-600" />
              </div>
              <p className="font-playfair text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </p>
              <p className="font-inter text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
