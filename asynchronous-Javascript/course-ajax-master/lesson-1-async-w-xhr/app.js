
let searchedForText="";
(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        searchedForText = searchField.value;

		const unsplashRequest = new XMLHttpRequest();
		unsplashRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
		unsplashRequest.onload = addImage;
		unsplashRequest.onerror = function(err){console.log("Error generated:", err);};
		unsplashRequest.setRequestHeader('Authorization', 'Client-ID f7a64103f53cc45537eea148e1ed9ea5afa9ba29a93302e0743d3b58d733712e');
		unsplashRequest.send();

		const articleRequest = new XMLHttpRequest();
		articleRequest.onload = addArticles;
		articleRequest.onerror = function(err){console.log("Error generated:", err);};
		articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=Y9IfAGjgOeO24tcESQvCfjnJewn8VTc7`);
		articleRequest.send();

    });
})();

function addImage(){
			const data = JSON.parse(this.responseText);
			const firstImage = data.results[0];
			console.log(firstImage);

			const htmlContent = `<figure>
			<img src = "${firstImage.urls.small}" alt = "${searchedForText}">
			<figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
			</figure>`
			const elem = document.getElementById("response-container1");
			elem.innerHTML = htmlContent;
			console.log(htmlContent);
}
function addArticles () 
		{
			data = JSON.parse(this.responseText);
			//console.log(data);
			//console.log(data.response.docs[0].lead_paragraph);
			let htmlContent = '<ol>'+ data.response.docs.map(article=>`<li class="article"> <h2><a href="${article.web_url}">${article.headline.main}</a></h2><p>${article.snippet}</p> </li>`).join('')+'</ol>';
			const elem = document.getElementById("response-container2");
			elem.innerHTML= htmlContent;
			console.log(data);

		}


