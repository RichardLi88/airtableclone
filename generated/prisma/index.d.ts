
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Base
 * 
 */
export type Base = $Result.DefaultSelection<Prisma.$BasePayload>
/**
 * Model Table
 * 
 */
export type Table = $Result.DefaultSelection<Prisma.$TablePayload>
/**
 * Model Column
 * 
 */
export type Column = $Result.DefaultSelection<Prisma.$ColumnPayload>
/**
 * Model View
 * 
 */
export type View = $Result.DefaultSelection<Prisma.$ViewPayload>
/**
 * Model ViewFilter
 * 
 */
export type ViewFilter = $Result.DefaultSelection<Prisma.$ViewFilterPayload>
/**
 * Model ViewSort
 * 
 */
export type ViewSort = $Result.DefaultSelection<Prisma.$ViewSortPayload>
/**
 * Model ViewColumnVisibility
 * 
 */
export type ViewColumnVisibility = $Result.DefaultSelection<Prisma.$ViewColumnVisibilityPayload>
/**
 * Model Row
 * 
 */
export type Row = $Result.DefaultSelection<Prisma.$RowPayload>
/**
 * Model Cell
 * 
 */
export type Cell = $Result.DefaultSelection<Prisma.$CellPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ColumnType: {
  text: 'text',
  number: 'number',
  date: 'date',
  singleSelect: 'singleSelect',
  multiSelect: 'multiSelect',
  checkbox: 'checkbox',
  url: 'url',
  email: 'email'
};

export type ColumnType = (typeof ColumnType)[keyof typeof ColumnType]


export const ViewType: {
  grid: 'grid',
  kanban: 'kanban'
};

export type ViewType = (typeof ViewType)[keyof typeof ViewType]


export const ViewFilterOperator: {
  equals: 'equals',
  contains: 'contains',
  notContains: 'notContains',
  isEmpty: 'isEmpty',
  isNotEmpty: 'isNotEmpty',
  greaterThan: 'greaterThan',
  lessThan: 'lessThan'
};

export type ViewFilterOperator = (typeof ViewFilterOperator)[keyof typeof ViewFilterOperator]


export const ViewSortDirection: {
  asc: 'asc',
  desc: 'desc'
};

export type ViewSortDirection = (typeof ViewSortDirection)[keyof typeof ViewSortDirection]

}

export type ColumnType = $Enums.ColumnType

export const ColumnType: typeof $Enums.ColumnType

export type ViewType = $Enums.ViewType

export const ViewType: typeof $Enums.ViewType

export type ViewFilterOperator = $Enums.ViewFilterOperator

export const ViewFilterOperator: typeof $Enums.ViewFilterOperator

export type ViewSortDirection = $Enums.ViewSortDirection

