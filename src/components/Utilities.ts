export interface NavItem {
  title: string;
  url: string;
  inactiveImg: string;
  activeImg: string;
}

export interface NavGroup {
  title?: string;
  url: string;
  items: NavItem[];
}
