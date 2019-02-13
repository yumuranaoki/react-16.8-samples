interface result {
  count: number,
}

export class CountAPI {
  static async getCount() : Promise<result> {
    let result : result;
    try {
      const response = await fetch('http://localhost:3000/', {
        "mode": "cors"
      });
      result = await response.json()
      console.log(result);
    } catch(err) { 
      throw new Error();
    }
    return result;
  }
}