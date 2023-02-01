# Unicomer-server
Server enfocado al backend del proyecto Unicomer.
Lista de endpoints (el servidor correr en el puerto 3000): 

POST user/login: la peticion nos devolvera todos lo datos de un usuario, para eso en el body debermos enviarle un json con los campos dni y clave si estos dos coinciden con una clave y usuario guardados en la base de datos se devolvera un json parecido al siguiente :
![image](https://user-images.githubusercontent.com/80925718/216147409-b6ce0ac7-1ff2-4885-ac76-63c759f54c05.png)
en caso contrario la respuesta a ala peticion nos indicaria que el usuario y/o la clave son incorrectos.

POST user/register: la peticion creara un usuario y lo guardara en la base de datos, para eso en el body deberemos enviarle los siguietes datos: 

![image](https://user-images.githubusercontent.com/80925718/216147828-e8e373bb-2440-4534-ba99-afb2bab90c8c.png)

los puntos no deben ser enviados porque se al ser un usuario nuevo se guardaran setearan automaticamente en 500.

------------------------------------------------------------------
POST /tarjetas/crear : la peticion creara una tajeta de debito o credito y la guardara en la base de datos la peticion debe obtener los siguientes campos mediante el body de la misma:

![image](https://user-images.githubusercontent.com/80925718/216145000-6f1a0381-6652-405a-aae9-203f306e7c6e.png)

como podemos ver el campo nombre de usuario no es necesario ya que para cargar una tarjeta primero debemos tener un usuario ya existente, el cual cargara la tarjeta, entonces obtendremos el nombre del usuario con el dni del mismo.
la peticion en caso de ser correcta nos devolver un json con dos campos, el "status" en uno y el "msg" de que la tarjeta fue guardad correctamente
Get /tarjetas/user/:userid: La peticion nos traera en un json todos las tajetas asigandas a un usuario de la aplicacion previamente cargado, ledebemos enviar dentro de la peticion un userid como parametro. 
En caso de que la peticion sea correcta nos devolvera un json parecido a este:7

![image](https://user-images.githubusercontent.com/80925718/216146467-e48f1c0e-5ba0-4da7-810d-03a6cb1b1d65.png)

 donde el campo tarjetas sera un array de las tarjetas al nombre del usuaruio especificado en la peticion 
 
 ------------------------------------------------------------------------
 POST /menu/opcion 
  esta peticion permite cargar una opcion a un menu, el cual debe ser indicado en el parametro idmenu, en caso de no ser indicado se creara un nuevo menu y se le agregara esta opcion. La peticion espera el siguiente json en el body : 
  
![image](https://user-images.githubusercontent.com/80925718/216151685-80b46ac9-985a-47dd-be87-080420d47e03.png)

donde url hace referencia a la url a la que llevara la opcion y icon el nombre del icono de fontawesome que deseamos usar en nuestra opcion 
 GET /menu/completo
 Nos devolvera un menu, podemos indicar cual mediante el parametro idmenu pero en caso de no aclarar que menu deseaos traer la peticion nos devolvera el primer menu ya que esta pensado para en una primera instancia no tener mas de un menu por base de datos (si no hay ningun menu en la base de datos esta peticion nos indicara que debemos crear uno)
 
----------------------------------------------------------------
POST /transaccion/crear 
Esta peticion realizar una transaccion de x monto entr tarjetas, para eso espera el siguiente body: 

![image](https://user-images.githubusercontent.com/80925718/216152360-1a1420ff-4c19-4449-a4f2-d916ef034706.png)

donde from hace referencia al id de la terjeta que enviara el dinero y to el id de la tarjeta que lo recibira, y monto el monto a enviar entre ambas.
en caso de no existir alguna de las tarjetas la peticion nos lo hara saber. 
GET /transaccion/user/ultimasemana/:userid
Peticion que nos devolvera todas las transacciones de la ultima semana de un usario ya sean recibidas o enviadas esta peticion solo espera el paremtro "b" en el cual debe ser aclarado un id de un usuario ya cargado. En caso de que la peticion sea correcta recibiarimos un json parecido al siguiente : 

![image](https://user-images.githubusercontent.com/80925718/216153206-43063b2f-b392-47b9-9262-ac3190579590.png)
