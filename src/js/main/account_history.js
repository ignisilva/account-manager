import { getData } from "../common/data";
import { numToWon } from "../common/utils";

const store = {
  historys: [],
};

function getDayHistory(daysData) {
  let numOfDaysPassed = "";
  let totalSpend = 0;
  const dayEls = [];

  daysData.forEach((dayData) => {
    if (numOfDaysPassed === "") {
      const today = new Date();
      const [year, month, day] = dayData.date.split("-").map((value) => +value);
      const dayAgo = new Date(year, month + 1, day);

      const diffDay = Math.floor(
        (today.getTime() - dayAgo.getTime()) / (1000 * 60 * 60 * 24)
      );
      numOfDaysPassed =
        diffDay === 0 ? "오늘" : diffDay === 1 ? "어제" : `${diffDay}일전`;
    }

    totalSpend += dayData.income === "out" ? -dayData.price : dayData.price;

    let dayTemplate = `
          <li>
            {{__history_title__}}
            {{__history_price__}}
          </li>
    `;

    dayTemplate = dayTemplate.replace(
      "{{__history_title__}}",
      `${dayData.history}`
    );
    dayTemplate = dayTemplate.replace(
      "{{__history_price__}}",
      `${
        dayData.income === "out"
          ? `<span>${numToWon(dayData.price)}</span>`
          : `<span class="income">+${numToWon(dayData.price)}</span>`
      }`
    );

    dayEls.push(dayTemplate);
  });

  totalSpend =
    totalSpend > 0
      ? numToWon(Math.abs(totalSpend)) + "원 수입"
      : numToWon(Math.abs(totalSpend)) + "원 지출";

  return [numOfDaysPassed, totalSpend, dayEls];
}

function getDays(accountHistorysData) {
  const daysEls = [];

  accountHistorysData.forEach((daysData) => {
    let daysTemplate = `
      <div class="day">
        <div class="day-summary">
          <strong>{{__num_of_days_passed__}}</strong>
          <span class="total-spend">{{__total_spend__}}</span>
        </div>
        <ul>
          {{__day_history_lis__}}
        </ul>
      </div>
    `;

    const [numOfDaysPassed, totalSpend, dayEls] = getDayHistory(daysData);

    daysTemplate = daysTemplate.replace(
      "{{__num_of_days_passed__}}",
      numOfDaysPassed
    );
    daysTemplate = daysTemplate.replace("{{__total_spend__}}", totalSpend);
    daysTemplate = daysTemplate.replace(
      "{{__day_history_lis__}}",
      dayEls.join("")
    );

    daysEls.push(daysTemplate);
  });

  return daysEls;
}

export function getAccountHistory(page = 1) {
  let accountHistorysData = store.historys;

  let template = `
  <div class="container hide-scroll">
    {{__total_historys__}}
  </div>
  `;

  if (!accountHistorysData.length) {
    accountHistorysData = store.historys = getData("#");
  }

  const daysEls = getDays(accountHistorysData);

  template = template.replace("{{__total_historys__}}", daysEls.join(""));

  return template;
}
