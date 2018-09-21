import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {Hero} from '../hero';

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
        let myHero =  new Hero(42, 'SkyDog',
            'Fetch any object at any distance',
            'Leslie Rollover');
        console.log('My hero is called ' + myHero.name); // "My hero is called SkyDog"
       // alert(this.form.userName);
        localStorage.setItem('isLoggedin', 'false');
    }
}
