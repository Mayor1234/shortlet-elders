import Header from '../headers/Headers';
import AnimatedSection from '../shared/AnimatedSection';
import RotatingBorderButton from '../shared/Button';

const HeroBanner = () => {
  return (
    <div>
      <div className="relative z-10 bg-[url('/hero_image.jpg')] h-[80vh] w-screen lg:h-[85vh] bg-no-repeat bg-cover bg-bottom bg-blend-overlay bg-neutral-800">
        <Header />
        <div className="absolute -z-10 w-full font-medium flex gap-8 flex-col justify-center h-full items-center">
          <AnimatedSection direction={{ initial_x: 0, initial_y: 100 }}>
            <h2 className="max-w-md text-4xl leading-[56px]  text-center lg:leading-[70px] text-[#f2f2f2] lg:max-w-[750px] lg:text-6xl pb-10">
              Turn Your Home to Money Investment Scheme
            </h2>
            <p className="max-w-md text-center leading-[24px] mb-5 text-[20px] lg:text-[24px]  tracking-wide text-[#f1f5f9] lg:max-w-[750px]">
              Give a Home or Invest to earn 10% of your capital
            </p>
          </AnimatedSection>
          <RotatingBorderButton>{'Talk to our team'}</RotatingBorderButton>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
