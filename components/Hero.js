import Image from "next/image";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";
import btop from "../public/border_top.svg";
import bbtm from "../public/border_bottom.svg";
import slide1 from "../public/slides/1.jpg";
import slide2 from "../public/slides/2.jpg";
import slide3 from "../public/slides/3.jpg";
import slide4 from "../public/slides/4.jpg";
import slide5 from "../public/slides/5.jpg";
import slide6 from "../public/slides/6.jpg";
import slide7 from "../public/slides/7.jpg";
import slide8 from "../public/slides/8.jpg";
import slide9 from "../public/slides/9.jpg";
import slide10 from "../public/slides/10.jpg";
import slide11 from "../public/slides/11.jpg";
import slide12 from "../public/slides/12.jpg";
import slide13 from "../public/slides/13.jpg";
import slide14 from "../public/slides/14.jpg";
import slide15 from "../public/slides/15.jpg";
import slide16 from "../public/slides/16.jpg";
import slide17 from "../public/slides/17.jpg";
import slide18 from "../public/slides/18.jpg";
import slide19 from "../public/slides/19.jpg";
import slide20 from "../public/slides/20.jpg";
export default function Hero() {
    const flickityOptions = {
        cellAlign: 'left',
        groupCells: true,
        pageDots: false
    }
    return ( 
	<>	
    <div id="hero" className="container-fluid hero">
        <div className="row vh-100 align-items-center">
        <div className="col-md-4 offset-md-1 animate__animated animate__fadeInLeft">
            <div className="hero-content">
                <h1>Welcome to Cheetah Coalition</h1>
                <h4 className="mt-4">The advanced safari society.</h4>
                <a href="#" className="btn btn-dark ch-btn mt-4">Earn your $SPOT</a>
            </div>
        </div>
        <div className="col-md-6 offset-md-1 border_left animate__animated animate__fadeInRight">
            <div className="cheetah-slider">
            <Image src={btop} className="img-fluid"/>
            <Flickity
                className={'main-carousel'} 
                elementType={'div'} 
                options={flickityOptions} 
                disableImagesLoaded={false}
                reloadOnUpdate 
                static
                >   
                <div className="carousel-cell">
                    <Image src={slide1} width={194} height={194}/>
                </div>
                <div className="carousel-cell">
                    <Image src={slide2} width={194} height={194}/>
                </div>
                <div className="carousel-cell">
                    <Image src={slide3} width={194} height={194}/>
                </div>
                <div className="carousel-cell">
                    <Image src={slide4} width={194} height={194}/>
                </div>
                <div className="carousel-cell">
                    <Image src={slide5} width={194} height={194}/>
                </div>
                <div className="carousel-cell">
                    <Image src={slide6} width={194} height={194}/>
                </div>
                <div className="carousel-cell">
                    <Image src={slide7} width={194} height={194}/>
                </div>
                <div className="carousel-cell">
                    <Image src={slide8} width={194} height={194}/>
                </div>
                <div className="carousel-cell">
                    <Image src={slide9} width={194} height={194}/>
                </div>
                <div className="carousel-cell">
                    <Image src={slide10} width={194} height={194}/>
                </div>
                <div className="carousel-cell">
                    <Image src={slide11} width={194} height={194}/>
                </div>
                <div className="carousel-cell">
                    <Image src={slide12} width={194} height={194}/>
                </div>
                <div className="carousel-cell">
                    <Image src={slide13} width={194} height={194}/>
                </div>
                <div className="carousel-cell">
                    <Image src={slide14} width={194} height={194}/>
                </div>
                <div className="carousel-cell">
                    <Image src={slide15} width={194} height={194}/>
                </div>
                <div className="carousel-cell">
                    <Image src={slide16} width={194} height={194}/>
                </div>
                <div className="carousel-cell">
                    <Image src={slide17} width={194} height={194}/>
                </div>
                <div className="carousel-cell">
                    <Image src={slide18} width={194} height={194}/>
                </div>
                <div className="carousel-cell">
                    <Image src={slide19} width={194} height={194}/>
                </div>
                <div className="carousel-cell">
                    <Image src={slide20} width={194} height={194}/>
                </div>
                </Flickity>
                <Image src={bbtm} className="img-fluid"/>
            </div>
        </div>
        </div>
    </div>
    </>
    );
}