function Line() {
  const elm = document.getElementById("container");
  var width = elm.offsetWidth;
  var height = elm.offsetHeight;

  var stage = new Konva.Stage({
    container: "container",
    width: width,
    height: height,
  });

  var layer = new Konva.Layer();

  var straightLine = new Konva.Rect({
    x: 10,
    y: 25,
    width: 300,
    height: 10,
    fill: "#e8e8e8",
    stroke: "black",
    strokeWidth: 1,
  });

  const dragLine = new Konva.Rect({
    width: 5,
    height: 30,
    fill: "#e8e8e8",
    stroke: "black",
    strokeWidth: 1,
  });

  const dragGroup = new Konva.Group({
    x: 10,
    y: 15,
    draggable: true,
  });

  dragGroup.on("dragmove", () => {
    const pos = dragGroup.absolutePosition();
    const x = 10;
    const y = 15;
    var scale =
      300 / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2));

    if (scale < 1) {
      dragGroup.x(Math.round((pos.x - x) * scale + x));
    }

    dragGroup.y(15);
  });

  dragGroup.add(dragLine);

  console.log(dragLine);

  const amplitude = 50;
  // in ms
  const period = 1000;
  const centerX = 0;

  const anim = new Konva.Animation(function (frame) {
    var dist = amplitude * (frame.timeDiff / period);
    dragLine.move({ x: dist });
  }, layer);

  document.getElementById("start").addEventListener(
    "click",
    function () {
      anim.start();
    },
    false
  );

  document.getElementById("end").addEventListener(
    "click",
    function () {
      anim.stop();
    },
    false
  );

  /*
   * since each line has the same point array, we can
   * adjust the position of each one using the
   * move() method
   */
  // straightLine.move({
  //   x: 0,
  //   y: 5,
  // });
  // dragLine.move({
  //   x: 0,
  //   y: 0,
  // });

  layer.add(straightLine);
  layer.add(dragGroup);

  // add the layer to the stage
  stage.add(layer);
}
Line();
