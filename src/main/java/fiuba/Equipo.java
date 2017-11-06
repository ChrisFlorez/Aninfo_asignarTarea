package fiuba;

import java.util.ArrayList;
import java.util.List;

public class Equipo {

    private List<Usuario> miembros;
    private List<Proyecto> proyectos;

    public Equipo() {

        miembros = new ArrayList<Usuario>();
        proyectos = new ArrayList<Proyecto>();
    }

    public void agregarMiembro(Usuario miembro) {
        miembros.add(miembro);
    }

    public void agregarProyecto(Proyecto proyectoNuevo) {
        proyectos.add(proyectoNuevo);

    }
}
