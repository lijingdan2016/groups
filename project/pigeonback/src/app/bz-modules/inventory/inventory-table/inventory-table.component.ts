import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableModule } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { ConfirmationService } from 'primeng/primeng';
import { MessageService } from 'primeng/components/common/messageservice';
import { WarehouseService } from "../../../common/services/warehouse.service";
import { CategoryService } from "../../../common/services/category.service";
import { InventoryService } from '../../../common/services/inventory.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.scss']
})
export class InventoryTableComponent implements OnInit {
  user;
  //仓库
  public warehouses: SelectItem[];
  //品类
  public categories: SelectItem[];
  //记录类型
  public recordTypes: SelectItem[];
  //时间范围
  public startDate: Date;
  public endDate: Date;
  //商品
  public items: Array<any>;
  public selectedInbentory;
  public selectedCategory;

  constructor(public router: Router,
    public http:HttpClient,
    public activeRoute: ActivatedRoute,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private warehouseService: WarehouseService,
    private categoryService: CategoryService,
    private inventoryService:InventoryService) {

  }

  ngOnInit() {
    this.http.get('/user/data').subscribe(data=>{
      this.user=data;
      console.log(data);
      console.log(this.user)
    })

    this.startDate = new Date();
    this.endDate = new Date();

    this.warehouseService.getWarehouses().subscribe((warehouses) => {
      this.warehouses = warehouses;
    });

    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });

    this.inventoryService.getInventories("-1").subscribe((items)=>{
      this.items=items;
    });
  }

  del(item:Object){
    let a=item;
    this.http.post('/user/del',{a}).subscribe(
      data=>{
          console.log(data);
      })
  }


  public editItem(item) {
    console.log(item);
    this.router.navigateByUrl('/workspace/inventory/inventory-item-detail/item-id/1111');
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
class user{
  user_id:number;
  password:string;
  email:string;
  identity:string;
  stu_id:number
}