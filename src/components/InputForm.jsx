import { useState } from "react";
import getImage from "../getImage";

const InputForm = () => {
  const [url, setUrl] = useState("");
  const [key, setKey] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [gotImage, setGotImage] = useState(false);

  const handleSubmit = async (e) => {
    setGotImage(false);
    e.preventDefault();
    setLoading(true);
    var uri = await getImage(url, key);
    setImage(uri);
    setLoading(false);
    setGotImage(true);
    setUrl("");
  };

  return (
    <div className="main_div">
      <form className="shot_form">
        <div className="fm_inp">
          <label htmlFor="url">URL</label>{" "}
          <input
            className="inp"
            type="text"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter Any website URL"
          />
        </div>
        <div className="fm_inp">
          <label htmlFor="url">API Key</label>{" "}
          <input
            className="inp"
            type="text"
            name="url"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            style={{ borderColor: "green" }}
            placeholder="Enter Your API Key"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn"
          disabled={isLoading}
        >
          Get Image
        </button>
        {gotImage ? (
          <a href={image} download className="down_image">
            Download Image
          </a>
        ) : (
          ""
        )}
      </form>
      <div className="img_div">
        {!isLoading && !gotImage ? (
          <h2>Your Image will be shown here</h2>
        ) : isLoading && !gotImage ? (
          <h2>Loading ...</h2>
        ) : !isLoading && gotImage ? (
          <img src={image} className="res_img" />
        ) : (
          <h2>No image found!!</h2>
        )}
      </div>
    </div>
  );
};

export default InputForm;
