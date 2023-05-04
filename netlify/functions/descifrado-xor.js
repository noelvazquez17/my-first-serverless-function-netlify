exports.handler = async (event) => {
    const data = JSON.parse(event.body);

    const key = data.clave; // clave para cifrado XOR
    const mensajeCifradoHex = data.mensaje;// obtener el mensaje cifrado enviado en el cuerpo de la solicitud
  
    // Convertir el mensaje cifrado de cadena hexadecimal a un arreglo de bytes (Buffer)
    const mensajeCifrado = Buffer.from(mensajeCifradoHex, 'hex');
  
    // Aplicar el descifrado XOR
    const mensajeDescifrado = mensajeCifrado.map((byte, index) => byte ^ key.charCodeAt(index % key.length));
  
    // Convertir el mensaje descifrado a una cadena de texto
    const mensajeDescifradoTexto = mensajeDescifrado.toString('utf-8');
  
    // Crear la respuesta HTTP con el mensaje descifrado
    const response = {
      statusCode: 200,
      body: mensajeDescifradoTexto,
      headers: {
        'Content-Type': 'text/plain'
      }
    };
    
    return response;
  };