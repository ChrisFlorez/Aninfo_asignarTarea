# language: es
Característica: Creacion y asignacion de tarea

  Escenario: Un lider de equipo crea una tarea
    Dado que soy el usuario "Paula Perez" y puedo crear tareas
    Cuando cuando creo la tarea "inscripcion" , "ID" y "Paula Perez"
    Entonces se crea la tarea con nombre "inscripcion"

  Escenario: Un analista funcional del equipo crea una tarea
    Dado que soy el usuario "Josefina Martinez" y puedo crear tareas
    Cuando cuando creo la tarea "crear nuevo curso" , "ID" y "Josefina Martinez"
    Entonces se crea la tarea con nombre "crear nuevo curso"

  Escenario: Un lider de equipo asigna una tarea a un desarrollador
    Dado que soy el usuario "Paula Perez" y puedo crear tareas
    Cuando cuando asigno la tarea "inscripcion" a "Christian Sanchez"
    Entonces Christian Sanchez tiene la tarea "inscripcion" asignada

  Escenario: