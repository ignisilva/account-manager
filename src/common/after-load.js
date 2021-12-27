const accountHistory = document.getElementsByClassName("account__history")[0];
let isHistoryMoreClicked = false;

function getHistoryRecentY(isHistoryMoreClicked) {
  const VIEWPORT_Y = document.documentElement.clientHeight;
  console.log(VIEWPORT_Y);
  const NATIVE_Y = 56;
  const ACCOUNT_TITLE_Y = 43;
  const ACCOUNT_STATUS_Y = isHistoryMoreClicked ? 0 : 254;
  const TAB_BAR = 76;
  const HISTORY_MORE_Y = 17;
  const HISTORY_SAVING = 49;
  const HISTORY_RECENT_TOP_MARGIN = 19;

  // historyRecentY = 전체 Y - headerY - statusY - navY - savingboxY - historyMoreY
  return (
    VIEWPORT_Y -
    (NATIVE_Y +
      ACCOUNT_TITLE_Y +
      ACCOUNT_STATUS_Y +
      TAB_BAR +
      HISTORY_MORE_Y +
      HISTORY_SAVING +
      HISTORY_RECENT_TOP_MARGIN)
  );
}

function setHistoryRecentY(height) {
  const historyRecent =
    accountHistory.getElementsByClassName("history__recent")[0];
  historyRecent.style.minHeight = `${height}px`;
}

function initialize() {
  setHistoryRecentY(getHistoryRecentY(isHistoryMoreClicked));
}

initialize();

// history more click event
const historyMore = accountHistory.getElementsByClassName("history__more")[0];

const historyMoreControllBtn =
  historyMore.getElementsByClassName("controll-btn")[0];

historyMoreControllBtn.addEventListener("click", function () {
  if (!isHistoryMoreClicked) {
    accountHistory.style.transform = "translateY(-243px)";
    isHistoryMoreClicked = true;
    setHistoryRecentY(getHistoryRecentY(isHistoryMoreClicked));
  } else {
    accountHistory.style.transform = "translateY(0px)";
    isHistoryMoreClicked = false;
    setHistoryRecentY(getHistoryRecentY(isHistoryMoreClicked));
  }
});

//============================
// window resize event
//============================
//============================
// resize events
//============================
window.addEventListener(
  "resize",
  _.throttle(function () {
    // _.throttle(함수, 시간)
    // event가 너무 많이 발생되어 생기는 부하를 줄여줌
    // throttle n초마다 익명함수를 실행
    initialize();
  }, 500)
);
