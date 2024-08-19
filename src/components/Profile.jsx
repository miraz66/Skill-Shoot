import UserImage from "../assets/unsplash-D1UPkiFd04A.png";
import ProfileImage1 from "../assets/Group542.png";
import ProfileImage2 from "../assets/pyramid.png";
import ProfileImage3 from "../assets/wool-ball.png";
import ProfileImage4 from "../assets/Group.png";

export default function Profile() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-8 lg:mt-28 lg:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div className="mx-auto sm:pr-10 xl:mx-0 xl:max-w-md">
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-semibold tracking-tight text-current sm:text-4xl">
                Why do we <span className="text-secondary">exist?</span>
              </h1>
              <p className="pt-4 text-sm font-normal leading-7 text-muted lg:leading-9">
                Because we know that many people or companies have the same
                problem when it comes to how difficult it is to improve their
                skills
              </p>
            </div>
            <div className="flex items-center gap-4 py-6 max-md:justify-center">
              <img className="max-md:w-12" src={UserImage} alt="user image" />
              <div>
                <h4 className="max:md:text-sm font-semibold text-current">
                  Jerony Pulquosta
                </h4>
                <p className="text-xs font-normal tracking-tight text-muted sm:text-sm">
                  CEO Skill Shoot
                </p>
              </div>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-center gap-10 pt-8 sm:justify-start">
              <div>
                <p className="text-2xl font-semibold tracking-tighter text-current sm:text-4xl">
                  100+
                </p>
                <p className="text-xs tracking-tight text-muted">
                  Updated Material
                </p>
              </div>
              <div>
                <p className="text-2xl font-semibold tracking-tighter text-current sm:text-4xl">
                  15k
                </p>
                <p className="text-xs tracking-tight text-muted">Member Join</p>
              </div>
            </div>
          </div>

          <div className="md:gird-rows-2 grid grid-cols-1 gap-14 sm:gap-20 md:grid-cols-2">
            <div className="mx-auto text-center max-md:max-w-72 sm:text-left">
              <img
                className="mx-auto sm:mx-0"
                src={ProfileImage1}
                alt="Group image"
              />
              <div>
                <h6 className="pb-4 pt-6 text-lg font-semibold tracking-tight text-primary sm:text-2xl">
                  Material Limitations
                </h6>
                <p className="text-xs leading-7 text-muted sm:leading-8">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="mx-auto text-center max-md:max-w-72 sm:text-left">
              <img
                className="mx-auto sm:mx-0"
                src={ProfileImage2}
                alt="Group image"
              />
              <div>
                <h6 className="pb-4 pt-6 text-lg font-semibold tracking-tight text-primary sm:text-2xl">
                  Unprofessional Mentor
                </h6>
                <p className="text-xs leading-7 text-muted sm:leading-8">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="mx-auto text-center max-md:max-w-72 sm:text-left">
              <img
                className="mx-auto sm:mx-0"
                src={ProfileImage3}
                alt="Group image"
              />
              <div>
                <h6 className="pb-4 pt-6 text-lg font-semibold tracking-tight text-primary sm:text-2xl">
                  Video Quality
                </h6>
                <p className="text-xs leading-7 text-muted sm:leading-8">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="mx-auto text-center max-md:max-w-72 sm:text-left">
              <img
                className="mx-auto sm:mx-0"
                src={ProfileImage4}
                alt="Group image"
              />
              <div>
                <h6 className="pb-4 pt-6 text-lg font-semibold tracking-tight text-primary sm:text-2xl">
                  High Price
                </h6>
                <p className="text-xs leading-7 text-muted sm:leading-8">
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
