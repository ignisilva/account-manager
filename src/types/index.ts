import View from "../core/view";

export interface MainData {
  readonly date: string;
  readonly income: string;
  readonly classify: string;
  readonly history: string;
  readonly price: number;
}

export interface RouteInfo {
  path: string;
  page: View;
  params: RegExp | null;
}
