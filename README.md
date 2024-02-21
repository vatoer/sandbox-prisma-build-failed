# readme

## error

Error: EPERM: operation not permitted - windows - custom schema.prisma location

## possible culprit

I'm using custom location

my schema.prisma location `./prisma/my-db/schema.prisma`

```prisma
generator client {
  provider = "prisma-client-js"
  output   = "./generated/client"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Category {
  id       String    @id @default(cuid())
  name     String
}
```

## how to reproduce 

- clone this project
- install
  
  ```sh
  pnpm install
  ```

- generate prisma client
  
  ```sh
  pnpm prisma generate --schema=./prisma/my-db/schema.prisma
  ```

- try to build
  
  ```sh
  pnpm build
  ```

- expected result
  
  no error, build success

- current result

```sh
next build

   ▲ Next.js 14.1.0
   - Environments: .env

   Creating an optimized production build ...
glob error [Error: EPERM: operation not permitted, scandir 'C:\Users\admin\Application Data'] {
  errno: -4048,
  code: 'EPERM',
  syscall: 'scandir',
  path: 'C:\\Users\\admin\\Application Data'
}
Failed to compile.

Error: EPERM: operation not permitted, scandir 'C:\Users\admin\Application Data'


> Build failed because of webpack errors
 ELIFECYCLE  Command failed with exit code 1.
```
