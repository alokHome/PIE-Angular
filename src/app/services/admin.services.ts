import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Inventory } from "../Admin/inventory/model/invn.model";
import { InventoryType } from "../Admin/inventory/model/invnTypes.model";


@Injectable({
    providedIn:"root"
})
export class AdminService{
   
    constructor(private http:HttpClient){}

    getInvnType(){
        return this.http.get<InventoryType>("http://localhost:9005/admin/combo/InvnTypes");
    }  
    
    getInvnList(){
        return this.http.get<Inventory>("http://localhost:9005/admin/invn");
    }
    
}