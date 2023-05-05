-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 16 mars 2023 à 09:50
-- Version du serveur : 10.4.27-MariaDB
-- Version de PHP : 8.1.12
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!40101 SET NAMES utf8mb4 */
;
--
-- Base de données : `db_quai`
--

-- --------------------------------------------------------
--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
    `id` int(11) NOT NULL,
    `name` varchar(150) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;
--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `name`)
VALUES (1, 'Entrées'),
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
    `statut` enum('active', 'inactive') NOT NULL DEFAULT 'active',
    `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
    `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
    `token` varchar(255) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;
--
-- Déchargement des données de la table `clients`
--

INSERT INTO `clients` (
        `client_id`,
        `username`,
        `email`,
        `password`,
        `statut`,
        `created_at`,
        `updated_at`,
        `token`
    )
VALUES (
        1,
        'JohnDoe',
        'johndoe@example.com',
        '$2y$10$MzsKnIOZLOTogNOp5xWYpuDdhUr2mz327lJHLtffgqUAt9GGM53PO',
        'active',
        '2023-01-29 09:10:42',
        '2023-01-31 20:41:45',
        NULL
    ),
    (
        19,
        'bearice barisien',
        'bea.barisien@gmail.com',
        '$2y$10$jlW8.Ptg7w8lvFQe0xtyk.fnidoAq60x.yUjdrCSgYT75VHU75ozq',
        'active',
        '2023-01-31 21:49:28',
        '2023-01-31 21:49:28',
        NULL
    ),
    (
        24,
        'Alicia Keys',
        'aliciak@gmail.com',
        '$2y$10$gcCKu9BNXDQfl9M9ruPFP.cc3LXnE/dSYM90j4s2HokX9URLEnpb.',
        'active',
        '2023-01-31 22:22:31',
        '2023-01-31 22:22:31',
        NULL
    ),
    (
        25,
        'joshua mwa',
        'joshuaall@gmail.com',
        '$2y$10$jiV2gCueo5jeiBe/gj6jT.f7BR1BXV9vmmIFHAvUsekFHFdL7VT4q',
        'active',
        '2023-01-31 22:24:09',
        '2023-01-31 22:24:09',
        NULL
    ),
    (
        26,
        'nicolas sss',
        'sssnico@gmail.com',
        '$2y$10$/fHT778JXMxWeKroXUuEC.8mijVWYxULflWRCPqYMq3GHWeAJhSMm',
        'active',
        '2023-02-01 20:06:06',
        '2023-02-01 20:06:06',
        NULL
    ),
    (
        27,
        'albert einstein',
        'einstein@gmail.com',
        '$2y$10$RYAwHPHSN8o2Mo3.o04ekeuUYkPXbowzrbpe3.oaz1OhqFqEYpOmW',
        'active',
        '2023-02-02 11:51:39',
        '2023-02-02 11:51:39',
        NULL
    ),
    (
        31,
        'Snowee',
        'Hellosnowee@gmail.com',
        '$2y$10$3wLvsRMGpMUOwmj2cTViT.MlJvMQTIzXkKQZLG4zkGA1XHZOM7M5u',
        'active',
        '2023-02-11 18:12:49',
        '2023-02-11 18:12:49',
        NULL
    ),
    (
        32,
        'albert montana',
        'albertalbert@gmail.com',
        '$2y$10$5Y0lnORgJiG.oUzzILfWV.ZLd7vzNu/G2fd3zDZRlOvAtv1msRjC6',
        'active',
        '2023-02-21 18:37:58',
        '2023-02-21 18:37:58',
        NULL
    ),
    (
        33,
        'azertyuiop',
        'Azertyuiop@gmail.com',
        '$2y$10$2fjilXQE/7ehaBS8w3vF1ukNc/eIgydFEaHjAodtL/ODrCsYraf5C',
        'active',
        '2023-02-22 09:53:37',
        '2023-02-22 09:53:37',
        NULL
    ),
    (
        39,
        '',
        '',
        '$2y$10$WYWQ5y6aiHobJPasfiz1U.Di/7jKoSavSCD9KbrvCThCOrg5C4p/m',
        'active',
        '2023-02-24 22:41:03',
        '2023-02-24 22:41:03',
        NULL
    ),
    (
        40,
        'blabla',
        'blabla@gmail.com',
        '$2y$10$GvnPyiyBYfW3W8aVqj7Xx.ahx5.NbCnR8NE6Av3033KTERoNLaAoq',
        'active',
        '2023-02-26 20:17:37',
        '2023-02-26 20:17:37',
        NULL
    ),
    (
        41,
        '38',
        '3787@gmail.com',
        '$2y$10$emgGg3JoigKl98P8562O0O/crIWXFCzEMkrO7FaoaY5nClfIT1iry',
        'active',
        '2023-03-15 08:39:35',
        '2023-03-15 08:39:35',
        NULL
    ),
    (
        42,
        'grrrrrefff',
        'greeeeeeeeeg@gmail.com',
        '$2y$10$/0JIhxjl.bqqoS1vtEgXiOUyzNUtGTj0W3/5kDmQtHc2vPf20kDvu',
        'active',
        '2023-03-15 22:21:28',
        '2023-03-15 22:21:28',
        NULL
    ),
    (
        43,
        'efzezfefzefz',
        'ezefzfezfefze@gmzil.com',
        '$2y$10$McsQajFi1uCCPiTkjVmWIuYqoSiDQRVZzRWp1JB6Su814l54kq5gy',
        'active',
        '2023-03-15 22:30:30',
        '2023-03-15 22:30:30',
        NULL
    ),
    (
        44,
        'reregrggreegre',
        'ergregegr@gmail.com',
        '$2y$10$WZL1a2Ugy5n0MyLYpOfXH.SBh7i44DVeIqaSUKSttOMJ.aBRPFCg2',
        'active',
        '2023-03-15 22:36:43',
        '2023-03-15 22:36:43',
        NULL
    ),
    (
        45,
        't\'gredgfrgdger',
        'reggregreegr@gmail.com',
        '$2y$10$g6HUEfKhQqqrK794ZCHKgOkwse8ezWBRtZ6iIAAKtJIYNBfKZ4AQO',
        'active',
        '2023-03-15 22:38:00',
        '2023-03-15 22:38:00',
        NULL
    );
