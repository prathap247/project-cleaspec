import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    car: 'BMW 5 Series',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80',
    content: 'Exceptional service by Clean Spec! The ceramic coating on my BMW looks stunning. Their attention to detail and professionalism is remarkable. Highly recommended for luxury car owners.'
  },
  {
    name: 'Priya Sundaram',
    car: 'Mercedes-Benz GLC',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    content: 'Outstanding paint protection film installation! The team at Clean Spec is highly skilled and professional. My Mercedes looks better than when it left the showroom.'
  },
  {
    name: 'Karthik Raman',
    car: 'Audi Q7',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80',
    content: 'The graphene coating service at Clean Spec is top-notch. Their expertise and commitment to quality are evident in the final result. My Audi has never looked better!'
  }
];

const instagramPhotos = [
  {
    url: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&q=80',
    description: 'Porsche GT3 RS Paint Protection'
  },
  {
    url: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&q=80',
    description: 'Mercedes AMG Ceramic Coating'
  },
  {
    url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80',
    description: 'BMW M4 Full Detail'
  },
  {
    url: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&q=80',
    description: 'Audi RS6 Graphene Coating'
  },
  {
    url: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80',
    description: 'Lamborghini Paint Correction'
  },
  {
    url: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80',
    description: 'Ferrari Interior Detail'
  }
];

const InstagramShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Auto-scrolling effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !isAutoScrolling || isDragging) return;

    let animationFrameId: number;
    let startTime: number;
    const duration = 60000; // 30 seconds for one complete cycle
    const totalWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = (elapsed % duration) / duration;
      
      if (scrollContainer && isAutoScrolling && !isDragging) {
        scrollContainer.scrollLeft = progress * totalWidth;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isAutoScrolling, isDragging]);

  // Mouse event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsAutoScrolling(false);
    setStartX(e.pageX - scrollRef.current!.offsetLeft);
    setScrollLeft(scrollRef.current!.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => setIsAutoScrolling(true), 1000); // Resume auto-scroll after 2 seconds
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsAutoScrolling(false);
    setStartX(e.touches[0].pageX - scrollRef.current!.offsetLeft);
    setScrollLeft(scrollRef.current!.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsAutoScrolling(true), 1000); // Resume auto-scroll after 2 seconds
  };

  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      setIsAutoScrolling(true);
    }
  };

  return (
    <section className="py-16 sm:py-20 grid-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-white mb-8 text-center font-display">
            CUSTOMER TESTIMONIALS
          </h3>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent z-10" />
            <div 
              ref={scrollRef}
              className="overflow-x-auto scrollbar-hide touch-pan-x"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="inline-flex space-x-4 sm:space-x-6 px-4 sm:px-32 py-4">
                {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.name}-${index}`}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-accent p-4 sm:p-6 rounded-lg w-[280px] sm:w-[350px] flex-shrink-0"
                  >
                    <div className="flex items-center mb-3 sm:mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                      />
                      <div>
                        <div className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</div>
                        <div className="text-white/70 text-xs sm:text-sm">{testimonial.car}</div>
                      </div>
                    </div>
                    <p className="text-white/80 italic text-sm sm:text-base line-clamp-4 sm:line-clamp-none">"{testimonial.content}"</p>
                    <div className="flex text-primary mt-2 sm:mt-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-display"
          >
            <div className="text-white">MAKE SURE THE NEXT PHOTO IS</div>
            <div className="text-primary mt-2 mb-2">YOUR CAR</div>
            <div className="text-white">FOLLOW US ON INSTAGRAM</div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/70 max-w-2xl mx-auto mt-4 sm:mt-6"
          >
            Stay updated with our latest projects and transformations
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-accent px-4 sm:px-6 py-2 rounded-full mt-4"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-white font-semibold text-sm sm:text-base">@clean_spec_detailing_studio</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {instagramPhotos.map((photo, index) => (
            <motion.a
              key={photo.url}
              href="https://www.instagram.com/clean_spec_detailing_studio/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={photo.url}
                alt={photo.description}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-xs sm:text-sm">{photo.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <a
            href="https://www.instagram.com/clean_spec_detailing_studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-white font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base"
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Visit Our Instagram</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramShowcase;