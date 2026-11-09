-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-11-2026 a las 18:14:43
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tpi-grupo8`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `image` varchar(255) NOT NULL,
  `category` enum('medications','sports supplements') NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `image`, `category`, `price`, `active`) VALUES
(1, 'Vick Vitapirena Forte x5', 'https://farmacityar.vtexassets.com/arquivos/ids/234221-1200-auto?v=638085319854200000&width=1200&height=auto&aspect=true', 'medications', 14000.00, 1),
(2, 'Bucoangin', 'https://farmacityar.vtexassets.com/arquivos/ids/233621-1200-auto?v=638077692840230000&width=1200&height=auto&aspect=true', 'medications', 6855.00, 1),
(3, 'Tavinex plus', 'https://farmacityar.vtexassets.com/arquivos/ids/233655-1200-auto?v=638077692947270000&width=1200&height=auto&aspect=true', 'medications', 6050.00, 1),
(4, 'Next', 'https://farmacityar.vtexassets.com/arquivos/ids/297440-1200-auto?v=639214634171530000&width=1200&height=auto&aspect=true', 'medications', 10134.00, 1),
(5, 'Acemuk', 'https://farmacityar.vtexassets.com/arquivos/ids/267084-1200-auto?v=638803179925270000&width=1200&height=auto&aspect=true', 'medications', 14143.00, 1),
(6, 'Expectosan', 'https://farmacityar.vtexassets.com/arquivos/ids/234289-1200-auto?v=638085320209470000&width=1200&height=auto&aspect=true', 'medications', 21500.00, 1),
(7, 'Buenas Noches', 'https://farmacityar.vtexassets.com/arquivos/ids/263144-1200-auto?v=638699773427070000&width=1200&height=auto&aspect=true', 'medications', 13860.00, 1),
(8, 'Actron 400', 'https://farmacityar.vtexassets.com/arquivos/ids/293493-1200-auto?v=639161982082470000&width=1200&height=auto&aspect=true', 'medications', 4965.00, 1),
(9, 'Geniol Plus', 'https://farmacityar.vtexassets.com/arquivos/ids/294845-1200-auto?v=639201079921830000&width=1200&height=auto&aspect=true', 'medications', 3453.00, 1),
(10, 'Tafirol 500mg', 'https://farmacityar.vtexassets.com/arquivos/ids/297459-1200-auto?v=639214705064970000&width=1200&height=auto&aspect=true', 'medications', 10500.00, 1),
(11, 'ibupirac Fem', 'https://farmacityar.vtexassets.com/arquivos/ids/233638-1200-auto?v=638077692892570000&width=1200&height=auto&aspect=true', 'medications', 7023.00, 1),
(12, 'Ena Creatina', 'https://farmacityar.vtexassets.com/arquivos/ids/286943-1200-auto?v=639027063770130000&width=1200&height=auto&aspect=true', 'sports supplements', 40000.00, 1),
(13, 'Ena Muscle Max Post Work x 90 Tabletas', 'https://farmacityar.vtexassets.com/arquivos/ids/232255-1200-auto?v=638048898294630000&width=1200&height=auto&aspect=true', 'sports supplements', 16800.00, 1),
(14, 'Electrolitos', 'https://farmacityar.vtexassets.com/arquivos/ids/299262-1200-auto?v=639239691661100000&width=1200&height=auto&aspect=true', 'sports supplements', 29750.00, 1),
(15, 'Ena Whey Protein', 'https://farmacityar.vtexassets.com/arquivos/ids/243162-1200-auto?v=638211443455570000&width=1200&height=auto&aspect=true', 'sports supplements', 96000.00, 1),
(16, 'Creatina Ultra Tech', 'https://farmacityar.vtexassets.com/arquivos/ids/223828-1200-auto?v=637901359050170000&width=1200&height=auto&aspect=true', 'sports supplements', 58200.00, 1),
(17, 'Barra Proteica Pure Welness', 'https://farmacityar.vtexassets.com/arquivos/ids/249564-1200-auto?v=638362761673130000&width=1200&height=auto&aspect=true', 'sports supplements', 2790.00, 1),
(18, 'Total Magnesiano x30', 'https://farmacityar.vtexassets.com/arquivos/ids/281448-1200-auto?v=638930443356170000&width=1200&height=auto&aspect=true', 'sports supplements', 20773.00, 1),
(19, 'Combo ENA Creatina + Proteína de Vainilla + Shaker', 'https://farmacityar.vtexassets.com/arquivos/ids/290632-1200-auto?v=639116996150530000&width=1200&height=auto&aspect=true', 'sports supplements', 166700.00, 1),
(20, 'upradyn', 'https://farmacityar.vtexassets.com/arquivos/ids/271190-1200-auto?v=638833610671670000&width=1200&height=auto&aspect=true', 'medications', 2515.00, 1),
(21, 'prueba123', 'https://asset.action.com/image/upload/t_digital_square/w_256/2537612_5000112679687-111_01_fcwfbm.jpg', 'medications', 123.00, 1),
(22, 'prueba123', 'https://www.mostazaweb.com.ar/wp-content/uploads/2026/03/MAY0-3-copia.png', 'medications', 1.00, 1),
(23, 'prueba1234', 'https://asset.action.com/image/upload/t_digital_square/w_256/2537612_5000112679687-111_01_fcwfbm.jpg', 'medications', 12.00, 1),
(24, 'prueba123', 'https://asset.action.com/image/upload/t_digital_square/w_256/2537612_5000112679687-111_01_fcwfbm.jpg', 'medications', 12.00, 1),
(25, 'prueba123', 'https://www.mostazaweb.com.ar/wp-content/uploads/2026/03/MAY0-3-copia.png', 'medications', 414.00, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_sales`
--

CREATE TABLE `product_sales` (
  `product_id` int(11) NOT NULL,
  `sale_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sales`
--

CREATE TABLE `sales` (
  `id` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `total_price` float NOT NULL,
  `user_name` varchar(240) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(110) NOT NULL,
  `email` varchar(110) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT de la tabla `sales`
--
ALTER TABLE `sales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
