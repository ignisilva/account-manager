import { numToWon } from "../common/utils";
import { MainApi } from "../core/api";
import View from "../core/view";
import { Store } from "../store";
import { MainData, SavingBox } from "../types";
import { Account } from "../types/store.interface";

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
      {{__account_title__}}
    </header>
    <section class="account__status">
      {{__account_status__}}
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
  private store: Store;
  private api: MainApi;

  constructor(containerId: string, store: Store) {
    super(containerId, template);

    this.store = store;
    this.api = new MainApi();
  }

  render = (): void => {
    this.setTemplateData(
      "account_title",
      this.makeAccountTitle(this.store.getAccount())
    );

    this.setTemplateData(
      "account_status",
      this.makeAccountStatus(this.store.getAccount())
    );

    this.setTemplateData(
      "history_saving",
      this.makeHistorySaving(this.store.getSavingBoxes())
    );
    this.setTemplateData(
      "history_recent",
      this.makeHistoryRecent(this.api.getData())
    );

    this.updateView();
  };

  private makeAccountTitle({ profile, title }: Account): string {
    this.addHtml(`
      <div class="profile">
        <img
          src="${profile}"
          alt="profile"
        />
      </div>
      <h2 class="subtitle">${title}</h2>
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
    `);

    return this.getHtml();
  }

  private makeAccountStatus({ accountNum, balance }: Account): string {
    this.addHtml(`
      <h3 class="hide">status</h3>
      <div class="status__total">
        <div class="status__account-num">
          <strong>${accountNum}</strong>
          <span>이체</span>
        </div>
        <div class="status__account-balance">
          <strong>${numToWon(balance)}</strong><span>원</span>
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
    `);

    return this.getHtml();
  }

  private makeHistorySaving(savingBoxes: SavingBox[]): string {
    this.addHtml(`<div class="swiper-wrapper">`);

    for (let i = 0; i < savingBoxes.length; i++) {
      const { title, saving_goal, saving_now } = savingBoxes[i];
      this.addHtml(`
        <div class="saving-box swiper-slide">
          <div class="achieve"></div>
          <strong>${title}</strong>
          <span class="price">${numToWon(saving_goal)}원</span>
        </div>
      `);
    }

    this.addHtml(`
      <div class="add-btn swiper-slide">
        <span class="material-icons-outlined">add_circle</span>
        <span class="text">저금통 만들기</span>
      </div>
    `);
    this.addHtml(`</div>`);

    return this.getHtml();
  }

  private makeHistoryRecent(datas: MainData[]) {
    // data 정제
    const map = new Map<string, MainData[]>();
    datas.forEach((data) => {
      const key = `${data.date}`;
      if (!map.has(key)) {
        map.set(key, []);
      }
      const oldValue = map.get(key);
      if (oldValue) {
        const values = [...oldValue, data];
        map.set(key, values);
      }
    });

    // getHistoryRecent
    this.addHtml(`<div class="container hide-scroll">`);

    map.forEach((daysData) => {
      let numOfDaysPassed: string = "";
      let totalSpend: number = 0;

      if (numOfDaysPassed === "") {
        const dayData = daysData[0];
        const today = new Date();
        const [year, month, day] = dayData.date
          .split("-")
          .map((value) => +value);

        const dayAgo = new Date(year, month - 1, day);

        const diffDay = Math.floor(
          (today.getTime() - dayAgo.getTime()) / (1000 * 60 * 60 * 24)
        );
        numOfDaysPassed =
          diffDay === 0 ? "오늘" : diffDay === 1 ? "어제" : `${diffDay}일전`;
      }

      daysData.forEach((dayData) => {
        totalSpend += dayData.income === "out" ? -dayData.price : dayData.price;
      });

      const totalSpendWon =
        totalSpend > 0
          ? numToWon(Math.abs(totalSpend)) + "원 수입"
          : numToWon(Math.abs(totalSpend)) + "원 지출";

      this.addHtml(`
        <div class="day">
          <div class="day-summary">
            <strong>${numOfDaysPassed}</strong>
            <span class="total-spend">${totalSpendWon}</span>
          </div>
      `);
      this.addHtml(`<ul>`);
      daysData.forEach((dayData) => {
        this.addHtml(`
          <li>
            ${dayData.history}
            ${
              dayData.income === "out"
                ? `<span>${numToWon(dayData.price)}</span>`
                : `<span class="income">+${numToWon(dayData.price)}</span>`
            }
          </li>
        `);
      });
      this.addHtml(`</ul>`);
      this.addHtml("</div>");
    });
    this.addHtml(`</div>`);

    return this.getHtml();
  }
}
