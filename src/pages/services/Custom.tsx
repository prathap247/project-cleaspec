import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Check, Car, Clock, DollarSign, AlertCircle, Sparkles, Shield } from 'lucide-react';

const benefits = [
  "Customized service plans",
  "Specialized treatments",
  "Exotic vehicle expertise",
  "Vintage car care",
  "Show car preparation",
  "Mobile service available"
];

const specialties = [
  {
    name: "Exotic Cars",
    description: "Specialized care for high-performance and luxury vehicles",
    coverage: ["Paint protection", "Interior preservation", "Performance cleaning", "Show preparation"],
    price: "Custom Quote"
  },
  {
    name: "Classic Cars",
    description: "Gentle restoration and preservation of vintage vehicles",
    coverage: ["Period-correct cleaning", "Paint restoration", "Chrome polishing", "Interior restoration"],
    price: "Custom Quote"
  },
  {
    name: "Show Cars",
    description: "Competition-level preparation and detailing",
    coverage: ["Concours preparation", "Judge's inspection prep", "Display cleaning", "Transport protection"],
    price: "Custom Quote"
  }
];

const process = [
  {
    title: "Consultation",
    description: "Detailed discussion of your specific requirements and goals.",
    icon: Car,
    duration: "30-60 mins"
  },
  {
    title: "Assessment",
    description: "Thorough evaluation of vehicle condition and needs.",
    icon: Wrench,
    duration: "1-2 hours"
  },
  {
    title: "Custom Service",
    description: "Specialized treatment based on vehicle requirements.",
    icon: Sparkles,
    duration: "Variable"
  },
  {
    title: "Final Review",
    description: "Comprehensive inspection and client approval.",
    icon: Shield,
    duration: "30-60 mins"
  }
];

const expertise = [
  {
    name: "Exotic Vehicle Care",
    description: "Specialized treatments for high-end luxury and performance vehicles.",
    features: [
      "Carbon fiber care",
      "Alcantara cleaning",
      "Ceramic brake cleaning",
      "Performance coating"
    ],
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80"
  },
  {
    name: "Classic Car Restoration",
    description: "Gentle restoration techniques for vintage and classic automobiles.",
    features: [
      "Period-correct methods",
      "Chrome restoration",
      "Leather preservation",
      "Paint correction"
    ],
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80"
  },
  {
    name: "Show Car Preparation",
    description: "Competition-level detailing for show vehicles.",
    features: [
      "Concours detailing",
      "Engine bay perfection",
      "Undercarriage cleaning",
      "Display preparation"
    ],
    image: "https://images.unsplash.com/photo-1605515298946-d664fc6fe12e?auto=format&fit=crop&q=80"
  }
];

const Custom = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="grid-pattern min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Wrench className="w-16 h-16 text-primary mb-4 mx-auto" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 font-display">
              CUSTOM SERVICES
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Specialized automotive care tailored to your unique requirements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6 font-display">
                TAILORED TO YOUR NEEDS
              </h2>
              <div className="space-y-4 text-white/70">
                <p>
                  Our custom services are designed for vehicle owners with specific requirements 
                  that go beyond standard detailing packages. Whether you own an exotic supercar, 
                  a cherished classic, or a show car that demands perfection, we provide 
                  specialized care tailored to your unique needs.
                </p>
                <p>
                  We understand that certain vehicles require special attention, specific products, 
                  and specialized techniques. Our team has extensive experience working with a wide 
                  range of vehicles, from rare vintage automobiles to the latest hypercars, ensuring 
                  that each receives the exact care it needs.
                </p>
                <p>
                  Every custom service begins with a detailed consultation to understand your specific 
                  requirements and goals. We then develop a tailored treatment plan that addresses 
                  your vehicle's unique needs while respecting its particular characteristics and 
                  maintaining its value.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80"
                alt="Custom Detailing"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
            </motion.div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-12 text-center font-display"
            >
              KEY BENEFITS
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 bg-accent p-6 rounded-lg"
                >
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-white">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-12 text-center font-display"
            >
              OUR PROCESS
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-accent p-6 rounded-lg text-center"
                >
                  <step.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2 font-display">{step.title}</h3>
                  <p className="text-white/70 mb-4">{step.description}</p>
                  <div className="flex items-center justify-center space-x-2 text-primary">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{step.duration}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Expertise Section */}
          <div className="mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-12 text-center font-display"
            >
              OUR EXPERTISE
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {expertise.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-accent rounded-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <img
                      src={area.image}
                      alt={area.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white font-display">
                      {area.name}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-white/70 mb-4">{area.description}</p>
                    <ul className="space-y-2">
                      {area.features.map((feature) => (
                        <li key={feature} className="flex items-center space-x-2 text-white/70">
                          <Check className="w-4 h-4 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Specialties Section */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-12 text-center font-display"
            >
              SPECIALIZED SERVICES
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-6">
              {specialties.map((specialty, index) => (
                <motion.div
                  key={specialty.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-accent p-6 rounded-lg"
                >
                  <h3 className="text-2xl font-bold text-white mb-2 font-display">{specialty.name}</h3>
                  <p className="text-white/70 mb-4">{specialty.description}</p>
                  <ul className="space-y-2 mb-6">
                    {specialty.coverage.map((item) => (
                      <li key={item} className="flex items-center space-x-2 text-white/70">
                        <Check className="w-4 h-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold text-xl">{specialty.price}</span>
                    {/* <DollarSign className="w-6 h-6 text-primary" /> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Service Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 bg-black/30 p-6 rounded-lg flex items-start space-x-4"
          >
            <AlertCircle className="w-6 h-6 text-primary flex-shrink-0" />
            <div>
              <h4 className="text-white font-bold mb-2">Customized Solutions</h4>
              <p className="text-white/70">
                Every vehicle is unique, and we understand that standard packages don't always fit 
                every situation. Our custom services are flexible and can be tailored to meet your 
                specific requirements. Contact us for a personalized consultation and quote.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Custom;