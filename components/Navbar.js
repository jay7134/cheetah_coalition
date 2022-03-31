import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from '../public/cheetah-coailtion-logo.png';
import tw_icon from '../public/twitter.svg';
import disc_icon from '../public/discord.svg';
export default function Navbar() {
	const router = useRouter();
    return ( 
	<>	
	<header className="site-header page-element site-header--sticky  site-header--full">
		<nav className="navbar navbar-expand-lg navbar-dark fixed-top cheetah-nav justify-content-center">
  			<div className="container-fluid">
			  	<Link href="/"><a className="navbar-brand abs site-header__logo-link">
					<Image className="site_logo animate__animated animate__fadeInDown" src={logo} alt="Cheetah Coialition" width={256} height={78}/>
				</a></Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
  					<ul className="site-nav navbar-nav me-auto">
						<li className="nav-item" data-target="#navbarSupportedContent" data-toggle="collapse">
							<Link href="/"><a className={`site-nav__link ${ router.pathname == "/" ? "active" : ""} `}>
        						<span className="site-nav__title">Home</span>
							</a></Link>
						</li>
						<li className="nav-item">
							<Link href="/faq"><a className={`site-nav__link ${ router.pathname == "/faq" ? "active" : ""} `}>
        						<span className="site-nav__title">FAQ</span>
							</a></Link>
						</li>
						<li className="nav-item">
							<Link href="/roadmap"><a className={`site-nav__link ${ router.pathname == "/roadmap" ? "active" : ""} `}>
        						<span className="site-nav__title">Roadmap</span>
							</a></Link>
						</li>
						
					</ul>
				</div>
				
				<div className="d-flex">
					<div className="header--social d-sm-inline-block">
						<Link href="#"><a target="_blank" className="social-link">
							<Image src={tw_icon} alt="Twitter" width={55} height={38}/>
						</a></Link>
					</div>
					<div className="header--social d-sm-inline-block">
						<Link href="#"><a target="_blank" className="social-link">
							<Image src={disc_icon} alt="Discord" width={55} height={38}/>
						</a></Link>
					</div>
				</div>
			</div>
		</nav>
	</header>
	</>
    );
}