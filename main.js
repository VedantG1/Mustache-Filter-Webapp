noseX = 0
noseY = 0

function preload() {
    img = loadImage("https://i.postimg.cc/x19MkJKZ/mustache-Filter.png")
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300, 300)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", getPoses)
}
function modelLoaded() {
    console.log("poseNet Initialized")
}
function draw() {
    image(video, 0, 0, 300, 300)
    image(img, noseX - 50, noseY - 20, 100, 100)
}

function takeSnap() {
    save("photo.png")
}
function getPoses(results){
    if(results.length > 0){
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
        console.log("nose x - " + noseX)
        console.log("nose y - " + noseY)
    }
}