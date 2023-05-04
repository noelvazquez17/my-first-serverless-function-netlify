exports.handler = async (event) => {
  const data = JSON.parse(event.body);

  const key = data.clave; // clave para cifrado XOR
  const mensaje = data.mensaje; // obtener el mensaje enviado desde el formulario

  // Convertir el mensaje a un arreglo de bytes (Buffer)
  const mensajeBuffer = Buffer.from(mensaje, 'utf-8');

  // Aplicar el cifrado XOR
  const mensajeCifrado = mensajeBuffer.map((byte, index) => byte ^ key.charCodeAt(index % key.length));

  // Convertir el mensaje cifrado a una cadena en hexadecimal
  const mensajeCifradoHex = mensajeCifrado.toString('hex');

  // Crear la respuesta HTTP con el mensaje cifrado
  const response = {
    statusCode: 200,
    body: mensajeCifradoHex,
    headers: {
      'Content-Type': 'text/plain'
    }
  };
  
  return response;
};