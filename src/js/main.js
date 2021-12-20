const container = document.getElementById("root");

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

function mainPage() {
  let template = `
   <div class="wrap">
      <section class="native"></section>
      <nav class="tab-bar">
        <ul>
          <li class="icon-cover">
            <a href="javascript:void(0)" class="selected">
              <div class="icon icon--home"></div>
            </a>
          </li>
          <li class="icon-cover">
            <a href="javascript:void(0)">
              <div class="icon icon--transfer"></div>
            </a>
          </li>
          <li class="icon-cover">
            <a href="javascript:void(0)">
              <div class="icon icon--msg"></div>
            </a>
          </li>
          <li class="icon-cover">
            <a href="javascript:void(0)">
              <div class="icon icon--more"></div>
            </a>
          </li>
        </ul>
      </nav>
      <section class="account">
        <header class="account__title">
          <div class="profile">
            <img
              src="https://sojoong.joins.com/wp-content/uploads/sites/4/2019/01/peulopil1.jpg"
              alt="profile"
            />
          </div>
          <h2 class="subtitle">생활비</h2>
          <ul class="options">
            <li class="qr">
              <span class="material-icons-outlined">
                indeterminate_check_box
              </span>
            </li>
            <li class="search">
              <span class="material-icons-outlined"> search </span>
            </li>
          </ul>
        </header>
        <section class="account__status">
          <h3 class="hide">status</h3>
          <div class="status__total">
            <div class="status__account-num">
              <strong>355-673877-78773</strong>
              <span>이체</span>
            </div>
            <div class="status__account-balance">
              <strong>1,240,000</strong><span>원</span>
            </div>
            <div class="status__graph">
              <div class="bar">
                <div class="total"></div>
                <div class="now"></div>
                <div class="set">
                  <div class="controller"></div>
                </div>
              </div>
            </div>
            <div class="chart icon-cover">
              <div class="icon icon--chart"></div>
            </div>
            <span class="status__summary">5일 동안 210,000원 남음</span>
          </div>
          <aside class="ad">
            <a href="javascript:void(0)">
              지금 낮은 이자로 생활대출을 신청하세요!
            </a>
            <a href="javascript:void(0)">Go</a>
          </aside>
        </section>
        <section class="account__history">
          <h3 class="hide">history</h3>
          <div class="history__more">
            <div class="controll-space">
              <div class="controll-bar"></div>
            </div>
          </div>
          <div class="history__saving mySwiper swiper-container">
            <div class="container swiper-wrapper">
              <div class="saving-box swiper-slide">
                <div class="achieve"></div>
                <strong>여행가자!</strong>
                <span class="price">842,200원</span>
              </div>
              <div class="saving-box swiper-slide">
                <div class="achieve"></div>
                <strong>냉장고사기!</strong>
                <span class="price">142,200원</span>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <div class="history__recent">
            <div class="container">
              <div class="day">
                <div class="day-summary">
                  <strong>오늘</strong>
                  <span class="total-spend">127,600원 지출</span>
                </div>
                <ul>
                  <li>
                    미스터피자
                    <span class="price">32,000</span>
                  </li>
                  <li>
                    택시
                    <span class="price">4,800</span>
                  </li>
                  <li>
                    이마트
                    <span class="price">86,000</span>
                  </li>
                  <li>
                    스타벅스
                    <span class="price">4,800</span>
                  </li>
                  <li>
                    전길수
                    <span class="price">+20,000</span>
                  </li>
                </ul>
              </div>

              <div class="day">
                <div class="day-summary">
                  <strong>어제</strong>
                  <span class="total-spend">71,600원 지출</span>
                </div>
                <ul>
                  <li>
                    미스터피자
                    <span class="price">32,000</span>
                  </li>
                  <li>
                    택시
                    <span class="price">4,800</span>
                  </li>
                  <li>
                    이마트
                    <span class="price">86,000</span>
                  </li>
                  <li>
                    스타벅스
                    <span class="price">4,800</span>
                  </li>
                  <li>
                    전길수
                    <span class="price">+20,000</span>
                  </li>
                </ul>
              </div>

              <div class="day">
                <strong>2일전</strong>
                <span class="total-spend">71,600원 지출</span>
                <ul>
                  <li>
                    미스터피자
                    <span class="price">32,000</span>
                  </li>
                  <li>
                    택시
                    <span class="price">4,800</span>
                  </li>
                  <li>
                    스타벅스
                    <span class="price">11,100</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  `;

  container.innerHTML = template;
}

function nowWH() {
  console.log(`w: ${document.documentElement.clientWidth}`);
  console.log(`h: ${document.documentElement.clientHeight}`);
}

function router() {
  const routePath = location.hash;

  if (routePath === "") {
    mainPage();
  }
}

//============================
// router events
//============================
window.addEventListener("hashchange", router);

//============================
// mouse events
//============================
window.addEventListener(
  "resize",
  _.throttle(function () {
    // _.throttle(함수, 시간)
    // event가 너무 많이 발생되어 생기는 부하를 줄여줌
    // throttle n초마다 익명함수를 실행
    nowWH();
  }, 300)
);

window.addEventListener("mousedown", function (e) {
  mouseMotion.isMove = true;
  mouseMotion.before.x = e.clientX;
  mouseMotion.before.y = e.clientY;
});
window.addEventListener("mouseup", function (e) {
  mouseMotion.isMove = false;
  mouseMotion.after.x = e.clientX;
  mouseMotion.after.y = e.clientY;

  // 왼쪽인지, 오른인지 위인지 아래인지 방향 계산
  const diffX = mouseMotion.after.x - mouseMotion.before.x;
  const diffY = mouseMotion.after.y - mouseMotion.before.y;

  // for X
  if (diffX > 0) {
    console.log("to left");
  } else if (diffX < 0) {
    console.log("to right");
  }

  // for Y
  // if (diffY > 0) {
  //   console.log("to down");
  // } else if (diffY < 0) {
  //   console.log("to up");
  // }

  // 초기화
  mouseMotion.before.x = 0;
  mouseMotion.before.y = 0;
  mouseMotion.after.x = 0;
  mouseMotion.after.y = 0;
});

//============================
// initalize functions
//============================
router();
