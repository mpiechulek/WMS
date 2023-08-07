import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  folders = [
    {
      name: 'Jan Kowalksi',
    },
    {
      name: 'Ronald Trąbka',
    },
    {
      name: 'Mariusz wszytskowidzi',
    },
    {
      name: 'Marcin Woźniak',
    },
    {
      name: 'Abrams Richardson',
    },
    {
      name: 'Maciej Je',
    },
    {
      name: 'Jan Kowalksi',
    },
    {
      name: 'Ronald Trąbka',
    },
    {
      name: 'Mariusz wszytskowidzi',
    },
    {
      name: 'Marcin Woźniak',
    },
    {
      name: 'Abrams Richardson',
    },
    {
      name: 'Maciej Je',
    },
  ];
}
