import { Palette, Code, Zap, Globe } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Crafting distinctive visual identities that resonate with your audience and stand the test of time.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building performant, scalable web applications with cutting-edge technologies and clean code.",
  },
  {
    icon: Zap,
    title: "Digital Strategy",
    description: "Developing comprehensive digital strategies that drive growth and maximize your market impact.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Expanding your digital presence across borders with localized, culturally-aware solutions.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(0_0%_8%)_0%,transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">What We Do</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Services That <span className="text-gradient">Transform</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From concept to launch, we provide end-to-end solutions that elevate your brand and captivate your audience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
