package modelo;

public class Tarea {

    private String nombre;
    private String ID;
    private String descripcion;
    private String creador;
    private String responsable;

    public Tarea (String nombre, String ID, String creador) {

       this.nombre = nombre;
       this.ID = ID;
       this.creador = creador;
    }

    public void agregarDescripcion(String descripcion) {

        this.descripcion = descripcion;
    }

    public void setResponsable(String responsable) {

        this.responsable = responsable;
    }


    public String getResponsable() {

        return this.responsable;
    }

    public String getID() {

        return this.ID;
    }

    public String getNombre(){

        return this.nombre;
    }
}