-- --------------------------------------------------------
--
-- Structure de la table `company_info`
--

CREATE TABLE `company_info` (
    `id` int(11) NOT NULL,
    `name` varchar(255) DEFAULT NULL,
    `adress` varchar(255) DEFAULT NULL,
    `phone` varchar(20) DEFAULT NULL,
    `email` varchar(50) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;
--
-- Déchargement des données de la table `company_info`
--

INSERT INTO `company_info` (`id`, `name`, `adress`, `phone`, `email`)
VALUES (
        1,
        'Le Quai Antique',
        '15 rue fake adress',
        '01 01 01 01 01',
        'QuaiAntique@fakeAdress.com'
    );
-- --------------------------------------------------------
--
-- Structure de la table `gallerys`
--

CREATE TABLE `gallerys` (
    `gallery_id` int(11) NOT NULL,
    `gallery_title` varchar(255) DEFAULT NULL,
    `gallery_content` varchar(255) DEFAULT NULL,
    `gallery_img` varchar(255) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;
--
-- Déchargement des données de la table `gallerys`
--

INSERT INTO `gallerys` (
        `gallery_id`,
        `gallery_title`,
        `gallery_content`,
        `gallery_img`
    )
VALUES (
        1,
        'Le trio de figues ',
        'Trois figues posés sur un caramel maison avec une touche de menthe fraîche.',
        '63570_fig-4466450_1920.jpg'
    ),
    (
        7,
        'Salade de figues',
        'Notre salade de figues met en vedette des figues fraîches, coupées en quartiers, et est accompagnée d\'une vinaigrette légère à base d\'huile d\'olive, de vinaigre balsamique et de miel. Elle est également parsemée de feuilles de roquette pour plus de fraîch',
        '99523_plat.jpg'
    ),
    (
        8,
        'Fondue savoyarde',
        'La fondue savoyarde est un plat traditionnel de la région de Savoie, idéal pour les soirées d\'hiver. Cette fondue est préparée avec du fromage de raclette et du fromage à fondue, mélangés à de la farine de seigle et de l\'ail.',
        '30638_cheese-fondue-2803840_1920.jpg'
    );
-- --------------------------------------------------------
--
-- Structure de la table `opening_hours`
--

CREATE TABLE `opening_hours` (
    `id` int(11) NOT NULL,
    `day_of_week` varchar(20) DEFAULT NULL,
    `lunch_opening_time` varchar(10) DEFAULT NULL,
    `lunch_closing_time` varchar(10) DEFAULT NULL,
    `dinner_opening_time` varchar(10) DEFAULT NULL,
    `dinner_closing_time` varchar(10) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;
--
-- Déchargement des données de la table `opening_hours`
--

INSERT INTO `opening_hours` (
        `id`,
        `day_of_week`,
        `lunch_opening_time`,
        `lunch_closing_time`,
        `dinner_opening_time`,
        `dinner_closing_time`
    )
VALUES (1, 'Lundi', '12:00', '14:00', '19:00', '21:30'),
    (2, 'Mardi', 'FERME', 'FERME', 'FERME', 'FERME'),
    (
        3,
        'Mercredi',
        '12:00',
        '14:00',
        '19:00',
        '21:30'
    ),
    (4, 'Jeudi', '12:00', '14:00', '19:00', '21:30'),
    (
        5,
        'Vendredi',
        '12:00',
        '14:00',
        '19:00',
        '21:30'
    ),
    (6, 'Samedi', '12:00', '14:00', '19:00', '21:30'),
    (
        7,
        'Dimanche',
        '12:00',
        '14:00',
        '19:00',
        '21:00'
    );
-- --------------------------------------------------------
--
-- Structure de la table `products`
--

CREATE TABLE `products` (
    `product_id` int(11) NOT NULL,
    `title` varchar(150) NOT NULL,
    `content` text NOT NULL DEFAULT '',
    `category_id` int(11) NOT NULL,
    `prix` decimal(10, 0) NOT NULL,
    `product_image` varchar(250) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;
--
-- Déchargement des données de la table `products`
--

INSERT INTO `products` (
        `product_id`,
        `title`,
        `content`,
        `category_id`,
        `prix`,
        `product_image`
    )
VALUES (
        29,
        'Velouté de courge et crème de châtaigne',
        'Velouté de courge, accompagné d\'une crème de châtaigne maison. Servi avec des croûtons à l\'ail et des noisettes concassées',
        1,
        '15',
        NULL
    ),
    (
        30,
        'Salade savoyarde aux endives et au bleu',
        'Mélange frais et croquant d\'endives, noix, lardons fumés et morceaux de fromage bleu, servie avec une vinaigrette à la moutarde et aux noix. ',
        1,
        '13',
        NULL
    ),
    (
        31,
        'Assiette de Gor ion',
        'Viande séchée de boeuf charolais, spécialité du chef',
        1,
        '12',
        NULL
    ),
    (
        32,
        'Terrine artisanale',
        'Pain de campagne toasté et condiments',
        1,
        '12',
        NULL
    ),
    (
        33,
        'Fondue savoyarde',
        'Fondue traditionnelle savoyarde à base de fromage Comté et Emmental, accompagnée de pain de seigle grillé et de pommes de terre.',
        2,
        '23',
        NULL
    ),
    (
        34,
        'Tartiflette',
        'Tartiflette traditionnelle faite maison, avec des pommes de terre, oignons, lardons et fromage Reblochon.',
        2,
        '21',
        NULL
    ),
    (
        35,
        'Raclette',
        'Raclette traditionnelle savoyarde, accompagnée de pommes de terre, charcuterie et cornichons.',
        2,
        '25',
        NULL
    ),
    (
        36,
        'Croziflette',
        'Croziflette, une variante de la tartiflette, avec des crozets à la place des pommes de terre, accompagnée de lardons et de fromage Reblochon.',
        2,
        '21',
        NULL
    ),
    (
        37,
        'Tarte aux myrtilles',
        'Tarte aux myrtilles fraîches et crème glacée à la vanille.',
        3,
        '9',
        NULL
    ),
    (
        38,
        'Crème brûlée à la truffe',
        'Crème brûlée classique relevée par une touche de truffe fraîche.',
        3,
        '12',
        NULL
    ),
    (
        39,
        'Fondant au chocolat',
        'Fondant chaud et moelleux accompagné d\'une boule de glace à la vanille.',
        3,
        '12',
        NULL
    ),
    (
        40,
        'Tarte Tatin',
        'Tarte aux pommes caramélisées, servie tiède avec de la crème glacée à la vanille.',
        3,
        '11',
        NULL
    );
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
    `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;
--
-- Déchargement des données de la table `reservations`
--

INSERT INTO `reservations` (
        `reservation_id`,
        `client_id`,
        `date`,
        `time`,
        `number_of_people`,
        `comments`,
        `created_at`
    )
VALUES (
        1,
        1,
        '2022-02-01',
        '19:00:00',
        4,
        'Fête d\'anniversaire',
        '2023-01-29 09:12:36'
    );
-- --------------------------------------------------------
--
-- Structure de la table `users`
--

CREATE TABLE `users` (
    `login` varchar(150) NOT NULL,
    `password` varchar(150) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;
--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`login`, `password`)
VALUES ('admin', 'admin01'),
    (
        'charle',
        '$2y$10$7Pe8coFM9jkrWULnkJD5tu9gvZHtcpas1fpFn4HYIgEGAfZ70tcB6'
    );
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
    ADD UNIQUE KEY `email` (`email`);
--
-- Index pour la table `company_info`
--
ALTER TABLE `company_info`
ADD PRIMARY KEY (`id`);
--
-- Index pour la table `gallerys`
--
ALTER TABLE `gallerys`
ADD PRIMARY KEY (`gallery_id`);
--
-- Index pour la table `opening_hours`
--
ALTER TABLE `opening_hours`
ADD PRIMARY KEY (`id`);
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
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 4;
--
-- AUTO_INCREMENT pour la table `clients`
--
ALTER TABLE `clients`
MODIFY `client_id` int(11) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 46;
--
-- AUTO_INCREMENT pour la table `company_info`
--
ALTER TABLE `company_info`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 3;
--
-- AUTO_INCREMENT pour la table `gallerys`
--
ALTER TABLE `gallerys`
MODIFY `gallery_id` int(11) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 11;
--
-- AUTO_INCREMENT pour la table `products`
--
ALTER TABLE `products`
MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 49;
--
-- AUTO_INCREMENT pour la table `reservations`
--
ALTER TABLE `reservations`
MODIFY `reservation_id` int(11) NOT NULL AUTO_INCREMENT,
    AUTO_INCREMENT = 58;
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
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;