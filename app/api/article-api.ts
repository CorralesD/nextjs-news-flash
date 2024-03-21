export class ArticleApi {
  static async fetchToday(): Promise<any> {
    const headers = {
      Authorization: `Bearer ${process.env.API_KEY}`,
      'Content-Type': 'application/json',
    };
    return await (
      await fetch('https://api.pinterest.com/v5/boards', { headers })
    ).json();
  }
}
