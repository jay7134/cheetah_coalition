export default function Staking() {
    return ( 
	<>	
    <div id="staking" className="container ch-component page-container">
        <div className="row">
            <div className="col-md-12">
               <div className="staking-info">
                   <div className="row">
                        <div className="col-md-3 justify-content-center">
                            <h5>% of Cheetahs Staked</h5>
                            <p>N/A</p>
                        </div>
                        <div className="col-md-3 justify-content-center">
                            <h5>Available $SPOT</h5>
                            <p>N/A</p>
                        </div>
                        <div className="col-md-3 justify-content-center">
                            <h5>Active Multiplier</h5>
                            <p>N/A</p>
                        </div>
                        <div className="col-md-3 justify-content-center">
                            <h5>Total Earnings</h5>
                            <p>N/A</p>
                        </div>
                   </div>

               </div>
               <div className="staking-blocks pt-60">
                   <div className="staking-item">
                       <div className="row">
                           <div className="col-md-5">
                                <div className="stak-info">
                                <div className="stak-meta">    
                                    <span className="text-left">
                                        Your Cheetahs
                                    </span>
                                    <span className="text-right">
                                        Stake
                                    </span>
                                </div>    
                                </div>
                           </div>
                           <div className="offset-md-2 col-md-5">
                               <div className="stak-info">
                                   <div className="stak-meta">
                                    <span className="text-left">
                                        Staked Cheetahs
                                    </span>
                                    <span className="text-right">
                                        Claim
                                    </span>
                                    </div>
                                </div>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
        </div>
    </div>
    </>
    );
}