import Image from 'next/image';
import cheetha1 from '../public/SpaceCheetah-1.png';
import cheetha2 from '../public/SpaceCheetah-2.png';
export default function Mint() {
    return ( 
        
        <div id="mint" className="container">
            <div className="row ch-component">
                <div className="col-md-8 offset-md-2">
                    <h1>Cheetah Coalition Live Mint</h1>
                    <div className="align-items-center row">
                        <div className="col-sm-2 text-center">
                            <Image src={cheetha1} alt="Space Cheeta 1"/>
                        </div>
                        <div className="col-sm-8 text-center">
                            <ul className='list-inline-item mint-items'>
                                <li>OG Users are allowed up to 2 Cheetahs per wallet </li>
                                <li>Whitelist Users are allowed up to 1 Cheetah per wallet </li>
                                <li>Public Sale is limited to 1 Cheetah per transaction</li>
                            </ul>
                        </div>
                        <div className="col-sm-2 text-center">
                            <Image src={cheetha2} alt="Space Cheeta 1"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="mint-box text-center">
                        <div className="mint-info">
                            <h2>MINT NOW</h2>
                            <a href="#" className="btn btn-default btn-connect">CONNECT WALLET</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
         
    );
}