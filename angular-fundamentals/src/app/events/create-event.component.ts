import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from ".";

@Component({
  templateUrl: 'create-event.component.html'
})
export class CreateEventComponent {
  event: any;
  isDirty: boolean = true;

  constructor(private router: Router,
              private eventService: EventService) {}

  saveEvent(formValues: any) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() { this.router.navigate(['/events']); }

}
