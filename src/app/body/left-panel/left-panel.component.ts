import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  constructor(private router:Router) { }

  
  ngOnInit() {
  }

  onSelectQuestion() {
    this.router.navigate(['/allquestions']);
  }

  onSelectHome() {
    this.router.navigate(['/home']);
  }

  onSelectProfile() {
    this.router.navigate(['/profile']);
  }
}
