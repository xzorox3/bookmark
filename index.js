
var inputName =document.getElementById('siteName');
var inputUrl =document.getElementById('siteUrl');
var bookmark =document.getElementById('newinput');
var allbookmark=[];

allbookmark = JSON.parse(localStorage.getItem('allbookmark')) || []; 
displayData()

function addBookmark(e){
    var product ={
        bookmark:inputName.value ,
        url:inputUrl.value ,
    }
    allbookmark.push(product); 
    displayData();
    localStorage.setItem('allbookmark',JSON.stringify(allbookmark));
    
    
    e.preventDefault()  
} 
function displayData() {
    
    var cartoona ="";
    
    for (var i = 0; i < allbookmark.length; i++) {
        cartoona+=`
        <tr>
        <td>${i + 1}</td>
        <td>${allbookmark[i].bookmark}</td>
        <td><button type="button" class=" btn btn-warning" ><a href="${allbookmark[i].url}" target="_blank" >visit</a></button></td>
        <td><button type="button" class=" btn btn-danger" onclick="deletebookmark(${i})">Delete</button></td>
        </tr> 
        `        
        bookmark.innerHTML=cartoona
    } 
}

function deletebookmark(index){
    allbookmark.splice(index,1)
    displayData() 
    localStorage.setItem('allbookmark',JSON.stringify(allbookmark));
}




 











