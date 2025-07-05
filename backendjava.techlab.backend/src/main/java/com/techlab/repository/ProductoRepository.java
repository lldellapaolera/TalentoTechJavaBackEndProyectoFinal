package com.techlab.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.techlab.models.*;

@Repository
public interface ProductoRepository extends JpaRepository<Producto,
Integer> {
 // Podés agregar métodos personalizados aquí si son necesarios
    List<Producto> findByNombre(String nombre);
    

}
