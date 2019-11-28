export interface INavigationItem {
  title: string;
  children: INavigationItem[];
  showChildren: boolean;
  page: string;
}
