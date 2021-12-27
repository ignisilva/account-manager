import { RouteInfo } from "../types";
import View from "./view";

export default class Router {
  private isStart: boolean;
  defaultRoute: RouteInfo | null;
  routeTable: RouteInfo[];

  constructor() {
    this.isStart = false;
    this.routeTable = [];
    this.defaultRoute = null;

    window.addEventListener("hashchange", this.route.bind(this)); // 4-6 참조
  }

  setDefaultPage(page: View, params: RegExp | null = null): void {
    this.defaultRoute = { path: "", page, params };

    if (!this.isStart) {
      this.isStart = true;
      setTimeout(this.route.bind(this), 0);
    }
  }

  addRoutePath(path: string, page: View, params: RegExp | null = null): void {
    this.routeTable.push({ path, page, params });
  }

  private route() {
    const routePath: string = location.hash;

    if (routePath === "" && this.defaultRoute) {
      this.defaultRoute.page.render();
      return;
    }

    // routeInfo를 List가 아니라 Map 같은걸로 변경해서 개선할 수 있을 듯
    for (const routeInfo of this.routeTable) {
      if (routePath.indexOf(routeInfo.path) >= 0) {
        if (routeInfo.params) {
          const parseParams = routePath.match(routeInfo.params);

          if (parseParams) {
            routeInfo.page.render.apply(null, [parseParams[1]]);
          }
        } else {
          routeInfo.page.render();
        }
        return;
      }
    }
  }
}
