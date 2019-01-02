import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { WarehouseService } from "../../../common/services/warehouse.service";
import { CategoryService } from "../../../common/services/category.service";
import { OutboundReceiptService } from '../../../common/services/outbound-receipt.service';
import { HttpClient } from '@angular/common/http';
import { ConfirmationService } from "primeng/components/common/confirmationservice";
import { MessageService } from "primeng/components/common/messageservice";
@Component({
  selector: 'outbound-receipt-table',
  templateUrl: './outbound-receipt-table.component.html',
  styleUrls: ['./outbound-receipt-table.component.scss']
})
export class OutboundReceiptTableComponent implements OnInit {
  //仓库
  public warehouses: SelectItem[];
  public startDate: Date;
  public endDate: Date;
  public items: Array<any>;
  public selectedInbentory;
  a;
  constructor(public http:HttpClient,
    private router: Router,
    private confirmationService: ConfirmationService,
    private activeRoute: ActivatedRoute,
    private warehouseService: WarehouseService,
    private categoryService: CategoryService,
    private messageService: MessageService,
    private outboundReceiptService: OutboundReceiptService) { }

  ngOnInit() {
    this.startDate = new Date();
    this.endDate = new Date();

    this.warehouseService.getWarehouses().subscribe(warehouses => {
      this.warehouses = warehouses;
    });

    this.outboundReceiptService.getOutboundRecords().subscribe((items) => {
      this.items = items;
    });
    this.http.get('/backadmin/search').subscribe(data=>{
      this.a=data;
      console.log(data);
    })
  }

  public newReceipt() {
    this.router.navigateByUrl('/workspace/inventory/new-outbound-receipt/receipt-no/IN-1-2222222');
  }

  public receiptDetail() {
    this.router.navigateByUrl('/workspace/inventory/outbound-receipt-detail/receipt-no/IN-1-2222222');
  }

  public printReceipt() {
    window.print();
  }
  del(i:number,item:Object){
    let a=item;
    this.a.splice(i,1);
    
    this.http.post('/backadmin/del',{a}).subscribe(data=>{
      console.log(data);
    })
  }
  public delItem(item) {
    console.log(item);
    this.confirmationService.confirm({
      message: '确定要删除吗？',
      accept: () => {
        console.log(item);
        this.messageService.add({ severity: 'success', summary: '成功', detail: '删除数据成功' });
      }
    });
  }
}
