import "./index.css";
import { BorderBox8 } from "@jiaminghi/data-view-react";
import * as echarts from "echarts";
import { useEffect } from "react";
export default function MainCenter() {
  function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
      name: now.toString(),
      value: [
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
        Math.round(value)
      ]
    };
  }
  let data = [];
  let now = new Date(1997, 9, 3);
  let oneDay = 24 * 3600 * 1000;
  let value = Math.random() * 1000;
  for (var i = 0; i < 1000; i++) {
    data.push(randomData());
  }
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
      tooltip: {
        trigger: "axis",
        axisPointer: {
          animation: false
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "1%",
        containLabel: true,
      },
      xAxis: {
        type: "time",
        splitLine: {
          show: false
        },
        /* data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        axisLabel: {
          color: "white",
        }, */
      },
      yAxis: {
        type: "value",
        boundaryGap: [0, "100%"],
        splitLine: {
          show: false
        },
        axisLabel: {
          color: "white",
        },
      },
      series: [
        {
          name: "Fake Data",
          type: "line",
          showSymbol: false,
          data: data
        },
      ],
    };
    //myChart.setOption(option);
    setInterval(function () {
      for (var i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
      }
      myChart.setOption({
        series: [
          {
            data: data
          }
        ]
      });
    }, 1000);
    option && myChart.setOption(option);
  });
  return (
    <div className="center-content">
      <BorderBox8 reverse={true}>
        <div id="charts" style={{ height: "96%", width: "100%" }}></div>
      </BorderBox8>
    </div>
  );
}
