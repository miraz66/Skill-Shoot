import AboutSection from '../../components/About';
import Discount from '../../components/Discount';
import HeroSection from '../../components/Hero';
import Join from '../../components/Join';
import MediaSection from '../../components/Media';
import Profile from '../../components/Profile';

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <MediaSection />
      <Discount />
      <Profile />
      <AboutSection />
      <Join />
    </div>
  );
}
