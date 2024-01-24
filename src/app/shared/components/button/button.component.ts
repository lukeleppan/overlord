import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [FontAwesomeModule, NgIf],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() buttonColor: 'accent' | 'green' | 'red' = 'accent';
  @Input() buttonIcon: IconProp | undefined;
  @Input() onClick: () => void = () => {};
}
