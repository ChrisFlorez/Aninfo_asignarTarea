package modelo;

public class AnalistaFuncional extends Usuario implements Asignable {

    public AnalistaFuncional(String nombre) {
        super(nombre);
    }

    @Override
    public void asignar(Tarea unaTarea, Usuario nuevoUsuario) {
        unaTarea.setResponsable(nuevoUsuario.getNombre());
        nuevoUsuario.agregarTarea(unaTarea);
    }
}
