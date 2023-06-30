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
var areaChartOptions = {
  series: [
    {
      name: "Thrust",
      data: [31, 40, 28, 51, 42, 109, 10],
    },
    {
      name: "Pressure At Nozzle",
      data: [11, 12, 45, 32, 34, 52, 34],
    },
  ],
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  colors: ["#000000", "#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: "Thrust",
      },
    },
    {
      opposite: true,
      title: {
        text: "Pressure At Nozzle",
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

var areaChart = new ApexCharts(
  document.querySelector("#area-chart1"),
  areaChartOptions
);
areaChart.render();

// AREA CHART
var areaChartOptions = {
  series: [
    {
      name: "Time",
      data: [1, 2, 3, 4, 5, 6, 7],
    },
    {
      name: "Pressure At Nozzle",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  colors: ["#4f35a1", "#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: "Pressure Sensor At Oxidiser",
      },
    },
    {
      opposite: true,
      title: {
        text: "Time",
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

var areaChart = new ApexCharts(
  document.querySelector("#area-chart2"),
  areaChartOptions
);
areaChart.render();

//AREA CHART 3
var areaChartOptions = {
  series: [
    {
      name: "Load",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Time",
      data: [1, 2, 3, 4, 5, 6, 7],
    },
  ],
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  colors: ["red", "#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: "Load",
      },
    },
    {
      opposite: true,
      title: {
        text: "Time",
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

var areaChart = new ApexCharts(
  document.querySelector("#area-chart3"),
  areaChartOptions
);
areaChart.render();

//AREA CHART4
var areaChartOptions = {
  series: [
    {
      name: "Thrust",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Pressure At Nozzle",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  colors: ["#4f35a1", "#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: "Pressure Sensor At Nozzle",
      },
    },
    {
      opposite: true,
      title: {
        text: "Pressure Sensor At Oxidiser",
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

var areaChart = new ApexCharts(
  document.querySelector("#area-chart4"),
  areaChartOptions
);
areaChart.render();

// // SIDEBAR TOGGLE
// var sidebarOpen = false;
// var sidebar = document.getElementById("sidebar");

// function openSidebar() {
//   if (!sidebarOpen) {
//     sidebar.classList.add("sidebar-responsive");
//     sidebarOpen = true;
//   }
// }

// function closeSidebar() {
//   if (sidebarOpen) {
//     sidebar.classList.remove("sidebar-responsive");
//     sidebarOpen = false;
//   }
// }

// // ---------- CHARTS ----------
// // AREA CHART
// var areaChartOptions = {
//   series: [],
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
//   labels: [],
//   markers: {
//     size: 0,
//   },
//   yaxis: [
//     {
//       title: {
//         text: "Pressure Sensor At Injector",
//       },
//     },
//     {
//       opposite: true,
//       title: {
//         text: "Pressure Sensor At Nozzle",
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

// // Read .csv file
// fetch("data.csv")
//   .then((response) => response.text())
//   .then((csvData) => {
//     // Parse the CSV data
//     var lines = csvData.split("\n");
//     var headers = lines[0].split(",");
//     var pressure1Index = headers.indexOf("Pressure2");
//     var pressure2Index = headers.indexOf("Pressure1");
//     var data = [];

//     for (var i = 1; i < lines.length; i++) {
//       var currentLine = lines[i].split(",");
//       var pressure1 = parseFloat(currentLine[pressure1Index]);
//       var pressure2 = parseFloat(currentLine[pressure2Index]);
//       data.push([pressure1, pressure2]);
//     }

//     // Update chart options with the parsed data
//     areaChart.updateOptions({
//       series: [
//         {
//           name: "Pressure Sensor At Injector",
//           data: data,
//         },
//       ],
//       labels: data.map((point) => point[0]),
//     });
//   });
