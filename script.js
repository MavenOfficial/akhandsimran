function fetchDetails() {
  var humanityID = document.getElementById("humanityID").value;
  fetch("https://script.google.com/macros/s/AKfycbz67Jl6BDmU5J0ZjfjScgUSafyYX4JfB65hlGxttk76mRQtjIetMvsN8vrGm1oieIjW/exec" + encodeURIComponent(humanityID))
    .then(response => response.json())
    .then(data => {
      if (data.name) {
        document.getElementById("name").value = data.name;
        document.getElementById("mobileNumber").value = data.mobileNumber;
      } else {
        alert("Humanity ID not found");
      }
    })
    .catch(error => console.error("Error:", error));
}
