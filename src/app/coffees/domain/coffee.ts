export class Coffee {
  id: number;
  title: string;
  img: string;
  type: string;
  private addedAt: string;

  constructor({
    title,
    img,
    addedAt,
    id,
    type,
  }: {
    title: string;
    img: string;
    addedAt: string;
    id: number;
    type: string;
  }) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.addedAt = addedAt;
    this.type = type;
  }

  getDate(): string {
    return this.addedAt;
  }
}
