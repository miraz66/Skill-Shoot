import About from '../../components/About';
import Discount from '../../components/Discount';
import Hero from '../../components/Hero';
import Join from '../../components/Join';
import Media from '../../components/Media';
import Price from '../../components/Price';
import Profile from '../../components/Profile';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Media />
      <Discount />
      <Profile />
      <About />
      <Join />
      {/* <Price /> */}
    </div>
  );
}
