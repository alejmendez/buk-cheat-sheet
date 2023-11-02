/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i4jpn7p2do05qmk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ruhutrqc",
    "name": "image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i4jpn7p2do05qmk")

  // remove
  collection.schema.removeField("ruhutrqc")

  return dao.saveCollection(collection)
})