export const ViewSortDirection: typeof $Enums.ViewSortDirection

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bases
 * const bases = await prisma.base.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Bases
   * const bases = await prisma.base.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.base`: Exposes CRUD operations for the **Base** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bases
    * const bases = await prisma.base.findMany()
    * ```
    */
  get base(): Prisma.BaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.table`: Exposes CRUD operations for the **Table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tables
    * const tables = await prisma.table.findMany()
    * ```
    */
  get table(): Prisma.TableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.column`: Exposes CRUD operations for the **Column** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Columns
    * const columns = await prisma.column.findMany()
    * ```
    */
  get column(): Prisma.ColumnDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.view`: Exposes CRUD operations for the **View** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Views
    * const views = await prisma.view.findMany()
    * ```
    */
  get view(): Prisma.ViewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.viewFilter`: Exposes CRUD operations for the **ViewFilter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ViewFilters
    * const viewFilters = await prisma.viewFilter.findMany()
    * ```
    */
  get viewFilter(): Prisma.ViewFilterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.viewSort`: Exposes CRUD operations for the **ViewSort** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ViewSorts
    * const viewSorts = await prisma.viewSort.findMany()
    * ```
    */
  get viewSort(): Prisma.ViewSortDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.viewColumnVisibility`: Exposes CRUD operations for the **ViewColumnVisibility** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ViewColumnVisibilities
    * const viewColumnVisibilities = await prisma.viewColumnVisibility.findMany()
    * ```
    */
  get viewColumnVisibility(): Prisma.ViewColumnVisibilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.row`: Exposes CRUD operations for the **Row** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rows
    * const rows = await prisma.row.findMany()
    * ```
    */
  get row(): Prisma.RowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cell`: Exposes CRUD operations for the **Cell** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cells
    * const cells = await prisma.cell.findMany()
    * ```
    */
  get cell(): Prisma.CellDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Base: 'Base',
    Table: 'Table',
    Column: 'Column',
    View: 'View',
    ViewFilter: 'ViewFilter',
    ViewSort: 'ViewSort',
    ViewColumnVisibility: 'ViewColumnVisibility',
    Row: 'Row',
    Cell: 'Cell'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "base" | "table" | "column" | "view" | "viewFilter" | "viewSort" | "viewColumnVisibility" | "row" | "cell"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Base: {
        payload: Prisma.$BasePayload<ExtArgs>
        fields: Prisma.BaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>
          }
          findFirst: {
            args: Prisma.BaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>
          }
          findMany: {
            args: Prisma.BaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>[]
          }
          create: {
            args: Prisma.BaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>
          }
          createMany: {
            args: Prisma.BaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>[]
          }
          delete: {
            args: Prisma.BaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>
          }
          update: {
            args: Prisma.BaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>
          }
          deleteMany: {
            args: Prisma.BaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>[]
          }
          upsert: {
            args: Prisma.BaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>
          }
          aggregate: {
            args: Prisma.BaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBase>
          }
          groupBy: {
            args: Prisma.BaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<BaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.BaseCountArgs<ExtArgs>
            result: $Utils.Optional<BaseCountAggregateOutputType> | number
          }
        }
      }
      Table: {
        payload: Prisma.$TablePayload<ExtArgs>
        fields: Prisma.TableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findFirst: {
            args: Prisma.TableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findMany: {
            args: Prisma.TableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          create: {
            args: Prisma.TableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          createMany: {
            args: Prisma.TableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          delete: {
            args: Prisma.TableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          update: {
            args: Prisma.TableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          deleteMany: {
            args: Prisma.TableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          upsert: {
            args: Prisma.TableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          aggregate: {
            args: Prisma.TableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTable>
          }
          groupBy: {
            args: Prisma.TableGroupByArgs<ExtArgs>
            result: $Utils.Optional<TableGroupByOutputType>[]
          }
          count: {
            args: Prisma.TableCountArgs<ExtArgs>
            result: $Utils.Optional<TableCountAggregateOutputType> | number
          }
        }
      }
      Column: {
        payload: Prisma.$ColumnPayload<ExtArgs>
        fields: Prisma.ColumnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColumnFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColumnFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          findFirst: {
            args: Prisma.ColumnFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColumnFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          findMany: {
            args: Prisma.ColumnFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>[]
          }
          create: {
            args: Prisma.ColumnCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          createMany: {
            args: Prisma.ColumnCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ColumnCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>[]
          }
          delete: {
            args: Prisma.ColumnDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          update: {
            args: Prisma.ColumnUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          deleteMany: {
            args: Prisma.ColumnDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ColumnUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ColumnUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>[]
          }
          upsert: {
            args: Prisma.ColumnUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>
          }
          aggregate: {
            args: Prisma.ColumnAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColumn>
          }
          groupBy: {
            args: Prisma.ColumnGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColumnGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColumnCountArgs<ExtArgs>
            result: $Utils.Optional<ColumnCountAggregateOutputType> | number
          }
        }
      }
      View: {
        payload: Prisma.$ViewPayload<ExtArgs>
        fields: Prisma.ViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          findFirst: {
            args: Prisma.ViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          findMany: {
            args: Prisma.ViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>[]
          }
          create: {
            args: Prisma.ViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          createMany: {
            args: Prisma.ViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>[]
          }
          delete: {
            args: Prisma.ViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          update: {
            args: Prisma.ViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          deleteMany: {
            args: Prisma.ViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>[]
          }
          upsert: {
            args: Prisma.ViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          aggregate: {
            args: Prisma.ViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateView>
          }
          groupBy: {
            args: Prisma.ViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewCountArgs<ExtArgs>
            result: $Utils.Optional<ViewCountAggregateOutputType> | number
          }
        }
      }
      ViewFilter: {
        payload: Prisma.$ViewFilterPayload<ExtArgs>
        fields: Prisma.ViewFilterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewFilterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewFilterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterPayload>
          }
          findFirst: {
            args: Prisma.ViewFilterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewFilterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterPayload>
          }
          findMany: {
            args: Prisma.ViewFilterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterPayload>[]
          }
          create: {
            args: Prisma.ViewFilterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterPayload>
          }
          createMany: {
            args: Prisma.ViewFilterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViewFilterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterPayload>[]
          }
          delete: {
            args: Prisma.ViewFilterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterPayload>
          }
          update: {
            args: Prisma.ViewFilterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterPayload>
          }
          deleteMany: {
            args: Prisma.ViewFilterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewFilterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViewFilterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterPayload>[]
          }
          upsert: {
            args: Prisma.ViewFilterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewFilterPayload>
          }
          aggregate: {
            args: Prisma.ViewFilterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViewFilter>
          }
          groupBy: {
            args: Prisma.ViewFilterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewFilterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewFilterCountArgs<ExtArgs>
            result: $Utils.Optional<ViewFilterCountAggregateOutputType> | number
          }
        }
      }
      ViewSort: {
        payload: Prisma.$ViewSortPayload<ExtArgs>
        fields: Prisma.ViewSortFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewSortFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewSortPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewSortFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewSortPayload>
          }
          findFirst: {
            args: Prisma.ViewSortFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewSortPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewSortFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewSortPayload>
          }
          findMany: {
            args: Prisma.ViewSortFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewSortPayload>[]
          }
          create: {
            args: Prisma.ViewSortCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewSortPayload>
          }
          createMany: {
            args: Prisma.ViewSortCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViewSortCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewSortPayload>[]
          }
          delete: {
            args: Prisma.ViewSortDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewSortPayload>
          }
          update: {
            args: Prisma.ViewSortUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewSortPayload>
          }
          deleteMany: {
            args: Prisma.ViewSortDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewSortUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViewSortUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewSortPayload>[]
          }
          upsert: {
            args: Prisma.ViewSortUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewSortPayload>
          }
          aggregate: {
            args: Prisma.ViewSortAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViewSort>
          }
          groupBy: {
            args: Prisma.ViewSortGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewSortGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewSortCountArgs<ExtArgs>
            result: $Utils.Optional<ViewSortCountAggregateOutputType> | number
          }
        }
      }
      ViewColumnVisibility: {
        payload: Prisma.$ViewColumnVisibilityPayload<ExtArgs>
        fields: Prisma.ViewColumnVisibilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewColumnVisibilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewColumnVisibilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewColumnVisibilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewColumnVisibilityPayload>
          }
          findFirst: {
            args: Prisma.ViewColumnVisibilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewColumnVisibilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewColumnVisibilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewColumnVisibilityPayload>
          }
          findMany: {
            args: Prisma.ViewColumnVisibilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewColumnVisibilityPayload>[]
          }
          create: {
            args: Prisma.ViewColumnVisibilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewColumnVisibilityPayload>
          }
          createMany: {
            args: Prisma.ViewColumnVisibilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViewColumnVisibilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewColumnVisibilityPayload>[]
          }
          delete: {
            args: Prisma.ViewColumnVisibilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewColumnVisibilityPayload>
          }
          update: {
            args: Prisma.ViewColumnVisibilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewColumnVisibilityPayload>
          }
          deleteMany: {
            args: Prisma.ViewColumnVisibilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewColumnVisibilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViewColumnVisibilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewColumnVisibilityPayload>[]
          }
          upsert: {
            args: Prisma.ViewColumnVisibilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewColumnVisibilityPayload>
          }
          aggregate: {
            args: Prisma.ViewColumnVisibilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViewColumnVisibility>
          }
          groupBy: {
            args: Prisma.ViewColumnVisibilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewColumnVisibilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewColumnVisibilityCountArgs<ExtArgs>
            result: $Utils.Optional<ViewColumnVisibilityCountAggregateOutputType> | number
          }
        }
      }
      Row: {
        payload: Prisma.$RowPayload<ExtArgs>
        fields: Prisma.RowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RowPayload>
          }
          findFirst: {
            args: Prisma.RowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RowPayload>
          }
          findMany: {
            args: Prisma.RowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RowPayload>[]
          }
          create: {
            args: Prisma.RowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RowPayload>
          }
          createMany: {
            args: Prisma.RowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RowPayload>[]
          }
          delete: {
            args: Prisma.RowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RowPayload>
          }
          update: {
            args: Prisma.RowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RowPayload>
          }
          deleteMany: {
            args: Prisma.RowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RowPayload>[]
          }
          upsert: {
            args: Prisma.RowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RowPayload>
          }
          aggregate: {
            args: Prisma.RowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRow>
          }
          groupBy: {
            args: Prisma.RowGroupByArgs<ExtArgs>
            result: $Utils.Optional<RowGroupByOutputType>[]
          }
          count: {
            args: Prisma.RowCountArgs<ExtArgs>
            result: $Utils.Optional<RowCountAggregateOutputType> | number
          }
        }
      }
      Cell: {
        payload: Prisma.$CellPayload<ExtArgs>
        fields: Prisma.CellFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CellFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CellFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>
          }
          findFirst: {
            args: Prisma.CellFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CellFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>
          }
          findMany: {
            args: Prisma.CellFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>[]
          }
          create: {
            args: Prisma.CellCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>
          }
          createMany: {
            args: Prisma.CellCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CellCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>[]
          }
          delete: {
            args: Prisma.CellDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>
          }
          update: {
            args: Prisma.CellUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>
          }
          deleteMany: {
            args: Prisma.CellDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CellUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CellUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>[]
          }
          upsert: {
            args: Prisma.CellUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>
          }
          aggregate: {
            args: Prisma.CellAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCell>
          }
          groupBy: {
            args: Prisma.CellGroupByArgs<ExtArgs>
            result: $Utils.Optional<CellGroupByOutputType>[]
          }
          count: {
            args: Prisma.CellCountArgs<ExtArgs>
            result: $Utils.Optional<CellCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    base?: BaseOmit
    table?: TableOmit
    column?: ColumnOmit
    view?: ViewOmit
    viewFilter?: ViewFilterOmit
    viewSort?: ViewSortOmit
    viewColumnVisibility?: ViewColumnVisibilityOmit
    row?: RowOmit
    cell?: CellOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BaseCountOutputType
   */

  export type BaseCountOutputType = {
    tables: number
  }

  export type BaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tables?: boolean | BaseCountOutputTypeCountTablesArgs
  }

  // Custom InputTypes
  /**
   * BaseCountOutputType without action
   */
  export type BaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseCountOutputType
     */
    select?: BaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BaseCountOutputType without action
   */
  export type BaseCountOutputTypeCountTablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableWhereInput
  }


  /**
   * Count Type TableCountOutputType
   */

  export type TableCountOutputType = {
    columns: number
    rows: number
    views: number
  }

  export type TableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    columns?: boolean | TableCountOutputTypeCountColumnsArgs
    rows?: boolean | TableCountOutputTypeCountRowsArgs
    views?: boolean | TableCountOutputTypeCountViewsArgs
  }

  // Custom InputTypes
  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableCountOutputType
     */
    select?: TableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountColumnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColumnWhereInput
  }

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountRowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RowWhereInput
  }

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewWhereInput
  }


  /**
   * Count Type ColumnCountOutputType
   */

  export type ColumnCountOutputType = {
    cells: number
    viewFilters: number
    viewSorts: number
    viewColumnVisibilities: number
  }

  export type ColumnCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cells?: boolean | ColumnCountOutputTypeCountCellsArgs
    viewFilters?: boolean | ColumnCountOutputTypeCountViewFiltersArgs
    viewSorts?: boolean | ColumnCountOutputTypeCountViewSortsArgs
    viewColumnVisibilities?: boolean | ColumnCountOutputTypeCountViewColumnVisibilitiesArgs
  }

  // Custom InputTypes
  /**
   * ColumnCountOutputType without action
   */
  export type ColumnCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColumnCountOutputType
     */
    select?: ColumnCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ColumnCountOutputType without action
   */
  export type ColumnCountOutputTypeCountCellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CellWhereInput
  }

  /**
   * ColumnCountOutputType without action
   */
  export type ColumnCountOutputTypeCountViewFiltersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewFilterWhereInput
  }

  /**
   * ColumnCountOutputType without action
   */
  export type ColumnCountOutputTypeCountViewSortsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewSortWhereInput
  }

  /**
   * ColumnCountOutputType without action
   */
  export type ColumnCountOutputTypeCountViewColumnVisibilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewColumnVisibilityWhereInput
  }


  /**
   * Count Type ViewCountOutputType
   */

  export type ViewCountOutputType = {
    filters: number
    sorts: number
    columnVisibilities: number
  }

  export type ViewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filters?: boolean | ViewCountOutputTypeCountFiltersArgs
    sorts?: boolean | ViewCountOutputTypeCountSortsArgs
    columnVisibilities?: boolean | ViewCountOutputTypeCountColumnVisibilitiesArgs
  }

  // Custom InputTypes
  /**
   * ViewCountOutputType without action
   */
  export type ViewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewCountOutputType
     */
    select?: ViewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ViewCountOutputType without action
   */
  export type ViewCountOutputTypeCountFiltersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewFilterWhereInput
  }

  /**
   * ViewCountOutputType without action
   */
  export type ViewCountOutputTypeCountSortsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewSortWhereInput
  }

  /**
   * ViewCountOutputType without action
   */
  export type ViewCountOutputTypeCountColumnVisibilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewColumnVisibilityWhereInput
  }


  /**
   * Count Type RowCountOutputType
   */

  export type RowCountOutputType = {
    cells: number
  }

  export type RowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cells?: boolean | RowCountOutputTypeCountCellsArgs
  }

  // Custom InputTypes
  /**
   * RowCountOutputType without action
   */
  export type RowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RowCountOutputType
     */
    select?: RowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RowCountOutputType without action
   */
  export type RowCountOutputTypeCountCellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CellWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Base
   */

  export type AggregateBase = {
    _count: BaseCountAggregateOutputType | null
    _avg: BaseAvgAggregateOutputType | null
    _sum: BaseSumAggregateOutputType | null
    _min: BaseMinAggregateOutputType | null
    _max: BaseMaxAggregateOutputType | null
  }

  export type BaseAvgAggregateOutputType = {
    id: number | null
  }

  export type BaseSumAggregateOutputType = {
    id: number | null
  }

  export type BaseMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BaseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BaseCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BaseAvgAggregateInputType = {
    id?: true
  }

  export type BaseSumAggregateInputType = {
    id?: true
  }

  export type BaseMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BaseMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BaseCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Base to aggregate.
     */
    where?: BaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bases to fetch.
     */
    orderBy?: BaseOrderByWithRelationInput | BaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bases
    **/
    _count?: true | BaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BaseMaxAggregateInputType
  }

  export type GetBaseAggregateType<T extends BaseAggregateArgs> = {
        [P in keyof T & keyof AggregateBase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBase[P]>
      : GetScalarType<T[P], AggregateBase[P]>
  }




  export type BaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BaseWhereInput
    orderBy?: BaseOrderByWithAggregationInput | BaseOrderByWithAggregationInput[]
    by: BaseScalarFieldEnum[] | BaseScalarFieldEnum
    having?: BaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BaseCountAggregateInputType | true
    _avg?: BaseAvgAggregateInputType
    _sum?: BaseSumAggregateInputType
    _min?: BaseMinAggregateInputType
    _max?: BaseMaxAggregateInputType
  }

  export type BaseGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: BaseCountAggregateOutputType | null
    _avg: BaseAvgAggregateOutputType | null
    _sum: BaseSumAggregateOutputType | null
    _min: BaseMinAggregateOutputType | null
    _max: BaseMaxAggregateOutputType | null
  }

  type GetBaseGroupByPayload<T extends BaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BaseGroupByOutputType[P]>
            : GetScalarType<T[P], BaseGroupByOutputType[P]>
        }
      >
    >


  export type BaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tables?: boolean | Base$tablesArgs<ExtArgs>
    _count?: boolean | BaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["base"]>

  export type BaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["base"]>

  export type BaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["base"]>

  export type BaseSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["base"]>
  export type BaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tables?: boolean | Base$tablesArgs<ExtArgs>
    _count?: boolean | BaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Base"
    objects: {
      tables: Prisma.$TablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["base"]>
    composites: {}
  }

  type BaseGetPayload<S extends boolean | null | undefined | BaseDefaultArgs> = $Result.GetResult<Prisma.$BasePayload, S>

  type BaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BaseCountAggregateInputType | true
    }

  export interface BaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Base'], meta: { name: 'Base' } }
    /**
     * Find zero or one Base that matches the filter.
     * @param {BaseFindUniqueArgs} args - Arguments to find a Base
     * @example
     * // Get one Base
     * const base = await prisma.base.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BaseFindUniqueArgs>(args: SelectSubset<T, BaseFindUniqueArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Base that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BaseFindUniqueOrThrowArgs} args - Arguments to find a Base
     * @example
     * // Get one Base
     * const base = await prisma.base.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BaseFindUniqueOrThrowArgs>(args: SelectSubset<T, BaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Base that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseFindFirstArgs} args - Arguments to find a Base
     * @example
     * // Get one Base
     * const base = await prisma.base.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BaseFindFirstArgs>(args?: SelectSubset<T, BaseFindFirstArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Base that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseFindFirstOrThrowArgs} args - Arguments to find a Base
     * @example
     * // Get one Base
     * const base = await prisma.base.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BaseFindFirstOrThrowArgs>(args?: SelectSubset<T, BaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bases
     * const bases = await prisma.base.findMany()
     * 
     * // Get first 10 Bases
     * const bases = await prisma.base.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const baseWithIdOnly = await prisma.base.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BaseFindManyArgs>(args?: SelectSubset<T, BaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Base.
     * @param {BaseCreateArgs} args - Arguments to create a Base.
     * @example
     * // Create one Base
     * const Base = await prisma.base.create({
     *   data: {
     *     // ... data to create a Base
     *   }
     * })
     * 
     */
    create<T extends BaseCreateArgs>(args: SelectSubset<T, BaseCreateArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bases.
     * @param {BaseCreateManyArgs} args - Arguments to create many Bases.
     * @example
     * // Create many Bases
     * const base = await prisma.base.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BaseCreateManyArgs>(args?: SelectSubset<T, BaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bases and returns the data saved in the database.
     * @param {BaseCreateManyAndReturnArgs} args - Arguments to create many Bases.
     * @example
     * // Create many Bases
     * const base = await prisma.base.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bases and only return the `id`
     * const baseWithIdOnly = await prisma.base.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BaseCreateManyAndReturnArgs>(args?: SelectSubset<T, BaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Base.
     * @param {BaseDeleteArgs} args - Arguments to delete one Base.
     * @example
     * // Delete one Base
     * const Base = await prisma.base.delete({
     *   where: {
     *     // ... filter to delete one Base
     *   }
     * })
     * 
     */
    delete<T extends BaseDeleteArgs>(args: SelectSubset<T, BaseDeleteArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Base.
     * @param {BaseUpdateArgs} args - Arguments to update one Base.
     * @example
     * // Update one Base
     * const base = await prisma.base.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BaseUpdateArgs>(args: SelectSubset<T, BaseUpdateArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bases.
     * @param {BaseDeleteManyArgs} args - Arguments to filter Bases to delete.
     * @example
     * // Delete a few Bases
     * const { count } = await prisma.base.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BaseDeleteManyArgs>(args?: SelectSubset<T, BaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bases
     * const base = await prisma.base.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BaseUpdateManyArgs>(args: SelectSubset<T, BaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bases and returns the data updated in the database.
     * @param {BaseUpdateManyAndReturnArgs} args - Arguments to update many Bases.
     * @example
     * // Update many Bases
     * const base = await prisma.base.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bases and only return the `id`
     * const baseWithIdOnly = await prisma.base.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BaseUpdateManyAndReturnArgs>(args: SelectSubset<T, BaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Base.
     * @param {BaseUpsertArgs} args - Arguments to update or create a Base.
     * @example
     * // Update or create a Base
     * const base = await prisma.base.upsert({
     *   create: {
     *     // ... data to create a Base
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Base we want to update
     *   }
     * })
     */
    upsert<T extends BaseUpsertArgs>(args: SelectSubset<T, BaseUpsertArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseCountArgs} args - Arguments to filter Bases to count.
     * @example
     * // Count the number of Bases
     * const count = await prisma.base.count({
     *   where: {
     *     // ... the filter for the Bases we want to count
     *   }
     * })
    **/
    count<T extends BaseCountArgs>(
      args?: Subset<T, BaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Base.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BaseAggregateArgs>(args: Subset<T, BaseAggregateArgs>): Prisma.PrismaPromise<GetBaseAggregateType<T>>

    /**
     * Group by Base.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BaseGroupByArgs['orderBy'] }
        : { orderBy?: BaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Base model
   */
  readonly fields: BaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Base.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tables<T extends Base$tablesArgs<ExtArgs> = {}>(args?: Subset<T, Base$tablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Base model
   */
  interface BaseFieldRefs {
    readonly id: FieldRef<"Base", 'Int'>
    readonly name: FieldRef<"Base", 'String'>
    readonly createdAt: FieldRef<"Base", 'DateTime'>
    readonly updatedAt: FieldRef<"Base", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Base findUnique
   */
  export type BaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * Filter, which Base to fetch.
     */
    where: BaseWhereUniqueInput
  }

  /**
   * Base findUniqueOrThrow
   */
  export type BaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * Filter, which Base to fetch.
     */
    where: BaseWhereUniqueInput
  }

  /**
   * Base findFirst
   */
  export type BaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * Filter, which Base to fetch.
     */
    where?: BaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bases to fetch.
     */
    orderBy?: BaseOrderByWithRelationInput | BaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bases.
     */
    cursor?: BaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bases.
     */
    distinct?: BaseScalarFieldEnum | BaseScalarFieldEnum[]
  }

  /**
   * Base findFirstOrThrow
   */
  export type BaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * Filter, which Base to fetch.
     */
    where?: BaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bases to fetch.
     */
    orderBy?: BaseOrderByWithRelationInput | BaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bases.
     */
    cursor?: BaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bases.
     */
    distinct?: BaseScalarFieldEnum | BaseScalarFieldEnum[]
  }

  /**
   * Base findMany
   */
  export type BaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * Filter, which Bases to fetch.
     */
    where?: BaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bases to fetch.
     */
    orderBy?: BaseOrderByWithRelationInput | BaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bases.
     */
    cursor?: BaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bases.
     */
    skip?: number
    distinct?: BaseScalarFieldEnum | BaseScalarFieldEnum[]
  }

  /**
   * Base create
   */
  export type BaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Base.
     */
    data: XOR<BaseCreateInput, BaseUncheckedCreateInput>
  }

  /**
   * Base createMany
   */
  export type BaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bases.
     */
    data: BaseCreateManyInput | BaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Base createManyAndReturn
   */
  export type BaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * The data used to create many Bases.
     */
    data: BaseCreateManyInput | BaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Base update
   */
  export type BaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Base.
     */
    data: XOR<BaseUpdateInput, BaseUncheckedUpdateInput>
    /**
     * Choose, which Base to update.
     */
    where: BaseWhereUniqueInput
  }

  /**
   * Base updateMany
   */
  export type BaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bases.
     */
    data: XOR<BaseUpdateManyMutationInput, BaseUncheckedUpdateManyInput>
    /**
     * Filter which Bases to update
     */
    where?: BaseWhereInput
    /**
     * Limit how many Bases to update.
     */
    limit?: number
  }

  /**
   * Base updateManyAndReturn
   */
  export type BaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * The data used to update Bases.
     */
    data: XOR<BaseUpdateManyMutationInput, BaseUncheckedUpdateManyInput>
    /**
     * Filter which Bases to update
     */
    where?: BaseWhereInput
    /**
     * Limit how many Bases to update.
     */
    limit?: number
  }

  /**
   * Base upsert
   */
  export type BaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Base to update in case it exists.
     */
    where: BaseWhereUniqueInput
    /**
     * In case the Base found by the `where` argument doesn't exist, create a new Base with this data.
     */
    create: XOR<BaseCreateInput, BaseUncheckedCreateInput>
    /**
     * In case the Base was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BaseUpdateInput, BaseUncheckedUpdateInput>
  }

  /**
   * Base delete
   */
  export type BaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * Filter which Base to delete.
     */
    where: BaseWhereUniqueInput
  }

  /**
   * Base deleteMany
   */
  export type BaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bases to delete
     */
    where?: BaseWhereInput
    /**
     * Limit how many Bases to delete.
     */
    limit?: number
  }

  /**
   * Base.tables
   */
  export type Base$tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    where?: TableWhereInput
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    cursor?: TableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Base without action
   */
  export type BaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
  }


  /**
   * Model Table
   */

  export type AggregateTable = {
    _count: TableCountAggregateOutputType | null
    _avg: TableAvgAggregateOutputType | null
    _sum: TableSumAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  export type TableAvgAggregateOutputType = {
    id: number | null
    baseId: number | null
  }

  export type TableSumAggregateOutputType = {
    id: number | null
    baseId: number | null
  }

  export type TableMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    baseId: number | null
  }

  export type TableMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    baseId: number | null
  }

  export type TableCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    baseId: number
    _all: number
  }


  export type TableAvgAggregateInputType = {
    id?: true
    baseId?: true
  }

  export type TableSumAggregateInputType = {
    id?: true
    baseId?: true
  }

  export type TableMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    baseId?: true
  }

  export type TableMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    baseId?: true
  }

  export type TableCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    baseId?: true
    _all?: true
  }

  export type TableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Table to aggregate.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tables
    **/
    _count?: true | TableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableMaxAggregateInputType
  }

  export type GetTableAggregateType<T extends TableAggregateArgs> = {
        [P in keyof T & keyof AggregateTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTable[P]>
      : GetScalarType<T[P], AggregateTable[P]>
  }




  export type TableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableWhereInput
    orderBy?: TableOrderByWithAggregationInput | TableOrderByWithAggregationInput[]
    by: TableScalarFieldEnum[] | TableScalarFieldEnum
    having?: TableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableCountAggregateInputType | true
    _avg?: TableAvgAggregateInputType
    _sum?: TableSumAggregateInputType
    _min?: TableMinAggregateInputType
    _max?: TableMaxAggregateInputType
  }

  export type TableGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    baseId: number
    _count: TableCountAggregateOutputType | null
    _avg: TableAvgAggregateOutputType | null
    _sum: TableSumAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  type GetTableGroupByPayload<T extends TableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableGroupByOutputType[P]>
            : GetScalarType<T[P], TableGroupByOutputType[P]>
        }
      >
    >


  export type TableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    baseId?: boolean
    base?: boolean | BaseDefaultArgs<ExtArgs>
    columns?: boolean | Table$columnsArgs<ExtArgs>
    rows?: boolean | Table$rowsArgs<ExtArgs>
    views?: boolean | Table$viewsArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    baseId?: boolean
    base?: boolean | BaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    baseId?: boolean
    base?: boolean | BaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    baseId?: boolean
  }

  export type TableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "baseId", ExtArgs["result"]["table"]>
  export type TableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    base?: boolean | BaseDefaultArgs<ExtArgs>
    columns?: boolean | Table$columnsArgs<ExtArgs>
    rows?: boolean | Table$rowsArgs<ExtArgs>
    views?: boolean | Table$viewsArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    base?: boolean | BaseDefaultArgs<ExtArgs>
  }
  export type TableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    base?: boolean | BaseDefaultArgs<ExtArgs>
  }

  export type $TablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Table"
    objects: {
      base: Prisma.$BasePayload<ExtArgs>
      columns: Prisma.$ColumnPayload<ExtArgs>[]
      rows: Prisma.$RowPayload<ExtArgs>[]
      views: Prisma.$ViewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
      baseId: number
    }, ExtArgs["result"]["table"]>
    composites: {}
  }

  type TableGetPayload<S extends boolean | null | undefined | TableDefaultArgs> = $Result.GetResult<Prisma.$TablePayload, S>

  type TableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TableCountAggregateInputType | true
    }

  export interface TableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Table'], meta: { name: 'Table' } }
    /**
     * Find zero or one Table that matches the filter.
     * @param {TableFindUniqueArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TableFindUniqueArgs>(args: SelectSubset<T, TableFindUniqueArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TableFindUniqueOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TableFindUniqueOrThrowArgs>(args: SelectSubset<T, TableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TableFindFirstArgs>(args?: SelectSubset<T, TableFindFirstArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TableFindFirstOrThrowArgs>(args?: SelectSubset<T, TableFindFirstOrThrowArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tables
     * const tables = await prisma.table.findMany()
     * 
     * // Get first 10 Tables
     * const tables = await prisma.table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tableWithIdOnly = await prisma.table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TableFindManyArgs>(args?: SelectSubset<T, TableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Table.
     * @param {TableCreateArgs} args - Arguments to create a Table.
     * @example
     * // Create one Table
     * const Table = await prisma.table.create({
     *   data: {
     *     // ... data to create a Table
     *   }
     * })
     * 
     */
    create<T extends TableCreateArgs>(args: SelectSubset<T, TableCreateArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tables.
     * @param {TableCreateManyArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const table = await prisma.table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TableCreateManyArgs>(args?: SelectSubset<T, TableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tables and returns the data saved in the database.
     * @param {TableCreateManyAndReturnArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const table = await prisma.table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tables and only return the `id`
     * const tableWithIdOnly = await prisma.table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TableCreateManyAndReturnArgs>(args?: SelectSubset<T, TableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Table.
     * @param {TableDeleteArgs} args - Arguments to delete one Table.
     * @example
     * // Delete one Table
     * const Table = await prisma.table.delete({
     *   where: {
     *     // ... filter to delete one Table
     *   }
     * })
     * 
     */
    delete<T extends TableDeleteArgs>(args: SelectSubset<T, TableDeleteArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Table.
     * @param {TableUpdateArgs} args - Arguments to update one Table.
     * @example
     * // Update one Table
     * const table = await prisma.table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TableUpdateArgs>(args: SelectSubset<T, TableUpdateArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tables.
     * @param {TableDeleteManyArgs} args - Arguments to filter Tables to delete.
     * @example
     * // Delete a few Tables
     * const { count } = await prisma.table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TableDeleteManyArgs>(args?: SelectSubset<T, TableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TableUpdateManyArgs>(args: SelectSubset<T, TableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables and returns the data updated in the database.
     * @param {TableUpdateManyAndReturnArgs} args - Arguments to update many Tables.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tables and only return the `id`
     * const tableWithIdOnly = await prisma.table.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TableUpdateManyAndReturnArgs>(args: SelectSubset<T, TableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Table.
     * @param {TableUpsertArgs} args - Arguments to update or create a Table.
     * @example
     * // Update or create a Table
     * const table = await prisma.table.upsert({
     *   create: {
     *     // ... data to create a Table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Table we want to update
     *   }
     * })
     */
    upsert<T extends TableUpsertArgs>(args: SelectSubset<T, TableUpsertArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableCountArgs} args - Arguments to filter Tables to count.
     * @example
     * // Count the number of Tables
     * const count = await prisma.table.count({
     *   where: {
     *     // ... the filter for the Tables we want to count
     *   }
     * })
    **/
    count<T extends TableCountArgs>(
      args?: Subset<T, TableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TableAggregateArgs>(args: Subset<T, TableAggregateArgs>): Prisma.PrismaPromise<GetTableAggregateType<T>>

    /**
     * Group by Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TableGroupByArgs['orderBy'] }
        : { orderBy?: TableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Table model
   */
  readonly fields: TableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    base<T extends BaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BaseDefaultArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    columns<T extends Table$columnsArgs<ExtArgs> = {}>(args?: Subset<T, Table$columnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rows<T extends Table$rowsArgs<ExtArgs> = {}>(args?: Subset<T, Table$rowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    views<T extends Table$viewsArgs<ExtArgs> = {}>(args?: Subset<T, Table$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Table model
   */
  interface TableFieldRefs {
    readonly id: FieldRef<"Table", 'Int'>
    readonly name: FieldRef<"Table", 'String'>
    readonly createdAt: FieldRef<"Table", 'DateTime'>
    readonly updatedAt: FieldRef<"Table", 'DateTime'>
    readonly baseId: FieldRef<"Table", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Table findUnique
   */
  export type TableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table findUniqueOrThrow
   */
  export type TableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table findFirst
   */
  export type TableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table findFirstOrThrow
   */
  export type TableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table findMany
   */
  export type TableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Tables to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table create
   */
  export type TableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to create a Table.
     */
    data: XOR<TableCreateInput, TableUncheckedCreateInput>
  }

  /**
   * Table createMany
   */
  export type TableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tables.
     */
    data: TableCreateManyInput | TableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Table createManyAndReturn
   */
  export type TableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * The data used to create many Tables.
     */
    data: TableCreateManyInput | TableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Table update
   */
  export type TableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to update a Table.
     */
    data: XOR<TableUpdateInput, TableUncheckedUpdateInput>
    /**
     * Choose, which Table to update.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table updateMany
   */
  export type TableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tables.
     */
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyInput>
    /**
     * Filter which Tables to update
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to update.
     */
    limit?: number
  }

  /**
   * Table updateManyAndReturn
   */
  export type TableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * The data used to update Tables.
     */
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyInput>
    /**
     * Filter which Tables to update
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Table upsert
   */
  export type TableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The filter to search for the Table to update in case it exists.
     */
    where: TableWhereUniqueInput
    /**
     * In case the Table found by the `where` argument doesn't exist, create a new Table with this data.
     */
    create: XOR<TableCreateInput, TableUncheckedCreateInput>
    /**
     * In case the Table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TableUpdateInput, TableUncheckedUpdateInput>
  }

  /**
   * Table delete
   */
  export type TableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter which Table to delete.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table deleteMany
   */
  export type TableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tables to delete
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to delete.
     */
    limit?: number
  }

  /**
   * Table.columns
   */
  export type Table$columnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    where?: ColumnWhereInput
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[]
    cursor?: ColumnWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ColumnScalarFieldEnum | ColumnScalarFieldEnum[]
  }

  /**
   * Table.rows
   */
  export type Table$rowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowInclude<ExtArgs> | null
    where?: RowWhereInput
    orderBy?: RowOrderByWithRelationInput | RowOrderByWithRelationInput[]
    cursor?: RowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RowScalarFieldEnum | RowScalarFieldEnum[]
  }

  /**
   * Table.views
   */
  export type Table$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    where?: ViewWhereInput
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    cursor?: ViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * Table without action
   */
  export type TableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
  }


  /**
   * Model Column
   */

  export type AggregateColumn = {
    _count: ColumnCountAggregateOutputType | null
    _avg: ColumnAvgAggregateOutputType | null
    _sum: ColumnSumAggregateOutputType | null
    _min: ColumnMinAggregateOutputType | null
    _max: ColumnMaxAggregateOutputType | null
  }

  export type ColumnAvgAggregateOutputType = {
    id: number | null
    position: number | null
    tableId: number | null
  }

  export type ColumnSumAggregateOutputType = {
    id: number | null
    position: number | null
    tableId: number | null
  }

  export type ColumnMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.ColumnType | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
    tableId: number | null
  }

  export type ColumnMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.ColumnType | null
    position: number | null
    createdAt: Date | null
    updatedAt: Date | null
    tableId: number | null
  }

  export type ColumnCountAggregateOutputType = {
    id: number
    name: number
    type: number
    position: number
    createdAt: number
    updatedAt: number
    tableId: number
    _all: number
  }


  export type ColumnAvgAggregateInputType = {
    id?: true
    position?: true
    tableId?: true
  }

  export type ColumnSumAggregateInputType = {
    id?: true
    position?: true
    tableId?: true
  }

  export type ColumnMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    tableId?: true
  }

  export type ColumnMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    tableId?: true
  }

  export type ColumnCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    tableId?: true
    _all?: true
  }

  export type ColumnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Column to aggregate.
     */
    where?: ColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Columns
    **/
    _count?: true | ColumnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColumnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColumnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColumnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColumnMaxAggregateInputType
  }

  export type GetColumnAggregateType<T extends ColumnAggregateArgs> = {
        [P in keyof T & keyof AggregateColumn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColumn[P]>
      : GetScalarType<T[P], AggregateColumn[P]>
  }




  export type ColumnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColumnWhereInput
    orderBy?: ColumnOrderByWithAggregationInput | ColumnOrderByWithAggregationInput[]
    by: ColumnScalarFieldEnum[] | ColumnScalarFieldEnum
    having?: ColumnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColumnCountAggregateInputType | true
    _avg?: ColumnAvgAggregateInputType
    _sum?: ColumnSumAggregateInputType
    _min?: ColumnMinAggregateInputType
    _max?: ColumnMaxAggregateInputType
  }

  export type ColumnGroupByOutputType = {
    id: number
    name: string
    type: $Enums.ColumnType
    position: number
    createdAt: Date
    updatedAt: Date
    tableId: number
    _count: ColumnCountAggregateOutputType | null
    _avg: ColumnAvgAggregateOutputType | null
    _sum: ColumnSumAggregateOutputType | null
    _min: ColumnMinAggregateOutputType | null
    _max: ColumnMaxAggregateOutputType | null
  }

  type GetColumnGroupByPayload<T extends ColumnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColumnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColumnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColumnGroupByOutputType[P]>
            : GetScalarType<T[P], ColumnGroupByOutputType[P]>
        }
      >
    >


  export type ColumnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tableId?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
    cells?: boolean | Column$cellsArgs<ExtArgs>
    viewFilters?: boolean | Column$viewFiltersArgs<ExtArgs>
    viewSorts?: boolean | Column$viewSortsArgs<ExtArgs>
    viewColumnVisibilities?: boolean | Column$viewColumnVisibilitiesArgs<ExtArgs>
    _count?: boolean | ColumnCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["column"]>

  export type ColumnSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tableId?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["column"]>

  export type ColumnSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tableId?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["column"]>

  export type ColumnSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tableId?: boolean
  }

  export type ColumnOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "position" | "createdAt" | "updatedAt" | "tableId", ExtArgs["result"]["column"]>
  export type ColumnInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
    cells?: boolean | Column$cellsArgs<ExtArgs>
    viewFilters?: boolean | Column$viewFiltersArgs<ExtArgs>
    viewSorts?: boolean | Column$viewSortsArgs<ExtArgs>
    viewColumnVisibilities?: boolean | Column$viewColumnVisibilitiesArgs<ExtArgs>
    _count?: boolean | ColumnCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ColumnIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
  }
  export type ColumnIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
  }

  export type $ColumnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Column"
    objects: {
      table: Prisma.$TablePayload<ExtArgs>
      cells: Prisma.$CellPayload<ExtArgs>[]
      viewFilters: Prisma.$ViewFilterPayload<ExtArgs>[]
      viewSorts: Prisma.$ViewSortPayload<ExtArgs>[]
      viewColumnVisibilities: Prisma.$ViewColumnVisibilityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: $Enums.ColumnType
      position: number
      createdAt: Date
      updatedAt: Date
      tableId: number
    }, ExtArgs["result"]["column"]>
    composites: {}
  }

  type ColumnGetPayload<S extends boolean | null | undefined | ColumnDefaultArgs> = $Result.GetResult<Prisma.$ColumnPayload, S>

  type ColumnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ColumnFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColumnCountAggregateInputType | true
    }

  export interface ColumnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Column'], meta: { name: 'Column' } }
    /**
     * Find zero or one Column that matches the filter.
     * @param {ColumnFindUniqueArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColumnFindUniqueArgs>(args: SelectSubset<T, ColumnFindUniqueArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Column that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ColumnFindUniqueOrThrowArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColumnFindUniqueOrThrowArgs>(args: SelectSubset<T, ColumnFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Column that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnFindFirstArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColumnFindFirstArgs>(args?: SelectSubset<T, ColumnFindFirstArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Column that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnFindFirstOrThrowArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColumnFindFirstOrThrowArgs>(args?: SelectSubset<T, ColumnFindFirstOrThrowArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Columns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Columns
     * const columns = await prisma.column.findMany()
     * 
     * // Get first 10 Columns
     * const columns = await prisma.column.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const columnWithIdOnly = await prisma.column.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ColumnFindManyArgs>(args?: SelectSubset<T, ColumnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Column.
     * @param {ColumnCreateArgs} args - Arguments to create a Column.
     * @example
     * // Create one Column
     * const Column = await prisma.column.create({
     *   data: {
     *     // ... data to create a Column
     *   }
     * })
     * 
     */
    create<T extends ColumnCreateArgs>(args: SelectSubset<T, ColumnCreateArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Columns.
     * @param {ColumnCreateManyArgs} args - Arguments to create many Columns.
     * @example
     * // Create many Columns
     * const column = await prisma.column.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ColumnCreateManyArgs>(args?: SelectSubset<T, ColumnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Columns and returns the data saved in the database.
     * @param {ColumnCreateManyAndReturnArgs} args - Arguments to create many Columns.
     * @example
     * // Create many Columns
     * const column = await prisma.column.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Columns and only return the `id`
     * const columnWithIdOnly = await prisma.column.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ColumnCreateManyAndReturnArgs>(args?: SelectSubset<T, ColumnCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Column.
     * @param {ColumnDeleteArgs} args - Arguments to delete one Column.
     * @example
     * // Delete one Column
     * const Column = await prisma.column.delete({
     *   where: {
     *     // ... filter to delete one Column
     *   }
     * })
     * 
     */
    delete<T extends ColumnDeleteArgs>(args: SelectSubset<T, ColumnDeleteArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Column.
     * @param {ColumnUpdateArgs} args - Arguments to update one Column.
     * @example
     * // Update one Column
     * const column = await prisma.column.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ColumnUpdateArgs>(args: SelectSubset<T, ColumnUpdateArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Columns.
     * @param {ColumnDeleteManyArgs} args - Arguments to filter Columns to delete.
     * @example
     * // Delete a few Columns
     * const { count } = await prisma.column.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ColumnDeleteManyArgs>(args?: SelectSubset<T, ColumnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Columns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Columns
     * const column = await prisma.column.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ColumnUpdateManyArgs>(args: SelectSubset<T, ColumnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Columns and returns the data updated in the database.
     * @param {ColumnUpdateManyAndReturnArgs} args - Arguments to update many Columns.
     * @example
     * // Update many Columns
     * const column = await prisma.column.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Columns and only return the `id`
     * const columnWithIdOnly = await prisma.column.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ColumnUpdateManyAndReturnArgs>(args: SelectSubset<T, ColumnUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Column.
     * @param {ColumnUpsertArgs} args - Arguments to update or create a Column.
     * @example
     * // Update or create a Column
     * const column = await prisma.column.upsert({
     *   create: {
     *     // ... data to create a Column
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Column we want to update
     *   }
     * })
     */
    upsert<T extends ColumnUpsertArgs>(args: SelectSubset<T, ColumnUpsertArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Columns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnCountArgs} args - Arguments to filter Columns to count.
     * @example
     * // Count the number of Columns
     * const count = await prisma.column.count({
     *   where: {
     *     // ... the filter for the Columns we want to count
     *   }
     * })
    **/
    count<T extends ColumnCountArgs>(
      args?: Subset<T, ColumnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColumnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Column.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ColumnAggregateArgs>(args: Subset<T, ColumnAggregateArgs>): Prisma.PrismaPromise<GetColumnAggregateType<T>>

    /**
     * Group by Column.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ColumnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColumnGroupByArgs['orderBy'] }
        : { orderBy?: ColumnGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ColumnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColumnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Column model
   */
  readonly fields: ColumnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Column.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColumnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    table<T extends TableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TableDefaultArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cells<T extends Column$cellsArgs<ExtArgs> = {}>(args?: Subset<T, Column$cellsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewFilters<T extends Column$viewFiltersArgs<ExtArgs> = {}>(args?: Subset<T, Column$viewFiltersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewSorts<T extends Column$viewSortsArgs<ExtArgs> = {}>(args?: Subset<T, Column$viewSortsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewColumnVisibilities<T extends Column$viewColumnVisibilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Column$viewColumnVisibilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewColumnVisibilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Column model
   */
  interface ColumnFieldRefs {
    readonly id: FieldRef<"Column", 'Int'>
    readonly name: FieldRef<"Column", 'String'>
    readonly type: FieldRef<"Column", 'ColumnType'>
    readonly position: FieldRef<"Column", 'Int'>
    readonly createdAt: FieldRef<"Column", 'DateTime'>
    readonly updatedAt: FieldRef<"Column", 'DateTime'>
    readonly tableId: FieldRef<"Column", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Column findUnique
   */
  export type ColumnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Column to fetch.
     */
    where: ColumnWhereUniqueInput
  }

  /**
   * Column findUniqueOrThrow
   */
  export type ColumnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Column to fetch.
     */
    where: ColumnWhereUniqueInput
  }

  /**
   * Column findFirst
   */
  export type ColumnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Column to fetch.
     */
    where?: ColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Columns.
     */
    cursor?: ColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Columns.
     */
    distinct?: ColumnScalarFieldEnum | ColumnScalarFieldEnum[]
  }

  /**
   * Column findFirstOrThrow
   */
  export type ColumnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Column to fetch.
     */
    where?: ColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Columns.
     */
    cursor?: ColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Columns.
     */
    distinct?: ColumnScalarFieldEnum | ColumnScalarFieldEnum[]
  }

  /**
   * Column findMany
   */
  export type ColumnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter, which Columns to fetch.
     */
    where?: ColumnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Columns.
     */
    cursor?: ColumnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Columns.
     */
    skip?: number
    distinct?: ColumnScalarFieldEnum | ColumnScalarFieldEnum[]
  }

  /**
   * Column create
   */
  export type ColumnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * The data needed to create a Column.
     */
    data: XOR<ColumnCreateInput, ColumnUncheckedCreateInput>
  }

  /**
   * Column createMany
   */
  export type ColumnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Columns.
     */
    data: ColumnCreateManyInput | ColumnCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Column createManyAndReturn
   */
  export type ColumnCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * The data used to create many Columns.
     */
    data: ColumnCreateManyInput | ColumnCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Column update
   */
  export type ColumnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * The data needed to update a Column.
     */
    data: XOR<ColumnUpdateInput, ColumnUncheckedUpdateInput>
    /**
     * Choose, which Column to update.
     */
    where: ColumnWhereUniqueInput
  }

  /**
   * Column updateMany
   */
  export type ColumnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Columns.
     */
    data: XOR<ColumnUpdateManyMutationInput, ColumnUncheckedUpdateManyInput>
    /**
     * Filter which Columns to update
     */
    where?: ColumnWhereInput
    /**
     * Limit how many Columns to update.
     */
    limit?: number
  }

  /**
   * Column updateManyAndReturn
   */
  export type ColumnUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * The data used to update Columns.
     */
    data: XOR<ColumnUpdateManyMutationInput, ColumnUncheckedUpdateManyInput>
    /**
     * Filter which Columns to update
     */
    where?: ColumnWhereInput
    /**
     * Limit how many Columns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Column upsert
   */
  export type ColumnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * The filter to search for the Column to update in case it exists.
     */
    where: ColumnWhereUniqueInput
    /**
     * In case the Column found by the `where` argument doesn't exist, create a new Column with this data.
     */
    create: XOR<ColumnCreateInput, ColumnUncheckedCreateInput>
    /**
     * In case the Column was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColumnUpdateInput, ColumnUncheckedUpdateInput>
  }

  /**
   * Column delete
   */
  export type ColumnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
    /**
     * Filter which Column to delete.
     */
    where: ColumnWhereUniqueInput
  }

  /**
   * Column deleteMany
   */
  export type ColumnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Columns to delete
     */
    where?: ColumnWhereInput
    /**
     * Limit how many Columns to delete.
     */
    limit?: number
  }

  /**
   * Column.cells
   */
  export type Column$cellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    where?: CellWhereInput
    orderBy?: CellOrderByWithRelationInput | CellOrderByWithRelationInput[]
    cursor?: CellWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CellScalarFieldEnum | CellScalarFieldEnum[]
  }

  /**
   * Column.viewFilters
   */
  export type Column$viewFiltersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterInclude<ExtArgs> | null
    where?: ViewFilterWhereInput
    orderBy?: ViewFilterOrderByWithRelationInput | ViewFilterOrderByWithRelationInput[]
    cursor?: ViewFilterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewFilterScalarFieldEnum | ViewFilterScalarFieldEnum[]
  }

  /**
   * Column.viewSorts
   */
  export type Column$viewSortsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortInclude<ExtArgs> | null
    where?: ViewSortWhereInput
    orderBy?: ViewSortOrderByWithRelationInput | ViewSortOrderByWithRelationInput[]
    cursor?: ViewSortWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewSortScalarFieldEnum | ViewSortScalarFieldEnum[]
  }

  /**
   * Column.viewColumnVisibilities
   */
  export type Column$viewColumnVisibilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewColumnVisibility
     */
    select?: ViewColumnVisibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewColumnVisibility
     */
    omit?: ViewColumnVisibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewColumnVisibilityInclude<ExtArgs> | null
    where?: ViewColumnVisibilityWhereInput
    orderBy?: ViewColumnVisibilityOrderByWithRelationInput | ViewColumnVisibilityOrderByWithRelationInput[]
    cursor?: ViewColumnVisibilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewColumnVisibilityScalarFieldEnum | ViewColumnVisibilityScalarFieldEnum[]
  }

  /**
   * Column without action
   */
  export type ColumnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null
  }


  /**
   * Model View
   */

  export type AggregateView = {
    _count: ViewCountAggregateOutputType | null
    _avg: ViewAvgAggregateOutputType | null
    _sum: ViewSumAggregateOutputType | null
    _min: ViewMinAggregateOutputType | null
    _max: ViewMaxAggregateOutputType | null
  }

  export type ViewAvgAggregateOutputType = {
    id: number | null
    tableId: number | null
  }

  export type ViewSumAggregateOutputType = {
    id: number | null
    tableId: number | null
  }

  export type ViewMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.ViewType | null
    tableId: number | null
    isDefault: boolean | null
    searchQuery: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ViewMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: $Enums.ViewType | null
    tableId: number | null
    isDefault: boolean | null
    searchQuery: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ViewCountAggregateOutputType = {
    id: number
    name: number
    type: number
    tableId: number
    isDefault: number
    searchQuery: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ViewAvgAggregateInputType = {
    id?: true
    tableId?: true
  }

  export type ViewSumAggregateInputType = {
    id?: true
    tableId?: true
  }

  export type ViewMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    tableId?: true
    isDefault?: true
    searchQuery?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ViewMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    tableId?: true
    isDefault?: true
    searchQuery?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ViewCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    tableId?: true
    isDefault?: true
    searchQuery?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which View to aggregate.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Views
    **/
    _count?: true | ViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewMaxAggregateInputType
  }

  export type GetViewAggregateType<T extends ViewAggregateArgs> = {
        [P in keyof T & keyof AggregateView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateView[P]>
      : GetScalarType<T[P], AggregateView[P]>
  }




  export type ViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewWhereInput
    orderBy?: ViewOrderByWithAggregationInput | ViewOrderByWithAggregationInput[]
    by: ViewScalarFieldEnum[] | ViewScalarFieldEnum
    having?: ViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewCountAggregateInputType | true
    _avg?: ViewAvgAggregateInputType
    _sum?: ViewSumAggregateInputType
    _min?: ViewMinAggregateInputType
    _max?: ViewMaxAggregateInputType
  }

  export type ViewGroupByOutputType = {
    id: number
    name: string
    type: $Enums.ViewType
    tableId: number
    isDefault: boolean
    searchQuery: string | null
    createdAt: Date
    updatedAt: Date
    _count: ViewCountAggregateOutputType | null
    _avg: ViewAvgAggregateOutputType | null
    _sum: ViewSumAggregateOutputType | null
    _min: ViewMinAggregateOutputType | null
    _max: ViewMaxAggregateOutputType | null
  }

  type GetViewGroupByPayload<T extends ViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewGroupByOutputType[P]>
            : GetScalarType<T[P], ViewGroupByOutputType[P]>
        }
      >
    >


  export type ViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    tableId?: boolean
    isDefault?: boolean
    searchQuery?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
    filters?: boolean | View$filtersArgs<ExtArgs>
    sorts?: boolean | View$sortsArgs<ExtArgs>
    columnVisibilities?: boolean | View$columnVisibilitiesArgs<ExtArgs>
    _count?: boolean | ViewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["view"]>

  export type ViewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    tableId?: boolean
    isDefault?: boolean
    searchQuery?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["view"]>

  export type ViewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    tableId?: boolean
    isDefault?: boolean
    searchQuery?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["view"]>

  export type ViewSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    tableId?: boolean
    isDefault?: boolean
    searchQuery?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ViewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "tableId" | "isDefault" | "searchQuery" | "createdAt" | "updatedAt", ExtArgs["result"]["view"]>
  export type ViewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
    filters?: boolean | View$filtersArgs<ExtArgs>
    sorts?: boolean | View$sortsArgs<ExtArgs>
    columnVisibilities?: boolean | View$columnVisibilitiesArgs<ExtArgs>
    _count?: boolean | ViewCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ViewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
  }
  export type ViewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
  }

  export type $ViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "View"
    objects: {
      table: Prisma.$TablePayload<ExtArgs>
      filters: Prisma.$ViewFilterPayload<ExtArgs>[]
      sorts: Prisma.$ViewSortPayload<ExtArgs>[]
      columnVisibilities: Prisma.$ViewColumnVisibilityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: $Enums.ViewType
      tableId: number
      isDefault: boolean
      searchQuery: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["view"]>
    composites: {}
  }

  type ViewGetPayload<S extends boolean | null | undefined | ViewDefaultArgs> = $Result.GetResult<Prisma.$ViewPayload, S>

  type ViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewCountAggregateInputType | true
    }

  export interface ViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['View'], meta: { name: 'View' } }
    /**
     * Find zero or one View that matches the filter.
     * @param {ViewFindUniqueArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewFindUniqueArgs>(args: SelectSubset<T, ViewFindUniqueArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one View that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViewFindUniqueOrThrowArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first View that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFindFirstArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewFindFirstArgs>(args?: SelectSubset<T, ViewFindFirstArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first View that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFindFirstOrThrowArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Views
     * const views = await prisma.view.findMany()
     * 
     * // Get first 10 Views
     * const views = await prisma.view.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewWithIdOnly = await prisma.view.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViewFindManyArgs>(args?: SelectSubset<T, ViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a View.
     * @param {ViewCreateArgs} args - Arguments to create a View.
     * @example
     * // Create one View
     * const View = await prisma.view.create({
     *   data: {
     *     // ... data to create a View
     *   }
     * })
     * 
     */
    create<T extends ViewCreateArgs>(args: SelectSubset<T, ViewCreateArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Views.
     * @param {ViewCreateManyArgs} args - Arguments to create many Views.
     * @example
     * // Create many Views
     * const view = await prisma.view.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewCreateManyArgs>(args?: SelectSubset<T, ViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Views and returns the data saved in the database.
     * @param {ViewCreateManyAndReturnArgs} args - Arguments to create many Views.
     * @example
     * // Create many Views
     * const view = await prisma.view.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Views and only return the `id`
     * const viewWithIdOnly = await prisma.view.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViewCreateManyAndReturnArgs>(args?: SelectSubset<T, ViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a View.
     * @param {ViewDeleteArgs} args - Arguments to delete one View.
     * @example
     * // Delete one View
     * const View = await prisma.view.delete({
     *   where: {
     *     // ... filter to delete one View
     *   }
     * })
     * 
     */
    delete<T extends ViewDeleteArgs>(args: SelectSubset<T, ViewDeleteArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one View.
     * @param {ViewUpdateArgs} args - Arguments to update one View.
     * @example
     * // Update one View
     * const view = await prisma.view.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewUpdateArgs>(args: SelectSubset<T, ViewUpdateArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Views.
     * @param {ViewDeleteManyArgs} args - Arguments to filter Views to delete.
     * @example
     * // Delete a few Views
     * const { count } = await prisma.view.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewDeleteManyArgs>(args?: SelectSubset<T, ViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Views
     * const view = await prisma.view.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewUpdateManyArgs>(args: SelectSubset<T, ViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Views and returns the data updated in the database.
     * @param {ViewUpdateManyAndReturnArgs} args - Arguments to update many Views.
     * @example
     * // Update many Views
     * const view = await prisma.view.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Views and only return the `id`
     * const viewWithIdOnly = await prisma.view.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ViewUpdateManyAndReturnArgs>(args: SelectSubset<T, ViewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one View.
     * @param {ViewUpsertArgs} args - Arguments to update or create a View.
     * @example
     * // Update or create a View
     * const view = await prisma.view.upsert({
     *   create: {
     *     // ... data to create a View
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the View we want to update
     *   }
     * })
     */
    upsert<T extends ViewUpsertArgs>(args: SelectSubset<T, ViewUpsertArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewCountArgs} args - Arguments to filter Views to count.
     * @example
     * // Count the number of Views
     * const count = await prisma.view.count({
     *   where: {
     *     // ... the filter for the Views we want to count
     *   }
     * })
    **/
    count<T extends ViewCountArgs>(
      args?: Subset<T, ViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a View.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ViewAggregateArgs>(args: Subset<T, ViewAggregateArgs>): Prisma.PrismaPromise<GetViewAggregateType<T>>

    /**
     * Group by View.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewGroupByArgs['orderBy'] }
        : { orderBy?: ViewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the View model
   */
  readonly fields: ViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for View.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    table<T extends TableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TableDefaultArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    filters<T extends View$filtersArgs<ExtArgs> = {}>(args?: Subset<T, View$filtersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sorts<T extends View$sortsArgs<ExtArgs> = {}>(args?: Subset<T, View$sortsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    columnVisibilities<T extends View$columnVisibilitiesArgs<ExtArgs> = {}>(args?: Subset<T, View$columnVisibilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewColumnVisibilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the View model
   */
  interface ViewFieldRefs {
    readonly id: FieldRef<"View", 'Int'>
    readonly name: FieldRef<"View", 'String'>
    readonly type: FieldRef<"View", 'ViewType'>
    readonly tableId: FieldRef<"View", 'Int'>
    readonly isDefault: FieldRef<"View", 'Boolean'>
    readonly searchQuery: FieldRef<"View", 'String'>
    readonly createdAt: FieldRef<"View", 'DateTime'>
    readonly updatedAt: FieldRef<"View", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * View findUnique
   */
  export type ViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which View to fetch.
     */
    where: ViewWhereUniqueInput
  }

  /**
   * View findUniqueOrThrow
   */
  export type ViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which View to fetch.
     */
    where: ViewWhereUniqueInput
  }

  /**
   * View findFirst
   */
  export type ViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which View to fetch.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Views.
     */
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Views.
     */
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * View findFirstOrThrow
   */
  export type ViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which View to fetch.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Views.
     */
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Views.
     */
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * View findMany
   */
  export type ViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Views.
     */
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * View create
   */
  export type ViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * The data needed to create a View.
     */
    data: XOR<ViewCreateInput, ViewUncheckedCreateInput>
  }

  /**
   * View createMany
   */
  export type ViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Views.
     */
    data: ViewCreateManyInput | ViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * View createManyAndReturn
   */
  export type ViewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * The data used to create many Views.
     */
    data: ViewCreateManyInput | ViewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * View update
   */
  export type ViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * The data needed to update a View.
     */
    data: XOR<ViewUpdateInput, ViewUncheckedUpdateInput>
    /**
     * Choose, which View to update.
     */
    where: ViewWhereUniqueInput
  }

  /**
   * View updateMany
   */
  export type ViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Views.
     */
    data: XOR<ViewUpdateManyMutationInput, ViewUncheckedUpdateManyInput>
    /**
     * Filter which Views to update
     */
    where?: ViewWhereInput
    /**
     * Limit how many Views to update.
     */
    limit?: number
  }

  /**
   * View updateManyAndReturn
   */
  export type ViewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * The data used to update Views.
     */
    data: XOR<ViewUpdateManyMutationInput, ViewUncheckedUpdateManyInput>
    /**
     * Filter which Views to update
     */
    where?: ViewWhereInput
    /**
     * Limit how many Views to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * View upsert
   */
  export type ViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * The filter to search for the View to update in case it exists.
     */
    where: ViewWhereUniqueInput
    /**
     * In case the View found by the `where` argument doesn't exist, create a new View with this data.
     */
    create: XOR<ViewCreateInput, ViewUncheckedCreateInput>
    /**
     * In case the View was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewUpdateInput, ViewUncheckedUpdateInput>
  }

  /**
   * View delete
   */
  export type ViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter which View to delete.
     */
    where: ViewWhereUniqueInput
  }

  /**
   * View deleteMany
   */
  export type ViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Views to delete
     */
    where?: ViewWhereInput
    /**
     * Limit how many Views to delete.
     */
    limit?: number
  }

  /**
   * View.filters
   */
  export type View$filtersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterInclude<ExtArgs> | null
    where?: ViewFilterWhereInput
    orderBy?: ViewFilterOrderByWithRelationInput | ViewFilterOrderByWithRelationInput[]
    cursor?: ViewFilterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewFilterScalarFieldEnum | ViewFilterScalarFieldEnum[]
  }

  /**
   * View.sorts
   */
  export type View$sortsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortInclude<ExtArgs> | null
    where?: ViewSortWhereInput
    orderBy?: ViewSortOrderByWithRelationInput | ViewSortOrderByWithRelationInput[]
    cursor?: ViewSortWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewSortScalarFieldEnum | ViewSortScalarFieldEnum[]
  }

  /**
   * View.columnVisibilities
   */
  export type View$columnVisibilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewColumnVisibility
     */
    select?: ViewColumnVisibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewColumnVisibility
     */
    omit?: ViewColumnVisibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewColumnVisibilityInclude<ExtArgs> | null
    where?: ViewColumnVisibilityWhereInput
    orderBy?: ViewColumnVisibilityOrderByWithRelationInput | ViewColumnVisibilityOrderByWithRelationInput[]
    cursor?: ViewColumnVisibilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewColumnVisibilityScalarFieldEnum | ViewColumnVisibilityScalarFieldEnum[]
  }

  /**
   * View without action
   */
  export type ViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
  }


  /**
   * Model ViewFilter
   */

  export type AggregateViewFilter = {
    _count: ViewFilterCountAggregateOutputType | null
    _avg: ViewFilterAvgAggregateOutputType | null
    _sum: ViewFilterSumAggregateOutputType | null
    _min: ViewFilterMinAggregateOutputType | null
    _max: ViewFilterMaxAggregateOutputType | null
  }

  export type ViewFilterAvgAggregateOutputType = {
    id: number | null
    viewId: number | null
    columnId: number | null
    position: number | null
  }

  export type ViewFilterSumAggregateOutputType = {
    id: number | null
    viewId: number | null
    columnId: number | null
    position: number | null
  }

  export type ViewFilterMinAggregateOutputType = {
    id: number | null
    viewId: number | null
    columnId: number | null
    operator: $Enums.ViewFilterOperator | null
    value: string | null
    position: number | null
  }

  export type ViewFilterMaxAggregateOutputType = {
    id: number | null
    viewId: number | null
    columnId: number | null
    operator: $Enums.ViewFilterOperator | null
    value: string | null
    position: number | null
  }

  export type ViewFilterCountAggregateOutputType = {
    id: number
    viewId: number
    columnId: number
    operator: number
    value: number
    position: number
    _all: number
  }


  export type ViewFilterAvgAggregateInputType = {
    id?: true
    viewId?: true
    columnId?: true
    position?: true
  }

  export type ViewFilterSumAggregateInputType = {
    id?: true
    viewId?: true
    columnId?: true
    position?: true
  }

  export type ViewFilterMinAggregateInputType = {
    id?: true
    viewId?: true
    columnId?: true
    operator?: true
    value?: true
    position?: true
  }

  export type ViewFilterMaxAggregateInputType = {
    id?: true
    viewId?: true
    columnId?: true
    operator?: true
    value?: true
    position?: true
  }

  export type ViewFilterCountAggregateInputType = {
    id?: true
    viewId?: true
    columnId?: true
    operator?: true
    value?: true
    position?: true
    _all?: true
  }

  export type ViewFilterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewFilter to aggregate.
     */
    where?: ViewFilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewFilters to fetch.
     */
    orderBy?: ViewFilterOrderByWithRelationInput | ViewFilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewFilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewFilters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewFilters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ViewFilters
    **/
    _count?: true | ViewFilterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViewFilterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViewFilterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewFilterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewFilterMaxAggregateInputType
  }

  export type GetViewFilterAggregateType<T extends ViewFilterAggregateArgs> = {
        [P in keyof T & keyof AggregateViewFilter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViewFilter[P]>
      : GetScalarType<T[P], AggregateViewFilter[P]>
  }




  export type ViewFilterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewFilterWhereInput
    orderBy?: ViewFilterOrderByWithAggregationInput | ViewFilterOrderByWithAggregationInput[]
    by: ViewFilterScalarFieldEnum[] | ViewFilterScalarFieldEnum
    having?: ViewFilterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewFilterCountAggregateInputType | true
    _avg?: ViewFilterAvgAggregateInputType
    _sum?: ViewFilterSumAggregateInputType
    _min?: ViewFilterMinAggregateInputType
    _max?: ViewFilterMaxAggregateInputType
  }

  export type ViewFilterGroupByOutputType = {
    id: number
    viewId: number
    columnId: number
    operator: $Enums.ViewFilterOperator
    value: string | null
    position: number
    _count: ViewFilterCountAggregateOutputType | null
    _avg: ViewFilterAvgAggregateOutputType | null
    _sum: ViewFilterSumAggregateOutputType | null
    _min: ViewFilterMinAggregateOutputType | null
    _max: ViewFilterMaxAggregateOutputType | null
  }

  type GetViewFilterGroupByPayload<T extends ViewFilterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewFilterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewFilterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewFilterGroupByOutputType[P]>
            : GetScalarType<T[P], ViewFilterGroupByOutputType[P]>
        }
      >
    >


  export type ViewFilterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewId?: boolean
    columnId?: boolean
    operator?: boolean
    value?: boolean
    position?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewFilter"]>

  export type ViewFilterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewId?: boolean
    columnId?: boolean
    operator?: boolean
    value?: boolean
    position?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewFilter"]>

  export type ViewFilterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewId?: boolean
    columnId?: boolean
    operator?: boolean
    value?: boolean
    position?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewFilter"]>

  export type ViewFilterSelectScalar = {
    id?: boolean
    viewId?: boolean
    columnId?: boolean
    operator?: boolean
    value?: boolean
    position?: boolean
  }

  export type ViewFilterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "viewId" | "columnId" | "operator" | "value" | "position", ExtArgs["result"]["viewFilter"]>
  export type ViewFilterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }
  export type ViewFilterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }
  export type ViewFilterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }

  export type $ViewFilterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ViewFilter"
    objects: {
      view: Prisma.$ViewPayload<ExtArgs>
      column: Prisma.$ColumnPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      viewId: number
      columnId: number
      operator: $Enums.ViewFilterOperator
      value: string | null
      position: number
    }, ExtArgs["result"]["viewFilter"]>
    composites: {}
  }

  type ViewFilterGetPayload<S extends boolean | null | undefined | ViewFilterDefaultArgs> = $Result.GetResult<Prisma.$ViewFilterPayload, S>

  type ViewFilterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViewFilterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewFilterCountAggregateInputType | true
    }

  export interface ViewFilterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ViewFilter'], meta: { name: 'ViewFilter' } }
    /**
     * Find zero or one ViewFilter that matches the filter.
     * @param {ViewFilterFindUniqueArgs} args - Arguments to find a ViewFilter
     * @example
     * // Get one ViewFilter
     * const viewFilter = await prisma.viewFilter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewFilterFindUniqueArgs>(args: SelectSubset<T, ViewFilterFindUniqueArgs<ExtArgs>>): Prisma__ViewFilterClient<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ViewFilter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViewFilterFindUniqueOrThrowArgs} args - Arguments to find a ViewFilter
     * @example
     * // Get one ViewFilter
     * const viewFilter = await prisma.viewFilter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewFilterFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewFilterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewFilterClient<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViewFilter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFilterFindFirstArgs} args - Arguments to find a ViewFilter
     * @example
     * // Get one ViewFilter
     * const viewFilter = await prisma.viewFilter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewFilterFindFirstArgs>(args?: SelectSubset<T, ViewFilterFindFirstArgs<ExtArgs>>): Prisma__ViewFilterClient<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViewFilter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFilterFindFirstOrThrowArgs} args - Arguments to find a ViewFilter
     * @example
     * // Get one ViewFilter
     * const viewFilter = await prisma.viewFilter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewFilterFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewFilterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewFilterClient<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ViewFilters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFilterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ViewFilters
     * const viewFilters = await prisma.viewFilter.findMany()
     * 
     * // Get first 10 ViewFilters
     * const viewFilters = await prisma.viewFilter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewFilterWithIdOnly = await prisma.viewFilter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViewFilterFindManyArgs>(args?: SelectSubset<T, ViewFilterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ViewFilter.
     * @param {ViewFilterCreateArgs} args - Arguments to create a ViewFilter.
     * @example
     * // Create one ViewFilter
     * const ViewFilter = await prisma.viewFilter.create({
     *   data: {
     *     // ... data to create a ViewFilter
     *   }
     * })
     * 
     */
    create<T extends ViewFilterCreateArgs>(args: SelectSubset<T, ViewFilterCreateArgs<ExtArgs>>): Prisma__ViewFilterClient<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ViewFilters.
     * @param {ViewFilterCreateManyArgs} args - Arguments to create many ViewFilters.
     * @example
     * // Create many ViewFilters
     * const viewFilter = await prisma.viewFilter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewFilterCreateManyArgs>(args?: SelectSubset<T, ViewFilterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ViewFilters and returns the data saved in the database.
     * @param {ViewFilterCreateManyAndReturnArgs} args - Arguments to create many ViewFilters.
     * @example
     * // Create many ViewFilters
     * const viewFilter = await prisma.viewFilter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ViewFilters and only return the `id`
     * const viewFilterWithIdOnly = await prisma.viewFilter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViewFilterCreateManyAndReturnArgs>(args?: SelectSubset<T, ViewFilterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ViewFilter.
     * @param {ViewFilterDeleteArgs} args - Arguments to delete one ViewFilter.
     * @example
     * // Delete one ViewFilter
     * const ViewFilter = await prisma.viewFilter.delete({
     *   where: {
     *     // ... filter to delete one ViewFilter
     *   }
     * })
     * 
     */
    delete<T extends ViewFilterDeleteArgs>(args: SelectSubset<T, ViewFilterDeleteArgs<ExtArgs>>): Prisma__ViewFilterClient<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ViewFilter.
     * @param {ViewFilterUpdateArgs} args - Arguments to update one ViewFilter.
     * @example
     * // Update one ViewFilter
     * const viewFilter = await prisma.viewFilter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewFilterUpdateArgs>(args: SelectSubset<T, ViewFilterUpdateArgs<ExtArgs>>): Prisma__ViewFilterClient<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ViewFilters.
     * @param {ViewFilterDeleteManyArgs} args - Arguments to filter ViewFilters to delete.
     * @example
     * // Delete a few ViewFilters
     * const { count } = await prisma.viewFilter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewFilterDeleteManyArgs>(args?: SelectSubset<T, ViewFilterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewFilters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFilterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ViewFilters
     * const viewFilter = await prisma.viewFilter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewFilterUpdateManyArgs>(args: SelectSubset<T, ViewFilterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewFilters and returns the data updated in the database.
     * @param {ViewFilterUpdateManyAndReturnArgs} args - Arguments to update many ViewFilters.
     * @example
     * // Update many ViewFilters
     * const viewFilter = await prisma.viewFilter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ViewFilters and only return the `id`
     * const viewFilterWithIdOnly = await prisma.viewFilter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ViewFilterUpdateManyAndReturnArgs>(args: SelectSubset<T, ViewFilterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ViewFilter.
     * @param {ViewFilterUpsertArgs} args - Arguments to update or create a ViewFilter.
     * @example
     * // Update or create a ViewFilter
     * const viewFilter = await prisma.viewFilter.upsert({
     *   create: {
     *     // ... data to create a ViewFilter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ViewFilter we want to update
     *   }
     * })
     */
    upsert<T extends ViewFilterUpsertArgs>(args: SelectSubset<T, ViewFilterUpsertArgs<ExtArgs>>): Prisma__ViewFilterClient<$Result.GetResult<Prisma.$ViewFilterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ViewFilters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFilterCountArgs} args - Arguments to filter ViewFilters to count.
     * @example
     * // Count the number of ViewFilters
     * const count = await prisma.viewFilter.count({
     *   where: {
     *     // ... the filter for the ViewFilters we want to count
     *   }
     * })
    **/
    count<T extends ViewFilterCountArgs>(
      args?: Subset<T, ViewFilterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewFilterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ViewFilter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFilterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ViewFilterAggregateArgs>(args: Subset<T, ViewFilterAggregateArgs>): Prisma.PrismaPromise<GetViewFilterAggregateType<T>>

    /**
     * Group by ViewFilter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFilterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ViewFilterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewFilterGroupByArgs['orderBy'] }
        : { orderBy?: ViewFilterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ViewFilterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewFilterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ViewFilter model
   */
  readonly fields: ViewFilterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ViewFilter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewFilterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    view<T extends ViewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ViewDefaultArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    column<T extends ColumnDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ColumnDefaultArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ViewFilter model
   */
  interface ViewFilterFieldRefs {
    readonly id: FieldRef<"ViewFilter", 'Int'>
    readonly viewId: FieldRef<"ViewFilter", 'Int'>
    readonly columnId: FieldRef<"ViewFilter", 'Int'>
    readonly operator: FieldRef<"ViewFilter", 'ViewFilterOperator'>
    readonly value: FieldRef<"ViewFilter", 'String'>
    readonly position: FieldRef<"ViewFilter", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ViewFilter findUnique
   */
  export type ViewFilterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterInclude<ExtArgs> | null
    /**
     * Filter, which ViewFilter to fetch.
     */
    where: ViewFilterWhereUniqueInput
  }

  /**
   * ViewFilter findUniqueOrThrow
   */
  export type ViewFilterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterInclude<ExtArgs> | null
    /**
     * Filter, which ViewFilter to fetch.
     */
    where: ViewFilterWhereUniqueInput
  }

  /**
   * ViewFilter findFirst
   */
  export type ViewFilterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterInclude<ExtArgs> | null
    /**
     * Filter, which ViewFilter to fetch.
     */
    where?: ViewFilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewFilters to fetch.
     */
    orderBy?: ViewFilterOrderByWithRelationInput | ViewFilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewFilters.
     */
    cursor?: ViewFilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewFilters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewFilters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewFilters.
     */
    distinct?: ViewFilterScalarFieldEnum | ViewFilterScalarFieldEnum[]
  }

  /**
   * ViewFilter findFirstOrThrow
   */
  export type ViewFilterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterInclude<ExtArgs> | null
    /**
     * Filter, which ViewFilter to fetch.
     */
    where?: ViewFilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewFilters to fetch.
     */
    orderBy?: ViewFilterOrderByWithRelationInput | ViewFilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewFilters.
     */
    cursor?: ViewFilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewFilters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewFilters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewFilters.
     */
    distinct?: ViewFilterScalarFieldEnum | ViewFilterScalarFieldEnum[]
  }

  /**
   * ViewFilter findMany
   */
  export type ViewFilterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterInclude<ExtArgs> | null
    /**
     * Filter, which ViewFilters to fetch.
     */
    where?: ViewFilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewFilters to fetch.
     */
    orderBy?: ViewFilterOrderByWithRelationInput | ViewFilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ViewFilters.
     */
    cursor?: ViewFilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewFilters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewFilters.
     */
    skip?: number
    distinct?: ViewFilterScalarFieldEnum | ViewFilterScalarFieldEnum[]
  }

  /**
   * ViewFilter create
   */
  export type ViewFilterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterInclude<ExtArgs> | null
    /**
     * The data needed to create a ViewFilter.
     */
    data: XOR<ViewFilterCreateInput, ViewFilterUncheckedCreateInput>
  }

  /**
   * ViewFilter createMany
   */
  export type ViewFilterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ViewFilters.
     */
    data: ViewFilterCreateManyInput | ViewFilterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ViewFilter createManyAndReturn
   */
  export type ViewFilterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * The data used to create many ViewFilters.
     */
    data: ViewFilterCreateManyInput | ViewFilterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ViewFilter update
   */
  export type ViewFilterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterInclude<ExtArgs> | null
    /**
     * The data needed to update a ViewFilter.
     */
    data: XOR<ViewFilterUpdateInput, ViewFilterUncheckedUpdateInput>
    /**
     * Choose, which ViewFilter to update.
     */
    where: ViewFilterWhereUniqueInput
  }

  /**
   * ViewFilter updateMany
   */
  export type ViewFilterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ViewFilters.
     */
    data: XOR<ViewFilterUpdateManyMutationInput, ViewFilterUncheckedUpdateManyInput>
    /**
     * Filter which ViewFilters to update
     */
    where?: ViewFilterWhereInput
    /**
     * Limit how many ViewFilters to update.
     */
    limit?: number
  }

  /**
   * ViewFilter updateManyAndReturn
   */
  export type ViewFilterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * The data used to update ViewFilters.
     */
    data: XOR<ViewFilterUpdateManyMutationInput, ViewFilterUncheckedUpdateManyInput>
    /**
     * Filter which ViewFilters to update
     */
    where?: ViewFilterWhereInput
    /**
     * Limit how many ViewFilters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ViewFilter upsert
   */
  export type ViewFilterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterInclude<ExtArgs> | null
    /**
     * The filter to search for the ViewFilter to update in case it exists.
     */
    where: ViewFilterWhereUniqueInput
    /**
     * In case the ViewFilter found by the `where` argument doesn't exist, create a new ViewFilter with this data.
     */
    create: XOR<ViewFilterCreateInput, ViewFilterUncheckedCreateInput>
    /**
     * In case the ViewFilter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewFilterUpdateInput, ViewFilterUncheckedUpdateInput>
  }

  /**
   * ViewFilter delete
   */
  export type ViewFilterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterInclude<ExtArgs> | null
    /**
     * Filter which ViewFilter to delete.
     */
    where: ViewFilterWhereUniqueInput
  }

  /**
   * ViewFilter deleteMany
   */
  export type ViewFilterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewFilters to delete
     */
    where?: ViewFilterWhereInput
    /**
     * Limit how many ViewFilters to delete.
     */
    limit?: number
  }

  /**
   * ViewFilter without action
   */
  export type ViewFilterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewFilter
     */
    select?: ViewFilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewFilter
     */
    omit?: ViewFilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewFilterInclude<ExtArgs> | null
  }


  /**
   * Model ViewSort
   */

  export type AggregateViewSort = {
    _count: ViewSortCountAggregateOutputType | null
    _avg: ViewSortAvgAggregateOutputType | null
    _sum: ViewSortSumAggregateOutputType | null
    _min: ViewSortMinAggregateOutputType | null
    _max: ViewSortMaxAggregateOutputType | null
  }

  export type ViewSortAvgAggregateOutputType = {
    id: number | null
    viewId: number | null
    columnId: number | null
    position: number | null
  }

  export type ViewSortSumAggregateOutputType = {
    id: number | null
    viewId: number | null
    columnId: number | null
    position: number | null
  }

  export type ViewSortMinAggregateOutputType = {
    id: number | null
    viewId: number | null
    columnId: number | null
    direction: $Enums.ViewSortDirection | null
    position: number | null
  }

  export type ViewSortMaxAggregateOutputType = {
    id: number | null
    viewId: number | null
    columnId: number | null
    direction: $Enums.ViewSortDirection | null
    position: number | null
  }

  export type ViewSortCountAggregateOutputType = {
    id: number
    viewId: number
    columnId: number
    direction: number
    position: number
    _all: number
  }


  export type ViewSortAvgAggregateInputType = {
    id?: true
    viewId?: true
    columnId?: true
    position?: true
  }

  export type ViewSortSumAggregateInputType = {
    id?: true
    viewId?: true
    columnId?: true
    position?: true
  }

  export type ViewSortMinAggregateInputType = {
    id?: true
    viewId?: true
    columnId?: true
    direction?: true
    position?: true
  }

  export type ViewSortMaxAggregateInputType = {
    id?: true
    viewId?: true
    columnId?: true
    direction?: true
    position?: true
  }

  export type ViewSortCountAggregateInputType = {
    id?: true
    viewId?: true
    columnId?: true
    direction?: true
    position?: true
    _all?: true
  }

  export type ViewSortAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewSort to aggregate.
     */
    where?: ViewSortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewSorts to fetch.
     */
    orderBy?: ViewSortOrderByWithRelationInput | ViewSortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewSortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewSorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewSorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ViewSorts
    **/
    _count?: true | ViewSortCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViewSortAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViewSortSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewSortMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewSortMaxAggregateInputType
  }

  export type GetViewSortAggregateType<T extends ViewSortAggregateArgs> = {
        [P in keyof T & keyof AggregateViewSort]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViewSort[P]>
      : GetScalarType<T[P], AggregateViewSort[P]>
  }




  export type ViewSortGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewSortWhereInput
    orderBy?: ViewSortOrderByWithAggregationInput | ViewSortOrderByWithAggregationInput[]
    by: ViewSortScalarFieldEnum[] | ViewSortScalarFieldEnum
    having?: ViewSortScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewSortCountAggregateInputType | true
    _avg?: ViewSortAvgAggregateInputType
    _sum?: ViewSortSumAggregateInputType
    _min?: ViewSortMinAggregateInputType
    _max?: ViewSortMaxAggregateInputType
  }

  export type ViewSortGroupByOutputType = {
    id: number
    viewId: number
    columnId: number
    direction: $Enums.ViewSortDirection
    position: number
    _count: ViewSortCountAggregateOutputType | null
    _avg: ViewSortAvgAggregateOutputType | null
    _sum: ViewSortSumAggregateOutputType | null
    _min: ViewSortMinAggregateOutputType | null
    _max: ViewSortMaxAggregateOutputType | null
  }

  type GetViewSortGroupByPayload<T extends ViewSortGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewSortGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewSortGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewSortGroupByOutputType[P]>
            : GetScalarType<T[P], ViewSortGroupByOutputType[P]>
        }
      >
    >


  export type ViewSortSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewId?: boolean
    columnId?: boolean
    direction?: boolean
    position?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewSort"]>

  export type ViewSortSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewId?: boolean
    columnId?: boolean
    direction?: boolean
    position?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewSort"]>

  export type ViewSortSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewId?: boolean
    columnId?: boolean
    direction?: boolean
    position?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewSort"]>

  export type ViewSortSelectScalar = {
    id?: boolean
    viewId?: boolean
    columnId?: boolean
    direction?: boolean
    position?: boolean
  }

  export type ViewSortOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "viewId" | "columnId" | "direction" | "position", ExtArgs["result"]["viewSort"]>
  export type ViewSortInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }
  export type ViewSortIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }
  export type ViewSortIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }

  export type $ViewSortPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ViewSort"
    objects: {
      view: Prisma.$ViewPayload<ExtArgs>
      column: Prisma.$ColumnPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      viewId: number
      columnId: number
      direction: $Enums.ViewSortDirection
      position: number
    }, ExtArgs["result"]["viewSort"]>
    composites: {}
  }

  type ViewSortGetPayload<S extends boolean | null | undefined | ViewSortDefaultArgs> = $Result.GetResult<Prisma.$ViewSortPayload, S>

  type ViewSortCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViewSortFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewSortCountAggregateInputType | true
    }

  export interface ViewSortDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ViewSort'], meta: { name: 'ViewSort' } }
    /**
     * Find zero or one ViewSort that matches the filter.
     * @param {ViewSortFindUniqueArgs} args - Arguments to find a ViewSort
     * @example
     * // Get one ViewSort
     * const viewSort = await prisma.viewSort.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewSortFindUniqueArgs>(args: SelectSubset<T, ViewSortFindUniqueArgs<ExtArgs>>): Prisma__ViewSortClient<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ViewSort that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViewSortFindUniqueOrThrowArgs} args - Arguments to find a ViewSort
     * @example
     * // Get one ViewSort
     * const viewSort = await prisma.viewSort.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewSortFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewSortFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewSortClient<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViewSort that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewSortFindFirstArgs} args - Arguments to find a ViewSort
     * @example
     * // Get one ViewSort
     * const viewSort = await prisma.viewSort.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewSortFindFirstArgs>(args?: SelectSubset<T, ViewSortFindFirstArgs<ExtArgs>>): Prisma__ViewSortClient<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViewSort that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewSortFindFirstOrThrowArgs} args - Arguments to find a ViewSort
     * @example
     * // Get one ViewSort
     * const viewSort = await prisma.viewSort.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewSortFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewSortFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewSortClient<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ViewSorts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewSortFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ViewSorts
     * const viewSorts = await prisma.viewSort.findMany()
     * 
     * // Get first 10 ViewSorts
     * const viewSorts = await prisma.viewSort.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewSortWithIdOnly = await prisma.viewSort.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViewSortFindManyArgs>(args?: SelectSubset<T, ViewSortFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ViewSort.
     * @param {ViewSortCreateArgs} args - Arguments to create a ViewSort.
     * @example
     * // Create one ViewSort
     * const ViewSort = await prisma.viewSort.create({
     *   data: {
     *     // ... data to create a ViewSort
     *   }
     * })
     * 
     */
    create<T extends ViewSortCreateArgs>(args: SelectSubset<T, ViewSortCreateArgs<ExtArgs>>): Prisma__ViewSortClient<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ViewSorts.
     * @param {ViewSortCreateManyArgs} args - Arguments to create many ViewSorts.
     * @example
     * // Create many ViewSorts
     * const viewSort = await prisma.viewSort.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewSortCreateManyArgs>(args?: SelectSubset<T, ViewSortCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ViewSorts and returns the data saved in the database.
     * @param {ViewSortCreateManyAndReturnArgs} args - Arguments to create many ViewSorts.
     * @example
     * // Create many ViewSorts
     * const viewSort = await prisma.viewSort.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ViewSorts and only return the `id`
     * const viewSortWithIdOnly = await prisma.viewSort.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViewSortCreateManyAndReturnArgs>(args?: SelectSubset<T, ViewSortCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ViewSort.
     * @param {ViewSortDeleteArgs} args - Arguments to delete one ViewSort.
     * @example
     * // Delete one ViewSort
     * const ViewSort = await prisma.viewSort.delete({
     *   where: {
     *     // ... filter to delete one ViewSort
     *   }
     * })
     * 
     */
    delete<T extends ViewSortDeleteArgs>(args: SelectSubset<T, ViewSortDeleteArgs<ExtArgs>>): Prisma__ViewSortClient<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ViewSort.
     * @param {ViewSortUpdateArgs} args - Arguments to update one ViewSort.
     * @example
     * // Update one ViewSort
     * const viewSort = await prisma.viewSort.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewSortUpdateArgs>(args: SelectSubset<T, ViewSortUpdateArgs<ExtArgs>>): Prisma__ViewSortClient<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ViewSorts.
     * @param {ViewSortDeleteManyArgs} args - Arguments to filter ViewSorts to delete.
     * @example
     * // Delete a few ViewSorts
     * const { count } = await prisma.viewSort.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewSortDeleteManyArgs>(args?: SelectSubset<T, ViewSortDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewSorts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewSortUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ViewSorts
     * const viewSort = await prisma.viewSort.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewSortUpdateManyArgs>(args: SelectSubset<T, ViewSortUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewSorts and returns the data updated in the database.
     * @param {ViewSortUpdateManyAndReturnArgs} args - Arguments to update many ViewSorts.
     * @example
     * // Update many ViewSorts
     * const viewSort = await prisma.viewSort.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ViewSorts and only return the `id`
     * const viewSortWithIdOnly = await prisma.viewSort.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ViewSortUpdateManyAndReturnArgs>(args: SelectSubset<T, ViewSortUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ViewSort.
     * @param {ViewSortUpsertArgs} args - Arguments to update or create a ViewSort.
     * @example
     * // Update or create a ViewSort
     * const viewSort = await prisma.viewSort.upsert({
     *   create: {
     *     // ... data to create a ViewSort
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ViewSort we want to update
     *   }
     * })
     */
    upsert<T extends ViewSortUpsertArgs>(args: SelectSubset<T, ViewSortUpsertArgs<ExtArgs>>): Prisma__ViewSortClient<$Result.GetResult<Prisma.$ViewSortPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ViewSorts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewSortCountArgs} args - Arguments to filter ViewSorts to count.
     * @example
     * // Count the number of ViewSorts
     * const count = await prisma.viewSort.count({
     *   where: {
     *     // ... the filter for the ViewSorts we want to count
     *   }
     * })
    **/
    count<T extends ViewSortCountArgs>(
      args?: Subset<T, ViewSortCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewSortCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ViewSort.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewSortAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ViewSortAggregateArgs>(args: Subset<T, ViewSortAggregateArgs>): Prisma.PrismaPromise<GetViewSortAggregateType<T>>

    /**
     * Group by ViewSort.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewSortGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ViewSortGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewSortGroupByArgs['orderBy'] }
        : { orderBy?: ViewSortGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ViewSortGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewSortGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ViewSort model
   */
  readonly fields: ViewSortFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ViewSort.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewSortClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    view<T extends ViewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ViewDefaultArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    column<T extends ColumnDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ColumnDefaultArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ViewSort model
   */
  interface ViewSortFieldRefs {
    readonly id: FieldRef<"ViewSort", 'Int'>
    readonly viewId: FieldRef<"ViewSort", 'Int'>
    readonly columnId: FieldRef<"ViewSort", 'Int'>
    readonly direction: FieldRef<"ViewSort", 'ViewSortDirection'>
    readonly position: FieldRef<"ViewSort", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ViewSort findUnique
   */
  export type ViewSortFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortInclude<ExtArgs> | null
    /**
     * Filter, which ViewSort to fetch.
     */
    where: ViewSortWhereUniqueInput
  }

  /**
   * ViewSort findUniqueOrThrow
   */
  export type ViewSortFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortInclude<ExtArgs> | null
    /**
     * Filter, which ViewSort to fetch.
     */
    where: ViewSortWhereUniqueInput
  }

  /**
   * ViewSort findFirst
   */
  export type ViewSortFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortInclude<ExtArgs> | null
    /**
     * Filter, which ViewSort to fetch.
     */
    where?: ViewSortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewSorts to fetch.
     */
    orderBy?: ViewSortOrderByWithRelationInput | ViewSortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewSorts.
     */
    cursor?: ViewSortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewSorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewSorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewSorts.
     */
    distinct?: ViewSortScalarFieldEnum | ViewSortScalarFieldEnum[]
  }

  /**
   * ViewSort findFirstOrThrow
   */
  export type ViewSortFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortInclude<ExtArgs> | null
    /**
     * Filter, which ViewSort to fetch.
     */
    where?: ViewSortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewSorts to fetch.
     */
    orderBy?: ViewSortOrderByWithRelationInput | ViewSortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewSorts.
     */
    cursor?: ViewSortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewSorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewSorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewSorts.
     */
    distinct?: ViewSortScalarFieldEnum | ViewSortScalarFieldEnum[]
  }

  /**
   * ViewSort findMany
   */
  export type ViewSortFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortInclude<ExtArgs> | null
    /**
     * Filter, which ViewSorts to fetch.
     */
    where?: ViewSortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewSorts to fetch.
     */
    orderBy?: ViewSortOrderByWithRelationInput | ViewSortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ViewSorts.
     */
    cursor?: ViewSortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewSorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewSorts.
     */
    skip?: number
    distinct?: ViewSortScalarFieldEnum | ViewSortScalarFieldEnum[]
  }

  /**
   * ViewSort create
   */
  export type ViewSortCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortInclude<ExtArgs> | null
    /**
     * The data needed to create a ViewSort.
     */
    data: XOR<ViewSortCreateInput, ViewSortUncheckedCreateInput>
  }

  /**
   * ViewSort createMany
   */
  export type ViewSortCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ViewSorts.
     */
    data: ViewSortCreateManyInput | ViewSortCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ViewSort createManyAndReturn
   */
  export type ViewSortCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * The data used to create many ViewSorts.
     */
    data: ViewSortCreateManyInput | ViewSortCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ViewSort update
   */
  export type ViewSortUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortInclude<ExtArgs> | null
    /**
     * The data needed to update a ViewSort.
     */
    data: XOR<ViewSortUpdateInput, ViewSortUncheckedUpdateInput>
    /**
     * Choose, which ViewSort to update.
     */
    where: ViewSortWhereUniqueInput
  }

  /**
   * ViewSort updateMany
   */
  export type ViewSortUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ViewSorts.
     */
    data: XOR<ViewSortUpdateManyMutationInput, ViewSortUncheckedUpdateManyInput>
    /**
     * Filter which ViewSorts to update
     */
    where?: ViewSortWhereInput
    /**
     * Limit how many ViewSorts to update.
     */
    limit?: number
  }

  /**
   * ViewSort updateManyAndReturn
   */
  export type ViewSortUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * The data used to update ViewSorts.
     */
    data: XOR<ViewSortUpdateManyMutationInput, ViewSortUncheckedUpdateManyInput>
    /**
     * Filter which ViewSorts to update
     */
    where?: ViewSortWhereInput
    /**
     * Limit how many ViewSorts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ViewSort upsert
   */
  export type ViewSortUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortInclude<ExtArgs> | null
    /**
     * The filter to search for the ViewSort to update in case it exists.
     */
    where: ViewSortWhereUniqueInput
    /**
     * In case the ViewSort found by the `where` argument doesn't exist, create a new ViewSort with this data.
     */
    create: XOR<ViewSortCreateInput, ViewSortUncheckedCreateInput>
    /**
     * In case the ViewSort was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewSortUpdateInput, ViewSortUncheckedUpdateInput>
  }

  /**
   * ViewSort delete
   */
  export type ViewSortDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortInclude<ExtArgs> | null
    /**
     * Filter which ViewSort to delete.
     */
    where: ViewSortWhereUniqueInput
  }

  /**
   * ViewSort deleteMany
   */
  export type ViewSortDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewSorts to delete
     */
    where?: ViewSortWhereInput
    /**
     * Limit how many ViewSorts to delete.
     */
    limit?: number
  }

  /**
   * ViewSort without action
   */
  export type ViewSortDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewSort
     */
    select?: ViewSortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewSort
     */
    omit?: ViewSortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewSortInclude<ExtArgs> | null
  }


  /**
   * Model ViewColumnVisibility
   */

  export type AggregateViewColumnVisibility = {
    _count: ViewColumnVisibilityCountAggregateOutputType | null
    _avg: ViewColumnVisibilityAvgAggregateOutputType | null
    _sum: ViewColumnVisibilitySumAggregateOutputType | null
    _min: ViewColumnVisibilityMinAggregateOutputType | null
    _max: ViewColumnVisibilityMaxAggregateOutputType | null
  }

  export type ViewColumnVisibilityAvgAggregateOutputType = {
    id: number | null
    viewId: number | null
    columnId: number | null
  }

  export type ViewColumnVisibilitySumAggregateOutputType = {
    id: number | null
    viewId: number | null
    columnId: number | null
  }

  export type ViewColumnVisibilityMinAggregateOutputType = {
    id: number | null
    viewId: number | null
    columnId: number | null
    isVisible: boolean | null
  }

  export type ViewColumnVisibilityMaxAggregateOutputType = {
    id: number | null
    viewId: number | null
    columnId: number | null
    isVisible: boolean | null
  }

  export type ViewColumnVisibilityCountAggregateOutputType = {
    id: number
    viewId: number
    columnId: number
    isVisible: number
    _all: number
  }


  export type ViewColumnVisibilityAvgAggregateInputType = {
    id?: true
    viewId?: true
    columnId?: true
  }

  export type ViewColumnVisibilitySumAggregateInputType = {
    id?: true
    viewId?: true
    columnId?: true
  }

  export type ViewColumnVisibilityMinAggregateInputType = {
    id?: true
    viewId?: true
    columnId?: true
    isVisible?: true
  }

  export type ViewColumnVisibilityMaxAggregateInputType = {
    id?: true
    viewId?: true
    columnId?: true
    isVisible?: true
  }

  export type ViewColumnVisibilityCountAggregateInputType = {
    id?: true
    viewId?: true
    columnId?: true
    isVisible?: true
    _all?: true
  }

  export type ViewColumnVisibilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewColumnVisibility to aggregate.
     */
    where?: ViewColumnVisibilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewColumnVisibilities to fetch.
     */
    orderBy?: ViewColumnVisibilityOrderByWithRelationInput | ViewColumnVisibilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewColumnVisibilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewColumnVisibilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewColumnVisibilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ViewColumnVisibilities
    **/
    _count?: true | ViewColumnVisibilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViewColumnVisibilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViewColumnVisibilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewColumnVisibilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewColumnVisibilityMaxAggregateInputType
  }

  export type GetViewColumnVisibilityAggregateType<T extends ViewColumnVisibilityAggregateArgs> = {
        [P in keyof T & keyof AggregateViewColumnVisibility]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViewColumnVisibility[P]>
      : GetScalarType<T[P], AggregateViewColumnVisibility[P]>
  }




  export type ViewColumnVisibilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewColumnVisibilityWhereInput
    orderBy?: ViewColumnVisibilityOrderByWithAggregationInput | ViewColumnVisibilityOrderByWithAggregationInput[]
    by: ViewColumnVisibilityScalarFieldEnum[] | ViewColumnVisibilityScalarFieldEnum
    having?: ViewColumnVisibilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewColumnVisibilityCountAggregateInputType | true
    _avg?: ViewColumnVisibilityAvgAggregateInputType
    _sum?: ViewColumnVisibilitySumAggregateInputType
    _min?: ViewColumnVisibilityMinAggregateInputType
    _max?: ViewColumnVisibilityMaxAggregateInputType
  }

  export type ViewColumnVisibilityGroupByOutputType = {
    id: number
    viewId: number
    columnId: number
    isVisible: boolean
    _count: ViewColumnVisibilityCountAggregateOutputType | null
    _avg: ViewColumnVisibilityAvgAggregateOutputType | null
    _sum: ViewColumnVisibilitySumAggregateOutputType | null
    _min: ViewColumnVisibilityMinAggregateOutputType | null
    _max: ViewColumnVisibilityMaxAggregateOutputType | null
  }

  type GetViewColumnVisibilityGroupByPayload<T extends ViewColumnVisibilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewColumnVisibilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewColumnVisibilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewColumnVisibilityGroupByOutputType[P]>
            : GetScalarType<T[P], ViewColumnVisibilityGroupByOutputType[P]>
        }
      >
    >


  export type ViewColumnVisibilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewId?: boolean
    columnId?: boolean
    isVisible?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewColumnVisibility"]>

  export type ViewColumnVisibilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewId?: boolean
    columnId?: boolean
    isVisible?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewColumnVisibility"]>

  export type ViewColumnVisibilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viewId?: boolean
    columnId?: boolean
    isVisible?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewColumnVisibility"]>

  export type ViewColumnVisibilitySelectScalar = {
    id?: boolean
    viewId?: boolean
    columnId?: boolean
    isVisible?: boolean
  }

  export type ViewColumnVisibilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "viewId" | "columnId" | "isVisible", ExtArgs["result"]["viewColumnVisibility"]>
  export type ViewColumnVisibilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }
  export type ViewColumnVisibilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }
  export type ViewColumnVisibilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }

  export type $ViewColumnVisibilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ViewColumnVisibility"
    objects: {
      view: Prisma.$ViewPayload<ExtArgs>
      column: Prisma.$ColumnPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      viewId: number
      columnId: number
      isVisible: boolean
    }, ExtArgs["result"]["viewColumnVisibility"]>
    composites: {}
  }

  type ViewColumnVisibilityGetPayload<S extends boolean | null | undefined | ViewColumnVisibilityDefaultArgs> = $Result.GetResult<Prisma.$ViewColumnVisibilityPayload, S>

  type ViewColumnVisibilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViewColumnVisibilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewColumnVisibilityCountAggregateInputType | true
    }

  export interface ViewColumnVisibilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ViewColumnVisibility'], meta: { name: 'ViewColumnVisibility' } }
    /**
     * Find zero or one ViewColumnVisibility that matches the filter.
     * @param {ViewColumnVisibilityFindUniqueArgs} args - Arguments to find a ViewColumnVisibility
     * @example
     * // Get one ViewColumnVisibility
     * const viewColumnVisibility = await prisma.viewColumnVisibility.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewColumnVisibilityFindUniqueArgs>(args: SelectSubset<T, ViewColumnVisibilityFindUniqueArgs<ExtArgs>>): Prisma__ViewColumnVisibilityClient<$Result.GetResult<Prisma.$ViewColumnVisibilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ViewColumnVisibility that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViewColumnVisibilityFindUniqueOrThrowArgs} args - Arguments to find a ViewColumnVisibility
     * @example
     * // Get one ViewColumnVisibility
     * const viewColumnVisibility = await prisma.viewColumnVisibility.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewColumnVisibilityFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewColumnVisibilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewColumnVisibilityClient<$Result.GetResult<Prisma.$ViewColumnVisibilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViewColumnVisibility that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewColumnVisibilityFindFirstArgs} args - Arguments to find a ViewColumnVisibility
     * @example
     * // Get one ViewColumnVisibility
     * const viewColumnVisibility = await prisma.viewColumnVisibility.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewColumnVisibilityFindFirstArgs>(args?: SelectSubset<T, ViewColumnVisibilityFindFirstArgs<ExtArgs>>): Prisma__ViewColumnVisibilityClient<$Result.GetResult<Prisma.$ViewColumnVisibilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViewColumnVisibility that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewColumnVisibilityFindFirstOrThrowArgs} args - Arguments to find a ViewColumnVisibility
     * @example
     * // Get one ViewColumnVisibility
     * const viewColumnVisibility = await prisma.viewColumnVisibility.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewColumnVisibilityFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewColumnVisibilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewColumnVisibilityClient<$Result.GetResult<Prisma.$ViewColumnVisibilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ViewColumnVisibilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewColumnVisibilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ViewColumnVisibilities
     * const viewColumnVisibilities = await prisma.viewColumnVisibility.findMany()
     * 
     * // Get first 10 ViewColumnVisibilities
     * const viewColumnVisibilities = await prisma.viewColumnVisibility.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewColumnVisibilityWithIdOnly = await prisma.viewColumnVisibility.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViewColumnVisibilityFindManyArgs>(args?: SelectSubset<T, ViewColumnVisibilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewColumnVisibilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ViewColumnVisibility.
     * @param {ViewColumnVisibilityCreateArgs} args - Arguments to create a ViewColumnVisibility.
     * @example
     * // Create one ViewColumnVisibility
     * const ViewColumnVisibility = await prisma.viewColumnVisibility.create({
     *   data: {
     *     // ... data to create a ViewColumnVisibility
     *   }
     * })
     * 
     */
    create<T extends ViewColumnVisibilityCreateArgs>(args: SelectSubset<T, ViewColumnVisibilityCreateArgs<ExtArgs>>): Prisma__ViewColumnVisibilityClient<$Result.GetResult<Prisma.$ViewColumnVisibilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ViewColumnVisibilities.
     * @param {ViewColumnVisibilityCreateManyArgs} args - Arguments to create many ViewColumnVisibilities.
     * @example
     * // Create many ViewColumnVisibilities
     * const viewColumnVisibility = await prisma.viewColumnVisibility.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewColumnVisibilityCreateManyArgs>(args?: SelectSubset<T, ViewColumnVisibilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ViewColumnVisibilities and returns the data saved in the database.
     * @param {ViewColumnVisibilityCreateManyAndReturnArgs} args - Arguments to create many ViewColumnVisibilities.
     * @example
     * // Create many ViewColumnVisibilities
     * const viewColumnVisibility = await prisma.viewColumnVisibility.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ViewColumnVisibilities and only return the `id`
     * const viewColumnVisibilityWithIdOnly = await prisma.viewColumnVisibility.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViewColumnVisibilityCreateManyAndReturnArgs>(args?: SelectSubset<T, ViewColumnVisibilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewColumnVisibilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ViewColumnVisibility.
     * @param {ViewColumnVisibilityDeleteArgs} args - Arguments to delete one ViewColumnVisibility.
     * @example
     * // Delete one ViewColumnVisibility
     * const ViewColumnVisibility = await prisma.viewColumnVisibility.delete({
     *   where: {
     *     // ... filter to delete one ViewColumnVisibility
     *   }
     * })
     * 
     */
    delete<T extends ViewColumnVisibilityDeleteArgs>(args: SelectSubset<T, ViewColumnVisibilityDeleteArgs<ExtArgs>>): Prisma__ViewColumnVisibilityClient<$Result.GetResult<Prisma.$ViewColumnVisibilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ViewColumnVisibility.
     * @param {ViewColumnVisibilityUpdateArgs} args - Arguments to update one ViewColumnVisibility.
     * @example
     * // Update one ViewColumnVisibility
     * const viewColumnVisibility = await prisma.viewColumnVisibility.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewColumnVisibilityUpdateArgs>(args: SelectSubset<T, ViewColumnVisibilityUpdateArgs<ExtArgs>>): Prisma__ViewColumnVisibilityClient<$Result.GetResult<Prisma.$ViewColumnVisibilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ViewColumnVisibilities.
     * @param {ViewColumnVisibilityDeleteManyArgs} args - Arguments to filter ViewColumnVisibilities to delete.
     * @example
     * // Delete a few ViewColumnVisibilities
     * const { count } = await prisma.viewColumnVisibility.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewColumnVisibilityDeleteManyArgs>(args?: SelectSubset<T, ViewColumnVisibilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewColumnVisibilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewColumnVisibilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ViewColumnVisibilities
     * const viewColumnVisibility = await prisma.viewColumnVisibility.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewColumnVisibilityUpdateManyArgs>(args: SelectSubset<T, ViewColumnVisibilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewColumnVisibilities and returns the data updated in the database.
     * @param {ViewColumnVisibilityUpdateManyAndReturnArgs} args - Arguments to update many ViewColumnVisibilities.
     * @example
     * // Update many ViewColumnVisibilities
     * const viewColumnVisibility = await prisma.viewColumnVisibility.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ViewColumnVisibilities and only return the `id`
     * const viewColumnVisibilityWithIdOnly = await prisma.viewColumnVisibility.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ViewColumnVisibilityUpdateManyAndReturnArgs>(args: SelectSubset<T, ViewColumnVisibilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewColumnVisibilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ViewColumnVisibility.
     * @param {ViewColumnVisibilityUpsertArgs} args - Arguments to update or create a ViewColumnVisibility.
     * @example
     * // Update or create a ViewColumnVisibility
     * const viewColumnVisibility = await prisma.viewColumnVisibility.upsert({
     *   create: {
     *     // ... data to create a ViewColumnVisibility
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ViewColumnVisibility we want to update
     *   }
     * })
     */
    upsert<T extends ViewColumnVisibilityUpsertArgs>(args: SelectSubset<T, ViewColumnVisibilityUpsertArgs<ExtArgs>>): Prisma__ViewColumnVisibilityClient<$Result.GetResult<Prisma.$ViewColumnVisibilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ViewColumnVisibilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewColumnVisibilityCountArgs} args - Arguments to filter ViewColumnVisibilities to count.
     * @example
     * // Count the number of ViewColumnVisibilities
     * const count = await prisma.viewColumnVisibility.count({
     *   where: {
     *     // ... the filter for the ViewColumnVisibilities we want to count
     *   }
     * })
    **/
    count<T extends ViewColumnVisibilityCountArgs>(
      args?: Subset<T, ViewColumnVisibilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewColumnVisibilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ViewColumnVisibility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewColumnVisibilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ViewColumnVisibilityAggregateArgs>(args: Subset<T, ViewColumnVisibilityAggregateArgs>): Prisma.PrismaPromise<GetViewColumnVisibilityAggregateType<T>>

    /**
     * Group by ViewColumnVisibility.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewColumnVisibilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ViewColumnVisibilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewColumnVisibilityGroupByArgs['orderBy'] }
        : { orderBy?: ViewColumnVisibilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ViewColumnVisibilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewColumnVisibilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ViewColumnVisibility model
   */
  readonly fields: ViewColumnVisibilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ViewColumnVisibility.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewColumnVisibilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    view<T extends ViewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ViewDefaultArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    column<T extends ColumnDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ColumnDefaultArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ViewColumnVisibility model
   */
  interface ViewColumnVisibilityFieldRefs {
    readonly id: FieldRef<"ViewColumnVisibility", 'Int'>
    readonly viewId: FieldRef<"ViewColumnVisibility", 'Int'>
    readonly columnId: FieldRef<"ViewColumnVisibility", 'Int'>
    readonly isVisible: FieldRef<"ViewColumnVisibility", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ViewColumnVisibility findUnique
   */
  export type ViewColumnVisibilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewColumnVisibility
     */
    select?: ViewColumnVisibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewColumnVisibility
     */
    omit?: ViewColumnVisibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewColumnVisibilityInclude<ExtArgs> | null
    /**
     * Filter, which ViewColumnVisibility to fetch.
     */
    where: ViewColumnVisibilityWhereUniqueInput
  }

  /**
   * ViewColumnVisibility findUniqueOrThrow
   */
  export type ViewColumnVisibilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewColumnVisibility
     */
    select?: ViewColumnVisibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewColumnVisibility
     */
    omit?: ViewColumnVisibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewColumnVisibilityInclude<ExtArgs> | null
    /**
     * Filter, which ViewColumnVisibility to fetch.
     */
    where: ViewColumnVisibilityWhereUniqueInput
  }

  /**
   * ViewColumnVisibility findFirst
   */
  export type ViewColumnVisibilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewColumnVisibility
     */
    select?: ViewColumnVisibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewColumnVisibility
     */
    omit?: ViewColumnVisibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewColumnVisibilityInclude<ExtArgs> | null
    /**
     * Filter, which ViewColumnVisibility to fetch.
     */
    where?: ViewColumnVisibilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewColumnVisibilities to fetch.
     */
    orderBy?: ViewColumnVisibilityOrderByWithRelationInput | ViewColumnVisibilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewColumnVisibilities.
     */
    cursor?: ViewColumnVisibilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewColumnVisibilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewColumnVisibilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewColumnVisibilities.
     */
    distinct?: ViewColumnVisibilityScalarFieldEnum | ViewColumnVisibilityScalarFieldEnum[]
  }

  /**
   * ViewColumnVisibility findFirstOrThrow
   */
  export type ViewColumnVisibilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewColumnVisibility
     */
    select?: ViewColumnVisibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewColumnVisibility
     */
    omit?: ViewColumnVisibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewColumnVisibilityInclude<ExtArgs> | null
    /**
     * Filter, which ViewColumnVisibility to fetch.
     */
    where?: ViewColumnVisibilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewColumnVisibilities to fetch.
     */
    orderBy?: ViewColumnVisibilityOrderByWithRelationInput | ViewColumnVisibilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewColumnVisibilities.
     */
    cursor?: ViewColumnVisibilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewColumnVisibilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewColumnVisibilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewColumnVisibilities.
     */
    distinct?: ViewColumnVisibilityScalarFieldEnum | ViewColumnVisibilityScalarFieldEnum[]
  }

  /**
   * ViewColumnVisibility findMany
   */
  export type ViewColumnVisibilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewColumnVisibility
     */
    select?: ViewColumnVisibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewColumnVisibility
     */
    omit?: ViewColumnVisibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewColumnVisibilityInclude<ExtArgs> | null
    /**
     * Filter, which ViewColumnVisibilities to fetch.
     */
    where?: ViewColumnVisibilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewColumnVisibilities to fetch.
     */
    orderBy?: ViewColumnVisibilityOrderByWithRelationInput | ViewColumnVisibilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ViewColumnVisibilities.
     */
    cursor?: ViewColumnVisibilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewColumnVisibilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewColumnVisibilities.
     */
    skip?: number
    distinct?: ViewColumnVisibilityScalarFieldEnum | ViewColumnVisibilityScalarFieldEnum[]
  }

  /**
   * ViewColumnVisibility create
   */
  export type ViewColumnVisibilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewColumnVisibility
     */
    select?: ViewColumnVisibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewColumnVisibility
     */
    omit?: ViewColumnVisibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewColumnVisibilityInclude<ExtArgs> | null
    /**
     * The data needed to create a ViewColumnVisibility.
     */
    data: XOR<ViewColumnVisibilityCreateInput, ViewColumnVisibilityUncheckedCreateInput>
  }

  /**
   * ViewColumnVisibility createMany
   */
  export type ViewColumnVisibilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ViewColumnVisibilities.
     */
    data: ViewColumnVisibilityCreateManyInput | ViewColumnVisibilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ViewColumnVisibility createManyAndReturn
   */
  export type ViewColumnVisibilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewColumnVisibility
     */
    select?: ViewColumnVisibilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ViewColumnVisibility
     */
    omit?: ViewColumnVisibilityOmit<ExtArgs> | null
    /**
     * The data used to create many ViewColumnVisibilities.
     */
    data: ViewColumnVisibilityCreateManyInput | ViewColumnVisibilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewColumnVisibilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ViewColumnVisibility update
   */
  export type ViewColumnVisibilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewColumnVisibility
     */
    select?: ViewColumnVisibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewColumnVisibility
     */
    omit?: ViewColumnVisibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewColumnVisibilityInclude<ExtArgs> | null
    /**
     * The data needed to update a ViewColumnVisibility.
     */
    data: XOR<ViewColumnVisibilityUpdateInput, ViewColumnVisibilityUncheckedUpdateInput>
    /**
     * Choose, which ViewColumnVisibility to update.
     */
    where: ViewColumnVisibilityWhereUniqueInput
  }

  /**
   * ViewColumnVisibility updateMany
   */
  export type ViewColumnVisibilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ViewColumnVisibilities.
     */
    data: XOR<ViewColumnVisibilityUpdateManyMutationInput, ViewColumnVisibilityUncheckedUpdateManyInput>
    /**
     * Filter which ViewColumnVisibilities to update
     */
    where?: ViewColumnVisibilityWhereInput
    /**
     * Limit how many ViewColumnVisibilities to update.
     */
    limit?: number
  }

  /**
   * ViewColumnVisibility updateManyAndReturn
   */
  export type ViewColumnVisibilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewColumnVisibility
     */
    select?: ViewColumnVisibilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ViewColumnVisibility
     */
    omit?: ViewColumnVisibilityOmit<ExtArgs> | null
    /**
     * The data used to update ViewColumnVisibilities.
     */
    data: XOR<ViewColumnVisibilityUpdateManyMutationInput, ViewColumnVisibilityUncheckedUpdateManyInput>
    /**
     * Filter which ViewColumnVisibilities to update
     */
    where?: ViewColumnVisibilityWhereInput
    /**
     * Limit how many ViewColumnVisibilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewColumnVisibilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ViewColumnVisibility upsert
   */
  export type ViewColumnVisibilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewColumnVisibility
     */
    select?: ViewColumnVisibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewColumnVisibility
     */
    omit?: ViewColumnVisibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewColumnVisibilityInclude<ExtArgs> | null
    /**
     * The filter to search for the ViewColumnVisibility to update in case it exists.
     */
    where: ViewColumnVisibilityWhereUniqueInput
    /**
     * In case the ViewColumnVisibility found by the `where` argument doesn't exist, create a new ViewColumnVisibility with this data.
     */
    create: XOR<ViewColumnVisibilityCreateInput, ViewColumnVisibilityUncheckedCreateInput>
    /**
     * In case the ViewColumnVisibility was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewColumnVisibilityUpdateInput, ViewColumnVisibilityUncheckedUpdateInput>
  }

  /**
   * ViewColumnVisibility delete
   */
  export type ViewColumnVisibilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewColumnVisibility
     */
    select?: ViewColumnVisibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewColumnVisibility
     */
    omit?: ViewColumnVisibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewColumnVisibilityInclude<ExtArgs> | null
    /**
     * Filter which ViewColumnVisibility to delete.
     */
    where: ViewColumnVisibilityWhereUniqueInput
  }

  /**
   * ViewColumnVisibility deleteMany
   */
  export type ViewColumnVisibilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewColumnVisibilities to delete
     */
    where?: ViewColumnVisibilityWhereInput
    /**
     * Limit how many ViewColumnVisibilities to delete.
     */
    limit?: number
  }

  /**
   * ViewColumnVisibility without action
   */
  export type ViewColumnVisibilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewColumnVisibility
     */
    select?: ViewColumnVisibilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewColumnVisibility
     */
    omit?: ViewColumnVisibilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewColumnVisibilityInclude<ExtArgs> | null
  }


  /**
   * Model Row
   */

  export type AggregateRow = {
    _count: RowCountAggregateOutputType | null
    _avg: RowAvgAggregateOutputType | null
    _sum: RowSumAggregateOutputType | null
    _min: RowMinAggregateOutputType | null
    _max: RowMaxAggregateOutputType | null
  }

  export type RowAvgAggregateOutputType = {
    id: number | null
    tableId: number | null
  }

  export type RowSumAggregateOutputType = {
    id: number | null
    tableId: number | null
  }

  export type RowMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    tableId: number | null
  }

  export type RowMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    tableId: number | null
  }

  export type RowCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    tableId: number
    _all: number
  }


  export type RowAvgAggregateInputType = {
    id?: true
    tableId?: true
  }

  export type RowSumAggregateInputType = {
    id?: true
    tableId?: true
  }

  export type RowMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    tableId?: true
  }

  export type RowMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    tableId?: true
  }

  export type RowCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    tableId?: true
    _all?: true
  }

  export type RowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Row to aggregate.
     */
    where?: RowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rows to fetch.
     */
    orderBy?: RowOrderByWithRelationInput | RowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rows
    **/
    _count?: true | RowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RowMaxAggregateInputType
  }

  export type GetRowAggregateType<T extends RowAggregateArgs> = {
        [P in keyof T & keyof AggregateRow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRow[P]>
      : GetScalarType<T[P], AggregateRow[P]>
  }




  export type RowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RowWhereInput
    orderBy?: RowOrderByWithAggregationInput | RowOrderByWithAggregationInput[]
    by: RowScalarFieldEnum[] | RowScalarFieldEnum
    having?: RowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RowCountAggregateInputType | true
    _avg?: RowAvgAggregateInputType
    _sum?: RowSumAggregateInputType
    _min?: RowMinAggregateInputType
    _max?: RowMaxAggregateInputType
  }

  export type RowGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    tableId: number
    _count: RowCountAggregateOutputType | null
    _avg: RowAvgAggregateOutputType | null
    _sum: RowSumAggregateOutputType | null
    _min: RowMinAggregateOutputType | null
    _max: RowMaxAggregateOutputType | null
  }

  type GetRowGroupByPayload<T extends RowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RowGroupByOutputType[P]>
            : GetScalarType<T[P], RowGroupByOutputType[P]>
        }
      >
    >


  export type RowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tableId?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
    cells?: boolean | Row$cellsArgs<ExtArgs>
    _count?: boolean | RowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["row"]>

  export type RowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tableId?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["row"]>

  export type RowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tableId?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["row"]>

  export type RowSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tableId?: boolean
  }

  export type RowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "tableId", ExtArgs["result"]["row"]>
  export type RowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
    cells?: boolean | Row$cellsArgs<ExtArgs>
    _count?: boolean | RowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
  }
  export type RowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
  }

  export type $RowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Row"
    objects: {
      table: Prisma.$TablePayload<ExtArgs>
      cells: Prisma.$CellPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      tableId: number
    }, ExtArgs["result"]["row"]>
    composites: {}
  }

  type RowGetPayload<S extends boolean | null | undefined | RowDefaultArgs> = $Result.GetResult<Prisma.$RowPayload, S>

  type RowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RowCountAggregateInputType | true
    }

  export interface RowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Row'], meta: { name: 'Row' } }
    /**
     * Find zero or one Row that matches the filter.
     * @param {RowFindUniqueArgs} args - Arguments to find a Row
     * @example
     * // Get one Row
     * const row = await prisma.row.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RowFindUniqueArgs>(args: SelectSubset<T, RowFindUniqueArgs<ExtArgs>>): Prisma__RowClient<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Row that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RowFindUniqueOrThrowArgs} args - Arguments to find a Row
     * @example
     * // Get one Row
     * const row = await prisma.row.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RowFindUniqueOrThrowArgs>(args: SelectSubset<T, RowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RowClient<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Row that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RowFindFirstArgs} args - Arguments to find a Row
     * @example
     * // Get one Row
     * const row = await prisma.row.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RowFindFirstArgs>(args?: SelectSubset<T, RowFindFirstArgs<ExtArgs>>): Prisma__RowClient<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Row that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RowFindFirstOrThrowArgs} args - Arguments to find a Row
     * @example
     * // Get one Row
     * const row = await prisma.row.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RowFindFirstOrThrowArgs>(args?: SelectSubset<T, RowFindFirstOrThrowArgs<ExtArgs>>): Prisma__RowClient<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rows
     * const rows = await prisma.row.findMany()
     * 
     * // Get first 10 Rows
     * const rows = await prisma.row.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rowWithIdOnly = await prisma.row.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RowFindManyArgs>(args?: SelectSubset<T, RowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Row.
     * @param {RowCreateArgs} args - Arguments to create a Row.
     * @example
     * // Create one Row
     * const Row = await prisma.row.create({
     *   data: {
     *     // ... data to create a Row
     *   }
     * })
     * 
     */
    create<T extends RowCreateArgs>(args: SelectSubset<T, RowCreateArgs<ExtArgs>>): Prisma__RowClient<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rows.
     * @param {RowCreateManyArgs} args - Arguments to create many Rows.
     * @example
     * // Create many Rows
     * const row = await prisma.row.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RowCreateManyArgs>(args?: SelectSubset<T, RowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rows and returns the data saved in the database.
     * @param {RowCreateManyAndReturnArgs} args - Arguments to create many Rows.
     * @example
     * // Create many Rows
     * const row = await prisma.row.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rows and only return the `id`
     * const rowWithIdOnly = await prisma.row.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RowCreateManyAndReturnArgs>(args?: SelectSubset<T, RowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Row.
     * @param {RowDeleteArgs} args - Arguments to delete one Row.
     * @example
     * // Delete one Row
     * const Row = await prisma.row.delete({
     *   where: {
     *     // ... filter to delete one Row
     *   }
     * })
     * 
     */
    delete<T extends RowDeleteArgs>(args: SelectSubset<T, RowDeleteArgs<ExtArgs>>): Prisma__RowClient<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Row.
     * @param {RowUpdateArgs} args - Arguments to update one Row.
     * @example
     * // Update one Row
     * const row = await prisma.row.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RowUpdateArgs>(args: SelectSubset<T, RowUpdateArgs<ExtArgs>>): Prisma__RowClient<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rows.
     * @param {RowDeleteManyArgs} args - Arguments to filter Rows to delete.
     * @example
     * // Delete a few Rows
     * const { count } = await prisma.row.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RowDeleteManyArgs>(args?: SelectSubset<T, RowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rows
     * const row = await prisma.row.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RowUpdateManyArgs>(args: SelectSubset<T, RowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rows and returns the data updated in the database.
     * @param {RowUpdateManyAndReturnArgs} args - Arguments to update many Rows.
     * @example
     * // Update many Rows
     * const row = await prisma.row.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rows and only return the `id`
     * const rowWithIdOnly = await prisma.row.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RowUpdateManyAndReturnArgs>(args: SelectSubset<T, RowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Row.
     * @param {RowUpsertArgs} args - Arguments to update or create a Row.
     * @example
     * // Update or create a Row
     * const row = await prisma.row.upsert({
     *   create: {
     *     // ... data to create a Row
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Row we want to update
     *   }
     * })
     */
    upsert<T extends RowUpsertArgs>(args: SelectSubset<T, RowUpsertArgs<ExtArgs>>): Prisma__RowClient<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RowCountArgs} args - Arguments to filter Rows to count.
     * @example
     * // Count the number of Rows
     * const count = await prisma.row.count({
     *   where: {
     *     // ... the filter for the Rows we want to count
     *   }
     * })
    **/
    count<T extends RowCountArgs>(
      args?: Subset<T, RowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Row.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RowAggregateArgs>(args: Subset<T, RowAggregateArgs>): Prisma.PrismaPromise<GetRowAggregateType<T>>

    /**
     * Group by Row.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RowGroupByArgs['orderBy'] }
        : { orderBy?: RowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Row model
   */
  readonly fields: RowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Row.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    table<T extends TableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TableDefaultArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cells<T extends Row$cellsArgs<ExtArgs> = {}>(args?: Subset<T, Row$cellsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Row model
   */
  interface RowFieldRefs {
    readonly id: FieldRef<"Row", 'Int'>
    readonly createdAt: FieldRef<"Row", 'DateTime'>
    readonly updatedAt: FieldRef<"Row", 'DateTime'>
    readonly tableId: FieldRef<"Row", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Row findUnique
   */
  export type RowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowInclude<ExtArgs> | null
    /**
     * Filter, which Row to fetch.
     */
    where: RowWhereUniqueInput
  }

  /**
   * Row findUniqueOrThrow
   */
  export type RowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowInclude<ExtArgs> | null
    /**
     * Filter, which Row to fetch.
     */
    where: RowWhereUniqueInput
  }

  /**
   * Row findFirst
   */
  export type RowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowInclude<ExtArgs> | null
    /**
     * Filter, which Row to fetch.
     */
    where?: RowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rows to fetch.
     */
    orderBy?: RowOrderByWithRelationInput | RowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rows.
     */
    cursor?: RowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rows.
     */
    distinct?: RowScalarFieldEnum | RowScalarFieldEnum[]
  }

  /**
   * Row findFirstOrThrow
   */
  export type RowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowInclude<ExtArgs> | null
    /**
     * Filter, which Row to fetch.
     */
    where?: RowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rows to fetch.
     */
    orderBy?: RowOrderByWithRelationInput | RowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rows.
     */
    cursor?: RowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rows.
     */
    distinct?: RowScalarFieldEnum | RowScalarFieldEnum[]
  }

  /**
   * Row findMany
   */
  export type RowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowInclude<ExtArgs> | null
    /**
     * Filter, which Rows to fetch.
     */
    where?: RowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rows to fetch.
     */
    orderBy?: RowOrderByWithRelationInput | RowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rows.
     */
    cursor?: RowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rows.
     */
    skip?: number
    distinct?: RowScalarFieldEnum | RowScalarFieldEnum[]
  }

  /**
   * Row create
   */
  export type RowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowInclude<ExtArgs> | null
    /**
     * The data needed to create a Row.
     */
    data: XOR<RowCreateInput, RowUncheckedCreateInput>
  }

  /**
   * Row createMany
   */
  export type RowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rows.
     */
    data: RowCreateManyInput | RowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Row createManyAndReturn
   */
  export type RowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * The data used to create many Rows.
     */
    data: RowCreateManyInput | RowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Row update
   */
  export type RowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowInclude<ExtArgs> | null
    /**
     * The data needed to update a Row.
     */
    data: XOR<RowUpdateInput, RowUncheckedUpdateInput>
    /**
     * Choose, which Row to update.
     */
    where: RowWhereUniqueInput
  }

  /**
   * Row updateMany
   */
  export type RowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rows.
     */
    data: XOR<RowUpdateManyMutationInput, RowUncheckedUpdateManyInput>
    /**
     * Filter which Rows to update
     */
    where?: RowWhereInput
    /**
     * Limit how many Rows to update.
     */
    limit?: number
  }

  /**
   * Row updateManyAndReturn
   */
  export type RowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * The data used to update Rows.
     */
    data: XOR<RowUpdateManyMutationInput, RowUncheckedUpdateManyInput>
    /**
     * Filter which Rows to update
     */
    where?: RowWhereInput
    /**
     * Limit how many Rows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Row upsert
   */
  export type RowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowInclude<ExtArgs> | null
    /**
     * The filter to search for the Row to update in case it exists.
     */
    where: RowWhereUniqueInput
    /**
     * In case the Row found by the `where` argument doesn't exist, create a new Row with this data.
     */
    create: XOR<RowCreateInput, RowUncheckedCreateInput>
    /**
     * In case the Row was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RowUpdateInput, RowUncheckedUpdateInput>
  }

  /**
   * Row delete
   */
  export type RowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowInclude<ExtArgs> | null
    /**
     * Filter which Row to delete.
     */
    where: RowWhereUniqueInput
  }

  /**
   * Row deleteMany
   */
  export type RowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rows to delete
     */
    where?: RowWhereInput
    /**
     * Limit how many Rows to delete.
     */
    limit?: number
  }

  /**
   * Row.cells
   */
  export type Row$cellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    where?: CellWhereInput
    orderBy?: CellOrderByWithRelationInput | CellOrderByWithRelationInput[]
    cursor?: CellWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CellScalarFieldEnum | CellScalarFieldEnum[]
  }

  /**
   * Row without action
   */
  export type RowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Row
     */
    select?: RowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Row
     */
    omit?: RowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RowInclude<ExtArgs> | null
  }


  /**
   * Model Cell
   */

  export type AggregateCell = {
    _count: CellCountAggregateOutputType | null
    _avg: CellAvgAggregateOutputType | null
    _sum: CellSumAggregateOutputType | null
    _min: CellMinAggregateOutputType | null
    _max: CellMaxAggregateOutputType | null
  }

  export type CellAvgAggregateOutputType = {
    id: number | null
    rowId: number | null
    columnId: number | null
  }

  export type CellSumAggregateOutputType = {
    id: number | null
    rowId: number | null
    columnId: number | null
  }

  export type CellMinAggregateOutputType = {
    id: number | null
    value: string | null
    rowId: number | null
    columnId: number | null
  }

  export type CellMaxAggregateOutputType = {
    id: number | null
    value: string | null
    rowId: number | null
    columnId: number | null
  }

  export type CellCountAggregateOutputType = {
    id: number
    value: number
    rowId: number
    columnId: number
    _all: number
  }


  export type CellAvgAggregateInputType = {
    id?: true
    rowId?: true
    columnId?: true
  }

  export type CellSumAggregateInputType = {
    id?: true
    rowId?: true
    columnId?: true
  }

  export type CellMinAggregateInputType = {
    id?: true
    value?: true
    rowId?: true
    columnId?: true
  }

  export type CellMaxAggregateInputType = {
    id?: true
    value?: true
    rowId?: true
    columnId?: true
  }

  export type CellCountAggregateInputType = {
    id?: true
    value?: true
    rowId?: true
    columnId?: true
    _all?: true
  }

  export type CellAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cell to aggregate.
     */
    where?: CellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cells to fetch.
     */
    orderBy?: CellOrderByWithRelationInput | CellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cells
    **/
    _count?: true | CellCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CellAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CellSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CellMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CellMaxAggregateInputType
  }

  export type GetCellAggregateType<T extends CellAggregateArgs> = {
        [P in keyof T & keyof AggregateCell]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCell[P]>
      : GetScalarType<T[P], AggregateCell[P]>
  }




  export type CellGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CellWhereInput
    orderBy?: CellOrderByWithAggregationInput | CellOrderByWithAggregationInput[]
    by: CellScalarFieldEnum[] | CellScalarFieldEnum
    having?: CellScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CellCountAggregateInputType | true
    _avg?: CellAvgAggregateInputType
    _sum?: CellSumAggregateInputType
    _min?: CellMinAggregateInputType
    _max?: CellMaxAggregateInputType
  }

  export type CellGroupByOutputType = {
    id: number
    value: string | null
    rowId: number
    columnId: number
    _count: CellCountAggregateOutputType | null
    _avg: CellAvgAggregateOutputType | null
    _sum: CellSumAggregateOutputType | null
    _min: CellMinAggregateOutputType | null
    _max: CellMaxAggregateOutputType | null
  }

  type GetCellGroupByPayload<T extends CellGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CellGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CellGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CellGroupByOutputType[P]>
            : GetScalarType<T[P], CellGroupByOutputType[P]>
        }
      >
    >


  export type CellSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    rowId?: boolean
    columnId?: boolean
    row?: boolean | RowDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cell"]>

  export type CellSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    rowId?: boolean
    columnId?: boolean
    row?: boolean | RowDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cell"]>

  export type CellSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    rowId?: boolean
    columnId?: boolean
    row?: boolean | RowDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cell"]>

  export type CellSelectScalar = {
    id?: boolean
    value?: boolean
    rowId?: boolean
    columnId?: boolean
  }

  export type CellOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "rowId" | "columnId", ExtArgs["result"]["cell"]>
  export type CellInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    row?: boolean | RowDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }
  export type CellIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    row?: boolean | RowDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }
  export type CellIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    row?: boolean | RowDefaultArgs<ExtArgs>
    column?: boolean | ColumnDefaultArgs<ExtArgs>
  }

  export type $CellPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cell"
    objects: {
      row: Prisma.$RowPayload<ExtArgs>
      column: Prisma.$ColumnPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      value: string | null
      rowId: number
      columnId: number
    }, ExtArgs["result"]["cell"]>
    composites: {}
  }

  type CellGetPayload<S extends boolean | null | undefined | CellDefaultArgs> = $Result.GetResult<Prisma.$CellPayload, S>

  type CellCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CellFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CellCountAggregateInputType | true
    }

  export interface CellDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cell'], meta: { name: 'Cell' } }
    /**
     * Find zero or one Cell that matches the filter.
     * @param {CellFindUniqueArgs} args - Arguments to find a Cell
     * @example
     * // Get one Cell
     * const cell = await prisma.cell.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CellFindUniqueArgs>(args: SelectSubset<T, CellFindUniqueArgs<ExtArgs>>): Prisma__CellClient<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cell that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CellFindUniqueOrThrowArgs} args - Arguments to find a Cell
     * @example
     * // Get one Cell
     * const cell = await prisma.cell.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CellFindUniqueOrThrowArgs>(args: SelectSubset<T, CellFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CellClient<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cell that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellFindFirstArgs} args - Arguments to find a Cell
     * @example
     * // Get one Cell
     * const cell = await prisma.cell.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CellFindFirstArgs>(args?: SelectSubset<T, CellFindFirstArgs<ExtArgs>>): Prisma__CellClient<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cell that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellFindFirstOrThrowArgs} args - Arguments to find a Cell
     * @example
     * // Get one Cell
     * const cell = await prisma.cell.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CellFindFirstOrThrowArgs>(args?: SelectSubset<T, CellFindFirstOrThrowArgs<ExtArgs>>): Prisma__CellClient<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cells that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cells
     * const cells = await prisma.cell.findMany()
     * 
     * // Get first 10 Cells
     * const cells = await prisma.cell.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cellWithIdOnly = await prisma.cell.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CellFindManyArgs>(args?: SelectSubset<T, CellFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cell.
     * @param {CellCreateArgs} args - Arguments to create a Cell.
     * @example
     * // Create one Cell
     * const Cell = await prisma.cell.create({
     *   data: {
     *     // ... data to create a Cell
     *   }
     * })
     * 
     */
    create<T extends CellCreateArgs>(args: SelectSubset<T, CellCreateArgs<ExtArgs>>): Prisma__CellClient<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cells.
     * @param {CellCreateManyArgs} args - Arguments to create many Cells.
     * @example
     * // Create many Cells
     * const cell = await prisma.cell.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CellCreateManyArgs>(args?: SelectSubset<T, CellCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cells and returns the data saved in the database.
     * @param {CellCreateManyAndReturnArgs} args - Arguments to create many Cells.
     * @example
     * // Create many Cells
     * const cell = await prisma.cell.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cells and only return the `id`
     * const cellWithIdOnly = await prisma.cell.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CellCreateManyAndReturnArgs>(args?: SelectSubset<T, CellCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cell.
     * @param {CellDeleteArgs} args - Arguments to delete one Cell.
     * @example
     * // Delete one Cell
     * const Cell = await prisma.cell.delete({
     *   where: {
     *     // ... filter to delete one Cell
     *   }
     * })
     * 
     */
    delete<T extends CellDeleteArgs>(args: SelectSubset<T, CellDeleteArgs<ExtArgs>>): Prisma__CellClient<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cell.
     * @param {CellUpdateArgs} args - Arguments to update one Cell.
     * @example
     * // Update one Cell
     * const cell = await prisma.cell.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CellUpdateArgs>(args: SelectSubset<T, CellUpdateArgs<ExtArgs>>): Prisma__CellClient<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cells.
     * @param {CellDeleteManyArgs} args - Arguments to filter Cells to delete.
     * @example
     * // Delete a few Cells
     * const { count } = await prisma.cell.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CellDeleteManyArgs>(args?: SelectSubset<T, CellDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cells.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cells
     * const cell = await prisma.cell.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CellUpdateManyArgs>(args: SelectSubset<T, CellUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cells and returns the data updated in the database.
     * @param {CellUpdateManyAndReturnArgs} args - Arguments to update many Cells.
     * @example
     * // Update many Cells
     * const cell = await prisma.cell.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cells and only return the `id`
     * const cellWithIdOnly = await prisma.cell.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CellUpdateManyAndReturnArgs>(args: SelectSubset<T, CellUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cell.
     * @param {CellUpsertArgs} args - Arguments to update or create a Cell.
     * @example
     * // Update or create a Cell
     * const cell = await prisma.cell.upsert({
     *   create: {
     *     // ... data to create a Cell
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cell we want to update
     *   }
     * })
     */
    upsert<T extends CellUpsertArgs>(args: SelectSubset<T, CellUpsertArgs<ExtArgs>>): Prisma__CellClient<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cells.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellCountArgs} args - Arguments to filter Cells to count.
     * @example
     * // Count the number of Cells
     * const count = await prisma.cell.count({
     *   where: {
     *     // ... the filter for the Cells we want to count
     *   }
     * })
    **/
    count<T extends CellCountArgs>(
      args?: Subset<T, CellCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CellCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cell.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CellAggregateArgs>(args: Subset<T, CellAggregateArgs>): Prisma.PrismaPromise<GetCellAggregateType<T>>

    /**
     * Group by Cell.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CellGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CellGroupByArgs['orderBy'] }
        : { orderBy?: CellGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CellGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCellGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cell model
   */
  readonly fields: CellFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cell.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CellClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    row<T extends RowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RowDefaultArgs<ExtArgs>>): Prisma__RowClient<$Result.GetResult<Prisma.$RowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    column<T extends ColumnDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ColumnDefaultArgs<ExtArgs>>): Prisma__ColumnClient<$Result.GetResult<Prisma.$ColumnPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cell model
   */
  interface CellFieldRefs {
    readonly id: FieldRef<"Cell", 'Int'>
    readonly value: FieldRef<"Cell", 'String'>
    readonly rowId: FieldRef<"Cell", 'Int'>
    readonly columnId: FieldRef<"Cell", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cell findUnique
   */
  export type CellFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * Filter, which Cell to fetch.
     */
    where: CellWhereUniqueInput
  }

  /**
   * Cell findUniqueOrThrow
   */
  export type CellFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * Filter, which Cell to fetch.
     */
    where: CellWhereUniqueInput
  }

  /**
   * Cell findFirst
   */
  export type CellFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * Filter, which Cell to fetch.
     */
    where?: CellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cells to fetch.
     */
    orderBy?: CellOrderByWithRelationInput | CellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cells.
     */
    cursor?: CellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cells.
     */
    distinct?: CellScalarFieldEnum | CellScalarFieldEnum[]
  }

  /**
   * Cell findFirstOrThrow
   */
  export type CellFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * Filter, which Cell to fetch.
     */
    where?: CellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cells to fetch.
     */
    orderBy?: CellOrderByWithRelationInput | CellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cells.
     */
    cursor?: CellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cells.
     */
    distinct?: CellScalarFieldEnum | CellScalarFieldEnum[]
  }

  /**
   * Cell findMany
   */
  export type CellFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * Filter, which Cells to fetch.
     */
    where?: CellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cells to fetch.
     */
    orderBy?: CellOrderByWithRelationInput | CellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cells.
     */
    cursor?: CellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cells.
     */
    skip?: number
    distinct?: CellScalarFieldEnum | CellScalarFieldEnum[]
  }

  /**
   * Cell create
   */
  export type CellCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * The data needed to create a Cell.
     */
    data: XOR<CellCreateInput, CellUncheckedCreateInput>
  }

  /**
   * Cell createMany
   */
  export type CellCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cells.
     */
    data: CellCreateManyInput | CellCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cell createManyAndReturn
   */
  export type CellCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * The data used to create many Cells.
     */
    data: CellCreateManyInput | CellCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cell update
   */
  export type CellUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * The data needed to update a Cell.
     */
    data: XOR<CellUpdateInput, CellUncheckedUpdateInput>
    /**
     * Choose, which Cell to update.
     */
    where: CellWhereUniqueInput
  }

  /**
   * Cell updateMany
   */
  export type CellUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cells.
     */
    data: XOR<CellUpdateManyMutationInput, CellUncheckedUpdateManyInput>
    /**
     * Filter which Cells to update
     */
    where?: CellWhereInput
    /**
     * Limit how many Cells to update.
     */
    limit?: number
  }

  /**
   * Cell updateManyAndReturn
   */
  export type CellUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * The data used to update Cells.
     */
    data: XOR<CellUpdateManyMutationInput, CellUncheckedUpdateManyInput>
    /**
     * Filter which Cells to update
     */
    where?: CellWhereInput
    /**
     * Limit how many Cells to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cell upsert
   */
  export type CellUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * The filter to search for the Cell to update in case it exists.
     */
    where: CellWhereUniqueInput
    /**
     * In case the Cell found by the `where` argument doesn't exist, create a new Cell with this data.
     */
    create: XOR<CellCreateInput, CellUncheckedCreateInput>
    /**
     * In case the Cell was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CellUpdateInput, CellUncheckedUpdateInput>
  }

  /**
   * Cell delete
   */
  export type CellDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * Filter which Cell to delete.
     */
    where: CellWhereUniqueInput
  }

  /**
   * Cell deleteMany
   */
  export type CellDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cells to delete
     */
    where?: CellWhereInput
    /**
     * Limit how many Cells to delete.
     */
    limit?: number
  }

  /**
   * Cell without action
   */
  export type CellDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BaseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BaseScalarFieldEnum = (typeof BaseScalarFieldEnum)[keyof typeof BaseScalarFieldEnum]


  export const TableScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    baseId: 'baseId'
  };

  export type TableScalarFieldEnum = (typeof TableScalarFieldEnum)[keyof typeof TableScalarFieldEnum]


  export const ColumnScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    position: 'position',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tableId: 'tableId'
  };

  export type ColumnScalarFieldEnum = (typeof ColumnScalarFieldEnum)[keyof typeof ColumnScalarFieldEnum]


  export const ViewScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    tableId: 'tableId',
    isDefault: 'isDefault',
    searchQuery: 'searchQuery',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ViewScalarFieldEnum = (typeof ViewScalarFieldEnum)[keyof typeof ViewScalarFieldEnum]


  export const ViewFilterScalarFieldEnum: {
    id: 'id',
    viewId: 'viewId',
    columnId: 'columnId',
    operator: 'operator',
    value: 'value',
    position: 'position'
  };

  export type ViewFilterScalarFieldEnum = (typeof ViewFilterScalarFieldEnum)[keyof typeof ViewFilterScalarFieldEnum]


  export const ViewSortScalarFieldEnum: {
    id: 'id',
    viewId: 'viewId',
    columnId: 'columnId',
    direction: 'direction',
    position: 'position'
  };

  export type ViewSortScalarFieldEnum = (typeof ViewSortScalarFieldEnum)[keyof typeof ViewSortScalarFieldEnum]


  export const ViewColumnVisibilityScalarFieldEnum: {
    id: 'id',
    viewId: 'viewId',
    columnId: 'columnId',
    isVisible: 'isVisible'
  };

  export type ViewColumnVisibilityScalarFieldEnum = (typeof ViewColumnVisibilityScalarFieldEnum)[keyof typeof ViewColumnVisibilityScalarFieldEnum]


  export const RowScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tableId: 'tableId'
  };

  export type RowScalarFieldEnum = (typeof RowScalarFieldEnum)[keyof typeof RowScalarFieldEnum]


  export const CellScalarFieldEnum: {
    id: 'id',
    value: 'value',
    rowId: 'rowId',
    columnId: 'columnId'
  };

  export type CellScalarFieldEnum = (typeof CellScalarFieldEnum)[keyof typeof CellScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ColumnType'
   */
  export type EnumColumnTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ColumnType'>
    


  /**
   * Reference to a field of type 'ColumnType[]'
   */
  export type ListEnumColumnTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ColumnType[]'>
    


  /**
   * Reference to a field of type 'ViewType'
   */
  export type EnumViewTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ViewType'>
    


  /**
   * Reference to a field of type 'ViewType[]'
   */
  export type ListEnumViewTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ViewType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ViewFilterOperator'
   */
  export type EnumViewFilterOperatorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ViewFilterOperator'>
    


  /**
   * Reference to a field of type 'ViewFilterOperator[]'
   */
  export type ListEnumViewFilterOperatorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ViewFilterOperator[]'>
    


  /**
   * Reference to a field of type 'ViewSortDirection'
   */
  export type EnumViewSortDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ViewSortDirection'>
    


  /**
   * Reference to a field of type 'ViewSortDirection[]'
   */
  export type ListEnumViewSortDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ViewSortDirection[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BaseWhereInput = {
    AND?: BaseWhereInput | BaseWhereInput[]
    OR?: BaseWhereInput[]
    NOT?: BaseWhereInput | BaseWhereInput[]
    id?: IntFilter<"Base"> | number
    name?: StringFilter<"Base"> | string
    createdAt?: DateTimeFilter<"Base"> | Date | string
    updatedAt?: DateTimeFilter<"Base"> | Date | string
    tables?: TableListRelationFilter
  }

  export type BaseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tables?: TableOrderByRelationAggregateInput
  }

  export type BaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BaseWhereInput | BaseWhereInput[]
    OR?: BaseWhereInput[]
    NOT?: BaseWhereInput | BaseWhereInput[]
    name?: StringFilter<"Base"> | string
    createdAt?: DateTimeFilter<"Base"> | Date | string
    updatedAt?: DateTimeFilter<"Base"> | Date | string
    tables?: TableListRelationFilter
  }, "id">

  export type BaseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BaseCountOrderByAggregateInput
    _avg?: BaseAvgOrderByAggregateInput
    _max?: BaseMaxOrderByAggregateInput
    _min?: BaseMinOrderByAggregateInput
    _sum?: BaseSumOrderByAggregateInput
  }

  export type BaseScalarWhereWithAggregatesInput = {
    AND?: BaseScalarWhereWithAggregatesInput | BaseScalarWhereWithAggregatesInput[]
    OR?: BaseScalarWhereWithAggregatesInput[]
    NOT?: BaseScalarWhereWithAggregatesInput | BaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Base"> | number
    name?: StringWithAggregatesFilter<"Base"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Base"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Base"> | Date | string
  }

  export type TableWhereInput = {
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    id?: IntFilter<"Table"> | number
    name?: StringFilter<"Table"> | string
    createdAt?: DateTimeFilter<"Table"> | Date | string
    updatedAt?: DateTimeFilter<"Table"> | Date | string
    baseId?: IntFilter<"Table"> | number
    base?: XOR<BaseScalarRelationFilter, BaseWhereInput>
    columns?: ColumnListRelationFilter
    rows?: RowListRelationFilter
    views?: ViewListRelationFilter
  }

  export type TableOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    baseId?: SortOrder
    base?: BaseOrderByWithRelationInput
    columns?: ColumnOrderByRelationAggregateInput
    rows?: RowOrderByRelationAggregateInput
    views?: ViewOrderByRelationAggregateInput
  }

  export type TableWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    name?: StringFilter<"Table"> | string
    createdAt?: DateTimeFilter<"Table"> | Date | string
    updatedAt?: DateTimeFilter<"Table"> | Date | string
    baseId?: IntFilter<"Table"> | number
    base?: XOR<BaseScalarRelationFilter, BaseWhereInput>
    columns?: ColumnListRelationFilter
    rows?: RowListRelationFilter
    views?: ViewListRelationFilter
  }, "id">

  export type TableOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    baseId?: SortOrder
    _count?: TableCountOrderByAggregateInput
    _avg?: TableAvgOrderByAggregateInput
    _max?: TableMaxOrderByAggregateInput
    _min?: TableMinOrderByAggregateInput
    _sum?: TableSumOrderByAggregateInput
  }

  export type TableScalarWhereWithAggregatesInput = {
    AND?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    OR?: TableScalarWhereWithAggregatesInput[]
    NOT?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Table"> | number
    name?: StringWithAggregatesFilter<"Table"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Table"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Table"> | Date | string
    baseId?: IntWithAggregatesFilter<"Table"> | number
  }

  export type ColumnWhereInput = {
    AND?: ColumnWhereInput | ColumnWhereInput[]
    OR?: ColumnWhereInput[]
    NOT?: ColumnWhereInput | ColumnWhereInput[]
    id?: IntFilter<"Column"> | number
    name?: StringFilter<"Column"> | string
    type?: EnumColumnTypeFilter<"Column"> | $Enums.ColumnType
    position?: IntFilter<"Column"> | number
    createdAt?: DateTimeFilter<"Column"> | Date | string
    updatedAt?: DateTimeFilter<"Column"> | Date | string
    tableId?: IntFilter<"Column"> | number
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    cells?: CellListRelationFilter
    viewFilters?: ViewFilterListRelationFilter
    viewSorts?: ViewSortListRelationFilter
    viewColumnVisibilities?: ViewColumnVisibilityListRelationFilter
  }

  export type ColumnOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
    table?: TableOrderByWithRelationInput
    cells?: CellOrderByRelationAggregateInput
    viewFilters?: ViewFilterOrderByRelationAggregateInput
    viewSorts?: ViewSortOrderByRelationAggregateInput
    viewColumnVisibilities?: ViewColumnVisibilityOrderByRelationAggregateInput
  }

  export type ColumnWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ColumnWhereInput | ColumnWhereInput[]
    OR?: ColumnWhereInput[]
    NOT?: ColumnWhereInput | ColumnWhereInput[]
    name?: StringFilter<"Column"> | string
    type?: EnumColumnTypeFilter<"Column"> | $Enums.ColumnType
    position?: IntFilter<"Column"> | number
    createdAt?: DateTimeFilter<"Column"> | Date | string
    updatedAt?: DateTimeFilter<"Column"> | Date | string
    tableId?: IntFilter<"Column"> | number
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    cells?: CellListRelationFilter
    viewFilters?: ViewFilterListRelationFilter
    viewSorts?: ViewSortListRelationFilter
    viewColumnVisibilities?: ViewColumnVisibilityListRelationFilter
  }, "id">

  export type ColumnOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
    _count?: ColumnCountOrderByAggregateInput
    _avg?: ColumnAvgOrderByAggregateInput
    _max?: ColumnMaxOrderByAggregateInput
    _min?: ColumnMinOrderByAggregateInput
    _sum?: ColumnSumOrderByAggregateInput
  }

  export type ColumnScalarWhereWithAggregatesInput = {
    AND?: ColumnScalarWhereWithAggregatesInput | ColumnScalarWhereWithAggregatesInput[]
    OR?: ColumnScalarWhereWithAggregatesInput[]
    NOT?: ColumnScalarWhereWithAggregatesInput | ColumnScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Column"> | number
    name?: StringWithAggregatesFilter<"Column"> | string
    type?: EnumColumnTypeWithAggregatesFilter<"Column"> | $Enums.ColumnType
    position?: IntWithAggregatesFilter<"Column"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Column"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Column"> | Date | string
    tableId?: IntWithAggregatesFilter<"Column"> | number
  }

  export type ViewWhereInput = {
    AND?: ViewWhereInput | ViewWhereInput[]
    OR?: ViewWhereInput[]
    NOT?: ViewWhereInput | ViewWhereInput[]
    id?: IntFilter<"View"> | number
    name?: StringFilter<"View"> | string
    type?: EnumViewTypeFilter<"View"> | $Enums.ViewType
    tableId?: IntFilter<"View"> | number
    isDefault?: BoolFilter<"View"> | boolean
    searchQuery?: StringNullableFilter<"View"> | string | null
    createdAt?: DateTimeFilter<"View"> | Date | string
    updatedAt?: DateTimeFilter<"View"> | Date | string
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    filters?: ViewFilterListRelationFilter
    sorts?: ViewSortListRelationFilter
    columnVisibilities?: ViewColumnVisibilityListRelationFilter
  }

  export type ViewOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    tableId?: SortOrder
    isDefault?: SortOrder
    searchQuery?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    table?: TableOrderByWithRelationInput
    filters?: ViewFilterOrderByRelationAggregateInput
    sorts?: ViewSortOrderByRelationAggregateInput
    columnVisibilities?: ViewColumnVisibilityOrderByRelationAggregateInput
  }

  export type ViewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ViewWhereInput | ViewWhereInput[]
    OR?: ViewWhereInput[]
    NOT?: ViewWhereInput | ViewWhereInput[]
    name?: StringFilter<"View"> | string
    type?: EnumViewTypeFilter<"View"> | $Enums.ViewType
    tableId?: IntFilter<"View"> | number
    isDefault?: BoolFilter<"View"> | boolean
    searchQuery?: StringNullableFilter<"View"> | string | null
    createdAt?: DateTimeFilter<"View"> | Date | string
    updatedAt?: DateTimeFilter<"View"> | Date | string
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    filters?: ViewFilterListRelationFilter
    sorts?: ViewSortListRelationFilter
    columnVisibilities?: ViewColumnVisibilityListRelationFilter
  }, "id">

  export type ViewOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    tableId?: SortOrder
    isDefault?: SortOrder
    searchQuery?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ViewCountOrderByAggregateInput
    _avg?: ViewAvgOrderByAggregateInput
    _max?: ViewMaxOrderByAggregateInput
    _min?: ViewMinOrderByAggregateInput
    _sum?: ViewSumOrderByAggregateInput
  }

  export type ViewScalarWhereWithAggregatesInput = {
    AND?: ViewScalarWhereWithAggregatesInput | ViewScalarWhereWithAggregatesInput[]
    OR?: ViewScalarWhereWithAggregatesInput[]
    NOT?: ViewScalarWhereWithAggregatesInput | ViewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"View"> | number
    name?: StringWithAggregatesFilter<"View"> | string
    type?: EnumViewTypeWithAggregatesFilter<"View"> | $Enums.ViewType
    tableId?: IntWithAggregatesFilter<"View"> | number
    isDefault?: BoolWithAggregatesFilter<"View"> | boolean
    searchQuery?: StringNullableWithAggregatesFilter<"View"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"View"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"View"> | Date | string
  }

  export type ViewFilterWhereInput = {
    AND?: ViewFilterWhereInput | ViewFilterWhereInput[]
    OR?: ViewFilterWhereInput[]
    NOT?: ViewFilterWhereInput | ViewFilterWhereInput[]
    id?: IntFilter<"ViewFilter"> | number
    viewId?: IntFilter<"ViewFilter"> | number
    columnId?: IntFilter<"ViewFilter"> | number
    operator?: EnumViewFilterOperatorFilter<"ViewFilter"> | $Enums.ViewFilterOperator
    value?: StringNullableFilter<"ViewFilter"> | string | null
    position?: IntFilter<"ViewFilter"> | number
    view?: XOR<ViewScalarRelationFilter, ViewWhereInput>
    column?: XOR<ColumnScalarRelationFilter, ColumnWhereInput>
  }

  export type ViewFilterOrderByWithRelationInput = {
    id?: SortOrder
    viewId?: SortOrder
    columnId?: SortOrder
    operator?: SortOrder
    value?: SortOrderInput | SortOrder
    position?: SortOrder
    view?: ViewOrderByWithRelationInput
    column?: ColumnOrderByWithRelationInput
  }

  export type ViewFilterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ViewFilterWhereInput | ViewFilterWhereInput[]
    OR?: ViewFilterWhereInput[]
    NOT?: ViewFilterWhereInput | ViewFilterWhereInput[]
    viewId?: IntFilter<"ViewFilter"> | number
    columnId?: IntFilter<"ViewFilter"> | number
    operator?: EnumViewFilterOperatorFilter<"ViewFilter"> | $Enums.ViewFilterOperator
    value?: StringNullableFilter<"ViewFilter"> | string | null
    position?: IntFilter<"ViewFilter"> | number
    view?: XOR<ViewScalarRelationFilter, ViewWhereInput>
    column?: XOR<ColumnScalarRelationFilter, ColumnWhereInput>
  }, "id">

  export type ViewFilterOrderByWithAggregationInput = {
    id?: SortOrder
    viewId?: SortOrder
    columnId?: SortOrder
    operator?: SortOrder
    value?: SortOrderInput | SortOrder
    position?: SortOrder
    _count?: ViewFilterCountOrderByAggregateInput
    _avg?: ViewFilterAvgOrderByAggregateInput
    _max?: ViewFilterMaxOrderByAggregateInput
    _min?: ViewFilterMinOrderByAggregateInput
    _sum?: ViewFilterSumOrderByAggregateInput
  }

  export type ViewFilterScalarWhereWithAggregatesInput = {
    AND?: ViewFilterScalarWhereWithAggregatesInput | ViewFilterScalarWhereWithAggregatesInput[]
    OR?: ViewFilterScalarWhereWithAggregatesInput[]
    NOT?: ViewFilterScalarWhereWithAggregatesInput | ViewFilterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ViewFilter"> | number
    viewId?: IntWithAggregatesFilter<"ViewFilter"> | number
    columnId?: IntWithAggregatesFilter<"ViewFilter"> | number
    operator?: EnumViewFilterOperatorWithAggregatesFilter<"ViewFilter"> | $Enums.ViewFilterOperator
    value?: StringNullableWithAggregatesFilter<"ViewFilter"> | string | null
    position?: IntWithAggregatesFilter<"ViewFilter"> | number
  }

  export type ViewSortWhereInput = {
    AND?: ViewSortWhereInput | ViewSortWhereInput[]
    OR?: ViewSortWhereInput[]
    NOT?: ViewSortWhereInput | ViewSortWhereInput[]
    id?: IntFilter<"ViewSort"> | number
    viewId?: IntFilter<"ViewSort"> | number
    columnId?: IntFilter<"ViewSort"> | number
    direction?: EnumViewSortDirectionFilter<"ViewSort"> | $Enums.ViewSortDirection
    position?: IntFilter<"ViewSort"> | number
    view?: XOR<ViewScalarRelationFilter, ViewWhereInput>
    column?: XOR<ColumnScalarRelationFilter, ColumnWhereInput>
  }

  export type ViewSortOrderByWithRelationInput = {
    id?: SortOrder
    viewId?: SortOrder
    columnId?: SortOrder
    direction?: SortOrder
    position?: SortOrder
    view?: ViewOrderByWithRelationInput
    column?: ColumnOrderByWithRelationInput
  }

  export type ViewSortWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ViewSortWhereInput | ViewSortWhereInput[]
    OR?: ViewSortWhereInput[]
    NOT?: ViewSortWhereInput | ViewSortWhereInput[]
    viewId?: IntFilter<"ViewSort"> | number
    columnId?: IntFilter<"ViewSort"> | number
    direction?: EnumViewSortDirectionFilter<"ViewSort"> | $Enums.ViewSortDirection
    position?: IntFilter<"ViewSort"> | number
    view?: XOR<ViewScalarRelationFilter, ViewWhereInput>
    column?: XOR<ColumnScalarRelationFilter, ColumnWhereInput>
  }, "id">

  export type ViewSortOrderByWithAggregationInput = {
    id?: SortOrder
    viewId?: SortOrder
    columnId?: SortOrder
    direction?: SortOrder
    position?: SortOrder
    _count?: ViewSortCountOrderByAggregateInput
    _avg?: ViewSortAvgOrderByAggregateInput
    _max?: ViewSortMaxOrderByAggregateInput
    _min?: ViewSortMinOrderByAggregateInput
    _sum?: ViewSortSumOrderByAggregateInput
  }

  export type ViewSortScalarWhereWithAggregatesInput = {
    AND?: ViewSortScalarWhereWithAggregatesInput | ViewSortScalarWhereWithAggregatesInput[]
    OR?: ViewSortScalarWhereWithAggregatesInput[]
    NOT?: ViewSortScalarWhereWithAggregatesInput | ViewSortScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ViewSort"> | number
    viewId?: IntWithAggregatesFilter<"ViewSort"> | number
    columnId?: IntWithAggregatesFilter<"ViewSort"> | number
    direction?: EnumViewSortDirectionWithAggregatesFilter<"ViewSort"> | $Enums.ViewSortDirection
    position?: IntWithAggregatesFilter<"ViewSort"> | number
  }

  export type ViewColumnVisibilityWhereInput = {
    AND?: ViewColumnVisibilityWhereInput | ViewColumnVisibilityWhereInput[]
    OR?: ViewColumnVisibilityWhereInput[]
    NOT?: ViewColumnVisibilityWhereInput | ViewColumnVisibilityWhereInput[]
    id?: IntFilter<"ViewColumnVisibility"> | number
    viewId?: IntFilter<"ViewColumnVisibility"> | number
    columnId?: IntFilter<"ViewColumnVisibility"> | number
    isVisible?: BoolFilter<"ViewColumnVisibility"> | boolean
    view?: XOR<ViewScalarRelationFilter, ViewWhereInput>
    column?: XOR<ColumnScalarRelationFilter, ColumnWhereInput>
  }

  export type ViewColumnVisibilityOrderByWithRelationInput = {
    id?: SortOrder
    viewId?: SortOrder
    columnId?: SortOrder
    isVisible?: SortOrder
    view?: ViewOrderByWithRelationInput
    column?: ColumnOrderByWithRelationInput
  }

  export type ViewColumnVisibilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    viewId_columnId?: ViewColumnVisibilityViewIdColumnIdCompoundUniqueInput
    AND?: ViewColumnVisibilityWhereInput | ViewColumnVisibilityWhereInput[]
    OR?: ViewColumnVisibilityWhereInput[]
    NOT?: ViewColumnVisibilityWhereInput | ViewColumnVisibilityWhereInput[]
    viewId?: IntFilter<"ViewColumnVisibility"> | number
    columnId?: IntFilter<"ViewColumnVisibility"> | number
    isVisible?: BoolFilter<"ViewColumnVisibility"> | boolean
    view?: XOR<ViewScalarRelationFilter, ViewWhereInput>
    column?: XOR<ColumnScalarRelationFilter, ColumnWhereInput>
  }, "id" | "viewId_columnId">

  export type ViewColumnVisibilityOrderByWithAggregationInput = {
    id?: SortOrder
    viewId?: SortOrder
    columnId?: SortOrder
    isVisible?: SortOrder
    _count?: ViewColumnVisibilityCountOrderByAggregateInput
    _avg?: ViewColumnVisibilityAvgOrderByAggregateInput
    _max?: ViewColumnVisibilityMaxOrderByAggregateInput
    _min?: ViewColumnVisibilityMinOrderByAggregateInput
    _sum?: ViewColumnVisibilitySumOrderByAggregateInput
  }

  export type ViewColumnVisibilityScalarWhereWithAggregatesInput = {
    AND?: ViewColumnVisibilityScalarWhereWithAggregatesInput | ViewColumnVisibilityScalarWhereWithAggregatesInput[]
    OR?: ViewColumnVisibilityScalarWhereWithAggregatesInput[]
    NOT?: ViewColumnVisibilityScalarWhereWithAggregatesInput | ViewColumnVisibilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ViewColumnVisibility"> | number
    viewId?: IntWithAggregatesFilter<"ViewColumnVisibility"> | number
    columnId?: IntWithAggregatesFilter<"ViewColumnVisibility"> | number
    isVisible?: BoolWithAggregatesFilter<"ViewColumnVisibility"> | boolean
  }

  export type RowWhereInput = {
    AND?: RowWhereInput | RowWhereInput[]
    OR?: RowWhereInput[]
    NOT?: RowWhereInput | RowWhereInput[]
    id?: IntFilter<"Row"> | number
    createdAt?: DateTimeFilter<"Row"> | Date | string
    updatedAt?: DateTimeFilter<"Row"> | Date | string
    tableId?: IntFilter<"Row"> | number
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    cells?: CellListRelationFilter
  }

  export type RowOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
    table?: TableOrderByWithRelationInput
    cells?: CellOrderByRelationAggregateInput
  }

  export type RowWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RowWhereInput | RowWhereInput[]
    OR?: RowWhereInput[]
    NOT?: RowWhereInput | RowWhereInput[]
    createdAt?: DateTimeFilter<"Row"> | Date | string
    updatedAt?: DateTimeFilter<"Row"> | Date | string
    tableId?: IntFilter<"Row"> | number
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    cells?: CellListRelationFilter
  }, "id">

  export type RowOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
    _count?: RowCountOrderByAggregateInput
    _avg?: RowAvgOrderByAggregateInput
    _max?: RowMaxOrderByAggregateInput
    _min?: RowMinOrderByAggregateInput
    _sum?: RowSumOrderByAggregateInput
  }

  export type RowScalarWhereWithAggregatesInput = {
    AND?: RowScalarWhereWithAggregatesInput | RowScalarWhereWithAggregatesInput[]
    OR?: RowScalarWhereWithAggregatesInput[]
    NOT?: RowScalarWhereWithAggregatesInput | RowScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Row"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Row"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Row"> | Date | string
    tableId?: IntWithAggregatesFilter<"Row"> | number
  }

  export type CellWhereInput = {
    AND?: CellWhereInput | CellWhereInput[]
    OR?: CellWhereInput[]
    NOT?: CellWhereInput | CellWhereInput[]
    id?: IntFilter<"Cell"> | number
    value?: StringNullableFilter<"Cell"> | string | null
    rowId?: IntFilter<"Cell"> | number
    columnId?: IntFilter<"Cell"> | number
    row?: XOR<RowScalarRelationFilter, RowWhereInput>
    column?: XOR<ColumnScalarRelationFilter, ColumnWhereInput>
  }

  export type CellOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrderInput | SortOrder
    rowId?: SortOrder
    columnId?: SortOrder
    row?: RowOrderByWithRelationInput
    column?: ColumnOrderByWithRelationInput
  }

  export type CellWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    rowId_columnId?: CellRowIdColumnIdCompoundUniqueInput
    AND?: CellWhereInput | CellWhereInput[]
    OR?: CellWhereInput[]
    NOT?: CellWhereInput | CellWhereInput[]
    value?: StringNullableFilter<"Cell"> | string | null
    rowId?: IntFilter<"Cell"> | number
    columnId?: IntFilter<"Cell"> | number
    row?: XOR<RowScalarRelationFilter, RowWhereInput>
    column?: XOR<ColumnScalarRelationFilter, ColumnWhereInput>
  }, "id" | "rowId_columnId">

  export type CellOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrderInput | SortOrder
    rowId?: SortOrder
    columnId?: SortOrder
    _count?: CellCountOrderByAggregateInput
    _avg?: CellAvgOrderByAggregateInput
    _max?: CellMaxOrderByAggregateInput
    _min?: CellMinOrderByAggregateInput
    _sum?: CellSumOrderByAggregateInput
  }

  export type CellScalarWhereWithAggregatesInput = {
    AND?: CellScalarWhereWithAggregatesInput | CellScalarWhereWithAggregatesInput[]
    OR?: CellScalarWhereWithAggregatesInput[]
    NOT?: CellScalarWhereWithAggregatesInput | CellScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cell"> | number
    value?: StringNullableWithAggregatesFilter<"Cell"> | string | null
    rowId?: IntWithAggregatesFilter<"Cell"> | number
    columnId?: IntWithAggregatesFilter<"Cell"> | number
  }

  export type BaseCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tables?: TableCreateNestedManyWithoutBaseInput
  }

  export type BaseUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tables?: TableUncheckedCreateNestedManyWithoutBaseInput
  }

  export type BaseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tables?: TableUpdateManyWithoutBaseNestedInput
  }

  export type BaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tables?: TableUncheckedUpdateManyWithoutBaseNestedInput
  }

  export type BaseCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BaseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    base: BaseCreateNestedOneWithoutTablesInput
    columns?: ColumnCreateNestedManyWithoutTableInput
    rows?: RowCreateNestedManyWithoutTableInput
    views?: ViewCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    baseId: number
    columns?: ColumnUncheckedCreateNestedManyWithoutTableInput
    rows?: RowUncheckedCreateNestedManyWithoutTableInput
    views?: ViewUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    base?: BaseUpdateOneRequiredWithoutTablesNestedInput
    columns?: ColumnUpdateManyWithoutTableNestedInput
    rows?: RowUpdateManyWithoutTableNestedInput
    views?: ViewUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseId?: IntFieldUpdateOperationsInput | number
    columns?: ColumnUncheckedUpdateManyWithoutTableNestedInput
    rows?: RowUncheckedUpdateManyWithoutTableNestedInput
    views?: ViewUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TableCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    baseId: number
  }

  export type TableUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseId?: IntFieldUpdateOperationsInput | number
  }

  export type ColumnCreateInput = {
    name: string
    type: $Enums.ColumnType
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutColumnsInput
    cells?: CellCreateNestedManyWithoutColumnInput
    viewFilters?: ViewFilterCreateNestedManyWithoutColumnInput
    viewSorts?: ViewSortCreateNestedManyWithoutColumnInput
    viewColumnVisibilities?: ViewColumnVisibilityCreateNestedManyWithoutColumnInput
  }

  export type ColumnUncheckedCreateInput = {
    id?: number
    name: string
    type: $Enums.ColumnType
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: number
    cells?: CellUncheckedCreateNestedManyWithoutColumnInput
    viewFilters?: ViewFilterUncheckedCreateNestedManyWithoutColumnInput
    viewSorts?: ViewSortUncheckedCreateNestedManyWithoutColumnInput
    viewColumnVisibilities?: ViewColumnVisibilityUncheckedCreateNestedManyWithoutColumnInput
  }

  export type ColumnUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumColumnTypeFieldUpdateOperationsInput | $Enums.ColumnType
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutColumnsNestedInput
    cells?: CellUpdateManyWithoutColumnNestedInput
    viewFilters?: ViewFilterUpdateManyWithoutColumnNestedInput
    viewSorts?: ViewSortUpdateManyWithoutColumnNestedInput
    viewColumnVisibilities?: ViewColumnVisibilityUpdateManyWithoutColumnNestedInput
  }

  export type ColumnUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumColumnTypeFieldUpdateOperationsInput | $Enums.ColumnType
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: IntFieldUpdateOperationsInput | number
    cells?: CellUncheckedUpdateManyWithoutColumnNestedInput
    viewFilters?: ViewFilterUncheckedUpdateManyWithoutColumnNestedInput
    viewSorts?: ViewSortUncheckedUpdateManyWithoutColumnNestedInput
    viewColumnVisibilities?: ViewColumnVisibilityUncheckedUpdateManyWithoutColumnNestedInput
  }

  export type ColumnCreateManyInput = {
    id?: number
    name: string
    type: $Enums.ColumnType
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: number
  }

  export type ColumnUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumColumnTypeFieldUpdateOperationsInput | $Enums.ColumnType
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColumnUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumColumnTypeFieldUpdateOperationsInput | $Enums.ColumnType
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: IntFieldUpdateOperationsInput | number
  }

  export type ViewCreateInput = {
    name: string
    type?: $Enums.ViewType
    isDefault?: boolean
    searchQuery?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutViewsInput
    filters?: ViewFilterCreateNestedManyWithoutViewInput
    sorts?: ViewSortCreateNestedManyWithoutViewInput
    columnVisibilities?: ViewColumnVisibilityCreateNestedManyWithoutViewInput
  }

  export type ViewUncheckedCreateInput = {
    id?: number
    name: string
    type?: $Enums.ViewType
    tableId: number
    isDefault?: boolean
    searchQuery?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    filters?: ViewFilterUncheckedCreateNestedManyWithoutViewInput
    sorts?: ViewSortUncheckedCreateNestedManyWithoutViewInput
    columnVisibilities?: ViewColumnVisibilityUncheckedCreateNestedManyWithoutViewInput
  }

  export type ViewUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumViewTypeFieldUpdateOperationsInput | $Enums.ViewType
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    searchQuery?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutViewsNestedInput
    filters?: ViewFilterUpdateManyWithoutViewNestedInput
    sorts?: ViewSortUpdateManyWithoutViewNestedInput
    columnVisibilities?: ViewColumnVisibilityUpdateManyWithoutViewNestedInput
  }

  export type ViewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumViewTypeFieldUpdateOperationsInput | $Enums.ViewType
    tableId?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    searchQuery?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filters?: ViewFilterUncheckedUpdateManyWithoutViewNestedInput
    sorts?: ViewSortUncheckedUpdateManyWithoutViewNestedInput
    columnVisibilities?: ViewColumnVisibilityUncheckedUpdateManyWithoutViewNestedInput
  }

  export type ViewCreateManyInput = {
    id?: number
    name: string
    type?: $Enums.ViewType
    tableId: number
    isDefault?: boolean
    searchQuery?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ViewUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumViewTypeFieldUpdateOperationsInput | $Enums.ViewType
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    searchQuery?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumViewTypeFieldUpdateOperationsInput | $Enums.ViewType
    tableId?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    searchQuery?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewFilterCreateInput = {
    operator: $Enums.ViewFilterOperator
    value?: string | null
    position?: number
    view: ViewCreateNestedOneWithoutFiltersInput
    column: ColumnCreateNestedOneWithoutViewFiltersInput
  }

  export type ViewFilterUncheckedCreateInput = {
    id?: number
    viewId: number
    columnId: number
    operator: $Enums.ViewFilterOperator
    value?: string | null
    position?: number
  }

  export type ViewFilterUpdateInput = {
    operator?: EnumViewFilterOperatorFieldUpdateOperationsInput | $Enums.ViewFilterOperator
    value?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    view?: ViewUpdateOneRequiredWithoutFiltersNestedInput
    column?: ColumnUpdateOneRequiredWithoutViewFiltersNestedInput
  }

  export type ViewFilterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewId?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    operator?: EnumViewFilterOperatorFieldUpdateOperationsInput | $Enums.ViewFilterOperator
    value?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ViewFilterCreateManyInput = {
    id?: number
    viewId: number
    columnId: number
    operator: $Enums.ViewFilterOperator
    value?: string | null
    position?: number
  }

  export type ViewFilterUpdateManyMutationInput = {
    operator?: EnumViewFilterOperatorFieldUpdateOperationsInput | $Enums.ViewFilterOperator
    value?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ViewFilterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewId?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    operator?: EnumViewFilterOperatorFieldUpdateOperationsInput | $Enums.ViewFilterOperator
    value?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ViewSortCreateInput = {
    direction: $Enums.ViewSortDirection
    position?: number
    view: ViewCreateNestedOneWithoutSortsInput
    column: ColumnCreateNestedOneWithoutViewSortsInput
  }

  export type ViewSortUncheckedCreateInput = {
    id?: number
    viewId: number
    columnId: number
    direction: $Enums.ViewSortDirection
    position?: number
  }

  export type ViewSortUpdateInput = {
    direction?: EnumViewSortDirectionFieldUpdateOperationsInput | $Enums.ViewSortDirection
    position?: IntFieldUpdateOperationsInput | number
    view?: ViewUpdateOneRequiredWithoutSortsNestedInput
    column?: ColumnUpdateOneRequiredWithoutViewSortsNestedInput
  }

  export type ViewSortUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewId?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    direction?: EnumViewSortDirectionFieldUpdateOperationsInput | $Enums.ViewSortDirection
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ViewSortCreateManyInput = {
    id?: number
    viewId: number
    columnId: number
    direction: $Enums.ViewSortDirection
    position?: number
  }

  export type ViewSortUpdateManyMutationInput = {
    direction?: EnumViewSortDirectionFieldUpdateOperationsInput | $Enums.ViewSortDirection
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ViewSortUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewId?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    direction?: EnumViewSortDirectionFieldUpdateOperationsInput | $Enums.ViewSortDirection
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ViewColumnVisibilityCreateInput = {
    isVisible?: boolean
    view: ViewCreateNestedOneWithoutColumnVisibilitiesInput
    column: ColumnCreateNestedOneWithoutViewColumnVisibilitiesInput
  }

  export type ViewColumnVisibilityUncheckedCreateInput = {
    id?: number
    viewId: number
    columnId: number
    isVisible?: boolean
  }

  export type ViewColumnVisibilityUpdateInput = {
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    view?: ViewUpdateOneRequiredWithoutColumnVisibilitiesNestedInput
    column?: ColumnUpdateOneRequiredWithoutViewColumnVisibilitiesNestedInput
  }

  export type ViewColumnVisibilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewId?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ViewColumnVisibilityCreateManyInput = {
    id?: number
    viewId: number
    columnId: number
    isVisible?: boolean
  }

  export type ViewColumnVisibilityUpdateManyMutationInput = {
    isVisible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ViewColumnVisibilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewId?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RowCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutRowsInput
    cells?: CellCreateNestedManyWithoutRowInput
  }

  export type RowUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: number
    cells?: CellUncheckedCreateNestedManyWithoutRowInput
  }

  export type RowUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutRowsNestedInput
    cells?: CellUpdateManyWithoutRowNestedInput
  }

  export type RowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: IntFieldUpdateOperationsInput | number
    cells?: CellUncheckedUpdateManyWithoutRowNestedInput
  }

  export type RowCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: number
  }

  export type RowUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: IntFieldUpdateOperationsInput | number
  }

  export type CellCreateInput = {
    value?: string | null
    row: RowCreateNestedOneWithoutCellsInput
    column: ColumnCreateNestedOneWithoutCellsInput
  }

  export type CellUncheckedCreateInput = {
    id?: number
    value?: string | null
    rowId: number
    columnId: number
  }

  export type CellUpdateInput = {
    value?: NullableStringFieldUpdateOperationsInput | string | null
    row?: RowUpdateOneRequiredWithoutCellsNestedInput
    column?: ColumnUpdateOneRequiredWithoutCellsNestedInput
  }

  export type CellUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: NullableStringFieldUpdateOperationsInput | string | null
    rowId?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
  }

  export type CellCreateManyInput = {
    id?: number
    value?: string | null
    rowId: number
    columnId: number
  }

  export type CellUpdateManyMutationInput = {
    value?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CellUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: NullableStringFieldUpdateOperationsInput | string | null
    rowId?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TableListRelationFilter = {
    every?: TableWhereInput
    some?: TableWhereInput
    none?: TableWhereInput
  }

  export type TableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BaseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BaseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BaseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BaseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BaseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BaseScalarRelationFilter = {
    is?: BaseWhereInput
    isNot?: BaseWhereInput
  }

  export type ColumnListRelationFilter = {
    every?: ColumnWhereInput
    some?: ColumnWhereInput
    none?: ColumnWhereInput
  }

  export type RowListRelationFilter = {
    every?: RowWhereInput
    some?: RowWhereInput
    none?: RowWhereInput
  }

  export type ViewListRelationFilter = {
    every?: ViewWhereInput
    some?: ViewWhereInput
    none?: ViewWhereInput
  }

  export type ColumnOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TableCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    baseId?: SortOrder
  }

  export type TableAvgOrderByAggregateInput = {
    id?: SortOrder
    baseId?: SortOrder
  }

  export type TableMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    baseId?: SortOrder
  }

  export type TableMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    baseId?: SortOrder
  }

  export type TableSumOrderByAggregateInput = {
    id?: SortOrder
    baseId?: SortOrder
  }

  export type EnumColumnTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ColumnType | EnumColumnTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ColumnType[] | ListEnumColumnTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ColumnType[] | ListEnumColumnTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumColumnTypeFilter<$PrismaModel> | $Enums.ColumnType
  }

  export type TableScalarRelationFilter = {
    is?: TableWhereInput
    isNot?: TableWhereInput
  }

  export type CellListRelationFilter = {
    every?: CellWhereInput
    some?: CellWhereInput
    none?: CellWhereInput
  }

  export type ViewFilterListRelationFilter = {
    every?: ViewFilterWhereInput
    some?: ViewFilterWhereInput
    none?: ViewFilterWhereInput
  }

  export type ViewSortListRelationFilter = {
    every?: ViewSortWhereInput
    some?: ViewSortWhereInput
    none?: ViewSortWhereInput
  }

  export type ViewColumnVisibilityListRelationFilter = {
    every?: ViewColumnVisibilityWhereInput
    some?: ViewColumnVisibilityWhereInput
    none?: ViewColumnVisibilityWhereInput
  }

  export type CellOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewFilterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewSortOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewColumnVisibilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ColumnCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
  }

  export type ColumnAvgOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    tableId?: SortOrder
  }

  export type ColumnMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
  }

  export type ColumnMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
  }

  export type ColumnSumOrderByAggregateInput = {
    id?: SortOrder
    position?: SortOrder
    tableId?: SortOrder
  }

  export type EnumColumnTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ColumnType | EnumColumnTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ColumnType[] | ListEnumColumnTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ColumnType[] | ListEnumColumnTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumColumnTypeWithAggregatesFilter<$PrismaModel> | $Enums.ColumnType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumColumnTypeFilter<$PrismaModel>
    _max?: NestedEnumColumnTypeFilter<$PrismaModel>
  }

  export type EnumViewTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ViewType | EnumViewTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ViewType[] | ListEnumViewTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViewType[] | ListEnumViewTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumViewTypeFilter<$PrismaModel> | $Enums.ViewType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ViewCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    tableId?: SortOrder
    isDefault?: SortOrder
    searchQuery?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ViewAvgOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
  }

  export type ViewMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    tableId?: SortOrder
    isDefault?: SortOrder
    searchQuery?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ViewMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    tableId?: SortOrder
    isDefault?: SortOrder
    searchQuery?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ViewSumOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
  }

  export type EnumViewTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ViewType | EnumViewTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ViewType[] | ListEnumViewTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViewType[] | ListEnumViewTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumViewTypeWithAggregatesFilter<$PrismaModel> | $Enums.ViewType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumViewTypeFilter<$PrismaModel>
    _max?: NestedEnumViewTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumViewFilterOperatorFilter<$PrismaModel = never> = {
    equals?: $Enums.ViewFilterOperator | EnumViewFilterOperatorFieldRefInput<$PrismaModel>
    in?: $Enums.ViewFilterOperator[] | ListEnumViewFilterOperatorFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViewFilterOperator[] | ListEnumViewFilterOperatorFieldRefInput<$PrismaModel>
    not?: NestedEnumViewFilterOperatorFilter<$PrismaModel> | $Enums.ViewFilterOperator
  }

  export type ViewScalarRelationFilter = {
    is?: ViewWhereInput
    isNot?: ViewWhereInput
  }

  export type ColumnScalarRelationFilter = {
    is?: ColumnWhereInput
    isNot?: ColumnWhereInput
  }

  export type ViewFilterCountOrderByAggregateInput = {
    id?: SortOrder
    viewId?: SortOrder
    columnId?: SortOrder
    operator?: SortOrder
    value?: SortOrder
    position?: SortOrder
  }

  export type ViewFilterAvgOrderByAggregateInput = {
    id?: SortOrder
    viewId?: SortOrder
    columnId?: SortOrder
    position?: SortOrder
  }

  export type ViewFilterMaxOrderByAggregateInput = {
    id?: SortOrder
    viewId?: SortOrder
    columnId?: SortOrder
    operator?: SortOrder
    value?: SortOrder
    position?: SortOrder
  }

  export type ViewFilterMinOrderByAggregateInput = {
    id?: SortOrder
    viewId?: SortOrder
    columnId?: SortOrder
    operator?: SortOrder
    value?: SortOrder
    position?: SortOrder
  }

  export type ViewFilterSumOrderByAggregateInput = {
    id?: SortOrder
    viewId?: SortOrder
    columnId?: SortOrder
    position?: SortOrder
  }

  export type EnumViewFilterOperatorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ViewFilterOperator | EnumViewFilterOperatorFieldRefInput<$PrismaModel>
    in?: $Enums.ViewFilterOperator[] | ListEnumViewFilterOperatorFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViewFilterOperator[] | ListEnumViewFilterOperatorFieldRefInput<$PrismaModel>
    not?: NestedEnumViewFilterOperatorWithAggregatesFilter<$PrismaModel> | $Enums.ViewFilterOperator
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumViewFilterOperatorFilter<$PrismaModel>
    _max?: NestedEnumViewFilterOperatorFilter<$PrismaModel>
  }

  export type EnumViewSortDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.ViewSortDirection | EnumViewSortDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.ViewSortDirection[] | ListEnumViewSortDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViewSortDirection[] | ListEnumViewSortDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumViewSortDirectionFilter<$PrismaModel> | $Enums.ViewSortDirection
  }

  export type ViewSortCountOrderByAggregateInput = {
    id?: SortOrder
    viewId?: SortOrder
    columnId?: SortOrder
    direction?: SortOrder
    position?: SortOrder
  }

  export type ViewSortAvgOrderByAggregateInput = {
    id?: SortOrder
    viewId?: SortOrder
    columnId?: SortOrder
    position?: SortOrder
  }

  export type ViewSortMaxOrderByAggregateInput = {
    id?: SortOrder
    viewId?: SortOrder
    columnId?: SortOrder
    direction?: SortOrder
    position?: SortOrder
  }

  export type ViewSortMinOrderByAggregateInput = {
    id?: SortOrder
    viewId?: SortOrder
    columnId?: SortOrder
    direction?: SortOrder
    position?: SortOrder
  }

  export type ViewSortSumOrderByAggregateInput = {
    id?: SortOrder
    viewId?: SortOrder
    columnId?: SortOrder
    position?: SortOrder
  }

  export type EnumViewSortDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ViewSortDirection | EnumViewSortDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.ViewSortDirection[] | ListEnumViewSortDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViewSortDirection[] | ListEnumViewSortDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumViewSortDirectionWithAggregatesFilter<$PrismaModel> | $Enums.ViewSortDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumViewSortDirectionFilter<$PrismaModel>
    _max?: NestedEnumViewSortDirectionFilter<$PrismaModel>
  }

  export type ViewColumnVisibilityViewIdColumnIdCompoundUniqueInput = {
    viewId: number
    columnId: number
  }

  export type ViewColumnVisibilityCountOrderByAggregateInput = {
    id?: SortOrder
    viewId?: SortOrder
    columnId?: SortOrder
    isVisible?: SortOrder
  }

  export type ViewColumnVisibilityAvgOrderByAggregateInput = {
    id?: SortOrder
    viewId?: SortOrder
    columnId?: SortOrder
  }

  export type ViewColumnVisibilityMaxOrderByAggregateInput = {
    id?: SortOrder
    viewId?: SortOrder
    columnId?: SortOrder
    isVisible?: SortOrder
  }

  export type ViewColumnVisibilityMinOrderByAggregateInput = {
    id?: SortOrder
    viewId?: SortOrder
    columnId?: SortOrder
    isVisible?: SortOrder
  }

  export type ViewColumnVisibilitySumOrderByAggregateInput = {
    id?: SortOrder
    viewId?: SortOrder
    columnId?: SortOrder
  }

  export type RowCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
  }

  export type RowAvgOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
  }

  export type RowMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
  }

  export type RowMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
  }

  export type RowSumOrderByAggregateInput = {
    id?: SortOrder
    tableId?: SortOrder
  }

  export type RowScalarRelationFilter = {
    is?: RowWhereInput
    isNot?: RowWhereInput
  }

  export type CellRowIdColumnIdCompoundUniqueInput = {
    rowId: number
    columnId: number
  }

  export type CellCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    rowId?: SortOrder
    columnId?: SortOrder
  }

  export type CellAvgOrderByAggregateInput = {
    id?: SortOrder
    rowId?: SortOrder
    columnId?: SortOrder
  }

  export type CellMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    rowId?: SortOrder
    columnId?: SortOrder
  }

  export type CellMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    rowId?: SortOrder
    columnId?: SortOrder
  }

  export type CellSumOrderByAggregateInput = {
    id?: SortOrder
    rowId?: SortOrder
    columnId?: SortOrder
  }

  export type TableCreateNestedManyWithoutBaseInput = {
    create?: XOR<TableCreateWithoutBaseInput, TableUncheckedCreateWithoutBaseInput> | TableCreateWithoutBaseInput[] | TableUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: TableCreateOrConnectWithoutBaseInput | TableCreateOrConnectWithoutBaseInput[]
    createMany?: TableCreateManyBaseInputEnvelope
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
  }

  export type TableUncheckedCreateNestedManyWithoutBaseInput = {
    create?: XOR<TableCreateWithoutBaseInput, TableUncheckedCreateWithoutBaseInput> | TableCreateWithoutBaseInput[] | TableUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: TableCreateOrConnectWithoutBaseInput | TableCreateOrConnectWithoutBaseInput[]
    createMany?: TableCreateManyBaseInputEnvelope
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TableUpdateManyWithoutBaseNestedInput = {
    create?: XOR<TableCreateWithoutBaseInput, TableUncheckedCreateWithoutBaseInput> | TableCreateWithoutBaseInput[] | TableUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: TableCreateOrConnectWithoutBaseInput | TableCreateOrConnectWithoutBaseInput[]
    upsert?: TableUpsertWithWhereUniqueWithoutBaseInput | TableUpsertWithWhereUniqueWithoutBaseInput[]
    createMany?: TableCreateManyBaseInputEnvelope
    set?: TableWhereUniqueInput | TableWhereUniqueInput[]
    disconnect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    delete?: TableWhereUniqueInput | TableWhereUniqueInput[]
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    update?: TableUpdateWithWhereUniqueWithoutBaseInput | TableUpdateWithWhereUniqueWithoutBaseInput[]
    updateMany?: TableUpdateManyWithWhereWithoutBaseInput | TableUpdateManyWithWhereWithoutBaseInput[]
    deleteMany?: TableScalarWhereInput | TableScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TableUncheckedUpdateManyWithoutBaseNestedInput = {
    create?: XOR<TableCreateWithoutBaseInput, TableUncheckedCreateWithoutBaseInput> | TableCreateWithoutBaseInput[] | TableUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: TableCreateOrConnectWithoutBaseInput | TableCreateOrConnectWithoutBaseInput[]
    upsert?: TableUpsertWithWhereUniqueWithoutBaseInput | TableUpsertWithWhereUniqueWithoutBaseInput[]
    createMany?: TableCreateManyBaseInputEnvelope
    set?: TableWhereUniqueInput | TableWhereUniqueInput[]
    disconnect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    delete?: TableWhereUniqueInput | TableWhereUniqueInput[]
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    update?: TableUpdateWithWhereUniqueWithoutBaseInput | TableUpdateWithWhereUniqueWithoutBaseInput[]
    updateMany?: TableUpdateManyWithWhereWithoutBaseInput | TableUpdateManyWithWhereWithoutBaseInput[]
    deleteMany?: TableScalarWhereInput | TableScalarWhereInput[]
  }

  export type BaseCreateNestedOneWithoutTablesInput = {
    create?: XOR<BaseCreateWithoutTablesInput, BaseUncheckedCreateWithoutTablesInput>
    connectOrCreate?: BaseCreateOrConnectWithoutTablesInput
    connect?: BaseWhereUniqueInput
  }

  export type ColumnCreateNestedManyWithoutTableInput = {
    create?: XOR<ColumnCreateWithoutTableInput, ColumnUncheckedCreateWithoutTableInput> | ColumnCreateWithoutTableInput[] | ColumnUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ColumnCreateOrConnectWithoutTableInput | ColumnCreateOrConnectWithoutTableInput[]
    createMany?: ColumnCreateManyTableInputEnvelope
    connect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
  }

  export type RowCreateNestedManyWithoutTableInput = {
    create?: XOR<RowCreateWithoutTableInput, RowUncheckedCreateWithoutTableInput> | RowCreateWithoutTableInput[] | RowUncheckedCreateWithoutTableInput[]
    connectOrCreate?: RowCreateOrConnectWithoutTableInput | RowCreateOrConnectWithoutTableInput[]
    createMany?: RowCreateManyTableInputEnvelope
    connect?: RowWhereUniqueInput | RowWhereUniqueInput[]
  }

  export type ViewCreateNestedManyWithoutTableInput = {
    create?: XOR<ViewCreateWithoutTableInput, ViewUncheckedCreateWithoutTableInput> | ViewCreateWithoutTableInput[] | ViewUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutTableInput | ViewCreateOrConnectWithoutTableInput[]
    createMany?: ViewCreateManyTableInputEnvelope
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
  }

  export type ColumnUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<ColumnCreateWithoutTableInput, ColumnUncheckedCreateWithoutTableInput> | ColumnCreateWithoutTableInput[] | ColumnUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ColumnCreateOrConnectWithoutTableInput | ColumnCreateOrConnectWithoutTableInput[]
    createMany?: ColumnCreateManyTableInputEnvelope
    connect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
  }

  export type RowUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<RowCreateWithoutTableInput, RowUncheckedCreateWithoutTableInput> | RowCreateWithoutTableInput[] | RowUncheckedCreateWithoutTableInput[]
    connectOrCreate?: RowCreateOrConnectWithoutTableInput | RowCreateOrConnectWithoutTableInput[]
    createMany?: RowCreateManyTableInputEnvelope
    connect?: RowWhereUniqueInput | RowWhereUniqueInput[]
  }

  export type ViewUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<ViewCreateWithoutTableInput, ViewUncheckedCreateWithoutTableInput> | ViewCreateWithoutTableInput[] | ViewUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutTableInput | ViewCreateOrConnectWithoutTableInput[]
    createMany?: ViewCreateManyTableInputEnvelope
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
  }

  export type BaseUpdateOneRequiredWithoutTablesNestedInput = {
    create?: XOR<BaseCreateWithoutTablesInput, BaseUncheckedCreateWithoutTablesInput>
    connectOrCreate?: BaseCreateOrConnectWithoutTablesInput
    upsert?: BaseUpsertWithoutTablesInput
    connect?: BaseWhereUniqueInput
    update?: XOR<XOR<BaseUpdateToOneWithWhereWithoutTablesInput, BaseUpdateWithoutTablesInput>, BaseUncheckedUpdateWithoutTablesInput>
  }

  export type ColumnUpdateManyWithoutTableNestedInput = {
    create?: XOR<ColumnCreateWithoutTableInput, ColumnUncheckedCreateWithoutTableInput> | ColumnCreateWithoutTableInput[] | ColumnUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ColumnCreateOrConnectWithoutTableInput | ColumnCreateOrConnectWithoutTableInput[]
    upsert?: ColumnUpsertWithWhereUniqueWithoutTableInput | ColumnUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: ColumnCreateManyTableInputEnvelope
    set?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
    disconnect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
    delete?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
    connect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
    update?: ColumnUpdateWithWhereUniqueWithoutTableInput | ColumnUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: ColumnUpdateManyWithWhereWithoutTableInput | ColumnUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: ColumnScalarWhereInput | ColumnScalarWhereInput[]
  }

  export type RowUpdateManyWithoutTableNestedInput = {
    create?: XOR<RowCreateWithoutTableInput, RowUncheckedCreateWithoutTableInput> | RowCreateWithoutTableInput[] | RowUncheckedCreateWithoutTableInput[]
    connectOrCreate?: RowCreateOrConnectWithoutTableInput | RowCreateOrConnectWithoutTableInput[]
    upsert?: RowUpsertWithWhereUniqueWithoutTableInput | RowUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: RowCreateManyTableInputEnvelope
    set?: RowWhereUniqueInput | RowWhereUniqueInput[]
    disconnect?: RowWhereUniqueInput | RowWhereUniqueInput[]
    delete?: RowWhereUniqueInput | RowWhereUniqueInput[]
    connect?: RowWhereUniqueInput | RowWhereUniqueInput[]
    update?: RowUpdateWithWhereUniqueWithoutTableInput | RowUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: RowUpdateManyWithWhereWithoutTableInput | RowUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: RowScalarWhereInput | RowScalarWhereInput[]
  }

  export type ViewUpdateManyWithoutTableNestedInput = {
    create?: XOR<ViewCreateWithoutTableInput, ViewUncheckedCreateWithoutTableInput> | ViewCreateWithoutTableInput[] | ViewUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutTableInput | ViewCreateOrConnectWithoutTableInput[]
    upsert?: ViewUpsertWithWhereUniqueWithoutTableInput | ViewUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: ViewCreateManyTableInputEnvelope
    set?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    disconnect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    delete?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    update?: ViewUpdateWithWhereUniqueWithoutTableInput | ViewUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: ViewUpdateManyWithWhereWithoutTableInput | ViewUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: ViewScalarWhereInput | ViewScalarWhereInput[]
  }

  export type ColumnUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<ColumnCreateWithoutTableInput, ColumnUncheckedCreateWithoutTableInput> | ColumnCreateWithoutTableInput[] | ColumnUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ColumnCreateOrConnectWithoutTableInput | ColumnCreateOrConnectWithoutTableInput[]
    upsert?: ColumnUpsertWithWhereUniqueWithoutTableInput | ColumnUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: ColumnCreateManyTableInputEnvelope
    set?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
    disconnect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
    delete?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
    connect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[]
    update?: ColumnUpdateWithWhereUniqueWithoutTableInput | ColumnUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: ColumnUpdateManyWithWhereWithoutTableInput | ColumnUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: ColumnScalarWhereInput | ColumnScalarWhereInput[]
  }

  export type RowUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<RowCreateWithoutTableInput, RowUncheckedCreateWithoutTableInput> | RowCreateWithoutTableInput[] | RowUncheckedCreateWithoutTableInput[]
    connectOrCreate?: RowCreateOrConnectWithoutTableInput | RowCreateOrConnectWithoutTableInput[]
    upsert?: RowUpsertWithWhereUniqueWithoutTableInput | RowUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: RowCreateManyTableInputEnvelope
    set?: RowWhereUniqueInput | RowWhereUniqueInput[]
    disconnect?: RowWhereUniqueInput | RowWhereUniqueInput[]
    delete?: RowWhereUniqueInput | RowWhereUniqueInput[]
    connect?: RowWhereUniqueInput | RowWhereUniqueInput[]
    update?: RowUpdateWithWhereUniqueWithoutTableInput | RowUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: RowUpdateManyWithWhereWithoutTableInput | RowUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: RowScalarWhereInput | RowScalarWhereInput[]
  }

  export type ViewUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<ViewCreateWithoutTableInput, ViewUncheckedCreateWithoutTableInput> | ViewCreateWithoutTableInput[] | ViewUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutTableInput | ViewCreateOrConnectWithoutTableInput[]
    upsert?: ViewUpsertWithWhereUniqueWithoutTableInput | ViewUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: ViewCreateManyTableInputEnvelope
    set?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    disconnect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    delete?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    update?: ViewUpdateWithWhereUniqueWithoutTableInput | ViewUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: ViewUpdateManyWithWhereWithoutTableInput | ViewUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: ViewScalarWhereInput | ViewScalarWhereInput[]
  }

  export type TableCreateNestedOneWithoutColumnsInput = {
    create?: XOR<TableCreateWithoutColumnsInput, TableUncheckedCreateWithoutColumnsInput>
    connectOrCreate?: TableCreateOrConnectWithoutColumnsInput
    connect?: TableWhereUniqueInput
  }

  export type CellCreateNestedManyWithoutColumnInput = {
    create?: XOR<CellCreateWithoutColumnInput, CellUncheckedCreateWithoutColumnInput> | CellCreateWithoutColumnInput[] | CellUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: CellCreateOrConnectWithoutColumnInput | CellCreateOrConnectWithoutColumnInput[]
    createMany?: CellCreateManyColumnInputEnvelope
    connect?: CellWhereUniqueInput | CellWhereUniqueInput[]
  }

  export type ViewFilterCreateNestedManyWithoutColumnInput = {
    create?: XOR<ViewFilterCreateWithoutColumnInput, ViewFilterUncheckedCreateWithoutColumnInput> | ViewFilterCreateWithoutColumnInput[] | ViewFilterUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: ViewFilterCreateOrConnectWithoutColumnInput | ViewFilterCreateOrConnectWithoutColumnInput[]
    createMany?: ViewFilterCreateManyColumnInputEnvelope
    connect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
  }

  export type ViewSortCreateNestedManyWithoutColumnInput = {
    create?: XOR<ViewSortCreateWithoutColumnInput, ViewSortUncheckedCreateWithoutColumnInput> | ViewSortCreateWithoutColumnInput[] | ViewSortUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: ViewSortCreateOrConnectWithoutColumnInput | ViewSortCreateOrConnectWithoutColumnInput[]
    createMany?: ViewSortCreateManyColumnInputEnvelope
    connect?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
  }

  export type ViewColumnVisibilityCreateNestedManyWithoutColumnInput = {
    create?: XOR<ViewColumnVisibilityCreateWithoutColumnInput, ViewColumnVisibilityUncheckedCreateWithoutColumnInput> | ViewColumnVisibilityCreateWithoutColumnInput[] | ViewColumnVisibilityUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: ViewColumnVisibilityCreateOrConnectWithoutColumnInput | ViewColumnVisibilityCreateOrConnectWithoutColumnInput[]
    createMany?: ViewColumnVisibilityCreateManyColumnInputEnvelope
    connect?: ViewColumnVisibilityWhereUniqueInput | ViewColumnVisibilityWhereUniqueInput[]
  }

  export type CellUncheckedCreateNestedManyWithoutColumnInput = {
    create?: XOR<CellCreateWithoutColumnInput, CellUncheckedCreateWithoutColumnInput> | CellCreateWithoutColumnInput[] | CellUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: CellCreateOrConnectWithoutColumnInput | CellCreateOrConnectWithoutColumnInput[]
    createMany?: CellCreateManyColumnInputEnvelope
    connect?: CellWhereUniqueInput | CellWhereUniqueInput[]
  }

  export type ViewFilterUncheckedCreateNestedManyWithoutColumnInput = {
    create?: XOR<ViewFilterCreateWithoutColumnInput, ViewFilterUncheckedCreateWithoutColumnInput> | ViewFilterCreateWithoutColumnInput[] | ViewFilterUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: ViewFilterCreateOrConnectWithoutColumnInput | ViewFilterCreateOrConnectWithoutColumnInput[]
    createMany?: ViewFilterCreateManyColumnInputEnvelope
    connect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
  }

  export type ViewSortUncheckedCreateNestedManyWithoutColumnInput = {
    create?: XOR<ViewSortCreateWithoutColumnInput, ViewSortUncheckedCreateWithoutColumnInput> | ViewSortCreateWithoutColumnInput[] | ViewSortUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: ViewSortCreateOrConnectWithoutColumnInput | ViewSortCreateOrConnectWithoutColumnInput[]
    createMany?: ViewSortCreateManyColumnInputEnvelope
    connect?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
  }

  export type ViewColumnVisibilityUncheckedCreateNestedManyWithoutColumnInput = {
    create?: XOR<ViewColumnVisibilityCreateWithoutColumnInput, ViewColumnVisibilityUncheckedCreateWithoutColumnInput> | ViewColumnVisibilityCreateWithoutColumnInput[] | ViewColumnVisibilityUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: ViewColumnVisibilityCreateOrConnectWithoutColumnInput | ViewColumnVisibilityCreateOrConnectWithoutColumnInput[]
    createMany?: ViewColumnVisibilityCreateManyColumnInputEnvelope
    connect?: ViewColumnVisibilityWhereUniqueInput | ViewColumnVisibilityWhereUniqueInput[]
  }

  export type EnumColumnTypeFieldUpdateOperationsInput = {
    set?: $Enums.ColumnType
  }

  export type TableUpdateOneRequiredWithoutColumnsNestedInput = {
    create?: XOR<TableCreateWithoutColumnsInput, TableUncheckedCreateWithoutColumnsInput>
    connectOrCreate?: TableCreateOrConnectWithoutColumnsInput
    upsert?: TableUpsertWithoutColumnsInput
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutColumnsInput, TableUpdateWithoutColumnsInput>, TableUncheckedUpdateWithoutColumnsInput>
  }

  export type CellUpdateManyWithoutColumnNestedInput = {
    create?: XOR<CellCreateWithoutColumnInput, CellUncheckedCreateWithoutColumnInput> | CellCreateWithoutColumnInput[] | CellUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: CellCreateOrConnectWithoutColumnInput | CellCreateOrConnectWithoutColumnInput[]
    upsert?: CellUpsertWithWhereUniqueWithoutColumnInput | CellUpsertWithWhereUniqueWithoutColumnInput[]
    createMany?: CellCreateManyColumnInputEnvelope
    set?: CellWhereUniqueInput | CellWhereUniqueInput[]
    disconnect?: CellWhereUniqueInput | CellWhereUniqueInput[]
    delete?: CellWhereUniqueInput | CellWhereUniqueInput[]
    connect?: CellWhereUniqueInput | CellWhereUniqueInput[]
    update?: CellUpdateWithWhereUniqueWithoutColumnInput | CellUpdateWithWhereUniqueWithoutColumnInput[]
    updateMany?: CellUpdateManyWithWhereWithoutColumnInput | CellUpdateManyWithWhereWithoutColumnInput[]
    deleteMany?: CellScalarWhereInput | CellScalarWhereInput[]
  }

  export type ViewFilterUpdateManyWithoutColumnNestedInput = {
    create?: XOR<ViewFilterCreateWithoutColumnInput, ViewFilterUncheckedCreateWithoutColumnInput> | ViewFilterCreateWithoutColumnInput[] | ViewFilterUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: ViewFilterCreateOrConnectWithoutColumnInput | ViewFilterCreateOrConnectWithoutColumnInput[]
    upsert?: ViewFilterUpsertWithWhereUniqueWithoutColumnInput | ViewFilterUpsertWithWhereUniqueWithoutColumnInput[]
    createMany?: ViewFilterCreateManyColumnInputEnvelope
    set?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    disconnect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    delete?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    connect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    update?: ViewFilterUpdateWithWhereUniqueWithoutColumnInput | ViewFilterUpdateWithWhereUniqueWithoutColumnInput[]
    updateMany?: ViewFilterUpdateManyWithWhereWithoutColumnInput | ViewFilterUpdateManyWithWhereWithoutColumnInput[]
    deleteMany?: ViewFilterScalarWhereInput | ViewFilterScalarWhereInput[]
  }

  export type ViewSortUpdateManyWithoutColumnNestedInput = {
    create?: XOR<ViewSortCreateWithoutColumnInput, ViewSortUncheckedCreateWithoutColumnInput> | ViewSortCreateWithoutColumnInput[] | ViewSortUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: ViewSortCreateOrConnectWithoutColumnInput | ViewSortCreateOrConnectWithoutColumnInput[]
    upsert?: ViewSortUpsertWithWhereUniqueWithoutColumnInput | ViewSortUpsertWithWhereUniqueWithoutColumnInput[]
    createMany?: ViewSortCreateManyColumnInputEnvelope
    set?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    disconnect?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    delete?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    connect?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    update?: ViewSortUpdateWithWhereUniqueWithoutColumnInput | ViewSortUpdateWithWhereUniqueWithoutColumnInput[]
    updateMany?: ViewSortUpdateManyWithWhereWithoutColumnInput | ViewSortUpdateManyWithWhereWithoutColumnInput[]
    deleteMany?: ViewSortScalarWhereInput | ViewSortScalarWhereInput[]
  }

  export type ViewColumnVisibilityUpdateManyWithoutColumnNestedInput = {
    create?: XOR<ViewColumnVisibilityCreateWithoutColumnInput, ViewColumnVisibilityUncheckedCreateWithoutColumnInput> | ViewColumnVisibilityCreateWithoutColumnInput[] | ViewColumnVisibilityUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: ViewColumnVisibilityCreateOrConnectWithoutColumnInput | ViewColumnVisibilityCreateOrConnectWithoutColumnInput[]
    upsert?: ViewColumnVisibilityUpsertWithWhereUniqueWithoutColumnInput | ViewColumnVisibilityUpsertWithWhereUniqueWithoutColumnInput[]
    createMany?: ViewColumnVisibilityCreateManyColumnInputEnvelope
    set?: ViewColumnVisibilityWhereUniqueInput | ViewColumnVisibilityWhereUniqueInput[]
    disconnect?: ViewColumnVisibilityWhereUniqueInput | ViewColumnVisibilityWhereUniqueInput[]
    delete?: ViewColumnVisibilityWhereUniqueInput | ViewColumnVisibilityWhereUniqueInput[]
    connect?: ViewColumnVisibilityWhereUniqueInput | ViewColumnVisibilityWhereUniqueInput[]
    update?: ViewColumnVisibilityUpdateWithWhereUniqueWithoutColumnInput | ViewColumnVisibilityUpdateWithWhereUniqueWithoutColumnInput[]
    updateMany?: ViewColumnVisibilityUpdateManyWithWhereWithoutColumnInput | ViewColumnVisibilityUpdateManyWithWhereWithoutColumnInput[]
    deleteMany?: ViewColumnVisibilityScalarWhereInput | ViewColumnVisibilityScalarWhereInput[]
  }

  export type CellUncheckedUpdateManyWithoutColumnNestedInput = {
    create?: XOR<CellCreateWithoutColumnInput, CellUncheckedCreateWithoutColumnInput> | CellCreateWithoutColumnInput[] | CellUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: CellCreateOrConnectWithoutColumnInput | CellCreateOrConnectWithoutColumnInput[]
    upsert?: CellUpsertWithWhereUniqueWithoutColumnInput | CellUpsertWithWhereUniqueWithoutColumnInput[]
    createMany?: CellCreateManyColumnInputEnvelope
    set?: CellWhereUniqueInput | CellWhereUniqueInput[]
    disconnect?: CellWhereUniqueInput | CellWhereUniqueInput[]
    delete?: CellWhereUniqueInput | CellWhereUniqueInput[]
    connect?: CellWhereUniqueInput | CellWhereUniqueInput[]
    update?: CellUpdateWithWhereUniqueWithoutColumnInput | CellUpdateWithWhereUniqueWithoutColumnInput[]
    updateMany?: CellUpdateManyWithWhereWithoutColumnInput | CellUpdateManyWithWhereWithoutColumnInput[]
    deleteMany?: CellScalarWhereInput | CellScalarWhereInput[]
  }

  export type ViewFilterUncheckedUpdateManyWithoutColumnNestedInput = {
    create?: XOR<ViewFilterCreateWithoutColumnInput, ViewFilterUncheckedCreateWithoutColumnInput> | ViewFilterCreateWithoutColumnInput[] | ViewFilterUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: ViewFilterCreateOrConnectWithoutColumnInput | ViewFilterCreateOrConnectWithoutColumnInput[]
    upsert?: ViewFilterUpsertWithWhereUniqueWithoutColumnInput | ViewFilterUpsertWithWhereUniqueWithoutColumnInput[]
    createMany?: ViewFilterCreateManyColumnInputEnvelope
    set?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    disconnect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    delete?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    connect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    update?: ViewFilterUpdateWithWhereUniqueWithoutColumnInput | ViewFilterUpdateWithWhereUniqueWithoutColumnInput[]
    updateMany?: ViewFilterUpdateManyWithWhereWithoutColumnInput | ViewFilterUpdateManyWithWhereWithoutColumnInput[]
    deleteMany?: ViewFilterScalarWhereInput | ViewFilterScalarWhereInput[]
  }

  export type ViewSortUncheckedUpdateManyWithoutColumnNestedInput = {
    create?: XOR<ViewSortCreateWithoutColumnInput, ViewSortUncheckedCreateWithoutColumnInput> | ViewSortCreateWithoutColumnInput[] | ViewSortUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: ViewSortCreateOrConnectWithoutColumnInput | ViewSortCreateOrConnectWithoutColumnInput[]
    upsert?: ViewSortUpsertWithWhereUniqueWithoutColumnInput | ViewSortUpsertWithWhereUniqueWithoutColumnInput[]
    createMany?: ViewSortCreateManyColumnInputEnvelope
    set?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    disconnect?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    delete?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    connect?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    update?: ViewSortUpdateWithWhereUniqueWithoutColumnInput | ViewSortUpdateWithWhereUniqueWithoutColumnInput[]
    updateMany?: ViewSortUpdateManyWithWhereWithoutColumnInput | ViewSortUpdateManyWithWhereWithoutColumnInput[]
    deleteMany?: ViewSortScalarWhereInput | ViewSortScalarWhereInput[]
  }

  export type ViewColumnVisibilityUncheckedUpdateManyWithoutColumnNestedInput = {
    create?: XOR<ViewColumnVisibilityCreateWithoutColumnInput, ViewColumnVisibilityUncheckedCreateWithoutColumnInput> | ViewColumnVisibilityCreateWithoutColumnInput[] | ViewColumnVisibilityUncheckedCreateWithoutColumnInput[]
    connectOrCreate?: ViewColumnVisibilityCreateOrConnectWithoutColumnInput | ViewColumnVisibilityCreateOrConnectWithoutColumnInput[]
    upsert?: ViewColumnVisibilityUpsertWithWhereUniqueWithoutColumnInput | ViewColumnVisibilityUpsertWithWhereUniqueWithoutColumnInput[]
    createMany?: ViewColumnVisibilityCreateManyColumnInputEnvelope
    set?: ViewColumnVisibilityWhereUniqueInput | ViewColumnVisibilityWhereUniqueInput[]
    disconnect?: ViewColumnVisibilityWhereUniqueInput | ViewColumnVisibilityWhereUniqueInput[]
    delete?: ViewColumnVisibilityWhereUniqueInput | ViewColumnVisibilityWhereUniqueInput[]
    connect?: ViewColumnVisibilityWhereUniqueInput | ViewColumnVisibilityWhereUniqueInput[]
    update?: ViewColumnVisibilityUpdateWithWhereUniqueWithoutColumnInput | ViewColumnVisibilityUpdateWithWhereUniqueWithoutColumnInput[]
    updateMany?: ViewColumnVisibilityUpdateManyWithWhereWithoutColumnInput | ViewColumnVisibilityUpdateManyWithWhereWithoutColumnInput[]
    deleteMany?: ViewColumnVisibilityScalarWhereInput | ViewColumnVisibilityScalarWhereInput[]
  }

  export type TableCreateNestedOneWithoutViewsInput = {
    create?: XOR<TableCreateWithoutViewsInput, TableUncheckedCreateWithoutViewsInput>
    connectOrCreate?: TableCreateOrConnectWithoutViewsInput
    connect?: TableWhereUniqueInput
  }

  export type ViewFilterCreateNestedManyWithoutViewInput = {
    create?: XOR<ViewFilterCreateWithoutViewInput, ViewFilterUncheckedCreateWithoutViewInput> | ViewFilterCreateWithoutViewInput[] | ViewFilterUncheckedCreateWithoutViewInput[]
    connectOrCreate?: ViewFilterCreateOrConnectWithoutViewInput | ViewFilterCreateOrConnectWithoutViewInput[]
    createMany?: ViewFilterCreateManyViewInputEnvelope
    connect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
  }

  export type ViewSortCreateNestedManyWithoutViewInput = {
    create?: XOR<ViewSortCreateWithoutViewInput, ViewSortUncheckedCreateWithoutViewInput> | ViewSortCreateWithoutViewInput[] | ViewSortUncheckedCreateWithoutViewInput[]
    connectOrCreate?: ViewSortCreateOrConnectWithoutViewInput | ViewSortCreateOrConnectWithoutViewInput[]
    createMany?: ViewSortCreateManyViewInputEnvelope
    connect?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
  }

  export type ViewColumnVisibilityCreateNestedManyWithoutViewInput = {
    create?: XOR<ViewColumnVisibilityCreateWithoutViewInput, ViewColumnVisibilityUncheckedCreateWithoutViewInput> | ViewColumnVisibilityCreateWithoutViewInput[] | ViewColumnVisibilityUncheckedCreateWithoutViewInput[]
    connectOrCreate?: ViewColumnVisibilityCreateOrConnectWithoutViewInput | ViewColumnVisibilityCreateOrConnectWithoutViewInput[]
    createMany?: ViewColumnVisibilityCreateManyViewInputEnvelope
    connect?: ViewColumnVisibilityWhereUniqueInput | ViewColumnVisibilityWhereUniqueInput[]
  }

  export type ViewFilterUncheckedCreateNestedManyWithoutViewInput = {
    create?: XOR<ViewFilterCreateWithoutViewInput, ViewFilterUncheckedCreateWithoutViewInput> | ViewFilterCreateWithoutViewInput[] | ViewFilterUncheckedCreateWithoutViewInput[]
    connectOrCreate?: ViewFilterCreateOrConnectWithoutViewInput | ViewFilterCreateOrConnectWithoutViewInput[]
    createMany?: ViewFilterCreateManyViewInputEnvelope
    connect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
  }

  export type ViewSortUncheckedCreateNestedManyWithoutViewInput = {
    create?: XOR<ViewSortCreateWithoutViewInput, ViewSortUncheckedCreateWithoutViewInput> | ViewSortCreateWithoutViewInput[] | ViewSortUncheckedCreateWithoutViewInput[]
    connectOrCreate?: ViewSortCreateOrConnectWithoutViewInput | ViewSortCreateOrConnectWithoutViewInput[]
    createMany?: ViewSortCreateManyViewInputEnvelope
    connect?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
  }

  export type ViewColumnVisibilityUncheckedCreateNestedManyWithoutViewInput = {
    create?: XOR<ViewColumnVisibilityCreateWithoutViewInput, ViewColumnVisibilityUncheckedCreateWithoutViewInput> | ViewColumnVisibilityCreateWithoutViewInput[] | ViewColumnVisibilityUncheckedCreateWithoutViewInput[]
    connectOrCreate?: ViewColumnVisibilityCreateOrConnectWithoutViewInput | ViewColumnVisibilityCreateOrConnectWithoutViewInput[]
    createMany?: ViewColumnVisibilityCreateManyViewInputEnvelope
    connect?: ViewColumnVisibilityWhereUniqueInput | ViewColumnVisibilityWhereUniqueInput[]
  }

  export type EnumViewTypeFieldUpdateOperationsInput = {
    set?: $Enums.ViewType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TableUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<TableCreateWithoutViewsInput, TableUncheckedCreateWithoutViewsInput>
    connectOrCreate?: TableCreateOrConnectWithoutViewsInput
    upsert?: TableUpsertWithoutViewsInput
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutViewsInput, TableUpdateWithoutViewsInput>, TableUncheckedUpdateWithoutViewsInput>
  }

  export type ViewFilterUpdateManyWithoutViewNestedInput = {
    create?: XOR<ViewFilterCreateWithoutViewInput, ViewFilterUncheckedCreateWithoutViewInput> | ViewFilterCreateWithoutViewInput[] | ViewFilterUncheckedCreateWithoutViewInput[]
    connectOrCreate?: ViewFilterCreateOrConnectWithoutViewInput | ViewFilterCreateOrConnectWithoutViewInput[]
    upsert?: ViewFilterUpsertWithWhereUniqueWithoutViewInput | ViewFilterUpsertWithWhereUniqueWithoutViewInput[]
    createMany?: ViewFilterCreateManyViewInputEnvelope
    set?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    disconnect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    delete?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    connect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    update?: ViewFilterUpdateWithWhereUniqueWithoutViewInput | ViewFilterUpdateWithWhereUniqueWithoutViewInput[]
    updateMany?: ViewFilterUpdateManyWithWhereWithoutViewInput | ViewFilterUpdateManyWithWhereWithoutViewInput[]
    deleteMany?: ViewFilterScalarWhereInput | ViewFilterScalarWhereInput[]
  }

  export type ViewSortUpdateManyWithoutViewNestedInput = {
    create?: XOR<ViewSortCreateWithoutViewInput, ViewSortUncheckedCreateWithoutViewInput> | ViewSortCreateWithoutViewInput[] | ViewSortUncheckedCreateWithoutViewInput[]
    connectOrCreate?: ViewSortCreateOrConnectWithoutViewInput | ViewSortCreateOrConnectWithoutViewInput[]
    upsert?: ViewSortUpsertWithWhereUniqueWithoutViewInput | ViewSortUpsertWithWhereUniqueWithoutViewInput[]
    createMany?: ViewSortCreateManyViewInputEnvelope
    set?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    disconnect?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    delete?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    connect?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    update?: ViewSortUpdateWithWhereUniqueWithoutViewInput | ViewSortUpdateWithWhereUniqueWithoutViewInput[]
    updateMany?: ViewSortUpdateManyWithWhereWithoutViewInput | ViewSortUpdateManyWithWhereWithoutViewInput[]
    deleteMany?: ViewSortScalarWhereInput | ViewSortScalarWhereInput[]
  }

  export type ViewColumnVisibilityUpdateManyWithoutViewNestedInput = {
    create?: XOR<ViewColumnVisibilityCreateWithoutViewInput, ViewColumnVisibilityUncheckedCreateWithoutViewInput> | ViewColumnVisibilityCreateWithoutViewInput[] | ViewColumnVisibilityUncheckedCreateWithoutViewInput[]
    connectOrCreate?: ViewColumnVisibilityCreateOrConnectWithoutViewInput | ViewColumnVisibilityCreateOrConnectWithoutViewInput[]
    upsert?: ViewColumnVisibilityUpsertWithWhereUniqueWithoutViewInput | ViewColumnVisibilityUpsertWithWhereUniqueWithoutViewInput[]
    createMany?: ViewColumnVisibilityCreateManyViewInputEnvelope
    set?: ViewColumnVisibilityWhereUniqueInput | ViewColumnVisibilityWhereUniqueInput[]
    disconnect?: ViewColumnVisibilityWhereUniqueInput | ViewColumnVisibilityWhereUniqueInput[]
    delete?: ViewColumnVisibilityWhereUniqueInput | ViewColumnVisibilityWhereUniqueInput[]
    connect?: ViewColumnVisibilityWhereUniqueInput | ViewColumnVisibilityWhereUniqueInput[]
    update?: ViewColumnVisibilityUpdateWithWhereUniqueWithoutViewInput | ViewColumnVisibilityUpdateWithWhereUniqueWithoutViewInput[]
    updateMany?: ViewColumnVisibilityUpdateManyWithWhereWithoutViewInput | ViewColumnVisibilityUpdateManyWithWhereWithoutViewInput[]
    deleteMany?: ViewColumnVisibilityScalarWhereInput | ViewColumnVisibilityScalarWhereInput[]
  }

  export type ViewFilterUncheckedUpdateManyWithoutViewNestedInput = {
    create?: XOR<ViewFilterCreateWithoutViewInput, ViewFilterUncheckedCreateWithoutViewInput> | ViewFilterCreateWithoutViewInput[] | ViewFilterUncheckedCreateWithoutViewInput[]
    connectOrCreate?: ViewFilterCreateOrConnectWithoutViewInput | ViewFilterCreateOrConnectWithoutViewInput[]
    upsert?: ViewFilterUpsertWithWhereUniqueWithoutViewInput | ViewFilterUpsertWithWhereUniqueWithoutViewInput[]
    createMany?: ViewFilterCreateManyViewInputEnvelope
    set?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    disconnect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    delete?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    connect?: ViewFilterWhereUniqueInput | ViewFilterWhereUniqueInput[]
    update?: ViewFilterUpdateWithWhereUniqueWithoutViewInput | ViewFilterUpdateWithWhereUniqueWithoutViewInput[]
    updateMany?: ViewFilterUpdateManyWithWhereWithoutViewInput | ViewFilterUpdateManyWithWhereWithoutViewInput[]
    deleteMany?: ViewFilterScalarWhereInput | ViewFilterScalarWhereInput[]
  }

  export type ViewSortUncheckedUpdateManyWithoutViewNestedInput = {
    create?: XOR<ViewSortCreateWithoutViewInput, ViewSortUncheckedCreateWithoutViewInput> | ViewSortCreateWithoutViewInput[] | ViewSortUncheckedCreateWithoutViewInput[]
    connectOrCreate?: ViewSortCreateOrConnectWithoutViewInput | ViewSortCreateOrConnectWithoutViewInput[]
    upsert?: ViewSortUpsertWithWhereUniqueWithoutViewInput | ViewSortUpsertWithWhereUniqueWithoutViewInput[]
    createMany?: ViewSortCreateManyViewInputEnvelope
    set?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    disconnect?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    delete?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    connect?: ViewSortWhereUniqueInput | ViewSortWhereUniqueInput[]
    update?: ViewSortUpdateWithWhereUniqueWithoutViewInput | ViewSortUpdateWithWhereUniqueWithoutViewInput[]
    updateMany?: ViewSortUpdateManyWithWhereWithoutViewInput | ViewSortUpdateManyWithWhereWithoutViewInput[]
    deleteMany?: ViewSortScalarWhereInput | ViewSortScalarWhereInput[]
  }

  export type ViewColumnVisibilityUncheckedUpdateManyWithoutViewNestedInput = {
    create?: XOR<ViewColumnVisibilityCreateWithoutViewInput, ViewColumnVisibilityUncheckedCreateWithoutViewInput> | ViewColumnVisibilityCreateWithoutViewInput[] | ViewColumnVisibilityUncheckedCreateWithoutViewInput[]
    connectOrCreate?: ViewColumnVisibilityCreateOrConnectWithoutViewInput | ViewColumnVisibilityCreateOrConnectWithoutViewInput[]
    upsert?: ViewColumnVisibilityUpsertWithWhereUniqueWithoutViewInput | ViewColumnVisibilityUpsertWithWhereUniqueWithoutViewInput[]
    createMany?: ViewColumnVisibilityCreateManyViewInputEnvelope
    set?: ViewColumnVisibilityWhereUniqueInput | ViewColumnVisibilityWhereUniqueInput[]
    disconnect?: ViewColumnVisibilityWhereUniqueInput | ViewColumnVisibilityWhereUniqueInput[]
    delete?: ViewColumnVisibilityWhereUniqueInput | ViewColumnVisibilityWhereUniqueInput[]
    connect?: ViewColumnVisibilityWhereUniqueInput | ViewColumnVisibilityWhereUniqueInput[]
    update?: ViewColumnVisibilityUpdateWithWhereUniqueWithoutViewInput | ViewColumnVisibilityUpdateWithWhereUniqueWithoutViewInput[]
    updateMany?: ViewColumnVisibilityUpdateManyWithWhereWithoutViewInput | ViewColumnVisibilityUpdateManyWithWhereWithoutViewInput[]
    deleteMany?: ViewColumnVisibilityScalarWhereInput | ViewColumnVisibilityScalarWhereInput[]
  }

  export type ViewCreateNestedOneWithoutFiltersInput = {
    create?: XOR<ViewCreateWithoutFiltersInput, ViewUncheckedCreateWithoutFiltersInput>
    connectOrCreate?: ViewCreateOrConnectWithoutFiltersInput
    connect?: ViewWhereUniqueInput
  }

  export type ColumnCreateNestedOneWithoutViewFiltersInput = {
    create?: XOR<ColumnCreateWithoutViewFiltersInput, ColumnUncheckedCreateWithoutViewFiltersInput>
    connectOrCreate?: ColumnCreateOrConnectWithoutViewFiltersInput
    connect?: ColumnWhereUniqueInput
  }

  export type EnumViewFilterOperatorFieldUpdateOperationsInput = {
    set?: $Enums.ViewFilterOperator
  }

  export type ViewUpdateOneRequiredWithoutFiltersNestedInput = {
    create?: XOR<ViewCreateWithoutFiltersInput, ViewUncheckedCreateWithoutFiltersInput>
    connectOrCreate?: ViewCreateOrConnectWithoutFiltersInput
    upsert?: ViewUpsertWithoutFiltersInput
    connect?: ViewWhereUniqueInput
    update?: XOR<XOR<ViewUpdateToOneWithWhereWithoutFiltersInput, ViewUpdateWithoutFiltersInput>, ViewUncheckedUpdateWithoutFiltersInput>
  }

  export type ColumnUpdateOneRequiredWithoutViewFiltersNestedInput = {
    create?: XOR<ColumnCreateWithoutViewFiltersInput, ColumnUncheckedCreateWithoutViewFiltersInput>
    connectOrCreate?: ColumnCreateOrConnectWithoutViewFiltersInput
    upsert?: ColumnUpsertWithoutViewFiltersInput
    connect?: ColumnWhereUniqueInput
    update?: XOR<XOR<ColumnUpdateToOneWithWhereWithoutViewFiltersInput, ColumnUpdateWithoutViewFiltersInput>, ColumnUncheckedUpdateWithoutViewFiltersInput>
  }

  export type ViewCreateNestedOneWithoutSortsInput = {
    create?: XOR<ViewCreateWithoutSortsInput, ViewUncheckedCreateWithoutSortsInput>
    connectOrCreate?: ViewCreateOrConnectWithoutSortsInput
    connect?: ViewWhereUniqueInput
  }

  export type ColumnCreateNestedOneWithoutViewSortsInput = {
    create?: XOR<ColumnCreateWithoutViewSortsInput, ColumnUncheckedCreateWithoutViewSortsInput>
    connectOrCreate?: ColumnCreateOrConnectWithoutViewSortsInput
    connect?: ColumnWhereUniqueInput
  }

  export type EnumViewSortDirectionFieldUpdateOperationsInput = {
    set?: $Enums.ViewSortDirection
  }

  export type ViewUpdateOneRequiredWithoutSortsNestedInput = {
    create?: XOR<ViewCreateWithoutSortsInput, ViewUncheckedCreateWithoutSortsInput>
    connectOrCreate?: ViewCreateOrConnectWithoutSortsInput
    upsert?: ViewUpsertWithoutSortsInput
    connect?: ViewWhereUniqueInput
    update?: XOR<XOR<ViewUpdateToOneWithWhereWithoutSortsInput, ViewUpdateWithoutSortsInput>, ViewUncheckedUpdateWithoutSortsInput>
  }

  export type ColumnUpdateOneRequiredWithoutViewSortsNestedInput = {
    create?: XOR<ColumnCreateWithoutViewSortsInput, ColumnUncheckedCreateWithoutViewSortsInput>
    connectOrCreate?: ColumnCreateOrConnectWithoutViewSortsInput
    upsert?: ColumnUpsertWithoutViewSortsInput
    connect?: ColumnWhereUniqueInput
    update?: XOR<XOR<ColumnUpdateToOneWithWhereWithoutViewSortsInput, ColumnUpdateWithoutViewSortsInput>, ColumnUncheckedUpdateWithoutViewSortsInput>
  }

  export type ViewCreateNestedOneWithoutColumnVisibilitiesInput = {
    create?: XOR<ViewCreateWithoutColumnVisibilitiesInput, ViewUncheckedCreateWithoutColumnVisibilitiesInput>
    connectOrCreate?: ViewCreateOrConnectWithoutColumnVisibilitiesInput
    connect?: ViewWhereUniqueInput
  }

  export type ColumnCreateNestedOneWithoutViewColumnVisibilitiesInput = {
    create?: XOR<ColumnCreateWithoutViewColumnVisibilitiesInput, ColumnUncheckedCreateWithoutViewColumnVisibilitiesInput>
    connectOrCreate?: ColumnCreateOrConnectWithoutViewColumnVisibilitiesInput
    connect?: ColumnWhereUniqueInput
  }

  export type ViewUpdateOneRequiredWithoutColumnVisibilitiesNestedInput = {
    create?: XOR<ViewCreateWithoutColumnVisibilitiesInput, ViewUncheckedCreateWithoutColumnVisibilitiesInput>
    connectOrCreate?: ViewCreateOrConnectWithoutColumnVisibilitiesInput
    upsert?: ViewUpsertWithoutColumnVisibilitiesInput
    connect?: ViewWhereUniqueInput
    update?: XOR<XOR<ViewUpdateToOneWithWhereWithoutColumnVisibilitiesInput, ViewUpdateWithoutColumnVisibilitiesInput>, ViewUncheckedUpdateWithoutColumnVisibilitiesInput>
  }

  export type ColumnUpdateOneRequiredWithoutViewColumnVisibilitiesNestedInput = {
    create?: XOR<ColumnCreateWithoutViewColumnVisibilitiesInput, ColumnUncheckedCreateWithoutViewColumnVisibilitiesInput>
    connectOrCreate?: ColumnCreateOrConnectWithoutViewColumnVisibilitiesInput
    upsert?: ColumnUpsertWithoutViewColumnVisibilitiesInput
    connect?: ColumnWhereUniqueInput
    update?: XOR<XOR<ColumnUpdateToOneWithWhereWithoutViewColumnVisibilitiesInput, ColumnUpdateWithoutViewColumnVisibilitiesInput>, ColumnUncheckedUpdateWithoutViewColumnVisibilitiesInput>
  }

  export type TableCreateNestedOneWithoutRowsInput = {
    create?: XOR<TableCreateWithoutRowsInput, TableUncheckedCreateWithoutRowsInput>
    connectOrCreate?: TableCreateOrConnectWithoutRowsInput
    connect?: TableWhereUniqueInput
  }

  export type CellCreateNestedManyWithoutRowInput = {
    create?: XOR<CellCreateWithoutRowInput, CellUncheckedCreateWithoutRowInput> | CellCreateWithoutRowInput[] | CellUncheckedCreateWithoutRowInput[]
    connectOrCreate?: CellCreateOrConnectWithoutRowInput | CellCreateOrConnectWithoutRowInput[]
    createMany?: CellCreateManyRowInputEnvelope
    connect?: CellWhereUniqueInput | CellWhereUniqueInput[]
  }

  export type CellUncheckedCreateNestedManyWithoutRowInput = {
    create?: XOR<CellCreateWithoutRowInput, CellUncheckedCreateWithoutRowInput> | CellCreateWithoutRowInput[] | CellUncheckedCreateWithoutRowInput[]
    connectOrCreate?: CellCreateOrConnectWithoutRowInput | CellCreateOrConnectWithoutRowInput[]
    createMany?: CellCreateManyRowInputEnvelope
    connect?: CellWhereUniqueInput | CellWhereUniqueInput[]
  }

  export type TableUpdateOneRequiredWithoutRowsNestedInput = {
    create?: XOR<TableCreateWithoutRowsInput, TableUncheckedCreateWithoutRowsInput>
    connectOrCreate?: TableCreateOrConnectWithoutRowsInput
    upsert?: TableUpsertWithoutRowsInput
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutRowsInput, TableUpdateWithoutRowsInput>, TableUncheckedUpdateWithoutRowsInput>
  }

  export type CellUpdateManyWithoutRowNestedInput = {
    create?: XOR<CellCreateWithoutRowInput, CellUncheckedCreateWithoutRowInput> | CellCreateWithoutRowInput[] | CellUncheckedCreateWithoutRowInput[]
    connectOrCreate?: CellCreateOrConnectWithoutRowInput | CellCreateOrConnectWithoutRowInput[]
    upsert?: CellUpsertWithWhereUniqueWithoutRowInput | CellUpsertWithWhereUniqueWithoutRowInput[]
    createMany?: CellCreateManyRowInputEnvelope
    set?: CellWhereUniqueInput | CellWhereUniqueInput[]
    disconnect?: CellWhereUniqueInput | CellWhereUniqueInput[]
    delete?: CellWhereUniqueInput | CellWhereUniqueInput[]
    connect?: CellWhereUniqueInput | CellWhereUniqueInput[]
    update?: CellUpdateWithWhereUniqueWithoutRowInput | CellUpdateWithWhereUniqueWithoutRowInput[]
    updateMany?: CellUpdateManyWithWhereWithoutRowInput | CellUpdateManyWithWhereWithoutRowInput[]
    deleteMany?: CellScalarWhereInput | CellScalarWhereInput[]
  }

  export type CellUncheckedUpdateManyWithoutRowNestedInput = {
    create?: XOR<CellCreateWithoutRowInput, CellUncheckedCreateWithoutRowInput> | CellCreateWithoutRowInput[] | CellUncheckedCreateWithoutRowInput[]
    connectOrCreate?: CellCreateOrConnectWithoutRowInput | CellCreateOrConnectWithoutRowInput[]
    upsert?: CellUpsertWithWhereUniqueWithoutRowInput | CellUpsertWithWhereUniqueWithoutRowInput[]
    createMany?: CellCreateManyRowInputEnvelope
    set?: CellWhereUniqueInput | CellWhereUniqueInput[]
    disconnect?: CellWhereUniqueInput | CellWhereUniqueInput[]
    delete?: CellWhereUniqueInput | CellWhereUniqueInput[]
    connect?: CellWhereUniqueInput | CellWhereUniqueInput[]
    update?: CellUpdateWithWhereUniqueWithoutRowInput | CellUpdateWithWhereUniqueWithoutRowInput[]
    updateMany?: CellUpdateManyWithWhereWithoutRowInput | CellUpdateManyWithWhereWithoutRowInput[]
    deleteMany?: CellScalarWhereInput | CellScalarWhereInput[]
  }

  export type RowCreateNestedOneWithoutCellsInput = {
    create?: XOR<RowCreateWithoutCellsInput, RowUncheckedCreateWithoutCellsInput>
    connectOrCreate?: RowCreateOrConnectWithoutCellsInput
    connect?: RowWhereUniqueInput
  }

  export type ColumnCreateNestedOneWithoutCellsInput = {
    create?: XOR<ColumnCreateWithoutCellsInput, ColumnUncheckedCreateWithoutCellsInput>
    connectOrCreate?: ColumnCreateOrConnectWithoutCellsInput
    connect?: ColumnWhereUniqueInput
  }

  export type RowUpdateOneRequiredWithoutCellsNestedInput = {
    create?: XOR<RowCreateWithoutCellsInput, RowUncheckedCreateWithoutCellsInput>
    connectOrCreate?: RowCreateOrConnectWithoutCellsInput
    upsert?: RowUpsertWithoutCellsInput
    connect?: RowWhereUniqueInput
    update?: XOR<XOR<RowUpdateToOneWithWhereWithoutCellsInput, RowUpdateWithoutCellsInput>, RowUncheckedUpdateWithoutCellsInput>
  }

  export type ColumnUpdateOneRequiredWithoutCellsNestedInput = {
    create?: XOR<ColumnCreateWithoutCellsInput, ColumnUncheckedCreateWithoutCellsInput>
    connectOrCreate?: ColumnCreateOrConnectWithoutCellsInput
    upsert?: ColumnUpsertWithoutCellsInput
    connect?: ColumnWhereUniqueInput
    update?: XOR<XOR<ColumnUpdateToOneWithWhereWithoutCellsInput, ColumnUpdateWithoutCellsInput>, ColumnUncheckedUpdateWithoutCellsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumColumnTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ColumnType | EnumColumnTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ColumnType[] | ListEnumColumnTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ColumnType[] | ListEnumColumnTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumColumnTypeFilter<$PrismaModel> | $Enums.ColumnType
  }

  export type NestedEnumColumnTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ColumnType | EnumColumnTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ColumnType[] | ListEnumColumnTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ColumnType[] | ListEnumColumnTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumColumnTypeWithAggregatesFilter<$PrismaModel> | $Enums.ColumnType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumColumnTypeFilter<$PrismaModel>
    _max?: NestedEnumColumnTypeFilter<$PrismaModel>
  }

  export type NestedEnumViewTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ViewType | EnumViewTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ViewType[] | ListEnumViewTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViewType[] | ListEnumViewTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumViewTypeFilter<$PrismaModel> | $Enums.ViewType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumViewTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ViewType | EnumViewTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ViewType[] | ListEnumViewTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViewType[] | ListEnumViewTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumViewTypeWithAggregatesFilter<$PrismaModel> | $Enums.ViewType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumViewTypeFilter<$PrismaModel>
    _max?: NestedEnumViewTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumViewFilterOperatorFilter<$PrismaModel = never> = {
    equals?: $Enums.ViewFilterOperator | EnumViewFilterOperatorFieldRefInput<$PrismaModel>
    in?: $Enums.ViewFilterOperator[] | ListEnumViewFilterOperatorFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViewFilterOperator[] | ListEnumViewFilterOperatorFieldRefInput<$PrismaModel>
    not?: NestedEnumViewFilterOperatorFilter<$PrismaModel> | $Enums.ViewFilterOperator
  }

  export type NestedEnumViewFilterOperatorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ViewFilterOperator | EnumViewFilterOperatorFieldRefInput<$PrismaModel>
    in?: $Enums.ViewFilterOperator[] | ListEnumViewFilterOperatorFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViewFilterOperator[] | ListEnumViewFilterOperatorFieldRefInput<$PrismaModel>
    not?: NestedEnumViewFilterOperatorWithAggregatesFilter<$PrismaModel> | $Enums.ViewFilterOperator
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumViewFilterOperatorFilter<$PrismaModel>
    _max?: NestedEnumViewFilterOperatorFilter<$PrismaModel>
  }

  export type NestedEnumViewSortDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.ViewSortDirection | EnumViewSortDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.ViewSortDirection[] | ListEnumViewSortDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViewSortDirection[] | ListEnumViewSortDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumViewSortDirectionFilter<$PrismaModel> | $Enums.ViewSortDirection
  }

  export type NestedEnumViewSortDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ViewSortDirection | EnumViewSortDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.ViewSortDirection[] | ListEnumViewSortDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViewSortDirection[] | ListEnumViewSortDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumViewSortDirectionWithAggregatesFilter<$PrismaModel> | $Enums.ViewSortDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumViewSortDirectionFilter<$PrismaModel>
    _max?: NestedEnumViewSortDirectionFilter<$PrismaModel>
  }

  export type TableCreateWithoutBaseInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    columns?: ColumnCreateNestedManyWithoutTableInput
    rows?: RowCreateNestedManyWithoutTableInput
    views?: ViewCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutBaseInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    columns?: ColumnUncheckedCreateNestedManyWithoutTableInput
    rows?: RowUncheckedCreateNestedManyWithoutTableInput
    views?: ViewUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutBaseInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutBaseInput, TableUncheckedCreateWithoutBaseInput>
  }

  export type TableCreateManyBaseInputEnvelope = {
    data: TableCreateManyBaseInput | TableCreateManyBaseInput[]
    skipDuplicates?: boolean
  }

  export type TableUpsertWithWhereUniqueWithoutBaseInput = {
    where: TableWhereUniqueInput
    update: XOR<TableUpdateWithoutBaseInput, TableUncheckedUpdateWithoutBaseInput>
    create: XOR<TableCreateWithoutBaseInput, TableUncheckedCreateWithoutBaseInput>
  }

  export type TableUpdateWithWhereUniqueWithoutBaseInput = {
    where: TableWhereUniqueInput
    data: XOR<TableUpdateWithoutBaseInput, TableUncheckedUpdateWithoutBaseInput>
  }

  export type TableUpdateManyWithWhereWithoutBaseInput = {
    where: TableScalarWhereInput
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyWithoutBaseInput>
  }

  export type TableScalarWhereInput = {
    AND?: TableScalarWhereInput | TableScalarWhereInput[]
    OR?: TableScalarWhereInput[]
    NOT?: TableScalarWhereInput | TableScalarWhereInput[]
    id?: IntFilter<"Table"> | number
    name?: StringFilter<"Table"> | string
    createdAt?: DateTimeFilter<"Table"> | Date | string
    updatedAt?: DateTimeFilter<"Table"> | Date | string
    baseId?: IntFilter<"Table"> | number
  }

  export type BaseCreateWithoutTablesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BaseUncheckedCreateWithoutTablesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BaseCreateOrConnectWithoutTablesInput = {
    where: BaseWhereUniqueInput
    create: XOR<BaseCreateWithoutTablesInput, BaseUncheckedCreateWithoutTablesInput>
  }

  export type ColumnCreateWithoutTableInput = {
    name: string
    type: $Enums.ColumnType
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cells?: CellCreateNestedManyWithoutColumnInput
    viewFilters?: ViewFilterCreateNestedManyWithoutColumnInput
    viewSorts?: ViewSortCreateNestedManyWithoutColumnInput
    viewColumnVisibilities?: ViewColumnVisibilityCreateNestedManyWithoutColumnInput
  }

  export type ColumnUncheckedCreateWithoutTableInput = {
    id?: number
    name: string
    type: $Enums.ColumnType
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cells?: CellUncheckedCreateNestedManyWithoutColumnInput
    viewFilters?: ViewFilterUncheckedCreateNestedManyWithoutColumnInput
    viewSorts?: ViewSortUncheckedCreateNestedManyWithoutColumnInput
    viewColumnVisibilities?: ViewColumnVisibilityUncheckedCreateNestedManyWithoutColumnInput
  }

  export type ColumnCreateOrConnectWithoutTableInput = {
    where: ColumnWhereUniqueInput
    create: XOR<ColumnCreateWithoutTableInput, ColumnUncheckedCreateWithoutTableInput>
  }

  export type ColumnCreateManyTableInputEnvelope = {
    data: ColumnCreateManyTableInput | ColumnCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type RowCreateWithoutTableInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    cells?: CellCreateNestedManyWithoutRowInput
  }

  export type RowUncheckedCreateWithoutTableInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cells?: CellUncheckedCreateNestedManyWithoutRowInput
  }

  export type RowCreateOrConnectWithoutTableInput = {
    where: RowWhereUniqueInput
    create: XOR<RowCreateWithoutTableInput, RowUncheckedCreateWithoutTableInput>
  }

  export type RowCreateManyTableInputEnvelope = {
    data: RowCreateManyTableInput | RowCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type ViewCreateWithoutTableInput = {
    name: string
    type?: $Enums.ViewType
    isDefault?: boolean
    searchQuery?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    filters?: ViewFilterCreateNestedManyWithoutViewInput
    sorts?: ViewSortCreateNestedManyWithoutViewInput
    columnVisibilities?: ViewColumnVisibilityCreateNestedManyWithoutViewInput
  }

  export type ViewUncheckedCreateWithoutTableInput = {
    id?: number
    name: string
    type?: $Enums.ViewType
    isDefault?: boolean
    searchQuery?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    filters?: ViewFilterUncheckedCreateNestedManyWithoutViewInput
    sorts?: ViewSortUncheckedCreateNestedManyWithoutViewInput
    columnVisibilities?: ViewColumnVisibilityUncheckedCreateNestedManyWithoutViewInput
  }

  export type ViewCreateOrConnectWithoutTableInput = {
    where: ViewWhereUniqueInput
    create: XOR<ViewCreateWithoutTableInput, ViewUncheckedCreateWithoutTableInput>
  }

  export type ViewCreateManyTableInputEnvelope = {
    data: ViewCreateManyTableInput | ViewCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type BaseUpsertWithoutTablesInput = {
    update: XOR<BaseUpdateWithoutTablesInput, BaseUncheckedUpdateWithoutTablesInput>
    create: XOR<BaseCreateWithoutTablesInput, BaseUncheckedCreateWithoutTablesInput>
    where?: BaseWhereInput
  }

  export type BaseUpdateToOneWithWhereWithoutTablesInput = {
    where?: BaseWhereInput
    data: XOR<BaseUpdateWithoutTablesInput, BaseUncheckedUpdateWithoutTablesInput>
  }

  export type BaseUpdateWithoutTablesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BaseUncheckedUpdateWithoutTablesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColumnUpsertWithWhereUniqueWithoutTableInput = {
    where: ColumnWhereUniqueInput
    update: XOR<ColumnUpdateWithoutTableInput, ColumnUncheckedUpdateWithoutTableInput>
    create: XOR<ColumnCreateWithoutTableInput, ColumnUncheckedCreateWithoutTableInput>
  }

  export type ColumnUpdateWithWhereUniqueWithoutTableInput = {
    where: ColumnWhereUniqueInput
    data: XOR<ColumnUpdateWithoutTableInput, ColumnUncheckedUpdateWithoutTableInput>
  }

  export type ColumnUpdateManyWithWhereWithoutTableInput = {
    where: ColumnScalarWhereInput
    data: XOR<ColumnUpdateManyMutationInput, ColumnUncheckedUpdateManyWithoutTableInput>
  }

  export type ColumnScalarWhereInput = {
    AND?: ColumnScalarWhereInput | ColumnScalarWhereInput[]
    OR?: ColumnScalarWhereInput[]
    NOT?: ColumnScalarWhereInput | ColumnScalarWhereInput[]
    id?: IntFilter<"Column"> | number
    name?: StringFilter<"Column"> | string
    type?: EnumColumnTypeFilter<"Column"> | $Enums.ColumnType
    position?: IntFilter<"Column"> | number
    createdAt?: DateTimeFilter<"Column"> | Date | string
    updatedAt?: DateTimeFilter<"Column"> | Date | string
    tableId?: IntFilter<"Column"> | number
  }

  export type RowUpsertWithWhereUniqueWithoutTableInput = {
    where: RowWhereUniqueInput
    update: XOR<RowUpdateWithoutTableInput, RowUncheckedUpdateWithoutTableInput>
    create: XOR<RowCreateWithoutTableInput, RowUncheckedCreateWithoutTableInput>
  }

  export type RowUpdateWithWhereUniqueWithoutTableInput = {
    where: RowWhereUniqueInput
    data: XOR<RowUpdateWithoutTableInput, RowUncheckedUpdateWithoutTableInput>
  }

  export type RowUpdateManyWithWhereWithoutTableInput = {
    where: RowScalarWhereInput
    data: XOR<RowUpdateManyMutationInput, RowUncheckedUpdateManyWithoutTableInput>
  }

  export type RowScalarWhereInput = {
    AND?: RowScalarWhereInput | RowScalarWhereInput[]
    OR?: RowScalarWhereInput[]
    NOT?: RowScalarWhereInput | RowScalarWhereInput[]
    id?: IntFilter<"Row"> | number
    createdAt?: DateTimeFilter<"Row"> | Date | string
    updatedAt?: DateTimeFilter<"Row"> | Date | string
    tableId?: IntFilter<"Row"> | number
  }

  export type ViewUpsertWithWhereUniqueWithoutTableInput = {
    where: ViewWhereUniqueInput
    update: XOR<ViewUpdateWithoutTableInput, ViewUncheckedUpdateWithoutTableInput>
    create: XOR<ViewCreateWithoutTableInput, ViewUncheckedCreateWithoutTableInput>
  }

  export type ViewUpdateWithWhereUniqueWithoutTableInput = {
    where: ViewWhereUniqueInput
    data: XOR<ViewUpdateWithoutTableInput, ViewUncheckedUpdateWithoutTableInput>
  }

  export type ViewUpdateManyWithWhereWithoutTableInput = {
    where: ViewScalarWhereInput
    data: XOR<ViewUpdateManyMutationInput, ViewUncheckedUpdateManyWithoutTableInput>
  }

  export type ViewScalarWhereInput = {
    AND?: ViewScalarWhereInput | ViewScalarWhereInput[]
    OR?: ViewScalarWhereInput[]
    NOT?: ViewScalarWhereInput | ViewScalarWhereInput[]
    id?: IntFilter<"View"> | number
    name?: StringFilter<"View"> | string
    type?: EnumViewTypeFilter<"View"> | $Enums.ViewType
    tableId?: IntFilter<"View"> | number
    isDefault?: BoolFilter<"View"> | boolean
    searchQuery?: StringNullableFilter<"View"> | string | null
    createdAt?: DateTimeFilter<"View"> | Date | string
    updatedAt?: DateTimeFilter<"View"> | Date | string
  }

  export type TableCreateWithoutColumnsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    base: BaseCreateNestedOneWithoutTablesInput
    rows?: RowCreateNestedManyWithoutTableInput
    views?: ViewCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutColumnsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    baseId: number
    rows?: RowUncheckedCreateNestedManyWithoutTableInput
    views?: ViewUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutColumnsInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutColumnsInput, TableUncheckedCreateWithoutColumnsInput>
  }

  export type CellCreateWithoutColumnInput = {
    value?: string | null
    row: RowCreateNestedOneWithoutCellsInput
  }

  export type CellUncheckedCreateWithoutColumnInput = {
    id?: number
    value?: string | null
    rowId: number
  }

  export type CellCreateOrConnectWithoutColumnInput = {
    where: CellWhereUniqueInput
    create: XOR<CellCreateWithoutColumnInput, CellUncheckedCreateWithoutColumnInput>
  }

  export type CellCreateManyColumnInputEnvelope = {
    data: CellCreateManyColumnInput | CellCreateManyColumnInput[]
    skipDuplicates?: boolean
  }

  export type ViewFilterCreateWithoutColumnInput = {
    operator: $Enums.ViewFilterOperator
    value?: string | null
    position?: number
    view: ViewCreateNestedOneWithoutFiltersInput
  }

  export type ViewFilterUncheckedCreateWithoutColumnInput = {
    id?: number
    viewId: number
    operator: $Enums.ViewFilterOperator
    value?: string | null
    position?: number
  }

  export type ViewFilterCreateOrConnectWithoutColumnInput = {
    where: ViewFilterWhereUniqueInput
    create: XOR<ViewFilterCreateWithoutColumnInput, ViewFilterUncheckedCreateWithoutColumnInput>
  }

  export type ViewFilterCreateManyColumnInputEnvelope = {
    data: ViewFilterCreateManyColumnInput | ViewFilterCreateManyColumnInput[]
    skipDuplicates?: boolean
  }

  export type ViewSortCreateWithoutColumnInput = {
    direction: $Enums.ViewSortDirection
    position?: number
    view: ViewCreateNestedOneWithoutSortsInput
  }

  export type ViewSortUncheckedCreateWithoutColumnInput = {
    id?: number
    viewId: number
    direction: $Enums.ViewSortDirection
    position?: number
  }

  export type ViewSortCreateOrConnectWithoutColumnInput = {
    where: ViewSortWhereUniqueInput
    create: XOR<ViewSortCreateWithoutColumnInput, ViewSortUncheckedCreateWithoutColumnInput>
  }

  export type ViewSortCreateManyColumnInputEnvelope = {
    data: ViewSortCreateManyColumnInput | ViewSortCreateManyColumnInput[]
    skipDuplicates?: boolean
  }

  export type ViewColumnVisibilityCreateWithoutColumnInput = {
    isVisible?: boolean
    view: ViewCreateNestedOneWithoutColumnVisibilitiesInput
  }

  export type ViewColumnVisibilityUncheckedCreateWithoutColumnInput = {
    id?: number
    viewId: number
    isVisible?: boolean
  }

  export type ViewColumnVisibilityCreateOrConnectWithoutColumnInput = {
    where: ViewColumnVisibilityWhereUniqueInput
    create: XOR<ViewColumnVisibilityCreateWithoutColumnInput, ViewColumnVisibilityUncheckedCreateWithoutColumnInput>
  }

  export type ViewColumnVisibilityCreateManyColumnInputEnvelope = {
    data: ViewColumnVisibilityCreateManyColumnInput | ViewColumnVisibilityCreateManyColumnInput[]
    skipDuplicates?: boolean
  }

  export type TableUpsertWithoutColumnsInput = {
    update: XOR<TableUpdateWithoutColumnsInput, TableUncheckedUpdateWithoutColumnsInput>
    create: XOR<TableCreateWithoutColumnsInput, TableUncheckedCreateWithoutColumnsInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutColumnsInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutColumnsInput, TableUncheckedUpdateWithoutColumnsInput>
  }

  export type TableUpdateWithoutColumnsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    base?: BaseUpdateOneRequiredWithoutTablesNestedInput
    rows?: RowUpdateManyWithoutTableNestedInput
    views?: ViewUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutColumnsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseId?: IntFieldUpdateOperationsInput | number
    rows?: RowUncheckedUpdateManyWithoutTableNestedInput
    views?: ViewUncheckedUpdateManyWithoutTableNestedInput
  }

  export type CellUpsertWithWhereUniqueWithoutColumnInput = {
    where: CellWhereUniqueInput
    update: XOR<CellUpdateWithoutColumnInput, CellUncheckedUpdateWithoutColumnInput>
    create: XOR<CellCreateWithoutColumnInput, CellUncheckedCreateWithoutColumnInput>
  }

  export type CellUpdateWithWhereUniqueWithoutColumnInput = {
    where: CellWhereUniqueInput
    data: XOR<CellUpdateWithoutColumnInput, CellUncheckedUpdateWithoutColumnInput>
  }

  export type CellUpdateManyWithWhereWithoutColumnInput = {
    where: CellScalarWhereInput
    data: XOR<CellUpdateManyMutationInput, CellUncheckedUpdateManyWithoutColumnInput>
  }

  export type CellScalarWhereInput = {
    AND?: CellScalarWhereInput | CellScalarWhereInput[]
    OR?: CellScalarWhereInput[]
    NOT?: CellScalarWhereInput | CellScalarWhereInput[]
    id?: IntFilter<"Cell"> | number
    value?: StringNullableFilter<"Cell"> | string | null
    rowId?: IntFilter<"Cell"> | number
    columnId?: IntFilter<"Cell"> | number
  }

  export type ViewFilterUpsertWithWhereUniqueWithoutColumnInput = {
    where: ViewFilterWhereUniqueInput
    update: XOR<ViewFilterUpdateWithoutColumnInput, ViewFilterUncheckedUpdateWithoutColumnInput>
    create: XOR<ViewFilterCreateWithoutColumnInput, ViewFilterUncheckedCreateWithoutColumnInput>
  }

  export type ViewFilterUpdateWithWhereUniqueWithoutColumnInput = {
    where: ViewFilterWhereUniqueInput
    data: XOR<ViewFilterUpdateWithoutColumnInput, ViewFilterUncheckedUpdateWithoutColumnInput>
  }

  export type ViewFilterUpdateManyWithWhereWithoutColumnInput = {
    where: ViewFilterScalarWhereInput
    data: XOR<ViewFilterUpdateManyMutationInput, ViewFilterUncheckedUpdateManyWithoutColumnInput>
  }

  export type ViewFilterScalarWhereInput = {
    AND?: ViewFilterScalarWhereInput | ViewFilterScalarWhereInput[]
    OR?: ViewFilterScalarWhereInput[]
    NOT?: ViewFilterScalarWhereInput | ViewFilterScalarWhereInput[]
    id?: IntFilter<"ViewFilter"> | number
    viewId?: IntFilter<"ViewFilter"> | number
    columnId?: IntFilter<"ViewFilter"> | number
    operator?: EnumViewFilterOperatorFilter<"ViewFilter"> | $Enums.ViewFilterOperator
    value?: StringNullableFilter<"ViewFilter"> | string | null
    position?: IntFilter<"ViewFilter"> | number
  }

  export type ViewSortUpsertWithWhereUniqueWithoutColumnInput = {
    where: ViewSortWhereUniqueInput
    update: XOR<ViewSortUpdateWithoutColumnInput, ViewSortUncheckedUpdateWithoutColumnInput>
    create: XOR<ViewSortCreateWithoutColumnInput, ViewSortUncheckedCreateWithoutColumnInput>
  }

  export type ViewSortUpdateWithWhereUniqueWithoutColumnInput = {
    where: ViewSortWhereUniqueInput
    data: XOR<ViewSortUpdateWithoutColumnInput, ViewSortUncheckedUpdateWithoutColumnInput>
  }

  export type ViewSortUpdateManyWithWhereWithoutColumnInput = {
    where: ViewSortScalarWhereInput
    data: XOR<ViewSortUpdateManyMutationInput, ViewSortUncheckedUpdateManyWithoutColumnInput>
  }

  export type ViewSortScalarWhereInput = {
    AND?: ViewSortScalarWhereInput | ViewSortScalarWhereInput[]
    OR?: ViewSortScalarWhereInput[]
    NOT?: ViewSortScalarWhereInput | ViewSortScalarWhereInput[]
    id?: IntFilter<"ViewSort"> | number
    viewId?: IntFilter<"ViewSort"> | number
    columnId?: IntFilter<"ViewSort"> | number
    direction?: EnumViewSortDirectionFilter<"ViewSort"> | $Enums.ViewSortDirection
    position?: IntFilter<"ViewSort"> | number
  }

  export type ViewColumnVisibilityUpsertWithWhereUniqueWithoutColumnInput = {
    where: ViewColumnVisibilityWhereUniqueInput
    update: XOR<ViewColumnVisibilityUpdateWithoutColumnInput, ViewColumnVisibilityUncheckedUpdateWithoutColumnInput>
    create: XOR<ViewColumnVisibilityCreateWithoutColumnInput, ViewColumnVisibilityUncheckedCreateWithoutColumnInput>
  }

  export type ViewColumnVisibilityUpdateWithWhereUniqueWithoutColumnInput = {
    where: ViewColumnVisibilityWhereUniqueInput
    data: XOR<ViewColumnVisibilityUpdateWithoutColumnInput, ViewColumnVisibilityUncheckedUpdateWithoutColumnInput>
  }

  export type ViewColumnVisibilityUpdateManyWithWhereWithoutColumnInput = {
    where: ViewColumnVisibilityScalarWhereInput
    data: XOR<ViewColumnVisibilityUpdateManyMutationInput, ViewColumnVisibilityUncheckedUpdateManyWithoutColumnInput>
  }

  export type ViewColumnVisibilityScalarWhereInput = {
    AND?: ViewColumnVisibilityScalarWhereInput | ViewColumnVisibilityScalarWhereInput[]
    OR?: ViewColumnVisibilityScalarWhereInput[]
    NOT?: ViewColumnVisibilityScalarWhereInput | ViewColumnVisibilityScalarWhereInput[]
    id?: IntFilter<"ViewColumnVisibility"> | number
    viewId?: IntFilter<"ViewColumnVisibility"> | number
    columnId?: IntFilter<"ViewColumnVisibility"> | number
    isVisible?: BoolFilter<"ViewColumnVisibility"> | boolean
  }

  export type TableCreateWithoutViewsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    base: BaseCreateNestedOneWithoutTablesInput
    columns?: ColumnCreateNestedManyWithoutTableInput
    rows?: RowCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutViewsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    baseId: number
    columns?: ColumnUncheckedCreateNestedManyWithoutTableInput
    rows?: RowUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutViewsInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutViewsInput, TableUncheckedCreateWithoutViewsInput>
  }

  export type ViewFilterCreateWithoutViewInput = {
    operator: $Enums.ViewFilterOperator
    value?: string | null
    position?: number
    column: ColumnCreateNestedOneWithoutViewFiltersInput
  }

  export type ViewFilterUncheckedCreateWithoutViewInput = {
    id?: number
    columnId: number
    operator: $Enums.ViewFilterOperator
    value?: string | null
    position?: number
  }

  export type ViewFilterCreateOrConnectWithoutViewInput = {
    where: ViewFilterWhereUniqueInput
    create: XOR<ViewFilterCreateWithoutViewInput, ViewFilterUncheckedCreateWithoutViewInput>
  }

  export type ViewFilterCreateManyViewInputEnvelope = {
    data: ViewFilterCreateManyViewInput | ViewFilterCreateManyViewInput[]
    skipDuplicates?: boolean
  }

  export type ViewSortCreateWithoutViewInput = {
    direction: $Enums.ViewSortDirection
    position?: number
    column: ColumnCreateNestedOneWithoutViewSortsInput
  }

  export type ViewSortUncheckedCreateWithoutViewInput = {
    id?: number
    columnId: number
    direction: $Enums.ViewSortDirection
    position?: number
  }

  export type ViewSortCreateOrConnectWithoutViewInput = {
    where: ViewSortWhereUniqueInput
    create: XOR<ViewSortCreateWithoutViewInput, ViewSortUncheckedCreateWithoutViewInput>
  }

  export type ViewSortCreateManyViewInputEnvelope = {
    data: ViewSortCreateManyViewInput | ViewSortCreateManyViewInput[]
    skipDuplicates?: boolean
  }

  export type ViewColumnVisibilityCreateWithoutViewInput = {
    isVisible?: boolean
    column: ColumnCreateNestedOneWithoutViewColumnVisibilitiesInput
  }

  export type ViewColumnVisibilityUncheckedCreateWithoutViewInput = {
    id?: number
    columnId: number
    isVisible?: boolean
  }

  export type ViewColumnVisibilityCreateOrConnectWithoutViewInput = {
    where: ViewColumnVisibilityWhereUniqueInput
    create: XOR<ViewColumnVisibilityCreateWithoutViewInput, ViewColumnVisibilityUncheckedCreateWithoutViewInput>
  }

  export type ViewColumnVisibilityCreateManyViewInputEnvelope = {
    data: ViewColumnVisibilityCreateManyViewInput | ViewColumnVisibilityCreateManyViewInput[]
    skipDuplicates?: boolean
  }

  export type TableUpsertWithoutViewsInput = {
    update: XOR<TableUpdateWithoutViewsInput, TableUncheckedUpdateWithoutViewsInput>
    create: XOR<TableCreateWithoutViewsInput, TableUncheckedCreateWithoutViewsInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutViewsInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutViewsInput, TableUncheckedUpdateWithoutViewsInput>
  }

  export type TableUpdateWithoutViewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    base?: BaseUpdateOneRequiredWithoutTablesNestedInput
    columns?: ColumnUpdateManyWithoutTableNestedInput
    rows?: RowUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutViewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseId?: IntFieldUpdateOperationsInput | number
    columns?: ColumnUncheckedUpdateManyWithoutTableNestedInput
    rows?: RowUncheckedUpdateManyWithoutTableNestedInput
  }

  export type ViewFilterUpsertWithWhereUniqueWithoutViewInput = {
    where: ViewFilterWhereUniqueInput
    update: XOR<ViewFilterUpdateWithoutViewInput, ViewFilterUncheckedUpdateWithoutViewInput>
    create: XOR<ViewFilterCreateWithoutViewInput, ViewFilterUncheckedCreateWithoutViewInput>
  }

  export type ViewFilterUpdateWithWhereUniqueWithoutViewInput = {
    where: ViewFilterWhereUniqueInput
    data: XOR<ViewFilterUpdateWithoutViewInput, ViewFilterUncheckedUpdateWithoutViewInput>
  }

  export type ViewFilterUpdateManyWithWhereWithoutViewInput = {
    where: ViewFilterScalarWhereInput
    data: XOR<ViewFilterUpdateManyMutationInput, ViewFilterUncheckedUpdateManyWithoutViewInput>
  }

  export type ViewSortUpsertWithWhereUniqueWithoutViewInput = {
    where: ViewSortWhereUniqueInput
    update: XOR<ViewSortUpdateWithoutViewInput, ViewSortUncheckedUpdateWithoutViewInput>
    create: XOR<ViewSortCreateWithoutViewInput, ViewSortUncheckedCreateWithoutViewInput>
  }

  export type ViewSortUpdateWithWhereUniqueWithoutViewInput = {
    where: ViewSortWhereUniqueInput
    data: XOR<ViewSortUpdateWithoutViewInput, ViewSortUncheckedUpdateWithoutViewInput>
  }

  export type ViewSortUpdateManyWithWhereWithoutViewInput = {
    where: ViewSortScalarWhereInput
    data: XOR<ViewSortUpdateManyMutationInput, ViewSortUncheckedUpdateManyWithoutViewInput>
  }

  export type ViewColumnVisibilityUpsertWithWhereUniqueWithoutViewInput = {
    where: ViewColumnVisibilityWhereUniqueInput
    update: XOR<ViewColumnVisibilityUpdateWithoutViewInput, ViewColumnVisibilityUncheckedUpdateWithoutViewInput>
    create: XOR<ViewColumnVisibilityCreateWithoutViewInput, ViewColumnVisibilityUncheckedCreateWithoutViewInput>
  }

  export type ViewColumnVisibilityUpdateWithWhereUniqueWithoutViewInput = {
    where: ViewColumnVisibilityWhereUniqueInput
    data: XOR<ViewColumnVisibilityUpdateWithoutViewInput, ViewColumnVisibilityUncheckedUpdateWithoutViewInput>
  }

  export type ViewColumnVisibilityUpdateManyWithWhereWithoutViewInput = {
    where: ViewColumnVisibilityScalarWhereInput
    data: XOR<ViewColumnVisibilityUpdateManyMutationInput, ViewColumnVisibilityUncheckedUpdateManyWithoutViewInput>
  }

  export type ViewCreateWithoutFiltersInput = {
    name: string
    type?: $Enums.ViewType
    isDefault?: boolean
    searchQuery?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutViewsInput
    sorts?: ViewSortCreateNestedManyWithoutViewInput
    columnVisibilities?: ViewColumnVisibilityCreateNestedManyWithoutViewInput
  }

  export type ViewUncheckedCreateWithoutFiltersInput = {
    id?: number
    name: string
    type?: $Enums.ViewType
    tableId: number
    isDefault?: boolean
    searchQuery?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sorts?: ViewSortUncheckedCreateNestedManyWithoutViewInput
    columnVisibilities?: ViewColumnVisibilityUncheckedCreateNestedManyWithoutViewInput
  }

  export type ViewCreateOrConnectWithoutFiltersInput = {
    where: ViewWhereUniqueInput
    create: XOR<ViewCreateWithoutFiltersInput, ViewUncheckedCreateWithoutFiltersInput>
  }

  export type ColumnCreateWithoutViewFiltersInput = {
    name: string
    type: $Enums.ColumnType
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutColumnsInput
    cells?: CellCreateNestedManyWithoutColumnInput
    viewSorts?: ViewSortCreateNestedManyWithoutColumnInput
    viewColumnVisibilities?: ViewColumnVisibilityCreateNestedManyWithoutColumnInput
  }

  export type ColumnUncheckedCreateWithoutViewFiltersInput = {
    id?: number
    name: string
    type: $Enums.ColumnType
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: number
    cells?: CellUncheckedCreateNestedManyWithoutColumnInput
    viewSorts?: ViewSortUncheckedCreateNestedManyWithoutColumnInput
    viewColumnVisibilities?: ViewColumnVisibilityUncheckedCreateNestedManyWithoutColumnInput
  }

  export type ColumnCreateOrConnectWithoutViewFiltersInput = {
    where: ColumnWhereUniqueInput
    create: XOR<ColumnCreateWithoutViewFiltersInput, ColumnUncheckedCreateWithoutViewFiltersInput>
  }

  export type ViewUpsertWithoutFiltersInput = {
    update: XOR<ViewUpdateWithoutFiltersInput, ViewUncheckedUpdateWithoutFiltersInput>
    create: XOR<ViewCreateWithoutFiltersInput, ViewUncheckedCreateWithoutFiltersInput>
    where?: ViewWhereInput
  }

  export type ViewUpdateToOneWithWhereWithoutFiltersInput = {
    where?: ViewWhereInput
    data: XOR<ViewUpdateWithoutFiltersInput, ViewUncheckedUpdateWithoutFiltersInput>
  }

  export type ViewUpdateWithoutFiltersInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumViewTypeFieldUpdateOperationsInput | $Enums.ViewType
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    searchQuery?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutViewsNestedInput
    sorts?: ViewSortUpdateManyWithoutViewNestedInput
    columnVisibilities?: ViewColumnVisibilityUpdateManyWithoutViewNestedInput
  }

  export type ViewUncheckedUpdateWithoutFiltersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumViewTypeFieldUpdateOperationsInput | $Enums.ViewType
    tableId?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    searchQuery?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sorts?: ViewSortUncheckedUpdateManyWithoutViewNestedInput
    columnVisibilities?: ViewColumnVisibilityUncheckedUpdateManyWithoutViewNestedInput
  }

  export type ColumnUpsertWithoutViewFiltersInput = {
    update: XOR<ColumnUpdateWithoutViewFiltersInput, ColumnUncheckedUpdateWithoutViewFiltersInput>
    create: XOR<ColumnCreateWithoutViewFiltersInput, ColumnUncheckedCreateWithoutViewFiltersInput>
    where?: ColumnWhereInput
  }

  export type ColumnUpdateToOneWithWhereWithoutViewFiltersInput = {
    where?: ColumnWhereInput
    data: XOR<ColumnUpdateWithoutViewFiltersInput, ColumnUncheckedUpdateWithoutViewFiltersInput>
  }

  export type ColumnUpdateWithoutViewFiltersInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumColumnTypeFieldUpdateOperationsInput | $Enums.ColumnType
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutColumnsNestedInput
    cells?: CellUpdateManyWithoutColumnNestedInput
    viewSorts?: ViewSortUpdateManyWithoutColumnNestedInput
    viewColumnVisibilities?: ViewColumnVisibilityUpdateManyWithoutColumnNestedInput
  }

  export type ColumnUncheckedUpdateWithoutViewFiltersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumColumnTypeFieldUpdateOperationsInput | $Enums.ColumnType
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: IntFieldUpdateOperationsInput | number
    cells?: CellUncheckedUpdateManyWithoutColumnNestedInput
    viewSorts?: ViewSortUncheckedUpdateManyWithoutColumnNestedInput
    viewColumnVisibilities?: ViewColumnVisibilityUncheckedUpdateManyWithoutColumnNestedInput
  }

  export type ViewCreateWithoutSortsInput = {
    name: string
    type?: $Enums.ViewType
    isDefault?: boolean
    searchQuery?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutViewsInput
    filters?: ViewFilterCreateNestedManyWithoutViewInput
    columnVisibilities?: ViewColumnVisibilityCreateNestedManyWithoutViewInput
  }

  export type ViewUncheckedCreateWithoutSortsInput = {
    id?: number
    name: string
    type?: $Enums.ViewType
    tableId: number
    isDefault?: boolean
    searchQuery?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    filters?: ViewFilterUncheckedCreateNestedManyWithoutViewInput
    columnVisibilities?: ViewColumnVisibilityUncheckedCreateNestedManyWithoutViewInput
  }

  export type ViewCreateOrConnectWithoutSortsInput = {
    where: ViewWhereUniqueInput
    create: XOR<ViewCreateWithoutSortsInput, ViewUncheckedCreateWithoutSortsInput>
  }

  export type ColumnCreateWithoutViewSortsInput = {
    name: string
    type: $Enums.ColumnType
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutColumnsInput
    cells?: CellCreateNestedManyWithoutColumnInput
    viewFilters?: ViewFilterCreateNestedManyWithoutColumnInput
    viewColumnVisibilities?: ViewColumnVisibilityCreateNestedManyWithoutColumnInput
  }

  export type ColumnUncheckedCreateWithoutViewSortsInput = {
    id?: number
    name: string
    type: $Enums.ColumnType
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: number
    cells?: CellUncheckedCreateNestedManyWithoutColumnInput
    viewFilters?: ViewFilterUncheckedCreateNestedManyWithoutColumnInput
    viewColumnVisibilities?: ViewColumnVisibilityUncheckedCreateNestedManyWithoutColumnInput
  }

  export type ColumnCreateOrConnectWithoutViewSortsInput = {
    where: ColumnWhereUniqueInput
    create: XOR<ColumnCreateWithoutViewSortsInput, ColumnUncheckedCreateWithoutViewSortsInput>
  }

  export type ViewUpsertWithoutSortsInput = {
    update: XOR<ViewUpdateWithoutSortsInput, ViewUncheckedUpdateWithoutSortsInput>
    create: XOR<ViewCreateWithoutSortsInput, ViewUncheckedCreateWithoutSortsInput>
    where?: ViewWhereInput
  }

  export type ViewUpdateToOneWithWhereWithoutSortsInput = {
    where?: ViewWhereInput
    data: XOR<ViewUpdateWithoutSortsInput, ViewUncheckedUpdateWithoutSortsInput>
  }

  export type ViewUpdateWithoutSortsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumViewTypeFieldUpdateOperationsInput | $Enums.ViewType
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    searchQuery?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutViewsNestedInput
    filters?: ViewFilterUpdateManyWithoutViewNestedInput
    columnVisibilities?: ViewColumnVisibilityUpdateManyWithoutViewNestedInput
  }

  export type ViewUncheckedUpdateWithoutSortsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumViewTypeFieldUpdateOperationsInput | $Enums.ViewType
    tableId?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    searchQuery?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filters?: ViewFilterUncheckedUpdateManyWithoutViewNestedInput
    columnVisibilities?: ViewColumnVisibilityUncheckedUpdateManyWithoutViewNestedInput
  }

  export type ColumnUpsertWithoutViewSortsInput = {
    update: XOR<ColumnUpdateWithoutViewSortsInput, ColumnUncheckedUpdateWithoutViewSortsInput>
    create: XOR<ColumnCreateWithoutViewSortsInput, ColumnUncheckedCreateWithoutViewSortsInput>
    where?: ColumnWhereInput
  }

  export type ColumnUpdateToOneWithWhereWithoutViewSortsInput = {
    where?: ColumnWhereInput
    data: XOR<ColumnUpdateWithoutViewSortsInput, ColumnUncheckedUpdateWithoutViewSortsInput>
  }

  export type ColumnUpdateWithoutViewSortsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumColumnTypeFieldUpdateOperationsInput | $Enums.ColumnType
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutColumnsNestedInput
    cells?: CellUpdateManyWithoutColumnNestedInput
    viewFilters?: ViewFilterUpdateManyWithoutColumnNestedInput
    viewColumnVisibilities?: ViewColumnVisibilityUpdateManyWithoutColumnNestedInput
  }

  export type ColumnUncheckedUpdateWithoutViewSortsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumColumnTypeFieldUpdateOperationsInput | $Enums.ColumnType
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: IntFieldUpdateOperationsInput | number
    cells?: CellUncheckedUpdateManyWithoutColumnNestedInput
    viewFilters?: ViewFilterUncheckedUpdateManyWithoutColumnNestedInput
    viewColumnVisibilities?: ViewColumnVisibilityUncheckedUpdateManyWithoutColumnNestedInput
  }

  export type ViewCreateWithoutColumnVisibilitiesInput = {
    name: string
    type?: $Enums.ViewType
    isDefault?: boolean
    searchQuery?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutViewsInput
    filters?: ViewFilterCreateNestedManyWithoutViewInput
    sorts?: ViewSortCreateNestedManyWithoutViewInput
  }

  export type ViewUncheckedCreateWithoutColumnVisibilitiesInput = {
    id?: number
    name: string
    type?: $Enums.ViewType
    tableId: number
    isDefault?: boolean
    searchQuery?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    filters?: ViewFilterUncheckedCreateNestedManyWithoutViewInput
    sorts?: ViewSortUncheckedCreateNestedManyWithoutViewInput
  }

  export type ViewCreateOrConnectWithoutColumnVisibilitiesInput = {
    where: ViewWhereUniqueInput
    create: XOR<ViewCreateWithoutColumnVisibilitiesInput, ViewUncheckedCreateWithoutColumnVisibilitiesInput>
  }

  export type ColumnCreateWithoutViewColumnVisibilitiesInput = {
    name: string
    type: $Enums.ColumnType
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutColumnsInput
    cells?: CellCreateNestedManyWithoutColumnInput
    viewFilters?: ViewFilterCreateNestedManyWithoutColumnInput
    viewSorts?: ViewSortCreateNestedManyWithoutColumnInput
  }

  export type ColumnUncheckedCreateWithoutViewColumnVisibilitiesInput = {
    id?: number
    name: string
    type: $Enums.ColumnType
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: number
    cells?: CellUncheckedCreateNestedManyWithoutColumnInput
    viewFilters?: ViewFilterUncheckedCreateNestedManyWithoutColumnInput
    viewSorts?: ViewSortUncheckedCreateNestedManyWithoutColumnInput
  }

  export type ColumnCreateOrConnectWithoutViewColumnVisibilitiesInput = {
    where: ColumnWhereUniqueInput
    create: XOR<ColumnCreateWithoutViewColumnVisibilitiesInput, ColumnUncheckedCreateWithoutViewColumnVisibilitiesInput>
  }

  export type ViewUpsertWithoutColumnVisibilitiesInput = {
    update: XOR<ViewUpdateWithoutColumnVisibilitiesInput, ViewUncheckedUpdateWithoutColumnVisibilitiesInput>
    create: XOR<ViewCreateWithoutColumnVisibilitiesInput, ViewUncheckedCreateWithoutColumnVisibilitiesInput>
    where?: ViewWhereInput
  }

  export type ViewUpdateToOneWithWhereWithoutColumnVisibilitiesInput = {
    where?: ViewWhereInput
    data: XOR<ViewUpdateWithoutColumnVisibilitiesInput, ViewUncheckedUpdateWithoutColumnVisibilitiesInput>
  }

  export type ViewUpdateWithoutColumnVisibilitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumViewTypeFieldUpdateOperationsInput | $Enums.ViewType
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    searchQuery?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutViewsNestedInput
    filters?: ViewFilterUpdateManyWithoutViewNestedInput
    sorts?: ViewSortUpdateManyWithoutViewNestedInput
  }

  export type ViewUncheckedUpdateWithoutColumnVisibilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumViewTypeFieldUpdateOperationsInput | $Enums.ViewType
    tableId?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    searchQuery?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filters?: ViewFilterUncheckedUpdateManyWithoutViewNestedInput
    sorts?: ViewSortUncheckedUpdateManyWithoutViewNestedInput
  }

  export type ColumnUpsertWithoutViewColumnVisibilitiesInput = {
    update: XOR<ColumnUpdateWithoutViewColumnVisibilitiesInput, ColumnUncheckedUpdateWithoutViewColumnVisibilitiesInput>
    create: XOR<ColumnCreateWithoutViewColumnVisibilitiesInput, ColumnUncheckedCreateWithoutViewColumnVisibilitiesInput>
    where?: ColumnWhereInput
  }

  export type ColumnUpdateToOneWithWhereWithoutViewColumnVisibilitiesInput = {
    where?: ColumnWhereInput
    data: XOR<ColumnUpdateWithoutViewColumnVisibilitiesInput, ColumnUncheckedUpdateWithoutViewColumnVisibilitiesInput>
  }

  export type ColumnUpdateWithoutViewColumnVisibilitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumColumnTypeFieldUpdateOperationsInput | $Enums.ColumnType
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutColumnsNestedInput
    cells?: CellUpdateManyWithoutColumnNestedInput
    viewFilters?: ViewFilterUpdateManyWithoutColumnNestedInput
    viewSorts?: ViewSortUpdateManyWithoutColumnNestedInput
  }

  export type ColumnUncheckedUpdateWithoutViewColumnVisibilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumColumnTypeFieldUpdateOperationsInput | $Enums.ColumnType
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: IntFieldUpdateOperationsInput | number
    cells?: CellUncheckedUpdateManyWithoutColumnNestedInput
    viewFilters?: ViewFilterUncheckedUpdateManyWithoutColumnNestedInput
    viewSorts?: ViewSortUncheckedUpdateManyWithoutColumnNestedInput
  }

  export type TableCreateWithoutRowsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    base: BaseCreateNestedOneWithoutTablesInput
    columns?: ColumnCreateNestedManyWithoutTableInput
    views?: ViewCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutRowsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    baseId: number
    columns?: ColumnUncheckedCreateNestedManyWithoutTableInput
    views?: ViewUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutRowsInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutRowsInput, TableUncheckedCreateWithoutRowsInput>
  }

  export type CellCreateWithoutRowInput = {
    value?: string | null
    column: ColumnCreateNestedOneWithoutCellsInput
  }

  export type CellUncheckedCreateWithoutRowInput = {
    id?: number
    value?: string | null
    columnId: number
  }

  export type CellCreateOrConnectWithoutRowInput = {
    where: CellWhereUniqueInput
    create: XOR<CellCreateWithoutRowInput, CellUncheckedCreateWithoutRowInput>
  }

  export type CellCreateManyRowInputEnvelope = {
    data: CellCreateManyRowInput | CellCreateManyRowInput[]
    skipDuplicates?: boolean
  }

  export type TableUpsertWithoutRowsInput = {
    update: XOR<TableUpdateWithoutRowsInput, TableUncheckedUpdateWithoutRowsInput>
    create: XOR<TableCreateWithoutRowsInput, TableUncheckedCreateWithoutRowsInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutRowsInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutRowsInput, TableUncheckedUpdateWithoutRowsInput>
  }

  export type TableUpdateWithoutRowsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    base?: BaseUpdateOneRequiredWithoutTablesNestedInput
    columns?: ColumnUpdateManyWithoutTableNestedInput
    views?: ViewUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutRowsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseId?: IntFieldUpdateOperationsInput | number
    columns?: ColumnUncheckedUpdateManyWithoutTableNestedInput
    views?: ViewUncheckedUpdateManyWithoutTableNestedInput
  }

  export type CellUpsertWithWhereUniqueWithoutRowInput = {
    where: CellWhereUniqueInput
    update: XOR<CellUpdateWithoutRowInput, CellUncheckedUpdateWithoutRowInput>
    create: XOR<CellCreateWithoutRowInput, CellUncheckedCreateWithoutRowInput>
  }

  export type CellUpdateWithWhereUniqueWithoutRowInput = {
    where: CellWhereUniqueInput
    data: XOR<CellUpdateWithoutRowInput, CellUncheckedUpdateWithoutRowInput>
  }

  export type CellUpdateManyWithWhereWithoutRowInput = {
    where: CellScalarWhereInput
    data: XOR<CellUpdateManyMutationInput, CellUncheckedUpdateManyWithoutRowInput>
  }

  export type RowCreateWithoutCellsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutRowsInput
  }

  export type RowUncheckedCreateWithoutCellsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: number
  }

  export type RowCreateOrConnectWithoutCellsInput = {
    where: RowWhereUniqueInput
    create: XOR<RowCreateWithoutCellsInput, RowUncheckedCreateWithoutCellsInput>
  }

  export type ColumnCreateWithoutCellsInput = {
    name: string
    type: $Enums.ColumnType
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutColumnsInput
    viewFilters?: ViewFilterCreateNestedManyWithoutColumnInput
    viewSorts?: ViewSortCreateNestedManyWithoutColumnInput
    viewColumnVisibilities?: ViewColumnVisibilityCreateNestedManyWithoutColumnInput
  }

  export type ColumnUncheckedCreateWithoutCellsInput = {
    id?: number
    name: string
    type: $Enums.ColumnType
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: number
    viewFilters?: ViewFilterUncheckedCreateNestedManyWithoutColumnInput
    viewSorts?: ViewSortUncheckedCreateNestedManyWithoutColumnInput
    viewColumnVisibilities?: ViewColumnVisibilityUncheckedCreateNestedManyWithoutColumnInput
  }

  export type ColumnCreateOrConnectWithoutCellsInput = {
    where: ColumnWhereUniqueInput
    create: XOR<ColumnCreateWithoutCellsInput, ColumnUncheckedCreateWithoutCellsInput>
  }

  export type RowUpsertWithoutCellsInput = {
    update: XOR<RowUpdateWithoutCellsInput, RowUncheckedUpdateWithoutCellsInput>
    create: XOR<RowCreateWithoutCellsInput, RowUncheckedCreateWithoutCellsInput>
    where?: RowWhereInput
  }

  export type RowUpdateToOneWithWhereWithoutCellsInput = {
    where?: RowWhereInput
    data: XOR<RowUpdateWithoutCellsInput, RowUncheckedUpdateWithoutCellsInput>
  }

  export type RowUpdateWithoutCellsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutRowsNestedInput
  }

  export type RowUncheckedUpdateWithoutCellsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: IntFieldUpdateOperationsInput | number
  }

  export type ColumnUpsertWithoutCellsInput = {
    update: XOR<ColumnUpdateWithoutCellsInput, ColumnUncheckedUpdateWithoutCellsInput>
    create: XOR<ColumnCreateWithoutCellsInput, ColumnUncheckedCreateWithoutCellsInput>
    where?: ColumnWhereInput
  }

  export type ColumnUpdateToOneWithWhereWithoutCellsInput = {
    where?: ColumnWhereInput
    data: XOR<ColumnUpdateWithoutCellsInput, ColumnUncheckedUpdateWithoutCellsInput>
  }

  export type ColumnUpdateWithoutCellsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumColumnTypeFieldUpdateOperationsInput | $Enums.ColumnType
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutColumnsNestedInput
    viewFilters?: ViewFilterUpdateManyWithoutColumnNestedInput
    viewSorts?: ViewSortUpdateManyWithoutColumnNestedInput
    viewColumnVisibilities?: ViewColumnVisibilityUpdateManyWithoutColumnNestedInput
  }

  export type ColumnUncheckedUpdateWithoutCellsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumColumnTypeFieldUpdateOperationsInput | $Enums.ColumnType
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: IntFieldUpdateOperationsInput | number
    viewFilters?: ViewFilterUncheckedUpdateManyWithoutColumnNestedInput
    viewSorts?: ViewSortUncheckedUpdateManyWithoutColumnNestedInput
    viewColumnVisibilities?: ViewColumnVisibilityUncheckedUpdateManyWithoutColumnNestedInput
  }

  export type TableCreateManyBaseInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TableUpdateWithoutBaseInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columns?: ColumnUpdateManyWithoutTableNestedInput
    rows?: RowUpdateManyWithoutTableNestedInput
    views?: ViewUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutBaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    columns?: ColumnUncheckedUpdateManyWithoutTableNestedInput
    rows?: RowUncheckedUpdateManyWithoutTableNestedInput
    views?: ViewUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateManyWithoutBaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ColumnCreateManyTableInput = {
    id?: number
    name: string
    type: $Enums.ColumnType
    position: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RowCreateManyTableInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ViewCreateManyTableInput = {
    id?: number
    name: string
    type?: $Enums.ViewType
    isDefault?: boolean
    searchQuery?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ColumnUpdateWithoutTableInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumColumnTypeFieldUpdateOperationsInput | $Enums.ColumnType
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cells?: CellUpdateManyWithoutColumnNestedInput
    viewFilters?: ViewFilterUpdateManyWithoutColumnNestedInput
    viewSorts?: ViewSortUpdateManyWithoutColumnNestedInput
    viewColumnVisibilities?: ViewColumnVisibilityUpdateManyWithoutColumnNestedInput
  }

  export type ColumnUncheckedUpdateWithoutTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumColumnTypeFieldUpdateOperationsInput | $Enums.ColumnType
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cells?: CellUncheckedUpdateManyWithoutColumnNestedInput
    viewFilters?: ViewFilterUncheckedUpdateManyWithoutColumnNestedInput
    viewSorts?: ViewSortUncheckedUpdateManyWithoutColumnNestedInput
    viewColumnVisibilities?: ViewColumnVisibilityUncheckedUpdateManyWithoutColumnNestedInput
  }

  export type ColumnUncheckedUpdateManyWithoutTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumColumnTypeFieldUpdateOperationsInput | $Enums.ColumnType
    position?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RowUpdateWithoutTableInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cells?: CellUpdateManyWithoutRowNestedInput
  }

  export type RowUncheckedUpdateWithoutTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cells?: CellUncheckedUpdateManyWithoutRowNestedInput
  }

  export type RowUncheckedUpdateManyWithoutTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewUpdateWithoutTableInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumViewTypeFieldUpdateOperationsInput | $Enums.ViewType
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    searchQuery?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filters?: ViewFilterUpdateManyWithoutViewNestedInput
    sorts?: ViewSortUpdateManyWithoutViewNestedInput
    columnVisibilities?: ViewColumnVisibilityUpdateManyWithoutViewNestedInput
  }

  export type ViewUncheckedUpdateWithoutTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumViewTypeFieldUpdateOperationsInput | $Enums.ViewType
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    searchQuery?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filters?: ViewFilterUncheckedUpdateManyWithoutViewNestedInput
    sorts?: ViewSortUncheckedUpdateManyWithoutViewNestedInput
    columnVisibilities?: ViewColumnVisibilityUncheckedUpdateManyWithoutViewNestedInput
  }

  export type ViewUncheckedUpdateManyWithoutTableInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumViewTypeFieldUpdateOperationsInput | $Enums.ViewType
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    searchQuery?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CellCreateManyColumnInput = {
    id?: number
    value?: string | null
    rowId: number
  }

  export type ViewFilterCreateManyColumnInput = {
    id?: number
    viewId: number
    operator: $Enums.ViewFilterOperator
    value?: string | null
    position?: number
  }

  export type ViewSortCreateManyColumnInput = {
    id?: number
    viewId: number
    direction: $Enums.ViewSortDirection
    position?: number
  }

  export type ViewColumnVisibilityCreateManyColumnInput = {
    id?: number
    viewId: number
    isVisible?: boolean
  }

  export type CellUpdateWithoutColumnInput = {
    value?: NullableStringFieldUpdateOperationsInput | string | null
    row?: RowUpdateOneRequiredWithoutCellsNestedInput
  }

  export type CellUncheckedUpdateWithoutColumnInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: NullableStringFieldUpdateOperationsInput | string | null
    rowId?: IntFieldUpdateOperationsInput | number
  }

  export type CellUncheckedUpdateManyWithoutColumnInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: NullableStringFieldUpdateOperationsInput | string | null
    rowId?: IntFieldUpdateOperationsInput | number
  }

  export type ViewFilterUpdateWithoutColumnInput = {
    operator?: EnumViewFilterOperatorFieldUpdateOperationsInput | $Enums.ViewFilterOperator
    value?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    view?: ViewUpdateOneRequiredWithoutFiltersNestedInput
  }

  export type ViewFilterUncheckedUpdateWithoutColumnInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewId?: IntFieldUpdateOperationsInput | number
    operator?: EnumViewFilterOperatorFieldUpdateOperationsInput | $Enums.ViewFilterOperator
    value?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ViewFilterUncheckedUpdateManyWithoutColumnInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewId?: IntFieldUpdateOperationsInput | number
    operator?: EnumViewFilterOperatorFieldUpdateOperationsInput | $Enums.ViewFilterOperator
    value?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ViewSortUpdateWithoutColumnInput = {
    direction?: EnumViewSortDirectionFieldUpdateOperationsInput | $Enums.ViewSortDirection
    position?: IntFieldUpdateOperationsInput | number
    view?: ViewUpdateOneRequiredWithoutSortsNestedInput
  }

  export type ViewSortUncheckedUpdateWithoutColumnInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewId?: IntFieldUpdateOperationsInput | number
    direction?: EnumViewSortDirectionFieldUpdateOperationsInput | $Enums.ViewSortDirection
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ViewSortUncheckedUpdateManyWithoutColumnInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewId?: IntFieldUpdateOperationsInput | number
    direction?: EnumViewSortDirectionFieldUpdateOperationsInput | $Enums.ViewSortDirection
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ViewColumnVisibilityUpdateWithoutColumnInput = {
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    view?: ViewUpdateOneRequiredWithoutColumnVisibilitiesNestedInput
  }

  export type ViewColumnVisibilityUncheckedUpdateWithoutColumnInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewId?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ViewColumnVisibilityUncheckedUpdateManyWithoutColumnInput = {
    id?: IntFieldUpdateOperationsInput | number
    viewId?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ViewFilterCreateManyViewInput = {
    id?: number
    columnId: number
    operator: $Enums.ViewFilterOperator
    value?: string | null
    position?: number
  }

  export type ViewSortCreateManyViewInput = {
    id?: number
    columnId: number
    direction: $Enums.ViewSortDirection
    position?: number
  }

  export type ViewColumnVisibilityCreateManyViewInput = {
    id?: number
    columnId: number
    isVisible?: boolean
  }

  export type ViewFilterUpdateWithoutViewInput = {
    operator?: EnumViewFilterOperatorFieldUpdateOperationsInput | $Enums.ViewFilterOperator
    value?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
    column?: ColumnUpdateOneRequiredWithoutViewFiltersNestedInput
  }

  export type ViewFilterUncheckedUpdateWithoutViewInput = {
    id?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    operator?: EnumViewFilterOperatorFieldUpdateOperationsInput | $Enums.ViewFilterOperator
    value?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ViewFilterUncheckedUpdateManyWithoutViewInput = {
    id?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    operator?: EnumViewFilterOperatorFieldUpdateOperationsInput | $Enums.ViewFilterOperator
    value?: NullableStringFieldUpdateOperationsInput | string | null
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ViewSortUpdateWithoutViewInput = {
    direction?: EnumViewSortDirectionFieldUpdateOperationsInput | $Enums.ViewSortDirection
    position?: IntFieldUpdateOperationsInput | number
    column?: ColumnUpdateOneRequiredWithoutViewSortsNestedInput
  }

  export type ViewSortUncheckedUpdateWithoutViewInput = {
    id?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    direction?: EnumViewSortDirectionFieldUpdateOperationsInput | $Enums.ViewSortDirection
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ViewSortUncheckedUpdateManyWithoutViewInput = {
    id?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    direction?: EnumViewSortDirectionFieldUpdateOperationsInput | $Enums.ViewSortDirection
    position?: IntFieldUpdateOperationsInput | number
  }

  export type ViewColumnVisibilityUpdateWithoutViewInput = {
    isVisible?: BoolFieldUpdateOperationsInput | boolean
    column?: ColumnUpdateOneRequiredWithoutViewColumnVisibilitiesNestedInput
  }

  export type ViewColumnVisibilityUncheckedUpdateWithoutViewInput = {
    id?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ViewColumnVisibilityUncheckedUpdateManyWithoutViewInput = {
    id?: IntFieldUpdateOperationsInput | number
    columnId?: IntFieldUpdateOperationsInput | number
    isVisible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CellCreateManyRowInput = {
    id?: number
    value?: string | null
    columnId: number
  }

  export type CellUpdateWithoutRowInput = {
    value?: NullableStringFieldUpdateOperationsInput | string | null
    column?: ColumnUpdateOneRequiredWithoutCellsNestedInput
  }

  export type CellUncheckedUpdateWithoutRowInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: NullableStringFieldUpdateOperationsInput | string | null
    columnId?: IntFieldUpdateOperationsInput | number
  }

  export type CellUncheckedUpdateManyWithoutRowInput = {
    id?: IntFieldUpdateOperationsInput | number
    value?: NullableStringFieldUpdateOperationsInput | string | null
    columnId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}