
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
 * Model help_request
 * 
 */
export type help_request = $Result.DefaultSelection<Prisma.$help_requestPayload>
/**
 * Model owners
 * 
 */
export type owners = $Result.DefaultSelection<Prisma.$ownersPayload>
/**
 * Model visitors
 * 
 */
export type visitors = $Result.DefaultSelection<Prisma.$visitorsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Help_requests
 * const help_requests = await prisma.help_request.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Help_requests
   * const help_requests = await prisma.help_request.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.help_request`: Exposes CRUD operations for the **help_request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Help_requests
    * const help_requests = await prisma.help_request.findMany()
    * ```
    */
  get help_request(): Prisma.help_requestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.owners`: Exposes CRUD operations for the **owners** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Owners
    * const owners = await prisma.owners.findMany()
    * ```
    */
  get owners(): Prisma.ownersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.visitors`: Exposes CRUD operations for the **visitors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Visitors
    * const visitors = await prisma.visitors.findMany()
    * ```
    */
  get visitors(): Prisma.visitorsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    help_request: 'help_request',
    owners: 'owners',
    visitors: 'visitors'
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
      modelProps: "help_request" | "owners" | "visitors"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      help_request: {
        payload: Prisma.$help_requestPayload<ExtArgs>
        fields: Prisma.help_requestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.help_requestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$help_requestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.help_requestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$help_requestPayload>
          }
          findFirst: {
            args: Prisma.help_requestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$help_requestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.help_requestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$help_requestPayload>
          }
          findMany: {
            args: Prisma.help_requestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$help_requestPayload>[]
          }
          create: {
            args: Prisma.help_requestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$help_requestPayload>
          }
          createMany: {
            args: Prisma.help_requestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.help_requestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$help_requestPayload>
          }
          update: {
            args: Prisma.help_requestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$help_requestPayload>
          }
          deleteMany: {
            args: Prisma.help_requestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.help_requestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.help_requestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$help_requestPayload>
          }
          aggregate: {
            args: Prisma.Help_requestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHelp_request>
          }
          groupBy: {
            args: Prisma.help_requestGroupByArgs<ExtArgs>
            result: $Utils.Optional<Help_requestGroupByOutputType>[]
          }
          count: {
            args: Prisma.help_requestCountArgs<ExtArgs>
            result: $Utils.Optional<Help_requestCountAggregateOutputType> | number
          }
        }
      }
      owners: {
        payload: Prisma.$ownersPayload<ExtArgs>
        fields: Prisma.ownersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ownersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ownersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ownersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ownersPayload>
          }
          findFirst: {
            args: Prisma.ownersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ownersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ownersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ownersPayload>
          }
          findMany: {
            args: Prisma.ownersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ownersPayload>[]
          }
          create: {
            args: Prisma.ownersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ownersPayload>
          }
          createMany: {
            args: Prisma.ownersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ownersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ownersPayload>
          }
          update: {
            args: Prisma.ownersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ownersPayload>
          }
          deleteMany: {
            args: Prisma.ownersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ownersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ownersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ownersPayload>
          }
          aggregate: {
            args: Prisma.OwnersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOwners>
          }
          groupBy: {
            args: Prisma.ownersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OwnersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ownersCountArgs<ExtArgs>
            result: $Utils.Optional<OwnersCountAggregateOutputType> | number
          }
        }
      }
      visitors: {
        payload: Prisma.$visitorsPayload<ExtArgs>
        fields: Prisma.visitorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.visitorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.visitorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitorsPayload>
          }
          findFirst: {
            args: Prisma.visitorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.visitorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitorsPayload>
          }
          findMany: {
            args: Prisma.visitorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitorsPayload>[]
          }
          create: {
            args: Prisma.visitorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitorsPayload>
          }
          createMany: {
            args: Prisma.visitorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.visitorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitorsPayload>
          }
          update: {
            args: Prisma.visitorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitorsPayload>
          }
          deleteMany: {
            args: Prisma.visitorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.visitorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.visitorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$visitorsPayload>
          }
          aggregate: {
            args: Prisma.VisitorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVisitors>
          }
          groupBy: {
            args: Prisma.visitorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<VisitorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.visitorsCountArgs<ExtArgs>
            result: $Utils.Optional<VisitorsCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    help_request?: help_requestOmit
    owners?: ownersOmit
    visitors?: visitorsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Models
   */

  /**
   * Model help_request
   */

  export type AggregateHelp_request = {
    _count: Help_requestCountAggregateOutputType | null
    _avg: Help_requestAvgAggregateOutputType | null
    _sum: Help_requestSumAggregateOutputType | null
    _min: Help_requestMinAggregateOutputType | null
    _max: Help_requestMaxAggregateOutputType | null
  }

  export type Help_requestAvgAggregateOutputType = {
    help_id: number | null
    latitude: number | null
    longitude: number | null
    seeker_id: number | null
  }

  export type Help_requestSumAggregateOutputType = {
    help_id: bigint | null
    latitude: number | null
    longitude: number | null
    seeker_id: number | null
  }

  export type Help_requestMinAggregateOutputType = {
    help_id: bigint | null
    description: string | null
    latitude: number | null
    longitude: number | null
    seeker_id: number | null
    timestamp: Date | null
    title: string | null
  }

  export type Help_requestMaxAggregateOutputType = {
    help_id: bigint | null
    description: string | null
    latitude: number | null
    longitude: number | null
    seeker_id: number | null
    timestamp: Date | null
    title: string | null
  }

  export type Help_requestCountAggregateOutputType = {
    help_id: number
    description: number
    latitude: number
    longitude: number
    seeker_id: number
    timestamp: number
    title: number
    _all: number
  }


  export type Help_requestAvgAggregateInputType = {
    help_id?: true
    latitude?: true
    longitude?: true
    seeker_id?: true
  }

  export type Help_requestSumAggregateInputType = {
    help_id?: true
    latitude?: true
    longitude?: true
    seeker_id?: true
  }

  export type Help_requestMinAggregateInputType = {
    help_id?: true
    description?: true
    latitude?: true
    longitude?: true
    seeker_id?: true
    timestamp?: true
    title?: true
  }

  export type Help_requestMaxAggregateInputType = {
    help_id?: true
    description?: true
    latitude?: true
    longitude?: true
    seeker_id?: true
    timestamp?: true
    title?: true
  }

  export type Help_requestCountAggregateInputType = {
    help_id?: true
    description?: true
    latitude?: true
    longitude?: true
    seeker_id?: true
    timestamp?: true
    title?: true
    _all?: true
  }

  export type Help_requestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which help_request to aggregate.
     */
    where?: help_requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of help_requests to fetch.
     */
    orderBy?: help_requestOrderByWithRelationInput | help_requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: help_requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` help_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` help_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned help_requests
    **/
    _count?: true | Help_requestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Help_requestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Help_requestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Help_requestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Help_requestMaxAggregateInputType
  }

  export type GetHelp_requestAggregateType<T extends Help_requestAggregateArgs> = {
        [P in keyof T & keyof AggregateHelp_request]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHelp_request[P]>
      : GetScalarType<T[P], AggregateHelp_request[P]>
  }




  export type help_requestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: help_requestWhereInput
    orderBy?: help_requestOrderByWithAggregationInput | help_requestOrderByWithAggregationInput[]
    by: Help_requestScalarFieldEnum[] | Help_requestScalarFieldEnum
    having?: help_requestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Help_requestCountAggregateInputType | true
    _avg?: Help_requestAvgAggregateInputType
    _sum?: Help_requestSumAggregateInputType
    _min?: Help_requestMinAggregateInputType
    _max?: Help_requestMaxAggregateInputType
  }

  export type Help_requestGroupByOutputType = {
    help_id: bigint
    description: string | null
    latitude: number
    longitude: number
    seeker_id: number
    timestamp: Date | null
    title: string | null
    _count: Help_requestCountAggregateOutputType | null
    _avg: Help_requestAvgAggregateOutputType | null
    _sum: Help_requestSumAggregateOutputType | null
    _min: Help_requestMinAggregateOutputType | null
    _max: Help_requestMaxAggregateOutputType | null
  }

  type GetHelp_requestGroupByPayload<T extends help_requestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Help_requestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Help_requestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Help_requestGroupByOutputType[P]>
            : GetScalarType<T[P], Help_requestGroupByOutputType[P]>
        }
      >
    >


  export type help_requestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    help_id?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    seeker_id?: boolean
    timestamp?: boolean
    title?: boolean
  }, ExtArgs["result"]["help_request"]>



  export type help_requestSelectScalar = {
    help_id?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    seeker_id?: boolean
    timestamp?: boolean
    title?: boolean
  }

  export type help_requestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"help_id" | "description" | "latitude" | "longitude" | "seeker_id" | "timestamp" | "title", ExtArgs["result"]["help_request"]>

  export type $help_requestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "help_request"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      help_id: bigint
      description: string | null
      latitude: number
      longitude: number
      seeker_id: number
      timestamp: Date | null
      title: string | null
    }, ExtArgs["result"]["help_request"]>
    composites: {}
  }

  type help_requestGetPayload<S extends boolean | null | undefined | help_requestDefaultArgs> = $Result.GetResult<Prisma.$help_requestPayload, S>

  type help_requestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<help_requestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Help_requestCountAggregateInputType | true
    }

  export interface help_requestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['help_request'], meta: { name: 'help_request' } }
    /**
     * Find zero or one Help_request that matches the filter.
     * @param {help_requestFindUniqueArgs} args - Arguments to find a Help_request
     * @example
     * // Get one Help_request
     * const help_request = await prisma.help_request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends help_requestFindUniqueArgs>(args: SelectSubset<T, help_requestFindUniqueArgs<ExtArgs>>): Prisma__help_requestClient<$Result.GetResult<Prisma.$help_requestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Help_request that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {help_requestFindUniqueOrThrowArgs} args - Arguments to find a Help_request
     * @example
     * // Get one Help_request
     * const help_request = await prisma.help_request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends help_requestFindUniqueOrThrowArgs>(args: SelectSubset<T, help_requestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__help_requestClient<$Result.GetResult<Prisma.$help_requestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Help_request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {help_requestFindFirstArgs} args - Arguments to find a Help_request
     * @example
     * // Get one Help_request
     * const help_request = await prisma.help_request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends help_requestFindFirstArgs>(args?: SelectSubset<T, help_requestFindFirstArgs<ExtArgs>>): Prisma__help_requestClient<$Result.GetResult<Prisma.$help_requestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Help_request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {help_requestFindFirstOrThrowArgs} args - Arguments to find a Help_request
     * @example
     * // Get one Help_request
     * const help_request = await prisma.help_request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends help_requestFindFirstOrThrowArgs>(args?: SelectSubset<T, help_requestFindFirstOrThrowArgs<ExtArgs>>): Prisma__help_requestClient<$Result.GetResult<Prisma.$help_requestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Help_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {help_requestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Help_requests
     * const help_requests = await prisma.help_request.findMany()
     * 
     * // Get first 10 Help_requests
     * const help_requests = await prisma.help_request.findMany({ take: 10 })
     * 
     * // Only select the `help_id`
     * const help_requestWithHelp_idOnly = await prisma.help_request.findMany({ select: { help_id: true } })
     * 
     */
    findMany<T extends help_requestFindManyArgs>(args?: SelectSubset<T, help_requestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$help_requestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Help_request.
     * @param {help_requestCreateArgs} args - Arguments to create a Help_request.
     * @example
     * // Create one Help_request
     * const Help_request = await prisma.help_request.create({
     *   data: {
     *     // ... data to create a Help_request
     *   }
     * })
     * 
     */
    create<T extends help_requestCreateArgs>(args: SelectSubset<T, help_requestCreateArgs<ExtArgs>>): Prisma__help_requestClient<$Result.GetResult<Prisma.$help_requestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Help_requests.
     * @param {help_requestCreateManyArgs} args - Arguments to create many Help_requests.
     * @example
     * // Create many Help_requests
     * const help_request = await prisma.help_request.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends help_requestCreateManyArgs>(args?: SelectSubset<T, help_requestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Help_request.
     * @param {help_requestDeleteArgs} args - Arguments to delete one Help_request.
     * @example
     * // Delete one Help_request
     * const Help_request = await prisma.help_request.delete({
     *   where: {
     *     // ... filter to delete one Help_request
     *   }
     * })
     * 
     */
    delete<T extends help_requestDeleteArgs>(args: SelectSubset<T, help_requestDeleteArgs<ExtArgs>>): Prisma__help_requestClient<$Result.GetResult<Prisma.$help_requestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Help_request.
     * @param {help_requestUpdateArgs} args - Arguments to update one Help_request.
     * @example
     * // Update one Help_request
     * const help_request = await prisma.help_request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends help_requestUpdateArgs>(args: SelectSubset<T, help_requestUpdateArgs<ExtArgs>>): Prisma__help_requestClient<$Result.GetResult<Prisma.$help_requestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Help_requests.
     * @param {help_requestDeleteManyArgs} args - Arguments to filter Help_requests to delete.
     * @example
     * // Delete a few Help_requests
     * const { count } = await prisma.help_request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends help_requestDeleteManyArgs>(args?: SelectSubset<T, help_requestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Help_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {help_requestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Help_requests
     * const help_request = await prisma.help_request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends help_requestUpdateManyArgs>(args: SelectSubset<T, help_requestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Help_request.
     * @param {help_requestUpsertArgs} args - Arguments to update or create a Help_request.
     * @example
     * // Update or create a Help_request
     * const help_request = await prisma.help_request.upsert({
     *   create: {
     *     // ... data to create a Help_request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Help_request we want to update
     *   }
     * })
     */
    upsert<T extends help_requestUpsertArgs>(args: SelectSubset<T, help_requestUpsertArgs<ExtArgs>>): Prisma__help_requestClient<$Result.GetResult<Prisma.$help_requestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Help_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {help_requestCountArgs} args - Arguments to filter Help_requests to count.
     * @example
     * // Count the number of Help_requests
     * const count = await prisma.help_request.count({
     *   where: {
     *     // ... the filter for the Help_requests we want to count
     *   }
     * })
    **/
    count<T extends help_requestCountArgs>(
      args?: Subset<T, help_requestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Help_requestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Help_request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Help_requestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Help_requestAggregateArgs>(args: Subset<T, Help_requestAggregateArgs>): Prisma.PrismaPromise<GetHelp_requestAggregateType<T>>

    /**
     * Group by Help_request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {help_requestGroupByArgs} args - Group by arguments.
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
      T extends help_requestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: help_requestGroupByArgs['orderBy'] }
        : { orderBy?: help_requestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, help_requestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHelp_requestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the help_request model
   */
  readonly fields: help_requestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for help_request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__help_requestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the help_request model
   */
  interface help_requestFieldRefs {
    readonly help_id: FieldRef<"help_request", 'BigInt'>
    readonly description: FieldRef<"help_request", 'String'>
    readonly latitude: FieldRef<"help_request", 'Float'>
    readonly longitude: FieldRef<"help_request", 'Float'>
    readonly seeker_id: FieldRef<"help_request", 'Int'>
    readonly timestamp: FieldRef<"help_request", 'DateTime'>
    readonly title: FieldRef<"help_request", 'String'>
  }
    

  // Custom InputTypes
  /**
   * help_request findUnique
   */
  export type help_requestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the help_request
     */
    select?: help_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the help_request
     */
    omit?: help_requestOmit<ExtArgs> | null
    /**
     * Filter, which help_request to fetch.
     */
    where: help_requestWhereUniqueInput
  }

  /**
   * help_request findUniqueOrThrow
   */
  export type help_requestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the help_request
     */
    select?: help_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the help_request
     */
    omit?: help_requestOmit<ExtArgs> | null
    /**
     * Filter, which help_request to fetch.
     */
    where: help_requestWhereUniqueInput
  }

  /**
   * help_request findFirst
   */
  export type help_requestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the help_request
     */
    select?: help_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the help_request
     */
    omit?: help_requestOmit<ExtArgs> | null
    /**
     * Filter, which help_request to fetch.
     */
    where?: help_requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of help_requests to fetch.
     */
    orderBy?: help_requestOrderByWithRelationInput | help_requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for help_requests.
     */
    cursor?: help_requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` help_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` help_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of help_requests.
     */
    distinct?: Help_requestScalarFieldEnum | Help_requestScalarFieldEnum[]
  }

  /**
   * help_request findFirstOrThrow
   */
  export type help_requestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the help_request
     */
    select?: help_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the help_request
     */
    omit?: help_requestOmit<ExtArgs> | null
    /**
     * Filter, which help_request to fetch.
     */
    where?: help_requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of help_requests to fetch.
     */
    orderBy?: help_requestOrderByWithRelationInput | help_requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for help_requests.
     */
    cursor?: help_requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` help_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` help_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of help_requests.
     */
    distinct?: Help_requestScalarFieldEnum | Help_requestScalarFieldEnum[]
  }

  /**
   * help_request findMany
   */
  export type help_requestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the help_request
     */
    select?: help_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the help_request
     */
    omit?: help_requestOmit<ExtArgs> | null
    /**
     * Filter, which help_requests to fetch.
     */
    where?: help_requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of help_requests to fetch.
     */
    orderBy?: help_requestOrderByWithRelationInput | help_requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing help_requests.
     */
    cursor?: help_requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` help_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` help_requests.
     */
    skip?: number
    distinct?: Help_requestScalarFieldEnum | Help_requestScalarFieldEnum[]
  }

  /**
   * help_request create
   */
  export type help_requestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the help_request
     */
    select?: help_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the help_request
     */
    omit?: help_requestOmit<ExtArgs> | null
    /**
     * The data needed to create a help_request.
     */
    data: XOR<help_requestCreateInput, help_requestUncheckedCreateInput>
  }

  /**
   * help_request createMany
   */
  export type help_requestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many help_requests.
     */
    data: help_requestCreateManyInput | help_requestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * help_request update
   */
  export type help_requestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the help_request
     */
    select?: help_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the help_request
     */
    omit?: help_requestOmit<ExtArgs> | null
    /**
     * The data needed to update a help_request.
     */
    data: XOR<help_requestUpdateInput, help_requestUncheckedUpdateInput>
    /**
     * Choose, which help_request to update.
     */
    where: help_requestWhereUniqueInput
  }

  /**
   * help_request updateMany
   */
  export type help_requestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update help_requests.
     */
    data: XOR<help_requestUpdateManyMutationInput, help_requestUncheckedUpdateManyInput>
    /**
     * Filter which help_requests to update
     */
    where?: help_requestWhereInput
    /**
     * Limit how many help_requests to update.
     */
    limit?: number
  }

  /**
   * help_request upsert
   */
  export type help_requestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the help_request
     */
    select?: help_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the help_request
     */
    omit?: help_requestOmit<ExtArgs> | null
    /**
     * The filter to search for the help_request to update in case it exists.
     */
    where: help_requestWhereUniqueInput
    /**
     * In case the help_request found by the `where` argument doesn't exist, create a new help_request with this data.
     */
    create: XOR<help_requestCreateInput, help_requestUncheckedCreateInput>
    /**
     * In case the help_request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<help_requestUpdateInput, help_requestUncheckedUpdateInput>
  }

  /**
   * help_request delete
   */
  export type help_requestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the help_request
     */
    select?: help_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the help_request
     */
    omit?: help_requestOmit<ExtArgs> | null
    /**
     * Filter which help_request to delete.
     */
    where: help_requestWhereUniqueInput
  }

  /**
   * help_request deleteMany
   */
  export type help_requestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which help_requests to delete
     */
    where?: help_requestWhereInput
    /**
     * Limit how many help_requests to delete.
     */
    limit?: number
  }

  /**
   * help_request without action
   */
  export type help_requestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the help_request
     */
    select?: help_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the help_request
     */
    omit?: help_requestOmit<ExtArgs> | null
  }


  /**
   * Model owners
   */

  export type AggregateOwners = {
    _count: OwnersCountAggregateOutputType | null
    _avg: OwnersAvgAggregateOutputType | null
    _sum: OwnersSumAggregateOutputType | null
    _min: OwnersMinAggregateOutputType | null
    _max: OwnersMaxAggregateOutputType | null
  }

  export type OwnersAvgAggregateOutputType = {
    id: number | null
  }

  export type OwnersSumAggregateOutputType = {
    id: bigint | null
  }

  export type OwnersMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    mobile: string | null
    email: string | null
    address: string | null
    password: string | null
  }

  export type OwnersMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    mobile: string | null
    email: string | null
    address: string | null
    password: string | null
  }

  export type OwnersCountAggregateOutputType = {
    id: number
    name: number
    mobile: number
    email: number
    address: number
    password: number
    _all: number
  }


  export type OwnersAvgAggregateInputType = {
    id?: true
  }

  export type OwnersSumAggregateInputType = {
    id?: true
  }

  export type OwnersMinAggregateInputType = {
    id?: true
    name?: true
    mobile?: true
    email?: true
    address?: true
    password?: true
  }

  export type OwnersMaxAggregateInputType = {
    id?: true
    name?: true
    mobile?: true
    email?: true
    address?: true
    password?: true
  }

  export type OwnersCountAggregateInputType = {
    id?: true
    name?: true
    mobile?: true
    email?: true
    address?: true
    password?: true
    _all?: true
  }

  export type OwnersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which owners to aggregate.
     */
    where?: ownersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of owners to fetch.
     */
    orderBy?: ownersOrderByWithRelationInput | ownersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ownersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned owners
    **/
    _count?: true | OwnersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OwnersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OwnersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OwnersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OwnersMaxAggregateInputType
  }

  export type GetOwnersAggregateType<T extends OwnersAggregateArgs> = {
        [P in keyof T & keyof AggregateOwners]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOwners[P]>
      : GetScalarType<T[P], AggregateOwners[P]>
  }




  export type ownersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ownersWhereInput
    orderBy?: ownersOrderByWithAggregationInput | ownersOrderByWithAggregationInput[]
    by: OwnersScalarFieldEnum[] | OwnersScalarFieldEnum
    having?: ownersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OwnersCountAggregateInputType | true
    _avg?: OwnersAvgAggregateInputType
    _sum?: OwnersSumAggregateInputType
    _min?: OwnersMinAggregateInputType
    _max?: OwnersMaxAggregateInputType
  }

  export type OwnersGroupByOutputType = {
    id: bigint
    name: string | null
    mobile: string | null
    email: string
    address: string | null
    password: string | null
    _count: OwnersCountAggregateOutputType | null
    _avg: OwnersAvgAggregateOutputType | null
    _sum: OwnersSumAggregateOutputType | null
    _min: OwnersMinAggregateOutputType | null
    _max: OwnersMaxAggregateOutputType | null
  }

  type GetOwnersGroupByPayload<T extends ownersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OwnersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OwnersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OwnersGroupByOutputType[P]>
            : GetScalarType<T[P], OwnersGroupByOutputType[P]>
        }
      >
    >


  export type ownersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    mobile?: boolean
    email?: boolean
    address?: boolean
    password?: boolean
  }, ExtArgs["result"]["owners"]>



  export type ownersSelectScalar = {
    id?: boolean
    name?: boolean
    mobile?: boolean
    email?: boolean
    address?: boolean
    password?: boolean
  }

  export type ownersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "mobile" | "email" | "address" | "password", ExtArgs["result"]["owners"]>

  export type $ownersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "owners"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string | null
      mobile: string | null
      email: string
      address: string | null
      password: string | null
    }, ExtArgs["result"]["owners"]>
    composites: {}
  }

  type ownersGetPayload<S extends boolean | null | undefined | ownersDefaultArgs> = $Result.GetResult<Prisma.$ownersPayload, S>

  type ownersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ownersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OwnersCountAggregateInputType | true
    }

  export interface ownersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['owners'], meta: { name: 'owners' } }
    /**
     * Find zero or one Owners that matches the filter.
     * @param {ownersFindUniqueArgs} args - Arguments to find a Owners
     * @example
     * // Get one Owners
     * const owners = await prisma.owners.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ownersFindUniqueArgs>(args: SelectSubset<T, ownersFindUniqueArgs<ExtArgs>>): Prisma__ownersClient<$Result.GetResult<Prisma.$ownersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Owners that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ownersFindUniqueOrThrowArgs} args - Arguments to find a Owners
     * @example
     * // Get one Owners
     * const owners = await prisma.owners.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ownersFindUniqueOrThrowArgs>(args: SelectSubset<T, ownersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ownersClient<$Result.GetResult<Prisma.$ownersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownersFindFirstArgs} args - Arguments to find a Owners
     * @example
     * // Get one Owners
     * const owners = await prisma.owners.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ownersFindFirstArgs>(args?: SelectSubset<T, ownersFindFirstArgs<ExtArgs>>): Prisma__ownersClient<$Result.GetResult<Prisma.$ownersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Owners that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownersFindFirstOrThrowArgs} args - Arguments to find a Owners
     * @example
     * // Get one Owners
     * const owners = await prisma.owners.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ownersFindFirstOrThrowArgs>(args?: SelectSubset<T, ownersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ownersClient<$Result.GetResult<Prisma.$ownersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Owners
     * const owners = await prisma.owners.findMany()
     * 
     * // Get first 10 Owners
     * const owners = await prisma.owners.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ownersWithIdOnly = await prisma.owners.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ownersFindManyArgs>(args?: SelectSubset<T, ownersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ownersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Owners.
     * @param {ownersCreateArgs} args - Arguments to create a Owners.
     * @example
     * // Create one Owners
     * const Owners = await prisma.owners.create({
     *   data: {
     *     // ... data to create a Owners
     *   }
     * })
     * 
     */
    create<T extends ownersCreateArgs>(args: SelectSubset<T, ownersCreateArgs<ExtArgs>>): Prisma__ownersClient<$Result.GetResult<Prisma.$ownersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Owners.
     * @param {ownersCreateManyArgs} args - Arguments to create many Owners.
     * @example
     * // Create many Owners
     * const owners = await prisma.owners.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ownersCreateManyArgs>(args?: SelectSubset<T, ownersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Owners.
     * @param {ownersDeleteArgs} args - Arguments to delete one Owners.
     * @example
     * // Delete one Owners
     * const Owners = await prisma.owners.delete({
     *   where: {
     *     // ... filter to delete one Owners
     *   }
     * })
     * 
     */
    delete<T extends ownersDeleteArgs>(args: SelectSubset<T, ownersDeleteArgs<ExtArgs>>): Prisma__ownersClient<$Result.GetResult<Prisma.$ownersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Owners.
     * @param {ownersUpdateArgs} args - Arguments to update one Owners.
     * @example
     * // Update one Owners
     * const owners = await prisma.owners.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ownersUpdateArgs>(args: SelectSubset<T, ownersUpdateArgs<ExtArgs>>): Prisma__ownersClient<$Result.GetResult<Prisma.$ownersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Owners.
     * @param {ownersDeleteManyArgs} args - Arguments to filter Owners to delete.
     * @example
     * // Delete a few Owners
     * const { count } = await prisma.owners.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ownersDeleteManyArgs>(args?: SelectSubset<T, ownersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Owners
     * const owners = await prisma.owners.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ownersUpdateManyArgs>(args: SelectSubset<T, ownersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Owners.
     * @param {ownersUpsertArgs} args - Arguments to update or create a Owners.
     * @example
     * // Update or create a Owners
     * const owners = await prisma.owners.upsert({
     *   create: {
     *     // ... data to create a Owners
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Owners we want to update
     *   }
     * })
     */
    upsert<T extends ownersUpsertArgs>(args: SelectSubset<T, ownersUpsertArgs<ExtArgs>>): Prisma__ownersClient<$Result.GetResult<Prisma.$ownersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownersCountArgs} args - Arguments to filter Owners to count.
     * @example
     * // Count the number of Owners
     * const count = await prisma.owners.count({
     *   where: {
     *     // ... the filter for the Owners we want to count
     *   }
     * })
    **/
    count<T extends ownersCountArgs>(
      args?: Subset<T, ownersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OwnersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OwnersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OwnersAggregateArgs>(args: Subset<T, OwnersAggregateArgs>): Prisma.PrismaPromise<GetOwnersAggregateType<T>>

    /**
     * Group by Owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ownersGroupByArgs} args - Group by arguments.
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
      T extends ownersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ownersGroupByArgs['orderBy'] }
        : { orderBy?: ownersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ownersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOwnersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the owners model
   */
  readonly fields: ownersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for owners.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ownersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the owners model
   */
  interface ownersFieldRefs {
    readonly id: FieldRef<"owners", 'BigInt'>
    readonly name: FieldRef<"owners", 'String'>
    readonly mobile: FieldRef<"owners", 'String'>
    readonly email: FieldRef<"owners", 'String'>
    readonly address: FieldRef<"owners", 'String'>
    readonly password: FieldRef<"owners", 'String'>
  }
    

  // Custom InputTypes
  /**
   * owners findUnique
   */
  export type ownersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owners
     */
    select?: ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owners
     */
    omit?: ownersOmit<ExtArgs> | null
    /**
     * Filter, which owners to fetch.
     */
    where: ownersWhereUniqueInput
  }

  /**
   * owners findUniqueOrThrow
   */
  export type ownersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owners
     */
    select?: ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owners
     */
    omit?: ownersOmit<ExtArgs> | null
    /**
     * Filter, which owners to fetch.
     */
    where: ownersWhereUniqueInput
  }

  /**
   * owners findFirst
   */
  export type ownersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owners
     */
    select?: ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owners
     */
    omit?: ownersOmit<ExtArgs> | null
    /**
     * Filter, which owners to fetch.
     */
    where?: ownersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of owners to fetch.
     */
    orderBy?: ownersOrderByWithRelationInput | ownersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for owners.
     */
    cursor?: ownersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of owners.
     */
    distinct?: OwnersScalarFieldEnum | OwnersScalarFieldEnum[]
  }

  /**
   * owners findFirstOrThrow
   */
  export type ownersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owners
     */
    select?: ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owners
     */
    omit?: ownersOmit<ExtArgs> | null
    /**
     * Filter, which owners to fetch.
     */
    where?: ownersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of owners to fetch.
     */
    orderBy?: ownersOrderByWithRelationInput | ownersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for owners.
     */
    cursor?: ownersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` owners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of owners.
     */
    distinct?: OwnersScalarFieldEnum | OwnersScalarFieldEnum[]
  }

  /**
   * owners findMany
   */
  export type ownersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owners
     */
    select?: ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owners
     */
    omit?: ownersOmit<ExtArgs> | null
    /**
     * Filter, which owners to fetch.
     */
    where?: ownersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of owners to fetch.
     */
    orderBy?: ownersOrderByWithRelationInput | ownersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing owners.
     */
    cursor?: ownersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` owners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` owners.
     */
    skip?: number
    distinct?: OwnersScalarFieldEnum | OwnersScalarFieldEnum[]
  }

  /**
   * owners create
   */
  export type ownersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owners
     */
    select?: ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owners
     */
    omit?: ownersOmit<ExtArgs> | null
    /**
     * The data needed to create a owners.
     */
    data: XOR<ownersCreateInput, ownersUncheckedCreateInput>
  }

  /**
   * owners createMany
   */
  export type ownersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many owners.
     */
    data: ownersCreateManyInput | ownersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * owners update
   */
  export type ownersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owners
     */
    select?: ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owners
     */
    omit?: ownersOmit<ExtArgs> | null
    /**
     * The data needed to update a owners.
     */
    data: XOR<ownersUpdateInput, ownersUncheckedUpdateInput>
    /**
     * Choose, which owners to update.
     */
    where: ownersWhereUniqueInput
  }

  /**
   * owners updateMany
   */
  export type ownersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update owners.
     */
    data: XOR<ownersUpdateManyMutationInput, ownersUncheckedUpdateManyInput>
    /**
     * Filter which owners to update
     */
    where?: ownersWhereInput
    /**
     * Limit how many owners to update.
     */
    limit?: number
  }

  /**
   * owners upsert
   */
  export type ownersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owners
     */
    select?: ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owners
     */
    omit?: ownersOmit<ExtArgs> | null
    /**
     * The filter to search for the owners to update in case it exists.
     */
    where: ownersWhereUniqueInput
    /**
     * In case the owners found by the `where` argument doesn't exist, create a new owners with this data.
     */
    create: XOR<ownersCreateInput, ownersUncheckedCreateInput>
    /**
     * In case the owners was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ownersUpdateInput, ownersUncheckedUpdateInput>
  }

  /**
   * owners delete
   */
  export type ownersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owners
     */
    select?: ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owners
     */
    omit?: ownersOmit<ExtArgs> | null
    /**
     * Filter which owners to delete.
     */
    where: ownersWhereUniqueInput
  }

  /**
   * owners deleteMany
   */
  export type ownersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which owners to delete
     */
    where?: ownersWhereInput
    /**
     * Limit how many owners to delete.
     */
    limit?: number
  }

  /**
   * owners without action
   */
  export type ownersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the owners
     */
    select?: ownersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the owners
     */
    omit?: ownersOmit<ExtArgs> | null
  }


  /**
   * Model visitors
   */

  export type AggregateVisitors = {
    _count: VisitorsCountAggregateOutputType | null
    _avg: VisitorsAvgAggregateOutputType | null
    _sum: VisitorsSumAggregateOutputType | null
    _min: VisitorsMinAggregateOutputType | null
    _max: VisitorsMaxAggregateOutputType | null
  }

  export type VisitorsAvgAggregateOutputType = {
    id: number | null
  }

  export type VisitorsSumAggregateOutputType = {
    id: bigint | null
  }

  export type VisitorsMinAggregateOutputType = {
    id: bigint | null
    owner_id: string | null
    image: string | null
    reason: string | null
    date: string | null
  }

  export type VisitorsMaxAggregateOutputType = {
    id: bigint | null
    owner_id: string | null
    image: string | null
    reason: string | null
    date: string | null
  }

  export type VisitorsCountAggregateOutputType = {
    id: number
    owner_id: number
    image: number
    reason: number
    date: number
    _all: number
  }


  export type VisitorsAvgAggregateInputType = {
    id?: true
  }

  export type VisitorsSumAggregateInputType = {
    id?: true
  }

  export type VisitorsMinAggregateInputType = {
    id?: true
    owner_id?: true
    image?: true
    reason?: true
    date?: true
  }

  export type VisitorsMaxAggregateInputType = {
    id?: true
    owner_id?: true
    image?: true
    reason?: true
    date?: true
  }

  export type VisitorsCountAggregateInputType = {
    id?: true
    owner_id?: true
    image?: true
    reason?: true
    date?: true
    _all?: true
  }

  export type VisitorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which visitors to aggregate.
     */
    where?: visitorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of visitors to fetch.
     */
    orderBy?: visitorsOrderByWithRelationInput | visitorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: visitorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned visitors
    **/
    _count?: true | VisitorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VisitorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VisitorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VisitorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VisitorsMaxAggregateInputType
  }

  export type GetVisitorsAggregateType<T extends VisitorsAggregateArgs> = {
        [P in keyof T & keyof AggregateVisitors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVisitors[P]>
      : GetScalarType<T[P], AggregateVisitors[P]>
  }




  export type visitorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: visitorsWhereInput
    orderBy?: visitorsOrderByWithAggregationInput | visitorsOrderByWithAggregationInput[]
    by: VisitorsScalarFieldEnum[] | VisitorsScalarFieldEnum
    having?: visitorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VisitorsCountAggregateInputType | true
    _avg?: VisitorsAvgAggregateInputType
    _sum?: VisitorsSumAggregateInputType
    _min?: VisitorsMinAggregateInputType
    _max?: VisitorsMaxAggregateInputType
  }

  export type VisitorsGroupByOutputType = {
    id: bigint
    owner_id: string | null
    image: string | null
    reason: string | null
    date: string | null
    _count: VisitorsCountAggregateOutputType | null
    _avg: VisitorsAvgAggregateOutputType | null
    _sum: VisitorsSumAggregateOutputType | null
    _min: VisitorsMinAggregateOutputType | null
    _max: VisitorsMaxAggregateOutputType | null
  }

  type GetVisitorsGroupByPayload<T extends visitorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VisitorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VisitorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VisitorsGroupByOutputType[P]>
            : GetScalarType<T[P], VisitorsGroupByOutputType[P]>
        }
      >
    >


  export type visitorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    owner_id?: boolean
    image?: boolean
    reason?: boolean
    date?: boolean
  }, ExtArgs["result"]["visitors"]>



  export type visitorsSelectScalar = {
    id?: boolean
    owner_id?: boolean
    image?: boolean
    reason?: boolean
    date?: boolean
  }

  export type visitorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "owner_id" | "image" | "reason" | "date", ExtArgs["result"]["visitors"]>

  export type $visitorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "visitors"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      owner_id: string | null
      image: string | null
      reason: string | null
      date: string | null
    }, ExtArgs["result"]["visitors"]>
    composites: {}
  }

  type visitorsGetPayload<S extends boolean | null | undefined | visitorsDefaultArgs> = $Result.GetResult<Prisma.$visitorsPayload, S>

  type visitorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<visitorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VisitorsCountAggregateInputType | true
    }

  export interface visitorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['visitors'], meta: { name: 'visitors' } }
    /**
     * Find zero or one Visitors that matches the filter.
     * @param {visitorsFindUniqueArgs} args - Arguments to find a Visitors
     * @example
     * // Get one Visitors
     * const visitors = await prisma.visitors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends visitorsFindUniqueArgs>(args: SelectSubset<T, visitorsFindUniqueArgs<ExtArgs>>): Prisma__visitorsClient<$Result.GetResult<Prisma.$visitorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Visitors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {visitorsFindUniqueOrThrowArgs} args - Arguments to find a Visitors
     * @example
     * // Get one Visitors
     * const visitors = await prisma.visitors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends visitorsFindUniqueOrThrowArgs>(args: SelectSubset<T, visitorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__visitorsClient<$Result.GetResult<Prisma.$visitorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {visitorsFindFirstArgs} args - Arguments to find a Visitors
     * @example
     * // Get one Visitors
     * const visitors = await prisma.visitors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends visitorsFindFirstArgs>(args?: SelectSubset<T, visitorsFindFirstArgs<ExtArgs>>): Prisma__visitorsClient<$Result.GetResult<Prisma.$visitorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Visitors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {visitorsFindFirstOrThrowArgs} args - Arguments to find a Visitors
     * @example
     * // Get one Visitors
     * const visitors = await prisma.visitors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends visitorsFindFirstOrThrowArgs>(args?: SelectSubset<T, visitorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__visitorsClient<$Result.GetResult<Prisma.$visitorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Visitors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {visitorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Visitors
     * const visitors = await prisma.visitors.findMany()
     * 
     * // Get first 10 Visitors
     * const visitors = await prisma.visitors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const visitorsWithIdOnly = await prisma.visitors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends visitorsFindManyArgs>(args?: SelectSubset<T, visitorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$visitorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Visitors.
     * @param {visitorsCreateArgs} args - Arguments to create a Visitors.
     * @example
     * // Create one Visitors
     * const Visitors = await prisma.visitors.create({
     *   data: {
     *     // ... data to create a Visitors
     *   }
     * })
     * 
     */
    create<T extends visitorsCreateArgs>(args: SelectSubset<T, visitorsCreateArgs<ExtArgs>>): Prisma__visitorsClient<$Result.GetResult<Prisma.$visitorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Visitors.
     * @param {visitorsCreateManyArgs} args - Arguments to create many Visitors.
     * @example
     * // Create many Visitors
     * const visitors = await prisma.visitors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends visitorsCreateManyArgs>(args?: SelectSubset<T, visitorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Visitors.
     * @param {visitorsDeleteArgs} args - Arguments to delete one Visitors.
     * @example
     * // Delete one Visitors
     * const Visitors = await prisma.visitors.delete({
     *   where: {
     *     // ... filter to delete one Visitors
     *   }
     * })
     * 
     */
    delete<T extends visitorsDeleteArgs>(args: SelectSubset<T, visitorsDeleteArgs<ExtArgs>>): Prisma__visitorsClient<$Result.GetResult<Prisma.$visitorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Visitors.
     * @param {visitorsUpdateArgs} args - Arguments to update one Visitors.
     * @example
     * // Update one Visitors
     * const visitors = await prisma.visitors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends visitorsUpdateArgs>(args: SelectSubset<T, visitorsUpdateArgs<ExtArgs>>): Prisma__visitorsClient<$Result.GetResult<Prisma.$visitorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Visitors.
     * @param {visitorsDeleteManyArgs} args - Arguments to filter Visitors to delete.
     * @example
     * // Delete a few Visitors
     * const { count } = await prisma.visitors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends visitorsDeleteManyArgs>(args?: SelectSubset<T, visitorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {visitorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Visitors
     * const visitors = await prisma.visitors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends visitorsUpdateManyArgs>(args: SelectSubset<T, visitorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Visitors.
     * @param {visitorsUpsertArgs} args - Arguments to update or create a Visitors.
     * @example
     * // Update or create a Visitors
     * const visitors = await prisma.visitors.upsert({
     *   create: {
     *     // ... data to create a Visitors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Visitors we want to update
     *   }
     * })
     */
    upsert<T extends visitorsUpsertArgs>(args: SelectSubset<T, visitorsUpsertArgs<ExtArgs>>): Prisma__visitorsClient<$Result.GetResult<Prisma.$visitorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {visitorsCountArgs} args - Arguments to filter Visitors to count.
     * @example
     * // Count the number of Visitors
     * const count = await prisma.visitors.count({
     *   where: {
     *     // ... the filter for the Visitors we want to count
     *   }
     * })
    **/
    count<T extends visitorsCountArgs>(
      args?: Subset<T, visitorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VisitorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VisitorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VisitorsAggregateArgs>(args: Subset<T, VisitorsAggregateArgs>): Prisma.PrismaPromise<GetVisitorsAggregateType<T>>

    /**
     * Group by Visitors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {visitorsGroupByArgs} args - Group by arguments.
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
      T extends visitorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: visitorsGroupByArgs['orderBy'] }
        : { orderBy?: visitorsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, visitorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVisitorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the visitors model
   */
  readonly fields: visitorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for visitors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__visitorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the visitors model
   */
  interface visitorsFieldRefs {
    readonly id: FieldRef<"visitors", 'BigInt'>
    readonly owner_id: FieldRef<"visitors", 'String'>
    readonly image: FieldRef<"visitors", 'String'>
    readonly reason: FieldRef<"visitors", 'String'>
    readonly date: FieldRef<"visitors", 'String'>
  }
    

  // Custom InputTypes
  /**
   * visitors findUnique
   */
  export type visitorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visitors
     */
    select?: visitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visitors
     */
    omit?: visitorsOmit<ExtArgs> | null
    /**
     * Filter, which visitors to fetch.
     */
    where: visitorsWhereUniqueInput
  }

  /**
   * visitors findUniqueOrThrow
   */
  export type visitorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visitors
     */
    select?: visitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visitors
     */
    omit?: visitorsOmit<ExtArgs> | null
    /**
     * Filter, which visitors to fetch.
     */
    where: visitorsWhereUniqueInput
  }

  /**
   * visitors findFirst
   */
  export type visitorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visitors
     */
    select?: visitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visitors
     */
    omit?: visitorsOmit<ExtArgs> | null
    /**
     * Filter, which visitors to fetch.
     */
    where?: visitorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of visitors to fetch.
     */
    orderBy?: visitorsOrderByWithRelationInput | visitorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for visitors.
     */
    cursor?: visitorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of visitors.
     */
    distinct?: VisitorsScalarFieldEnum | VisitorsScalarFieldEnum[]
  }

  /**
   * visitors findFirstOrThrow
   */
  export type visitorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visitors
     */
    select?: visitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visitors
     */
    omit?: visitorsOmit<ExtArgs> | null
    /**
     * Filter, which visitors to fetch.
     */
    where?: visitorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of visitors to fetch.
     */
    orderBy?: visitorsOrderByWithRelationInput | visitorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for visitors.
     */
    cursor?: visitorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` visitors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of visitors.
     */
    distinct?: VisitorsScalarFieldEnum | VisitorsScalarFieldEnum[]
  }

  /**
   * visitors findMany
   */
  export type visitorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visitors
     */
    select?: visitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visitors
     */
    omit?: visitorsOmit<ExtArgs> | null
    /**
     * Filter, which visitors to fetch.
     */
    where?: visitorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of visitors to fetch.
     */
    orderBy?: visitorsOrderByWithRelationInput | visitorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing visitors.
     */
    cursor?: visitorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` visitors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` visitors.
     */
    skip?: number
    distinct?: VisitorsScalarFieldEnum | VisitorsScalarFieldEnum[]
  }

  /**
   * visitors create
   */
  export type visitorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visitors
     */
    select?: visitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visitors
     */
    omit?: visitorsOmit<ExtArgs> | null
    /**
     * The data needed to create a visitors.
     */
    data?: XOR<visitorsCreateInput, visitorsUncheckedCreateInput>
  }

  /**
   * visitors createMany
   */
  export type visitorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many visitors.
     */
    data: visitorsCreateManyInput | visitorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * visitors update
   */
  export type visitorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visitors
     */
    select?: visitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visitors
     */
    omit?: visitorsOmit<ExtArgs> | null
    /**
     * The data needed to update a visitors.
     */
    data: XOR<visitorsUpdateInput, visitorsUncheckedUpdateInput>
    /**
     * Choose, which visitors to update.
     */
    where: visitorsWhereUniqueInput
  }

  /**
   * visitors updateMany
   */
  export type visitorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update visitors.
     */
    data: XOR<visitorsUpdateManyMutationInput, visitorsUncheckedUpdateManyInput>
    /**
     * Filter which visitors to update
     */
    where?: visitorsWhereInput
    /**
     * Limit how many visitors to update.
     */
    limit?: number
  }

  /**
   * visitors upsert
   */
  export type visitorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visitors
     */
    select?: visitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visitors
     */
    omit?: visitorsOmit<ExtArgs> | null
    /**
     * The filter to search for the visitors to update in case it exists.
     */
    where: visitorsWhereUniqueInput
    /**
     * In case the visitors found by the `where` argument doesn't exist, create a new visitors with this data.
     */
    create: XOR<visitorsCreateInput, visitorsUncheckedCreateInput>
    /**
     * In case the visitors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<visitorsUpdateInput, visitorsUncheckedUpdateInput>
  }

  /**
   * visitors delete
   */
  export type visitorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visitors
     */
    select?: visitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visitors
     */
    omit?: visitorsOmit<ExtArgs> | null
    /**
     * Filter which visitors to delete.
     */
    where: visitorsWhereUniqueInput
  }

  /**
   * visitors deleteMany
   */
  export type visitorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which visitors to delete
     */
    where?: visitorsWhereInput
    /**
     * Limit how many visitors to delete.
     */
    limit?: number
  }

  /**
   * visitors without action
   */
  export type visitorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the visitors
     */
    select?: visitorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the visitors
     */
    omit?: visitorsOmit<ExtArgs> | null
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


  export const Help_requestScalarFieldEnum: {
    help_id: 'help_id',
    description: 'description',
    latitude: 'latitude',
    longitude: 'longitude',
    seeker_id: 'seeker_id',
    timestamp: 'timestamp',
    title: 'title'
  };

  export type Help_requestScalarFieldEnum = (typeof Help_requestScalarFieldEnum)[keyof typeof Help_requestScalarFieldEnum]


  export const OwnersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    mobile: 'mobile',
    email: 'email',
    address: 'address',
    password: 'password'
  };

  export type OwnersScalarFieldEnum = (typeof OwnersScalarFieldEnum)[keyof typeof OwnersScalarFieldEnum]


  export const VisitorsScalarFieldEnum: {
    id: 'id',
    owner_id: 'owner_id',
    image: 'image',
    reason: 'reason',
    date: 'date'
  };

  export type VisitorsScalarFieldEnum = (typeof VisitorsScalarFieldEnum)[keyof typeof VisitorsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const help_requestOrderByRelevanceFieldEnum: {
    description: 'description',
    title: 'title'
  };

  export type help_requestOrderByRelevanceFieldEnum = (typeof help_requestOrderByRelevanceFieldEnum)[keyof typeof help_requestOrderByRelevanceFieldEnum]


  export const ownersOrderByRelevanceFieldEnum: {
    name: 'name',
    mobile: 'mobile',
    email: 'email',
    address: 'address',
    password: 'password'
  };

  export type ownersOrderByRelevanceFieldEnum = (typeof ownersOrderByRelevanceFieldEnum)[keyof typeof ownersOrderByRelevanceFieldEnum]


  export const visitorsOrderByRelevanceFieldEnum: {
    owner_id: 'owner_id',
    image: 'image',
    reason: 'reason',
    date: 'date'
  };

  export type visitorsOrderByRelevanceFieldEnum = (typeof visitorsOrderByRelevanceFieldEnum)[keyof typeof visitorsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type help_requestWhereInput = {
    AND?: help_requestWhereInput | help_requestWhereInput[]
    OR?: help_requestWhereInput[]
    NOT?: help_requestWhereInput | help_requestWhereInput[]
    help_id?: BigIntFilter<"help_request"> | bigint | number
    description?: StringNullableFilter<"help_request"> | string | null
    latitude?: FloatFilter<"help_request"> | number
    longitude?: FloatFilter<"help_request"> | number
    seeker_id?: IntFilter<"help_request"> | number
    timestamp?: DateTimeNullableFilter<"help_request"> | Date | string | null
    title?: StringNullableFilter<"help_request"> | string | null
  }

  export type help_requestOrderByWithRelationInput = {
    help_id?: SortOrder
    description?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    seeker_id?: SortOrder
    timestamp?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    _relevance?: help_requestOrderByRelevanceInput
  }

  export type help_requestWhereUniqueInput = Prisma.AtLeast<{
    help_id?: bigint | number
    AND?: help_requestWhereInput | help_requestWhereInput[]
    OR?: help_requestWhereInput[]
    NOT?: help_requestWhereInput | help_requestWhereInput[]
    description?: StringNullableFilter<"help_request"> | string | null
    latitude?: FloatFilter<"help_request"> | number
    longitude?: FloatFilter<"help_request"> | number
    seeker_id?: IntFilter<"help_request"> | number
    timestamp?: DateTimeNullableFilter<"help_request"> | Date | string | null
    title?: StringNullableFilter<"help_request"> | string | null
  }, "help_id">

  export type help_requestOrderByWithAggregationInput = {
    help_id?: SortOrder
    description?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    seeker_id?: SortOrder
    timestamp?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    _count?: help_requestCountOrderByAggregateInput
    _avg?: help_requestAvgOrderByAggregateInput
    _max?: help_requestMaxOrderByAggregateInput
    _min?: help_requestMinOrderByAggregateInput
    _sum?: help_requestSumOrderByAggregateInput
  }

  export type help_requestScalarWhereWithAggregatesInput = {
    AND?: help_requestScalarWhereWithAggregatesInput | help_requestScalarWhereWithAggregatesInput[]
    OR?: help_requestScalarWhereWithAggregatesInput[]
    NOT?: help_requestScalarWhereWithAggregatesInput | help_requestScalarWhereWithAggregatesInput[]
    help_id?: BigIntWithAggregatesFilter<"help_request"> | bigint | number
    description?: StringNullableWithAggregatesFilter<"help_request"> | string | null
    latitude?: FloatWithAggregatesFilter<"help_request"> | number
    longitude?: FloatWithAggregatesFilter<"help_request"> | number
    seeker_id?: IntWithAggregatesFilter<"help_request"> | number
    timestamp?: DateTimeNullableWithAggregatesFilter<"help_request"> | Date | string | null
    title?: StringNullableWithAggregatesFilter<"help_request"> | string | null
  }

  export type ownersWhereInput = {
    AND?: ownersWhereInput | ownersWhereInput[]
    OR?: ownersWhereInput[]
    NOT?: ownersWhereInput | ownersWhereInput[]
    id?: BigIntFilter<"owners"> | bigint | number
    name?: StringNullableFilter<"owners"> | string | null
    mobile?: StringNullableFilter<"owners"> | string | null
    email?: StringFilter<"owners"> | string
    address?: StringNullableFilter<"owners"> | string | null
    password?: StringNullableFilter<"owners"> | string | null
  }

  export type ownersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    email?: SortOrder
    address?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    _relevance?: ownersOrderByRelevanceInput
  }

  export type ownersWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ownersWhereInput | ownersWhereInput[]
    OR?: ownersWhereInput[]
    NOT?: ownersWhereInput | ownersWhereInput[]
    name?: StringNullableFilter<"owners"> | string | null
    mobile?: StringNullableFilter<"owners"> | string | null
    email?: StringFilter<"owners"> | string
    address?: StringNullableFilter<"owners"> | string | null
    password?: StringNullableFilter<"owners"> | string | null
  }, "id" | "id">

  export type ownersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    email?: SortOrder
    address?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    _count?: ownersCountOrderByAggregateInput
    _avg?: ownersAvgOrderByAggregateInput
    _max?: ownersMaxOrderByAggregateInput
    _min?: ownersMinOrderByAggregateInput
    _sum?: ownersSumOrderByAggregateInput
  }

  export type ownersScalarWhereWithAggregatesInput = {
    AND?: ownersScalarWhereWithAggregatesInput | ownersScalarWhereWithAggregatesInput[]
    OR?: ownersScalarWhereWithAggregatesInput[]
    NOT?: ownersScalarWhereWithAggregatesInput | ownersScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"owners"> | bigint | number
    name?: StringNullableWithAggregatesFilter<"owners"> | string | null
    mobile?: StringNullableWithAggregatesFilter<"owners"> | string | null
    email?: StringWithAggregatesFilter<"owners"> | string
    address?: StringNullableWithAggregatesFilter<"owners"> | string | null
    password?: StringNullableWithAggregatesFilter<"owners"> | string | null
  }

  export type visitorsWhereInput = {
    AND?: visitorsWhereInput | visitorsWhereInput[]
    OR?: visitorsWhereInput[]
    NOT?: visitorsWhereInput | visitorsWhereInput[]
    id?: BigIntFilter<"visitors"> | bigint | number
    owner_id?: StringNullableFilter<"visitors"> | string | null
    image?: StringNullableFilter<"visitors"> | string | null
    reason?: StringNullableFilter<"visitors"> | string | null
    date?: StringNullableFilter<"visitors"> | string | null
  }

  export type visitorsOrderByWithRelationInput = {
    id?: SortOrder
    owner_id?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    _relevance?: visitorsOrderByRelevanceInput
  }

  export type visitorsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: visitorsWhereInput | visitorsWhereInput[]
    OR?: visitorsWhereInput[]
    NOT?: visitorsWhereInput | visitorsWhereInput[]
    owner_id?: StringNullableFilter<"visitors"> | string | null
    image?: StringNullableFilter<"visitors"> | string | null
    reason?: StringNullableFilter<"visitors"> | string | null
    date?: StringNullableFilter<"visitors"> | string | null
  }, "id" | "id">

  export type visitorsOrderByWithAggregationInput = {
    id?: SortOrder
    owner_id?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    _count?: visitorsCountOrderByAggregateInput
    _avg?: visitorsAvgOrderByAggregateInput
    _max?: visitorsMaxOrderByAggregateInput
    _min?: visitorsMinOrderByAggregateInput
    _sum?: visitorsSumOrderByAggregateInput
  }

  export type visitorsScalarWhereWithAggregatesInput = {
    AND?: visitorsScalarWhereWithAggregatesInput | visitorsScalarWhereWithAggregatesInput[]
    OR?: visitorsScalarWhereWithAggregatesInput[]
    NOT?: visitorsScalarWhereWithAggregatesInput | visitorsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"visitors"> | bigint | number
    owner_id?: StringNullableWithAggregatesFilter<"visitors"> | string | null
    image?: StringNullableWithAggregatesFilter<"visitors"> | string | null
    reason?: StringNullableWithAggregatesFilter<"visitors"> | string | null
    date?: StringNullableWithAggregatesFilter<"visitors"> | string | null
  }

  export type help_requestCreateInput = {
    help_id?: bigint | number
    description?: string | null
    latitude: number
    longitude: number
    seeker_id: number
    timestamp?: Date | string | null
    title?: string | null
  }

  export type help_requestUncheckedCreateInput = {
    help_id?: bigint | number
    description?: string | null
    latitude: number
    longitude: number
    seeker_id: number
    timestamp?: Date | string | null
    title?: string | null
  }

  export type help_requestUpdateInput = {
    help_id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    seeker_id?: IntFieldUpdateOperationsInput | number
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type help_requestUncheckedUpdateInput = {
    help_id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    seeker_id?: IntFieldUpdateOperationsInput | number
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type help_requestCreateManyInput = {
    help_id?: bigint | number
    description?: string | null
    latitude: number
    longitude: number
    seeker_id: number
    timestamp?: Date | string | null
    title?: string | null
  }

  export type help_requestUpdateManyMutationInput = {
    help_id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    seeker_id?: IntFieldUpdateOperationsInput | number
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type help_requestUncheckedUpdateManyInput = {
    help_id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    seeker_id?: IntFieldUpdateOperationsInput | number
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ownersCreateInput = {
    id?: bigint | number
    name?: string | null
    mobile?: string | null
    email: string
    address?: string | null
    password?: string | null
  }

  export type ownersUncheckedCreateInput = {
    id?: bigint | number
    name?: string | null
    mobile?: string | null
    email: string
    address?: string | null
    password?: string | null
  }

  export type ownersUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ownersUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ownersCreateManyInput = {
    id?: bigint | number
    name?: string | null
    mobile?: string | null
    email: string
    address?: string | null
    password?: string | null
  }

  export type ownersUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ownersUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type visitorsCreateInput = {
    id?: bigint | number
    owner_id?: string | null
    image?: string | null
    reason?: string | null
    date?: string | null
  }

  export type visitorsUncheckedCreateInput = {
    id?: bigint | number
    owner_id?: string | null
    image?: string | null
    reason?: string | null
    date?: string | null
  }

  export type visitorsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner_id?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type visitorsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner_id?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type visitorsCreateManyInput = {
    id?: bigint | number
    owner_id?: string | null
    image?: string | null
    reason?: string | null
    date?: string | null
  }

  export type visitorsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner_id?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type visitorsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    owner_id?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type help_requestOrderByRelevanceInput = {
    fields: help_requestOrderByRelevanceFieldEnum | help_requestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type help_requestCountOrderByAggregateInput = {
    help_id?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    seeker_id?: SortOrder
    timestamp?: SortOrder
    title?: SortOrder
  }

  export type help_requestAvgOrderByAggregateInput = {
    help_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    seeker_id?: SortOrder
  }

  export type help_requestMaxOrderByAggregateInput = {
    help_id?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    seeker_id?: SortOrder
    timestamp?: SortOrder
    title?: SortOrder
  }

  export type help_requestMinOrderByAggregateInput = {
    help_id?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    seeker_id?: SortOrder
    timestamp?: SortOrder
    title?: SortOrder
  }

  export type help_requestSumOrderByAggregateInput = {
    help_id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    seeker_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ownersOrderByRelevanceInput = {
    fields: ownersOrderByRelevanceFieldEnum | ownersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ownersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    address?: SortOrder
    password?: SortOrder
  }

  export type ownersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ownersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    address?: SortOrder
    password?: SortOrder
  }

  export type ownersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    address?: SortOrder
    password?: SortOrder
  }

  export type ownersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type visitorsOrderByRelevanceInput = {
    fields: visitorsOrderByRelevanceFieldEnum | visitorsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type visitorsCountOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    image?: SortOrder
    reason?: SortOrder
    date?: SortOrder
  }

  export type visitorsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type visitorsMaxOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    image?: SortOrder
    reason?: SortOrder
    date?: SortOrder
  }

  export type visitorsMinOrderByAggregateInput = {
    id?: SortOrder
    owner_id?: SortOrder
    image?: SortOrder
    reason?: SortOrder
    date?: SortOrder
  }

  export type visitorsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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