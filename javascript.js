window.onload = function(){ 
 function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
	cnt=0;
function getQuote(cnt){
	let quotesAndAuthors=[
		{quote: "All are lunatics, but he who can analyze his delusion is called a philosopher.", author: "Ambrose Bierce"},
		{quote: "I'm as mad as hell, and I'm not going to take this anymore!", author: "Network"},
		{quote: "Women might be able to fake orgasms. But men can fake a whole relationship.", author: "Sharon Stone"},
		{quote: "The full use of your powers along lines of excellence.", author: "Definition of 'happiness' by J"},
		{quote: "Try to learn something about everything and everything about something.", author: "Thomas Henry Huxley"}
	];
		return quotesAndAuthors[cnt];
		
}	


document.getElementById('next').onclick=function setQuote(){
	// document.getElementById('text').innerHTML=
	let setColor=getRandomColor();
	$("body, #next").css({"background-color": setColor, "transition":"background-color 0.7s ease"});
	$('.quote-text, .quote-author').css("color", setColor);
	$('.quote-text, .quote-author').css({"color": setColor, "transition":"background-color 0.7s ease"});
	
	if(cnt<5){
		//console.log(getQuote(cnt));
		document.getElementById('text').innerHTML=getQuote(cnt).quote.toString();
		document.getElementById('author').innerHTML='-' + getQuote(cnt).author.toString();
		cnt++;
	}
	else{
		cnt=0;
		document.getElementById('text').innerHTML=getQuote(cnt).quote.toString();
		document.getElementById('author').innerHTML='-' + getQuote(cnt).author.toString();
		cnt++;
	}
}

};
