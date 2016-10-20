function sizeControls() {
    var videoWhidth = $("video").width();
    $("#video-controls").css("width", videoWhidth + "px");
    $(".input").css("width", videoWhidth + "px");
    console.log(videoWhidth);
}

window.onload = sizeControls;
window.onresize = sizeControls;

$("#back").click(function(){
  var video = $("video")[0];
  if(!video.paused){
    video.currentTime = Math.max(0, video.currentTime-10);
  }
})
$("#for").click(function(){
  var video = $("video")[0];
  if(!video.paused){
    video.currentTime = Math.min(video.duration, video.currentTime+10);
  }
})
$("#stop").click(function(){
  var video = $("video")[0];
    video.currentTime = 0;
})
$("#forward").click(function(){
  var video = $("video")[0];
  if(!video.paused){
    video.playbackRate += .25;
    $("#backward").html(video.playbackRate+"X");
    console.log(video.playbackRate);
  }
})
$("#backward").click(function(){
  var video = $("video")[0];
    video.playbackRate -= .25;
    $("#backward").html(video.playbackRate+"X");
    console.log(video.playbackRate);
})
$("#video").mouseleave(function(){
  $("#video-controls").css('visibility', 'hidden');
})
$("#video").mouseover(function(){
    $("#video-controls").css('visibility', 'visible');
})
$("#video-controls").mouseover(function(){
    $("#video-controls").css('visibility', 'visible');
})
$("#btn-input").on('click', function(){
  var url = $("#load-video").val();
  if(url === ''){
    alert('You need an url!');
  }else{

    $("#video source").remove()
    $("#video")[0].src= url;
    saveState();
  }
})

function saveState(){
  localStorage.setItem("last-played", $("#video source").attr('src'));
  localStorage.setItem("last-currentTime", $("#video")[0].currentTime);
}
setInterval(saveState,1000);

function loadState(){
  if(!localStorage.getItem("last-played")||!localStorage.getItem('last-currentTime')){
    return;
  }
  $("#video")[0].src = localStorage.getItem("last-played");
  video.play()
  .then(()=> video.currentTime = localStorage.getItem('last-currentTime'))
  .then(()=> video.pause());
}
