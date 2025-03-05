import { FlowbiteService } from './core/services/flowbite/flowbite.service';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite'
import { SidebarComponent } from "./pages/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'movies4u';


  constructor(private FlowbiteService: FlowbiteService) {}

  ngOnInit(): void {
  this.FlowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }

}
