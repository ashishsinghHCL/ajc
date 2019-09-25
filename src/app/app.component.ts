import { Component } from '@angular/core';
import { DataServiceService } from './services/data-service.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {SignupModalComponent } from './signup-modal/signup-modal.component';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataServiceService,NgxUiLoaderService]
})
export class AppComponent {
  title = 'ajc';
  menu:any;
  constructor(
    private ds:DataServiceService,
    private loader: NgxUiLoaderService,
    private router:Router,
    private modalService: NgbModal
    ) { 

      this.router.events.subscribe((event:Event) => {
        switch(true){

          case event instanceof NavigationStart: {
            this.loader.start();
            break;
          }

          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError:{
                this.loader.stop();
                break;
          }
          
          default: {
            break;
          }

        }
      })


    }
    open() {
      const modalRef = this.modalService.open(SignupModalComponent);
      modalRef.componentInstance.name = 'World';
    }
  ngOnInit() {
    // this.loader.start();
    this.ds.get('categories').subscribe((data:any) => {
      this.menu = data;
      // this.loader.stop(); 
    });
  }

}
