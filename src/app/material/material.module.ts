import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule
    ],
    exports: [
        MatToolbarModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule
    ],
    declarations: []
})
export class MaterialModule {
}
