import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit{
  ngOnInit(): void {
    
  }
  
  onClick(route: string) {
    console.log(`Clic détecté sur ${route}`);
  }
}
