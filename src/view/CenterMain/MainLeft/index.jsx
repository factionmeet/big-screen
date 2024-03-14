import "./index.css";
import { BorderBox7, Charts, DigitalFlop } from "@jiaminghi/data-view-react";
import { useEffect } from "react";
//import { useSocket } from "../../../hooks/socket";
import { useState } from "react";
export default function MainLeft(props) {
  // eslint-disable-next-line react/prop-types
  const { temperature, humidity, gatherSum } = props;
  console.log("props=========",props);
  const humiditys = {
    title: {
      text: "",
      style: {
        fill: "#fff",
      },
    },
    series: [
      {
        type: "gauge",
        radius: "95%",
        data: [{ name: "itemA", value: humidity }],
        center: ["50%", "55%"],
        min: 0,
        max: 100,
        splitNum: 11,
        axisLabel: {
          formatter: "{value}%",
          style: {
            fill: "#fff",
          },
          fontSize: 12,
        },
        details: {
          show: true,
          offset: [0, 40],
          formatter: "湿度{value}%",
          style: {
            fill: "white",
          },
        },
        axisTick: {
          style: {
            stroke: "#fff",
          },
        },
        animationCurve: "easeInOutBack",
      },
    ],
  };
  const temperatures = {
    title: {
      text: "",
      style: {
        fill: "#fff",
      },
    },
    series: [
      {
        type: "gauge",
        radius: "95%",
        data: [{ name: "itemA", value: temperature }],
        center: ["50%", "55%"],
        min: -40,
        max: 125,
        splitNum: 8,
        axisLabel: {
          formatter: "{value}℃",
          style: {
            fill: "#fff",
          },
        },
        details: {
          show: true,
          offset: [0, 40],
          formatter: "温度{value}℃",
          style: {
            fill: "white",
          },
        },
        axisTick: {
          style: {
            stroke: "#fff",
          },
          tickLength: 10,
        },
        animationCurve: "easeInOutBack",
      },
    ],
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const config2 = {
    number: [999],
    content: "已采集{nt}次",
  };
  const [config, setConfig] = useState(config2);
  useEffect(() =>{
    const Qiehuan = (gatherSum) => {
      config2.number = [gatherSum];
      setConfig(config2);
    };
    Qiehuan(gatherSum)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gatherSum])
  return (
    <div className="left-content">
      <div className="content-top" >
        <BorderBox7>
          <DigitalFlop
            config={config}

            style={{ width: "200px", height: "50px", position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
        </BorderBox7>
      </div>
      <div className="content-center">
        {/* <BorderBox7> */}
        <Charts option={humiditys} />
        {/* </BorderBox7> */}
      </div>
      <div className="content-bottom">
        {/* <BorderBox7> */}
        <Charts option={temperatures} />
        {/* </BorderBox7> */}
      </div>
    </div>
  );
}
