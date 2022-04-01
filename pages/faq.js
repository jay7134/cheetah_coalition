import Image from "next/image";
import staking_img from '../public/staking.svg';
import faqs_img from '../public/faqs-img.svg';
import faq_img2 from '../public/faq_img2.svg';
import faq_img3 from '../public/faq_img3.png';
export default function Faq() {
    return ( 
	<>	
    <div id="faq" className="container-fluid ch-component page-container">
        <div className="row">
        <div className="col-md-3 order-sm-2 animate__animated animate__slideInUp">
            <Image className="img-fluid" src={faqs_img} alt="faqs"/>
        </div>    
        <div className="col-md-9 order-sm-1">
            <div className="faqs-content">
                <h2 className="pb_100">Frequently Asked Questions & Project Details</h2>
                <div className="faqs-list animate__animated animate__fadeInUp">
                    <div className="faq-item">
                        <h4>Mint price and supply?</h4>
                        <p>We are a collection of 2222 Cheetahs roaming around the Solana safari with a mint price of 2 SOL!</p>    
                    </div>
                    <div className="faq-item">
                        <h4>Why should I mint?</h4>
                        <p>We are a team built upon the foundation of having absolutely everything ready before launch. Along with our plans to repeatedly re-invest the projects earnings in order to create the best experience for all of our holders, we are here to make an impact.</p>    
                    </div>
                    <div className="faq-item">
                        <h4>How does staking work?</h4>
                        <p>Our staking mechanic brings a unique approach to your earnings, granting a multiplier to earn more $SPOT as you stake additonal Cheetahs!</p>    
                        <div className="row">
                        <div className="col-md-6">
                        <ul className="list-inline">
                            <li>1x Cheetah Staked - 1.0x $SPOT</li>
                            <li>2x Cheetah Staked - 1.05x $SPOT</li>
                            <li>3x Cheetah Staked - 1.10x $SPOT</li>
                            <li>4x Cheetah Staked - 1.15x $SPOT</li>
                            <li>5x Cheetah Staked - 1.20x $SPOT (MAX)</li>
                        </ul>
                        </div>
                        <div className="col-md-6 animate__animated animate__fadeInUp ">
                            <Image className="img-fluid" src={staking_img} width={586} height={166} alt="staking"/>
                        </div>
                        </div>
                    </div>
                    <div className="faq-item animate__animated animate__fadeInUp">
                        <h4>Why is there a fee to withdraw my $SPOT?</h4>
                        <p>The goal revolving around $SPOT it to make the token anti-dumpable. If you choose to withdraw your tokens within a certain time period, a withdraw fee will reflect upon it. Everytime $SPOT is withdrawn, a small perctange of tokens are burned to combat large price fluctuations.</p> 
                        <div className="row">
                        <div className="col-md-4">
                        <ul className="list-inline">
                            <li>15% fee for less than 7 days staked</li>
                            <li>11% fee for less than 14 days staked</li> 
                            <li>7% fee for less than 21 days staked</li>
                        </ul>  
                        </div>
                        <div className="col-md-6 animate__animated animate__slideInUp">
                            <Image className="img-fluid" src={faq_img2} width={586} height={166} alt="staking"/>
                        </div>
                        </div>  
                    </div>
                </div>    
            </div>
        </div>
        
        </div>
        <div className="row">
            <div className="col-md-9">
                <div className="faqs-list">
                    <div className="faq-item">
                        <h4>How will we make an impact on real world Cheetahs?</h4>
                        <p>We plan to partner with a conservation fund [cheetah.org] and sponsor specific Cheetahs! We will be holding regular events and allow our holders to vote on which Cheetah they would like to sponsor for the year. A full year sponsorship costs $5,000 per cheetah, and we hope to sponsor as many Cheetahs as possible to make the best impact on our real world counterpart.</p>    
                    </div>
                </div>
            </div>
            <div className="col-md-3 animate__animated animate__slideInUp">
                <Image className="img-fluid" src={faq_img3} width={414} height={243} alt="faqs"/> 
            </div>
        </div>
        
    </div>
    </>
    );
}
