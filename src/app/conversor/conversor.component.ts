import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  valorCelsius: number = 0;
  valorFahrenheit: number = 0;
  valorKelvin: number = 0;
  valorNewtons: number = 0;
  imageSrc: string;
  mensajeParaUsuario : string = "Este es el mensaje con espacios";

  constructor() { }

  ngOnInit(): void {
  }

  celsiusToKelvin(celsius: number) {
    return (+celsius +273);
  }
  celsiusToNewtons(celsius: number) {
    return (Math.floor(celsius * (33 / 100)));
  }
  celsiusToFahrenheits(celsius: number) {
    return (Math.floor(celsius * (9 / 5) + 32));
  }

  calculateAll() {
    if (isNaN(this.valorCelsius) || this.valorCelsius < 0) this.resetAll();
    this.valorFahrenheit = this.celsiusToFahrenheits(this.valorCelsius);
    this.valorKelvin = this.celsiusToKelvin(this.valorCelsius);
    this.valorNewtons = this.celsiusToFahrenheits(this.valorCelsius);
    this.imageSrc = this.valorCelsius > 30 ? "../../assets/sun.jpg" : "../../assets/clouds.jpg";
  }

  resetAll() {
    this.valorCelsius = 0;
    this.valorFahrenheit = 0;
    this.valorKelvin = 0;
    this.valorNewtons = 0;
  }

}
