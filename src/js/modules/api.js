class Api {
   constructor({ url }) {
      this.url = url;
   }

   async _requestResult(res) {
      const result = await res.json();
      if (!res.ok) {
         throw new Error(result.message);
      }
      return result;
   }

   async login(userData) {
      const response = await fetch(`${this.url}index.php?login=${userData.email}&password=${userData.password}`);
      return this._requestResult(response);
   }
}

const ApiForm = new Api({
   url: 'https://test-works.pr-uni.ru/api/login/',
});

export { ApiForm };