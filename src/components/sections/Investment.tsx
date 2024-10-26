import AnimatedSection from '../shared/AnimatedSection';
import RotatingBorderButton from '../shared/Button';
import SectionHeading from '../shared/sectionHeading';

import invest1 from '/invest1.jpg';

const Investment = () => {
  return (
    <div className="my-20 container mx-auto">
      <div className="flex flex-col px-5 justify-between h-full lg:h-[500px] overflow-hidden lg:flex-row lg:px-0 lg:gap-5">
        <div className="w-full lg:w-2/5 pb-10 lg:pb-0">
          <AnimatedSection direction={{ initial_x: 0, initial_y: -100 }}>
            <SectionHeading>Investor</SectionHeading>
            <p className="text-2xl tracking-wide pb-5">Earn Commissions</p>
            <p className="text-gray-600 leading-relaxed pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem praesentium necessitatibus incidunt eum unde laborum
              minima et quos officia nisi rem totam dolores fuga aliquid odit
              voluptates,
              <br />
              dicta adipisci sint odio. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Eligendi ipsum ipsam sed ullam rerum voluptatem
              <br />
              <br />
              deleniti quis assumenda repudiandae est, aperiam ex vel illum,
              delectus, dignissimos molestias quisquam aspernatur labore qui
            </p>
            <RotatingBorderButton>{'Get started'}</RotatingBorderButton>
          </AnimatedSection>
        </div>

        <div className="flex-1">
          <AnimatedSection direction={{ initial_x: 0, initial_y: -100 }}>
            <div className="flex justify-between w-full">
              <div className="">
                <img
                  src={invest1}
                  alt="invest"
                  width={100}
                  height={100}
                  className="w-full h-[450px] lg:h-[500px] rounded-md"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Investment;
