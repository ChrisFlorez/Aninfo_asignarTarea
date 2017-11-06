package modelo;

import java.util.ArrayList;
import java.util.List;

public class Proyecto {

    private String nombre;
    private List<Tarea> tareas;

    public Proyecto(String nombre) {

        this.nombre = nombre;
        this.tareas = new ArrayList<Tarea>();
    }

    public void agregarTarea(Tarea tareaNueva) {

        this.tareas.add(tareaNueva);
    }

    public List<Tarea> getTareas() {

        return this.tareas;
    }
}
