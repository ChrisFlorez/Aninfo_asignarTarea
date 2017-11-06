$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("tarea.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: es"
    }
  ],
  "line": 2,
  "name": "Creacion y asignacion de tarea",
  "description": "",
  "id": "creacion-y-asignacion-de-tarea",
  "keyword": "Característica"
});
formatter.scenario({
  "line": 4,
  "name": "Un lider de equipo crea una tarea",
  "description": "",
  "id": "creacion-y-asignacion-de-tarea;un-lider-de-equipo-crea-una-tarea",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 5,
  "name": "que soy el usuario \"Paula Perez\" y puedo crear tareas",
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "cuando creo la tarea \"inscripcion\" , \"ID\" y \"Paula Perez\"",
  "keyword": "Cuando "
});
formatter.step({
  "line": 7,
  "name": "se crea la tarea con nombre \"inscripcion\"",
  "keyword": "Entonces "
});
formatter.match({
  "arguments": [
    {
      "val": "Paula Perez",
      "offset": 20
    }
  ],
  "location": "CreacionTareaSteps.que_soy_el_usuario_y_puedo_crear_tareas(String)"
});
formatter.result({
  "duration": 102252752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inscripcion",
      "offset": 22
    },
    {
      "val": "ID",
      "offset": 38
    },
    {
      "val": "Paula Perez",
      "offset": 45
    }
  ],
  "location": "CreacionTareaSteps.cuando_creo_la_tarea(String,String,String)"
});
formatter.result({
  "duration": 214090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inscripcion",
      "offset": 29
    }
  ],
  "location": "CreacionTareaSteps.se_crea_la_tarea_con_nombre(String)"
});
formatter.result({
  "duration": 1838332,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Un analista funcional del equipo crea una tarea",
  "description": "",
  "id": "creacion-y-asignacion-de-tarea;un-analista-funcional-del-equipo-crea-una-tarea",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 10,
  "name": "que soy el usuario \"Josefina Martinez\" y puedo crear tareas",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "cuando creo la tarea \"crear nuevo curso\" , \"ID\" y \"Josefina Martinez\"",
  "keyword": "Cuando "
});
formatter.step({
  "line": 12,
  "name": "se crea la tarea con nombre \"crear nuevo curso\"",
  "keyword": "Entonces "
});
formatter.match({
  "arguments": [
    {
      "val": "Josefina Martinez",
      "offset": 20
    }
  ],
  "location": "CreacionTareaSteps.que_soy_el_usuario_y_puedo_crear_tareas(String)"
});
formatter.result({
  "duration": 426579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "crear nuevo curso",
      "offset": 22
    },
    {
      "val": "ID",
      "offset": 44
    },
    {
      "val": "Josefina Martinez",
      "offset": 51
    }
  ],
  "location": "CreacionTareaSteps.cuando_creo_la_tarea(String,String,String)"
});
formatter.result({
  "duration": 169085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "crear nuevo curso",
      "offset": 29
    }
  ],
  "location": "CreacionTareaSteps.se_crea_la_tarea_con_nombre(String)"
});
formatter.result({
  "duration": 108117,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Un lider de equipo asigna una tarea a un desarrollador",
  "description": "",
  "id": "creacion-y-asignacion-de-tarea;un-lider-de-equipo-asigna-una-tarea-a-un-desarrollador",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 15,
  "name": "que soy el usuario \"Paula Perez\" y puedo crear tareas",
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "cuando asigno la tarea \"inscripcion\" a \"Christian Sanchez\"",
  "keyword": "Cuando "
});
formatter.step({
  "line": 17,
  "name": "Christian Sanchez tiene la tarea \"inscripcion\" asignada",
  "keyword": "Entonces "
});
formatter.match({
  "arguments": [
    {
      "val": "Paula Perez",
      "offset": 20
    }
  ],
  "location": "CreacionTareaSteps.que_soy_el_usuario_y_puedo_crear_tareas(String)"
});
formatter.result({
  "duration": 124245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inscripcion",
      "offset": 24
    },
    {
      "val": "Christian Sanchez",
      "offset": 40
    }
  ],
  "location": "CreacionTareaSteps.cuando_asigno_la_tarea_a(String,String)"
});
formatter.result({
  "duration": 408168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "inscripcion",
      "offset": 34
    }
  ],
  "location": "CreacionTareaSteps.Christian_Sanchez_tiene_la_tarea_asignada(String)"
});
formatter.result({
  "duration": 116757,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Un analista funcional asigna una tarea a un desarrollador",
  "description": "",
  "id": "creacion-y-asignacion-de-tarea;un-analista-funcional-asigna-una-tarea-a-un-desarrollador",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 20,
  "name": "que soy el usuario \"Josefina Martinez\" y puedo crear tareas",
  "keyword": "Dado "
});
formatter.step({
  "line": 21,
  "name": "cuando asigno la tarea \"crear nuevo curso\" a \"Juan Ramirez\"",
  "keyword": "Cuando "
});
formatter.step({
  "line": 22,
  "name": "Christian Sanchez tiene la tarea \"crear nuevo curso\" asignada",
  "keyword": "Entonces "
});
formatter.match({
  "arguments": [
    {
      "val": "Josefina Martinez",
      "offset": 20
    }
  ],
  "location": "CreacionTareaSteps.que_soy_el_usuario_y_puedo_crear_tareas(String)"
});
formatter.result({
  "duration": 132030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "crear nuevo curso",
      "offset": 24
    },
    {
      "val": "Juan Ramirez",
      "offset": 46
    }
  ],
  "location": "CreacionTareaSteps.cuando_asigno_la_tarea_a(String,String)"
});
formatter.result({
  "duration": 131282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "crear nuevo curso",
      "offset": 34
    }
  ],
  "location": "CreacionTareaSteps.Christian_Sanchez_tiene_la_tarea_asignada(String)"
});
formatter.result({
  "duration": 63635,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Se crea una tarea para un proyecto",
  "description": "",
  "id": "creacion-y-asignacion-de-tarea;se-crea-una-tarea-para-un-proyecto",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 25,
  "name": "que creo el proyecto \"Guarani\" y creo la tarea \"ofertaAcademica\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 26,
  "name": "cuando asigno la tarea al proyecto",
  "keyword": "Cuando "
});
formatter.step({
  "line": 27,
  "name": "la tarea \"ofertaAcademica\" debe ser una tarea del proyecto Guarani",
  "keyword": "Entonces "
});
formatter.match({
  "arguments": [
    {
      "val": "Guarani",
      "offset": 22
    },
    {
      "val": "ofertaAcademica",
      "offset": 48
    }
  ],
  "location": "CreacionTareaSteps.que_creo_el_proyecto_y_creo_la_tarea(String,String)"
});
formatter.result({
  "duration": 213502,
  "status": "passed"
});
formatter.match({
  "location": "CreacionTareaSteps.cuando_asigno_la_tarea_al_proyecto()"
});
formatter.result({
  "duration": 96886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ofertaAcademica",
      "offset": 10
    }
  ],
  "location": "CreacionTareaSteps.la_tarea_debe_ser_una_tarea_del_proyecto_Guarani(String)"
});
formatter.result({
  "duration": 118983,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Un desarrollador asigna una tarea a otro desarrollador",
  "description": "",
  "id": "creacion-y-asignacion-de-tarea;un-desarrollador-asigna-una-tarea-a-otro-desarrollador",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 30,
  "name": "que soy el usuario \"Juan Ramirez\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 31,
  "name": "cuando asigno la tarea \"crear nuevo curso\" a \"Christian Sanchez\" siendo desarrollador",
  "keyword": "Cuando "
});
formatter.step({
  "line": 32,
  "name": "Christian Sanchez no tiene la tarea \"crear nuevo curso\" ya que \"Juan Ramirez\" no esta autorizado",
  "keyword": "Entonces "
});
formatter.match({
  "arguments": [
    {
      "val": "Juan Ramirez",
      "offset": 20
    }
  ],
  "location": "CreacionTareaSteps.que_soy_el_usuario(String)"
});
formatter.result({
  "duration": 143319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "crear nuevo curso",
      "offset": 24
    },
    {
      "val": "Christian Sanchez",
      "offset": 46
    }
  ],
  "location": "CreacionTareaSteps.cuando_asigno_la_tarea_a_siendo_desarrollador(String,String)"
});
formatter.result({
  "duration": 255900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "crear nuevo curso",
      "offset": 37
    },
    {
      "val": "Juan Ramirez",
      "offset": 64
    }
  ],
  "location": "CreacionTareaSteps.christian_Sanchez_no_tiene_la_tarea_ya_que_no_esta_autorizado(String,String)"
});
formatter.result({
  "duration": 159358,
  "status": "passed"
});
});