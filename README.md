# TalentoTechJavaBackEndProyectoFinal

# Video donde se muestra del funcionamiento
https://www.loom.com/share/2a87be3a6c014bc089bfeac9642ad55d

# Codigo SQL de la base de datos

```sql

-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: techlabdb
-- ------------------------------------------------------
-- Server version	8.0.42

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `cantidad_en_stock` int DEFAULT NULL,
  `path_foto` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (36,'Almacen','Cafe La Virginia 20 saquitos',1500,16,NULL),(37,'Almacen','Te la morenita 20 saquitos',200.5,8,NULL),(38,'Almacen','Te Crysf 20 saquitos',500.5,25,NULL),(39,'almacen','Cafe Nescafe 50 saquitoss',3000,2,NULL),(41,'Almacen','Cafe Dolca 50 saquitos',5000,23,NULL);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-05 11:12:48
```



# Coleccion JSON que coincide con el contenido de la base de datos
```json
[
    {
        "id": 36,
        "nombre": "Cafe La Virginia 20 saquitos",
        "categoria": "Almacen",
        "precio": 1500.0,
        "cantidadEnStock": 16,
        "pathFoto": null
    },
    {
        "id": 37,
        "nombre": "Te la morenita 20 saquitos",
        "categoria": "Almacen",
        "precio": 200.5,
        "cantidadEnStock": 8,
        "pathFoto": null
    },
    {
        "id": 38,
        "nombre": "Te Crysf 20 saquitos",
        "categoria": "Almacen",
        "precio": 500.5,
        "cantidadEnStock": 25,
        "pathFoto": null
    },
    {
        "id": 39,
        "nombre": "Cafe Nescafe 50 saquitoss",
        "categoria": "almacen",
        "precio": 3000.0,
        "cantidadEnStock": 2,
        "pathFoto": null
    },
    {
        "id": 41,
        "nombre": "Cafe Dolca 50 saquitos",
        "categoria": "Almacen",
        "precio": 5000.0,
        "cantidadEnStock": 23,
        "pathFoto": null
    }
]
```