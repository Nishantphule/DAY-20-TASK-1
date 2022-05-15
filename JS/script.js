

let searchbar = document.createElement('input')
searchbar.type="text"
searchbar.id="searchbar"
searchbar.placeholder="Search a breed to adopt..."
searchbar.setAttribute("onkeyup","searchFun()")
document.getElementById("catsearch").appendChild(searchbar)



const searchFun = () =>{
  var input, filter, tablerow, tr, td, i, txtValue;
  input = document.getElementById("searchbar");
  filter = input.value.toUpperCase();
  tablerow = document.getElementById("data");
  tr = tablerow.getElementsByTagName("tr");
  for(i=0;i<tr.length;i++){
    td = tr[i].getElementsByTagName("td")[0]
    if(td){
      txtValue = td.textContent || td.innerText;
      if(txtValue.toUpperCase().indexOf(filter) > -1){
        tr[i].style.display = "";
      }else{
        tr[i].style.display = "none";
      }
    }
  }
}

fetch("https://api.thecatapi.com/v1/breeds").then(res => {res.json()
    .then(data => {
        console.log(data);
        if (data.length > 0) {
          var list = "";
          data.forEach((Data) => {
            list += "<tr>";
            list += "<td>" + Data.name + "</td>";
            list += "<td>" + Data.temperament + "</td>";
            list += "<td>" + Data.origin + "</td>";
            list += "<td>"+Data.description+ "</td>";
            list += "<td><img src="+ Data.image.url + "> </td>";
          });
          document.getElementById('data').innerHTML = list;
        }
      }
    )
  }
)

const showbtn = document.getElementById("See");
const Table = document.getElementById("details-table")
showbtn.addEventListener('click', () => {
  if(showbtn.innerHTML==="Adopt Now"){
    Table.style.display = "block"
    searchbar.style.display = "block"
  showbtn.innerHTML = "Hide details"
  }
  else if(showbtn.innerHTML==="Hide details"){
    Table.style.display = "none"
    searchbar.style.display = "none"
  showbtn.innerHTML = "Adopt Now"
  }
})


