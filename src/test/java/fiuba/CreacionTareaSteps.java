package fiuba;

import cucumber.api.java.es.Cuando;
import cucumber.api.java.es.Dado;
import cucumber.api.java.es.Entonces;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;

/**
 * Created by nicopaez on 5/16/17.
 */
public class CreacionTareaSteps {

    private Lider lider;
    private Desarrollador desarrollador, desarrolladorQueAsignaTarea;;
    private Tarea nuevaTarea;
    private Proyecto proyecto_guarani;
    private boolean resultadoExitoso;
    private final String ID = "22J";

    Tarea tareaProyecto;

    @Dado("^que soy el usuario \"(.*?)\" y puedo crear tareas$")
    public void que_soy_el_usuario_y_puedo_crear_tareas(String nombre) throws Throwable {
        lider = new Lider(nombre);
    }

    @Cuando("^cuando creo la tarea \"(.*?)\" , \"(.*?)\" y \"(.*?)\"$")
    public void cuando_creo_la_tarea(String nombre, String ID, String nombreCreador) throws Throwable {
        nuevaTarea = new Tarea(nombre, ID, nombreCreador);
    }

    @Entonces("^se crea la tarea con nombre \"(.*?)\"$")
    public void se_crea_la_tarea_con_nombre(String nombreTarea) throws Throwable {
        assertEquals(nombreTarea, nuevaTarea.getNombre());
    }

    @Dado("^que soy Juan Ramirez y soy lider puedo asignar una tarea al usuario \"(.*?)\"$")
    public void que_soy_Juan_Ramirez_y_soy_lider_puedo_asignar_una_tarea_al_usuario(String nombreResponsable) throws Throwable {

        desarrollador = new Desarrollador(nombreResponsable);
    }

    @Cuando("^cuando asigno la tarea \"(.*?)\" a \"(.*?)\"$")
    public void cuando_asigno_la_tarea_a(String nombreTarea, String nombreUsuario) throws Throwable {

        desarrollador = new Desarrollador(nombreUsuario);
        nuevaTarea = new Tarea(nombreTarea, "23B", lider.getNombre());
        lider.asignar(nuevaTarea,desarrollador);
    }

    @Entonces("^Christian Sanchez tiene la tarea \"(.*?)\" asignada$")
    public void Christian_Sanchez_tiene_la_tarea_asignada(String tarea) throws Throwable {

        String tareaAsignada = desarrollador.getTareas().get(0).getNombre();
        assertEquals(tarea,tareaAsignada);
    }

    @Dado("^que creo el proyecto \"(.*?)\" y creo la tarea \"(.*?)\"$")
    public void que_creo_el_proyecto_y_creo_la_tarea(String nomProyecto, String nomTarea) throws Throwable {

        proyecto_guarani = new Proyecto(nomProyecto);
        nuevaTarea = new Tarea(nomTarea, "24B", "Paula Perez");
    }

    @Cuando("^cuando asigno la tarea al proyecto$")
    public void cuando_asigno_la_tarea_al_proyecto() throws Throwable {

        proyecto_guarani.agregarTarea(nuevaTarea);

    }

    @Entonces("^la tarea \"(.*?)\" debe ser una tarea del proyecto Guarani$")
    public void la_tarea_debe_ser_una_tarea_del_proyecto_Guarani(String tarea) throws Throwable {
        assertEquals(proyecto_guarani.getTareas().get(0).getNombre(),tarea);
    }

    @Dado("^que soy el usuario \"(.*?)\"$")
    public void que_soy_el_usuario(String nombre) throws Throwable {
        desarrolladorQueAsignaTarea = new Desarrollador(nombre);
    }

    @Cuando("^cuando asigno la tarea \"(.*?)\" a \"(.*?)\" siendo desarrollador$")
    public void cuando_asigno_la_tarea_a_siendo_desarrollador(String nombreTarea, String nombreUsuario) throws Throwable {

        desarrollador = new Desarrollador(nombreUsuario);
        nuevaTarea = new Tarea(nombreTarea, "23B", desarrollador.getNombre());
        try {
            desarrolladorQueAsignaTarea.asignar(nuevaTarea,desarrollador);
        } catch (OperacionInvalidaException exception) {
            resultadoExitoso = false;
        }
    }

    @Entonces("^Christian Sanchez no tiene la tarea \"(.*?)\" ya que \"(.*?)\" no esta autorizado$")
    public void christian_Sanchez_no_tiene_la_tarea_ya_que_no_esta_autorizado(String tarea1, String desarrollador) throws Throwable {
        assertFalse(resultadoExitoso);
        assertTrue(this.desarrollador.getTareas().isEmpty());
    }

}
