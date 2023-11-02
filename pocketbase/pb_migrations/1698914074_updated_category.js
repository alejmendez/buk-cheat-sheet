/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c8vjjltklppt6ho")

  collection.name = "categories"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_RiU1gfH` ON `categories` (`slug`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("c8vjjltklppt6ho")

  collection.name = "category"
  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_RiU1gfH` ON `category` (`slug`)"
  ]

  return dao.saveCollection(collection)
})
