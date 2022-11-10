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

	generateTeams() {
		// check to make sure numberOfTeams is a number and has a positive value,
		// and also check that there aren't more teams than people.
		if (!this.numberOfTeams || this.numberOfTeams <= 0) {
			this.errorMessage = 'Invalid number of teams.'
			return
		} else if (this.members.length < this.numberOfTeams) {
			this.errorMessage = 'Cannot have more teams than members.'
			return
		} else {
			this.errorMessage = ''
		}

		// create a copy of the members array so we can mutate
		const allMembers = [...this.members]

		while (allMembers.length) {
			for (let i = 0; i < this.numberOfTeams; i++) {
				const randomIndex = Math.floor(Math.random() * allMembers.length)
				//splice returns an array. When you push an array into an array, you get an array of arrays.
				//By adding the [0], you push the first element of the array instead.
				const member = allMembers.splice(randomIndex, 1)[0]
				// exit the while loop once there are no more members inside allMembers
				if (!member) break
				// if the random indexed array exists in teams[][, push it into member[]
				// else the member will create a new team
				if (this.teams[i]) {
					this.teams[i].push(member)
				} else {
					this.teams[i] = [member]
				}
			}
		}
		// clear inputs after generating
		this.members = []
		this.numberOfTeams = ''
	}

	clear() {
		this.teams = []
	}
}
