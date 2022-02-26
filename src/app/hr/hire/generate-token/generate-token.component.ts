import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-generate-token',
	templateUrl: './generate-token.component.html',
	styleUrls: ['./generate-token.component.css']
})
export class GenerateTokenComponent implements OnInit {
	generateTokenForm = this.fb.group({
		email: ['', Validators.required]
	});

	constructor(private fb: FormBuilder) { }

	ngOnInit(): void {
	}

	generateToken(): void {
		console.log(this.generateTokenForm.value);
	}

}
