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
    private Desarrollador desarrollador;
    private Tarea nuevaTarea;
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



}
