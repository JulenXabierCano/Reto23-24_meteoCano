SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


INSERT INTO `ciudades` (`ciudad`, `coordenadas`, `estadoDelCielo`, `temperaturas`, `humedad`, `viento`, `lluvia`, `cod_ciudad`, `cod_provincia`, `created_at`, `updated_at`) VALUES
('Bergara', '43.11;-2.41', 'muy nuboso', '16.95;11.47', 57, '0.98;194', 0, NULL, NULL, NULL, '2024-01-31 11:33:49'),
('Bilbao', '43.26;-2.93', 'cielo claro', '17.46;11.89', 61, '2.57;110', 0, NULL, NULL, NULL, '2024-01-31 11:33:49'),
('Irun', '43.35;-1.78', 'cielo claro', '16.96;11.6', 62, '1.03;0', 0, NULL, NULL, NULL, '2024-01-31 11:33:49'),
('San Sebastian', '43.34;-1.98', 'cielo claro', '17.15;12.75', 60, '2.24;167', 0, NULL, NULL, NULL, '2024-01-31 11:33:49'),
('Vitoria Gazteiz', '42.84;-2.67', 'nubes dispersas', '7.83;5.41', 87, '4.12;220', 0, NULL, NULL, NULL, '2024-01-31 11:33:49');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
