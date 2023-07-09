document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var latitude = document.getElementById('latitude').value;
    var longitude = document.getElementById('longitude').value;
    var detailType = document.getElementById('detailType').value;
  
    // Make API call to fetch weather forecast based on the selected coordinates and detail type
    // You need to replace 'YOUR_API_KEY' and 'API_ENDPOINT' with the actual values from your weather API
  
    var apiKey = 'YOUR_API_KEY';
    var apiEndpoint = 'API_ENDPOINT';
  
    var url = apiEndpoint + '?lat=' + latitude + '&lon=' + longitude + '&detailType=' + detailType + '&apiKey=' + apiKey;
  
    // Fetch forecast data
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Display forecast data in the forecast container
        var forecastContainer = document.getElementById('forecastContainer');
        forecastContainer.innerHTML = '';
  
        // Render forecast data based on the selected detail type
        if (detailType === 'current') {
          // Display current weather Minute forecast for 1 hour
          var forecast = data.forecast; // Assuming the API response provides the forecast data
          var forecastText = document.createTextNode(forecast);
          forecastContainer.appendChild(forecastText);
        } else if (detailType === 'hourly') {
          // Display hourly forecast for 48 hours
          var hourlyForecast = data.hourlyForecast; // Assuming the API response provides the hourly forecast data
          for (var i = 0; i < hourlyForecast.length; i++) {
            var forecast = hourlyForecast[i];
            var forecastText = document.createTextNode(forecast);
            forecastContainer.appendChild(forecastText);
            forecastContainer.appendChild(document.createElement('br'));
          }
        } else if (detailType === 'daily') {
          // Display daily forecast for 7 days
          var dailyForecast = data.dailyForecast; // Assuming the API response provides the daily forecast data
          for (var i = 0; i < dailyForecast.length; i++) {
            var forecast = dailyForecast[i];
            var forecastText = document.createTextNode(forecast);
            forecastContainer.appendChild(forecastText);
            forecastContainer.appendChild(document.createElement('br'));
          }
        }
      })
      .catch(error => {
        console.error('Error fetching weather forecast:', error);
      });
  });
  