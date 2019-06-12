/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50725
 Source Host           : localhost:3306
 Source Schema         : wifi

 Target Server Type    : MySQL
 Target Server Version : 50725
 File Encoding         : 65001

 Date: 11/06/2019 22:18:42
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for items
-- ----------------------------
DROP TABLE IF EXISTS `items`;
CREATE TABLE `items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `IMEI` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `device` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `message` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `tel` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of items
-- ----------------------------
BEGIN;
INSERT INTO `items` VALUES (3, '123', '123', '123', '15732181941', '2019-04-26 03:35:37', '2019-04-26 03:35:37');
INSERT INTO `items` VALUES (4, '123', '123', '123', '15732181941', '2019-05-13 02:51:07', '2019-05-13 02:51:07');
INSERT INTO `items` VALUES (5, '123', '123', '123', '15732181941', '2019-05-13 02:56:29', '2019-05-13 02:56:29');
INSERT INTO `items` VALUES (6, '123', '123', '123', '15732181941', '2019-05-13 02:56:30', '2019-05-13 02:56:30');
INSERT INTO `items` VALUES (7, '123', '123', '123', '15732181941', '2019-05-13 02:56:31', '2019-05-13 02:56:31');
INSERT INTO `items` VALUES (8, '123', '123', '123', '15732181941', '2019-05-13 02:56:32', '2019-05-13 02:56:32');
INSERT INTO `items` VALUES (9, '123', '123', '123', '15732181941', '2019-05-13 02:56:33', '2019-05-13 02:56:33');
INSERT INTO `items` VALUES (10, '123', '123', '123', '15732181941', '2019-05-13 02:56:33', '2019-05-13 02:56:33');
INSERT INTO `items` VALUES (11, '123', '123', '123', '15732181941', '2019-05-13 02:56:33', '2019-05-13 02:56:33');
INSERT INTO `items` VALUES (12, '123', '123', '123', '15732181941', '2019-05-13 03:11:16', '2019-05-13 03:11:16');
INSERT INTO `items` VALUES (13, '123', '123', '123', '15732181941', '2019-05-13 03:11:16', '2019-05-13 03:11:16');
INSERT INTO `items` VALUES (14, '123', '123', '123', '15732181941', '2019-05-13 03:11:16', '2019-05-13 03:11:16');
INSERT INTO `items` VALUES (15, '123', '123', '123', '15732181941', '2019-05-13 03:11:19', '2019-05-13 03:11:19');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
