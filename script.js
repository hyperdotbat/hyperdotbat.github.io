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
	$("#itch").html("<img src='img/itch.png'>");
	$("#itch").attr("href","https://hypergamesdev.itch.io");
	$("#github").html("<img src='img/github.png'>");
	$("#github").attr("href","https://github.com/HyperGamesDev");
	$("#patreon").html("<img src='img/patreon.png'>");
	$("#patreon").attr("href","https://patreon.com/HyperGamesDev");
	$("#fiverr").html("<img src='img/fiverr.png'>");
	$("#fiverr").attr("href","https://fiverr.com/HyperGamesDev");
	$("#kofi").html("<img src='img/kofi.png'>");
	$("#kofi").attr("href","https://buymeacoffee.com/HyperGamesDev");
	$("#linkedin").html("<img src='img/linkedin.png'>");
	$("#linkedin").attr("href","https://linkedin.com/in/hypergamesdev");

	$("#cv_EN").html("<img src='img/cv_en.png'>");
	$("#cv_EN").attr("href","redirects/cv_EN.html");
	$("#cv_PL").html("<img src='img/cv_pl.png'>");
	$("#cv_PL").attr("href","redirects/cv_PL.html");

	if(page=='portfolio.html'){
		$("#logicbounceButton").attr("href","https://hypergamesdev.itch.io/logic-bounce");
		$("#logicbounceTitle").attr("href","https://hypergamesdev.itch.io/logic-bounce");
		$("#sss222Button").attr("href","https://hypergamesdev.github.io/sss222");
		$("#sss222Title").attr("href","https://hypergamesdev.github.io/sss222");
		$("#glitchoutButton").attr("href","https://hypergamesdev.github.io/glitchout");
		$("#glitchoutTitle").attr("href","https://hypergamesdev.github.io/glitchout");

		$("#rpsTitle").attr("href","https://hypergamesdev.github.io/rocky-paper-survivors/");
		$("#rpsButton").attr("href","https://hypergamesdev.github.io/rocky-paper-survivors/");
		$("#sss77Title").attr("href","https://gamejolt.com/games/sss17/274659");
		$("#sss77Button").attr("href","https://gamejolt.com/games/sss17/274659");
		$("#diamoCloneTitle").attr("href","https://github.com/HyperGamesDev/diamo-clone");
		$("#diamoCloneButton").attr("href","https://github.com/HyperGamesDev/diamo-clone");
		$("#planetoidsTitle").attr("href","https://github.com/HyperGamesDev/mc-planetoids");
		$("#planetoidsButton").attr("href","https://github.com/HyperGamesDev/mc-planetoids");
	}
	
},100);

function redirect_cvEN(){window.open("https://raw.githubusercontent.com/HyperGamesDev/HyperGamesDev/master/assets/CV-HyperGamesDev_EN.pdf","_self");}
function redirect_cvPL(){window.open("https://raw.githubusercontent.com/HyperGamesDev/HyperGamesDev/master/assets/CV-HyperGamesDev_PL.pdf","_self");}

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