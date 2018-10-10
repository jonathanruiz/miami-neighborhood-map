class Helper {
  static baseURL() {
    return "https://api.foursquare.com/v2";
  }

  static auth() {
    const keys = {
      client_id: "KHUCURZYLCGOABHH0OMXINWUJRJKYQFFNTHTAIH3ONM1IXOU",
      client_secret: "1FSEARQ5OHLPPV3EZMTKGA3T5F3JHLDHLUIYW4YSLMN1PJ0P",
      v: "20181008"
    };
    return Object.keys(keys)
      .map(key => `${key}=${keys[key]}`)
      .join("&");
  }

  static urlBuilder(urlParams) {
    if (!urlParams) {
      return "";
    }
    return Object.keys(urlParams)
      .map(key => `${key}=${urlParams[key]}`)
      .join("&");
  }

  static headers() {
    return {
      Accept: "application/json"
    };
  }

  static simpleFetch(endpoint, method, urlParams) {
    let requestData = {
      method,
      headers: Helper.headers()
    };
    return fetch(
      `${Helper.baseURL()}${endpoint}?${Helper.auth()}&${Helper.urlBuilder(
        urlParams
      )}`,
      requestData
    )
      .then(res => res.json())
      .catch(error => {
        alert(
          "An error occurred while trying to fetch data from Foursquare - Error Code of: " +
            error.response
        );
      });
  }
}

export default class SquareAPI {
  static getVenueDetails(VENUE_ID) {
    return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET");
  }
}
