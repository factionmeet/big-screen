let now = '2024-03-12T15:24:15.746Z'
function randomData() {
  now = new Date(now);
  return {
    name: now.toString(),
    value: [
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
      1000
    ]
  };
}
console.log(randomData());
console.log(new Date().toString());

const dateStr = '2024-03-13T07:16:58.838Z';
const date = new Date(dateStr);
const newDateStr = date.toISOString().slice(0, 19).replace('T', ' ');
console.log(newDateStr); // 输出: "2024-03-12 08:00:00"

function ex() {
  let thirtyDataList = [
    {
      "id": 7867,
      "temperature": 34,
      "humidity": 100,
      "createdAt": "2024-03-14T02:41:25.000Z",
      "updatedAt": "2024-03-14T02:41:25.000Z"
    },
    {
      "id": 7866,
      "temperature": 33,
      "humidity": 87,
      "createdAt": "2024-03-14T02:41:24.000Z",
      "updatedAt": "2024-03-14T02:41:24.000Z"
    },
    {
      "id": 7865,
      "temperature": -39,
      "humidity": 95,
      "createdAt": "2024-03-14T02:41:23.000Z",
      "updatedAt": "2024-03-14T02:41:23.000Z"
    },
    {
      "id": 7864,
      "temperature": -8,
      "humidity": 91,
      "createdAt": "2024-03-14T02:41:21.000Z",
      "updatedAt": "2024-03-14T02:41:21.000Z"
    },
    {
      "id": 7863,
      "temperature": 12,
      "humidity": 63,
      "createdAt": "2024-03-14T02:41:20.000Z",
      "updatedAt": "2024-03-14T02:41:20.000Z"
    },
    {
      "id": 7862,
      "temperature": -8,
      "humidity": 28,
      "createdAt": "2024-03-14T02:41:18.000Z",
      "updatedAt": "2024-03-14T02:41:18.000Z"
    },
    {
      "id": 7861,
      "temperature": 49,
      "humidity": 97,
      "createdAt": "2024-03-14T02:41:17.000Z",
      "updatedAt": "2024-03-14T02:41:17.000Z"
    },
    {
      "id": 7860,
      "temperature": 32,
      "humidity": 43,
      "createdAt": "2024-03-14T02:41:16.000Z",
      "updatedAt": "2024-03-14T02:41:16.000Z"
    },
    {
      "id": 7859,
      "temperature": 7,
      "humidity": 16,
      "createdAt": "2024-03-14T02:41:15.000Z",
      "updatedAt": "2024-03-14T02:41:15.000Z"
    },
    {
      "id": 7858,
      "temperature": -6,
      "humidity": 66,
      "createdAt": "2024-03-14T02:41:14.000Z",
      "updatedAt": "2024-03-14T02:41:14.000Z"
    },
    {
      "id": 7857,
      "temperature": -14,
      "humidity": 66,
      "createdAt": "2024-03-14T02:41:13.000Z",
      "updatedAt": "2024-03-14T02:41:13.000Z"
    },
    {
      "id": 7856,
      "temperature": 16,
      "humidity": 69,
      "createdAt": "2024-03-14T02:41:11.000Z",
      "updatedAt": "2024-03-14T02:41:11.000Z"
    },
    {
      "id": 7855,
      "temperature": 48,
      "humidity": 11,
      "createdAt": "2024-03-14T02:41:10.000Z",
      "updatedAt": "2024-03-14T02:41:10.000Z"
    },
    {
      "id": 7854,
      "temperature": 44,
      "humidity": 51,
      "createdAt": "2024-03-14T02:41:09.000Z",
      "updatedAt": "2024-03-14T02:41:09.000Z"
    },
    {
      "id": 7853,
      "temperature": -38,
      "humidity": 35,
      "createdAt": "2024-03-14T02:41:07.000Z",
      "updatedAt": "2024-03-14T02:41:07.000Z"
    },
    {
      "id": 7852,
      "temperature": -9,
      "humidity": 25,
      "createdAt": "2024-03-14T02:41:06.000Z",
      "updatedAt": "2024-03-14T02:41:06.000Z"
    },
    {
      "id": 7851,
      "temperature": 24,
      "humidity": 96,
      "createdAt": "2024-03-14T02:41:04.000Z",
      "updatedAt": "2024-03-14T02:41:04.000Z"
    },
    {
      "id": 7850,
      "temperature": 34,
      "humidity": 11,
      "createdAt": "2024-03-14T02:41:02.000Z",
      "updatedAt": "2024-03-14T02:41:02.000Z"
    },
    {
      "id": 7849,
      "temperature": 35,
      "humidity": 23,
      "createdAt": "2024-03-14T02:41:00.000Z",
      "updatedAt": "2024-03-14T02:41:00.000Z"
    },
    {
      "id": 7848,
      "temperature": -28,
      "humidity": 41,
      "createdAt": "2024-03-14T02:40:59.000Z",
      "updatedAt": "2024-03-14T02:40:59.000Z"
    },
    {
      "id": 7847,
      "temperature": -26,
      "humidity": 42,
      "createdAt": "2024-03-14T02:40:57.000Z",
      "updatedAt": "2024-03-14T02:40:57.000Z"
    },
    {
      "id": 7846,
      "temperature": 10,
      "humidity": 4,
      "createdAt": "2024-03-14T02:40:56.000Z",
      "updatedAt": "2024-03-14T02:40:56.000Z"
    },
    {
      "id": 7845,
      "temperature": 38,
      "humidity": 98,
      "createdAt": "2024-03-14T02:40:53.000Z",
      "updatedAt": "2024-03-14T02:40:53.000Z"
    },
    {
      "id": 7844,
      "temperature": -23,
      "humidity": 9,
      "createdAt": "2024-03-14T02:40:43.000Z",
      "updatedAt": "2024-03-14T02:40:43.000Z"
    },
    {
      "id": 7843,
      "temperature": 5,
      "humidity": 5,
      "createdAt": "2024-03-14T02:35:07.000Z",
      "updatedAt": "2024-03-14T02:35:07.000Z"
    },
    {
      "id": 7842,
      "temperature": 5,
      "humidity": 5,
      "createdAt": "2024-03-14T02:17:33.000Z",
      "updatedAt": "2024-03-14T02:17:33.000Z"
    },
    {
      "id": 7841,
      "temperature": 5,
      "humidity": 5,
      "createdAt": "2024-03-14T02:10:13.000Z",
      "updatedAt": "2024-03-14T02:10:13.000Z"
    },
    {
      "id": 7840,
      "temperature": 7,
      "humidity": 7,
      "createdAt": "2024-03-14T02:10:02.000Z",
      "updatedAt": "2024-03-14T02:10:02.000Z"
    },
    {
      "id": 7839,
      "temperature": 3,
      "humidity": 4,
      "createdAt": "2024-03-14T02:09:52.000Z",
      "updatedAt": "2024-03-14T02:09:52.000Z"
    },
    {
      "id": 7838,
      "temperature": 1,
      "humidity": 2,
      "createdAt": "2024-03-14T02:09:38.000Z",
      "updatedAt": "2024-03-14T02:09:38.000Z"
    }
  ]
  // let now = new Date();
  // let res = [];
  // let len = 50;
  // while (len--) {
  //   res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
  //   now = new Date(now - 2000);
  // }
  let res = [];
  let len = 50;
  while (len--) {
    res.push(50 - len + 1);
  }

  // let res = [];
  // // eslint-disable-next-line react/prop-types
  // let len = thirtyDataList.length;
  // for (let i = 0; i < len; i++) {
  //   let td = thirtyDataList[i];
  //   // eslint-disable-next-line react/prop-types
  //   let now = new Date(td.createdAt);
  //   res.unshift(now.toLocaleTimeString().replace(/^\D*/, ""));
  //   now = new Date(now - 2000);
  // }
  return res;
}
console.log("ex\n", ex());