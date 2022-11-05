import { Component } from '@angular/core'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	newMember: string = ''
	members: string[] = []
	errorMessage: string = ''

	inputName(member: string) {
		this.newMember = member
	}
	addMember() {
		if (!this.newMember) {
			this.errorMessage = "Name can't be left blank."
			return
		}
		this.members.push(this.newMember)
		this.newMember = ''
		this.errorMessage = ''
	}
}
