// Bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["January", "Febuary", "March", "April", "May","June","July","August"],
      datasets: [
        {
          label: "weather",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#c34fd","#3e95cd", "#8e5ea2"],
          data: [0,-2,3,6,-24,5,1,-6,20]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Weather',
        
      }
    }
});
