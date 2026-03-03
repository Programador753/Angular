import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-selector',
  imports: [FormsModule, CommonModule],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css'
})
export class SelectorComponent implements OnChanges {
  @Input() defaultOption: any;
  @Input() options: { value: any; text: string }[] = [];
  @Input() label: string | null = null;
  @Output() selectedValueChange = new EventEmitter<any>();

  selectedValue: any = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['defaultOption']) {
      this.selectedValue = this.defaultOption;
    }
  }

  onSelectionChange(value: any): void {
    this.selectedValue = value;
    this.selectedValueChange.emit(value);
  }
}
