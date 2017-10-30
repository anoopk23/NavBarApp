import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  navItems = ['Google', 'Facebook', 'Instagram', 'LinkedIn'];
  navSites = ['www.google.com', 'www.fb.com', 'www.instagram.com', 'www.linkedin.com'];
  constructor() { }

  ngOnInit() {
  }

}
