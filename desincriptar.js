const key = 'hola'; // clave para cifrado XOR
const mensajeCifradoHex = '0000000048080d1507'; // mensaje cifrado en hexadecimal

// Convertir el mensaje cifrado de hexadecimal a un arreglo de bytes (Buffer)
const mensajeCifrado = Buffer.from(mensajeCifradoHex, 'hex');

// Aplicar el cifrado XOR
const mensajeDesencriptado = mensajeCifrado.map((byte, index) => byte ^ key.charCodeAt(index % key.length));

// Convertir el mensaje desencriptado de un arreglo de bytes (Buffer) a una cadena de texto
const mensajeDesencriptadoTexto = mensajeDesencriptado.toString('utf-8');

console.log(mensajeDesencriptadoTexto); 