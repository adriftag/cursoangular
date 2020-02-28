import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	users : any[];
  constructor(private userService : UserService) {
	this.userService.getStudents().subscribe(students => {
		this.users = students;
	  });
   }

  ngOnInit(): void {
  }
  title = 'curso-angular';
  apuestaUsuario = 0;
  apuestaComputer = 0;
  piedra = 0;
  papel = 1;
  tijera = 2;
  sApuestaComputer = '';
  sApuestaUsuario = '';
  historialPartidas : any [] = [];
  
  clickHeader() {
	  alert('Hola');
  }
  traduce() {
	  switch (this.apuestaUsuario) {
		  case this.piedra:
		    this.sApuestaUsuario='piedra';break;
		  case this.papel:
		    this.sApuestaUsuario='papel';break;
		  case this.tijera:
		    this.sApuestaUsuario='tijera';
	  }
	  switch (this.apuestaComputer) {
		  case this.piedra:
		    this.sApuestaComputer='piedra';break;
		  case this.papel:
		    this.sApuestaComputer='papel';break;
		  case this.tijera:
		    this.sApuestaComputer='tijera';
	  }
  }
  
  lanzaComputer() {
	  
	  if (this.apuestaComputer == this.apuestaUsuario) {
		  alert(`Computer says ${this.sApuestaComputer}: Draw!, Let's play again`);
		  return 'Empata';
	  } else if ((this.apuestaComputer == this.piedra && this.apuestaUsuario == this.tijera) || 
			(this.apuestaComputer == this.papel && this.apuestaUsuario == this.piedra) || 
			(this.apuestaComputer == this.tijera && this.apuestaUsuario == this.papel)) {
		  alert(`Computer says ${this.sApuestaComputer}: You lose, sucker`);
		  return 'Pierde';
	  } else {
		  alert(`Computer says ${this.sApuestaComputer}: I have to learn so much from you, master`);
		  return 'Gana';
	  }

  }
  clickJuego(apuesta) {
	  this.apuestaUsuario = apuesta;
	  this.apuestaComputer = Math.floor(Math.random() * 3); //esto da como valores 0, 1, 2
	  this.traduce();
	  let resultado = this.lanzaComputer();
	  
	  const partida = {
		  computer : this.sApuestaComputer,
		  usuario : this.sApuestaUsuario, 
		  partida : resultado
	  }
	  this.historialPartidas.push(partida);
  }
}
