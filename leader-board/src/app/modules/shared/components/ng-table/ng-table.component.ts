import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ng-table',
  templateUrl: './ng-table.component.html',
  styleUrls: ['./ng-table.component.scss']
})

export class NgTableComponent implements AfterViewInit, OnInit, OnChanges {

  @ViewChild(MatPaginator, { static: false })
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  dataSource!: MatTableDataSource<any>;
  @Input() transformers: string | any[] | undefined;
  @Input()
  searchValue!: string;
  @Input()
  isTableLoading!: boolean;
  @Input() displayedColumns: any;
  @Input() archievedStatus: any;
  @Input()
  loggedUser!: string;

  @Output() selectedTransformerChanged = new EventEmitter();
  @Output() selectedTransformerDelete = new EventEmitter();
  @Output() selectedCostChanged = new EventEmitter();
  @Output() selectedCostCloneChanged = new EventEmitter();
  @Output() selectedCostDelete = new EventEmitter();
  @Output() selectedSetDefaultCostFile = new EventEmitter();
  @Output() selectedOrdFileChanged = new EventEmitter();
  @Output() archiveTransformerChanged = new EventEmitter();
  @Output() selectedTransformerClone = new EventEmitter();
  @Output() unlockTransformerChanged = new EventEmitter();
  @Output() selectedTransformerArchieveClone = new EventEmitter();

  @Output() selectedUserChanged = new EventEmitter();
  @Output() selectedUserEnableOrDisableChanged = new EventEmitter();
  email: any;
  constructor() {
    // this.email = JSON.parse(localStorage.getItem('LoggedInUser')).email
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && Array.isArray(this.transformers)) {
      this.dataSource = new MatTableDataSource(this.transformers);
      this.sort.sort({ id: 'modified_on', start: 'asc', disableClear: false });
      if (this.transformers && this.transformers.length > 0) {
        // setTimeout(() => {
        //   this.sort.sort({ id: 'modified_on', start: 'desc', disableClear: false });
        //   this.dataSource.sort = this.sort;
        // });
        // this.dataSource.sortingDataAccessor = (item, property) => {
        //   switch (property) {
        //     case 'modified_on': return Date.parse(item.modified_on);
        //     default: return item[property];
        //   }
        // };
        // this.transformers = this.formatTable();
        // this.dataSource = new MatTableDataSource(this.transformers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    }
  }

  ngOnInit(): void {
    this.clearLocalStorage();
  }

  clearLocalStorage(): void {
  }

  ngAfterViewInit(): void {
    if (this.transformers && this.transformers.length > 0) {
      // this.sort.sort({ id: 'modified_on', start: 'desc', disableClear: false });
      // this.dataSource.sort = this.sort;
    }
  }

  openPanel(selectedTransformer: any): void {
    this.selectedTransformerChanged.emit(selectedTransformer);
  }

  // To delete the selected transformer object
  deleteTransformerObject(selectedTransformer: any): void {
    this.selectedTransformerDelete.emit(selectedTransformer);
  }

  // To clone the selected transformer object and emit
  cloneTransformerObject(selectedTransformer: any): void {
    this.selectedTransformerClone.emit(selectedTransformer);
  }

  // To clone the selected archieve transformer object and emit
  cloneTransformerArchieveObject(selectedTransformer: any): void {
    this.selectedTransformerArchieveClone.emit(selectedTransformer);
  }

  /**
   * To edit the existing cost file
   * @param {*} selectedCost: selected cost file
   * @memberof NgTableComponent
   */
  openCostEdit(selectedCost: any): void {
    this.selectedCostChanged.emit(selectedCost);
  }

  /**
   * To clone the existing cost file
   * @param {*} selectedCostClone: selected cost file
   * @memberof NgTableComponent
   */
  costClone(selectedCostClone: any): void {
    this.selectedCostCloneChanged.emit(selectedCostClone);
  }

  /**
   * To delete the existing cost file
   * @param {*} selectedCostDelete: selected cost file
   * @memberof NgTableComponent
   */
  deleteCost(selectedCostDelete: any): void {
    this.selectedCostDelete.emit(selectedCostDelete);
  }

  /**
   * To make a default file of selected cost file
   * @param {*} selectedSetDefaultCostFile: selected cost file
   * @memberof NgTableComponent
   */
  setDefault(selectedSetDefaultCostFile: any): void {
    this.selectedSetDefaultCostFile.emit(selectedSetDefaultCostFile);
  }

  /**
   * TO download ord file
   *
   * @memberof NgTableComponent
   */
  downloadOrdFile(selectedTransformer: any): void {
    this.selectedOrdFileChanged.emit(selectedTransformer);
  }

  unArchiveTransformer(selectedTransformer: any): void {
    this.selectedTransformerChanged.emit(selectedTransformer);
  }

  archiveTransformer(selectedTransformer: any): void {
    this.archiveTransformerChanged.emit(selectedTransformer);
  }

  unlockTheTransformer(selectedTransformer: any): void {
    this.unlockTransformerChanged.emit(selectedTransformer);
  }
  ///////////// userslist
  openUserEdit(selectedUser: any): void {
    this.selectedUserChanged.emit(selectedUser);
  }

  openUserEnableOrDisable(selectedUser: any): void {
    this.selectedUserEnableOrDisableChanged.emit(selectedUser);
  }
}
