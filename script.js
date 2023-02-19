//import React from "react";
//import ReactDOM from "react-dom";


setTimeout(function Setup(){Animate();
	let path=window.location.pathname;
	let page=path.split("/").pop();
	$("#indexButton").attr("href","index.html");
	$("#portfolioButton").attr("href","portfolio.html");
	

	$("#allmylinks").html("<img src='img/carrd.png'>");
	$("#allmylinks").attr("href","https://hyperr.carrd.co");
	$("#twitter").html("<img src='img/twitter.png'>");
	$("#twitter").attr("href","https://twitter.com/HyperrGamesDev");
	$("#github").html("<img src='img/github.png'>");
	$("#github").attr("href","https://github.com/HyperGamesDev");
	$("#patreon").html("<img src='img/patreon.png'>");
	$("#patreon").attr("href","https://patreon.com/HyperGamesDev");
	$("#kofi").html("<img src='img/kofi.png'>");
	$("#kofi").attr("href","https://buymeacoffee.com/HyperGamesDev");
	$("#linkedin").html("<img src='img/linkedin.png'>");
	$("#linkedin").attr("href","https://linkedin.com/in/hypergamesdev");

	$("#cv_EN").html("<img src='img/cv_en.png'>");
	$("#cv_EN").attr("href","redirects/cv_EN.html");
	$("#cv_PL").html("<img src='img/cv_pl.png'>");
	$("#cv_PL").attr("href","redirects/cv_PL.html");

	if(page=='portfolio.html'){
		$("#sss222Button").attr("href","https://hypergamesdev.github.io/sss222");
		$("#sss222date").html("03.2020 - ??.????");
		$("#glitchoutButton").attr("href","https://hypergamesdev.github.io/glitchout");
		$("#glitchoutDate").html("06.2021 - ??.????");
		
		$("#glitchedoutButton").attr("href","https://github.com/HyperGamesDev/GlitchedOut-GMS-0.1-");
		$("#glitchedoutDate").html("03.2018 - 11.2019");
		$("#sss77Button").attr("href","https://github.com/HyperGamesDev/sss77");
		$("#sss77Date").html("07.2017 - 12.2019");

		$("#rockyPaperSurvButton").attr("href","https://hypergamesdev.github.io/rocky-paper-survivors/");
		$("#rockyPaperSurvDate").html("03.2022 - ??.????");
		$("#planetoidButton").attr("href","https://github.com/HyperGamesDev/mc-planetoids");
		$("#planetoidDate").html("06.2020 - ??.????");
	}
	
},100);

function redirect_cvEN(){window.open("https://raw.githubusercontent.com/HyperGamesDev/HyperGamesDev/master/assets/CV-HyperGamesDev_EN.png","_self");}
function redirect_cvPL(){window.open("https://raw.githubusercontent.com/HyperGamesDev/HyperGamesDev/master/assets/CV-HyperGamesDev_PL.png","_self");}

function Animate(){
	$("Anim").each(function(){$(this).addClass("is-visible")});
}
/*function FadeInSection(props) {
	const [isVisible, setVisible] = React.useState(true);
	const domRef = React.useRef();
	React.useEffect(() => {
	  const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => setVisible(entry.isIntersecting));
	  });
	  observer.observe(domRef.current);
	  return () => observer.unobserve(domRef.current);
	}, []);
	return (
	  <div
		className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
		ref={domRef}
	  >
		{props.children}
	  </div>
	);
  }*/
  

const delay = async (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));