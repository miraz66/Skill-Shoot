import Discount from '../../components/Discount';
import HeroSection from '../../components/HeroSection';
import MediaSection from '../../components/MediaSection';

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <MediaSection />
      <Discount />
    </div>
  );
}
