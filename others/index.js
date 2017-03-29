/* 本文件是用来测试覆盖属性 */

var META = require('./metadata').metadata;
var CONFIG = require('./propertyRedefineConfig2').config;
var _ = require('lodash');

/**
 * 从一个实体集合中找出满足条件的实体
 * @param configEntity 配置中的单个实体
 * @param entityCollection 一个实体集合
 * @return {*}
 */
function findEntity(configEntity, entityCollection) {

  for (var entity of entityCollection) {

    if (entity.name === configEntity.name) {
      return entity;
    }

  }

}

/**
 * 一个递归函数，实现递归修改属性的Type
 * @param configEntity
 * @param entityCollection
 */
function map(configEntity, entityCollection) {

  var result = findEntity(configEntity, entityCollection);

  if (result) {

    for (var property of configEntity.properties) {

      var attr = findEntity(property, result.properties);

      attr.type = property.type;

    }

  }

  else {

    for (var i = 0, l = entityCollection.length; i < l; i++) {

      if (entityCollection[i].entities) {

        map(configEntity, entityCollection[i].entities)

      }

    }

  }

}

for (var configEntity of CONFIG) {

  map(configEntity, META)

}


console.log(JSON.stringify(META, null, 2));


