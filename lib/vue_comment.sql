/*
Navicat MySQL Data Transfer

Source Server         : itcase
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : vue_comment

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-11-15 21:11:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for content
-- ----------------------------
DROP TABLE IF EXISTS `content`;
CREATE TABLE `content` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL,
  `comment` tinytext,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of content
-- ----------------------------
INSERT INTO `content` VALUES ('1', '小智', '神奇宝贝很好看');
INSERT INTO `content` VALUES ('2', 'zs', 'aaaa');
INSERT INTO `content` VALUES ('3', '小兰', '柯南真可爱');
INSERT INTO `content` VALUES ('4', '柯南', '小兰越来越漂亮了');
INSERT INTO `content` VALUES ('5', '小黄人', '神偷爸爸,能不能减减肥?');
INSERT INTO `content` VALUES ('6', '小丸子', '爷爷的梦想真优秀');
INSERT INTO `content` VALUES ('7', '蜘蛛侠', '忍者神龟只是靠人多取胜');
INSERT INTO `content` VALUES ('8', '娃哈哈', '爽歪歪没有我白');
INSERT INTO `content` VALUES ('9', '刘希晗', '四金真丑');
