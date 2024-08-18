import About from '../../components/About';
import Discount from '../../components/Discount';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Join from '../../components/Join';
import Media from '../../components/Media';
import Price from '../../components/Price';
import Product from '../../components/Product';
import Profile from '../../components/Profile';
import Testimonial from '../../components/Testimonial';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Media />
      <Discount />
      <Profile />
      <Product />
      <About />
      <Join />
      <Price />
      <Testimonial />
      <Footer />
    </div>
  );
}
