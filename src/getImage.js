import axios from "axios";

export default async function getImage(key) {
  var url = "https://website-screenshot-api.exponential.host/";

  const res = await axios.get(url, {
    headers: {
      exponential_api_secret: key,
    },
  });

  console.log(res);
}
