import { usePopup } from "./hooks/usePopup";
import SecretInput from "./components/SecretInput";
import "./popup.css";
import icon from "./assets/save_icon.svg";

const Popup = () => {
  const { dbId, token, handleInput, onSubmit, reset } = usePopup();

  return (
    <form onSubmit={onSubmit}>
      <div className="pophead">
        <img src={icon}></img>
        <h2>StoreNotion</h2>
      </div>
      <label>DATABASE ID</label>
      <SecretInput name="dbId" value={dbId} onChange={handleInput} />
      <label>SECRET TOKEN</label>
      <SecretInput name="token" value={token} onChange={handleInput} />
      {/* <p>Ctrl + Shift + N : open setting popup</p> */}
      <div className="popdown">
        <button type="submit">SAVE</button>
        <button onClick={reset} className="resetbtn">
          RESET
        </button>
      </div>
    </form>
  );
};

export default Popup;
