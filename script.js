var title="About Me";
var desc="Hey Im <b>Hyper!</b><br>\
A 19 year old developer<br>\
that found the passion of creating games<br>\
at the age of 14 back in 2017<br><br>\
\
I created my first game in GMS following a HeartBeast tutorial<br>\
trying to change some stuff on the way as I learned.<br>\
I published it on 31st of August 2017<br>\
called <i>Best Space Shooter 2017</i> (lmao I know)<br>\
then up till December 2019 I pushed through and updated<br>\
it adding a lot of new features and changed the name to <a href='https://github.com/HyperGamesDev/sss77'><i>SSS77</i></a><br><br>\
\
From January 2020 I started working in Unity and still am<br>\
on my biggest project called <a href='https://hypergamesdev.github.io/sss222' target='_blank'><b>SSS222</b></a><br><br>\
Im also the founder of <a href='https://hyperlemonstudios.github.io'><i>HyperLemonStudios</i></a><br><br>\
\
If you want to know more about me the best I can say<br>\
besides gamedev and gaming in general is<br>\
Im interested in Japanese culture and the language!\
";
var footer="HyperGamesDev® | HyperLemonStudios® | Maciej Krefft | 2017-2022";

var pageName1="About Me";
var pageName2="Portfolio";

setTimeout(function Setup(){
	let path=window.location.pathname;
	let page=path.split("/").pop();
	$("#index").children("span").html(pageName1);
	$("#portfolio").children("span").html(pageName2);
	$("#index").attr("href","index.html");
	$("#portfolio").attr("href","portfolio.html");
	$(".footer").children("footer").html(footer);
	
	if(page=='portfolio.html'){
		title=pageName2;
		desc="";
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
	}else{
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

		$("#cv_EN").html("CV_EN");
		$("#cv_EN").attr("href","redirects/cv_EN.html");
		$("#cv_PL").html("CV_PL");
		$("#cv_PL").attr("href","redirects/cv_PL.html");
	}
	$("#title").html(title);
	$("#desc").html(desc);
},100);

function redirect_cvEN(){window.open("https://raw.githubusercontent.com/HyperGamesDev/HyperGamesDev/master/Grafika%20Social/CV-HyperGamesDev_EN.png","_self");}
function redirect_cvPL(){window.open("https://raw.githubusercontent.com/HyperGamesDev/HyperGamesDev/master/Grafika%20Social/CV-HyperGamesDev_PL.png","_self");}

const delay = async (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));