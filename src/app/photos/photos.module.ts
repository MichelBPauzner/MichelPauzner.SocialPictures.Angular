import { NgModule } from '@angular/core';

import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoModule } from './photo/photo.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { PhotoDetailsModule } from './photo-details/photo-details.module';

@NgModule({
    declarations:[ 
        
    ],
    imports: [ 
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
        DarkenOnHoverModule,
        PhotoDetailsModule
    ]
})
export class PhotosModule{}