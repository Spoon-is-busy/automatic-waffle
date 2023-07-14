function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet',modelLoaded);
}
function modelLoaded() {
  console.log('model loaded!');
}

function draw () {
  image(video,0,0,300, 300)
  classifier.classify(video, gotResult);
}

function gotResult(error, result) {
  if (error) {
    console.error(error);

  } else {
    console.log(results);
    document.getElementById("result_object_name").innerHDML = results[0].label;
    document.getElementById("result_object_accuracy").innerHDML = results[0].confidance.toFixed(3);
  }
}
