
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Instagram, Clock, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    budget: '',
    message: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      project: '',
      budget: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="font-inter text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to create something amazing? I'd love to hear about your project and discuss how we can bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-inter text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block font-inter text-sm font-medium mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-inter text-sm font-medium mb-2">
                        Company/Agency
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label className="block font-inter text-sm font-medium mb-2">
                        Project Type
                      </label>
                      <Input
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        placeholder="Fashion, Beauty, Commercial, etc."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-inter text-sm font-medium mb-2">
                      Budget Range
                    </label>
                    <Input
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Budget range (optional)"
                    />
                  </div>

                  <div>
                    <label className="block font-inter text-sm font-medium mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Tell me about your project, shoot dates, location, and any other details..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-gold-500 hover:bg-gold-600 text-black font-semibold py-3 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gold-400" />
                    <div>
                      <p className="font-inter text-sm text-gray-300">Email</p>
                      <p className="font-inter">sophia@model.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold-400" />
                    <div>
                      <p className="font-inter text-sm text-gray-300">Phone</p>
                      <p className="font-inter">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gold-400" />
                    <div>
                      <p className="font-inter text-sm text-gray-300">Location</p>
                      <p className="font-inter">New York City, NY</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-gold-400" />
                    <div>
                      <p className="font-inter text-sm text-gray-300">Instagram</p>
                      <p className="font-inter">@sophiamodel</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardContent className="p-6">
                <h3 className="font-playfair text-2xl font-semibold mb-6">Booking Info</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gold-400 mt-1" />
                    <div>
                      <p className="font-inter text-sm text-gray-300">Response Time</p>
                      <p className="font-inter">Within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Camera className="w-5 h-5 text-gold-400 mt-1" />
                    <div>
                      <p className="font-inter text-sm text-gray-300">Advance Booking</p>
                      <p className="font-inter">Minimum 2 weeks preferred</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gold-500/10 border border-gold-500/20 rounded-lg">
                  <p className="font-inter text-sm text-gold-200">
                    📝 Please include shoot date, location, usage rights, and creative brief in your message.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
