package com.techlab.Service;

import java.util.List;

import org.apache.el.stream.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.techlab.models.*;
import com.techlab.repository.ProductoRepository;

@Service
public class ProductoService {
 private final ProductoRepository repo;
 @Autowired
 public ProductoService(ProductoRepository repo) {
 this.repo = repo;
 }
 public List<Producto> listarTodos() {
 return repo.findAll();
 }
 public Producto obtenerPorId(int id) {
 return repo.findById(id).orElse(null);
 }
 public Producto guardar(Producto p) {
 return repo.save(p);
 }

 public Producto actualizar(int id, Producto datos) {
 Producto p = obtenerPorId(id);
 if (p != null) {
 p.setNombre(datos.getNombre());
 p.setCategoria(datos.getCategoria());
 p.setPrecio(datos.getPrecio());
 p.setCantidadEnStock(datos.getCantidadEnStock());
 return repo.save(p);
 }
 return null;
 }
 public boolean eliminar(int id) {
 if (repo.existsById(id)) {
 repo.deleteById(id);
 return true;
 }
 return false;
 }

 public List<Producto> buscarPorNombreExacto(String nombre){
    return repo.findByNombre(nombre);
 }

 public Producto descontarStock(Integer id, Integer stockADescontar){
   if(repo.findById(id).isPresent()){
      Producto p = obtenerPorId(id);
      p.setCantidadEnStock(p.getCantidadEnStock()-stockADescontar);
      return repo.save(p);
   } else {
      return null;
   }
 }
}
