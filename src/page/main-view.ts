import View from "../core/view";

const template = `
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
          src="https://lh3.googleusercontent.com/proxy/vNcXDb1es8vnIdHjdWZlgdxoodXjlu06kPc6yWjiE9wbPSJHeERV5CXaHcOv6OOtST1i8vTXzIScHHwgd-Mf0QXcX3LlsSKL_1JVq0DVcQ8DVA"
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
        <div class="controll-btn">
          <div class="controll-bar"></div>
        </div>
      </div>
      <div class="history__saving swiper">
        {{__history_saving__}}
      </div>
      <div class="history__recent">
        {{__history_recent__}}
      </div>
    </section>
  </section>
</div>
`;

export default class MainView extends View {
  constructor(containerId: string) {
    super(containerId, template);
  }

  render = (): void => {
    this.updateView();
  };
}
