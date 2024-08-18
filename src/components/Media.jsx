import ubar from '../assets/ubar.png';
import google from '../assets/google.png';
import paypal from '../assets/paypal.png';
import microsoft from '../assets/microsoft.png';
import dribble from '../assets/dribble.png';

export default function Media() {
  return (
    <div className="mx-auto my-14 lg:my-24 max-w-5xl px-8 lg:px-10">
      <div className="text-center">
        <h1 className="text-xl text-current sm:text-4xl font-semibold tracking-tight">
          Trusted more than <span className="text-secondary">100+</span> in the
          world
        </h1>
        <p className="max-w-72 sm:max-w-lg mx-auto pt-6 text-muted_color text-xs leading-7 sm:text-base sm:leading-9">
          they have asked us more than 3 times to teach their employees about{' '}
          various things. to improve their skills
        </p>
      </div>
      <div className="flex justify-center sm:justify-between flex-wrap items-center gap-5 sm:gap-0 mt-14">
        <img src={ubar} alt="ubar" className="h-6 sm:h-8" />
        <img src={google} alt="google" className="h-6 sm:h-8" />
        <img src={paypal} alt="paypal" className="h-6 sm:h-8" />
        <img src={microsoft} alt="microsoft" className="h-6 sm:h-8" />
        <img src={dribble} alt="dribble" className="h-6 sm:h-8" />
      </div>
    </div>
  );
}
