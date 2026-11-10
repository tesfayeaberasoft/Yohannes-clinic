import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustIndicators from '@/components/TrustIndicators';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import EmergencySection from '@/components/EmergencySection';
import Location from '@/components/Location';
import AppointmentForm from '@/components/AppointmentForm';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustIndicators />
        <About />
        <Services />
        <WhyChooseUs />
        <EmergencySection />
        <Location />
        <AppointmentForm />
      </main>
      <Footer />
    </>
  );
}
