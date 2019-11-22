/*var city = $("#city").val();
    var days = $("#days").val();
    if(city != '' && days != ''){
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/forecast/daily?q=' + city + "&units=metric" + "&cnt=" + days + "&APPID=dc879f4ae515cddfa61996c184a1b2a8",
            type: "GET",
            dataType: "jsonp",
            success: function(data){
                var table = '';
                var header = '<h2 style="font-weight:bold; font-size:30px; margin-top:20px;">Weather forecast for ' + data.city.name + ', ' + data.city.country + '</h2>'
                for(var i = 0; i < data.list.length; i++){
                    table += "<tr>";
                    table += "<td><img src='https://openweathermap.org/img/w/"+data.list[i].weather[0].icon+".png'></td>";
                    table += "<td>" + data.list[i].weather[0].main + "</td>";
                    table += "<td>" + data.list[i].weather[0].description + "</td>";
                    table += "<td>" + data.list[i].pressure + "hpa</td>";
                    table += "<td>" + data.list[i].deg + "&deg;</td>";
                    table += "</tr>";
                }
                $("#forecastWeather").html(table);
                $("#header").html(header);
                $("#city").val('');
                $("#days").val('') 
            }
        });
    }else{
        $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
    } 
}

*/


function forecast(){
    console.log("Hello");
    var city = document.getElementById("value").value;
    //var city = $("#value").val();
    console.log(city);
    var xmlhttp= new XMLHttpRequest();
 
    var url="http://api.openweathermap.org/data/2.5/weather?q="+city + "&APPID=dc879f4ae515cddfa61996c184a1b2a8";
    xmlhttp.open("GET", url, true);

    xmlhttp.send();
    xmlhttp.onreadystatechange=function()
    {
        if(this.readyState === 4 && this.status === 200)
        {
            var result=this.responseText;
            console.log(result);

          var x = JSON.parse(result);
         console.log(x.main.temp);
          document.getElementById("xyz").innerHTML = "<h3><u>Temperature:</u><h3> " + x.main.temp +" F";
          console.log(x.weather.description);
          document.getElementById("abc").innerHTML = "<h3><u>Wind Speed: </u><h3>" + x.wind.direction+" m/s";
          console.log(x.main.humidity);
          document.getElementById("def").innerHTML = "<h3><u>Humidity:</u><h3> " + x.main.pressure;
        }
    };
}

