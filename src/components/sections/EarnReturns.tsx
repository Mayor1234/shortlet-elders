import AnimatedSection from '../shared/AnimatedSection';
import RotatingBorderButton from '../shared/Button';
import SectionHeading from '../shared/sectionHeading';

import invest2 from '/invest2.jpeg';
import invest3 from '/invest3.jpeg';

const EarnReturns = () => {
  return (
    <div className="my-20 container mx-auto">
      {
        <div className="flex flex-col-reverse px-5 justify-between h-full lg:h-[500px] overflow-hidden lg:flex-row lg:px-0 lg:gap-5">
          <div className="w-full lg:w-2/5">
            <AnimatedSection direction={{ initial_x: -100, initial_y: 0 }}>
              <div className="flex justify-between w-full">
                <div className="flex gap-2 justify-between w-full">
                  <AnimatedSection direction={{ initial_x: 0, initial_y: 100 }}>
                    <figure>
                      <img
                        src={invest2}
                        alt="invest"
                        width={100}
                        height={100}
                        className="w-[250px] h-[400px] lg:w-[250px] lg:h-[500px] rounded-md"
                      />
                    </figure>
                  </AnimatedSection>
                  <AnimatedSection
                    direction={{ initial_x: 0, initial_y: -100, duration: 0.5 }}
                  >
                    <figure>
                      <img
                        src={invest3}
                        alt="invest"
                        width={100}
                        height={100}
                        className="w-[250px] h-[400px] lg:w-[250px] lg:h-[500px]  rounded-md"
                      />
                    </figure>
                  </AnimatedSection>
                </div>
              </div>
            </AnimatedSection>
          </div>
          <div className="flex-1 mb-10 lg:mb-0">
            <AnimatedSection direction={{ initial_x: 100, initial_y: 0 }}>
              <SectionHeading>Agents</SectionHeading>
              <p className="text-2xl tracking-wide pb-5">
                Earn Returns On Investment
              </p>
              <p className="text-gray-600 leading-relaxed pb-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem praesentium necessitatibus incidunt eum unde laborum
                minima et quos officia nisi rem totam dolores fuga aliquid odit
                voluptates,
                <br />
                dicta adipisci sint odio. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Eligendi ipsum ipsam sed ullam
                rerum voluptatem
                <br />
                <br />
                deleniti quis assumenda repudiandae est, aperiam ex vel illum,
                delectus, dignissimos molestias quisquam aspernatur labore qui
                maxime quo quasi labore praesentium!
              </p>
              <RotatingBorderButton>{'Get started'}</RotatingBorderButton>
            </AnimatedSection>
          </div>
        </div>
      }
    </div>
  );
};

export default EarnReturns;
