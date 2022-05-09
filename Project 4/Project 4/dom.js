//Popup screen
let popup = document.getElementById("pop-up");
function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}


// document.querySelector("#default-btn").addEventListener("change", (e) => { //CHANGE EVENT FOR UPLOADING PHOTOS
//     if (window.File && window.FileReader && window.FileList && window.Blob) { //CHECK IF FILE API IS SUPPORTED
//       const files = e.target.files; //FILE LIST OBJECT CONTAINING UPLOADED FILES
//       const output = document.querySelector("#result");
//       output.innerHTML = "";
//       for (let i = 0; i < files.length; i++) { // LOOP THROUGH THE FILE LIST OBJECT
//           if (!files[i].type.match("image")) continue; // ONLY PHOTOS (SKIP CURRENT ITERATION IF NOT A PHOTO)
//           const picReader = new FileReader(); // RETRIEVE DATA URI 
//           picReader.addEventListener("load", function (event) { // LOAD EVENT FOR DISPLAYING PHOTOS
//             const picFile = event.target;
//             const div = document.createElement("div");
//             div.innerHTML = `<img class="popup-image" src="${picFile.result}" title="${picFile.name}"/>`;
//             output.appendChild(div);
//           });
//           picReader.readAsDataURL(files[i]); //READ THE IMAGE
//       }
//     } else {
//       alert("Your browser does not support File API");
//     }
//   });


//Preview images onto modal screen 
var images = [];
   	  function image_select() {
   	  	  var image = document.getElementById('image').files;
   	  	  for (i = 0; i < image.length; i++) {
   	  	  	  if (check_duplicate(image[i].name)) {
                images.push({
   	  	  	  	    "name" : image[i].name,
   	  	  	  	    "url" : URL.createObjectURL(image[i]),
   	  	  	  	    "file" : image[i],
   	  	  	    })
   	  	  	  } else 
   	  	  	  {
   	  	  	  	 alert(image[i].name + " is already added to the list");
   	  	  	  }
   	  	  }
   	  	  document.getElementById('form').reset();
   	  	  document.getElementById('container').innerHTML = image_show();
   	  }

   	  function image_show() {
   	  	  var image = "";
				images.forEach((i) => {
   	  	  	 image += `<div class="image_container d-flex justify-content-center position-relative">
   	  	  	  	  <img src="`+ i.url +`" alt="Image">
   	  	  	  	  <span class="position-absolute" onclick="delete_image(`+ images.indexOf(i) +`)">&times;</span>
   	  	  	  </div>`;
   	  	  })
   	  	  		return image;
   	  }
   	  function delete_image(e) {
   	  	  images.splice(e, 1);
   	  	  document.getElementById('container').innerHTML = image_show();
   	  }

   	  function check_duplicate(name) {
   	  	var image = true;
   	  	if (images.length > 0) {
   	  		for (e = 0; e < images.length; e++) {
   	  			if (images[e].name == name) {
   	  				image = false;
   	  				break;
   	  			}
   	  		}
   	  	}
   	  	return image;
   	  }