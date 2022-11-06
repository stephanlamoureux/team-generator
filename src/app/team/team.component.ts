import { Component, OnInit, Input } from '@angular/core'
import { AppComponent } from '../app.component'

@Component({
	selector: 'app-team',
	templateUrl: './team.component.html',
	styleUrls: ['./team.component.css'],
})
export class TeamComponent extends AppComponent implements OnInit {
	@Input() team: string[] = []
	@Input() index: number = 0

	constructor() {
		super()
	}

	ngOnInit(): void {}
}
