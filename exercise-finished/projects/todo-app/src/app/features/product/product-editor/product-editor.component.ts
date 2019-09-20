import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { Product } from '../state/product.model';

@Component({
  selector: 'todo-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.scss']
})
export class ProductEditorComponent implements OnInit, OnChanges {
  @Input() product: Product;
  @Output() save = new EventEmitter<Partial<Product>>();
  @Output() cancel = new EventEmitter<void>();

  editedProduct: Partial<Product>;

  constructor() {}

  ngOnInit() {
    this.editedProduct = { ...this.product };
  }

  ngOnChanges() {
    this.editedProduct = { ...this.product };
  }

  onSave(form: NgForm) {
    if (form.valid) {
      this.save.emit(this.editedProduct);
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
