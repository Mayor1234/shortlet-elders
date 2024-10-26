import HeroBanner from '../components/hero-banner/HeroBanner';
import Amenities from '../components/sections/Amenities';
import EarnReturns from '../components/sections/EarnReturns';
import Faq from '../components/sections/Faq';
import Investment from '../components/sections/Investment';

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Amenities />
      <Faq />
      <EarnReturns />
      <Investment />
    </div>
  );
};

export default Home;
