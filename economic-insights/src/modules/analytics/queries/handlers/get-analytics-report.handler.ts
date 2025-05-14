src/
└── modules/
    └── analytics/
        ├── analytics.controller.ts
        ├── analytics.service.ts
        ├── dto/
        │   ├── create-analytics.dto.ts
        │   ├── filter-analytics.dto.ts
        │   └── analytics-response.dto.ts
        ├── entities/
        │   └── analytics.entity.ts
        ├── commands/
        │   ├── handlers/
        │   │   └── create-analytics.handler.ts
        │   └── impl/
        │       └── create-analytics.command.ts
        ├── queries/
        │   ├── handlers/
        │   │   └── get-analytics-by-filter.handler.ts
        │   └── impl/
        │       └── get-analytics-by-filter.query.ts
        └── analytics.module.ts