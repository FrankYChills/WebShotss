import { useState } from "react";
import getImage from "../getImage";
import RotateLoader from "react-spinners/RotateLoader";

const InputForm = () => {
  const [url, setUrl] = useState("");
  const [key, setKey] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [image, setImage] = useState("");
  const [gotImage, setGotImage] = useState(false);
  const [selector, setSelector] = useState("");
  const [waitTime, setWaitTime] = useState(0);

  const [gdpr, setGdpr] = useState(false);
  const [fullPage, setFullPage] = useState(false);
  const [imgExport, setImgExport] = useState("png");
  const [popUp, setPopup] = useState(false);
  const [device, setDevice] = useState("laptop");

  const togglefull = (e) => setFullPage(e.target.value);
  const toggleexport = (e) => setImgExport(e.target.value);
  const togglePopups = (e) => setPopup(e.target.value);
  const toggleDevice = (e) => setDevice(e.target.value);
  const toggleGdpr = (e) => setGdpr(e.target.value);

  const extraFeatures = {
    fullPage,
    imgExport,
    popUp,
    device,
    waitTime,
    gdpr,
    selector,
  };

  const handleSubmit = async (e) => {
    setGotImage(false);
    e.preventDefault();
    setLoading(true);
    var uri = await getImage(url, key, extraFeatures);
    setImage(uri);
    setLoading(false);
    setGotImage(true);
    setUrl("");
  };

  return (
    <div className="main_div">
      <form className="shot_form">
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

        <div className="fm_inp">
          <label htmlFor="url">URL</label>
          <input
            className="inp"
            type="text"
            name="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter website URL (Don't include http:// or https://)"
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
        <div className="features">
          <div className="selector">
            <label htmlFor="selector">Selector&ensp;</label>
            <input
              type="text"
              className="inp"
              placeholder="Enter the selector"
              value={selector}
              onChange={(e) => setSelector(e.target.value)}
            />
          </div>
          <div className="wait">
            <label htmlFor="wait">Wait For&ensp;</label>
            <input
              type="number"
              className="inp"
              placeholder="Seconds to wait to shot"
              value={waitTime}
              onChange={(e) => setWaitTime(e.target.value)}
            />
          </div>
          <div className="gdpr">
            <label htmlFor="gdpr">GDPR&ensp;</label>
            <input
              type="radio"
              name="gdpr"
              id="gdpr"
              value={true}
              onClick={toggleGdpr}
            />
            <label htmlFor="true">True</label>
            &ensp;
            <input
              type="radio"
              name="gdpr"
              id="gdpr"
              value={false}
              onClick={toggleGdpr}
            />
            <label htmlFor="false">False</label>
          </div>
          <div className="fullpage">
            <label htmlFor="fullpage">Full Page Shot&ensp;</label>
            <input
              type="radio"
              name="fullpage"
              id="fullpage"
              value={true}
              onClick={togglefull}
            />
            <label htmlFor="true">True</label>
            &ensp;
            <input
              type="radio"
              name="fullpage"
              id="fullpage"
              value={false}
              onClick={togglefull}
            />
            <label htmlFor="false">False</label>
          </div>
          {/* <div className="export">
            <label htmlFor="export">Export In&ensp;</label>
            <input
              type="radio"
              name="export"
              id="export"
              value="jpeg"
              onClick={toggleexport}
            />
            <label htmlFor="export">JPEG</label>
            &ensp;
            <input
              type="radio"
              name="export"
              id="export"
              value="png"
              onClick={toggleexport}
            />
            <label htmlFor="export">PNG</label>
            &ensp;
            <input
              type="radio"
              name="export"
              id="export"
              value="webp"
              onClick={toggleexport}
            />
            <label htmlFor="export">WEBP</label>
          </div> */}
          <div className="popups">
            <label htmlFor="popups">Hide PopUps&ensp;</label>
            <input
              type="radio"
              name="popups"
              id="popups"
              value={true}
              onClick={togglePopups}
            />
            <label htmlFor="popups">True</label>
            &ensp;
            <input
              type="radio"
              name="popups"
              id="popups"
              value={false}
              onClick={togglePopups}
            />
            <label htmlFor="popups">False</label>
          </div>
          <div className="device">
            <label htmlFor="device">Device&ensp;</label>
            <input
              type="radio"
              name="device"
              id="device"
              value="mobile"
              onClick={toggleDevice}
            />
            <label htmlFor="device">Mobile</label>
            &ensp;
            <input
              type="radio"
              name="device"
              id="device"
              value="laptop"
              onClick={toggleDevice}
            />
            <label htmlFor="device">Laptop</label>
            &ensp;
            <input
              type="radio"
              name="device"
              id="device"
              value="tablet"
              onClick={toggleDevice}
            />
            <label htmlFor="device">Tablet</label>
            &ensp;
            <input
              type="radio"
              name="device"
              id="device"
              value="desktop"
              onClick={toggleDevice}
            />
            <label htmlFor="device">Desktop</label>
            &ensp;
          </div>
        </div>
      </form>
      <div className="img_div">
        {!isLoading && !gotImage ? (
          <h2>Your Image will be shown here</h2>
        ) : isLoading && !gotImage ? (
          <h2>
            <RotateLoader color="#36d7b7" />
          </h2>
        ) : !isLoading && gotImage ? (
          <div className="img_div">
            <img src={image} className="res_img" />
          </div>
        ) : (
          <h2>No image found!!</h2>
        )}
      </div>
    </div>
  );
};

export default InputForm;
