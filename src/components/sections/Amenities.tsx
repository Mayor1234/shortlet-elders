import { IoHomeOutline } from 'react-icons/io5';
import { MdSupportAgent } from 'react-icons/md';
import { LiaBusinessTimeSolid } from 'react-icons/lia';
import SectionHeading from '../shared/sectionHeading';
import { Link } from 'react-router-dom';
import AnimatedSection from '../shared/AnimatedSection';

const Amenities = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-gray-800 py-20">
        <SectionHeading>Investment Scheme Options</SectionHeading>
        <div className="flex flex-col justify-between px-5 gap-8 lg:flex-row w-full lg:px-0">
          <div className="flex-1">
            <AnimatedSection
              direction={{ initial_x: -100, initial_y: 0, duration: 0.5 }}
            >
              <div className="shadow-pry/20 shadow-lg p-5 lg:w-full">
                <i>
                  <IoHomeOutline className="w-10 h-10 text-pry" />
                </i>
                <div>
                  <p className="text-lg font-semibold pb-5">Home Ownner</p>
                  <p className="text-gray-600 leading-relaxed pb-5">
                    For your convenience and safety, we offer a fully
                    contactless check-in and check-out process. Before your
                    stay, you'll receive a digital access code via email or SMS,
                    allowing you to check in at your leisure. Upon departure,
                    simply leave the apartment at the scheduled time—no need to
                    interact with staff or hand over keys.
                  </p>
                  <Link to={'#'} className="text-pry">
                    Learn more...
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
          <div className="flex-1">
            <AnimatedSection
              direction={{ initial_x: -100, initial_y: 0, duration: 0 }}
            >
              <div className="shadow-pry/20 shadow-lg p-5 lg:w-full">
                <i>
                  <MdSupportAgent className="w-10 h-10 text-pry" />
                </i>
                <div>
                  <p className="text-lg font-semibold pb-5">Agent</p>
                  <p className="text-gray-600 leading-relaxed pb-5">
                    For your convenience and safety, we offer a fully
                    contactless check-in and check-out process. Before your
                    stay, you'll receive a digital access code via email or SMS,
                    allowing you to check in at your leisure. Upon departure,
                    simply leave the apartment at the scheduled time—no need to
                    interact with staff or hand over keys.
                  </p>
                  <Link to={'#'} className="text-pry">
                    Learn more...
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
          <div className="flex-1">
            <AnimatedSection
              direction={{ initial_x: -100, initial_y: 0, duration: 0.9 }}
            >
              <div className="shadow-pry/20 shadow-lg p-5 lg:w-full">
                <i>
                  <LiaBusinessTimeSolid className="w-10 h-10 text-pry" />
                </i>
                <div>
                  <p className="text-lg font-semibold pb-5">Investor</p>
                  <p className="text-gray-600 leading-relaxed pb-5">
                    For your convenience and safety, we offer a fully
                    contactless check-in and check-out process. Before your
                    stay, you'll receive a digital access code via email or SMS,
                    allowing you to check in at your leisure. Upon departure,
                    simply leave the apartment at the scheduled time—no need to
                    interact with staff or hand over keys.
                  </p>
                  <Link to={'#'} className="text-pry">
                    Learn more...
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
