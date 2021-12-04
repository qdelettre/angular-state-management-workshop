import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../state/product.model';

@Component({
  selector: 'todo-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output() edit = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  onEdit() {
    this.edit.emit(this.product.id);
  }

  onRemove() {
    this.remove.emit(this.product.id);
  }
}
