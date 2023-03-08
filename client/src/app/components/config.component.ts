import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

	form!: FormGroup

	constructor(private fb: FormBuilder) { }

	ngOnInit(): void {
		this.form = this.createForm()
	}

	createGame() {
		const gameConfig = this.form.value
		console.info('>>> gameConfig: ', gameConfig)
	}

	private createForm(): FormGroup {
		return this.fb.group({
			playerName: this.fb.control<string>('', [ Validators.required ]),
			colour: this.fb.control<string>('white', [ Validators.required ])
		})
	}

}
