import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    form: FormGroup;                    // {1}
    constructor(
        public router: Router,
        private fb: FormBuilder
    ) {}

    // ngOnInit() {}
    ngOnInit() {
        this.form = this.fb.group({     // {5}
            userName: ['chadi', Validators.required],
             password: ['', Validators.required]
        });
    }


    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }
}
