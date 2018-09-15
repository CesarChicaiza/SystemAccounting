import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cleanSession } from 'selenium-webdriver/safari';

//import { ReportService } from '../../../report/report.service';

declare var toastr;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public isMenuOpen: string;
  public moduleName: string;
  public sitemapGroups: Array<any>;

  constructor(private router: Router) {
    this.sitemapGroups = [];
  }


  ngOnInit() {
    debugger
    this.isMenuOpen = sessionStorage.getItem("isMenuOpen");
    this.moduleName = sessionStorage.getItem('selectedModule');
    let tmpSitemaps = sessionStorage.getItem('sitemap');

    if (tmpSitemaps != null)
      this.sitemapGroups = JSON.parse(tmpSitemaps);

    console.log(this.sitemapGroups);
  }

  public logout(): void {
    sessionStorage.removeItem("id_token");
    sessionStorage.removeItem("sitemap");
    sessionStorage.removeItem("isMenuOpen");

    this.router.navigate(['login']);
    
  }

  public toggle() {

    if (this.isMenuOpen === "true") {
      this.isMenuOpen = "false";
    }
    else {
      this.isMenuOpen = "true";
    }

    sessionStorage.setItem("isMenuOpen", this.isMenuOpen);

    if (this.isMenuOpen === "true") {
      this.router.navigate(['modules']);
    }
    else {
      window.history.back();
    }

  }


  //Clean data
  public NavigateTo(routeName: string, name:string) {

    sessionStorage.removeItem('selectedModule');
    sessionStorage.removeItem('sitemap');
    sessionStorage.setItem('isMenuOpen', "false");
    sessionStorage.setItem('selectedModule', name);


    this.router.navigate([routeName]);
  }


  //Download
  /*public Download(reportId: string) {
  
    debugger
    let result = this.reportService.download(reportId);

      result.subscribe(
        (response) => {
          toastr.success('El archivo estará disponible en un momento.')
        },
        (error) => {
          toastr.error("Error: " + error)
        }
      ); 
  }*/
}

