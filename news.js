var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=in&' +
          'apiKey=58f2334c10404549b35894647eff21d2';
        var req = new Request(url);
        
function getNews()
{
		fetch(req)
		    .then(function(response) {
		        return response.json();
		    })
		.then(response => f1(response))
		.catch(err => {
			console.log(err);
        });
        
}

function f1(resp)
{
    console.log(resp);
    document.getElementById('loading').style.display='none';
    for(var i=0;i<resp.articles.length;i++)
    {
        $('#news').append(
        `<div class='col-3 mb-5 ml-4 mr-4'>
            <div class="card " style="width: 18rem;height:25rem">
                <img src=${resp.articles[i].urlToImage} class="card-img-top">
                    <div class="card-body">
                        <p class="card-text">${resp.articles[i].title}</p>
                        <a href=${resp.articles[i].url} class="btn btn-primary">Read</a>
                    </div>
                </div>
            </div>
        </div>`
        )
    }
}