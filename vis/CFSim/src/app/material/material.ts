import { NgModule } from '@angular/core';

// material imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';

// holds all necessary modules
const MATERIAL_MODULES = [
    MatToolbarModule, MatDividerModule,
    MatIconModule,  MatButtonModule,
    MatMenuModule,  MatTableModule
];

@NgModule({

    imports: MATERIAL_MODULES,
    exports: MATERIAL_MODULES

})

export class MaterialModule {}