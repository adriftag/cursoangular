export class User {
  id?: number;
  nombre?: string;
  apellidos?: string;
  edad?: number;
  nif?: string;
  email?: string;
  confEmail?: string;

  constructor(id?: number, nombre?: string, apellidos?: string, edad?: number, nif?: string, email?: string) {
    this.id = id || null;
    this.nombre = nombre || null;
    this.apellidos = apellidos || null;
    this.edad = edad || null;
    this.nif = nif || null;
    this.email = email || null;
  }

  toString() {
    console.log(`Usuario: ${this.nombre} ${this.apellidos}`);
  }
}