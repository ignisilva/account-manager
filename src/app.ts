import Router from "./core/router";
import { MainView } from "./page";

// 라우터 구성
const router: Router = new Router();
const mainView: MainView = new MainView("root");

router.setDefaultPage(mainView);
