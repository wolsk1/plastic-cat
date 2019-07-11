import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ClientCreateComponent } from '../../pages';

@Component({
  selector: 'ivato-client-overview-actions',
  templateUrl: './client-overview-actions.component.html',
  styleUrls: ['./client-overview-actions.component.scss']
})
export class ClientOverviewActionsComponent implements OnInit {
  constructor(
    private matDialog: MatDialog
  ) { }

  public ngOnInit(): void {
  }

  public openCreateForm(): void {
    this.matDialog.open(ClientCreateComponent);
  }
}