import axios from "axios";

export default async function getImage(url, key, features) {
  var expo_url = "https://website-screenshot-api.exponential.host/";

  console.log(url);

  const res = await axios.get("https://proxy.cors.sh/" + expo_url, {
    headers: {
      "x-cors-api-key": "temp_b5979cdab1a0140dd639c78650e1fee5",
      exponential_api_secret: key,
    },
    params: {
      url: url,
      capture_full_page: features.fullPage,
      hide_popups: features.popUp,
      device: features.device,
      export_format: features.imgExport,
    },
    responseType: "blob",
  });
  console.log(res);

  let objectURL = URL.createObjectURL(res.data);
  console.log(objectURL);
  return objectURL;
}
