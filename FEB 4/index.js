let photo_album=document.getElementById("photo-album")
const API_KEY = "Empw2mA9hLTL3Ks6DdPjG-HA6n4NTKdqrnsGUBo2tEs";

const API_SECRET = "CZqD7mrJPjpUphCldFgk0pe19PqCH1RE2qeY9cHJQWU";
let input = document.getElementsByTagName("input")[0];
input.addEventListener("input", ()=>{
photo_album.innerHTML = "";
    fetch(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${input.value}&per_page=25`)
    .then(function(res) {
        return res.json();
    })
    .then(function(res) {
       
        for(let i = 0; i < res.results.length; i = i + 1) {
            let single_result = res.results[i];
            let single_url = single_result.urls.regular;
            console.log(single_url);
            img_ref=document.createElement("img")
            img_ref.src=single_url
            photo_album.appendChild(img_ref)   
        }
    })
    
});
console.log(input);


