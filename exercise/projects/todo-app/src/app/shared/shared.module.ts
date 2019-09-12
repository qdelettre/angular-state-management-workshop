import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule, MatButtonModule],
  exports: [CommonModule, MatToolbarModule, MatButtonModule]
})
export class SharedModule {}
