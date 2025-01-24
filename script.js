//import React from "react";
//import ReactDOM from "react-dom";


setTimeout(function Setup(){Animate();
	let path=window.location.pathname;
	let page=path.split("/").pop();
	$("#indexButton").attr("href","index.html");
	$("#aboutmeButton").attr("href","aboutme.html");
	

	$("#allmylinks").html("<img src='img/carrd.png'>");
	$("#allmylinks").attr("href","https://hyperdotbat.carrd.co");
	$("#twitter").html("<img src='img/twitter.png'>");
	$("#twitter").attr("href","https://twitter.com/hyperdotbat");
	$("#itch").html("<img src='img/itch.png'>");
	$("#itch").attr("href","https://hyperdotbat.itch.io");
	$("#github").html("<img src='img/github.png'>");
	$("#github").attr("href","https://github.com/hyperdotbat");
	$("#patreon").html("<img src='img/patreon.png'>");
	$("#patreon").attr("href","https://patreon.com/hyperdotbat");
	$("#fiverr").html("<img src='img/fiverr.png'>");
	$("#fiverr").attr("href","https://fiverr.com/HyperGamesDev");
	$("#kofi").html("<img src='img/kofi.png'>");
	$("#kofi").attr("href","https://buymeacoffee.com/HaipaDev");
	$("#linkedin").html("<img src='img/linkedin.png'>");
	$("#linkedin").attr("href","https://linkedin.com/in/hyperdotbat");

	$("#cv_EN").html("<img src='img/cv_en.png'>");
	$("#cv_EN").attr("href","redirects/cv_EN.html");
	$("#cv_PL").html("<img src='img/cv_pl.png'>");
	$("#cv_PL").attr("href","redirects/cv_PL.html");

	if(page=='portfolio.html'){
		$("#logicbounceButton").attr("href","https://hyperdotbat.itch.io/logic-bounce");
		$("#logicbounceTitle").attr("href","https://hyperdotbat.itch.io/logic-bounce");
		$("#sss222Button").attr("href","https://hyperdotbat.github.io/sss222");
		$("#sss222Title").attr("href","https://hyperdotbat.github.io/sss222");
		$("#glitchoutButton").attr("href","https://hyperdotbat.github.io/glitchout");
		$("#glitchoutTitle").attr("href","https://hyperdotbat.github.io/glitchout");

		$("#rpsTitle").attr("href","https://hyperdotbat.github.io/rocky-paper-survivors/");
		$("#rpsButton").attr("href","https://hyperdotbat.github.io/rocky-paper-survivors/");
		$("#sss77Title").attr("href","https://gamejolt.com/games/sss17/274659");
		$("#sss77Button").attr("href","https://gamejolt.com/games/sss17/274659");
		$("#diamoCloneTitle").attr("href","https://github.com/hyperdotbat/diamo-clone");
		$("#diamoCloneButton").attr("href","https://github.com/hyperdotbat/diamo-clone");
		$("#planetoidsTitle").attr("href","https://github.com/hyperdotbat/mc-planetoids");
		$("#planetoidsButton").attr("href","https://github.com/hyperdotbat/mc-planetoids");
	}
	
},100);

function redirect_cvEN(){window.open("https://raw.githubusercontent.com/hyperdotbat/hyperdotbat/master/assets/CV-hyperdotbat_EN.pdf","_self");}
function redirect_cvPL(){window.open("https://raw.githubusercontent.com/hyperdotbat/hyperdotbat/master/assets/CV-hyperdotbat_PL.pdf","_self");}

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