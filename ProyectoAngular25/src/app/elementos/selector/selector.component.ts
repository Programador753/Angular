import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-selector',
  imports: [FormsModule, CommonModule],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css'
})
export class SelectorComponent {
  @Input() defaultOption: any;
  @Input() options: { value: any; text: string }[] = [];
  @Input() label: string | null = null;
  selectedValue: any = null;
  @Output() selectedValueChange = new EventEmitter<any>();

  onSelectionChange(): void {
    this.selectedValueChange.emit(this.selectedValue);
  }
}
