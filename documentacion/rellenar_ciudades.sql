SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+01:00";

INSERT INTO `ciudades` (`ciudad`, `coordenadas`) VALUES
('Bergara', '43.11;-2.41'),
('Bilbao', '43.26;-2.93'),
('Irun', '43.35;-1.78'),
('San Sebastian', '43.34;-1.98'),
('Vitoria Gazteiz', '42.84;-2.67');
COMMIT;
