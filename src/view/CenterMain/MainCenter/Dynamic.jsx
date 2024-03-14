import React, { useState, useEffect } from "react";
import ReactECharts from "echarts-for-react";
import { cloneDeep } from "lodash";
import { Loading } from "@jiaminghi/data-view-react";

const Page = (props) => {
  // eslint-disable-next-line react/prop-types
  const { temperature, humidity, gatherDate, thirtyDataList } = props;
  const DEFAULT_OPTION = {
    title: {
      text: "数据趋势1",
      textStyle: {
        color: "white",
      },
      top: "1%",
      left: "10%",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["温度", "湿度s"],
      textStyle: {
        color: "white",
      },
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
    },
    grid: {
      top: 60,
      left: 30,
      right: 60,
      bottom: 30,
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100,
    },
    visualMap: {
      show: false,
      min: 0,
      max: 1000,
      color: [
        "#BE002F",
        "#F20C00",
        "#F00056",
        "#FF2D51",
        "#FF2121",
        "#FF4C00",
        "#FF7500",
        "#FF8936",
        "#FFA400",
        "#F0C239",
        "#FFF143",
        "#FAFF72",
        "#C9DD22",
        "#AFDD22",
        "#9ED900",
        "#00E500",
        "#0EB83A",
        "#0AA344",
        "#0C8918",
        "#057748",
        "#177CB0",
      ],
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: true,
        axisLine: {
          lineStyle: {
            color: "white", // 设置x轴轴线颜色为白色
          },
        },
        axisLabel: {
          textStyle: {
            color: "white", // 设置x轴标签文字颜色为白色
          },
        },
        splitLine: {
          lineStyle: {
            color: "white", // 设置x轴分割线颜色为白色
          },
        },
        data: (function () {
          // let now = new Date();
          // let res = [];
          // let len = 50;
          // while (len--) {
          //   res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
          //   now = new Date(now - 2000);
          // }
          let res = [];
          // eslint-disable-next-line react/prop-types
          let len = thirtyDataList.length;
          for (let i = 0; i < len; i++) {
            let td = thirtyDataList[i];
            // eslint-disable-next-line react/prop-types
            let now = new Date(td.createdAt);
            res.unshift(now.toLocaleTimeString().replace(/^\D*/, ""));
            now = new Date(now - 2000);
          }
          console.log("thirtyDataList格式化2", res);
          return res;
        })(),
      },
      {
        type: "category",
        boundaryGap: true,
        axisLine: {
          lineStyle: {
            color: "white", // 设置x轴轴线颜色为白色
          },
        },
        axisLabel: {
          textStyle: {
            color: "white", // 设置x轴标签文字颜色为白色
          },
        },
        splitLine: {
          lineStyle: {
            color: "white", // 设置x轴分割线颜色为白色
          },
        },
        data: (function () {
          let res = [];
          let len = 50;
          while (len--) {
            res.push(50 - len + 1);
          }
          return res;
        })(),
      },
    ],
    yAxis: [
      {
        type: "value",
        scale: true,
        name: "湿度",
        max: 125,
        min: -40,
        boundaryGap: [0.2, 0.2],
        nameTextStyle: {
          color: "white", // 设置 y 轴 name 文字颜色
        },
        textStyle: {
          color: "white", // 设置 y 轴标签文字颜色为白色
        },
        axisLine: {
          lineStyle: {
            color: "white", // 设置 y 轴轴线颜色为白色
          },
        },
        splitLine: {
          lineStyle: {
            color: "white", // 设置 y 轴分割线颜色为白色
          },
        },
      },
      {
        type: "value",
        scale: true,
        name: "温度",
        max: 100,
        min: 0,
        boundaryGap: [0.2, 0.2],
        nameTextStyle: {
          color: "white", // 设置 y 轴 name 文字颜色
        },
        textStyle: {
          color: "white", // 设置 y 轴标签文字颜色为白色
        },
        axisLine: {
          lineStyle: {
            color: "white", // 设置 y 轴轴线颜色为白色
          },
        },
        splitLine: {
          lineStyle: {
            color: "white", // 设置 y 轴分割线颜色为白色
          },
        },
      },
    ],
    series: [
      {
        name: "湿度",
        type: "bar",
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            barBorderRadius: 4,
          },
        },
        animationEasing: "elasticOut",
        animationDelay: function (idx) {
          return idx * 10;
        },
        animationDelayUpdate: function (idx) {
          return idx * 10;
        },
        data: (function () {
          // let res = [];
          // let len = 50;
          // while (len--) {
          //   res.push(Math.round(Math.random() * 10));
          // }
          let res = [];
          // eslint-disable-next-line react/prop-types
          let len = thirtyDataList.length;
          for (let i = 0; i < len; i++) {
            let td = thirtyDataList[i];
            // eslint-disable-next-line react/prop-types
            // eslint-disable-next-line react/prop-types
            res.push(td.humidity);
          }
          return res;
        })(),
      },
      {
        name: "温度",
        type: "line",
        data: (function () {
          // let res = [];
          // let len = 0;
          // while (len < 50) {
          //   res.push((Math.random() * 10 + 5).toFixed(1) - 0);
          //   len++;
          // }
          let res = [];
          // eslint-disable-next-line react/prop-types
          let len = thirtyDataList.length;
          for (let i = 0; i < len; i++) {
            let td = thirtyDataList[i];
            // eslint-disable-next-line react/prop-types
            // eslint-disable-next-line react/prop-types
            res.push(td.temperature);
          }
          return res;
        })(),
      },
    ],
  };

  let count;

  const [option, setOption] = useState(DEFAULT_OPTION);

  function fetchNewData() {
    const axisData = new Date(gatherDate)
      .toLocaleTimeString()
      .replace(/^\D*/, "");
    const newOption = cloneDeep(option); // immutable
    newOption.title.text = "数据趋势" + new Date(gatherDate).getSeconds();
    const data0 = newOption.series[0].data;
    const data1 = newOption.series[1].data;
    data0.shift();
    data0.push(humidity);
    data1.shift();
    data1.push(temperature);

    newOption.xAxis[0].data.shift();
    newOption.xAxis[0].data.push(axisData);
    newOption.xAxis[1].data.shift();
    newOption.xAxis[1].data.push(count++);

    setOption(newOption);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      fetchNewData();
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <>
      {
      // eslint-disable-next-line react/prop-types
      thirtyDataList.length === 0 ? (
        <Loading style={{ height: "100%", width: "100%" }} />
      ) : (
        <ReactECharts
          option={option}
          style={{ height: "100%", width: "100%" }}
        />
      )}
    </>
  );
};

export default Page;
