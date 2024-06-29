import React from 'react'
import HeaderContent from '../../HeaderContent/HeaderContent';
import BodyContent from '../../BodyContent/BodyContent';
import SecondContent from '../../SecondContent/SecondContent';
import OfferContent from '../../OfferContent/OfferContent';
import SolutionContent from '../../SolutionContent/SolutionContent';
import MobileContent from '../../MobileContent/MobileContent';
import WebContent from '../../WebContent/WebContent';
import ReviewContent from '../../ReviewContent/ReviewContent';
import FaqContent from '../../FaqContent/FaqContent';
import FinalContent from '../../FinalContent/FinalContent';
import PricingContent from '../../PricingContent/PricingContent';
import Popup from '../../Popup/Popup';


function HomePage() {
  return (
    <div>
        <HeaderContent/>
        <BodyContent/>
        <SecondContent/>
        <WebContent/>
        <OfferContent/>
        <SolutionContent/>
        <MobileContent/>
        <ReviewContent/>
        <PricingContent/>
        <FaqContent/>
        <FinalContent/>
        
    </div>
  )
}

export default HomePage
