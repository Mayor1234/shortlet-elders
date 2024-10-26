import Accordion from '../shared/Accordion';
import AnimatedSection from '../shared/AnimatedSection';

const Faq = () => {
  return (
    <div className="">
      <div className="relative bg-fixed bg-[url('/shortlet_hero.jpg')] h-[550px] w-screen lg:h-[75vh] bg-no-repeat bg-cover bg-center bg-blend-overlay bg-neutral-700">
        <div className="absolute inset-0 flex justify-center lg:justify-end w-full">
          <div className="container text-[#fff] p-5 w-full  bg-gray-900/50 bg-blend-overlay overflow-y-auto h-full lg:w-3/5 lg:p-16">
            <h3 className="text-2xl text-pry tracking-wide py-5 ">Faq</h3>
            <AnimatedSection
              direction={{ initial_x: 0, initial_y: -70, duration: 0.5 }}
            >
              <h2 className="text-3xl leading-relaxed tracking-wide font-semibold lg:text-4xl">
                Answers To Popular Questions
              </h2>
            </AnimatedSection>

            <AnimatedSection
              direction={{ initial_x: -100, initial_y: 0, duration: 0.4 }}
            >
              <Accordion
                title={
                  'What are the benefits of investing in rental properties?'
                }
              >
                <p className="w-full text-[#fff] tracking-wide leading-loose py-3">
                  Rental properties can provide multiple benefits, such as
                  steady passive income, tax advantages, and property value
                  appreciation. Rental income can cover mortgage payments, and
                  if the property appreciates, you’ll have an asset worth more
                  than when you bought it. Additionally, some property-related
                  expenses, like maintenance and repairs, may be tax-deductible.
                </p>
              </Accordion>
            </AnimatedSection>

            <AnimatedSection
              direction={{ initial_x: -100, initial_y: 0, duration: 0.5 }}
            >
              <Accordion
                title={'What are the risks of investing in real estate?'}
              >
                <p className="w-full text-[#fff] tracking-wide leading-loose py-3">
                  The main risks include market downturns, unexpected
                  maintenance costs, and vacancy periods where rental income
                  isn’t generated. Property values can fluctuate, especially if
                  there’s an economic downturn. Real estate also requires active
                  management or hiring a property manager, adding to costs.
                  Additionally, leveraging debt to purchase property (using a
                  mortgage) can amplify losses if the market falls.
                </p>
              </Accordion>
            </AnimatedSection>
            <AnimatedSection
              direction={{ initial_x: -100, initial_y: 0, duration: 0.7 }}
            >
              <Accordion
                title={'How can I evaluate a property’s investment potential?'}
              >
                <p className="w-full text-[#fff] tracking-wide leading-loose py-3">
                  To evaluate a property’s potential, analyze metrics like cash
                  flow, cap rate (capitalization rate), ROI (return on
                  investment), and the 1% rule (which suggests the property
                  should rent for at least 1% of its purchase price each month).
                  Also, consider the neighborhood, market trends, and vacancy
                  rates. Conducting thorough research on the area’s growth
                  potential is key to making an informed decision.
                </p>
              </Accordion>
            </AnimatedSection>
            <AnimatedSection
              direction={{ initial_x: -100, initial_y: 0, duration: 0.8 }}
            >
              <Accordion
                title={
                  'How does the interest rate affect my investment property?'
                }
              >
                <p className="w-full text-[#fff] tracking-wide leading-loose py-3">
                  Interest rates significantly impact mortgage payments and,
                  therefore, your overall investment cost and cash flow. Lower
                  interest rates make borrowing cheaper, which increases
                  affordability and potential ROI. When interest rates rise,
                  mortgage payments increase, which can reduce cash flow, making
                  it harder to cover costs or turn a profit. Higher rates may
                  also dampen property values if demand decreases.
                </p>
              </Accordion>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
