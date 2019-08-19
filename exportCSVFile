this.dataList = [{"pv": 4484115, "data_time": "2019-08-18 00:00:00", "ctr": 1310, "uv": 404052, "avg_click": 14.541495, "avg_pv": 11.097866, "rec_type": 1, "create_time": "2019-08-19 05:02:14", "scene_type": "ALL", "rec_overall_staticid": 303596, "appid": 5215146, "item_show_num": 27277, "click": 5875520}, {"pv": 4531559, "data_time": "2019-08-17 00:00:00", "ctr": 1310, "uv": 408754, "avg_click": 14.526537, "avg_pv": 11.086274, "rec_type": 1, "create_time": "2019-08-18 05:06:16", "scene_type": "ALL", "rec_overall_staticid": 302758, "appid": 5215146, "item_show_num": 26978, "click": 5937780}, {"pv": 4585893, "data_time": "2019-08-16 00:00:00", "ctr": 1313, "uv": 411609, "avg_click": 14.629051, "avg_pv": 11.141382, "rec_type": 1, "create_time": "2019-08-17 05:01:21", "scene_type": "ALL", "rec_overall_staticid": 301911, "appid": 5215146, "item_show_num": 26626, "click": 6021449}, {"pv": 4537424, "data_time": "2019-08-15 00:00:00", "ctr": 1302, "uv": 412871, "avg_click": 14.315297, "avg_pv": 10.989931, "rec_type": 1, "create_time": "2019-08-16 05:03:30", "scene_type": "ALL", "rec_overall_staticid": 301018, "appid": 5215146, "item_show_num": 26156, "click": 5910371}, {"pv": 4597486, "data_time": "2019-08-14 00:00:00", "ctr": 1336, "uv": 416146, "avg_click": 14.76855, "avg_pv": 11.047772, "rec_type": 1, "create_time": "2019-08-15 05:03:48", "scene_type": "ALL", "rec_overall_staticid": 300137, "appid": 5215146, "item_show_num": 25943, "click": 6145873}, {"pv": 4641302, "data_time": "2019-08-13 00:00:00", "ctr": 1332, "uv": 418450, "avg_click": 14.778834, "avg_pv": 11.091653, "rec_type": 1, "create_time": "2019-08-14 05:02:59", "scene_type": "ALL", "rec_overall_staticid": 299236, "appid": 5215146, "item_show_num": 25490, "click": 6184203}, {"pv": 4644805, "data_time": "2019-08-12 00:00:00", "ctr": 1315, "uv": 421238, "avg_click": 14.508356, "avg_pv": 11.026557, "rec_type": 1, "create_time": "2019-08-13 04:54:17", "scene_type": "ALL", "rec_overall_staticid": 298356, "appid": 5215146, "item_show_num": 25319, "click": 6111471}]
generateCSVFile() {
    let csvStr =
      '数据时间,成功推荐次数,推荐次数,推荐成功率,推荐人数,推荐产品数,人均推荐次数,人均点击次数\n';
    for (const item of this.dataList) {
      csvStr += `${item.data_time},${item.click},${item.pv},${item.ctr},${
        item.uv
      },${item.item_show_num},${item.avg_pv},${item.avg_click}\n`;
    }
    const file = new Blob([csvStr], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    downloadFile(file, 'export.csv');
  }
  
  downloadFile(file, fileName?) {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(file);
    link.download = fileName || Date.now().toString(36);
    document.body.appendChild(link);
    const evt = document.createEvent('MouseEvents');
    evt.initEvent('click', false, false);
    link.dispatchEvent(evt);
    document.body.removeChild(link);
  }
