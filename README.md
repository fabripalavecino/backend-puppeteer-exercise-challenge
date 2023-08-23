## Descripción del ejercicio:
- Crear una API con un endpoint que nos permita scrappear la información de nuestros comprobantes en Atlas Staging e insertarlos en una tabla de base de datos.  

## Qué tiene que incluir la solución:
* El scrapping tiene que hacerse usando Puppeteer y programado en Node.js.
* La base de datos tiene que ser relacional. 
* Tiene que haber un endpoint al que poder pegarle y que ejecute el scrapeo.
* Si vuelvo a ejecutar el endpoint no tiene que pisar los entries anteriores.
* El scrapeo tiene que incluir estos campos: 
  * Tipo 
  * Fecha 
  * Monto
  * Estado 
    * Se define por el status enable/disable del botón Descargar en la columna Acciones. Si el botón descargar de una row se encuentra disabled, el status será `Pending`, caso contrario el status será `Completed`.     

* Data que no queremos que scrappees:
  * No scrappear acciones / descarga de comprobante
* El repo tiene que tener instrucciones claras para ejecutar el código y tiene que correr.
* Que haya tests para los flujos importantes de la app.

## Organización:
Te dejo acceso a notion para que puedas cargar las tareas que creas necesarias para resolver el ejercicio.   
Agregales una estimación y andá pasándolas a in-progress | completed, a medida que avances.


## Preguntas extras:
- Cómo podrías automatizar esto si tuvieras que ejecutarlo todos los días? Si lo deployaras en algún servicio cloud, qué usarías? Cuanto más detalle mejor :)
- En caso de persistir la data, qué estructura de tablas usarías?


## Queremos ver:
- Cómo pensas y resolvés el problema.   
- Cómo pensas y resolvés edge cases. Ejemplo: Qué pasa si el portal timeoutea? cómo manejas que las rows no tengan id?
- Cómo te llevas con las cosas que no sabes y cómo las resolvés.  
- Cómo te comunicás y trabajás con el resto. 

## Como levantar el server:
1- Instalar dependencias
2- Crear un env file siguiendo .example.env y popularlo
3- Correr npm run dev