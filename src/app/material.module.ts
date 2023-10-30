import { NgModule } from "@angular/core";
import {MatButtonModule, MatIconButton} from "@angular/material/button" 
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort'
import {MatTableModule} from '@angular/material/table'
import {MatPaginatorModule} from '@angular/material/paginator'
import {MatSelectModule} from '@angular/material/select'



@NgModule({
    exports:[
        MatButtonModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatMenuModule,
        MatIconModule,
        MatSortModule,
        MatTableModule,
        MatPaginatorModule,
        MatSelectModule
    ]
})
export class MeterialModule{

}