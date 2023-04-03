import { useState } from "react";

const InputForm = () => {
  const [url, setUrl] = useState("");
  const [key, setKey] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submit clicked");
  };

  return (
    <div>
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
        <button type="submit" onClick={handleSubmit} className="btn">
          Get Image
        </button>
      </form>
    </div>
  );
};

export default InputForm;
