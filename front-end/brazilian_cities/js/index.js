$(document).ready(function($) {
    console.log( "ready!" );

    var strings = {
   		"title" : "Big Cities of Brazil",
   		"desc" : "This site offers its readers true and recent news about Brasil big cities",
   		"aside" : "+ Cities",
   		"recent_notices" : "Recent News",
   		"article_1" : "With more than 44 million inhabitants, or about 22% of the Brazilian population, it is the most populous state in Brazil, the third most populous political unit in South America (surpassed by Colombia and the rest of the Brazilian federation) and the national subdivision most populous region of the American continent. The population of São Paulo is one of the most diversified in the country and is mainly descended from Italians, who began to emigrate to the country at the end of the 19th century, Portuguese, who colonized Brazil and settled the first European settlements in the region, native Amerindian peoples, of African peoples and of migrants from other regions of the country. Other major immigrant currents, such as Arabs, Germans, Spaniards, Japanese and Chinese, also had a significant presence in the ethnic composition of the local population.",
   		"article_2" : "It is one of the main economic, cultural and financial centers of the country. It is internationally renowned for its cultural and landscape icons such as the Sugar Loaf Mountain, the Corcovado Hill with the Cristo Redentor statue, the beaches of Copacabana, Ipanema and Barra Tijuca Stadium (among others), Maracanã Stadium, Nilton Santos Stadium, bohemian neighborhood of Lapa and its arches, the Municipal Theater of Rio de Janeiro, the forests of Tijuca and Pedra Branca, Quinta da Boa Vista, National Library, the island of Paquetá, the New Year's Eve in Copacabana, the Carioca carnival, Bossa Nova and samba.",
   		"article_3" : "Curitiba is a Brazilian municipality, capital of the state of Paraná, located at 934 meters of altitude in the first paranaense plateau, to approximately 110 kilometers of the Atlantic Ocean, distant 1 386 km to the south of Brasília, federal capital. With 1 893 997 inhabitants, it is the most populous municipality of Paraná and the South region, besides being the 8th most populous of the country, according to population estimate calculated by IBGE for July 1, 2016. Founded in 1693, from a small Curitiba became an important commercial stop with the opening of the tropeira road between Sorocaba and Viamão, and in 1853 it was the capital of the newly emancipated Province of Paraná. Since then, the city, known for its wide streets, has maintained a pace of urban growth strengthened by the arrival of a large number of European immigrants throughout the nineteenth century, mostly Germans, Poles, Ukrainians and Italians, who contributed to cultural diversity still permanent.",
   		"footer" : "footer of the site Big Cities of Brazil"
   };
	
	// append div
	placesArray = (document.getElementsByClassName("places2"));
	
	for (var index = 0; index < placesArray.length; index++) {
		$(placesArray[index]).find("p").addClass("hideContent")
		$(placesArray[index]).find(".place2").append("<div class='show-more'> <a href='#'>Show More</a> </div>");
		
	}
	
	// hide/show content
	$(".show-more").on("click", function() {
		var $this = $(this); 
		var $content = $this.prev("p");
		var linkText = $this.children().text();
    
		if(linkText === "Show More"){
			linkText = "Show Less";
			$content.removeClass('hideContent');
		} else {
			linkText = "Show More";
			$content.addClass('hideContent');
		};

    $this.children().text(linkText);
    return false;
   
	});
	
	// internacionalizacao de alguns elementos da tela
	$("title")[0].innerHTML=strings.title; 
	$("h2")[0].innerHTML=strings.title;                                                                                                             
	$("p")[0].innerHTML=strings.desc;
	$($("aside")[0]).children("h3")[0].innerHTML=strings.aside
	$($(".pai")[0]).children("h2")[0].innerHTML=strings.recent_notices
	$($(".place2")[0]).children("p")[0].innerHTML = strings.article_1;
	$($(".place2")[1]).children("p")[0].innerHTML = strings.article_2;
	$($(".place2")[2]).children("p")[0].innerHTML = strings.article_3;
	$($("blockquote")[0]).innerHTML = strings.footer;

		

});

(jQuery);