package fiuba;

public class Lider extends Usuario implements Asignable {

    public Lider(String nombre) {
        super(nombre);
    }

    @Override
    public void asignar(Tarea unaTarea, Usuario nuevoUsuario) {
        unaTarea.asignarA(nuevoUsuario.getNombre());
        nuevoUsuario.agregarTarea(unaTarea);
    }
}
