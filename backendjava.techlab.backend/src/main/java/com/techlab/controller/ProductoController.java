package com.techlab.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techlab.Service.ProductoService;
import com.techlab.models.Producto;

@RestController
@RequestMapping("/productos")
// @CrossOrigin(origins = "http://127.0.0.1:6692")
@CrossOrigin(origins = "*")
public class ProductoController {

    private final ProductoService productoService;

    @Autowired
    public ProductoController(ProductoService productoService) {
        this.productoService = productoService;
    }
    
    @GetMapping    
    public List<Producto> listarProductos() {
        return productoService.listarTodos();
    }

    @GetMapping("/{id}")    
    public Producto obtenerProducto(@PathVariable int id) {
    return productoService.obtenerPorId(id);
    }

    @GetMapping(value="/nombre/{nombre}")    
    public List<Producto> buscarProductoPorNombreExacto(@PathVariable String nombre) {
    return productoService.buscarPorNombreExacto(nombre);
    }

    @PostMapping    
    public Producto crearProducto(@RequestBody Producto nuevo) {
        return productoService.guardar(nuevo);
    }

    @PutMapping("/{id}")    
    public Producto actualizarProducto(@PathVariable int id,
    @RequestBody Producto datos) {
        return productoService.actualizar(id, datos);
    }

    @DeleteMapping("/{id}")
        public void eliminarProducto(@PathVariable int id) {
        productoService.eliminar(id);
    }

    



}
