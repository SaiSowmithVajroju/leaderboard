import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.scss']
})
export class LeaderBoardComponent implements OnInit {

  title = 'leader-board';
displayedColumns = ['customer_name', 'object_id', 'created_by',
    'created_on', 'modified_by',
    'modified_on', 'action'];
  constructor() { }

  ngOnInit(): void {
  }

}
