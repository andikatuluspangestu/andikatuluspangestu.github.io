 $.getJSON('../karya.json', function(data){
     console.log(data);
     data.forEach(function (ambilData, data) {
      var project = document.createElement("IMG");
      project.className = "myImg";
      project.setAttribute("src", ambilData.img);
      project.onclick = function () {
        window.location.href = ambilData.demo;
      };
      document.getElementById("list-project").appendChild(project).style;
     });
 });

