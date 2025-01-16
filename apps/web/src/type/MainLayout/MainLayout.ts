import { ReactElement } from 'react';

export interface MainLayoutProps {
  children: React.ReactNode;
  type: string;
}

export interface HeaderProps {
  type: string;
  menuName?: string;
  breadcrumbList?: BreadcrumbItemProps[];
}

export interface BreadcrumbItemProps {
  title: string;
  href: string;
}

export interface BreadcrumbListProps {
  breadcrumb: BreadcrumbItemProps[];
}

export interface ChildMenuItemProps {
  id: string;
  name: string;
  href: string;
}

export interface MenuItemProps {
  id: string;
  icon: (props: any) => ReactElement;
  name: string;
  href?: string;
  onClick?: () => void;
  children?: ChildMenuItemProps[];
  newTab?: boolean;
}
