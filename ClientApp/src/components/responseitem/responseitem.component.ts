import { Component, Input } from '@angular/core';
import { IResponseItem } from '../../models/models';

@Component({
  selector: 'app-responseitem',
  templateUrl: './responseitem.component.html',
  styleUrls: ['./responseitem.component.less']
})
export class ResponseItemComponent {
  @Input() responseItems: IResponseItem[];
}
