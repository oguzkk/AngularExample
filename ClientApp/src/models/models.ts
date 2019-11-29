export interface INavigationItem {
  title: string;
  children: INavigationItem[];
  showChildren: boolean;
  page: string;
  transaction: string;
}

export interface IResponseItem {
  name: string;
  type: string;
}
