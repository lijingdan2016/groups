import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shouye',
  templateUrl: './shouye.component.html',
  styleUrls: ['./shouye.component.css']
})
export class ShouyeComponent implements OnInit {
  options: any;
  constructor() { }

  ngOnInit() {
   this.mychat1()
   this.mychat2()
  }
  mychat1(){
    let myecharts = echarts.init(document.getElementById('main'));
    this.options = {

      xAxis: {
        type: 'category',
        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [500, 732, 845, 1078, 1290, 1630, 1888],
        type: 'line',
        smooth: true
      }]


    }

    myecharts.setOption(this.options);
  }
  mychat2(){
    let myecharts = echarts.init(document.getElementById('main1'));
    this.options = {

      xAxis: {
        type: 'category',
        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [400, 300, 323, 400, 500, 700, 767],
        type: 'bar'
     }]


    }

    myecharts.setOption(this.options);
  }

}
