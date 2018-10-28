// for ( var i = 0; i <= 8; i++ ) {
//   let
// }
//window.onload = function() {
// var canvas = $("canvas"),  //jQuery selector, similar to querySelectorAll()
// //...
//
// function simulate(e) {
//     var evt = document.createEvent("MouseEvents");
//     evt.initMouseEvent("mousemove", true, true, window,
//         0, e.screenX, e.screenY, e.clientX, e.clientY, false, false, false, false, 0, null);
//     canvas[0].dispatchEvent(evt);
// }
//
// $("body > *").each(function () {
//     this.addEventListener("mousemove", simulate);
// });

  for (let i = 1; i <= 9; i++){
    var str = "break" + i.toString();
    var breakPoint = document.getElementById(str);
    breakPoint.style.display = "none";
  }
  var topProj = document.getElementById("top");
  topProj.style.display = "none";
  var topInfo = document.getElementById("topinfo");
  topInfo.style.display = "none";

// ionic.js

// var str = "32514";
// var newstr = [];
// for (var i = 0; i < str.length; i++) {
//   var j = parseInt(str[i]);
//   newstr[j-1] = (i+1).toString();
// }
//
// var str2 = "23451";
// var newstr2 = [];
// var pwr = 1;
// for (var i = 0; i < str2.length; i++) {
//   newstr2[(i-pwr) % str2.length] = str2[i];
// }
//
//
//
// console.log("invert");
// console.log(newstr);
// console.log("pwr");
// console.log(newstr2);

function showHide(v) {
  var selectedThumbnail = v.toString();
  var aboveDiv = "selectedDiv" + (v-1).toString();


  let selected = "selectedDiv" + selectedThumbnail;

  let tnail = document.getElementById("box" + v.toString());
  let tnail_html = tnail.innerHTML;
  let tnailPrev = document.getElementById("box" + (v-1).toString());

  let x = document.getElementById(selected);
  let j = document.getElementById(aboveDiv);
  var wrap = document.getElementsByClassName("wrap")[0];
  // var top = document.getElementById("top");

  //var span = document.createElement('span');

  for (let i = 1; i <= 9; i++) {

    var i_str = i.toString();
    var breakPoint = document.getElementById("break" + i_str);

    if (i_str === selectedThumbnail) {
      if (topProj.style.display === "block") {
        //x.style.display = "none";
        // removes new line
        topProj.style.display = "none";
        topInfo.style.display = "none";
        //tnailPrev.style.display = "block";
        //breakPoint.style.display = "none";
      }
      else {
        topProj.style.display = "block";
        topInfo.style.display = "block";
        topProj.innerHTML = tnail_html;
        topinfo.innerHTML = x.innerHTML;
        //tnail.style.display = "none";
        wrap.scrollIntoView();

        //x.style.display = "block";
        //breakPoint.style.display = "block";
        console.log(wrap.childNodes.innerHTML);
        // makes new line
      }
    }
    else {
      // when a thumbnail is clicked, these below which are not the selected will be set to none
      var iselected = "selectedDiv" + i.toString();
      document.getElementById(iselected).style.display = "none";
    }
  }
}

// function showHide(v) {
//   var selectedThumbnail = v.toString();
//   var aboveDiv = "selectedDiv" + (v-1).toString();
//
//   let selected = "selectedDiv" + selectedThumbnail;
//
//   let x = document.getElementById(selected);
//   let j = document.getElementById(aboveDiv);
//
//
//   //var span = document.createElement('span');
//
//   for (let i = 1; i <= 9; i++) {
//
//     var i_str = i.toString();
//     var breakPoint = document.getElementById("break" + i_str);
//
//     if (i_str === selectedThumbnail) {
//       if (x.style.display === "block") {
//         x.style.display = "none";
//         // removes new line
//         breakPoint.style.display = "none";
//       }
//       else {
//         x.style.display = "block";
//         breakPoint.style.display = "block";
//         // makes new line
//       }
//     }
//     else {
//       // when a thumbnail is clicked, these below which are not the selected will be set to none
//       var iselected = "selectedDiv" + i.toString();
//       document.getElementById(iselected).style.display = "none";
//     }
//   }
// }
