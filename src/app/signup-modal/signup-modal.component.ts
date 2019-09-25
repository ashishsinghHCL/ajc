import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css']
})

export class SignupModalComponent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}


}
