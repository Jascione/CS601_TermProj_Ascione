
var photoSwap = new Vue({
  el: "#photoSwap",
  data: {
    imageLinks:[
      "images/luigi.jpg",
      "images/ethanandnoahpjs.jpg",
      "images/ethannoahcostume.jpg"
    ],
    currentImage:"images/luigi.jpg",
    currentIndex: '0',
    currentFigCaption: "This Ethan as Luigi from Luigi's Mansion 3, sporting a custom made Poltergust G-00",
    figCaptions: [
      "This Ethan as Luigi from Luigi's Mansion 3, sporting a custom made Poltergust G-00",
      "This Ethan and Noah in some matching Halloween Pjs",
      "This Ethan and Noah in their Halloween costumes!"
    ]
  },
  methods: {
    swapImageFwd: function () {
     let i = photoSwap.currentIndex;
      if (i < (photoSwap.imageLinks.length -1)){
      i++
      photoSwap.currentImage = photoSwap.imageLinks[i];
      photoSwap.currentFigCaption = photoSwap.figCaptions[i];
      photoSwap.currentIndex = i
      console.log(i);
    }else{
      i = 0;
      photoSwap.currentImage = photoSwap.imageLinks[i];
      photoSwap.currentFigCaption = photoSwap.figCaptions[i];
      photoSwap.currentIndex = i;
      console.log(i);
    };
    },
    swapImageBwd: function () {
     let i = photoSwap.currentIndex;
      if (i > 0){
        i--;
        photoSwap.currentImage = photoSwap.imageLinks[i];
        photoSwap.currentFigCaption = photoSwap.figCaptions[i];
        photoSwap.currentIndex = i
        console.log(i);
      }else{
        i = (photoSwap.imageLinks.length - 1)
        photoSwap.currentImage = photoSwap.imageLinks[i];
        photoSwap.currentFigCaption = photoSwap.figCaptions[i];
        photoSwap.currentIndex = i;
        console.log(i);
      }      
    }
  }
});

console.log(photoSwap.imageLinks.length);


   


