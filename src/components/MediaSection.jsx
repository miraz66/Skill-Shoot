import ubar from '../assets/ubar.png';
import google from '../assets/google.png';
import paypal from '../assets/paypal.png';
import microsoft from '../assets/microsoft.png';
import dribble from '../assets/dribble.png';

export default function MediaSection() {
  return (
    <div className="mx-auto my-24 max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-xl text-current_color sm:text-4xl font-semibold tracking-tight">
          Trusted more than <span className="text-secondary_color">100+</span>{' '}
          in the world
        </h1>
        <p className="pt-4 text-muted_color text-sm sm:text-base">
          they have asked us more than 3 times to teach their employees about{' '}
          <br />
          various things. to improve their skills
        </p>
      </div>
      <div className="flex justify-center sm:justify-between flex-wrap items-center gap-5 sm:gap-0 mt-10">
        <img src={ubar} alt="ubar" className="h-6 sm:h-8" />
        <img src={google} alt="google" className="h-6 sm:h-8" />
        <img src={paypal} alt="paypal" className="h-6 sm:h-8" />
        <img src={microsoft} alt="microsoft" className="h-6 sm:h-8" />
        <img src={dribble} alt="dribble" className="h-6 sm:h-8" />
      </div>
    </div>
  );
}
