// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// AREA CHART 1
// var areaChartOptions = {
//   series: [
//     {
//       name: "Thrust",
//       data: [31, 40, 28, 51, 42, 109, 100],
//     },
//     {
//       name: "Pressure At Nozzle",
//       data: [11, 32, 45, 32, 34, 52, 41],
//     },
//   ],
//   chart: {
//     height: 350,
//     type: "area",
//     toolbar: {
//       show: false,
//     },
//   },
//   colors: ["#4f35a1", "#246dec"],
//   dataLabels: {
//     enabled: false,
//   },
//   stroke: {
//     curve: "smooth",
//   },
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
//   markers: {
//     size: 0,
//   },
//   yaxis: [
//     {
//       title: {
//         text: "Purchase Orders",
//       },
//     },
//     {
//       opposite: true,
//       title: {
//         text: "Sales Orders",
//       },
//     },
//   ],
//   tooltip: {
//     shared: true,
//     intersect: false,
//   },
// };

// var areaChart = new ApexCharts(
//   document.querySelector("#area-chart1"),
//   areaChartOptions
// );
// areaChart.render();

// // AREA CHART
// var areaChartOptions = {
//   series: [
//     {
//       name: "Thrust",
//       data: [31, 40, 28, 51, 42, 109, 100],
//     },
//     {
//       name: "Pressure At Nozzle",
//       data: [11, 32, 45, 32, 34, 52, 41],
//     },
//   ],
//   chart: {
//     height: 350,
//     type: "area",
//     toolbar: {
//       show: false,
//     },
//   },
//   colors: ["#4f35a1", "#246dec"],
//   dataLabels: {
//     enabled: false,
//   },
//   stroke: {
//     curve: "smooth",
//   },
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
//   markers: {
//     size: 0,
//   },
//   yaxis: [
//     {
//       title: {
//         text: "Purchase Orders",
//       },
//     },
//     {
//       opposite: true,
//       title: {
//         text: "Sales Orders",
//       },
//     },
//   ],
//   tooltip: {
//     shared: true,
//     intersect: false,
//   },
// };

// var areaChart = new ApexCharts(
//   document.querySelector("#area-chart2"),
//   areaChartOptions
// );
// areaChart.render();

// //AREA CHART 3
// var areaChartOptions = {
//   series: [
//     {
//       name: "Thrust",
//       data: [31, 40, 28, 51, 42, 109, 100],
//     },
//     {
//       name: "Pressure At Nozzle",
//       data: [11, 32, 45, 32, 34, 52, 41],
//     },
//   ],
//   chart: {
//     height: 350,
//     type: "area",
//     toolbar: {
//       show: false,
//     },
//   },
//   colors: ["#4f35a1", "#246dec"],
//   dataLabels: {
//     enabled: false,
//   },
//   stroke: {
//     curve: "smooth",
//   },
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
//   markers: {
//     size: 0,
//   },
//   yaxis: [
//     {
//       title: {
//         text: "Purchase Orders",
//       },
//     },
//     {
//       opposite: true,
//       title: {
//         text: "Sales Orders",
//       },
//     },
//   ],
//   tooltip: {
//     shared: true,
//     intersect: false,
//   },
// };

// var areaChart = new ApexCharts(
//   document.querySelector("#area-chart3"),
//   areaChartOptions
// );
// areaChart.render();

// //AREA CHART4
// var areaChartOptions = {
//   series: [
//     {
//       name: "Thrust",
//       data: [31, 40, 28, 51, 42, 109, 100],
//     },
//     {
//       name: "Pressure At Nozzle",
//       data: [11, 32, 45, 32, 34, 52, 41],
//     },
//   ],
//   chart: {
//     height: 350,
//     type: "area",
//     toolbar: {
//       show: false,
//     },
//   },
//   colors: ["#4f35a1", "#246dec"],
//   dataLabels: {
//     enabled: false,
//   },
//   stroke: {
//     curve: "smooth",
//   },
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
//   markers: {
//     size: 0,
//   },
//   yaxis: [
//     {
//       title: {
//         text: "Purchase Orders",
//       },
//     },
//     {
//       opposite: true,
//       title: {
//         text: "Sales Orders",
//       },
//     },
//   ],
//   tooltip: {
//     shared: true,
//     intersect: false,
//   },
// };

// var areaChart = new ApexCharts(
//   document.querySelector("#area-chart4"),
//   areaChartOptions
// );
// areaChart.render();

// AREA CHART 1
Papa.parse("data.csv", {
  download: true,
  complete: function (results) {
    var data = results.data;
    var labels = data.map((row) => row[0]);
    var thrustData = data.map((row) => Number(row[1]));
    var pressureData = data.map((row) => Number(row[2]));

    var areaChartOptions = {
      // ...other properties
      series: [
        {
          name: "Thrust",
          data: thrustData,
        },
        {
          name: "Pressure At Nozzle",
          data: pressureData,
        },
      ],
      labels: labels,
      // ...other properties
    };

    var areaChart = new ApexCharts(
      document.querySelector("#area-chart1"),
      areaChartOptions
    );
    areaChart.render();
  },
});
