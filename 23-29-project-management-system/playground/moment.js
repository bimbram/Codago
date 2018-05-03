const moment = require('moment');

const { Pool } = require("pg");


const pool = new Pool(
{
    user: 'bim',
    host: 'localhost',
    database: 'projectmanagementdb',
    password: '12345',
    port: 5432,
});

pool.query(`SELECT * FROM activity`, function(err, data) {
  var data = data.rows
  // var dataDate = [];
  // data.forEach(function(data){dataDate.push(Date(data.time)) })
  console.log("moment.date", moment().format("DD/MM/YYYY"));
  // console.log(typeof dataDate[0]);
  var dateViewData = [ [ , ],  [,  ], [,  ], [,  ], [,  ], [,  ], [,  ] ];
  console.log(moment().format('HH:mm'));
  // for(var x = 0; x< 7; x++) {
  //   dateViewData[x][0] = moment().subtract(x, 'days').format('DD/MM/YYYY');
  //   // for(var y = 0; y<data.length; y++) {
  //   //   if(data.date === )
  //   // }
  //   dateViewData[x].push(data.filter(function(item){return item.date === dateViewData[x][0]}));
  //   if(dateViewData[x][1].length !== 0) {
  //     console.log(dateViewData[x][0]);
  //     console.log("==========================");
  //     for(var y = 0; y<dateViewData[x][1].length; y++) {
  //       //li
  //       console.log("ini test: ", dateViewData[x][1][y]);
  //       console.log();
  //     }
  //   }
  //
  // }
  //
  // for(var y = 0; y<weekDate; y++) {
  //     dataViewData.push()
  // }
  // console.log(moment().format("dddd, MMMM Do YYYY"));
  // console.log(moment().subtract(7, 'days').format('DD/MM/YYYY'));
  // console.log(moment().format('DD/MM/YYYY'));
  console.log(moment('2017-09-30', 'YYYY-MM-DD').format('dddd, MMMM D, YYYY'));
});
//hours: "2017-09-30 14:00:00.931354".split('.')[0].split(' ')[1].slice(0, -3)
//date: "2017-09-30 14:00:00.931354".split('.')[0].split(' ')[0]

//date: [
//[ tangga1, [timestamp1, timestamp2] ],
//[tangga2, [timestamp1, timestamp2, timestamp3] ]
// ]
