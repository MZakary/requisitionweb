import { Component, Input, Output, EventEmitter, ViewChild, ElementRef  } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-confirm-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule],
  templateUrl: './confirm-dialog.html',
})
export class ConfirmDialogComponent {

  @ViewChild('dialogTitle') dialogTitle!: ElementRef;
  @Input() showRejectButton = true;  // default true, can set false if you want

  focusDialogTitle() {
    setTimeout(() => {
      const el = this.dialogTitle?.nativeElement;
      if (el) {
        el.focus();
      }
    }, 0); // ⏱️ small delay to ensure DOM is fully rendered
  }

  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>(); // ✅ Add this

  @Input() message = '';
  @Input() header = 'Confirmation';
  @Input() acceptLabel = 'Oui';
  @Input() rejectLabel = 'Non';

  @Output() accept = new EventEmitter<void>();
  @Output() reject = new EventEmitter<void>();

  onAccept() {
    this.accept.emit();
    this.visible = false;
  }

  onReject() {
    this.reject.emit();
    this.visible = false;
  }
}
