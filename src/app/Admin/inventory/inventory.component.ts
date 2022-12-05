import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from 'src/app/services/admin.services';

import { NgForm } from '@angular/forms';
import { CommonService } from 'src/app/common/common.services';
import { Inventory } from './model/invn.model';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements AfterViewInit {

  invnList:Inventory[]=[];
  invnTypes:string[]=[];
  dataSource:any;
  
  //@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private adminSrv:AdminService,public cmSrc:CommonService) { }
  ngAfterViewInit(): void {
    this.ngOnInit();
   // this.dataSource.paginator = this.paginator;
   // this.dataSource = new MatTableDataSource<this.invnList>(ELEMENT_DATA);
  }

  ngOnInit(): void {
    this.getInvnType();
    this.getInvnList();
  }

  getInvnType(){
    this.adminSrv.getInvnType().subscribe(responData=>{
      console.log(responData);
      console.log("Values " + responData.values);
      this.invnTypes=responData.values.split(",");
    })
  }

  getInvnList(){
    this.adminSrv.getInvnList().subscribe((resonData:any)=>{
      console.log(resonData);
      this.invnList=resonData;
    })
  }

  onSubmit(form:NgForm){
    console.log(form)
  }

}
