package fiuba;

public class Desarrollador extends Usuario implements Asignable {


    public Desarrollador(String nombre) {
        super(nombre);
    }

    @Override
    public void asignar(Tarea unaTarea, Usuario nuevoUsuario)  {
        throw new OperacionInvalidaException();
    }
}
