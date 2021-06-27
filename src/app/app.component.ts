import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  images = [
    {
      title: 'At the Beach',
      url: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
    {
      title: 'At the Park',
      url: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
    {
      title: 'On the River',
      url: 'https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
    {
      title: 'Sunset at the Beach',
      url: 'https://images.unsplash.com/photo-1505845664900-f883fde76fb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    },
  ];
}
