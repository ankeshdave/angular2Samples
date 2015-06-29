/// <reference path="../../../typings/tsd.d.ts" />
import {Component,View,onChange,FormBuilder, Validators, formDirectives, ControlGroup} from "angular2/angular2";

@Component({
	selector:"login-form",
	appInjector:[FormBuilder]
	
})

@View({
	templateUrl:"app/components/loginComponent/login.html",
	directives:[formDirectives]
	
})

export class LoginForm{
	constructor(builder:FormBuilder){

	}
}