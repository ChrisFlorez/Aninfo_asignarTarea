package fiuba;

import java.util.ArrayList;
import java.util.List;

public class Usuario {
    private String nombre;
    private List<Tarea> tareas;

    public Usuario(String nombre) {
        this.nombre = nombre;
        this.tareas = new ArrayList<Tarea>();
    }

    public String getNombre() {
        return this.nombre;
    }

    public void agregarTarea(Tarea tarea) {
        this.tareas.add(tarea);
    }

    public List<Tarea> getTareas(){
        return this.tareas;
    }
}
