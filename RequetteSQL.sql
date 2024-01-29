-- mysql -u username -p password -h localhost mydatabase -e "SELECT * FROM mytable"
-- In this command, 
-- replace "username" with your database username, 
-- "password" with your password, 
-- "mydatabase" with your database name,
-- and "mytable" with the name of the table you want to display.


--
-- Base de données : `db_quai`
--

CREATE DATABASE db_quai;

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Entrées'),
(2, 'Plats'),
(3, 'Desserts');

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

CREATE TABLE `clients` (
  `client_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `statut` enum('active','inactive') NOT NULL DEFAULT 'active',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `token` varchar(255) DEFAULT NULL,
  `number` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `clients`
--

INSERT INTO `clients` (`client_id`, `username`, `email`, `password`, `statut`, `created_at`, `updated_at`, `token`, `number`) VALUES
(1, 'JohnD', 'johnde@example.com', '$2y$10$FqwkmDcaEiuZdvorm1BXD.K9e/HwlkOpEq/i6pna6NGI8I04U0A/O', 'active', '2023-01-29 09:10:42', '2024-01-23 12:00:16', NULL, '0784856891'),
(54, 'Enzo Capi', 'enzocapi@gmail.com', '$2y$10$x/wC9Fz0z.PZ8dJc9WiEHe441oLZ3IDFeyU5bM2IN6NqdtHDJSOMm', 'active', '2023-10-07 20:17:41', '2023-10-08 10:30:25', NULL, '0120236558'),
(55, 'efecdece', 'edfeferefr@gmaiul.com', '$2y$10$aslSG9SWZ2XFnovMh3V4quy535Tm.NLiz.NzuMbhK7reZEoDvbW..', 'active', '2023-12-15 16:55:35', '2023-12-15 16:55:35', NULL, '787878948894489'),
(56, 'joycooo', 'joyco@gmail.com', '$2y$10$GlhAnlsGGevGh2ULNCxOsOs9om972jBJGk.byd46wWbulxTrkhvUG', 'active', '2023-12-19 00:33:23', '2023-12-19 00:33:23', NULL, '615156561156'),
(57, 'magicmeeee', 'magicme@gmail.com', '$2y$10$hlubrqbTTqLyesokx7AJ.O78yOz07h64J3tTwZAJIFjJCITjLxqVK', 'active', '2024-01-15 10:04:46', '2024-01-22 16:58:02', NULL, '0235987458');

-- --------------------------------------------------------

--
-- Structure de la table `gallerys`
--

CREATE TABLE `gallerys` (
  `gallery_id` int(11) NOT NULL,
  `gallery_title` varchar(255) DEFAULT NULL,
  `gallery_content` varchar(255) DEFAULT NULL,
  `gallery_img` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `gallerys`
--

INSERT INTO `gallerys` (`gallery_id`, `gallery_title`, `gallery_content`, `gallery_img`) VALUES
(1, 'Le trio de figues ', 'Trois figues posés sur un caramel maison avec une touche de menthe fraîche.', '63570_fig-4466450_1920.jpg'),
(7, 'Salade de figues', 'Notre salade de figues met en vedette des figues fraîches, coupées en quartiers, et est accompagnée d\'une vinaigrette légère à base d\'huile d\'olive, de vinaigre balsamique et de miel. Elle est également parsemée de feuilles de roquette pour plus de fraîch', '99523_plat.jpg'),
(8, 'Fondue savoyarde', 'La fondue savoyarde est un plat traditionnel de la région de Savoie, idéal pour les soirées d\'hiver. Cette fondue est préparée avec du fromage de raclette et du fromage à fondue, mélangés à de la farine de seigle et de l\'ail.', '30638_cheese-fondue-2803840_1920.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `title` varchar(150) NOT NULL,
  `content` text NOT NULL DEFAULT '',
  `category_id` int(11) NOT NULL,
  `prix` decimal(10,0) NOT NULL,
  `product_image` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (`product_id`, `title`, `content`, `category_id`, `prix`, `product_image`) VALUES
(29, 'Velout&eacute; de courge et cr&egrave;me de ch&acirc;taigne', 'Velout&eacute; de courge, accompagn&eacute; d&#039;une cr&egrave;me de ch&acirc;taigne maison. Servi avec des cro&ucirc;tons &agrave; l&#039;ail et des noisettes concass&eacute;es.', 1, '15', NULL),
(30, 'Salade savoyarde aux endives et au bleu', 'Mélange frais et croquant d\'endives, noix, lardons fumés et morceaux de fromage bleu, servie avec une vinaigrette à la moutarde et aux noix. ', 1, '13', NULL),
(31, 'Assiette de Gor ion', 'Viande séchée de boeuf charolais, spécialité du chef', 1, '12', NULL),
(32, 'Terrine artisanale', 'Pain de campagne toasté et condiments', 1, '12', NULL),
(33, 'Fondue savoyarde', 'Fondue traditionnelle savoyarde à base de fromage Comté et Emmental, accompagnée de pain de seigle grillé et de pommes de terre.', 2, '23', NULL),
(34, 'Tartiflette', 'Tartiflette traditionnelle faite maison, avec des pommes de terre, oignons, lardons et fromage Reblochon.', 2, '21', NULL),
(35, 'Raclette', 'Raclette traditionnelle savoyarde, accompagnée de pommes de terre, charcuterie et cornichons.', 2, '25', NULL),
(36, 'Croziflette', 'Croziflette, une variante de la tartiflette, avec des crozets à la place des pommes de terre, accompagnée de lardons et de fromage Reblochon.', 2, '21', NULL),
(37, 'Tarte aux myrtilles', 'Tarte aux myrtilles fraîches et crème glacée à la vanille.', 3, '9', NULL),
(38, 'Crème brûlée à la truffe', 'Crème brûlée classique relevée par une touche de truffe fraîche.', 3, '12', NULL),
(39, 'Fondant au chocolat', 'Fondant chaud et moelleux accompagné d\'une boule de glace à la vanille.', 3, '12', NULL),
(40, 'Tarte Tatin', 'Tarte aux pommes caramélisées, servie tiède avec de la crème glacée à la vanille.', 3, '11', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `reservations`
--

CREATE TABLE `reservations` (
  `reservation_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `number_of_people` int(11) NOT NULL,
  `comments` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `client_number` varchar(20) DEFAULT NULL,
  `client_username` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `reservations`
--

INSERT INTO `reservations` (`reservation_id`, `client_id`, `date`, `time`, `number_of_people`, `comments`, `created_at`, `client_number`, `client_username`) VALUES
(1, 1, '2024-07-02', '19:00:00', 4, 'a007', '2023-01-29 09:12:36', '0784856891', 'JohnD'),
(59, 1, '2024-10-02', '14:00:00', 2, 'Select  <strong class=\"m-5\">coucou</strong>', '2023-10-06 08:33:43', '0784856891', 'JohnD'),
(62, 57, '2024-01-14', '19:15:00', 8, 'voila bien 50 ans', '2024-01-15 10:05:34', '0235987458', 'magicmeeee'),
(63, 57, '2024-01-15', '19:28:00', 3, 'azaaezzeaazezaaze', '2024-01-15 10:06:03', '0235987458', 'magicmeeee'),
(66, 57, '2023-02-15', '19:26:00', 2, 'eefefrefrr', '2024-01-15 16:25:17', '0235987458', 'magicmeeee'),
(69, 57, '2024-01-19', '20:40:00', 3, '3334545', '2024-01-16 10:35:43', '0235987458', 'magicmeeee'),
(70, 57, '2024-01-19', '20:04:00', 4, 'deéeeé', '2024-01-16 10:42:34', '0235987458', 'magicmeeee'),
(83, 57, '2024-04-13', '20:00:00', 4, 'anniversaire.', '2024-01-26 17:30:04', '0235987458', 'magicmeeee');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `login` varchar(150) NOT NULL,
  `password` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`login`, `password`) VALUES
('admin', 'admin01'),
('charle', '$2y$10$7Pe8coFM9jkrWULnkJD5tu9gvZHtcpas1fpFn4HYIgEGAfZ70tcB6');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`client_id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `idx_unique_number` (`number`);

--
-- Index pour la table `gallerys`
--
ALTER TABLE `gallerys`
  ADD PRIMARY KEY (`gallery_id`);

--
-- Index pour la table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Index pour la table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`reservation_id`),
  ADD KEY `client_id` (`client_id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`login`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `clients`
--
ALTER TABLE `clients`
  MODIFY `client_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT pour la table `gallerys`
--
ALTER TABLE `gallerys`
  MODIFY `gallery_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT pour la table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `reservation_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Contraintes pour la table `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `clients` (`client_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
