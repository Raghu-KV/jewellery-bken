-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: practice
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `jewellery` varchar(45) NOT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `imageUrl` varchar(255) DEFAULT NULL,
  `category` varchar(45) NOT NULL,
  `price` int NOT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (8,'Gold Ring','lorem ipsum','https://png.pngtree.com/background/20230302/original/pngtree-jewellery-ring-isolated-on-white-picture-image_2074223.jpg','ring',5000,10),(9,'Gold Ring 2','lorem ipsum','https://png.pngtree.com/background/20230302/original/pngtree-jewellery-ring-isolated-on-white-picture-image_2074231.jpg','ring',11000,10),(10,'Silver ring','lorem','https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX2030834.jpg','ring',2500,1),(11,'Gold Bangle','lorem ipsum','https://www.totaram.com/media/catalog/product/cache/1/image/f91ad7b6e3e8f9a86481eaa3c16755c6/m/-/m-gbl025f.jpg','bangle',5000,10),(13,'Gold Necklace 2','lorem ipsum','https://m.media-amazon.com/images/I/71Djyig6DLL._AC_UY1100_.jpg','necklace',10000,10),(14,'Gold Necklace','lorem','https://m.media-amazon.com/images/I/81pZNqgR1aL._AC_UY1100_.jpg','necklace',11000,10),(21,'Gold Ring 3','lorem ipsum','https://media.istockphoto.com/id/1203020545/photo/indian-bridal-ethnic-jewellery-gold.jpg?s=612x612&w=0&k=20&c=mBV4Ij1FaiJkx82UwrMPkkjcOvHzucP5kRG9bwAVhik=','ring',10,9);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-25 17:50:43
