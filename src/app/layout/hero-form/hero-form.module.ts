import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeroPageRoutingModule} from './hero-form-routing.module';
import {HeroFormComponent} from './hero-form.component';
import {FormsModule} from '@angular/forms';


@NgModule({
    imports: [CommonModule, HeroPageRoutingModule, FormsModule],
    declarations: [HeroFormComponent]
})
export class HeroFormModule {}
