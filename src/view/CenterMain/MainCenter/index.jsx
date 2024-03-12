import "./index.css";
import { BorderBox8 } from "@jiaminghi/data-view-react";
import { styleInject } from "@jiaminghi/data-view-react/lib/style-inject.es-55d78dad";
import * as echarts from "echarts";
import { useEffect } from "react";
export default function MainCenter() {
  useEffect(() => {
    const myChart = echarts.init(document.getElementById("charts"));
    const option = {
      title: {
        text: "数据统计",
        textStyle: {
          color: "white",
        },
        top: "3%",
        left: "3%",
      },
      tooltip: {},
      grid: {
        left: "3%",
        right: "4%",
        bottom: "1%",
        containLabel: true,
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        axisLabel: {
          color: "white",
        },
      },
      yAxis: {
        axisLabel: {
          color: "white",
        },
      },
      series: [
        {
          name: "销量",
          type: "line",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
    myChart.setOption(option);
  });
  return (
    <div className="center-content">
      <BorderBox8 reverse={true}>
        <div id="charts" style={{ height: "96%", width: "100%" }}></div>
      </BorderBox8>
    </div>
  );
}
