
export enum Tab {
  HOME = 'home',
  ABOUT = 'about',
  BOOKS = 'books',
  BLOG = 'blog',
  CHAT = 'chat'
}

export type Language = 'mm' | 'en';

export interface LocalizedString {
  mm: string;
  en: string;
}

export interface Book {
  id: number;
  title: LocalizedString;
  subtitle: LocalizedString;
  tag: LocalizedString;
  summary: LocalizedString;
  topics: LocalizedString[];
  imageUrl?: string;
}

export interface Article {
  id: number;
  title: LocalizedString;
  preview: LocalizedString;
  content: LocalizedString[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
