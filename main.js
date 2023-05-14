var bookmark = document.getElementById("bookmark");
var websiteurl = document.getElementById("websiteURL");
var searchValue = document.getElementById("searchValue");
var appContainer = [];
if (localStorage.getItem("URL") != null) {
  appContainer = JSON.parse(localStorage.getItem("URL"));
  displaydata();
}
function addData() {
  var product = {
    name: bookmark.value,
    website: websiteurl.value,
  };
  appContainer.push(product);
  localStorage.setItem("URL", JSON.stringify(appContainer));
  displaydata();
  clearproduct();
}
function displaydata() {
  var term = searchValue.value;

  cartona = ``;
  for (var i = 0; i < appContainer.length; i++) {
    if (
      appContainer[i].name.toLowerCase().includes(term.toLowerCase()) == true
    ) {
      cartona += `  <div  class="bookmark1 p-5 ">
<div class="w-50 d-flex justify-content-between">
    <h2 class="text-dark fw-semibold me-5">${appContainer[i].name} </h2>
<div>
<a href="${appContainer[i].website} " class="text-decoration-none" target="_blank"  >    
<button class="btn btn-primary " >Visit</button></a>
<button onclick="deletedata(${i})" class="btn btn-danger btn2">Delete</button>
</div>

</div>
    </div>`;
    }
  }

  document.getElementById("button").innerHTML = cartona;
}
function deletedata(index) {
  appContainer.splice(index, 1);
  localStorage.setItem("URL", JSON.stringify(appContainer));
  displaydata();
}
function clearproduct() {
  bookmark.value = "";
  websiteurl.value = "";
}

function searchproducts() {
  displaydata();
}
