

const AGGREGATES_METADATA = [
  {
    "name": "Car",
    "plural": "Cars",
    "label": "Car",
    "collectionLabel": "Cars",
    "id": {
      "name": "id",
      "type": "string"
    },
    "properties": [
      {
        "name": "version",
        "type": "long"
      },
      {
        "name": "createdBy",
        "type": "string"
      },
      {
        "name": "createdAt",
        "type": "DateTime"
      },
      {
        "name": "updatedBy",
        "type": "string"
      },
      {
        "name": "updatedAt",
        "type": "DateTime"
      },
      {
        "name": "active",
        "type": "bool"
      },
      {
        "name": "deleted",
        "type": "bool"
      }]
    ,
    "entities": [
      {
        "name": "Wheel",
        "plural": "Wheels",
        "label": "Wheel",
        "collectionLabel": "Wheels",
        "id": {
          "name": "wheelId",
          "type": "string",
          enumValuesKey: "WheelId"
        },
        "properties": [{
          "name": "version",
          "type": "long"
        },
                       {
                         "name": "createdBy",
                         "type": "string"
                       },
                       {
                         "name": "createdAt",
                         "type": "DateTime"
                       },
                       {
                         "name": "updatedBy",
                         "type": "string"
                       },
                       {
                         "name": "updatedAt",
                         "type": "DateTime"
                       },
                       {
                         "name": "active",
                         "type": "bool"
                       },
                       {
                         "name": "deleted",
                         "type": "bool"
                       }]
      },
      {
        "name": "Tire",
        "plural": "Tires",
        "label": "Tire",
        "collectionLabel": "Tires",
        "id": {
          "name": "tireId",
          "type": "string"
        },
        "properties": [{
          "name": "version",
          "type": "long"
        },
                       {
                         "name": "createdBy",
                         "type": "string"
                       },
                       {
                         "name": "createdAt",
                         "type": "DateTime"
                       },
                       {
                         "name": "updatedBy",
                         "type": "string"
                       },
                       {
                         "name": "updatedAt",
                         "type": "DateTime"
                       },
                       {
                         "name": "active",
                         "type": "bool"
                       },
                       {
                         "name": "deleted",
                         "type": "bool"
                       }]
        ,
        "entities": [
          {
            "name": "Position",
            "plural": "Positions",
            "label": "Position",
            "collectionLabel": "Positions",
            "id": {
              "name": "id",
              "type": "long"
            },
            "properties": [{
              "name": "timePeriod",
              "type": "TimePeriod"
            },
                           {
                             "name": "mileAge",
                             "type": "long"
                           },
                           {
                             "name": "wheelId",
                             "type": "string",
                             enumValuesKey: "WheelId",
                             referenceType: "Wheel"
                           },
                           {
                             "name": "version",
                             "type": "long"
                           },
                           {
                             "name": "createdBy",
                             "type": "string"
                           },
                           {
                             "name": "createdAt",
                             "type": "DateTime"
                           },
                           {
                             "name": "updatedBy",
                             "type": "string"
                           },
                           {
                             "name": "updatedAt",
                             "type": "DateTime"
                           },
                           {
                             "name": "active",
                             "type": "bool"
                           },
                           {
                             "name": "deleted",
                             "type": "bool"
                           }]
          }
        ]
      }
    ]
  },
  {
    "name": "Garden",
    "plural": "Gardens",
    "label": "Garden",
    "collectionLabel": "Gardens",
    "id": {
      "name": "id",
      "type": "string"
    },
    "properties": [
      {
        "name": "address",
        "type": "string"
      },
      {
        "name": "city",
        "type": "string"
      },
      {
        "name": "version",
        "type": "long"
      },
      {
        "name": "createdBy",
        "type": "string"
      },
      {
        "name": "createdAt",
        "type": "DateTime"
      },
      {
        "name": "updatedBy",
        "type": "string"
      },
      {
        "name": "updatedAt",
        "type": "DateTime"
      },
      {
        "name": "active",
        "type": "bool"
      },
      {
        "name": "deleted",
        "type": "bool"
      }]
    ,
    "entities": [
      {
        "name": "Building",
        "plural": "Buildings",
        "label": "Building",
        "collectionLabel": "Buildings",
        "id": {
          "name": "buildingNumber",
          "type": "string"
        },
        "properties": [{
          "name": "name",
          "type": "string"
        },
                       {
                         "name": "description",
                         "type": "string"
                       },
                       {
                         "name": "version",
                         "type": "long"
                       },
                       {
                         "name": "createdBy",
                         "type": "string"
                       },
                       {
                         "name": "createdAt",
                         "type": "DateTime"
                       },
                       {
                         "name": "updatedBy",
                         "type": "string"
                       },
                       {
                         "name": "updatedAt",
                         "type": "DateTime"
                       },
                       {
                         "name": "active",
                         "type": "bool"
                       },
                       {
                         "name": "deleted",
                         "type": "bool"
                       }]
        ,
        "entities": [
          {
            "name": "Room",
            "plural": "Rooms",
            "label": "Room",
            "collectionLabel": "Rooms",
            "id": {
              "name": "roomNumber",
              "type": "string"
            },
            "properties": [{
              "name": "name",
              "type": "string"
            },
                           {
                             "name": "description",
                             "type": "string"
                           },
                           {
                             "name": "version",
                             "type": "long"
                           },
                           {
                             "name": "createdBy",
                             "type": "string"
                           },
                           {
                             "name": "createdAt",
                             "type": "DateTime"
                           },
                           {
                             "name": "updatedBy",
                             "type": "string"
                           },
                           {
                             "name": "updatedAt",
                             "type": "DateTime"
                           },
                           {
                             "name": "active",
                             "type": "bool"
                           },
                           {
                             "name": "deleted",
                             "type": "bool"
                           }]
          }
        ]
      }
    ]
  },
  {
    "name": "Image",
    "plural": "Images",
    "label": "Image",
    "collectionLabel": "Images",
    "id": {
      "name": "id",
      "type": "long"
    },
    "properties": [
      {
        "name": "imageName",
        "type": "string"
      },
      {
        "name": "imagePath",
        "type": "string"
      },
      {
        "name": "imageType",
        "type": "string",
        enumValuesKey: "ImageType"
      },
      {
        "name": "isDefault",
        "type": "bool"
      },
      {
        "name": "sortNumber",
        "type": "int"
      },
      {
        "name": "refererId",
        "type": "long"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "active",
        "type": "bool"
      },
      {
        "name": "createdBy",
        "type": "string"
      },
      {
        "name": "createdAt",
        "type": "DateTime"
      },
      {
        "name": "updatedBy",
        "type": "string"
      },
      {
        "name": "updatedAt",
        "type": "DateTime"
      },
      {
        "name": "version",
        "type": "long"
      },
      {
        "name": "deleted",
        "type": "bool"
      }]
  },
  {
    "name": "Organization",
    "plural": "Organizations",
    "label": "Organization",
    "collectionLabel": "Organizations",
    "id": {
      "name": "organizationId",
      "type": "string"
    },
    "properties": [{
      "name": "name",
      "type": "string"
    },
                   {
                     "name": "description",
                     "type": "string"
                   },
                   {
                     "name": "type",
                     "type": "string"
                   },
                   {
                     "name": "isSummary",
                     "type": "bool"
                   },
                   {
                     "name": "version",
                     "type": "long"
                   },
                   {
                     "name": "createdBy",
                     "type": "string"
                   },
                   {
                     "name": "createdAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "updatedBy",
                     "type": "string"
                   },
                   {
                     "name": "updatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "active",
                     "type": "bool"
                   },
                   {
                     "name": "deleted",
                     "type": "bool"
                   }]
  },
  {
    "name": "OrganizationStructureType",
    "plural": "OrganizationStructureTypes",
    "label": "Organization Structure Type",
    "collectionLabel": "Organization Structure Types",
    "id": {
      "name": "id",
      "type": "string"
    },
    "properties": [{
      "name": "version",
      "type": "long"
    },
                   {
                     "name": "createdBy",
                     "type": "string"
                   },
                   {
                     "name": "createdAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "updatedBy",
                     "type": "string"
                   },
                   {
                     "name": "updatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "active",
                     "type": "bool"
                   },
                   {
                     "name": "deleted",
                     "type": "bool"
                   }]
  },
  {
    "name": "OrganizationStructure",
    "plural": "OrganizationStructures",
    "label": "Organization Structure",
    "collectionLabel": "Organization Structures",
    "id": {
      "name": "id",
      "type": "OrganizationStructureId"
    },
    "properties": [{
      "name": "version",
      "type": "long"
    },
                   {
                     "name": "createdBy",
                     "type": "string"
                   },
                   {
                     "name": "createdAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "updatedBy",
                     "type": "string"
                   },
                   {
                     "name": "updatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "active",
                     "type": "bool"
                   },
                   {
                     "name": "deleted",
                     "type": "bool"
                   }]
  },
  {
    "name": "Package",
    "plural": "Packages",
    "label": "Package",
    "collectionLabel": "Packages",
    "id": {
      "name": "packageId",
      "type": "long"
    },
    "properties": [{
      "name": "rowVersion",
      "type": "long"
    },
                   {
                     "name": "packageType",
                     "type": "int",
                     enumValuesKey: "PackageType"
                   },
                   {
                     "name": "createdBy",
                     "type": "string"
                   },
                   {
                     "name": "createdAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "updatedBy",
                     "type": "string"
                   },
                   {
                     "name": "updatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "active",
                     "type": "bool"
                   },
                   {
                     "name": "deleted",
                     "type": "bool"
                   },
                   {
                     "name": "serialNumber",
                     "type": "string"
                   },
                   {
                     "name": "materialNumber",
                     "type": "string"
                   },
                   {
                     "name": "customerNumber",
                     "type": "string"
                   },
                   {
                     "name": "workOrderNumber",
                     "type": "string"
                   },
                   {
                     "name": "lotNumber",
                     "type": "string"
                   },
                   {
                     "name": "rank",
                     "type": "string"
                   },
                   {
                     "name": "version",
                     "type": "string"
                   },
                   {
                     "name": "quantity",
                     "type": "int"
                   },
                   {
                     "name": "isMixed",
                     "type": "bool"
                   }]
    ,
    "entities": [
      {
        "name": "PackagePart",
        "plural": "PackageParts",
        "label": "Package Part",
        "collectionLabel": "Package Parts",
        "id": {
          "name": "partId",
          "type": "long"
        },
        "properties": [{
          "name": "rowVersion",
          "type": "long"
        },
                       {
                         "name": "packagePartType",
                         "type": "int",
                         enumValuesKey: "PackagePartType"
                       },
                       {
                         "name": "parentPackagePartId",
                         "type": "long",
                         referenceType: "PackagePart"
                       },
                       {
                         "name": "createdBy",
                         "type": "string"
                       },
                       {
                         "name": "createdAt",
                         "type": "DateTime"
                       },
                       {
                         "name": "updatedBy",
                         "type": "string"
                       },
                       {
                         "name": "updatedAt",
                         "type": "DateTime"
                       },
                       {
                         "name": "active",
                         "type": "bool"
                       },
                       {
                         "name": "deleted",
                         "type": "bool"
                       },
                       {
                         "name": "serialNumber",
                         "type": "string"
                       },
                       {
                         "name": "materialNumber",
                         "type": "string"
                       },
                       {
                         "name": "customerNumber",
                         "type": "string"
                       },
                       {
                         "name": "workOrderNumber",
                         "type": "string"
                       },
                       {
                         "name": "lotNumber",
                         "type": "string"
                       },
                       {
                         "name": "rank",
                         "type": "string"
                       },
                       {
                         "name": "version",
                         "type": "string"
                       },
                       {
                         "name": "quantity",
                         "type": "int"
                       },
                       {
                         "name": "isMixed",
                         "type": "bool"
                       }]
      }
    ]
  },
  {
    "name": "Person",
    "plural": "People",
    "label": "Person",
    "collectionLabel": "People",
    "id": {
      "name": "personalName",
      "type": "PersonalName"
    },
    "properties": [{
      "name": "refToEntInAnotherAggInst",
      "type": "PackagePartId",
      referenceType: "PackagePart"
    },
                   {
                     "name": "birthDate",
                     "type": "DateTime"
                   },
                   {
                     "name": "loves",
                     "type": "PersonalName",
                     referenceType: "Person"
                   },
                   {
                     "name": "emergencyContact",
                     "type": "Contact"
                   },
                   {
                     "name": "email",
                     "type": "string"
                   },
                   {
                     "name": "createdBy",
                     "type": "string"
                   },
                   {
                     "name": "updatedBy",
                     "type": "string"
                   },
                   {
                     "name": "version",
                     "type": "long"
                   },
                   {
                     "name": "createdAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "updatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "active",
                     "type": "bool"
                   },
                   {
                     "name": "deleted",
                     "type": "bool"
                   }]
    ,
    "entities": [
      {
        "name": "YearPlan",
        "plural": "YearPlans",
        "label": "Year Plan",
        "collectionLabel": "Year Plans",
        "id": {
          "name": "year",
          "type": "int"
        },
        "properties": [{
          "name": "description",
          "type": "string"
        },
                       {
                         "name": "createdBy",
                         "type": "string"
                       },
                       {
                         "name": "updatedBy",
                         "type": "string"
                       },
                       {
                         "name": "version",
                         "type": "long"
                       },
                       {
                         "name": "createdAt",
                         "type": "DateTime"
                       },
                       {
                         "name": "updatedAt",
                         "type": "DateTime"
                       },
                       {
                         "name": "active",
                         "type": "bool"
                       },
                       {
                         "name": "deleted",
                         "type": "bool"
                       }]
        ,
        "entities": [
          {
            "name": "MonthPlan",
            "plural": "MonthPlans",
            "label": "Month Plan",
            "collectionLabel": "Month Plans",
            "id": {
              "name": "month",
              "type": "int"
            },
            "properties": [{
              "name": "description",
              "type": "string"
            },
                           {
                             "name": "createdBy",
                             "type": "string"
                           },
                           {
                             "name": "updatedBy",
                             "type": "string"
                           },
                           {
                             "name": "version",
                             "type": "long"
                           },
                           {
                             "name": "createdAt",
                             "type": "DateTime"
                           },
                           {
                             "name": "updatedAt",
                             "type": "DateTime"
                           },
                           {
                             "name": "active",
                             "type": "bool"
                           },
                           {
                             "name": "deleted",
                             "type": "bool"
                           }]
            ,
            "entities": [
              {
                "name": "DayPlan",
                "plural": "DayPlans",
                "label": "Day Plan",
                "collectionLabel": "Day Plans",
                "id": {
                  "name": "day",
                  "type": "int"
                },
                "properties": [{
                  "name": "description",
                  "type": "string"
                },
                               {
                                 "name": "createdBy",
                                 "type": "string"
                               },
                               {
                                 "name": "updatedBy",
                                 "type": "string"
                               },
                               {
                                 "name": "version",
                                 "type": "long"
                               },
                               {
                                 "name": "createdAt",
                                 "type": "DateTime"
                               },
                               {
                                 "name": "updatedAt",
                                 "type": "DateTime"
                               },
                               {
                                 "name": "active",
                                 "type": "bool"
                               },
                               {
                                 "name": "deleted",
                                 "type": "bool"
                               }]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "Team",
    "plural": "Teams",
    "label": "Team",
    "collectionLabel": "Teams",
    "id": {
      "name": "teamName",
      "type": "string"
    },
    "properties": [{
      "name": "description",
      "type": "string"
    },
                   {
                     "name": "players",
                     "itemType": "PersonalName"
                   },
                   {
                     "name": "mascots",
                     "itemType": "string"
                   },
                   {
                     "name": "version",
                     "type": "long"
                   },
                   {
                     "name": "createdBy",
                     "type": "string"
                   },
                   {
                     "name": "createdAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "updatedBy",
                     "type": "string"
                   },
                   {
                     "name": "updatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "active",
                     "type": "bool"
                   },
                   {
                     "name": "deleted",
                     "type": "bool"
                   }]
  },
  {
    "name": "Warehouse",
    "plural": "Warehouses",
    "label": "Warehouse",
    "collectionLabel": "Warehouses",
    "id": {
      "name": "warehouseId",
      "type": "string"
    },
    "properties": [{
      "name": "name",
      "type": "string"
    },
                   {
                     "name": "description",
                     "type": "string"
                   },
                   {
                     "name": "isInTransit",
                     "type": "bool"
                   },
                   {
                     "name": "version",
                     "type": "long"
                   },
                   {
                     "name": "createdBy",
                     "type": "string"
                   },
                   {
                     "name": "createdAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "updatedBy",
                     "type": "string"
                   },
                   {
                     "name": "updatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "active",
                     "type": "bool"
                   },
                   {
                     "name": "deleted",
                     "type": "bool"
                   }]
  },
  {
    "name": "Locator",
    "plural": "Locators",
    "label": "Locator",
    "collectionLabel": "Locators",
    "id": {
      "name": "locatorId",
      "type": "string"
    },
    "properties": [{
      "name": "warehouseId",
      "type": "string",
      referenceType: "Warehouse"
    },
                   {
                     "name": "parentLocatorId",
                     "type": "string"
                   },
                   {
                     "name": "locatorType",
                     "type": "string"
                   },
                   {
                     "name": "priorityNumber",
                     "type": "string"
                   },
                   {
                     "name": "isDefault",
                     "type": "bool"
                   },
                   {
                     "name": "x",
                     "type": "string"
                   },
                   {
                     "name": "y",
                     "type": "string"
                   },
                   {
                     "name": "z",
                     "type": "string"
                   },
                   {
                     "name": "version",
                     "type": "long"
                   },
                   {
                     "name": "createdBy",
                     "type": "string"
                   },
                   {
                     "name": "createdAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "updatedBy",
                     "type": "string"
                   },
                   {
                     "name": "updatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "active",
                     "type": "bool"
                   },
                   {
                     "name": "deleted",
                     "type": "bool"
                   }]
  },
  {
    "name": "Storage",
    "plural": "Storages",
    "label": "Storage",
    "collectionLabel": "Storages",
    "id": {
      "name": "storageId",
      "type": "StorageId"
    },
    "properties": [{
      "name": "quantity",
      "type": "int"
    },
                   {
                     "name": "version",
                     "type": "long"
                   },
                   {
                     "name": "createdBy",
                     "type": "string"
                   },
                   {
                     "name": "createdAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "updatedBy",
                     "type": "string"
                   },
                   {
                     "name": "updatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "active",
                     "type": "bool"
                   },
                   {
                     "name": "deleted",
                     "type": "bool"
                   }]
  },
  {
    "name": "MovementTransaction",
    "plural": "MovementTransactions",
    "label": "Movement Transaction",
    "collectionLabel": "Movement Transactions",
    "id": {
      "name": "movementTransactionId",
      "type": "string"
    },
    "properties": [{
      "name": "sourceLocatorId",
      "type": "string",
      referenceType: "Locator"
    },
                   {
                     "name": "targetLocatorId",
                     "type": "string",
                     referenceType: "Locator"
                   },
                   {
                     "name": "productId",
                     "type": "string"
                   },
                   {
                     "name": "quantity",
                     "type": "int"
                   },
                   {
                     "name": "isInSameHouse",
                     "type": "bool"
                   },
                   {
                     "name": "processState",
                     "type": "string"
                   },
                   {
                     "name": "errorName",
                     "type": "string"
                   },
                   {
                     "name": "message",
                     "type": "string"
                   },
                   {
                     "name": "version",
                     "type": "long"
                   },
                   {
                     "name": "createdBy",
                     "type": "string"
                   },
                   {
                     "name": "createdAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "updatedBy",
                     "type": "string"
                   },
                   {
                     "name": "updatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "active",
                     "type": "bool"
                   },
                   {
                     "name": "deleted",
                     "type": "bool"
                   }]
    ,
    "entities": [
      {
        "name": "MovementEntry",
        "plural": "MovementEntries",
        "label": "Movement Entry",
        "collectionLabel": "Movement Entries",
        "id": {
          "name": "entryName",
          "type": "string"
        },
        "properties": [{
          "name": "locatorId",
          "type": "string",
          referenceType: "Locator"
        },
                       {
                         "name": "productId",
                         "type": "string"
                       },
                       {
                         "name": "quantity",
                         "type": "int"
                       },
                       {
                         "name": "storageQuantity",
                         "type": "int"
                       },
                       {
                         "name": "taskState",
                         "type": "string"
                       },
                       {
                         "name": "storageVersion",
                         "type": "long"
                       },
                       {
                         "name": "taskCommandId",
                         "type": "string"
                       },
                       {
                         "name": "errorName",
                         "type": "string"
                       },
                       {
                         "name": "version",
                         "type": "long"
                       },
                       {
                         "name": "createdBy",
                         "type": "string"
                       },
                       {
                         "name": "createdAt",
                         "type": "DateTime"
                       },
                       {
                         "name": "updatedBy",
                         "type": "string"
                       },
                       {
                         "name": "updatedAt",
                         "type": "DateTime"
                       },
                       {
                         "name": "active",
                         "type": "bool"
                       },
                       {
                         "name": "deleted",
                         "type": "bool"
                       }]
      }
    ]
  },
  {
    "name": "WheelMvo",
    "plural": "WheelMvos",
    "label": "Wheel Mvo",
    "collectionLabel": "Wheel Mvos",
    "id": {
      "name": "carWheelId",
      "type": "CarWheelId"
    },
    "properties": [{
      "name": "version",
      "type": "long"
    },
                   {
                     "name": "createdBy",
                     "type": "string"
                   },
                   {
                     "name": "createdAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "updatedBy",
                     "type": "string"
                   },
                   {
                     "name": "updatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "active",
                     "type": "bool"
                   },
                   {
                     "name": "deleted",
                     "type": "bool"
                   },
                   {
                     "name": "carVersion",
                     "type": "long"
                   },
                   {
                     "name": "carCreatedBy",
                     "type": "string"
                   },
                   {
                     "name": "carCreatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "carUpdatedBy",
                     "type": "string"
                   },
                   {
                     "name": "carUpdatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "carActive",
                     "type": "bool"
                   },
                   {
                     "name": "carDeleted",
                     "type": "bool"
                   }]
  },
  {
    "name": "TireMvo",
    "plural": "TireMvos",
    "label": "Tire Mvo",
    "collectionLabel": "Tire Mvos",
    "id": {
      "name": "carTireId",
      "type": "CarTireId"
    },
    "properties": [{
      "name": "version",
      "type": "long"
    },
                   {
                     "name": "createdBy",
                     "type": "string"
                   },
                   {
                     "name": "createdAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "updatedBy",
                     "type": "string"
                   },
                   {
                     "name": "updatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "active",
                     "type": "bool"
                   },
                   {
                     "name": "deleted",
                     "type": "bool"
                   },
                   {
                     "name": "carVersion",
                     "type": "long"
                   },
                   {
                     "name": "carCreatedBy",
                     "type": "string"
                   },
                   {
                     "name": "carCreatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "carUpdatedBy",
                     "type": "string"
                   },
                   {
                     "name": "carUpdatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "carActive",
                     "type": "bool"
                   },
                   {
                     "name": "carDeleted",
                     "type": "bool"
                   }]
  },
  {
    "name": "PositionMvo",
    "plural": "PositionMvos",
    "label": "Position Mvo",
    "collectionLabel": "Position Mvos",
    "id": {
      "name": "carPositionId",
      "type": "CarPositionId"
    },
    "properties": [{
      "name": "timePeriod",
      "type": "TimePeriod"
    },
                   {
                     "name": "mileAge",
                     "type": "long"
                   },
                   {
                     "name": "wheelId",
                     "type": "string",
                     enumValuesKey: "WheelId"
                   },
                   {
                     "name": "version",
                     "type": "long"
                   },
                   {
                     "name": "createdBy",
                     "type": "string"
                   },
                   {
                     "name": "createdAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "updatedBy",
                     "type": "string"
                   },
                   {
                     "name": "updatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "active",
                     "type": "bool"
                   },
                   {
                     "name": "deleted",
                     "type": "bool"
                   },
                   {
                     "name": "tireVersion",
                     "type": "long"
                   },
                   {
                     "name": "tireCreatedBy",
                     "type": "string"
                   },
                   {
                     "name": "tireCreatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "tireUpdatedBy",
                     "type": "string"
                   },
                   {
                     "name": "tireUpdatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "tireActive",
                     "type": "bool"
                   },
                   {
                     "name": "tireDeleted",
                     "type": "bool"
                   },
                   {
                     "name": "carVersion",
                     "type": "long"
                   },
                   {
                     "name": "carCreatedBy",
                     "type": "string"
                   },
                   {
                     "name": "carCreatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "carUpdatedBy",
                     "type": "string"
                   },
                   {
                     "name": "carUpdatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "carActive",
                     "type": "bool"
                   },
                   {
                     "name": "carDeleted",
                     "type": "bool"
                   }]
  },
  {
    "name": "BuildingMvo",
    "plural": "BuildingMvos",
    "label": "Building Mvo",
    "collectionLabel": "Building Mvos",
    "id": {
      "name": "buildingId",
      "type": "BuildingId"
    },
    "properties": [{
      "name": "name",
      "type": "string"
    },
                   {
                     "name": "description",
                     "type": "string"
                   },
                   {
                     "name": "version",
                     "type": "long"
                   },
                   {
                     "name": "createdBy",
                     "type": "string"
                   },
                   {
                     "name": "createdAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "updatedBy",
                     "type": "string"
                   },
                   {
                     "name": "updatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "active",
                     "type": "bool"
                   },
                   {
                     "name": "deleted",
                     "type": "bool"
                   },
                   {
                     "name": "gardenAddress",
                     "type": "string"
                   },
                   {
                     "name": "gardenCity",
                     "type": "string"
                   },
                   {
                     "name": "gardenVersion",
                     "type": "long"
                   },
                   {
                     "name": "gardenCreatedBy",
                     "type": "string"
                   },
                   {
                     "name": "gardenCreatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "gardenUpdatedBy",
                     "type": "string"
                   },
                   {
                     "name": "gardenUpdatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "gardenActive",
                     "type": "bool"
                   },
                   {
                     "name": "gardenDeleted",
                     "type": "bool"
                   }]
  },
  {
    "name": "RoomMvo",
    "plural": "RoomMvos",
    "label": "Room Mvo",
    "collectionLabel": "Room Mvos",
    "id": {
      "name": "roomId",
      "type": "RoomId"
    },
    "properties": [{
      "name": "name",
      "type": "string"
    },
                   {
                     "name": "description",
                     "type": "string"
                   },
                   {
                     "name": "version",
                     "type": "long"
                   },
                   {
                     "name": "createdBy",
                     "type": "string"
                   },
                   {
                     "name": "createdAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "updatedBy",
                     "type": "string"
                   },
                   {
                     "name": "updatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "active",
                     "type": "bool"
                   },
                   {
                     "name": "deleted",
                     "type": "bool"
                   },
                   {
                     "name": "buildingName",
                     "type": "string"
                   },
                   {
                     "name": "buildingDescription",
                     "type": "string"
                   },
                   {
                     "name": "buildingVersion",
                     "type": "long"
                   },
                   {
                     "name": "buildingCreatedBy",
                     "type": "string"
                   },
                   {
                     "name": "buildingCreatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "buildingUpdatedBy",
                     "type": "string"
                   },
                   {
                     "name": "buildingUpdatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "buildingActive",
                     "type": "bool"
                   },
                   {
                     "name": "buildingDeleted",
                     "type": "bool"
                   },
                   {
                     "name": "gardenAddress",
                     "type": "string"
                   },
                   {
                     "name": "gardenCity",
                     "type": "string"
                   },
                   {
                     "name": "gardenVersion",
                     "type": "long"
                   },
                   {
                     "name": "gardenCreatedBy",
                     "type": "string"
                   },
                   {
                     "name": "gardenCreatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "gardenUpdatedBy",
                     "type": "string"
                   },
                   {
                     "name": "gardenUpdatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "gardenActive",
                     "type": "bool"
                   },
                   {
                     "name": "gardenDeleted",
                     "type": "bool"
                   }]
  },
  {
    "name": "PackagePartMvo",
    "plural": "PackagePartMvos",
    "label": "Package Part Mvo",
    "collectionLabel": "Package Part Mvos",
    "id": {
      "name": "packagePartId",
      "type": "PackagePartId"
    },
    "properties": [{
      "name": "rowVersion",
      "type": "long"
    },
                   {
                     "name": "packagePartType",
                     "type": "int",
                     enumValuesKey: "PackagePartType"
                   },
                   {
                     "name": "parentPackagePartId",
                     "type": "long"
                   },
                   {
                     "name": "createdBy",
                     "type": "string"
                   },
                   {
                     "name": "createdAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "updatedBy",
                     "type": "string"
                   },
                   {
                     "name": "updatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "active",
                     "type": "bool"
                   },
                   {
                     "name": "deleted",
                     "type": "bool"
                   },
                   {
                     "name": "serialNumber",
                     "type": "string"
                   },
                   {
                     "name": "materialNumber",
                     "type": "string"
                   },
                   {
                     "name": "customerNumber",
                     "type": "string"
                   },
                   {
                     "name": "workOrderNumber",
                     "type": "string"
                   },
                   {
                     "name": "lotNumber",
                     "type": "string"
                   },
                   {
                     "name": "rank",
                     "type": "string"
                   },
                   {
                     "name": "version",
                     "type": "string"
                   },
                   {
                     "name": "quantity",
                     "type": "int"
                   },
                   {
                     "name": "isMixed",
                     "type": "bool"
                   },
                   {
                     "name": "packageRowVersion",
                     "type": "long"
                   },
                   {
                     "name": "packagePackageType",
                     "type": "int",
                     enumValuesKey: "PackageType"
                   },
                   {
                     "name": "packageCreatedBy",
                     "type": "string"
                   },
                   {
                     "name": "packageCreatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "packageUpdatedBy",
                     "type": "string"
                   },
                   {
                     "name": "packageUpdatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "packageActive",
                     "type": "bool"
                   },
                   {
                     "name": "packageDeleted",
                     "type": "bool"
                   },
                   {
                     "name": "packageSerialNumber",
                     "type": "string"
                   },
                   {
                     "name": "packageMaterialNumber",
                     "type": "string"
                   },
                   {
                     "name": "packageCustomerNumber",
                     "type": "string"
                   },
                   {
                     "name": "packageWorkOrderNumber",
                     "type": "string"
                   },
                   {
                     "name": "packageLotNumber",
                     "type": "string"
                   },
                   {
                     "name": "packageRank",
                     "type": "string"
                   },
                   {
                     "name": "packageVersion",
                     "type": "string"
                   },
                   {
                     "name": "packageQuantity",
                     "type": "int"
                   },
                   {
                     "name": "packageIsMixed",
                     "type": "bool"
                   }]
  },
  {
    "name": "YearPlanMvo",
    "plural": "YearPlanMvos",
    "label": "Year Plan Mvo",
    "collectionLabel": "Year Plan Mvos",
    "id": {
      "name": "yearPlanId",
      "type": "YearPlanId"
    },
    "properties": [{
      "name": "description",
      "type": "string"
    },
                   {
                     "name": "createdBy",
                     "type": "string"
                   },
                   {
                     "name": "updatedBy",
                     "type": "string"
                   },
                   {
                     "name": "version",
                     "type": "long"
                   },
                   {
                     "name": "createdAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "updatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "active",
                     "type": "bool"
                   },
                   {
                     "name": "deleted",
                     "type": "bool"
                   },
                   {
                     "name": "personRefToEntInAnotherAggInst",
                     "type": "PackagePartId"
                   },
                   {
                     "name": "personBirthDate",
                     "type": "DateTime"
                   },
                   {
                     "name": "personLoves",
                     "type": "PersonalName"
                   },
                   {
                     "name": "personEmergencyContact",
                     "type": "Contact"
                   },
                   {
                     "name": "personEmail",
                     "type": "string"
                   },
                   {
                     "name": "personCreatedBy",
                     "type": "string"
                   },
                   {
                     "name": "personUpdatedBy",
                     "type": "string"
                   },
                   {
                     "name": "personVersion",
                     "type": "long"
                   },
                   {
                     "name": "personCreatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "personUpdatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "personActive",
                     "type": "bool"
                   },
                   {
                     "name": "personDeleted",
                     "type": "bool"
                   }]
  },
  {
    "name": "MonthPlanMvo",
    "plural": "MonthPlanMvos",
    "label": "Month Plan Mvo",
    "collectionLabel": "Month Plan Mvos",
    "id": {
      "name": "monthPlanId",
      "type": "MonthPlanId"
    },
    "properties": [{
      "name": "description",
      "type": "string"
    },
                   {
                     "name": "createdBy",
                     "type": "string"
                   },
                   {
                     "name": "updatedBy",
                     "type": "string"
                   },
                   {
                     "name": "version",
                     "type": "long"
                   },
                   {
                     "name": "createdAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "updatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "active",
                     "type": "bool"
                   },
                   {
                     "name": "deleted",
                     "type": "bool"
                   },
                   {
                     "name": "yearPlanDescription",
                     "type": "string"
                   },
                   {
                     "name": "yearPlanCreatedBy",
                     "type": "string"
                   },
                   {
                     "name": "yearPlanUpdatedBy",
                     "type": "string"
                   },
                   {
                     "name": "yearPlanVersion",
                     "type": "long"
                   },
                   {
                     "name": "yearPlanCreatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "yearPlanUpdatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "yearPlanActive",
                     "type": "bool"
                   },
                   {
                     "name": "yearPlanDeleted",
                     "type": "bool"
                   },
                   {
                     "name": "personRefToEntInAnotherAggInst",
                     "type": "PackagePartId"
                   },
                   {
                     "name": "personBirthDate",
                     "type": "DateTime"
                   },
                   {
                     "name": "personLoves",
                     "type": "PersonalName"
                   },
                   {
                     "name": "personEmergencyContact",
                     "type": "Contact"
                   },
                   {
                     "name": "personEmail",
                     "type": "string"
                   },
                   {
                     "name": "personCreatedBy",
                     "type": "string"
                   },
                   {
                     "name": "personUpdatedBy",
                     "type": "string"
                   },
                   {
                     "name": "personVersion",
                     "type": "long"
                   },
                   {
                     "name": "personCreatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "personUpdatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "personActive",
                     "type": "bool"
                   },
                   {
                     "name": "personDeleted",
                     "type": "bool"
                   }]
  },
  {
    "name": "DayPlanMvo",
    "plural": "DayPlanMvos",
    "label": "Day Plan Mvo",
    "collectionLabel": "Day Plan Mvos",
    "id": {
      "name": "dayPlanId",
      "type": "DayPlanId"
    },
    "properties": [{
      "name": "description",
      "type": "string"
    },
                   {
                     "name": "createdBy",
                     "type": "string"
                   },
                   {
                     "name": "updatedBy",
                     "type": "string"
                   },
                   {
                     "name": "version",
                     "type": "long"
                   },
                   {
                     "name": "createdAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "updatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "active",
                     "type": "bool"
                   },
                   {
                     "name": "deleted",
                     "type": "bool"
                   },
                   {
                     "name": "monthPlanDescription",
                     "type": "string"
                   },
                   {
                     "name": "monthPlanCreatedBy",
                     "type": "string"
                   },
                   {
                     "name": "monthPlanUpdatedBy",
                     "type": "string"
                   },
                   {
                     "name": "monthPlanVersion",
                     "type": "long"
                   },
                   {
                     "name": "monthPlanCreatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "monthPlanUpdatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "monthPlanActive",
                     "type": "bool"
                   },
                   {
                     "name": "monthPlanDeleted",
                     "type": "bool"
                   },
                   {
                     "name": "yearPlanDescription",
                     "type": "string"
                   },
                   {
                     "name": "yearPlanCreatedBy",
                     "type": "string"
                   },
                   {
                     "name": "yearPlanUpdatedBy",
                     "type": "string"
                   },
                   {
                     "name": "yearPlanVersion",
                     "type": "long"
                   },
                   {
                     "name": "yearPlanCreatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "yearPlanUpdatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "yearPlanActive",
                     "type": "bool"
                   },
                   {
                     "name": "yearPlanDeleted",
                     "type": "bool"
                   },
                   {
                     "name": "personRefToEntInAnotherAggInst",
                     "type": "PackagePartId"
                   },
                   {
                     "name": "personBirthDate",
                     "type": "DateTime"
                   },
                   {
                     "name": "personLoves",
                     "type": "PersonalName"
                   },
                   {
                     "name": "personEmergencyContact",
                     "type": "Contact"
                   },
                   {
                     "name": "personEmail",
                     "type": "string"
                   },
                   {
                     "name": "personCreatedBy",
                     "type": "string"
                   },
                   {
                     "name": "personUpdatedBy",
                     "type": "string"
                   },
                   {
                     "name": "personVersion",
                     "type": "long"
                   },
                   {
                     "name": "personCreatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "personUpdatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "personActive",
                     "type": "bool"
                   },
                   {
                     "name": "personDeleted",
                     "type": "bool"
                   }]
  },
  {
    "name": "MovementEntryMvo",
    "plural": "MovementEntryMvos",
    "label": "Movement Entry Mvo",
    "collectionLabel": "Movement Entry Mvos",
    "id": {
      "name": "movementEntryId",
      "type": "MovementEntryId"
    },
    "properties": [{
      "name": "locatorId",
      "type": "string"
    },
                   {
                     "name": "productId",
                     "type": "string"
                   },
                   {
                     "name": "quantity",
                     "type": "int"
                   },
                   {
                     "name": "storageQuantity",
                     "type": "int"
                   },
                   {
                     "name": "taskState",
                     "type": "string"
                   },
                   {
                     "name": "storageVersion",
                     "type": "long"
                   },
                   {
                     "name": "taskCommandId",
                     "type": "string"
                   },
                   {
                     "name": "errorName",
                     "type": "string"
                   },
                   {
                     "name": "version",
                     "type": "long"
                   },
                   {
                     "name": "createdBy",
                     "type": "string"
                   },
                   {
                     "name": "createdAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "updatedBy",
                     "type": "string"
                   },
                   {
                     "name": "updatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "active",
                     "type": "bool"
                   },
                   {
                     "name": "deleted",
                     "type": "bool"
                   },
                   {
                     "name": "movementTransactionSourceLocatorId",
                     "type": "string"
                   },
                   {
                     "name": "movementTransactionTargetLocatorId",
                     "type": "string"
                   },
                   {
                     "name": "movementTransactionProductId",
                     "type": "string"
                   },
                   {
                     "name": "movementTransactionQuantity",
                     "type": "int"
                   },
                   {
                     "name": "movementTransactionIsInSameHouse",
                     "type": "bool"
                   },
                   {
                     "name": "movementTransactionProcessState",
                     "type": "string"
                   },
                   {
                     "name": "movementTransactionErrorName",
                     "type": "string"
                   },
                   {
                     "name": "movementTransactionMessage",
                     "type": "string"
                   },
                   {
                     "name": "movementTransactionVersion",
                     "type": "long"
                   },
                   {
                     "name": "movementTransactionCreatedBy",
                     "type": "string"
                   },
                   {
                     "name": "movementTransactionCreatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "movementTransactionUpdatedBy",
                     "type": "string"
                   },
                   {
                     "name": "movementTransactionUpdatedAt",
                     "type": "DateTime"
                   },
                   {
                     "name": "movementTransactionActive",
                     "type": "bool"
                   },
                   {
                     "name": "movementTransactionDeleted",
                     "type": "bool"
                   }]
  }
]

exports.metadata = AGGREGATES_METADATA;