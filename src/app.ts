import Router from "./core/router";
import View from "./core/view";
import { MainView } from "./page";
import { Store } from "./store";

class App {
  private store: Store;
  private router: Router;
  private views: View[];

  constructor() {
    this.store = new Store();
    this.router = new Router();
    this.views = [new MainView("root", this.store)];
  }

  public run() {
    this.router.setDefaultPage(this.views[0]);
  }
}

const app = new App();
app.run();
