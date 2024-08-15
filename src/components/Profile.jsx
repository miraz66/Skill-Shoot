import User_image from '../assets/unsplash_d1UPkiFd04A.png';
import Profile_image_1 from '../assets/Group 542.png';
import Profile_image_2 from '../assets/pyramid.png';
import Profile_image_3 from '../assets/wool-ball.png';
import Profile_image_4 from '../assets/Group.png';

export default function Profile() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:my-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="xl:max-w-md mx-auto xl:mx-0 pr-10">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl text-current font-semibold tracking-tight">
                Why do we <span className="text-secondary">exist?</span>
              </h1>
              <p className="pt-4 text-muted text-sm font-normal leading-7 lg:leading-9">
                Because we know that many people or companies have the same
                problem when it comes to how difficult it is to improve their
                skills
              </p>
            </div>
            <div className="py-6 flex items-center max-md:justify-center gap-4">
              <img className="max-md:w-12" src={User_image} alt="user image" />
              <div>
                <h4 className="text-current max:md:text-sm font-semibold">
                  Jerony Pulquosta
                </h4>
                <p className="text-muted text-xs sm:text-sm font-normal tracking-tight">
                  CEO Skill Shoot
                </p>
              </div>
            </div>
            <hr className="border-gray-300" />
            <div className="pt-8 flex justify-center sm:justify-start gap-10">
              <div>
                <p className="text-current text-2xl sm:text-4xl font-semibold tracking-tighter">
                  100+
                </p>
                <p className="text-muted text-xs tracking-tight">
                  Updated Material
                </p>
              </div>
              <div>
                <p className="text-current text-2xl sm:text-4xl font-semibold tracking-tighter">
                  15k
                </p>
                <p className="text-muted text-xs tracking-tight">Member Join</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 md:gird-rows-2 gap-10">
            <div className="max-md:max-w-72 mx-auto text-center sm:text-left">
              <img
                className="mx-auto sm:mx-0"
                src={Profile_image_1}
                alt="Group image"
              />
              <div>
                <h6 className="pt-6 pb-4 text-lg sm:text-2xl text-primary font-semibold tracking-tight">
                  Material Limitations
                </h6>
                <p className="text-muted text-xs leading-6 sm:leading-8">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="max-md:max-w-72 mx-auto text-center sm:text-left">
              <img
                className="mx-auto sm:mx-0"
                src={Profile_image_2}
                alt="Group image"
              />
              <div>
                <h6 className="pt-6 pb-4 text-lg sm:text-2xl text-primary font-semibold tracking-tight">
                  Unprofessional Mentor
                </h6>
                <p className="text-muted text-xs leading-6 sm:leading-8">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="max-md:max-w-72 mx-auto text-center sm:text-left">
              <img
                className="mx-auto sm:mx-0"
                src={Profile_image_3}
                alt="Group image"
              />
              <div>
                <h6 className="pt-6 pb-4 text-lg sm:text-2xl text-primary font-semibold tracking-tight">
                  Video Quality
                </h6>
                <p className="text-muted text-xs leading-6 sm:leading-8">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="max-md:max-w-72 mx-auto text-center sm:text-left">
              <img
                className="mx-auto sm:mx-0"
                src={Profile_image_4}
                alt="Group image"
              />
              <div>
                <h6 className="pt-6 pb-4 text-lg sm:text-2xl text-primary font-semibold tracking-tight">
                  High Price
                </h6>
                <p className="text-muted text-xs leading-6 sm:leading-8">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
