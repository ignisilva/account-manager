const mouseMotion = {
  isMove: false,
  before: {
    x: 0,
    y: 0,
  },
  after: {
    x: 0,
    y: 0,
  },
};

function downHandler(e) {
  mouseMotion.isMove = true;
  mouseMotion.before.x = e.clientX;
  mouseMotion.before.y = e.clientY;
}

function upHandler(e) {
  mouseMotion.isMove = false;
  mouseMotion.after.x = e.clientX;
  mouseMotion.after.y = e.clientY;

  // 왼쪽인지, 오른인지 위인지 아래인지 방향 계산
  const diffX = mouseMotion.after.x - mouseMotion.before.x;
  const diffY = mouseMotion.after.y - mouseMotion.before.y;

  // for X
  // if (diffX > 0) {
  //   console.log("to left");
  // } else if (diffX < 0) {
  //   console.log("to right");
  // }

  // for Y
  if (diffY > 0) {
    console.log("to down");
  } else if (diffY < 0) {
    console.log("to up");
  }

  // 초기화
  mouseMotion.before.x = 0;
  mouseMotion.before.y = 0;
  mouseMotion.after.x = 0;
  mouseMotion.after.y = 0;
}

function nowWH() {
  console.log(`w: ${document.documentElement.clientWidth}`);
  console.log(`h: ${document.documentElement.clientHeight}`);
}

//============================
// mouse/touch up down events
//============================
window.addEventListener("mousedown", downHandler);
// window.addEventListener("touchstart", downHandler);
window.addEventListener("mouseup", upHandler);
// window.addEventListener("touchend", upHandler);
