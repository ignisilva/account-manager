import { mainPage } from "../js/main/page";

function router() {
  const routePath = location.hash;

  // localhost:1234
  if (routePath === "") {
    mainPage();
  }
}

//============================
// router events
//============================
window.addEventListener("hashchange", router);

//============================
// initalize functions
//============================
router();
