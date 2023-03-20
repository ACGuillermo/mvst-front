export class Tea {
  id: number;
  title: string;
  img: string;
  private addedAt: string;

  constructor({
    title,
    img,
    addedAt,
    id,
  }: {
    title: string;
    img: string;
    addedAt: string;
    id: number;
  }) {
    this.id = id;
    this.title = title;
    this.img = img;
    this.addedAt = addedAt;
  }

  getDate(): string {
    return this.addedAt;
  }
}
