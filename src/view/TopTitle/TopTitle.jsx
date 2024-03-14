import { Decoration1, Decoration5 } from "@jiaminghi/data-view-react";
import "./TopTitle.css";
export default function TopTitle() {
  return (
    <div className="top-title">
      <span className="title">室内温湿度采集系统看板</span>
      <Decoration1
        className="top-header-one"
        style={{ width: "20%", height: "80%" }}
      />
      <Decoration5 style={{ width: "60%", height: "100%" }} />
      <Decoration1
        className="top-header-two"
        style={{ width: "20%", height: "80%" }}
      />
    </div>
  );
}
