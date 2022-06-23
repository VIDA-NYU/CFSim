import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataLoaderDialogComponent } from './data-loader-dialog/data-loader-dialog.component';

@Injectable({
    providedIn: 'root'
})


export class DialogManager {

    constructor( public dialog: MatDialog ){}


    public open_dialog( dialogName: string ): void {

        switch( dialogName ){

            case 'data-loader-dialog': this.open_data_loader_dialog(); break;
        }

    }


    // private methods
    private open_data_loader_dialog( params?: any ): void {

        this.dialog.open( DataLoaderDialogComponent, {
            panelClass: 'custom-dialog-container',
            width: '800px',
            height: '300px'
        });

    }

}


