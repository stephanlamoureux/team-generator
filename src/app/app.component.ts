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
	numberOfTeams: number | '' = ''
	teams: string[][] = []

	inputName(member: string) {
		this.newMember = member
	}

	inputTeams(teamNumber: string) {
		this.numberOfTeams = Number(teamNumber)
		console.log(this.numberOfTeams)
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

	generateTeam() {
		// check to make sure numberOfTeams is a number and has a pos value
		if (!this.numberOfTeams || this.numberOfTeams <= 0) {
			return
		}

		// create a copy of the members array so we can mutate
		const allMembers = [...this.members]
		for (let i = 0; i < this.numberOfTeams; i++) {
			const randomIndex = Math.floor(Math.random() * allMembers.length)
			const member = allMembers.splice(randomIndex, 1)[0]

			if (this.teams[i]) {
				this.teams[i].push(member)
			} else {
				this.teams[i] = [member]
			}
		}
	}
}
