import Image from 'next/image';
import r1 from '../public/r1.png';
import r2 from '../public/r2.png';
import r3 from '../public/r3.png';
import r4 from '../public/r4.png';
import arrow1 from '../public/Arrow 3.svg';
import arrow2 from '../public/Arrow 4.svg';
import arrow3 from '../public/Arrow 5.svg';
export default function Roadmap() {
    return ( 
	<>	
    <div id="roadmap" className="container ch-component page-container">
        <div className="row animate__animated animate__zoomIn">
            <div className="col-md-5 mb-5">
                <h2>PHASE ONE</h2>
                <div className="box">
                    <div className="row">
                        <div className="col-9 box-content">
                            <p>Build Discord And Grow Social Medias</p>
                            <p>Establish & Design Website</p>
                            <p>$SPOT Token</p>
                            <p>Pre-Approval For Matrica</p>
                            <p>Pre-Approval On MagicEden Secondary</p>
                            <p>Finalize Website</p>
                        </div>
                        <div className="col-3 align-self-end  p-0">
                            <Image className="img-fluid img_bottom" src={r1} width={156} height={156} alt="Phase One"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-2 d-none d-md-block text-center step-1">
                <Image className="img-fluid arrow" src={arrow1} alt="Phase steps"/>    
            </div>
            <div className="col-md-5 mb-5">
            <h2 className="text-center">PHASE TWO</h2>
                <div className="box">
                    <div className="row">
                        <div className="col-9 box-content">
                            <p>Build Discord And Grow Social Medias</p>
                            <p>Establish & Design Website</p>
                            <p>$SPOT Token</p>
                            <p>Pre-Approval For Matrica</p>
                            <p>Pre-Approval On MagicEden Secondary</p>
                            <p>Finalize Website</p>
                            </div>
                        <div className="col-3 align-self-end  p-0">
                            <Image className="img-fluid img_bottom" src={r2} width={156} height={156} alt="Phase Two"/>
                        </div>        
                    </div>
                </div>
            </div>
        </div>
        <div className="row animate__animated animate__zoomIn">
            <div className="col-md-5 mb-5">
                <h2>PHASE THREE</h2>
                <div className="box">
                    <div className="row">
                        <div className="col-9 box-content">
                            <p>Build Discord And Grow Social Medias</p>
                            <p>Establish & Design Website</p>
                            <p>$SPOT Token</p>
                            <p>Pre-Approval For Matrica</p>
                            <p>Pre-Approval On MagicEden Secondary</p>
                            <p>Finalize Website</p>
                        </div>
                        <div className="col-3 align-self-end p-0">
                            <Image className="img-fluid img_bottom" src={r3} width={156} height={156} alt="Phase Three"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-2 p-0 d-none  d-md-block step-multiple-arrows">
                <div className='stepimg2 step-2'>
                    <Image className="img-fluid arrow_step2" src={arrow2} alt="Phase steps"/>
                </div>
                <div className='align-self-end text-center step-3'>
                    <Image className="img-fluid arrow_step3" src={arrow3} alt="Phase steps"/> 
                </div>   
            </div>
            <div className="col-md-5 mb-5">
            <h2 className="text-center">PHASE FOUR</h2>
                <div className="box">
                    <div className="row">
                        <div className="col-9 box-content">
                            <p>Build Discord And Grow Social Medias</p>
                            <p>Establish & Design Website</p>
                            <p>$SPOT Token</p>
                            <p>Pre-Approval For Matrica</p>
                            <p>Pre-Approval On MagicEden Secondary</p>
                            <p>Finalize Website</p>
                        </div>
                        <div className="col-3 align-self-end p-0">
                            <Image className="img-fluid img_bottom" src={r4} width={156} height={156} alt="Phase Four"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}