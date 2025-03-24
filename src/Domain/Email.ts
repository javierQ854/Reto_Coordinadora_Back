export class Email {
  to: string;
  peso: number;
  dimension: string;
  tipoProducto: string;
  direccionDestino: string;
  ciudad: string;
  estado: string;

  constructor(data: any) {
    this.to = data.to;
    this.peso = data.peso;
    this.dimension = data.dimension;
    this.tipoProducto = data.tipoProducto;
    this.direccionDestino = data.direccionDestino;
    this.ciudad = data.ciudad;
    this.estado = data.estado;
  }
}

  