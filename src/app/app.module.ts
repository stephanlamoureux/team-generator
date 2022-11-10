import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { TeamComponent } from './team/team.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
	declarations: [AppComponent, TeamComponent],
	imports: [BrowserModule, BrowserAnimationsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
