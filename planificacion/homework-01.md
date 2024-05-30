##                                                    Veterinaria
#                                                      Objetivo
- Desarrollar una aplicación que permita a los usuarios gestionar sus turnos para asistir a una veterinaria. Los usuarios podrán agendar sus turnos en una fecha y hora determinadas a través del FrontEnd de la aplicación enviados por body al Back.
#                                                   Requisitos y Pautas
#                                                Autenticación de Usuarios
•	Solo los usuarios autenticados pueden reservar turnos.
•	No se permitirá la reserva de turnos a usuarios anónimos o invitados.
#                                                  Horario de Atención
•	Los turnos solo podrán ser agendados dentro del horario de atención del establecimiento.
•	Los fines de semana se consideran días no laborables.
•	Horario de atención: Lunes a Viernes, de 8:00 a 18:00.
#                                                 Capacidad de Atención
•	El establecimiento contará con capacidad infinita para atender a múltiples usuarios a la misma hora.
•	No hay límite en la cantidad de usuarios que pueden agendar un turno a una hora específica.
#                                                 Cancelación de Turnos
•	Los usuarios pueden cancelar sus turnos hasta el día anterior a la fecha reservada.
•	No se implementará la función de reprogramar turnos.
#                                                    Flujo de Usuario
#                                                 Registro y Autenticación
•	El usuario debe registrarse en la aplicación proporcionando sus datos básicos.
•	El usuario debe autenticarse para acceder a la función de agendamiento de turnos.
#                                                  Agendamiento de Turnos
•	El usuario autenticado puede seleccionar una fecha y hora dentro del horario de atención.
•	La aplicación verifica que la fecha y hora seleccionadas sean válidas y dentro del horario laboral.
•	El usuario confirma la reserva del turno.
#                                                    Cancelación de Turnos
•	El usuario puede ver sus turnos reservados.
•	El usuario puede cancelar un turno hasta el día anterior a la fecha reservada.
##                                                 Funcionalidades Extra
#                                                  Confirmación por Email
•	Enviar un email de confirmación al usuario luego de reservar un turno.
•	Enviar un email de notificación al usuario cuando cancele un turno.
#                                                     Foto de Perfil
•	Permitir al usuario subir una foto de perfil a su cuenta.
•	Soportar archivos de imagen en formatos .jpg, .png, etc.
##                                               Tecnologías y Herramientas
-	FrontEnd: React.js, HTML5, CSS3
-	BackEnd: Node.js, Express.js, TypeScript, JavaScript
-	Base de Datos: SQL (TypeORM)

___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

<!-- 1. Registro y Autenticación de Usuario --> 1. Registro y Autenticación de Usuario
-	Como usuario
-	Quiero registrarme en la aplicación proporcionando mis datos básicos (nombre, correo electrónico, contraseña)
-	Para poder autenticarme y acceder a las funciones de agendamiento de turnos.
<!-- 2. Iniciar Sesión --> 2. Iniciar Sesión
-	Como usuario registrado
-	Quiero iniciar sesión con mi correo electrónico y contraseña
-	Para acceder a mi cuenta y gestionar mis turnos.
<!-- 3. Recuperación de Contraseña --> 3. Recuperación de Contraseña (extra)
-	Como usuario registrado
-	Quiero recuperar mi contraseña en caso de haberla olvidado
-	Para poder acceder nuevamente a mi cuenta.
<!-- 4. Agendar un Turno --> 4. Agendar un Turno
-	Como usuario autenticado
-	Quiero seleccionar una fecha y hora dentro del horario de atención (8 a 18)
-   Debo de poder solo agendar 1 solo turno por dia
-	Para agendar un turno en la veterinaria.
<!-- 5. Cancelar un Turno --> 5. Cancelar un Turno
-	Como usuario autenticado
-	Quiero cancelar un turno previamente agendado
-	Para liberar ese espacio y no afectar la planificación de la veterinaria.
<!-- 6. Recibir Confirmación por Email --> 6. Recibir Confirmación por Email (extra) 
-	Como usuario
-	Quiero recibir un email de confirmación al reservar o cancelar un turno
-	Para tener una notificación y registro de mis acciones.
<!-- 7. Subir Foto de Perfil --> 7. Subir Foto de Perfil (extra)
-	Como usuario autenticado
-	Quiero subir una foto de perfil a mi cuenta
-	Para personalizar mi perfil en la aplicación.
<!-- 8. Ver Mis Turnos --> 8. Ver Mis Turnos
-	Como usuario autenticado
-	Quiero ver una lista de mis turnos agendados
-	Para tener un registro de mis próximas citas en la veterinaria.
<!-- 9. Cerrar Sesión --> 9. Cerrar Sesión (extra) 
-	Como usuario autenticado
-	Quiero poder cerrar mi cuenta para iniciar secion o volverme a registrar

___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

## Esquema Inicial de la Base de Datos
# Entidades y Relaciones
1.	# Usuario
-	ID (clave primaria, number, incrementacion automatica)
-	Nombre (String)
-	Correo Electrónico (String)
-	Foto de Perfil (String, URL) // Extra
2.	# Credenciales
-	ID (clave primaria, number, incrementacion automatica)
-	UsuarioID (Clave Foranea, Number)
-   Contraseña (String)
3.	# Turno
-	ID (clave primaria, number, incrementacion automatica)
-	UsuarioID (Clave Foranea, Number)
-	Fecha (Date)
-	Hora (Time)
-	Estado (String) // Ejemplo: "Reservado", "Cancelado"
4.	# EmailConfirmacion // Extra
-	ID (Clave primaria, number, incrementacion automatica)
-	UsuarioID (Clave foranea, number)
-	Tipo (String) // Ejemplo: "Reserva", "Cancelación"
-	FechaEnvio (DateTime)
<!-- Relaciones --> Relaciones <!-- Relaciones -->
-   Un Usuario puede tener múltiples Turnos (Relación 1 a Muchos).
-	Un Turno pertenece a un Usuario (Relación Muchos a 1).
-	Un Usuario debe tener una Credencial (Relación 1 a 1).
-	Una Credencial pertenece a un Usuario (Relación 1 a 1).
-	Un Usuario puede tener múltiples EmailConfirmacion (Relación 1 a Muchos). //Extra
-	Un EmailConfirmacion pertenece a un Usuario (Relación Muchos a 1). // Extra

___________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

##                                             UX/UI
- Tematica de nuestra App: Colores / Estilos generales
- Home sobre informacion sobre la app
- NavBar visualizado en todas las vistas
- Redireccion automatica al home luego del Register/Login
- Mostrar en el apartado mis turnos todos los turnos
- Poder filtrar en el apartado de los turnos por turnos activos/cancelados
- formulario:
    - Que se muesten los campos a llenar
    - Que especifique que campo falta completar si se quiere enviar con datos faltantes
    - Solo permitir datos especificos (por ejemplo solo permitir color Date en el apartado de fechas)
    - Crear un boton de limpiar
- Pagina responsive // Extra
- Dark Mode // Extra