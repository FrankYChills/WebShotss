import axios from "axios";

export default async function getImage(url, key, features) {
  var expo_url = "https://website-screenshot-api.exponential.host/";

  console.log(url);
  // finalParams = {
  //     capture_full_page: features.fullPage,
  //     hide_popups: features.popUp,
  //     device: features.device,
  //     export_format: features.imgExport,
  //     delay: features.waitTime,
  //     accept_gdpr_banner: features.gdpr,
  //     selector: features.selector,
  //   };

  var finalParams = { url: url };
  // fix - send only those params which were selected
  if (features.selector) {
    finalParams = { ...finalParams, selector: features.selector };
  }
  if (features.waitTime) {
    finalParams = { ...finalParams, delay: features.waitTime };
  }
  if (features.gdpr) {
    finalParams = { ...finalParams, accept_gdpr_banner: features.gdpr };
  }
  if (features.fullPage) {
    finalParams = { ...finalParams, capture_full_page: features.fullPage };
  }
  // if (features.imgExport) {
  //   finalParams = { ...finalParams, export_format: features.imgExport };
  // }
  if (features.popUp) {
    finalParams = { ...finalParams, hide_popups: features.popUp };
  }
  if (features.device) {
    finalParams = { ...finalParams, device: features.device };
  }

  const res = await axios.get("https://proxy.cors.sh/" + expo_url, {
    headers: {
      "x-cors-api-key": "temp_b5979cdab1a0140dd639c78650e1fee5",
      exponential_api_secret: key,
    },
    params: finalParams,
    responseType: "blob",
  });
  console.log(res);

  let objectURL = URL.createObjectURL(res.data);
  console.log(objectURL);
  return objectURL;
}
