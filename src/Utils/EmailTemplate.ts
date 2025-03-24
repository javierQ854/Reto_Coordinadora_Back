export const generarPlantillaCorreo = (datos: {
  peso: number;
  dimension: string;
  tipoProducto: string;
  direccionDestino: string;
  ciudad: string;
  estado: string;
}): string => {
  return `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; border: 1px solid #ddd; border-radius: 10px;">
      <h2 style="color: #0056b3;">📦 Confirmación de Envío</h2>
      <p>Hola,</p>
      <p>Tu envío ha sido registrado con éxito. Aquí están los detalles:</p>
      <ul>
        <li><strong>Peso:</strong> ${datos.peso} kg</li>
        <li><strong>Dimensiones:</strong> ${datos.dimension}</li>
        <li><strong>Tipo de Producto:</strong> ${datos.tipoProducto}</li>
        <li><strong>Destino:</strong> ${datos.direccionDestino}, ${datos.ciudad} - ${datos.estado}</li>
      </ul>
      <p>Gracias por confiar en nosotros.</p>
      <p style="margin-top: 20px; font-size: 14px; color: #666;">Este es un mensaje automático, por favor no respondas.</p>
    </div>
  `;
};
