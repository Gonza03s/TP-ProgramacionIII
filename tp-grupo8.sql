-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 24-06-2026 a las 11:07:32
-- Versión del servidor: 8.0.46-0ubuntu0.22.04.3
-- Versión de PHP: 8.1.2-1ubuntu2.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tp25_autoservicio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `image` varchar(255) NOT NULL,
  `category` enum('medications','sports supplements') NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `image`, `category`, `price`, `active`) VALUES
(1, 'Vick Vitapirena Forte x5', 'https://farmacityar.vtexassets.com/arquivos/ids/234221-1200-auto?v=638085319854200000&width=1200&height=auto&aspect=true', 'medications', '14000.00', 1),
(2, 'Bucoangin', 'https://farmacityar.vtexassets.com/arquivos/ids/233621-1200-auto?v=638077692840230000&width=1200&height=auto&aspect=true', 'medications', '6855.00', 1),
(3, 'Tavinex plus', 'https://farmacityar.vtexassets.com/arquivos/ids/233655-1200-auto?v=638077692947270000&width=1200&height=auto&aspect=true', 'medications', '6050.00', 1),
(4, 'Next', 'https://farmacityar.vtexassets.com/arquivos/ids/297440-1200-auto?v=639214634171530000&width=1200&height=auto&aspect=true', 'medications', '10134.00', 1),
(5, 'Acemuk', 'https://farmacityar.vtexassets.com/arquivos/ids/267084-1200-auto?v=638803179925270000&width=1200&height=auto&aspect=true', 'medications', '14143.00', 1),
(6, 'Expectosan', 'https://farmacityar.vtexassets.com/arquivos/ids/234289-1200-auto?v=638085320209470000&width=1200&height=auto&aspect=true', 'medications', '21500.00', 1),
(7, 'Buenas Noches', 'https://farmacityar.vtexassets.com/arquivos/ids/263144-1200-auto?v=638699773427070000&width=1200&height=auto&aspect=true', 'medications', '13860.00', 1),
(8, 'Actron 400', 'https://farmacityar.vtexassets.com/arquivos/ids/293493-1200-auto?v=639161982082470000&width=1200&height=auto&aspect=true', 'medications', '4965.00', 1),
(9, 'Geniol Plus', 'https://farmacityar.vtexassets.com/arquivos/ids/294845-1200-auto?v=639201079921830000&width=1200&height=auto&aspect=true', 'medications', '3453.00', 1),
(10, 'Tafirol 500mg', 'https://farmacityar.vtexassets.com/arquivos/ids/297459-1200-auto?v=639214705064970000&width=1200&height=auto&aspect=true', 'medications', '10500.00', 1),
(11, 'ibupirac Fem', 'https://farmacityar.vtexassets.com/arquivos/ids/233638-1200-auto?v=638077692892570000&width=1200&height=auto&aspect=true', 'medications', '7023.00', 1),
(12, 'Ena Creatina', 'https://farmacityar.vtexassets.com/arquivos/ids/286943-1200-auto?v=639027063770130000&width=1200&height=auto&aspect=true', 'sports supplements', '40000.00', 1),
(13, 'Ena Muscle Max Post Work x 90 Tabletas', 'https://farmacityar.vtexassets.com/arquivos/ids/232255-1200-auto?v=638048898294630000&width=1200&height=auto&aspect=true', 'sports supplements', '16800.00', 1),
(14, 'Electrolitos', 'https://farmacityar.vtexassets.com/arquivos/ids/299262-1200-auto?v=639239691661100000&width=1200&height=auto&aspect=true', 'sports supplements', '29750.00', 1),
(15, 'Ena Whey Protein', 'https://farmacityar.vtexassets.com/arquivos/ids/243162-1200-auto?v=638211443455570000&width=1200&height=auto&aspect=true', 'sports supplements', '96000.00', 1),
(16, 'Creatina Ultra Tech', 'https://farmacityar.vtexassets.com/arquivos/ids/223828-1200-auto?v=637901359050170000&width=1200&height=auto&aspect=true', 'sports supplements', '58200.00', 1),
(17, 'Barra Proteica Pure Welness', 'https://farmacityar.vtexassets.com/arquivos/ids/249564-1200-auto?v=638362761673130000&width=1200&height=auto&aspect=true', 'sports supplements', '2790.00', 1),
(18, 'Total Magnesiano x30', 'https://farmacityar.vtexassets.com/arquivos/ids/281448-1200-auto?v=638930443356170000&width=1200&height=auto&aspect=true', 'sports supplements', '20773.00', 1),
(19, 'Combo ENA Creatina + Proteína de Vainilla + Shaker', 'https://farmacityar.vtexassets.com/arquivos/ids/290632-1200-auto?v=639116996150530000&width=1200&height=auto&aspect=true', 'sports supplements', '166700.00', 1),
(20, 'upradyn Multivitamínico', 'https://farmacityar.vtexassets.com/arquivos/ids/271190-1200-auto?v=638833610671670000&width=1200&height=auto&aspect=true', 'sports supplements', '27515.00', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_sales`
--

CREATE TABLE `product_sales` (
  `product_id` int NOT NULL,
  `sale_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Nota: Se vaciaron los registros de ventas de productos anteriores porque apuntaban 
-- a IDs de productos (comidas y bebidas) que ya no existen, evitando errores de foreign key.

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

CREATE TABLE `sales` (
  `id` int NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `total_price` decimal(10,2) NOT NULL,
  `user_name` varchar(240) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `sales`
--

INSERT INTO `sales` (`id`, `date`, `total_price`, `user_name`) VALUES
(1, '2025-12-03 15:46:37', '3700.00', 'Fran'),
(2, '2025-12-17 18:03:55', '10900.00', 'xabi'),
(3, '2026-06-10 14:03:32', '25800.00', 'Lautaro'),
(4, '2026-06-11 12:04:51', '700.00', 'Gonzalo'),
(5, '2026-06-11 12:18:37', '1950.00', 'Kevin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(1, 'Johnny', 'johnny@melavo.com', 'melavo'),
(2, 'Johnny Knoxville', 'johnny@knoxville.com', 'knoxville'),
(3, 'Bam Margera', 'bam@margera.com', 'margera'),
(4, 'coso', 'coso@coso.com', 'coso'),
(5, 'Jose Maria', 'jose@maria.com', 'jose'),
(6, 'Pepe Argento', 'pepe@argento.com.ar', 'pepe'),
(7, 'test', 'test@test.com', 'test'),
(8, 'Rusa', 'rusa@rusa.com', '123'),
(9, 'elbarto', 'el@barto.com', 'elbarto'),
(10, 'uno', 'uno@uno.com', '$2b$10$ScA2GLrUcopmXa3OLxTqGemQ/DuYpS1fDomc1LRgArJCLaF22Okx6'),
(11, 'pedro', 'pe@dro.com', '$2b$10$Zma8h06soNQZbr1tjx0FtueQ.G/H5iu6IwqrhtaiwIuOYa80pLl6q'),
(12, 'Bob Patino', 'bob@patino.com', 'bob'),
(13, 'merlin', 'mer@lin.com', 'merlin'),
(14, 'thiago', 'thi@ago.com', '$2b$10$wemYF.qxnldHTJnMdxNcQeUBqZHz.FhqUBEmmCCcp/ODZTjq7E3yi');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product_sales`
--
ALTER TABLE `product_sales`
  ADD KEY `product_id` (`product_id`,`sale_id`),
  ADD KEY `sale_id` (`sale_id`);

--
-- Indices de la tabla `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `product_sales`
--
ALTER TABLE `product_sales`
  ADD CONSTRAINT `product_sales_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `product_sales_ibfk_2` FOREIGN KEY (`sale_id`) REFERENCES `sales` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
