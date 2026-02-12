export interface MenuItem {
  label: string;
  link?: string;
  sub?: SubMenuItem[];
}

export interface SubMenuItem {
  label: string;
  content?: string;
  link?: string;
}
