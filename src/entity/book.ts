export interface JvaBook {
  bookName: string;
  bookDesc: string;
  bookType: number;
  bookAuthor: string;
  bookId: number;
}

export const EBookType = [
  { type: 1, label: "漫画" },
  { type: 2, label: "小说" },
  { type: 3, label: "计算机" },
  { type: 4, label: "心理学" },
];
