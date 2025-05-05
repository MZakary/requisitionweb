import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-image',
    standalone: true,
    template: `
        <img
            [src]="src"
            [alt]="alt"
            [style.width]="width"
            [style.height]="height"
            (error)="onError($event)"
            style="object-fit: contain; display: block;"
        />
    `
})
export class ImageComponent {
    @Input() src!: string;
    @Input() alt: string = '';
    @Input() width: string = 'auto';
    @Input() height: string = 'auto';

    fallbackSrc: string = 'assets/images/fallback.png'; // Make sure this exists in your assets

    onError(event: Event): void {
        (event.target as HTMLImageElement).src = this.fallbackSrc;
    }
}
