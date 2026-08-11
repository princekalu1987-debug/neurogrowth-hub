import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Services } from './components/Services';
import { OurApproach } from './components/OurApproach';
import { AboutUs } from './components/AboutUs';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ResourcesSection } from './components/ResourcesSection';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ServiceModal } from './components/ServiceModal';
import { ServiceItem } from './types';

export default function App() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);
  const [activeSection, setActiveSection] = useState('home');

  // Track active scroll section for navbar highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'approach', 'resources', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenConsultationModal = (serviceId?: string) => {
    setPreselectedServiceId(serviceId);
    setConsultationModalOpen(true);
  };

  const handleExploreServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#222623] flex flex-col font-sans selection:bg-[#4A6B5D] selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenConsultationModal={() => handleOpenConsultationModal()}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenConsultationModal={() => handleOpenConsultationModal()}
          onExploreServices={handleExploreServices}
        />

        {/* Introduction Philosophy & 3 Feature Pillars */}
        <Introduction />

        {/* 6 Support Services */}
        <Services
          onSelectService={(service) => setSelectedServiceForModal(service)}
          onOpenConsultationModal={() => handleOpenConsultationModal()}
        />

        {/* 4-Step Care Approach Timeline */}
        <OurApproach />

        {/* About NeuroGrowth Hub (formerly Little Treasures Consult) */}
        <AboutUs />

        {/* Why Families Choose Us */}
        <WhyChooseUs />

        {/* Resources & Interactive Assessment Quiz */}
        <ResourcesSection
          onOpenConsultationModal={() => handleOpenConsultationModal()}
        />

        {/* Placeholder Testimonials */}
        <Testimonials />

        {/* Large Warm Call To Action */}
        <CallToAction
          onOpenConsultationModal={() => handleOpenConsultationModal()}
        />

        {/* Contact Section & Consultation Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Consultation Booking Popup Modal */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        preselectedServiceId={preselectedServiceId}
      />

      {/* Service Details Modal */}
      <ServiceModal
        service={selectedServiceForModal}
        onClose={() => setSelectedServiceForModal(null)}
        onBookConsultation={(serviceId) => handleOpenConsultationModal(serviceId)}
      />
    </div>
  );
}

