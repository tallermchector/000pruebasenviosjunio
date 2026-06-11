
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model SocialPost
 * 
 */
export type SocialPost = $Result.DefaultSelection<Prisma.$SocialPostPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Repartidor
 * 
 */
export type Repartidor = $Result.DefaultSelection<Prisma.$RepartidorPayload>
/**
 * Model PriceRange
 * 
 */
export type PriceRange = $Result.DefaultSelection<Prisma.$PriceRangePayload>
/**
 * Model Etiqueta
 * 
 */
export type Etiqueta = $Result.DefaultSelection<Prisma.$EtiquetaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const EtiquetaStatus: {
  PENDIENTE: 'PENDIENTE',
  IMPRESA: 'IMPRESA',
  EN_CAMINO: 'EN_CAMINO',
  ENTREGADA: 'ENTREGADA',
  NO_ENTREGADA: 'NO_ENTREGADA'
};

export type EtiquetaStatus = (typeof EtiquetaStatus)[keyof typeof EtiquetaStatus]


export const SocialPlatformEnum: {
  facebook: 'facebook',
  instagram: 'instagram',
  whatsapp: 'whatsapp'
};

export type SocialPlatformEnum = (typeof SocialPlatformEnum)[keyof typeof SocialPlatformEnum]


export const OrderStatusEnum: {
  PENDIENTE: 'PENDIENTE',
  EN_CURSO: 'EN_CURSO',
  ENTREGADO: 'ENTREGADO',
  CANCELADO: 'CANCELADO'
};

export type OrderStatusEnum = (typeof OrderStatusEnum)[keyof typeof OrderStatusEnum]


export const ServiceTypeEnum: {
  EXPRESS: 'EXPRESS',
  LOW_COST: 'LOW_COST',
  PUNTO_DE_RETIRO: 'PUNTO_DE_RETIRO'
};

export type ServiceTypeEnum = (typeof ServiceTypeEnum)[keyof typeof ServiceTypeEnum]

}

export type EtiquetaStatus = $Enums.EtiquetaStatus

export const EtiquetaStatus: typeof $Enums.EtiquetaStatus

export type SocialPlatformEnum = $Enums.SocialPlatformEnum

export const SocialPlatformEnum: typeof $Enums.SocialPlatformEnum

export type OrderStatusEnum = $Enums.OrderStatusEnum

export const OrderStatusEnum: typeof $Enums.OrderStatusEnum

export type ServiceTypeEnum = $Enums.ServiceTypeEnum

export const ServiceTypeEnum: typeof $Enums.ServiceTypeEnum

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more SocialPosts
 * const socialPosts = await prisma.socialPost.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more SocialPosts
   * const socialPosts = await prisma.socialPost.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.socialPost`: Exposes CRUD operations for the **SocialPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialPosts
    * const socialPosts = await prisma.socialPost.findMany()
    * ```
    */
  get socialPost(): Prisma.SocialPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repartidor`: Exposes CRUD operations for the **Repartidor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Repartidors
    * const repartidors = await prisma.repartidor.findMany()
    * ```
    */
  get repartidor(): Prisma.RepartidorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.priceRange`: Exposes CRUD operations for the **PriceRange** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceRanges
    * const priceRanges = await prisma.priceRange.findMany()
    * ```
    */
  get priceRange(): Prisma.PriceRangeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.etiqueta`: Exposes CRUD operations for the **Etiqueta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Etiquetas
    * const etiquetas = await prisma.etiqueta.findMany()
    * ```
    */
  get etiqueta(): Prisma.EtiquetaDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    SocialPost: 'SocialPost',
    Client: 'Client',
    Order: 'Order',
    Repartidor: 'Repartidor',
    PriceRange: 'PriceRange',
    Etiqueta: 'Etiqueta'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "socialPost" | "client" | "order" | "repartidor" | "priceRange" | "etiqueta"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SocialPost: {
        payload: Prisma.$SocialPostPayload<ExtArgs>
        fields: Prisma.SocialPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>
          }
          findFirst: {
            args: Prisma.SocialPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>
          }
          findMany: {
            args: Prisma.SocialPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>[]
          }
          create: {
            args: Prisma.SocialPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>
          }
          createMany: {
            args: Prisma.SocialPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>[]
          }
          delete: {
            args: Prisma.SocialPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>
          }
          update: {
            args: Prisma.SocialPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>
          }
          deleteMany: {
            args: Prisma.SocialPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>[]
          }
          upsert: {
            args: Prisma.SocialPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPostPayload>
          }
          aggregate: {
            args: Prisma.SocialPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialPost>
          }
          groupBy: {
            args: Prisma.SocialPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialPostCountArgs<ExtArgs>
            result: $Utils.Optional<SocialPostCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Repartidor: {
        payload: Prisma.$RepartidorPayload<ExtArgs>
        fields: Prisma.RepartidorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepartidorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepartidorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload>
          }
          findFirst: {
            args: Prisma.RepartidorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepartidorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload>
          }
          findMany: {
            args: Prisma.RepartidorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload>[]
          }
          create: {
            args: Prisma.RepartidorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload>
          }
          createMany: {
            args: Prisma.RepartidorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepartidorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload>[]
          }
          delete: {
            args: Prisma.RepartidorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload>
          }
          update: {
            args: Prisma.RepartidorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload>
          }
          deleteMany: {
            args: Prisma.RepartidorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepartidorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RepartidorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload>[]
          }
          upsert: {
            args: Prisma.RepartidorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepartidorPayload>
          }
          aggregate: {
            args: Prisma.RepartidorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepartidor>
          }
          groupBy: {
            args: Prisma.RepartidorGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepartidorGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepartidorCountArgs<ExtArgs>
            result: $Utils.Optional<RepartidorCountAggregateOutputType> | number
          }
        }
      }
      PriceRange: {
        payload: Prisma.$PriceRangePayload<ExtArgs>
        fields: Prisma.PriceRangeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceRangeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRangePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceRangeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRangePayload>
          }
          findFirst: {
            args: Prisma.PriceRangeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRangePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceRangeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRangePayload>
          }
          findMany: {
            args: Prisma.PriceRangeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRangePayload>[]
          }
          create: {
            args: Prisma.PriceRangeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRangePayload>
          }
          createMany: {
            args: Prisma.PriceRangeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceRangeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRangePayload>[]
          }
          delete: {
            args: Prisma.PriceRangeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRangePayload>
          }
          update: {
            args: Prisma.PriceRangeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRangePayload>
          }
          deleteMany: {
            args: Prisma.PriceRangeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceRangeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PriceRangeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRangePayload>[]
          }
          upsert: {
            args: Prisma.PriceRangeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceRangePayload>
          }
          aggregate: {
            args: Prisma.PriceRangeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriceRange>
          }
          groupBy: {
            args: Prisma.PriceRangeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceRangeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceRangeCountArgs<ExtArgs>
            result: $Utils.Optional<PriceRangeCountAggregateOutputType> | number
          }
        }
      }
      Etiqueta: {
        payload: Prisma.$EtiquetaPayload<ExtArgs>
        fields: Prisma.EtiquetaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EtiquetaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EtiquetaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>
          }
          findFirst: {
            args: Prisma.EtiquetaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EtiquetaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>
          }
          findMany: {
            args: Prisma.EtiquetaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>[]
          }
          create: {
            args: Prisma.EtiquetaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>
          }
          createMany: {
            args: Prisma.EtiquetaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EtiquetaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>[]
          }
          delete: {
            args: Prisma.EtiquetaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>
          }
          update: {
            args: Prisma.EtiquetaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>
          }
          deleteMany: {
            args: Prisma.EtiquetaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EtiquetaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EtiquetaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>[]
          }
          upsert: {
            args: Prisma.EtiquetaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EtiquetaPayload>
          }
          aggregate: {
            args: Prisma.EtiquetaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEtiqueta>
          }
          groupBy: {
            args: Prisma.EtiquetaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EtiquetaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EtiquetaCountArgs<ExtArgs>
            result: $Utils.Optional<EtiquetaCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    socialPost?: SocialPostOmit
    client?: ClientOmit
    order?: OrderOmit
    repartidor?: RepartidorOmit
    priceRange?: PriceRangeOmit
    etiqueta?: EtiquetaOmit
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
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    orders: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ClientCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type RepartidorCountOutputType
   */

  export type RepartidorCountOutputType = {
    orders: number
    etiquetas: number
  }

  export type RepartidorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | RepartidorCountOutputTypeCountOrdersArgs
    etiquetas?: boolean | RepartidorCountOutputTypeCountEtiquetasArgs
  }

  // Custom InputTypes
  /**
   * RepartidorCountOutputType without action
   */
  export type RepartidorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepartidorCountOutputType
     */
    select?: RepartidorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RepartidorCountOutputType without action
   */
  export type RepartidorCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * RepartidorCountOutputType without action
   */
  export type RepartidorCountOutputTypeCountEtiquetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtiquetaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model SocialPost
   */

  export type AggregateSocialPost = {
    _count: SocialPostCountAggregateOutputType | null
    _avg: SocialPostAvgAggregateOutputType | null
    _sum: SocialPostSumAggregateOutputType | null
    _min: SocialPostMinAggregateOutputType | null
    _max: SocialPostMaxAggregateOutputType | null
  }

  export type SocialPostAvgAggregateOutputType = {
    id: number | null
    likes: number | null
    comments: number | null
    shares: number | null
  }

  export type SocialPostSumAggregateOutputType = {
    id: number | null
    likes: number | null
    comments: number | null
    shares: number | null
  }

  export type SocialPostMinAggregateOutputType = {
    id: number | null
    platform: $Enums.SocialPlatformEnum | null
    userName: string | null
    userAvatar: string | null
    userUrl: string | null
    content: string | null
    postUrl: string | null
    imageUrl: string | null
    imageHint: string | null
    likes: number | null
    comments: number | null
    shares: number | null
    timestamp: Date | null
  }

  export type SocialPostMaxAggregateOutputType = {
    id: number | null
    platform: $Enums.SocialPlatformEnum | null
    userName: string | null
    userAvatar: string | null
    userUrl: string | null
    content: string | null
    postUrl: string | null
    imageUrl: string | null
    imageHint: string | null
    likes: number | null
    comments: number | null
    shares: number | null
    timestamp: Date | null
  }

  export type SocialPostCountAggregateOutputType = {
    id: number
    platform: number
    userName: number
    userAvatar: number
    userUrl: number
    content: number
    postUrl: number
    imageUrl: number
    imageHint: number
    likes: number
    comments: number
    shares: number
    timestamp: number
    _all: number
  }


  export type SocialPostAvgAggregateInputType = {
    id?: true
    likes?: true
    comments?: true
    shares?: true
  }

  export type SocialPostSumAggregateInputType = {
    id?: true
    likes?: true
    comments?: true
    shares?: true
  }

  export type SocialPostMinAggregateInputType = {
    id?: true
    platform?: true
    userName?: true
    userAvatar?: true
    userUrl?: true
    content?: true
    postUrl?: true
    imageUrl?: true
    imageHint?: true
    likes?: true
    comments?: true
    shares?: true
    timestamp?: true
  }

  export type SocialPostMaxAggregateInputType = {
    id?: true
    platform?: true
    userName?: true
    userAvatar?: true
    userUrl?: true
    content?: true
    postUrl?: true
    imageUrl?: true
    imageHint?: true
    likes?: true
    comments?: true
    shares?: true
    timestamp?: true
  }

  export type SocialPostCountAggregateInputType = {
    id?: true
    platform?: true
    userName?: true
    userAvatar?: true
    userUrl?: true
    content?: true
    postUrl?: true
    imageUrl?: true
    imageHint?: true
    likes?: true
    comments?: true
    shares?: true
    timestamp?: true
    _all?: true
  }

  export type SocialPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialPost to aggregate.
     */
    where?: SocialPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialPosts to fetch.
     */
    orderBy?: SocialPostOrderByWithRelationInput | SocialPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialPosts
    **/
    _count?: true | SocialPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocialPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocialPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialPostMaxAggregateInputType
  }

  export type GetSocialPostAggregateType<T extends SocialPostAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialPost[P]>
      : GetScalarType<T[P], AggregateSocialPost[P]>
  }




  export type SocialPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialPostWhereInput
    orderBy?: SocialPostOrderByWithAggregationInput | SocialPostOrderByWithAggregationInput[]
    by: SocialPostScalarFieldEnum[] | SocialPostScalarFieldEnum
    having?: SocialPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialPostCountAggregateInputType | true
    _avg?: SocialPostAvgAggregateInputType
    _sum?: SocialPostSumAggregateInputType
    _min?: SocialPostMinAggregateInputType
    _max?: SocialPostMaxAggregateInputType
  }

  export type SocialPostGroupByOutputType = {
    id: number
    platform: $Enums.SocialPlatformEnum
    userName: string
    userAvatar: string | null
    userUrl: string | null
    content: string
    postUrl: string
    imageUrl: string | null
    imageHint: string | null
    likes: number | null
    comments: number | null
    shares: number | null
    timestamp: Date
    _count: SocialPostCountAggregateOutputType | null
    _avg: SocialPostAvgAggregateOutputType | null
    _sum: SocialPostSumAggregateOutputType | null
    _min: SocialPostMinAggregateOutputType | null
    _max: SocialPostMaxAggregateOutputType | null
  }

  type GetSocialPostGroupByPayload<T extends SocialPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialPostGroupByOutputType[P]>
            : GetScalarType<T[P], SocialPostGroupByOutputType[P]>
        }
      >
    >


  export type SocialPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    userName?: boolean
    userAvatar?: boolean
    userUrl?: boolean
    content?: boolean
    postUrl?: boolean
    imageUrl?: boolean
    imageHint?: boolean
    likes?: boolean
    comments?: boolean
    shares?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["socialPost"]>

  export type SocialPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    userName?: boolean
    userAvatar?: boolean
    userUrl?: boolean
    content?: boolean
    postUrl?: boolean
    imageUrl?: boolean
    imageHint?: boolean
    likes?: boolean
    comments?: boolean
    shares?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["socialPost"]>

  export type SocialPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    userName?: boolean
    userAvatar?: boolean
    userUrl?: boolean
    content?: boolean
    postUrl?: boolean
    imageUrl?: boolean
    imageHint?: boolean
    likes?: boolean
    comments?: boolean
    shares?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["socialPost"]>

  export type SocialPostSelectScalar = {
    id?: boolean
    platform?: boolean
    userName?: boolean
    userAvatar?: boolean
    userUrl?: boolean
    content?: boolean
    postUrl?: boolean
    imageUrl?: boolean
    imageHint?: boolean
    likes?: boolean
    comments?: boolean
    shares?: boolean
    timestamp?: boolean
  }

  export type SocialPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "platform" | "userName" | "userAvatar" | "userUrl" | "content" | "postUrl" | "imageUrl" | "imageHint" | "likes" | "comments" | "shares" | "timestamp", ExtArgs["result"]["socialPost"]>

  export type $SocialPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialPost"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      platform: $Enums.SocialPlatformEnum
      userName: string
      userAvatar: string | null
      userUrl: string | null
      content: string
      postUrl: string
      imageUrl: string | null
      imageHint: string | null
      likes: number | null
      comments: number | null
      shares: number | null
      timestamp: Date
    }, ExtArgs["result"]["socialPost"]>
    composites: {}
  }

  type SocialPostGetPayload<S extends boolean | null | undefined | SocialPostDefaultArgs> = $Result.GetResult<Prisma.$SocialPostPayload, S>

  type SocialPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialPostCountAggregateInputType | true
    }

  export interface SocialPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialPost'], meta: { name: 'SocialPost' } }
    /**
     * Find zero or one SocialPost that matches the filter.
     * @param {SocialPostFindUniqueArgs} args - Arguments to find a SocialPost
     * @example
     * // Get one SocialPost
     * const socialPost = await prisma.socialPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialPostFindUniqueArgs>(args: SelectSubset<T, SocialPostFindUniqueArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialPostFindUniqueOrThrowArgs} args - Arguments to find a SocialPost
     * @example
     * // Get one SocialPost
     * const socialPost = await prisma.socialPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialPostFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostFindFirstArgs} args - Arguments to find a SocialPost
     * @example
     * // Get one SocialPost
     * const socialPost = await prisma.socialPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialPostFindFirstArgs>(args?: SelectSubset<T, SocialPostFindFirstArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostFindFirstOrThrowArgs} args - Arguments to find a SocialPost
     * @example
     * // Get one SocialPost
     * const socialPost = await prisma.socialPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialPostFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialPosts
     * const socialPosts = await prisma.socialPost.findMany()
     * 
     * // Get first 10 SocialPosts
     * const socialPosts = await prisma.socialPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialPostWithIdOnly = await prisma.socialPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialPostFindManyArgs>(args?: SelectSubset<T, SocialPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialPost.
     * @param {SocialPostCreateArgs} args - Arguments to create a SocialPost.
     * @example
     * // Create one SocialPost
     * const SocialPost = await prisma.socialPost.create({
     *   data: {
     *     // ... data to create a SocialPost
     *   }
     * })
     * 
     */
    create<T extends SocialPostCreateArgs>(args: SelectSubset<T, SocialPostCreateArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialPosts.
     * @param {SocialPostCreateManyArgs} args - Arguments to create many SocialPosts.
     * @example
     * // Create many SocialPosts
     * const socialPost = await prisma.socialPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialPostCreateManyArgs>(args?: SelectSubset<T, SocialPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialPosts and returns the data saved in the database.
     * @param {SocialPostCreateManyAndReturnArgs} args - Arguments to create many SocialPosts.
     * @example
     * // Create many SocialPosts
     * const socialPost = await prisma.socialPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialPosts and only return the `id`
     * const socialPostWithIdOnly = await prisma.socialPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialPostCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialPost.
     * @param {SocialPostDeleteArgs} args - Arguments to delete one SocialPost.
     * @example
     * // Delete one SocialPost
     * const SocialPost = await prisma.socialPost.delete({
     *   where: {
     *     // ... filter to delete one SocialPost
     *   }
     * })
     * 
     */
    delete<T extends SocialPostDeleteArgs>(args: SelectSubset<T, SocialPostDeleteArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialPost.
     * @param {SocialPostUpdateArgs} args - Arguments to update one SocialPost.
     * @example
     * // Update one SocialPost
     * const socialPost = await prisma.socialPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialPostUpdateArgs>(args: SelectSubset<T, SocialPostUpdateArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialPosts.
     * @param {SocialPostDeleteManyArgs} args - Arguments to filter SocialPosts to delete.
     * @example
     * // Delete a few SocialPosts
     * const { count } = await prisma.socialPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialPostDeleteManyArgs>(args?: SelectSubset<T, SocialPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialPosts
     * const socialPost = await prisma.socialPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialPostUpdateManyArgs>(args: SelectSubset<T, SocialPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialPosts and returns the data updated in the database.
     * @param {SocialPostUpdateManyAndReturnArgs} args - Arguments to update many SocialPosts.
     * @example
     * // Update many SocialPosts
     * const socialPost = await prisma.socialPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialPosts and only return the `id`
     * const socialPostWithIdOnly = await prisma.socialPost.updateManyAndReturn({
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
    updateManyAndReturn<T extends SocialPostUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialPost.
     * @param {SocialPostUpsertArgs} args - Arguments to update or create a SocialPost.
     * @example
     * // Update or create a SocialPost
     * const socialPost = await prisma.socialPost.upsert({
     *   create: {
     *     // ... data to create a SocialPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialPost we want to update
     *   }
     * })
     */
    upsert<T extends SocialPostUpsertArgs>(args: SelectSubset<T, SocialPostUpsertArgs<ExtArgs>>): Prisma__SocialPostClient<$Result.GetResult<Prisma.$SocialPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostCountArgs} args - Arguments to filter SocialPosts to count.
     * @example
     * // Count the number of SocialPosts
     * const count = await prisma.socialPost.count({
     *   where: {
     *     // ... the filter for the SocialPosts we want to count
     *   }
     * })
    **/
    count<T extends SocialPostCountArgs>(
      args?: Subset<T, SocialPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialPostAggregateArgs>(args: Subset<T, SocialPostAggregateArgs>): Prisma.PrismaPromise<GetSocialPostAggregateType<T>>

    /**
     * Group by SocialPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialPostGroupByArgs} args - Group by arguments.
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
      T extends SocialPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialPostGroupByArgs['orderBy'] }
        : { orderBy?: SocialPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialPost model
   */
  readonly fields: SocialPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SocialPost model
   */
  interface SocialPostFieldRefs {
    readonly id: FieldRef<"SocialPost", 'Int'>
    readonly platform: FieldRef<"SocialPost", 'SocialPlatformEnum'>
    readonly userName: FieldRef<"SocialPost", 'String'>
    readonly userAvatar: FieldRef<"SocialPost", 'String'>
    readonly userUrl: FieldRef<"SocialPost", 'String'>
    readonly content: FieldRef<"SocialPost", 'String'>
    readonly postUrl: FieldRef<"SocialPost", 'String'>
    readonly imageUrl: FieldRef<"SocialPost", 'String'>
    readonly imageHint: FieldRef<"SocialPost", 'String'>
    readonly likes: FieldRef<"SocialPost", 'Int'>
    readonly comments: FieldRef<"SocialPost", 'Int'>
    readonly shares: FieldRef<"SocialPost", 'Int'>
    readonly timestamp: FieldRef<"SocialPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SocialPost findUnique
   */
  export type SocialPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Filter, which SocialPost to fetch.
     */
    where: SocialPostWhereUniqueInput
  }

  /**
   * SocialPost findUniqueOrThrow
   */
  export type SocialPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Filter, which SocialPost to fetch.
     */
    where: SocialPostWhereUniqueInput
  }

  /**
   * SocialPost findFirst
   */
  export type SocialPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Filter, which SocialPost to fetch.
     */
    where?: SocialPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialPosts to fetch.
     */
    orderBy?: SocialPostOrderByWithRelationInput | SocialPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialPosts.
     */
    cursor?: SocialPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialPosts.
     */
    distinct?: SocialPostScalarFieldEnum | SocialPostScalarFieldEnum[]
  }

  /**
   * SocialPost findFirstOrThrow
   */
  export type SocialPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Filter, which SocialPost to fetch.
     */
    where?: SocialPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialPosts to fetch.
     */
    orderBy?: SocialPostOrderByWithRelationInput | SocialPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialPosts.
     */
    cursor?: SocialPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialPosts.
     */
    distinct?: SocialPostScalarFieldEnum | SocialPostScalarFieldEnum[]
  }

  /**
   * SocialPost findMany
   */
  export type SocialPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Filter, which SocialPosts to fetch.
     */
    where?: SocialPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialPosts to fetch.
     */
    orderBy?: SocialPostOrderByWithRelationInput | SocialPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialPosts.
     */
    cursor?: SocialPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialPosts.
     */
    distinct?: SocialPostScalarFieldEnum | SocialPostScalarFieldEnum[]
  }

  /**
   * SocialPost create
   */
  export type SocialPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * The data needed to create a SocialPost.
     */
    data: XOR<SocialPostCreateInput, SocialPostUncheckedCreateInput>
  }

  /**
   * SocialPost createMany
   */
  export type SocialPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialPosts.
     */
    data: SocialPostCreateManyInput | SocialPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialPost createManyAndReturn
   */
  export type SocialPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * The data used to create many SocialPosts.
     */
    data: SocialPostCreateManyInput | SocialPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialPost update
   */
  export type SocialPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * The data needed to update a SocialPost.
     */
    data: XOR<SocialPostUpdateInput, SocialPostUncheckedUpdateInput>
    /**
     * Choose, which SocialPost to update.
     */
    where: SocialPostWhereUniqueInput
  }

  /**
   * SocialPost updateMany
   */
  export type SocialPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialPosts.
     */
    data: XOR<SocialPostUpdateManyMutationInput, SocialPostUncheckedUpdateManyInput>
    /**
     * Filter which SocialPosts to update
     */
    where?: SocialPostWhereInput
    /**
     * Limit how many SocialPosts to update.
     */
    limit?: number
  }

  /**
   * SocialPost updateManyAndReturn
   */
  export type SocialPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * The data used to update SocialPosts.
     */
    data: XOR<SocialPostUpdateManyMutationInput, SocialPostUncheckedUpdateManyInput>
    /**
     * Filter which SocialPosts to update
     */
    where?: SocialPostWhereInput
    /**
     * Limit how many SocialPosts to update.
     */
    limit?: number
  }

  /**
   * SocialPost upsert
   */
  export type SocialPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * The filter to search for the SocialPost to update in case it exists.
     */
    where: SocialPostWhereUniqueInput
    /**
     * In case the SocialPost found by the `where` argument doesn't exist, create a new SocialPost with this data.
     */
    create: XOR<SocialPostCreateInput, SocialPostUncheckedCreateInput>
    /**
     * In case the SocialPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialPostUpdateInput, SocialPostUncheckedUpdateInput>
  }

  /**
   * SocialPost delete
   */
  export type SocialPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
    /**
     * Filter which SocialPost to delete.
     */
    where: SocialPostWhereUniqueInput
  }

  /**
   * SocialPost deleteMany
   */
  export type SocialPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialPosts to delete
     */
    where?: SocialPostWhereInput
    /**
     * Limit how many SocialPosts to delete.
     */
    limit?: number
  }

  /**
   * SocialPost without action
   */
  export type SocialPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialPost
     */
    select?: SocialPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialPost
     */
    omit?: SocialPostOmit<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
    addressLat: Decimal | null
    addressLng: Decimal | null
  }

  export type ClientSumAggregateOutputType = {
    id: number | null
    addressLat: Decimal | null
    addressLng: Decimal | null
  }

  export type ClientMinAggregateOutputType = {
    id: number | null
    name: string | null
    lastName: string | null
    phone: string | null
    email: string | null
    address: string | null
    addressLat: Decimal | null
    addressLng: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: number | null
    name: string | null
    lastName: string | null
    phone: string | null
    email: string | null
    address: string | null
    addressLat: Decimal | null
    addressLng: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    lastName: number
    phone: number
    email: number
    address: number
    addressLat: number
    addressLng: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
    addressLat?: true
    addressLng?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
    addressLat?: true
    addressLng?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    phone?: true
    email?: true
    address?: true
    addressLat?: true
    addressLng?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    phone?: true
    email?: true
    address?: true
    addressLat?: true
    addressLng?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    phone?: true
    email?: true
    address?: true
    addressLat?: true
    addressLng?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: number
    name: string
    lastName: string | null
    phone: string | null
    email: string | null
    address: string
    addressLat: Decimal | null
    addressLng: Decimal | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    addressLat?: boolean
    addressLng?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | Client$ordersArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    addressLat?: boolean
    addressLng?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    addressLat?: boolean
    addressLng?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    lastName?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    addressLat?: boolean
    addressLng?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "lastName" | "phone" | "email" | "address" | "addressLat" | "addressLng" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Client$ordersArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      lastName: string | null
      phone: string | null
      email: string | null
      address: string
      addressLat: Prisma.Decimal | null
      addressLng: Prisma.Decimal | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Client$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Client$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'Int'>
    readonly name: FieldRef<"Client", 'String'>
    readonly lastName: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly address: FieldRef<"Client", 'String'>
    readonly addressLat: FieldRef<"Client", 'Decimal'>
    readonly addressLng: FieldRef<"Client", 'Decimal'>
    readonly isActive: FieldRef<"Client", 'Boolean'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.orders
   */
  export type Client$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
    repartidorId: number | null
    originLat: Decimal | null
    originLng: Decimal | null
    destinationLat: Decimal | null
    destinationLng: Decimal | null
    quotedPrice: Decimal | null
    shippingCost: Decimal | null
    totalCost: Decimal | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    clientId: number | null
    repartidorId: number | null
    originLat: Decimal | null
    originLng: Decimal | null
    destinationLat: Decimal | null
    destinationLng: Decimal | null
    quotedPrice: Decimal | null
    shippingCost: Decimal | null
    totalCost: Decimal | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    clientId: number | null
    repartidorId: number | null
    serviceType: $Enums.ServiceTypeEnum | null
    status: $Enums.OrderStatusEnum | null
    originFullName: string | null
    originPhone: string | null
    originAddress: string | null
    originLat: Decimal | null
    originLng: Decimal | null
    pickupStreetAddress: string | null
    destinationContactName: string | null
    destinationContactPhone: string | null
    destinationContactEmail: string | null
    destinationAddress: string | null
    destinationLat: Decimal | null
    destinationLng: Decimal | null
    deliveryAddress: string | null
    deliveryNotes: string | null
    pickupDate: Date | null
    pickupTimeFrom: string | null
    pickupTimeTo: string | null
    deliveryDate: Date | null
    deliveryTimeFrom: string | null
    deliveryTimeTo: string | null
    distanceText: string | null
    durationText: string | null
    quotedPrice: Decimal | null
    shippingCost: Decimal | null
    totalCost: Decimal | null
    clientNameAtOrder: string | null
    clientPhoneAtOrder: string | null
    createdAt: Date | null
    updatedAt: Date | null
    pickupDateTime: Date | null
    deliveryDateTime: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    clientId: number | null
    repartidorId: number | null
    serviceType: $Enums.ServiceTypeEnum | null
    status: $Enums.OrderStatusEnum | null
    originFullName: string | null
    originPhone: string | null
    originAddress: string | null
    originLat: Decimal | null
    originLng: Decimal | null
    pickupStreetAddress: string | null
    destinationContactName: string | null
    destinationContactPhone: string | null
    destinationContactEmail: string | null
    destinationAddress: string | null
    destinationLat: Decimal | null
    destinationLng: Decimal | null
    deliveryAddress: string | null
    deliveryNotes: string | null
    pickupDate: Date | null
    pickupTimeFrom: string | null
    pickupTimeTo: string | null
    deliveryDate: Date | null
    deliveryTimeFrom: string | null
    deliveryTimeTo: string | null
    distanceText: string | null
    durationText: string | null
    quotedPrice: Decimal | null
    shippingCost: Decimal | null
    totalCost: Decimal | null
    clientNameAtOrder: string | null
    clientPhoneAtOrder: string | null
    createdAt: Date | null
    updatedAt: Date | null
    pickupDateTime: Date | null
    deliveryDateTime: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    clientId: number
    repartidorId: number
    serviceType: number
    status: number
    originFullName: number
    originPhone: number
    originAddress: number
    originLat: number
    originLng: number
    pickupStreetAddress: number
    destinationContactName: number
    destinationContactPhone: number
    destinationContactEmail: number
    destinationAddress: number
    destinationLat: number
    destinationLng: number
    deliveryAddress: number
    deliveryNotes: number
    pickupDate: number
    pickupTimeFrom: number
    pickupTimeTo: number
    deliveryDate: number
    deliveryTimeFrom: number
    deliveryTimeTo: number
    distanceText: number
    durationText: number
    quotedPrice: number
    shippingCost: number
    totalCost: number
    clientNameAtOrder: number
    clientPhoneAtOrder: number
    createdAt: number
    updatedAt: number
    pickupDateTime: number
    deliveryDateTime: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    clientId?: true
    repartidorId?: true
    originLat?: true
    originLng?: true
    destinationLat?: true
    destinationLng?: true
    quotedPrice?: true
    shippingCost?: true
    totalCost?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    clientId?: true
    repartidorId?: true
    originLat?: true
    originLng?: true
    destinationLat?: true
    destinationLng?: true
    quotedPrice?: true
    shippingCost?: true
    totalCost?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    clientId?: true
    repartidorId?: true
    serviceType?: true
    status?: true
    originFullName?: true
    originPhone?: true
    originAddress?: true
    originLat?: true
    originLng?: true
    pickupStreetAddress?: true
    destinationContactName?: true
    destinationContactPhone?: true
    destinationContactEmail?: true
    destinationAddress?: true
    destinationLat?: true
    destinationLng?: true
    deliveryAddress?: true
    deliveryNotes?: true
    pickupDate?: true
    pickupTimeFrom?: true
    pickupTimeTo?: true
    deliveryDate?: true
    deliveryTimeFrom?: true
    deliveryTimeTo?: true
    distanceText?: true
    durationText?: true
    quotedPrice?: true
    shippingCost?: true
    totalCost?: true
    clientNameAtOrder?: true
    clientPhoneAtOrder?: true
    createdAt?: true
    updatedAt?: true
    pickupDateTime?: true
    deliveryDateTime?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    clientId?: true
    repartidorId?: true
    serviceType?: true
    status?: true
    originFullName?: true
    originPhone?: true
    originAddress?: true
    originLat?: true
    originLng?: true
    pickupStreetAddress?: true
    destinationContactName?: true
    destinationContactPhone?: true
    destinationContactEmail?: true
    destinationAddress?: true
    destinationLat?: true
    destinationLng?: true
    deliveryAddress?: true
    deliveryNotes?: true
    pickupDate?: true
    pickupTimeFrom?: true
    pickupTimeTo?: true
    deliveryDate?: true
    deliveryTimeFrom?: true
    deliveryTimeTo?: true
    distanceText?: true
    durationText?: true
    quotedPrice?: true
    shippingCost?: true
    totalCost?: true
    clientNameAtOrder?: true
    clientPhoneAtOrder?: true
    createdAt?: true
    updatedAt?: true
    pickupDateTime?: true
    deliveryDateTime?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    clientId?: true
    repartidorId?: true
    serviceType?: true
    status?: true
    originFullName?: true
    originPhone?: true
    originAddress?: true
    originLat?: true
    originLng?: true
    pickupStreetAddress?: true
    destinationContactName?: true
    destinationContactPhone?: true
    destinationContactEmail?: true
    destinationAddress?: true
    destinationLat?: true
    destinationLng?: true
    deliveryAddress?: true
    deliveryNotes?: true
    pickupDate?: true
    pickupTimeFrom?: true
    pickupTimeTo?: true
    deliveryDate?: true
    deliveryTimeFrom?: true
    deliveryTimeTo?: true
    distanceText?: true
    durationText?: true
    quotedPrice?: true
    shippingCost?: true
    totalCost?: true
    clientNameAtOrder?: true
    clientPhoneAtOrder?: true
    createdAt?: true
    updatedAt?: true
    pickupDateTime?: true
    deliveryDateTime?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    clientId: number | null
    repartidorId: number | null
    serviceType: $Enums.ServiceTypeEnum
    status: $Enums.OrderStatusEnum
    originFullName: string
    originPhone: string
    originAddress: string
    originLat: Decimal | null
    originLng: Decimal | null
    pickupStreetAddress: string | null
    destinationContactName: string
    destinationContactPhone: string
    destinationContactEmail: string | null
    destinationAddress: string
    destinationLat: Decimal | null
    destinationLng: Decimal | null
    deliveryAddress: string | null
    deliveryNotes: string | null
    pickupDate: Date | null
    pickupTimeFrom: string | null
    pickupTimeTo: string | null
    deliveryDate: Date | null
    deliveryTimeFrom: string | null
    deliveryTimeTo: string | null
    distanceText: string | null
    durationText: string | null
    quotedPrice: Decimal | null
    shippingCost: Decimal | null
    totalCost: Decimal | null
    clientNameAtOrder: string | null
    clientPhoneAtOrder: string | null
    createdAt: Date
    updatedAt: Date
    pickupDateTime: Date | null
    deliveryDateTime: Date | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    repartidorId?: boolean
    serviceType?: boolean
    status?: boolean
    originFullName?: boolean
    originPhone?: boolean
    originAddress?: boolean
    originLat?: boolean
    originLng?: boolean
    pickupStreetAddress?: boolean
    destinationContactName?: boolean
    destinationContactPhone?: boolean
    destinationContactEmail?: boolean
    destinationAddress?: boolean
    destinationLat?: boolean
    destinationLng?: boolean
    deliveryAddress?: boolean
    deliveryNotes?: boolean
    pickupDate?: boolean
    pickupTimeFrom?: boolean
    pickupTimeTo?: boolean
    deliveryDate?: boolean
    deliveryTimeFrom?: boolean
    deliveryTimeTo?: boolean
    distanceText?: boolean
    durationText?: boolean
    quotedPrice?: boolean
    shippingCost?: boolean
    totalCost?: boolean
    clientNameAtOrder?: boolean
    clientPhoneAtOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pickupDateTime?: boolean
    deliveryDateTime?: boolean
    client?: boolean | Order$clientArgs<ExtArgs>
    repartidor?: boolean | Order$repartidorArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    repartidorId?: boolean
    serviceType?: boolean
    status?: boolean
    originFullName?: boolean
    originPhone?: boolean
    originAddress?: boolean
    originLat?: boolean
    originLng?: boolean
    pickupStreetAddress?: boolean
    destinationContactName?: boolean
    destinationContactPhone?: boolean
    destinationContactEmail?: boolean
    destinationAddress?: boolean
    destinationLat?: boolean
    destinationLng?: boolean
    deliveryAddress?: boolean
    deliveryNotes?: boolean
    pickupDate?: boolean
    pickupTimeFrom?: boolean
    pickupTimeTo?: boolean
    deliveryDate?: boolean
    deliveryTimeFrom?: boolean
    deliveryTimeTo?: boolean
    distanceText?: boolean
    durationText?: boolean
    quotedPrice?: boolean
    shippingCost?: boolean
    totalCost?: boolean
    clientNameAtOrder?: boolean
    clientPhoneAtOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pickupDateTime?: boolean
    deliveryDateTime?: boolean
    client?: boolean | Order$clientArgs<ExtArgs>
    repartidor?: boolean | Order$repartidorArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    repartidorId?: boolean
    serviceType?: boolean
    status?: boolean
    originFullName?: boolean
    originPhone?: boolean
    originAddress?: boolean
    originLat?: boolean
    originLng?: boolean
    pickupStreetAddress?: boolean
    destinationContactName?: boolean
    destinationContactPhone?: boolean
    destinationContactEmail?: boolean
    destinationAddress?: boolean
    destinationLat?: boolean
    destinationLng?: boolean
    deliveryAddress?: boolean
    deliveryNotes?: boolean
    pickupDate?: boolean
    pickupTimeFrom?: boolean
    pickupTimeTo?: boolean
    deliveryDate?: boolean
    deliveryTimeFrom?: boolean
    deliveryTimeTo?: boolean
    distanceText?: boolean
    durationText?: boolean
    quotedPrice?: boolean
    shippingCost?: boolean
    totalCost?: boolean
    clientNameAtOrder?: boolean
    clientPhoneAtOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pickupDateTime?: boolean
    deliveryDateTime?: boolean
    client?: boolean | Order$clientArgs<ExtArgs>
    repartidor?: boolean | Order$repartidorArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    clientId?: boolean
    repartidorId?: boolean
    serviceType?: boolean
    status?: boolean
    originFullName?: boolean
    originPhone?: boolean
    originAddress?: boolean
    originLat?: boolean
    originLng?: boolean
    pickupStreetAddress?: boolean
    destinationContactName?: boolean
    destinationContactPhone?: boolean
    destinationContactEmail?: boolean
    destinationAddress?: boolean
    destinationLat?: boolean
    destinationLng?: boolean
    deliveryAddress?: boolean
    deliveryNotes?: boolean
    pickupDate?: boolean
    pickupTimeFrom?: boolean
    pickupTimeTo?: boolean
    deliveryDate?: boolean
    deliveryTimeFrom?: boolean
    deliveryTimeTo?: boolean
    distanceText?: boolean
    durationText?: boolean
    quotedPrice?: boolean
    shippingCost?: boolean
    totalCost?: boolean
    clientNameAtOrder?: boolean
    clientPhoneAtOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pickupDateTime?: boolean
    deliveryDateTime?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "repartidorId" | "serviceType" | "status" | "originFullName" | "originPhone" | "originAddress" | "originLat" | "originLng" | "pickupStreetAddress" | "destinationContactName" | "destinationContactPhone" | "destinationContactEmail" | "destinationAddress" | "destinationLat" | "destinationLng" | "deliveryAddress" | "deliveryNotes" | "pickupDate" | "pickupTimeFrom" | "pickupTimeTo" | "deliveryDate" | "deliveryTimeFrom" | "deliveryTimeTo" | "distanceText" | "durationText" | "quotedPrice" | "shippingCost" | "totalCost" | "clientNameAtOrder" | "clientPhoneAtOrder" | "createdAt" | "updatedAt" | "pickupDateTime" | "deliveryDateTime", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Order$clientArgs<ExtArgs>
    repartidor?: boolean | Order$repartidorArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Order$clientArgs<ExtArgs>
    repartidor?: boolean | Order$repartidorArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Order$clientArgs<ExtArgs>
    repartidor?: boolean | Order$repartidorArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs> | null
      repartidor: Prisma.$RepartidorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientId: number | null
      repartidorId: number | null
      serviceType: $Enums.ServiceTypeEnum
      status: $Enums.OrderStatusEnum
      originFullName: string
      originPhone: string
      originAddress: string
      originLat: Prisma.Decimal | null
      originLng: Prisma.Decimal | null
      pickupStreetAddress: string | null
      destinationContactName: string
      destinationContactPhone: string
      destinationContactEmail: string | null
      destinationAddress: string
      destinationLat: Prisma.Decimal | null
      destinationLng: Prisma.Decimal | null
      deliveryAddress: string | null
      deliveryNotes: string | null
      pickupDate: Date | null
      pickupTimeFrom: string | null
      pickupTimeTo: string | null
      deliveryDate: Date | null
      deliveryTimeFrom: string | null
      deliveryTimeTo: string | null
      distanceText: string | null
      durationText: string | null
      quotedPrice: Prisma.Decimal | null
      shippingCost: Prisma.Decimal | null
      totalCost: Prisma.Decimal | null
      clientNameAtOrder: string | null
      clientPhoneAtOrder: string | null
      createdAt: Date
      updatedAt: Date
      pickupDateTime: Date | null
      deliveryDateTime: Date | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends Order$clientArgs<ExtArgs> = {}>(args?: Subset<T, Order$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    repartidor<T extends Order$repartidorArgs<ExtArgs> = {}>(args?: Subset<T, Order$repartidorArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly clientId: FieldRef<"Order", 'Int'>
    readonly repartidorId: FieldRef<"Order", 'Int'>
    readonly serviceType: FieldRef<"Order", 'ServiceTypeEnum'>
    readonly status: FieldRef<"Order", 'OrderStatusEnum'>
    readonly originFullName: FieldRef<"Order", 'String'>
    readonly originPhone: FieldRef<"Order", 'String'>
    readonly originAddress: FieldRef<"Order", 'String'>
    readonly originLat: FieldRef<"Order", 'Decimal'>
    readonly originLng: FieldRef<"Order", 'Decimal'>
    readonly pickupStreetAddress: FieldRef<"Order", 'String'>
    readonly destinationContactName: FieldRef<"Order", 'String'>
    readonly destinationContactPhone: FieldRef<"Order", 'String'>
    readonly destinationContactEmail: FieldRef<"Order", 'String'>
    readonly destinationAddress: FieldRef<"Order", 'String'>
    readonly destinationLat: FieldRef<"Order", 'Decimal'>
    readonly destinationLng: FieldRef<"Order", 'Decimal'>
    readonly deliveryAddress: FieldRef<"Order", 'String'>
    readonly deliveryNotes: FieldRef<"Order", 'String'>
    readonly pickupDate: FieldRef<"Order", 'DateTime'>
    readonly pickupTimeFrom: FieldRef<"Order", 'String'>
    readonly pickupTimeTo: FieldRef<"Order", 'String'>
    readonly deliveryDate: FieldRef<"Order", 'DateTime'>
    readonly deliveryTimeFrom: FieldRef<"Order", 'String'>
    readonly deliveryTimeTo: FieldRef<"Order", 'String'>
    readonly distanceText: FieldRef<"Order", 'String'>
    readonly durationText: FieldRef<"Order", 'String'>
    readonly quotedPrice: FieldRef<"Order", 'Decimal'>
    readonly shippingCost: FieldRef<"Order", 'Decimal'>
    readonly totalCost: FieldRef<"Order", 'Decimal'>
    readonly clientNameAtOrder: FieldRef<"Order", 'String'>
    readonly clientPhoneAtOrder: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
    readonly pickupDateTime: FieldRef<"Order", 'DateTime'>
    readonly deliveryDateTime: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.client
   */
  export type Order$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * Order.repartidor
   */
  export type Order$repartidorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repartidor
     */
    omit?: RepartidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    where?: RepartidorWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Repartidor
   */

  export type AggregateRepartidor = {
    _count: RepartidorCountAggregateOutputType | null
    _avg: RepartidorAvgAggregateOutputType | null
    _sum: RepartidorSumAggregateOutputType | null
    _min: RepartidorMinAggregateOutputType | null
    _max: RepartidorMaxAggregateOutputType | null
  }

  export type RepartidorAvgAggregateOutputType = {
    id: number | null
  }

  export type RepartidorSumAggregateOutputType = {
    id: number | null
  }

  export type RepartidorMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    vehicleType: string | null
    licensePlate: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RepartidorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    vehicleType: string | null
    licensePlate: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RepartidorCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    vehicleType: number
    licensePlate: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RepartidorAvgAggregateInputType = {
    id?: true
  }

  export type RepartidorSumAggregateInputType = {
    id?: true
  }

  export type RepartidorMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    vehicleType?: true
    licensePlate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RepartidorMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    vehicleType?: true
    licensePlate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RepartidorCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    vehicleType?: true
    licensePlate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RepartidorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repartidor to aggregate.
     */
    where?: RepartidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repartidors to fetch.
     */
    orderBy?: RepartidorOrderByWithRelationInput | RepartidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepartidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repartidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repartidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Repartidors
    **/
    _count?: true | RepartidorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RepartidorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RepartidorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepartidorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepartidorMaxAggregateInputType
  }

  export type GetRepartidorAggregateType<T extends RepartidorAggregateArgs> = {
        [P in keyof T & keyof AggregateRepartidor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepartidor[P]>
      : GetScalarType<T[P], AggregateRepartidor[P]>
  }




  export type RepartidorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepartidorWhereInput
    orderBy?: RepartidorOrderByWithAggregationInput | RepartidorOrderByWithAggregationInput[]
    by: RepartidorScalarFieldEnum[] | RepartidorScalarFieldEnum
    having?: RepartidorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepartidorCountAggregateInputType | true
    _avg?: RepartidorAvgAggregateInputType
    _sum?: RepartidorSumAggregateInputType
    _min?: RepartidorMinAggregateInputType
    _max?: RepartidorMaxAggregateInputType
  }

  export type RepartidorGroupByOutputType = {
    id: number
    name: string
    phone: string
    vehicleType: string
    licensePlate: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: RepartidorCountAggregateOutputType | null
    _avg: RepartidorAvgAggregateOutputType | null
    _sum: RepartidorSumAggregateOutputType | null
    _min: RepartidorMinAggregateOutputType | null
    _max: RepartidorMaxAggregateOutputType | null
  }

  type GetRepartidorGroupByPayload<T extends RepartidorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepartidorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepartidorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepartidorGroupByOutputType[P]>
            : GetScalarType<T[P], RepartidorGroupByOutputType[P]>
        }
      >
    >


  export type RepartidorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    vehicleType?: boolean
    licensePlate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | Repartidor$ordersArgs<ExtArgs>
    etiquetas?: boolean | Repartidor$etiquetasArgs<ExtArgs>
    _count?: boolean | RepartidorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repartidor"]>

  export type RepartidorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    vehicleType?: boolean
    licensePlate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["repartidor"]>

  export type RepartidorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    vehicleType?: boolean
    licensePlate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["repartidor"]>

  export type RepartidorSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    vehicleType?: boolean
    licensePlate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RepartidorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "vehicleType" | "licensePlate" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["repartidor"]>
  export type RepartidorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Repartidor$ordersArgs<ExtArgs>
    etiquetas?: boolean | Repartidor$etiquetasArgs<ExtArgs>
    _count?: boolean | RepartidorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RepartidorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RepartidorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RepartidorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Repartidor"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      etiquetas: Prisma.$EtiquetaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      phone: string
      vehicleType: string
      licensePlate: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["repartidor"]>
    composites: {}
  }

  type RepartidorGetPayload<S extends boolean | null | undefined | RepartidorDefaultArgs> = $Result.GetResult<Prisma.$RepartidorPayload, S>

  type RepartidorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepartidorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepartidorCountAggregateInputType | true
    }

  export interface RepartidorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Repartidor'], meta: { name: 'Repartidor' } }
    /**
     * Find zero or one Repartidor that matches the filter.
     * @param {RepartidorFindUniqueArgs} args - Arguments to find a Repartidor
     * @example
     * // Get one Repartidor
     * const repartidor = await prisma.repartidor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepartidorFindUniqueArgs>(args: SelectSubset<T, RepartidorFindUniqueArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Repartidor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepartidorFindUniqueOrThrowArgs} args - Arguments to find a Repartidor
     * @example
     * // Get one Repartidor
     * const repartidor = await prisma.repartidor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepartidorFindUniqueOrThrowArgs>(args: SelectSubset<T, RepartidorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repartidor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorFindFirstArgs} args - Arguments to find a Repartidor
     * @example
     * // Get one Repartidor
     * const repartidor = await prisma.repartidor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepartidorFindFirstArgs>(args?: SelectSubset<T, RepartidorFindFirstArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repartidor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorFindFirstOrThrowArgs} args - Arguments to find a Repartidor
     * @example
     * // Get one Repartidor
     * const repartidor = await prisma.repartidor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepartidorFindFirstOrThrowArgs>(args?: SelectSubset<T, RepartidorFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Repartidors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Repartidors
     * const repartidors = await prisma.repartidor.findMany()
     * 
     * // Get first 10 Repartidors
     * const repartidors = await prisma.repartidor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repartidorWithIdOnly = await prisma.repartidor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepartidorFindManyArgs>(args?: SelectSubset<T, RepartidorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Repartidor.
     * @param {RepartidorCreateArgs} args - Arguments to create a Repartidor.
     * @example
     * // Create one Repartidor
     * const Repartidor = await prisma.repartidor.create({
     *   data: {
     *     // ... data to create a Repartidor
     *   }
     * })
     * 
     */
    create<T extends RepartidorCreateArgs>(args: SelectSubset<T, RepartidorCreateArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Repartidors.
     * @param {RepartidorCreateManyArgs} args - Arguments to create many Repartidors.
     * @example
     * // Create many Repartidors
     * const repartidor = await prisma.repartidor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepartidorCreateManyArgs>(args?: SelectSubset<T, RepartidorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Repartidors and returns the data saved in the database.
     * @param {RepartidorCreateManyAndReturnArgs} args - Arguments to create many Repartidors.
     * @example
     * // Create many Repartidors
     * const repartidor = await prisma.repartidor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Repartidors and only return the `id`
     * const repartidorWithIdOnly = await prisma.repartidor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepartidorCreateManyAndReturnArgs>(args?: SelectSubset<T, RepartidorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Repartidor.
     * @param {RepartidorDeleteArgs} args - Arguments to delete one Repartidor.
     * @example
     * // Delete one Repartidor
     * const Repartidor = await prisma.repartidor.delete({
     *   where: {
     *     // ... filter to delete one Repartidor
     *   }
     * })
     * 
     */
    delete<T extends RepartidorDeleteArgs>(args: SelectSubset<T, RepartidorDeleteArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Repartidor.
     * @param {RepartidorUpdateArgs} args - Arguments to update one Repartidor.
     * @example
     * // Update one Repartidor
     * const repartidor = await prisma.repartidor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepartidorUpdateArgs>(args: SelectSubset<T, RepartidorUpdateArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Repartidors.
     * @param {RepartidorDeleteManyArgs} args - Arguments to filter Repartidors to delete.
     * @example
     * // Delete a few Repartidors
     * const { count } = await prisma.repartidor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepartidorDeleteManyArgs>(args?: SelectSubset<T, RepartidorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repartidors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Repartidors
     * const repartidor = await prisma.repartidor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepartidorUpdateManyArgs>(args: SelectSubset<T, RepartidorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repartidors and returns the data updated in the database.
     * @param {RepartidorUpdateManyAndReturnArgs} args - Arguments to update many Repartidors.
     * @example
     * // Update many Repartidors
     * const repartidor = await prisma.repartidor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Repartidors and only return the `id`
     * const repartidorWithIdOnly = await prisma.repartidor.updateManyAndReturn({
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
    updateManyAndReturn<T extends RepartidorUpdateManyAndReturnArgs>(args: SelectSubset<T, RepartidorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Repartidor.
     * @param {RepartidorUpsertArgs} args - Arguments to update or create a Repartidor.
     * @example
     * // Update or create a Repartidor
     * const repartidor = await prisma.repartidor.upsert({
     *   create: {
     *     // ... data to create a Repartidor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Repartidor we want to update
     *   }
     * })
     */
    upsert<T extends RepartidorUpsertArgs>(args: SelectSubset<T, RepartidorUpsertArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Repartidors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorCountArgs} args - Arguments to filter Repartidors to count.
     * @example
     * // Count the number of Repartidors
     * const count = await prisma.repartidor.count({
     *   where: {
     *     // ... the filter for the Repartidors we want to count
     *   }
     * })
    **/
    count<T extends RepartidorCountArgs>(
      args?: Subset<T, RepartidorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepartidorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Repartidor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RepartidorAggregateArgs>(args: Subset<T, RepartidorAggregateArgs>): Prisma.PrismaPromise<GetRepartidorAggregateType<T>>

    /**
     * Group by Repartidor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartidorGroupByArgs} args - Group by arguments.
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
      T extends RepartidorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepartidorGroupByArgs['orderBy'] }
        : { orderBy?: RepartidorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RepartidorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepartidorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Repartidor model
   */
  readonly fields: RepartidorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Repartidor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepartidorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Repartidor$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Repartidor$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    etiquetas<T extends Repartidor$etiquetasArgs<ExtArgs> = {}>(args?: Subset<T, Repartidor$etiquetasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Repartidor model
   */
  interface RepartidorFieldRefs {
    readonly id: FieldRef<"Repartidor", 'Int'>
    readonly name: FieldRef<"Repartidor", 'String'>
    readonly phone: FieldRef<"Repartidor", 'String'>
    readonly vehicleType: FieldRef<"Repartidor", 'String'>
    readonly licensePlate: FieldRef<"Repartidor", 'String'>
    readonly isActive: FieldRef<"Repartidor", 'Boolean'>
    readonly createdAt: FieldRef<"Repartidor", 'DateTime'>
    readonly updatedAt: FieldRef<"Repartidor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Repartidor findUnique
   */
  export type RepartidorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repartidor
     */
    omit?: RepartidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * Filter, which Repartidor to fetch.
     */
    where: RepartidorWhereUniqueInput
  }

  /**
   * Repartidor findUniqueOrThrow
   */
  export type RepartidorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repartidor
     */
    omit?: RepartidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * Filter, which Repartidor to fetch.
     */
    where: RepartidorWhereUniqueInput
  }

  /**
   * Repartidor findFirst
   */
  export type RepartidorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repartidor
     */
    omit?: RepartidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * Filter, which Repartidor to fetch.
     */
    where?: RepartidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repartidors to fetch.
     */
    orderBy?: RepartidorOrderByWithRelationInput | RepartidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repartidors.
     */
    cursor?: RepartidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repartidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repartidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repartidors.
     */
    distinct?: RepartidorScalarFieldEnum | RepartidorScalarFieldEnum[]
  }

  /**
   * Repartidor findFirstOrThrow
   */
  export type RepartidorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repartidor
     */
    omit?: RepartidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * Filter, which Repartidor to fetch.
     */
    where?: RepartidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repartidors to fetch.
     */
    orderBy?: RepartidorOrderByWithRelationInput | RepartidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repartidors.
     */
    cursor?: RepartidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repartidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repartidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repartidors.
     */
    distinct?: RepartidorScalarFieldEnum | RepartidorScalarFieldEnum[]
  }

  /**
   * Repartidor findMany
   */
  export type RepartidorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repartidor
     */
    omit?: RepartidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * Filter, which Repartidors to fetch.
     */
    where?: RepartidorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repartidors to fetch.
     */
    orderBy?: RepartidorOrderByWithRelationInput | RepartidorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Repartidors.
     */
    cursor?: RepartidorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repartidors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repartidors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repartidors.
     */
    distinct?: RepartidorScalarFieldEnum | RepartidorScalarFieldEnum[]
  }

  /**
   * Repartidor create
   */
  export type RepartidorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repartidor
     */
    omit?: RepartidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * The data needed to create a Repartidor.
     */
    data: XOR<RepartidorCreateInput, RepartidorUncheckedCreateInput>
  }

  /**
   * Repartidor createMany
   */
  export type RepartidorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Repartidors.
     */
    data: RepartidorCreateManyInput | RepartidorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Repartidor createManyAndReturn
   */
  export type RepartidorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Repartidor
     */
    omit?: RepartidorOmit<ExtArgs> | null
    /**
     * The data used to create many Repartidors.
     */
    data: RepartidorCreateManyInput | RepartidorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Repartidor update
   */
  export type RepartidorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repartidor
     */
    omit?: RepartidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * The data needed to update a Repartidor.
     */
    data: XOR<RepartidorUpdateInput, RepartidorUncheckedUpdateInput>
    /**
     * Choose, which Repartidor to update.
     */
    where: RepartidorWhereUniqueInput
  }

  /**
   * Repartidor updateMany
   */
  export type RepartidorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Repartidors.
     */
    data: XOR<RepartidorUpdateManyMutationInput, RepartidorUncheckedUpdateManyInput>
    /**
     * Filter which Repartidors to update
     */
    where?: RepartidorWhereInput
    /**
     * Limit how many Repartidors to update.
     */
    limit?: number
  }

  /**
   * Repartidor updateManyAndReturn
   */
  export type RepartidorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Repartidor
     */
    omit?: RepartidorOmit<ExtArgs> | null
    /**
     * The data used to update Repartidors.
     */
    data: XOR<RepartidorUpdateManyMutationInput, RepartidorUncheckedUpdateManyInput>
    /**
     * Filter which Repartidors to update
     */
    where?: RepartidorWhereInput
    /**
     * Limit how many Repartidors to update.
     */
    limit?: number
  }

  /**
   * Repartidor upsert
   */
  export type RepartidorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repartidor
     */
    omit?: RepartidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * The filter to search for the Repartidor to update in case it exists.
     */
    where: RepartidorWhereUniqueInput
    /**
     * In case the Repartidor found by the `where` argument doesn't exist, create a new Repartidor with this data.
     */
    create: XOR<RepartidorCreateInput, RepartidorUncheckedCreateInput>
    /**
     * In case the Repartidor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepartidorUpdateInput, RepartidorUncheckedUpdateInput>
  }

  /**
   * Repartidor delete
   */
  export type RepartidorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repartidor
     */
    omit?: RepartidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    /**
     * Filter which Repartidor to delete.
     */
    where: RepartidorWhereUniqueInput
  }

  /**
   * Repartidor deleteMany
   */
  export type RepartidorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repartidors to delete
     */
    where?: RepartidorWhereInput
    /**
     * Limit how many Repartidors to delete.
     */
    limit?: number
  }

  /**
   * Repartidor.orders
   */
  export type Repartidor$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Repartidor.etiquetas
   */
  export type Repartidor$etiquetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    where?: EtiquetaWhereInput
    orderBy?: EtiquetaOrderByWithRelationInput | EtiquetaOrderByWithRelationInput[]
    cursor?: EtiquetaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EtiquetaScalarFieldEnum | EtiquetaScalarFieldEnum[]
  }

  /**
   * Repartidor without action
   */
  export type RepartidorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repartidor
     */
    omit?: RepartidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
  }


  /**
   * Model PriceRange
   */

  export type AggregatePriceRange = {
    _count: PriceRangeCountAggregateOutputType | null
    _avg: PriceRangeAvgAggregateOutputType | null
    _sum: PriceRangeSumAggregateOutputType | null
    _min: PriceRangeMinAggregateOutputType | null
    _max: PriceRangeMaxAggregateOutputType | null
  }

  export type PriceRangeAvgAggregateOutputType = {
    id: number | null
    distanciaMinKm: Decimal | null
    distanciaMaxKm: Decimal | null
    precioRango: Decimal | null
  }

  export type PriceRangeSumAggregateOutputType = {
    id: number | null
    distanciaMinKm: Decimal | null
    distanciaMaxKm: Decimal | null
    precioRango: Decimal | null
  }

  export type PriceRangeMinAggregateOutputType = {
    id: number | null
    serviceType: $Enums.ServiceTypeEnum | null
    distanciaMinKm: Decimal | null
    distanciaMaxKm: Decimal | null
    precioRango: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PriceRangeMaxAggregateOutputType = {
    id: number | null
    serviceType: $Enums.ServiceTypeEnum | null
    distanciaMinKm: Decimal | null
    distanciaMaxKm: Decimal | null
    precioRango: Decimal | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PriceRangeCountAggregateOutputType = {
    id: number
    serviceType: number
    distanciaMinKm: number
    distanciaMaxKm: number
    precioRango: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PriceRangeAvgAggregateInputType = {
    id?: true
    distanciaMinKm?: true
    distanciaMaxKm?: true
    precioRango?: true
  }

  export type PriceRangeSumAggregateInputType = {
    id?: true
    distanciaMinKm?: true
    distanciaMaxKm?: true
    precioRango?: true
  }

  export type PriceRangeMinAggregateInputType = {
    id?: true
    serviceType?: true
    distanciaMinKm?: true
    distanciaMaxKm?: true
    precioRango?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PriceRangeMaxAggregateInputType = {
    id?: true
    serviceType?: true
    distanciaMinKm?: true
    distanciaMaxKm?: true
    precioRango?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PriceRangeCountAggregateInputType = {
    id?: true
    serviceType?: true
    distanciaMinKm?: true
    distanciaMaxKm?: true
    precioRango?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PriceRangeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceRange to aggregate.
     */
    where?: PriceRangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceRanges to fetch.
     */
    orderBy?: PriceRangeOrderByWithRelationInput | PriceRangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceRangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceRanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceRanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceRanges
    **/
    _count?: true | PriceRangeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceRangeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceRangeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceRangeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceRangeMaxAggregateInputType
  }

  export type GetPriceRangeAggregateType<T extends PriceRangeAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceRange]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceRange[P]>
      : GetScalarType<T[P], AggregatePriceRange[P]>
  }




  export type PriceRangeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceRangeWhereInput
    orderBy?: PriceRangeOrderByWithAggregationInput | PriceRangeOrderByWithAggregationInput[]
    by: PriceRangeScalarFieldEnum[] | PriceRangeScalarFieldEnum
    having?: PriceRangeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceRangeCountAggregateInputType | true
    _avg?: PriceRangeAvgAggregateInputType
    _sum?: PriceRangeSumAggregateInputType
    _min?: PriceRangeMinAggregateInputType
    _max?: PriceRangeMaxAggregateInputType
  }

  export type PriceRangeGroupByOutputType = {
    id: number
    serviceType: $Enums.ServiceTypeEnum
    distanciaMinKm: Decimal
    distanciaMaxKm: Decimal
    precioRango: Decimal
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: PriceRangeCountAggregateOutputType | null
    _avg: PriceRangeAvgAggregateOutputType | null
    _sum: PriceRangeSumAggregateOutputType | null
    _min: PriceRangeMinAggregateOutputType | null
    _max: PriceRangeMaxAggregateOutputType | null
  }

  type GetPriceRangeGroupByPayload<T extends PriceRangeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceRangeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceRangeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceRangeGroupByOutputType[P]>
            : GetScalarType<T[P], PriceRangeGroupByOutputType[P]>
        }
      >
    >


  export type PriceRangeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceType?: boolean
    distanciaMinKm?: boolean
    distanciaMaxKm?: boolean
    precioRango?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["priceRange"]>

  export type PriceRangeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceType?: boolean
    distanciaMinKm?: boolean
    distanciaMaxKm?: boolean
    precioRango?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["priceRange"]>

  export type PriceRangeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceType?: boolean
    distanciaMinKm?: boolean
    distanciaMaxKm?: boolean
    precioRango?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["priceRange"]>

  export type PriceRangeSelectScalar = {
    id?: boolean
    serviceType?: boolean
    distanciaMinKm?: boolean
    distanciaMaxKm?: boolean
    precioRango?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PriceRangeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serviceType" | "distanciaMinKm" | "distanciaMaxKm" | "precioRango" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["priceRange"]>

  export type $PriceRangePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceRange"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      serviceType: $Enums.ServiceTypeEnum
      distanciaMinKm: Prisma.Decimal
      distanciaMaxKm: Prisma.Decimal
      precioRango: Prisma.Decimal
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["priceRange"]>
    composites: {}
  }

  type PriceRangeGetPayload<S extends boolean | null | undefined | PriceRangeDefaultArgs> = $Result.GetResult<Prisma.$PriceRangePayload, S>

  type PriceRangeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PriceRangeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PriceRangeCountAggregateInputType | true
    }

  export interface PriceRangeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PriceRange'], meta: { name: 'PriceRange' } }
    /**
     * Find zero or one PriceRange that matches the filter.
     * @param {PriceRangeFindUniqueArgs} args - Arguments to find a PriceRange
     * @example
     * // Get one PriceRange
     * const priceRange = await prisma.priceRange.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceRangeFindUniqueArgs>(args: SelectSubset<T, PriceRangeFindUniqueArgs<ExtArgs>>): Prisma__PriceRangeClient<$Result.GetResult<Prisma.$PriceRangePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PriceRange that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PriceRangeFindUniqueOrThrowArgs} args - Arguments to find a PriceRange
     * @example
     * // Get one PriceRange
     * const priceRange = await prisma.priceRange.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceRangeFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceRangeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceRangeClient<$Result.GetResult<Prisma.$PriceRangePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceRange that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRangeFindFirstArgs} args - Arguments to find a PriceRange
     * @example
     * // Get one PriceRange
     * const priceRange = await prisma.priceRange.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceRangeFindFirstArgs>(args?: SelectSubset<T, PriceRangeFindFirstArgs<ExtArgs>>): Prisma__PriceRangeClient<$Result.GetResult<Prisma.$PriceRangePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PriceRange that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRangeFindFirstOrThrowArgs} args - Arguments to find a PriceRange
     * @example
     * // Get one PriceRange
     * const priceRange = await prisma.priceRange.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceRangeFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceRangeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceRangeClient<$Result.GetResult<Prisma.$PriceRangePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PriceRanges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRangeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceRanges
     * const priceRanges = await prisma.priceRange.findMany()
     * 
     * // Get first 10 PriceRanges
     * const priceRanges = await prisma.priceRange.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceRangeWithIdOnly = await prisma.priceRange.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceRangeFindManyArgs>(args?: SelectSubset<T, PriceRangeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceRangePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PriceRange.
     * @param {PriceRangeCreateArgs} args - Arguments to create a PriceRange.
     * @example
     * // Create one PriceRange
     * const PriceRange = await prisma.priceRange.create({
     *   data: {
     *     // ... data to create a PriceRange
     *   }
     * })
     * 
     */
    create<T extends PriceRangeCreateArgs>(args: SelectSubset<T, PriceRangeCreateArgs<ExtArgs>>): Prisma__PriceRangeClient<$Result.GetResult<Prisma.$PriceRangePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PriceRanges.
     * @param {PriceRangeCreateManyArgs} args - Arguments to create many PriceRanges.
     * @example
     * // Create many PriceRanges
     * const priceRange = await prisma.priceRange.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceRangeCreateManyArgs>(args?: SelectSubset<T, PriceRangeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PriceRanges and returns the data saved in the database.
     * @param {PriceRangeCreateManyAndReturnArgs} args - Arguments to create many PriceRanges.
     * @example
     * // Create many PriceRanges
     * const priceRange = await prisma.priceRange.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PriceRanges and only return the `id`
     * const priceRangeWithIdOnly = await prisma.priceRange.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceRangeCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceRangeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceRangePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PriceRange.
     * @param {PriceRangeDeleteArgs} args - Arguments to delete one PriceRange.
     * @example
     * // Delete one PriceRange
     * const PriceRange = await prisma.priceRange.delete({
     *   where: {
     *     // ... filter to delete one PriceRange
     *   }
     * })
     * 
     */
    delete<T extends PriceRangeDeleteArgs>(args: SelectSubset<T, PriceRangeDeleteArgs<ExtArgs>>): Prisma__PriceRangeClient<$Result.GetResult<Prisma.$PriceRangePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PriceRange.
     * @param {PriceRangeUpdateArgs} args - Arguments to update one PriceRange.
     * @example
     * // Update one PriceRange
     * const priceRange = await prisma.priceRange.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceRangeUpdateArgs>(args: SelectSubset<T, PriceRangeUpdateArgs<ExtArgs>>): Prisma__PriceRangeClient<$Result.GetResult<Prisma.$PriceRangePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PriceRanges.
     * @param {PriceRangeDeleteManyArgs} args - Arguments to filter PriceRanges to delete.
     * @example
     * // Delete a few PriceRanges
     * const { count } = await prisma.priceRange.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceRangeDeleteManyArgs>(args?: SelectSubset<T, PriceRangeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceRanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRangeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceRanges
     * const priceRange = await prisma.priceRange.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceRangeUpdateManyArgs>(args: SelectSubset<T, PriceRangeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceRanges and returns the data updated in the database.
     * @param {PriceRangeUpdateManyAndReturnArgs} args - Arguments to update many PriceRanges.
     * @example
     * // Update many PriceRanges
     * const priceRange = await prisma.priceRange.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PriceRanges and only return the `id`
     * const priceRangeWithIdOnly = await prisma.priceRange.updateManyAndReturn({
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
    updateManyAndReturn<T extends PriceRangeUpdateManyAndReturnArgs>(args: SelectSubset<T, PriceRangeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceRangePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PriceRange.
     * @param {PriceRangeUpsertArgs} args - Arguments to update or create a PriceRange.
     * @example
     * // Update or create a PriceRange
     * const priceRange = await prisma.priceRange.upsert({
     *   create: {
     *     // ... data to create a PriceRange
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceRange we want to update
     *   }
     * })
     */
    upsert<T extends PriceRangeUpsertArgs>(args: SelectSubset<T, PriceRangeUpsertArgs<ExtArgs>>): Prisma__PriceRangeClient<$Result.GetResult<Prisma.$PriceRangePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PriceRanges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRangeCountArgs} args - Arguments to filter PriceRanges to count.
     * @example
     * // Count the number of PriceRanges
     * const count = await prisma.priceRange.count({
     *   where: {
     *     // ... the filter for the PriceRanges we want to count
     *   }
     * })
    **/
    count<T extends PriceRangeCountArgs>(
      args?: Subset<T, PriceRangeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceRangeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceRange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRangeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PriceRangeAggregateArgs>(args: Subset<T, PriceRangeAggregateArgs>): Prisma.PrismaPromise<GetPriceRangeAggregateType<T>>

    /**
     * Group by PriceRange.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceRangeGroupByArgs} args - Group by arguments.
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
      T extends PriceRangeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceRangeGroupByArgs['orderBy'] }
        : { orderBy?: PriceRangeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PriceRangeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceRangeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PriceRange model
   */
  readonly fields: PriceRangeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceRange.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceRangeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PriceRange model
   */
  interface PriceRangeFieldRefs {
    readonly id: FieldRef<"PriceRange", 'Int'>
    readonly serviceType: FieldRef<"PriceRange", 'ServiceTypeEnum'>
    readonly distanciaMinKm: FieldRef<"PriceRange", 'Decimal'>
    readonly distanciaMaxKm: FieldRef<"PriceRange", 'Decimal'>
    readonly precioRango: FieldRef<"PriceRange", 'Decimal'>
    readonly isActive: FieldRef<"PriceRange", 'Boolean'>
    readonly createdAt: FieldRef<"PriceRange", 'DateTime'>
    readonly updatedAt: FieldRef<"PriceRange", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PriceRange findUnique
   */
  export type PriceRangeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRange
     */
    select?: PriceRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceRange
     */
    omit?: PriceRangeOmit<ExtArgs> | null
    /**
     * Filter, which PriceRange to fetch.
     */
    where: PriceRangeWhereUniqueInput
  }

  /**
   * PriceRange findUniqueOrThrow
   */
  export type PriceRangeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRange
     */
    select?: PriceRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceRange
     */
    omit?: PriceRangeOmit<ExtArgs> | null
    /**
     * Filter, which PriceRange to fetch.
     */
    where: PriceRangeWhereUniqueInput
  }

  /**
   * PriceRange findFirst
   */
  export type PriceRangeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRange
     */
    select?: PriceRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceRange
     */
    omit?: PriceRangeOmit<ExtArgs> | null
    /**
     * Filter, which PriceRange to fetch.
     */
    where?: PriceRangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceRanges to fetch.
     */
    orderBy?: PriceRangeOrderByWithRelationInput | PriceRangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceRanges.
     */
    cursor?: PriceRangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceRanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceRanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceRanges.
     */
    distinct?: PriceRangeScalarFieldEnum | PriceRangeScalarFieldEnum[]
  }

  /**
   * PriceRange findFirstOrThrow
   */
  export type PriceRangeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRange
     */
    select?: PriceRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceRange
     */
    omit?: PriceRangeOmit<ExtArgs> | null
    /**
     * Filter, which PriceRange to fetch.
     */
    where?: PriceRangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceRanges to fetch.
     */
    orderBy?: PriceRangeOrderByWithRelationInput | PriceRangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceRanges.
     */
    cursor?: PriceRangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceRanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceRanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceRanges.
     */
    distinct?: PriceRangeScalarFieldEnum | PriceRangeScalarFieldEnum[]
  }

  /**
   * PriceRange findMany
   */
  export type PriceRangeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRange
     */
    select?: PriceRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceRange
     */
    omit?: PriceRangeOmit<ExtArgs> | null
    /**
     * Filter, which PriceRanges to fetch.
     */
    where?: PriceRangeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceRanges to fetch.
     */
    orderBy?: PriceRangeOrderByWithRelationInput | PriceRangeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceRanges.
     */
    cursor?: PriceRangeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceRanges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceRanges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceRanges.
     */
    distinct?: PriceRangeScalarFieldEnum | PriceRangeScalarFieldEnum[]
  }

  /**
   * PriceRange create
   */
  export type PriceRangeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRange
     */
    select?: PriceRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceRange
     */
    omit?: PriceRangeOmit<ExtArgs> | null
    /**
     * The data needed to create a PriceRange.
     */
    data: XOR<PriceRangeCreateInput, PriceRangeUncheckedCreateInput>
  }

  /**
   * PriceRange createMany
   */
  export type PriceRangeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceRanges.
     */
    data: PriceRangeCreateManyInput | PriceRangeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceRange createManyAndReturn
   */
  export type PriceRangeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRange
     */
    select?: PriceRangeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PriceRange
     */
    omit?: PriceRangeOmit<ExtArgs> | null
    /**
     * The data used to create many PriceRanges.
     */
    data: PriceRangeCreateManyInput | PriceRangeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceRange update
   */
  export type PriceRangeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRange
     */
    select?: PriceRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceRange
     */
    omit?: PriceRangeOmit<ExtArgs> | null
    /**
     * The data needed to update a PriceRange.
     */
    data: XOR<PriceRangeUpdateInput, PriceRangeUncheckedUpdateInput>
    /**
     * Choose, which PriceRange to update.
     */
    where: PriceRangeWhereUniqueInput
  }

  /**
   * PriceRange updateMany
   */
  export type PriceRangeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceRanges.
     */
    data: XOR<PriceRangeUpdateManyMutationInput, PriceRangeUncheckedUpdateManyInput>
    /**
     * Filter which PriceRanges to update
     */
    where?: PriceRangeWhereInput
    /**
     * Limit how many PriceRanges to update.
     */
    limit?: number
  }

  /**
   * PriceRange updateManyAndReturn
   */
  export type PriceRangeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRange
     */
    select?: PriceRangeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PriceRange
     */
    omit?: PriceRangeOmit<ExtArgs> | null
    /**
     * The data used to update PriceRanges.
     */
    data: XOR<PriceRangeUpdateManyMutationInput, PriceRangeUncheckedUpdateManyInput>
    /**
     * Filter which PriceRanges to update
     */
    where?: PriceRangeWhereInput
    /**
     * Limit how many PriceRanges to update.
     */
    limit?: number
  }

  /**
   * PriceRange upsert
   */
  export type PriceRangeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRange
     */
    select?: PriceRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceRange
     */
    omit?: PriceRangeOmit<ExtArgs> | null
    /**
     * The filter to search for the PriceRange to update in case it exists.
     */
    where: PriceRangeWhereUniqueInput
    /**
     * In case the PriceRange found by the `where` argument doesn't exist, create a new PriceRange with this data.
     */
    create: XOR<PriceRangeCreateInput, PriceRangeUncheckedCreateInput>
    /**
     * In case the PriceRange was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceRangeUpdateInput, PriceRangeUncheckedUpdateInput>
  }

  /**
   * PriceRange delete
   */
  export type PriceRangeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRange
     */
    select?: PriceRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceRange
     */
    omit?: PriceRangeOmit<ExtArgs> | null
    /**
     * Filter which PriceRange to delete.
     */
    where: PriceRangeWhereUniqueInput
  }

  /**
   * PriceRange deleteMany
   */
  export type PriceRangeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceRanges to delete
     */
    where?: PriceRangeWhereInput
    /**
     * Limit how many PriceRanges to delete.
     */
    limit?: number
  }

  /**
   * PriceRange without action
   */
  export type PriceRangeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceRange
     */
    select?: PriceRangeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PriceRange
     */
    omit?: PriceRangeOmit<ExtArgs> | null
  }


  /**
   * Model Etiqueta
   */

  export type AggregateEtiqueta = {
    _count: EtiquetaCountAggregateOutputType | null
    _avg: EtiquetaAvgAggregateOutputType | null
    _sum: EtiquetaSumAggregateOutputType | null
    _min: EtiquetaMinAggregateOutputType | null
    _max: EtiquetaMaxAggregateOutputType | null
  }

  export type EtiquetaAvgAggregateOutputType = {
    id: number | null
    montoACobrar: Decimal | null
    repartidorId: number | null
  }

  export type EtiquetaSumAggregateOutputType = {
    id: number | null
    montoACobrar: Decimal | null
    repartidorId: number | null
  }

  export type EtiquetaMinAggregateOutputType = {
    id: number | null
    orderNumber: string | null
    tipoEnvio: $Enums.ServiceTypeEnum | null
    remitenteNombre: string | null
    remitenteDireccion: string | null
    remitenteNotas: string | null
    destinatarioNombre: string | null
    destinatarioDireccion: string | null
    destinatarioTelefono: string | null
    montoACobrar: Decimal | null
    destinatarioNotas: string | null
    status: $Enums.EtiquetaStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deliveryStartTime: string | null
    deliveryEndTime: string | null
    repartidorId: number | null
  }

  export type EtiquetaMaxAggregateOutputType = {
    id: number | null
    orderNumber: string | null
    tipoEnvio: $Enums.ServiceTypeEnum | null
    remitenteNombre: string | null
    remitenteDireccion: string | null
    remitenteNotas: string | null
    destinatarioNombre: string | null
    destinatarioDireccion: string | null
    destinatarioTelefono: string | null
    montoACobrar: Decimal | null
    destinatarioNotas: string | null
    status: $Enums.EtiquetaStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deliveryStartTime: string | null
    deliveryEndTime: string | null
    repartidorId: number | null
  }

  export type EtiquetaCountAggregateOutputType = {
    id: number
    orderNumber: number
    tipoEnvio: number
    remitenteNombre: number
    remitenteDireccion: number
    remitenteNotas: number
    destinatarioNombre: number
    destinatarioDireccion: number
    destinatarioTelefono: number
    montoACobrar: number
    destinatarioNotas: number
    status: number
    createdAt: number
    updatedAt: number
    deliveryStartTime: number
    deliveryEndTime: number
    repartidorId: number
    _all: number
  }


  export type EtiquetaAvgAggregateInputType = {
    id?: true
    montoACobrar?: true
    repartidorId?: true
  }

  export type EtiquetaSumAggregateInputType = {
    id?: true
    montoACobrar?: true
    repartidorId?: true
  }

  export type EtiquetaMinAggregateInputType = {
    id?: true
    orderNumber?: true
    tipoEnvio?: true
    remitenteNombre?: true
    remitenteDireccion?: true
    remitenteNotas?: true
    destinatarioNombre?: true
    destinatarioDireccion?: true
    destinatarioTelefono?: true
    montoACobrar?: true
    destinatarioNotas?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deliveryStartTime?: true
    deliveryEndTime?: true
    repartidorId?: true
  }

  export type EtiquetaMaxAggregateInputType = {
    id?: true
    orderNumber?: true
    tipoEnvio?: true
    remitenteNombre?: true
    remitenteDireccion?: true
    remitenteNotas?: true
    destinatarioNombre?: true
    destinatarioDireccion?: true
    destinatarioTelefono?: true
    montoACobrar?: true
    destinatarioNotas?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deliveryStartTime?: true
    deliveryEndTime?: true
    repartidorId?: true
  }

  export type EtiquetaCountAggregateInputType = {
    id?: true
    orderNumber?: true
    tipoEnvio?: true
    remitenteNombre?: true
    remitenteDireccion?: true
    remitenteNotas?: true
    destinatarioNombre?: true
    destinatarioDireccion?: true
    destinatarioTelefono?: true
    montoACobrar?: true
    destinatarioNotas?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deliveryStartTime?: true
    deliveryEndTime?: true
    repartidorId?: true
    _all?: true
  }

  export type EtiquetaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etiqueta to aggregate.
     */
    where?: EtiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etiquetas to fetch.
     */
    orderBy?: EtiquetaOrderByWithRelationInput | EtiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EtiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etiquetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Etiquetas
    **/
    _count?: true | EtiquetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EtiquetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EtiquetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EtiquetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EtiquetaMaxAggregateInputType
  }

  export type GetEtiquetaAggregateType<T extends EtiquetaAggregateArgs> = {
        [P in keyof T & keyof AggregateEtiqueta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEtiqueta[P]>
      : GetScalarType<T[P], AggregateEtiqueta[P]>
  }




  export type EtiquetaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EtiquetaWhereInput
    orderBy?: EtiquetaOrderByWithAggregationInput | EtiquetaOrderByWithAggregationInput[]
    by: EtiquetaScalarFieldEnum[] | EtiquetaScalarFieldEnum
    having?: EtiquetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EtiquetaCountAggregateInputType | true
    _avg?: EtiquetaAvgAggregateInputType
    _sum?: EtiquetaSumAggregateInputType
    _min?: EtiquetaMinAggregateInputType
    _max?: EtiquetaMaxAggregateInputType
  }

  export type EtiquetaGroupByOutputType = {
    id: number
    orderNumber: string | null
    tipoEnvio: $Enums.ServiceTypeEnum
    remitenteNombre: string
    remitenteDireccion: string
    remitenteNotas: string | null
    destinatarioNombre: string
    destinatarioDireccion: string
    destinatarioTelefono: string
    montoACobrar: Decimal | null
    destinatarioNotas: string | null
    status: $Enums.EtiquetaStatus
    createdAt: Date
    updatedAt: Date
    deliveryStartTime: string | null
    deliveryEndTime: string | null
    repartidorId: number | null
    _count: EtiquetaCountAggregateOutputType | null
    _avg: EtiquetaAvgAggregateOutputType | null
    _sum: EtiquetaSumAggregateOutputType | null
    _min: EtiquetaMinAggregateOutputType | null
    _max: EtiquetaMaxAggregateOutputType | null
  }

  type GetEtiquetaGroupByPayload<T extends EtiquetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EtiquetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EtiquetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EtiquetaGroupByOutputType[P]>
            : GetScalarType<T[P], EtiquetaGroupByOutputType[P]>
        }
      >
    >


  export type EtiquetaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    tipoEnvio?: boolean
    remitenteNombre?: boolean
    remitenteDireccion?: boolean
    remitenteNotas?: boolean
    destinatarioNombre?: boolean
    destinatarioDireccion?: boolean
    destinatarioTelefono?: boolean
    montoACobrar?: boolean
    destinatarioNotas?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deliveryStartTime?: boolean
    deliveryEndTime?: boolean
    repartidorId?: boolean
    repartidor?: boolean | Etiqueta$repartidorArgs<ExtArgs>
  }, ExtArgs["result"]["etiqueta"]>

  export type EtiquetaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    tipoEnvio?: boolean
    remitenteNombre?: boolean
    remitenteDireccion?: boolean
    remitenteNotas?: boolean
    destinatarioNombre?: boolean
    destinatarioDireccion?: boolean
    destinatarioTelefono?: boolean
    montoACobrar?: boolean
    destinatarioNotas?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deliveryStartTime?: boolean
    deliveryEndTime?: boolean
    repartidorId?: boolean
    repartidor?: boolean | Etiqueta$repartidorArgs<ExtArgs>
  }, ExtArgs["result"]["etiqueta"]>

  export type EtiquetaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    tipoEnvio?: boolean
    remitenteNombre?: boolean
    remitenteDireccion?: boolean
    remitenteNotas?: boolean
    destinatarioNombre?: boolean
    destinatarioDireccion?: boolean
    destinatarioTelefono?: boolean
    montoACobrar?: boolean
    destinatarioNotas?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deliveryStartTime?: boolean
    deliveryEndTime?: boolean
    repartidorId?: boolean
    repartidor?: boolean | Etiqueta$repartidorArgs<ExtArgs>
  }, ExtArgs["result"]["etiqueta"]>

  export type EtiquetaSelectScalar = {
    id?: boolean
    orderNumber?: boolean
    tipoEnvio?: boolean
    remitenteNombre?: boolean
    remitenteDireccion?: boolean
    remitenteNotas?: boolean
    destinatarioNombre?: boolean
    destinatarioDireccion?: boolean
    destinatarioTelefono?: boolean
    montoACobrar?: boolean
    destinatarioNotas?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deliveryStartTime?: boolean
    deliveryEndTime?: boolean
    repartidorId?: boolean
  }

  export type EtiquetaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderNumber" | "tipoEnvio" | "remitenteNombre" | "remitenteDireccion" | "remitenteNotas" | "destinatarioNombre" | "destinatarioDireccion" | "destinatarioTelefono" | "montoACobrar" | "destinatarioNotas" | "status" | "createdAt" | "updatedAt" | "deliveryStartTime" | "deliveryEndTime" | "repartidorId", ExtArgs["result"]["etiqueta"]>
  export type EtiquetaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repartidor?: boolean | Etiqueta$repartidorArgs<ExtArgs>
  }
  export type EtiquetaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repartidor?: boolean | Etiqueta$repartidorArgs<ExtArgs>
  }
  export type EtiquetaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repartidor?: boolean | Etiqueta$repartidorArgs<ExtArgs>
  }

  export type $EtiquetaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Etiqueta"
    objects: {
      repartidor: Prisma.$RepartidorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderNumber: string | null
      tipoEnvio: $Enums.ServiceTypeEnum
      remitenteNombre: string
      remitenteDireccion: string
      remitenteNotas: string | null
      destinatarioNombre: string
      destinatarioDireccion: string
      destinatarioTelefono: string
      montoACobrar: Prisma.Decimal | null
      destinatarioNotas: string | null
      status: $Enums.EtiquetaStatus
      createdAt: Date
      updatedAt: Date
      deliveryStartTime: string | null
      deliveryEndTime: string | null
      repartidorId: number | null
    }, ExtArgs["result"]["etiqueta"]>
    composites: {}
  }

  type EtiquetaGetPayload<S extends boolean | null | undefined | EtiquetaDefaultArgs> = $Result.GetResult<Prisma.$EtiquetaPayload, S>

  type EtiquetaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EtiquetaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EtiquetaCountAggregateInputType | true
    }

  export interface EtiquetaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Etiqueta'], meta: { name: 'Etiqueta' } }
    /**
     * Find zero or one Etiqueta that matches the filter.
     * @param {EtiquetaFindUniqueArgs} args - Arguments to find a Etiqueta
     * @example
     * // Get one Etiqueta
     * const etiqueta = await prisma.etiqueta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EtiquetaFindUniqueArgs>(args: SelectSubset<T, EtiquetaFindUniqueArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Etiqueta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EtiquetaFindUniqueOrThrowArgs} args - Arguments to find a Etiqueta
     * @example
     * // Get one Etiqueta
     * const etiqueta = await prisma.etiqueta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EtiquetaFindUniqueOrThrowArgs>(args: SelectSubset<T, EtiquetaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etiqueta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaFindFirstArgs} args - Arguments to find a Etiqueta
     * @example
     * // Get one Etiqueta
     * const etiqueta = await prisma.etiqueta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EtiquetaFindFirstArgs>(args?: SelectSubset<T, EtiquetaFindFirstArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Etiqueta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaFindFirstOrThrowArgs} args - Arguments to find a Etiqueta
     * @example
     * // Get one Etiqueta
     * const etiqueta = await prisma.etiqueta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EtiquetaFindFirstOrThrowArgs>(args?: SelectSubset<T, EtiquetaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Etiquetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Etiquetas
     * const etiquetas = await prisma.etiqueta.findMany()
     * 
     * // Get first 10 Etiquetas
     * const etiquetas = await prisma.etiqueta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const etiquetaWithIdOnly = await prisma.etiqueta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EtiquetaFindManyArgs>(args?: SelectSubset<T, EtiquetaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Etiqueta.
     * @param {EtiquetaCreateArgs} args - Arguments to create a Etiqueta.
     * @example
     * // Create one Etiqueta
     * const Etiqueta = await prisma.etiqueta.create({
     *   data: {
     *     // ... data to create a Etiqueta
     *   }
     * })
     * 
     */
    create<T extends EtiquetaCreateArgs>(args: SelectSubset<T, EtiquetaCreateArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Etiquetas.
     * @param {EtiquetaCreateManyArgs} args - Arguments to create many Etiquetas.
     * @example
     * // Create many Etiquetas
     * const etiqueta = await prisma.etiqueta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EtiquetaCreateManyArgs>(args?: SelectSubset<T, EtiquetaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Etiquetas and returns the data saved in the database.
     * @param {EtiquetaCreateManyAndReturnArgs} args - Arguments to create many Etiquetas.
     * @example
     * // Create many Etiquetas
     * const etiqueta = await prisma.etiqueta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Etiquetas and only return the `id`
     * const etiquetaWithIdOnly = await prisma.etiqueta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EtiquetaCreateManyAndReturnArgs>(args?: SelectSubset<T, EtiquetaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Etiqueta.
     * @param {EtiquetaDeleteArgs} args - Arguments to delete one Etiqueta.
     * @example
     * // Delete one Etiqueta
     * const Etiqueta = await prisma.etiqueta.delete({
     *   where: {
     *     // ... filter to delete one Etiqueta
     *   }
     * })
     * 
     */
    delete<T extends EtiquetaDeleteArgs>(args: SelectSubset<T, EtiquetaDeleteArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Etiqueta.
     * @param {EtiquetaUpdateArgs} args - Arguments to update one Etiqueta.
     * @example
     * // Update one Etiqueta
     * const etiqueta = await prisma.etiqueta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EtiquetaUpdateArgs>(args: SelectSubset<T, EtiquetaUpdateArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Etiquetas.
     * @param {EtiquetaDeleteManyArgs} args - Arguments to filter Etiquetas to delete.
     * @example
     * // Delete a few Etiquetas
     * const { count } = await prisma.etiqueta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EtiquetaDeleteManyArgs>(args?: SelectSubset<T, EtiquetaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Etiquetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Etiquetas
     * const etiqueta = await prisma.etiqueta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EtiquetaUpdateManyArgs>(args: SelectSubset<T, EtiquetaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Etiquetas and returns the data updated in the database.
     * @param {EtiquetaUpdateManyAndReturnArgs} args - Arguments to update many Etiquetas.
     * @example
     * // Update many Etiquetas
     * const etiqueta = await prisma.etiqueta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Etiquetas and only return the `id`
     * const etiquetaWithIdOnly = await prisma.etiqueta.updateManyAndReturn({
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
    updateManyAndReturn<T extends EtiquetaUpdateManyAndReturnArgs>(args: SelectSubset<T, EtiquetaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Etiqueta.
     * @param {EtiquetaUpsertArgs} args - Arguments to update or create a Etiqueta.
     * @example
     * // Update or create a Etiqueta
     * const etiqueta = await prisma.etiqueta.upsert({
     *   create: {
     *     // ... data to create a Etiqueta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Etiqueta we want to update
     *   }
     * })
     */
    upsert<T extends EtiquetaUpsertArgs>(args: SelectSubset<T, EtiquetaUpsertArgs<ExtArgs>>): Prisma__EtiquetaClient<$Result.GetResult<Prisma.$EtiquetaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Etiquetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaCountArgs} args - Arguments to filter Etiquetas to count.
     * @example
     * // Count the number of Etiquetas
     * const count = await prisma.etiqueta.count({
     *   where: {
     *     // ... the filter for the Etiquetas we want to count
     *   }
     * })
    **/
    count<T extends EtiquetaCountArgs>(
      args?: Subset<T, EtiquetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EtiquetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Etiqueta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EtiquetaAggregateArgs>(args: Subset<T, EtiquetaAggregateArgs>): Prisma.PrismaPromise<GetEtiquetaAggregateType<T>>

    /**
     * Group by Etiqueta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EtiquetaGroupByArgs} args - Group by arguments.
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
      T extends EtiquetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EtiquetaGroupByArgs['orderBy'] }
        : { orderBy?: EtiquetaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EtiquetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEtiquetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Etiqueta model
   */
  readonly fields: EtiquetaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Etiqueta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EtiquetaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repartidor<T extends Etiqueta$repartidorArgs<ExtArgs> = {}>(args?: Subset<T, Etiqueta$repartidorArgs<ExtArgs>>): Prisma__RepartidorClient<$Result.GetResult<Prisma.$RepartidorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Etiqueta model
   */
  interface EtiquetaFieldRefs {
    readonly id: FieldRef<"Etiqueta", 'Int'>
    readonly orderNumber: FieldRef<"Etiqueta", 'String'>
    readonly tipoEnvio: FieldRef<"Etiqueta", 'ServiceTypeEnum'>
    readonly remitenteNombre: FieldRef<"Etiqueta", 'String'>
    readonly remitenteDireccion: FieldRef<"Etiqueta", 'String'>
    readonly remitenteNotas: FieldRef<"Etiqueta", 'String'>
    readonly destinatarioNombre: FieldRef<"Etiqueta", 'String'>
    readonly destinatarioDireccion: FieldRef<"Etiqueta", 'String'>
    readonly destinatarioTelefono: FieldRef<"Etiqueta", 'String'>
    readonly montoACobrar: FieldRef<"Etiqueta", 'Decimal'>
    readonly destinatarioNotas: FieldRef<"Etiqueta", 'String'>
    readonly status: FieldRef<"Etiqueta", 'EtiquetaStatus'>
    readonly createdAt: FieldRef<"Etiqueta", 'DateTime'>
    readonly updatedAt: FieldRef<"Etiqueta", 'DateTime'>
    readonly deliveryStartTime: FieldRef<"Etiqueta", 'String'>
    readonly deliveryEndTime: FieldRef<"Etiqueta", 'String'>
    readonly repartidorId: FieldRef<"Etiqueta", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Etiqueta findUnique
   */
  export type EtiquetaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which Etiqueta to fetch.
     */
    where: EtiquetaWhereUniqueInput
  }

  /**
   * Etiqueta findUniqueOrThrow
   */
  export type EtiquetaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which Etiqueta to fetch.
     */
    where: EtiquetaWhereUniqueInput
  }

  /**
   * Etiqueta findFirst
   */
  export type EtiquetaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which Etiqueta to fetch.
     */
    where?: EtiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etiquetas to fetch.
     */
    orderBy?: EtiquetaOrderByWithRelationInput | EtiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etiquetas.
     */
    cursor?: EtiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etiquetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etiquetas.
     */
    distinct?: EtiquetaScalarFieldEnum | EtiquetaScalarFieldEnum[]
  }

  /**
   * Etiqueta findFirstOrThrow
   */
  export type EtiquetaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which Etiqueta to fetch.
     */
    where?: EtiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etiquetas to fetch.
     */
    orderBy?: EtiquetaOrderByWithRelationInput | EtiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Etiquetas.
     */
    cursor?: EtiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etiquetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etiquetas.
     */
    distinct?: EtiquetaScalarFieldEnum | EtiquetaScalarFieldEnum[]
  }

  /**
   * Etiqueta findMany
   */
  export type EtiquetaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * Filter, which Etiquetas to fetch.
     */
    where?: EtiquetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Etiquetas to fetch.
     */
    orderBy?: EtiquetaOrderByWithRelationInput | EtiquetaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Etiquetas.
     */
    cursor?: EtiquetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Etiquetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Etiquetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Etiquetas.
     */
    distinct?: EtiquetaScalarFieldEnum | EtiquetaScalarFieldEnum[]
  }

  /**
   * Etiqueta create
   */
  export type EtiquetaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * The data needed to create a Etiqueta.
     */
    data: XOR<EtiquetaCreateInput, EtiquetaUncheckedCreateInput>
  }

  /**
   * Etiqueta createMany
   */
  export type EtiquetaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Etiquetas.
     */
    data: EtiquetaCreateManyInput | EtiquetaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Etiqueta createManyAndReturn
   */
  export type EtiquetaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * The data used to create many Etiquetas.
     */
    data: EtiquetaCreateManyInput | EtiquetaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Etiqueta update
   */
  export type EtiquetaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * The data needed to update a Etiqueta.
     */
    data: XOR<EtiquetaUpdateInput, EtiquetaUncheckedUpdateInput>
    /**
     * Choose, which Etiqueta to update.
     */
    where: EtiquetaWhereUniqueInput
  }

  /**
   * Etiqueta updateMany
   */
  export type EtiquetaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Etiquetas.
     */
    data: XOR<EtiquetaUpdateManyMutationInput, EtiquetaUncheckedUpdateManyInput>
    /**
     * Filter which Etiquetas to update
     */
    where?: EtiquetaWhereInput
    /**
     * Limit how many Etiquetas to update.
     */
    limit?: number
  }

  /**
   * Etiqueta updateManyAndReturn
   */
  export type EtiquetaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * The data used to update Etiquetas.
     */
    data: XOR<EtiquetaUpdateManyMutationInput, EtiquetaUncheckedUpdateManyInput>
    /**
     * Filter which Etiquetas to update
     */
    where?: EtiquetaWhereInput
    /**
     * Limit how many Etiquetas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Etiqueta upsert
   */
  export type EtiquetaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * The filter to search for the Etiqueta to update in case it exists.
     */
    where: EtiquetaWhereUniqueInput
    /**
     * In case the Etiqueta found by the `where` argument doesn't exist, create a new Etiqueta with this data.
     */
    create: XOR<EtiquetaCreateInput, EtiquetaUncheckedCreateInput>
    /**
     * In case the Etiqueta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EtiquetaUpdateInput, EtiquetaUncheckedUpdateInput>
  }

  /**
   * Etiqueta delete
   */
  export type EtiquetaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
    /**
     * Filter which Etiqueta to delete.
     */
    where: EtiquetaWhereUniqueInput
  }

  /**
   * Etiqueta deleteMany
   */
  export type EtiquetaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Etiquetas to delete
     */
    where?: EtiquetaWhereInput
    /**
     * Limit how many Etiquetas to delete.
     */
    limit?: number
  }

  /**
   * Etiqueta.repartidor
   */
  export type Etiqueta$repartidorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repartidor
     */
    select?: RepartidorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repartidor
     */
    omit?: RepartidorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepartidorInclude<ExtArgs> | null
    where?: RepartidorWhereInput
  }

  /**
   * Etiqueta without action
   */
  export type EtiquetaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Etiqueta
     */
    select?: EtiquetaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Etiqueta
     */
    omit?: EtiquetaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EtiquetaInclude<ExtArgs> | null
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


  export const SocialPostScalarFieldEnum: {
    id: 'id',
    platform: 'platform',
    userName: 'userName',
    userAvatar: 'userAvatar',
    userUrl: 'userUrl',
    content: 'content',
    postUrl: 'postUrl',
    imageUrl: 'imageUrl',
    imageHint: 'imageHint',
    likes: 'likes',
    comments: 'comments',
    shares: 'shares',
    timestamp: 'timestamp'
  };

  export type SocialPostScalarFieldEnum = (typeof SocialPostScalarFieldEnum)[keyof typeof SocialPostScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lastName: 'lastName',
    phone: 'phone',
    email: 'email',
    address: 'address',
    addressLat: 'addressLat',
    addressLng: 'addressLng',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    repartidorId: 'repartidorId',
    serviceType: 'serviceType',
    status: 'status',
    originFullName: 'originFullName',
    originPhone: 'originPhone',
    originAddress: 'originAddress',
    originLat: 'originLat',
    originLng: 'originLng',
    pickupStreetAddress: 'pickupStreetAddress',
    destinationContactName: 'destinationContactName',
    destinationContactPhone: 'destinationContactPhone',
    destinationContactEmail: 'destinationContactEmail',
    destinationAddress: 'destinationAddress',
    destinationLat: 'destinationLat',
    destinationLng: 'destinationLng',
    deliveryAddress: 'deliveryAddress',
    deliveryNotes: 'deliveryNotes',
    pickupDate: 'pickupDate',
    pickupTimeFrom: 'pickupTimeFrom',
    pickupTimeTo: 'pickupTimeTo',
    deliveryDate: 'deliveryDate',
    deliveryTimeFrom: 'deliveryTimeFrom',
    deliveryTimeTo: 'deliveryTimeTo',
    distanceText: 'distanceText',
    durationText: 'durationText',
    quotedPrice: 'quotedPrice',
    shippingCost: 'shippingCost',
    totalCost: 'totalCost',
    clientNameAtOrder: 'clientNameAtOrder',
    clientPhoneAtOrder: 'clientPhoneAtOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    pickupDateTime: 'pickupDateTime',
    deliveryDateTime: 'deliveryDateTime'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const RepartidorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    vehicleType: 'vehicleType',
    licensePlate: 'licensePlate',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RepartidorScalarFieldEnum = (typeof RepartidorScalarFieldEnum)[keyof typeof RepartidorScalarFieldEnum]


  export const PriceRangeScalarFieldEnum: {
    id: 'id',
    serviceType: 'serviceType',
    distanciaMinKm: 'distanciaMinKm',
    distanciaMaxKm: 'distanciaMaxKm',
    precioRango: 'precioRango',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PriceRangeScalarFieldEnum = (typeof PriceRangeScalarFieldEnum)[keyof typeof PriceRangeScalarFieldEnum]


  export const EtiquetaScalarFieldEnum: {
    id: 'id',
    orderNumber: 'orderNumber',
    tipoEnvio: 'tipoEnvio',
    remitenteNombre: 'remitenteNombre',
    remitenteDireccion: 'remitenteDireccion',
    remitenteNotas: 'remitenteNotas',
    destinatarioNombre: 'destinatarioNombre',
    destinatarioDireccion: 'destinatarioDireccion',
    destinatarioTelefono: 'destinatarioTelefono',
    montoACobrar: 'montoACobrar',
    destinatarioNotas: 'destinatarioNotas',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deliveryStartTime: 'deliveryStartTime',
    deliveryEndTime: 'deliveryEndTime',
    repartidorId: 'repartidorId'
  };

  export type EtiquetaScalarFieldEnum = (typeof EtiquetaScalarFieldEnum)[keyof typeof EtiquetaScalarFieldEnum]


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
   * Reference to a field of type 'SocialPlatformEnum'
   */
  export type EnumSocialPlatformEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SocialPlatformEnum'>
    


  /**
   * Reference to a field of type 'SocialPlatformEnum[]'
   */
  export type ListEnumSocialPlatformEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SocialPlatformEnum[]'>
    


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ServiceTypeEnum'
   */
  export type EnumServiceTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceTypeEnum'>
    


  /**
   * Reference to a field of type 'ServiceTypeEnum[]'
   */
  export type ListEnumServiceTypeEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServiceTypeEnum[]'>
    


  /**
   * Reference to a field of type 'OrderStatusEnum'
   */
  export type EnumOrderStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatusEnum'>
    


  /**
   * Reference to a field of type 'OrderStatusEnum[]'
   */
  export type ListEnumOrderStatusEnumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatusEnum[]'>
    


  /**
   * Reference to a field of type 'EtiquetaStatus'
   */
  export type EnumEtiquetaStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EtiquetaStatus'>
    


  /**
   * Reference to a field of type 'EtiquetaStatus[]'
   */
  export type ListEnumEtiquetaStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EtiquetaStatus[]'>
    


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


  export type SocialPostWhereInput = {
    AND?: SocialPostWhereInput | SocialPostWhereInput[]
    OR?: SocialPostWhereInput[]
    NOT?: SocialPostWhereInput | SocialPostWhereInput[]
    id?: IntFilter<"SocialPost"> | number
    platform?: EnumSocialPlatformEnumFilter<"SocialPost"> | $Enums.SocialPlatformEnum
    userName?: StringFilter<"SocialPost"> | string
    userAvatar?: StringNullableFilter<"SocialPost"> | string | null
    userUrl?: StringNullableFilter<"SocialPost"> | string | null
    content?: StringFilter<"SocialPost"> | string
    postUrl?: StringFilter<"SocialPost"> | string
    imageUrl?: StringNullableFilter<"SocialPost"> | string | null
    imageHint?: StringNullableFilter<"SocialPost"> | string | null
    likes?: IntNullableFilter<"SocialPost"> | number | null
    comments?: IntNullableFilter<"SocialPost"> | number | null
    shares?: IntNullableFilter<"SocialPost"> | number | null
    timestamp?: DateTimeFilter<"SocialPost"> | Date | string
  }

  export type SocialPostOrderByWithRelationInput = {
    id?: SortOrder
    platform?: SortOrder
    userName?: SortOrder
    userAvatar?: SortOrderInput | SortOrder
    userUrl?: SortOrderInput | SortOrder
    content?: SortOrder
    postUrl?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageHint?: SortOrderInput | SortOrder
    likes?: SortOrderInput | SortOrder
    comments?: SortOrderInput | SortOrder
    shares?: SortOrderInput | SortOrder
    timestamp?: SortOrder
  }

  export type SocialPostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    postUrl?: string
    AND?: SocialPostWhereInput | SocialPostWhereInput[]
    OR?: SocialPostWhereInput[]
    NOT?: SocialPostWhereInput | SocialPostWhereInput[]
    platform?: EnumSocialPlatformEnumFilter<"SocialPost"> | $Enums.SocialPlatformEnum
    userName?: StringFilter<"SocialPost"> | string
    userAvatar?: StringNullableFilter<"SocialPost"> | string | null
    userUrl?: StringNullableFilter<"SocialPost"> | string | null
    content?: StringFilter<"SocialPost"> | string
    imageUrl?: StringNullableFilter<"SocialPost"> | string | null
    imageHint?: StringNullableFilter<"SocialPost"> | string | null
    likes?: IntNullableFilter<"SocialPost"> | number | null
    comments?: IntNullableFilter<"SocialPost"> | number | null
    shares?: IntNullableFilter<"SocialPost"> | number | null
    timestamp?: DateTimeFilter<"SocialPost"> | Date | string
  }, "id" | "postUrl">

  export type SocialPostOrderByWithAggregationInput = {
    id?: SortOrder
    platform?: SortOrder
    userName?: SortOrder
    userAvatar?: SortOrderInput | SortOrder
    userUrl?: SortOrderInput | SortOrder
    content?: SortOrder
    postUrl?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    imageHint?: SortOrderInput | SortOrder
    likes?: SortOrderInput | SortOrder
    comments?: SortOrderInput | SortOrder
    shares?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: SocialPostCountOrderByAggregateInput
    _avg?: SocialPostAvgOrderByAggregateInput
    _max?: SocialPostMaxOrderByAggregateInput
    _min?: SocialPostMinOrderByAggregateInput
    _sum?: SocialPostSumOrderByAggregateInput
  }

  export type SocialPostScalarWhereWithAggregatesInput = {
    AND?: SocialPostScalarWhereWithAggregatesInput | SocialPostScalarWhereWithAggregatesInput[]
    OR?: SocialPostScalarWhereWithAggregatesInput[]
    NOT?: SocialPostScalarWhereWithAggregatesInput | SocialPostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SocialPost"> | number
    platform?: EnumSocialPlatformEnumWithAggregatesFilter<"SocialPost"> | $Enums.SocialPlatformEnum
    userName?: StringWithAggregatesFilter<"SocialPost"> | string
    userAvatar?: StringNullableWithAggregatesFilter<"SocialPost"> | string | null
    userUrl?: StringNullableWithAggregatesFilter<"SocialPost"> | string | null
    content?: StringWithAggregatesFilter<"SocialPost"> | string
    postUrl?: StringWithAggregatesFilter<"SocialPost"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"SocialPost"> | string | null
    imageHint?: StringNullableWithAggregatesFilter<"SocialPost"> | string | null
    likes?: IntNullableWithAggregatesFilter<"SocialPost"> | number | null
    comments?: IntNullableWithAggregatesFilter<"SocialPost"> | number | null
    shares?: IntNullableWithAggregatesFilter<"SocialPost"> | number | null
    timestamp?: DateTimeWithAggregatesFilter<"SocialPost"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: IntFilter<"Client"> | number
    name?: StringFilter<"Client"> | string
    lastName?: StringNullableFilter<"Client"> | string | null
    phone?: StringNullableFilter<"Client"> | string | null
    email?: StringNullableFilter<"Client"> | string | null
    address?: StringFilter<"Client"> | string
    addressLat?: DecimalNullableFilter<"Client"> | Decimal | DecimalJsLike | number | string | null
    addressLng?: DecimalNullableFilter<"Client"> | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFilter<"Client"> | boolean
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    orders?: OrderListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrder
    addressLat?: SortOrderInput | SortOrder
    addressLng?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone?: string
    email?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    lastName?: StringNullableFilter<"Client"> | string | null
    address?: StringFilter<"Client"> | string
    addressLat?: DecimalNullableFilter<"Client"> | Decimal | DecimalJsLike | number | string | null
    addressLng?: DecimalNullableFilter<"Client"> | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFilter<"Client"> | boolean
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    orders?: OrderListRelationFilter
  }, "id" | "phone" | "email">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrder
    addressLat?: SortOrderInput | SortOrder
    addressLng?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Client"> | number
    name?: StringWithAggregatesFilter<"Client"> | string
    lastName?: StringNullableWithAggregatesFilter<"Client"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Client"> | string | null
    email?: StringNullableWithAggregatesFilter<"Client"> | string | null
    address?: StringWithAggregatesFilter<"Client"> | string
    addressLat?: DecimalNullableWithAggregatesFilter<"Client"> | Decimal | DecimalJsLike | number | string | null
    addressLng?: DecimalNullableWithAggregatesFilter<"Client"> | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolWithAggregatesFilter<"Client"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    clientId?: IntNullableFilter<"Order"> | number | null
    repartidorId?: IntNullableFilter<"Order"> | number | null
    serviceType?: EnumServiceTypeEnumFilter<"Order"> | $Enums.ServiceTypeEnum
    status?: EnumOrderStatusEnumFilter<"Order"> | $Enums.OrderStatusEnum
    originFullName?: StringFilter<"Order"> | string
    originPhone?: StringFilter<"Order"> | string
    originAddress?: StringFilter<"Order"> | string
    originLat?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    originLng?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    pickupStreetAddress?: StringNullableFilter<"Order"> | string | null
    destinationContactName?: StringFilter<"Order"> | string
    destinationContactPhone?: StringFilter<"Order"> | string
    destinationContactEmail?: StringNullableFilter<"Order"> | string | null
    destinationAddress?: StringFilter<"Order"> | string
    destinationLat?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    destinationLng?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    deliveryAddress?: StringNullableFilter<"Order"> | string | null
    deliveryNotes?: StringNullableFilter<"Order"> | string | null
    pickupDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    pickupTimeFrom?: StringNullableFilter<"Order"> | string | null
    pickupTimeTo?: StringNullableFilter<"Order"> | string | null
    deliveryDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    deliveryTimeFrom?: StringNullableFilter<"Order"> | string | null
    deliveryTimeTo?: StringNullableFilter<"Order"> | string | null
    distanceText?: StringNullableFilter<"Order"> | string | null
    durationText?: StringNullableFilter<"Order"> | string | null
    quotedPrice?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    shippingCost?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    totalCost?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    clientNameAtOrder?: StringNullableFilter<"Order"> | string | null
    clientPhoneAtOrder?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    pickupDateTime?: DateTimeNullableFilter<"Order"> | Date | string | null
    deliveryDateTime?: DateTimeNullableFilter<"Order"> | Date | string | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    repartidor?: XOR<RepartidorNullableScalarRelationFilter, RepartidorWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    repartidorId?: SortOrderInput | SortOrder
    serviceType?: SortOrder
    status?: SortOrder
    originFullName?: SortOrder
    originPhone?: SortOrder
    originAddress?: SortOrder
    originLat?: SortOrderInput | SortOrder
    originLng?: SortOrderInput | SortOrder
    pickupStreetAddress?: SortOrderInput | SortOrder
    destinationContactName?: SortOrder
    destinationContactPhone?: SortOrder
    destinationContactEmail?: SortOrderInput | SortOrder
    destinationAddress?: SortOrder
    destinationLat?: SortOrderInput | SortOrder
    destinationLng?: SortOrderInput | SortOrder
    deliveryAddress?: SortOrderInput | SortOrder
    deliveryNotes?: SortOrderInput | SortOrder
    pickupDate?: SortOrderInput | SortOrder
    pickupTimeFrom?: SortOrderInput | SortOrder
    pickupTimeTo?: SortOrderInput | SortOrder
    deliveryDate?: SortOrderInput | SortOrder
    deliveryTimeFrom?: SortOrderInput | SortOrder
    deliveryTimeTo?: SortOrderInput | SortOrder
    distanceText?: SortOrderInput | SortOrder
    durationText?: SortOrderInput | SortOrder
    quotedPrice?: SortOrderInput | SortOrder
    shippingCost?: SortOrderInput | SortOrder
    totalCost?: SortOrderInput | SortOrder
    clientNameAtOrder?: SortOrderInput | SortOrder
    clientPhoneAtOrder?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pickupDateTime?: SortOrderInput | SortOrder
    deliveryDateTime?: SortOrderInput | SortOrder
    client?: ClientOrderByWithRelationInput
    repartidor?: RepartidorOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    clientId?: IntNullableFilter<"Order"> | number | null
    repartidorId?: IntNullableFilter<"Order"> | number | null
    serviceType?: EnumServiceTypeEnumFilter<"Order"> | $Enums.ServiceTypeEnum
    status?: EnumOrderStatusEnumFilter<"Order"> | $Enums.OrderStatusEnum
    originFullName?: StringFilter<"Order"> | string
    originPhone?: StringFilter<"Order"> | string
    originAddress?: StringFilter<"Order"> | string
    originLat?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    originLng?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    pickupStreetAddress?: StringNullableFilter<"Order"> | string | null
    destinationContactName?: StringFilter<"Order"> | string
    destinationContactPhone?: StringFilter<"Order"> | string
    destinationContactEmail?: StringNullableFilter<"Order"> | string | null
    destinationAddress?: StringFilter<"Order"> | string
    destinationLat?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    destinationLng?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    deliveryAddress?: StringNullableFilter<"Order"> | string | null
    deliveryNotes?: StringNullableFilter<"Order"> | string | null
    pickupDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    pickupTimeFrom?: StringNullableFilter<"Order"> | string | null
    pickupTimeTo?: StringNullableFilter<"Order"> | string | null
    deliveryDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    deliveryTimeFrom?: StringNullableFilter<"Order"> | string | null
    deliveryTimeTo?: StringNullableFilter<"Order"> | string | null
    distanceText?: StringNullableFilter<"Order"> | string | null
    durationText?: StringNullableFilter<"Order"> | string | null
    quotedPrice?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    shippingCost?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    totalCost?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    clientNameAtOrder?: StringNullableFilter<"Order"> | string | null
    clientPhoneAtOrder?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    pickupDateTime?: DateTimeNullableFilter<"Order"> | Date | string | null
    deliveryDateTime?: DateTimeNullableFilter<"Order"> | Date | string | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
    repartidor?: XOR<RepartidorNullableScalarRelationFilter, RepartidorWhereInput> | null
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrderInput | SortOrder
    repartidorId?: SortOrderInput | SortOrder
    serviceType?: SortOrder
    status?: SortOrder
    originFullName?: SortOrder
    originPhone?: SortOrder
    originAddress?: SortOrder
    originLat?: SortOrderInput | SortOrder
    originLng?: SortOrderInput | SortOrder
    pickupStreetAddress?: SortOrderInput | SortOrder
    destinationContactName?: SortOrder
    destinationContactPhone?: SortOrder
    destinationContactEmail?: SortOrderInput | SortOrder
    destinationAddress?: SortOrder
    destinationLat?: SortOrderInput | SortOrder
    destinationLng?: SortOrderInput | SortOrder
    deliveryAddress?: SortOrderInput | SortOrder
    deliveryNotes?: SortOrderInput | SortOrder
    pickupDate?: SortOrderInput | SortOrder
    pickupTimeFrom?: SortOrderInput | SortOrder
    pickupTimeTo?: SortOrderInput | SortOrder
    deliveryDate?: SortOrderInput | SortOrder
    deliveryTimeFrom?: SortOrderInput | SortOrder
    deliveryTimeTo?: SortOrderInput | SortOrder
    distanceText?: SortOrderInput | SortOrder
    durationText?: SortOrderInput | SortOrder
    quotedPrice?: SortOrderInput | SortOrder
    shippingCost?: SortOrderInput | SortOrder
    totalCost?: SortOrderInput | SortOrder
    clientNameAtOrder?: SortOrderInput | SortOrder
    clientPhoneAtOrder?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pickupDateTime?: SortOrderInput | SortOrder
    deliveryDateTime?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    clientId?: IntNullableWithAggregatesFilter<"Order"> | number | null
    repartidorId?: IntNullableWithAggregatesFilter<"Order"> | number | null
    serviceType?: EnumServiceTypeEnumWithAggregatesFilter<"Order"> | $Enums.ServiceTypeEnum
    status?: EnumOrderStatusEnumWithAggregatesFilter<"Order"> | $Enums.OrderStatusEnum
    originFullName?: StringWithAggregatesFilter<"Order"> | string
    originPhone?: StringWithAggregatesFilter<"Order"> | string
    originAddress?: StringWithAggregatesFilter<"Order"> | string
    originLat?: DecimalNullableWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    originLng?: DecimalNullableWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    pickupStreetAddress?: StringNullableWithAggregatesFilter<"Order"> | string | null
    destinationContactName?: StringWithAggregatesFilter<"Order"> | string
    destinationContactPhone?: StringWithAggregatesFilter<"Order"> | string
    destinationContactEmail?: StringNullableWithAggregatesFilter<"Order"> | string | null
    destinationAddress?: StringWithAggregatesFilter<"Order"> | string
    destinationLat?: DecimalNullableWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    destinationLng?: DecimalNullableWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    deliveryAddress?: StringNullableWithAggregatesFilter<"Order"> | string | null
    deliveryNotes?: StringNullableWithAggregatesFilter<"Order"> | string | null
    pickupDate?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    pickupTimeFrom?: StringNullableWithAggregatesFilter<"Order"> | string | null
    pickupTimeTo?: StringNullableWithAggregatesFilter<"Order"> | string | null
    deliveryDate?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    deliveryTimeFrom?: StringNullableWithAggregatesFilter<"Order"> | string | null
    deliveryTimeTo?: StringNullableWithAggregatesFilter<"Order"> | string | null
    distanceText?: StringNullableWithAggregatesFilter<"Order"> | string | null
    durationText?: StringNullableWithAggregatesFilter<"Order"> | string | null
    quotedPrice?: DecimalNullableWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    shippingCost?: DecimalNullableWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    totalCost?: DecimalNullableWithAggregatesFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    clientNameAtOrder?: StringNullableWithAggregatesFilter<"Order"> | string | null
    clientPhoneAtOrder?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    pickupDateTime?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    deliveryDateTime?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
  }

  export type RepartidorWhereInput = {
    AND?: RepartidorWhereInput | RepartidorWhereInput[]
    OR?: RepartidorWhereInput[]
    NOT?: RepartidorWhereInput | RepartidorWhereInput[]
    id?: IntFilter<"Repartidor"> | number
    name?: StringFilter<"Repartidor"> | string
    phone?: StringFilter<"Repartidor"> | string
    vehicleType?: StringFilter<"Repartidor"> | string
    licensePlate?: StringFilter<"Repartidor"> | string
    isActive?: BoolFilter<"Repartidor"> | boolean
    createdAt?: DateTimeFilter<"Repartidor"> | Date | string
    updatedAt?: DateTimeFilter<"Repartidor"> | Date | string
    orders?: OrderListRelationFilter
    etiquetas?: EtiquetaListRelationFilter
  }

  export type RepartidorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    vehicleType?: SortOrder
    licensePlate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    etiquetas?: EtiquetaOrderByRelationAggregateInput
  }

  export type RepartidorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone?: string
    licensePlate?: string
    AND?: RepartidorWhereInput | RepartidorWhereInput[]
    OR?: RepartidorWhereInput[]
    NOT?: RepartidorWhereInput | RepartidorWhereInput[]
    name?: StringFilter<"Repartidor"> | string
    vehicleType?: StringFilter<"Repartidor"> | string
    isActive?: BoolFilter<"Repartidor"> | boolean
    createdAt?: DateTimeFilter<"Repartidor"> | Date | string
    updatedAt?: DateTimeFilter<"Repartidor"> | Date | string
    orders?: OrderListRelationFilter
    etiquetas?: EtiquetaListRelationFilter
  }, "id" | "phone" | "licensePlate">

  export type RepartidorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    vehicleType?: SortOrder
    licensePlate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RepartidorCountOrderByAggregateInput
    _avg?: RepartidorAvgOrderByAggregateInput
    _max?: RepartidorMaxOrderByAggregateInput
    _min?: RepartidorMinOrderByAggregateInput
    _sum?: RepartidorSumOrderByAggregateInput
  }

  export type RepartidorScalarWhereWithAggregatesInput = {
    AND?: RepartidorScalarWhereWithAggregatesInput | RepartidorScalarWhereWithAggregatesInput[]
    OR?: RepartidorScalarWhereWithAggregatesInput[]
    NOT?: RepartidorScalarWhereWithAggregatesInput | RepartidorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Repartidor"> | number
    name?: StringWithAggregatesFilter<"Repartidor"> | string
    phone?: StringWithAggregatesFilter<"Repartidor"> | string
    vehicleType?: StringWithAggregatesFilter<"Repartidor"> | string
    licensePlate?: StringWithAggregatesFilter<"Repartidor"> | string
    isActive?: BoolWithAggregatesFilter<"Repartidor"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Repartidor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Repartidor"> | Date | string
  }

  export type PriceRangeWhereInput = {
    AND?: PriceRangeWhereInput | PriceRangeWhereInput[]
    OR?: PriceRangeWhereInput[]
    NOT?: PriceRangeWhereInput | PriceRangeWhereInput[]
    id?: IntFilter<"PriceRange"> | number
    serviceType?: EnumServiceTypeEnumFilter<"PriceRange"> | $Enums.ServiceTypeEnum
    distanciaMinKm?: DecimalFilter<"PriceRange"> | Decimal | DecimalJsLike | number | string
    distanciaMaxKm?: DecimalFilter<"PriceRange"> | Decimal | DecimalJsLike | number | string
    precioRango?: DecimalFilter<"PriceRange"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"PriceRange"> | boolean
    createdAt?: DateTimeFilter<"PriceRange"> | Date | string
    updatedAt?: DateTimeFilter<"PriceRange"> | Date | string
  }

  export type PriceRangeOrderByWithRelationInput = {
    id?: SortOrder
    serviceType?: SortOrder
    distanciaMinKm?: SortOrder
    distanciaMaxKm?: SortOrder
    precioRango?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceRangeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    serviceType_distanciaMinKm_distanciaMaxKm?: PriceRangeServiceTypeDistanciaMinKmDistanciaMaxKmCompoundUniqueInput
    AND?: PriceRangeWhereInput | PriceRangeWhereInput[]
    OR?: PriceRangeWhereInput[]
    NOT?: PriceRangeWhereInput | PriceRangeWhereInput[]
    serviceType?: EnumServiceTypeEnumFilter<"PriceRange"> | $Enums.ServiceTypeEnum
    distanciaMinKm?: DecimalFilter<"PriceRange"> | Decimal | DecimalJsLike | number | string
    distanciaMaxKm?: DecimalFilter<"PriceRange"> | Decimal | DecimalJsLike | number | string
    precioRango?: DecimalFilter<"PriceRange"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"PriceRange"> | boolean
    createdAt?: DateTimeFilter<"PriceRange"> | Date | string
    updatedAt?: DateTimeFilter<"PriceRange"> | Date | string
  }, "id" | "serviceType_distanciaMinKm_distanciaMaxKm">

  export type PriceRangeOrderByWithAggregationInput = {
    id?: SortOrder
    serviceType?: SortOrder
    distanciaMinKm?: SortOrder
    distanciaMaxKm?: SortOrder
    precioRango?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PriceRangeCountOrderByAggregateInput
    _avg?: PriceRangeAvgOrderByAggregateInput
    _max?: PriceRangeMaxOrderByAggregateInput
    _min?: PriceRangeMinOrderByAggregateInput
    _sum?: PriceRangeSumOrderByAggregateInput
  }

  export type PriceRangeScalarWhereWithAggregatesInput = {
    AND?: PriceRangeScalarWhereWithAggregatesInput | PriceRangeScalarWhereWithAggregatesInput[]
    OR?: PriceRangeScalarWhereWithAggregatesInput[]
    NOT?: PriceRangeScalarWhereWithAggregatesInput | PriceRangeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PriceRange"> | number
    serviceType?: EnumServiceTypeEnumWithAggregatesFilter<"PriceRange"> | $Enums.ServiceTypeEnum
    distanciaMinKm?: DecimalWithAggregatesFilter<"PriceRange"> | Decimal | DecimalJsLike | number | string
    distanciaMaxKm?: DecimalWithAggregatesFilter<"PriceRange"> | Decimal | DecimalJsLike | number | string
    precioRango?: DecimalWithAggregatesFilter<"PriceRange"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolWithAggregatesFilter<"PriceRange"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PriceRange"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PriceRange"> | Date | string
  }

  export type EtiquetaWhereInput = {
    AND?: EtiquetaWhereInput | EtiquetaWhereInput[]
    OR?: EtiquetaWhereInput[]
    NOT?: EtiquetaWhereInput | EtiquetaWhereInput[]
    id?: IntFilter<"Etiqueta"> | number
    orderNumber?: StringNullableFilter<"Etiqueta"> | string | null
    tipoEnvio?: EnumServiceTypeEnumFilter<"Etiqueta"> | $Enums.ServiceTypeEnum
    remitenteNombre?: StringFilter<"Etiqueta"> | string
    remitenteDireccion?: StringFilter<"Etiqueta"> | string
    remitenteNotas?: StringNullableFilter<"Etiqueta"> | string | null
    destinatarioNombre?: StringFilter<"Etiqueta"> | string
    destinatarioDireccion?: StringFilter<"Etiqueta"> | string
    destinatarioTelefono?: StringFilter<"Etiqueta"> | string
    montoACobrar?: DecimalNullableFilter<"Etiqueta"> | Decimal | DecimalJsLike | number | string | null
    destinatarioNotas?: StringNullableFilter<"Etiqueta"> | string | null
    status?: EnumEtiquetaStatusFilter<"Etiqueta"> | $Enums.EtiquetaStatus
    createdAt?: DateTimeFilter<"Etiqueta"> | Date | string
    updatedAt?: DateTimeFilter<"Etiqueta"> | Date | string
    deliveryStartTime?: StringNullableFilter<"Etiqueta"> | string | null
    deliveryEndTime?: StringNullableFilter<"Etiqueta"> | string | null
    repartidorId?: IntNullableFilter<"Etiqueta"> | number | null
    repartidor?: XOR<RepartidorNullableScalarRelationFilter, RepartidorWhereInput> | null
  }

  export type EtiquetaOrderByWithRelationInput = {
    id?: SortOrder
    orderNumber?: SortOrderInput | SortOrder
    tipoEnvio?: SortOrder
    remitenteNombre?: SortOrder
    remitenteDireccion?: SortOrder
    remitenteNotas?: SortOrderInput | SortOrder
    destinatarioNombre?: SortOrder
    destinatarioDireccion?: SortOrder
    destinatarioTelefono?: SortOrder
    montoACobrar?: SortOrderInput | SortOrder
    destinatarioNotas?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveryStartTime?: SortOrderInput | SortOrder
    deliveryEndTime?: SortOrderInput | SortOrder
    repartidorId?: SortOrderInput | SortOrder
    repartidor?: RepartidorOrderByWithRelationInput
  }

  export type EtiquetaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    orderNumber?: string
    AND?: EtiquetaWhereInput | EtiquetaWhereInput[]
    OR?: EtiquetaWhereInput[]
    NOT?: EtiquetaWhereInput | EtiquetaWhereInput[]
    tipoEnvio?: EnumServiceTypeEnumFilter<"Etiqueta"> | $Enums.ServiceTypeEnum
    remitenteNombre?: StringFilter<"Etiqueta"> | string
    remitenteDireccion?: StringFilter<"Etiqueta"> | string
    remitenteNotas?: StringNullableFilter<"Etiqueta"> | string | null
    destinatarioNombre?: StringFilter<"Etiqueta"> | string
    destinatarioDireccion?: StringFilter<"Etiqueta"> | string
    destinatarioTelefono?: StringFilter<"Etiqueta"> | string
    montoACobrar?: DecimalNullableFilter<"Etiqueta"> | Decimal | DecimalJsLike | number | string | null
    destinatarioNotas?: StringNullableFilter<"Etiqueta"> | string | null
    status?: EnumEtiquetaStatusFilter<"Etiqueta"> | $Enums.EtiquetaStatus
    createdAt?: DateTimeFilter<"Etiqueta"> | Date | string
    updatedAt?: DateTimeFilter<"Etiqueta"> | Date | string
    deliveryStartTime?: StringNullableFilter<"Etiqueta"> | string | null
    deliveryEndTime?: StringNullableFilter<"Etiqueta"> | string | null
    repartidorId?: IntNullableFilter<"Etiqueta"> | number | null
    repartidor?: XOR<RepartidorNullableScalarRelationFilter, RepartidorWhereInput> | null
  }, "id" | "orderNumber">

  export type EtiquetaOrderByWithAggregationInput = {
    id?: SortOrder
    orderNumber?: SortOrderInput | SortOrder
    tipoEnvio?: SortOrder
    remitenteNombre?: SortOrder
    remitenteDireccion?: SortOrder
    remitenteNotas?: SortOrderInput | SortOrder
    destinatarioNombre?: SortOrder
    destinatarioDireccion?: SortOrder
    destinatarioTelefono?: SortOrder
    montoACobrar?: SortOrderInput | SortOrder
    destinatarioNotas?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveryStartTime?: SortOrderInput | SortOrder
    deliveryEndTime?: SortOrderInput | SortOrder
    repartidorId?: SortOrderInput | SortOrder
    _count?: EtiquetaCountOrderByAggregateInput
    _avg?: EtiquetaAvgOrderByAggregateInput
    _max?: EtiquetaMaxOrderByAggregateInput
    _min?: EtiquetaMinOrderByAggregateInput
    _sum?: EtiquetaSumOrderByAggregateInput
  }

  export type EtiquetaScalarWhereWithAggregatesInput = {
    AND?: EtiquetaScalarWhereWithAggregatesInput | EtiquetaScalarWhereWithAggregatesInput[]
    OR?: EtiquetaScalarWhereWithAggregatesInput[]
    NOT?: EtiquetaScalarWhereWithAggregatesInput | EtiquetaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Etiqueta"> | number
    orderNumber?: StringNullableWithAggregatesFilter<"Etiqueta"> | string | null
    tipoEnvio?: EnumServiceTypeEnumWithAggregatesFilter<"Etiqueta"> | $Enums.ServiceTypeEnum
    remitenteNombre?: StringWithAggregatesFilter<"Etiqueta"> | string
    remitenteDireccion?: StringWithAggregatesFilter<"Etiqueta"> | string
    remitenteNotas?: StringNullableWithAggregatesFilter<"Etiqueta"> | string | null
    destinatarioNombre?: StringWithAggregatesFilter<"Etiqueta"> | string
    destinatarioDireccion?: StringWithAggregatesFilter<"Etiqueta"> | string
    destinatarioTelefono?: StringWithAggregatesFilter<"Etiqueta"> | string
    montoACobrar?: DecimalNullableWithAggregatesFilter<"Etiqueta"> | Decimal | DecimalJsLike | number | string | null
    destinatarioNotas?: StringNullableWithAggregatesFilter<"Etiqueta"> | string | null
    status?: EnumEtiquetaStatusWithAggregatesFilter<"Etiqueta"> | $Enums.EtiquetaStatus
    createdAt?: DateTimeWithAggregatesFilter<"Etiqueta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Etiqueta"> | Date | string
    deliveryStartTime?: StringNullableWithAggregatesFilter<"Etiqueta"> | string | null
    deliveryEndTime?: StringNullableWithAggregatesFilter<"Etiqueta"> | string | null
    repartidorId?: IntNullableWithAggregatesFilter<"Etiqueta"> | number | null
  }

  export type SocialPostCreateInput = {
    platform: $Enums.SocialPlatformEnum
    userName: string
    userAvatar?: string | null
    userUrl?: string | null
    content: string
    postUrl: string
    imageUrl?: string | null
    imageHint?: string | null
    likes?: number | null
    comments?: number | null
    shares?: number | null
    timestamp?: Date | string
  }

  export type SocialPostUncheckedCreateInput = {
    id?: number
    platform: $Enums.SocialPlatformEnum
    userName: string
    userAvatar?: string | null
    userUrl?: string | null
    content: string
    postUrl: string
    imageUrl?: string | null
    imageHint?: string | null
    likes?: number | null
    comments?: number | null
    shares?: number | null
    timestamp?: Date | string
  }

  export type SocialPostUpdateInput = {
    platform?: EnumSocialPlatformEnumFieldUpdateOperationsInput | $Enums.SocialPlatformEnum
    userName?: StringFieldUpdateOperationsInput | string
    userAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    userUrl?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    postUrl?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageHint?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableIntFieldUpdateOperationsInput | number | null
    shares?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: EnumSocialPlatformEnumFieldUpdateOperationsInput | $Enums.SocialPlatformEnum
    userName?: StringFieldUpdateOperationsInput | string
    userAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    userUrl?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    postUrl?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageHint?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableIntFieldUpdateOperationsInput | number | null
    shares?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialPostCreateManyInput = {
    id?: number
    platform: $Enums.SocialPlatformEnum
    userName: string
    userAvatar?: string | null
    userUrl?: string | null
    content: string
    postUrl: string
    imageUrl?: string | null
    imageHint?: string | null
    likes?: number | null
    comments?: number | null
    shares?: number | null
    timestamp?: Date | string
  }

  export type SocialPostUpdateManyMutationInput = {
    platform?: EnumSocialPlatformEnumFieldUpdateOperationsInput | $Enums.SocialPlatformEnum
    userName?: StringFieldUpdateOperationsInput | string
    userAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    userUrl?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    postUrl?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageHint?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableIntFieldUpdateOperationsInput | number | null
    shares?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: EnumSocialPlatformEnumFieldUpdateOperationsInput | $Enums.SocialPlatformEnum
    userName?: StringFieldUpdateOperationsInput | string
    userAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    userUrl?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    postUrl?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    imageHint?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: NullableIntFieldUpdateOperationsInput | number | null
    comments?: NullableIntFieldUpdateOperationsInput | number | null
    shares?: NullableIntFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    name: string
    lastName?: string | null
    phone?: string | null
    email?: string | null
    address: string
    addressLat?: Decimal | DecimalJsLike | number | string | null
    addressLng?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: number
    name: string
    lastName?: string | null
    phone?: string | null
    email?: string | null
    address: string
    addressLat?: Decimal | DecimalJsLike | number | string | null
    addressLng?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    addressLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    addressLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    addressLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    addressLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: number
    name: string
    lastName?: string | null
    phone?: string | null
    email?: string | null
    address: string
    addressLat?: Decimal | DecimalJsLike | number | string | null
    addressLng?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    addressLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    addressLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    addressLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    addressLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    serviceType: $Enums.ServiceTypeEnum
    status?: $Enums.OrderStatusEnum
    originFullName: string
    originPhone: string
    originAddress: string
    originLat?: Decimal | DecimalJsLike | number | string | null
    originLng?: Decimal | DecimalJsLike | number | string | null
    pickupStreetAddress?: string | null
    destinationContactName: string
    destinationContactPhone: string
    destinationContactEmail?: string | null
    destinationAddress: string
    destinationLat?: Decimal | DecimalJsLike | number | string | null
    destinationLng?: Decimal | DecimalJsLike | number | string | null
    deliveryAddress?: string | null
    deliveryNotes?: string | null
    pickupDate?: Date | string | null
    pickupTimeFrom?: string | null
    pickupTimeTo?: string | null
    deliveryDate?: Date | string | null
    deliveryTimeFrom?: string | null
    deliveryTimeTo?: string | null
    distanceText?: string | null
    durationText?: string | null
    quotedPrice?: Decimal | DecimalJsLike | number | string | null
    shippingCost?: Decimal | DecimalJsLike | number | string | null
    totalCost?: Decimal | DecimalJsLike | number | string | null
    clientNameAtOrder?: string | null
    clientPhoneAtOrder?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pickupDateTime?: Date | string | null
    deliveryDateTime?: Date | string | null
    client?: ClientCreateNestedOneWithoutOrdersInput
    repartidor?: RepartidorCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    clientId?: number | null
    repartidorId?: number | null
    serviceType: $Enums.ServiceTypeEnum
    status?: $Enums.OrderStatusEnum
    originFullName: string
    originPhone: string
    originAddress: string
    originLat?: Decimal | DecimalJsLike | number | string | null
    originLng?: Decimal | DecimalJsLike | number | string | null
    pickupStreetAddress?: string | null
    destinationContactName: string
    destinationContactPhone: string
    destinationContactEmail?: string | null
    destinationAddress: string
    destinationLat?: Decimal | DecimalJsLike | number | string | null
    destinationLng?: Decimal | DecimalJsLike | number | string | null
    deliveryAddress?: string | null
    deliveryNotes?: string | null
    pickupDate?: Date | string | null
    pickupTimeFrom?: string | null
    pickupTimeTo?: string | null
    deliveryDate?: Date | string | null
    deliveryTimeFrom?: string | null
    deliveryTimeTo?: string | null
    distanceText?: string | null
    durationText?: string | null
    quotedPrice?: Decimal | DecimalJsLike | number | string | null
    shippingCost?: Decimal | DecimalJsLike | number | string | null
    totalCost?: Decimal | DecimalJsLike | number | string | null
    clientNameAtOrder?: string | null
    clientPhoneAtOrder?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pickupDateTime?: Date | string | null
    deliveryDateTime?: Date | string | null
  }

  export type OrderUpdateInput = {
    serviceType?: EnumServiceTypeEnumFieldUpdateOperationsInput | $Enums.ServiceTypeEnum
    status?: EnumOrderStatusEnumFieldUpdateOperationsInput | $Enums.OrderStatusEnum
    originFullName?: StringFieldUpdateOperationsInput | string
    originPhone?: StringFieldUpdateOperationsInput | string
    originAddress?: StringFieldUpdateOperationsInput | string
    originLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    originLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pickupStreetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    destinationContactName?: StringFieldUpdateOperationsInput | string
    destinationContactPhone?: StringFieldUpdateOperationsInput | string
    destinationContactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    destinationLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryNotes?: NullableStringFieldUpdateOperationsInput | string | null
    pickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickupTimeFrom?: NullableStringFieldUpdateOperationsInput | string | null
    pickupTimeTo?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveryTimeFrom?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryTimeTo?: NullableStringFieldUpdateOperationsInput | string | null
    distanceText?: NullableStringFieldUpdateOperationsInput | string | null
    durationText?: NullableStringFieldUpdateOperationsInput | string | null
    quotedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    shippingCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clientNameAtOrder?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhoneAtOrder?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveryDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientUpdateOneWithoutOrdersNestedInput
    repartidor?: RepartidorUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    repartidorId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceType?: EnumServiceTypeEnumFieldUpdateOperationsInput | $Enums.ServiceTypeEnum
    status?: EnumOrderStatusEnumFieldUpdateOperationsInput | $Enums.OrderStatusEnum
    originFullName?: StringFieldUpdateOperationsInput | string
    originPhone?: StringFieldUpdateOperationsInput | string
    originAddress?: StringFieldUpdateOperationsInput | string
    originLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    originLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pickupStreetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    destinationContactName?: StringFieldUpdateOperationsInput | string
    destinationContactPhone?: StringFieldUpdateOperationsInput | string
    destinationContactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    destinationLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryNotes?: NullableStringFieldUpdateOperationsInput | string | null
    pickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickupTimeFrom?: NullableStringFieldUpdateOperationsInput | string | null
    pickupTimeTo?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveryTimeFrom?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryTimeTo?: NullableStringFieldUpdateOperationsInput | string | null
    distanceText?: NullableStringFieldUpdateOperationsInput | string | null
    durationText?: NullableStringFieldUpdateOperationsInput | string | null
    quotedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    shippingCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clientNameAtOrder?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhoneAtOrder?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveryDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderCreateManyInput = {
    id?: number
    clientId?: number | null
    repartidorId?: number | null
    serviceType: $Enums.ServiceTypeEnum
    status?: $Enums.OrderStatusEnum
    originFullName: string
    originPhone: string
    originAddress: string
    originLat?: Decimal | DecimalJsLike | number | string | null
    originLng?: Decimal | DecimalJsLike | number | string | null
    pickupStreetAddress?: string | null
    destinationContactName: string
    destinationContactPhone: string
    destinationContactEmail?: string | null
    destinationAddress: string
    destinationLat?: Decimal | DecimalJsLike | number | string | null
    destinationLng?: Decimal | DecimalJsLike | number | string | null
    deliveryAddress?: string | null
    deliveryNotes?: string | null
    pickupDate?: Date | string | null
    pickupTimeFrom?: string | null
    pickupTimeTo?: string | null
    deliveryDate?: Date | string | null
    deliveryTimeFrom?: string | null
    deliveryTimeTo?: string | null
    distanceText?: string | null
    durationText?: string | null
    quotedPrice?: Decimal | DecimalJsLike | number | string | null
    shippingCost?: Decimal | DecimalJsLike | number | string | null
    totalCost?: Decimal | DecimalJsLike | number | string | null
    clientNameAtOrder?: string | null
    clientPhoneAtOrder?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pickupDateTime?: Date | string | null
    deliveryDateTime?: Date | string | null
  }

  export type OrderUpdateManyMutationInput = {
    serviceType?: EnumServiceTypeEnumFieldUpdateOperationsInput | $Enums.ServiceTypeEnum
    status?: EnumOrderStatusEnumFieldUpdateOperationsInput | $Enums.OrderStatusEnum
    originFullName?: StringFieldUpdateOperationsInput | string
    originPhone?: StringFieldUpdateOperationsInput | string
    originAddress?: StringFieldUpdateOperationsInput | string
    originLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    originLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pickupStreetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    destinationContactName?: StringFieldUpdateOperationsInput | string
    destinationContactPhone?: StringFieldUpdateOperationsInput | string
    destinationContactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    destinationLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryNotes?: NullableStringFieldUpdateOperationsInput | string | null
    pickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickupTimeFrom?: NullableStringFieldUpdateOperationsInput | string | null
    pickupTimeTo?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveryTimeFrom?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryTimeTo?: NullableStringFieldUpdateOperationsInput | string | null
    distanceText?: NullableStringFieldUpdateOperationsInput | string | null
    durationText?: NullableStringFieldUpdateOperationsInput | string | null
    quotedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    shippingCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clientNameAtOrder?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhoneAtOrder?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveryDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    repartidorId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceType?: EnumServiceTypeEnumFieldUpdateOperationsInput | $Enums.ServiceTypeEnum
    status?: EnumOrderStatusEnumFieldUpdateOperationsInput | $Enums.OrderStatusEnum
    originFullName?: StringFieldUpdateOperationsInput | string
    originPhone?: StringFieldUpdateOperationsInput | string
    originAddress?: StringFieldUpdateOperationsInput | string
    originLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    originLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pickupStreetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    destinationContactName?: StringFieldUpdateOperationsInput | string
    destinationContactPhone?: StringFieldUpdateOperationsInput | string
    destinationContactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    destinationLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryNotes?: NullableStringFieldUpdateOperationsInput | string | null
    pickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickupTimeFrom?: NullableStringFieldUpdateOperationsInput | string | null
    pickupTimeTo?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveryTimeFrom?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryTimeTo?: NullableStringFieldUpdateOperationsInput | string | null
    distanceText?: NullableStringFieldUpdateOperationsInput | string | null
    durationText?: NullableStringFieldUpdateOperationsInput | string | null
    quotedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    shippingCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clientNameAtOrder?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhoneAtOrder?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveryDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RepartidorCreateInput = {
    name: string
    phone: string
    vehicleType: string
    licensePlate: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutRepartidorInput
    etiquetas?: EtiquetaCreateNestedManyWithoutRepartidorInput
  }

  export type RepartidorUncheckedCreateInput = {
    id?: number
    name: string
    phone: string
    vehicleType: string
    licensePlate: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutRepartidorInput
    etiquetas?: EtiquetaUncheckedCreateNestedManyWithoutRepartidorInput
  }

  export type RepartidorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutRepartidorNestedInput
    etiquetas?: EtiquetaUpdateManyWithoutRepartidorNestedInput
  }

  export type RepartidorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutRepartidorNestedInput
    etiquetas?: EtiquetaUncheckedUpdateManyWithoutRepartidorNestedInput
  }

  export type RepartidorCreateManyInput = {
    id?: number
    name: string
    phone: string
    vehicleType: string
    licensePlate: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RepartidorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepartidorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceRangeCreateInput = {
    serviceType: $Enums.ServiceTypeEnum
    distanciaMinKm: Decimal | DecimalJsLike | number | string
    distanciaMaxKm: Decimal | DecimalJsLike | number | string
    precioRango: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceRangeUncheckedCreateInput = {
    id?: number
    serviceType: $Enums.ServiceTypeEnum
    distanciaMinKm: Decimal | DecimalJsLike | number | string
    distanciaMaxKm: Decimal | DecimalJsLike | number | string
    precioRango: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceRangeUpdateInput = {
    serviceType?: EnumServiceTypeEnumFieldUpdateOperationsInput | $Enums.ServiceTypeEnum
    distanciaMinKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    distanciaMaxKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precioRango?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceRangeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceType?: EnumServiceTypeEnumFieldUpdateOperationsInput | $Enums.ServiceTypeEnum
    distanciaMinKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    distanciaMaxKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precioRango?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceRangeCreateManyInput = {
    id?: number
    serviceType: $Enums.ServiceTypeEnum
    distanciaMinKm: Decimal | DecimalJsLike | number | string
    distanciaMaxKm: Decimal | DecimalJsLike | number | string
    precioRango: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PriceRangeUpdateManyMutationInput = {
    serviceType?: EnumServiceTypeEnumFieldUpdateOperationsInput | $Enums.ServiceTypeEnum
    distanciaMinKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    distanciaMaxKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precioRango?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceRangeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    serviceType?: EnumServiceTypeEnumFieldUpdateOperationsInput | $Enums.ServiceTypeEnum
    distanciaMinKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    distanciaMaxKm?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    precioRango?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EtiquetaCreateInput = {
    orderNumber?: string | null
    tipoEnvio: $Enums.ServiceTypeEnum
    remitenteNombre: string
    remitenteDireccion: string
    remitenteNotas?: string | null
    destinatarioNombre: string
    destinatarioDireccion: string
    destinatarioTelefono: string
    montoACobrar?: Decimal | DecimalJsLike | number | string | null
    destinatarioNotas?: string | null
    status?: $Enums.EtiquetaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveryStartTime?: string | null
    deliveryEndTime?: string | null
    repartidor?: RepartidorCreateNestedOneWithoutEtiquetasInput
  }

  export type EtiquetaUncheckedCreateInput = {
    id?: number
    orderNumber?: string | null
    tipoEnvio: $Enums.ServiceTypeEnum
    remitenteNombre: string
    remitenteDireccion: string
    remitenteNotas?: string | null
    destinatarioNombre: string
    destinatarioDireccion: string
    destinatarioTelefono: string
    montoACobrar?: Decimal | DecimalJsLike | number | string | null
    destinatarioNotas?: string | null
    status?: $Enums.EtiquetaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveryStartTime?: string | null
    deliveryEndTime?: string | null
    repartidorId?: number | null
  }

  export type EtiquetaUpdateInput = {
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tipoEnvio?: EnumServiceTypeEnumFieldUpdateOperationsInput | $Enums.ServiceTypeEnum
    remitenteNombre?: StringFieldUpdateOperationsInput | string
    remitenteDireccion?: StringFieldUpdateOperationsInput | string
    remitenteNotas?: NullableStringFieldUpdateOperationsInput | string | null
    destinatarioNombre?: StringFieldUpdateOperationsInput | string
    destinatarioDireccion?: StringFieldUpdateOperationsInput | string
    destinatarioTelefono?: StringFieldUpdateOperationsInput | string
    montoACobrar?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    destinatarioNotas?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEtiquetaStatusFieldUpdateOperationsInput | $Enums.EtiquetaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    repartidor?: RepartidorUpdateOneWithoutEtiquetasNestedInput
  }

  export type EtiquetaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tipoEnvio?: EnumServiceTypeEnumFieldUpdateOperationsInput | $Enums.ServiceTypeEnum
    remitenteNombre?: StringFieldUpdateOperationsInput | string
    remitenteDireccion?: StringFieldUpdateOperationsInput | string
    remitenteNotas?: NullableStringFieldUpdateOperationsInput | string | null
    destinatarioNombre?: StringFieldUpdateOperationsInput | string
    destinatarioDireccion?: StringFieldUpdateOperationsInput | string
    destinatarioTelefono?: StringFieldUpdateOperationsInput | string
    montoACobrar?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    destinatarioNotas?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEtiquetaStatusFieldUpdateOperationsInput | $Enums.EtiquetaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    repartidorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type EtiquetaCreateManyInput = {
    id?: number
    orderNumber?: string | null
    tipoEnvio: $Enums.ServiceTypeEnum
    remitenteNombre: string
    remitenteDireccion: string
    remitenteNotas?: string | null
    destinatarioNombre: string
    destinatarioDireccion: string
    destinatarioTelefono: string
    montoACobrar?: Decimal | DecimalJsLike | number | string | null
    destinatarioNotas?: string | null
    status?: $Enums.EtiquetaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveryStartTime?: string | null
    deliveryEndTime?: string | null
    repartidorId?: number | null
  }

  export type EtiquetaUpdateManyMutationInput = {
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tipoEnvio?: EnumServiceTypeEnumFieldUpdateOperationsInput | $Enums.ServiceTypeEnum
    remitenteNombre?: StringFieldUpdateOperationsInput | string
    remitenteDireccion?: StringFieldUpdateOperationsInput | string
    remitenteNotas?: NullableStringFieldUpdateOperationsInput | string | null
    destinatarioNombre?: StringFieldUpdateOperationsInput | string
    destinatarioDireccion?: StringFieldUpdateOperationsInput | string
    destinatarioTelefono?: StringFieldUpdateOperationsInput | string
    montoACobrar?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    destinatarioNotas?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEtiquetaStatusFieldUpdateOperationsInput | $Enums.EtiquetaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryEndTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EtiquetaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tipoEnvio?: EnumServiceTypeEnumFieldUpdateOperationsInput | $Enums.ServiceTypeEnum
    remitenteNombre?: StringFieldUpdateOperationsInput | string
    remitenteDireccion?: StringFieldUpdateOperationsInput | string
    remitenteNotas?: NullableStringFieldUpdateOperationsInput | string | null
    destinatarioNombre?: StringFieldUpdateOperationsInput | string
    destinatarioDireccion?: StringFieldUpdateOperationsInput | string
    destinatarioTelefono?: StringFieldUpdateOperationsInput | string
    montoACobrar?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    destinatarioNotas?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEtiquetaStatusFieldUpdateOperationsInput | $Enums.EtiquetaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryEndTime?: NullableStringFieldUpdateOperationsInput | string | null
    repartidorId?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type EnumSocialPlatformEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.SocialPlatformEnum | EnumSocialPlatformEnumFieldRefInput<$PrismaModel>
    in?: $Enums.SocialPlatformEnum[] | ListEnumSocialPlatformEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.SocialPlatformEnum[] | ListEnumSocialPlatformEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumSocialPlatformEnumFilter<$PrismaModel> | $Enums.SocialPlatformEnum
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SocialPostCountOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    userName?: SortOrder
    userAvatar?: SortOrder
    userUrl?: SortOrder
    content?: SortOrder
    postUrl?: SortOrder
    imageUrl?: SortOrder
    imageHint?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    timestamp?: SortOrder
  }

  export type SocialPostAvgOrderByAggregateInput = {
    id?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
  }

  export type SocialPostMaxOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    userName?: SortOrder
    userAvatar?: SortOrder
    userUrl?: SortOrder
    content?: SortOrder
    postUrl?: SortOrder
    imageUrl?: SortOrder
    imageHint?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    timestamp?: SortOrder
  }

  export type SocialPostMinOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    userName?: SortOrder
    userAvatar?: SortOrder
    userUrl?: SortOrder
    content?: SortOrder
    postUrl?: SortOrder
    imageUrl?: SortOrder
    imageHint?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
    timestamp?: SortOrder
  }

  export type SocialPostSumOrderByAggregateInput = {
    id?: SortOrder
    likes?: SortOrder
    comments?: SortOrder
    shares?: SortOrder
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

  export type EnumSocialPlatformEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SocialPlatformEnum | EnumSocialPlatformEnumFieldRefInput<$PrismaModel>
    in?: $Enums.SocialPlatformEnum[] | ListEnumSocialPlatformEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.SocialPlatformEnum[] | ListEnumSocialPlatformEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumSocialPlatformEnumWithAggregatesFilter<$PrismaModel> | $Enums.SocialPlatformEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSocialPlatformEnumFilter<$PrismaModel>
    _max?: NestedEnumSocialPlatformEnumFilter<$PrismaModel>
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    addressLat?: SortOrder
    addressLng?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    id?: SortOrder
    addressLat?: SortOrder
    addressLng?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    addressLat?: SortOrder
    addressLng?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    addressLat?: SortOrder
    addressLng?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    id?: SortOrder
    addressLat?: SortOrder
    addressLng?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumServiceTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceTypeEnum | EnumServiceTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceTypeEnum[] | ListEnumServiceTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceTypeEnum[] | ListEnumServiceTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeEnumFilter<$PrismaModel> | $Enums.ServiceTypeEnum
  }

  export type EnumOrderStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatusEnum | EnumOrderStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatusEnum[] | ListEnumOrderStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatusEnum[] | ListEnumOrderStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusEnumFilter<$PrismaModel> | $Enums.OrderStatusEnum
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ClientNullableScalarRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type RepartidorNullableScalarRelationFilter = {
    is?: RepartidorWhereInput | null
    isNot?: RepartidorWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    repartidorId?: SortOrder
    serviceType?: SortOrder
    status?: SortOrder
    originFullName?: SortOrder
    originPhone?: SortOrder
    originAddress?: SortOrder
    originLat?: SortOrder
    originLng?: SortOrder
    pickupStreetAddress?: SortOrder
    destinationContactName?: SortOrder
    destinationContactPhone?: SortOrder
    destinationContactEmail?: SortOrder
    destinationAddress?: SortOrder
    destinationLat?: SortOrder
    destinationLng?: SortOrder
    deliveryAddress?: SortOrder
    deliveryNotes?: SortOrder
    pickupDate?: SortOrder
    pickupTimeFrom?: SortOrder
    pickupTimeTo?: SortOrder
    deliveryDate?: SortOrder
    deliveryTimeFrom?: SortOrder
    deliveryTimeTo?: SortOrder
    distanceText?: SortOrder
    durationText?: SortOrder
    quotedPrice?: SortOrder
    shippingCost?: SortOrder
    totalCost?: SortOrder
    clientNameAtOrder?: SortOrder
    clientPhoneAtOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pickupDateTime?: SortOrder
    deliveryDateTime?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    repartidorId?: SortOrder
    originLat?: SortOrder
    originLng?: SortOrder
    destinationLat?: SortOrder
    destinationLng?: SortOrder
    quotedPrice?: SortOrder
    shippingCost?: SortOrder
    totalCost?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    repartidorId?: SortOrder
    serviceType?: SortOrder
    status?: SortOrder
    originFullName?: SortOrder
    originPhone?: SortOrder
    originAddress?: SortOrder
    originLat?: SortOrder
    originLng?: SortOrder
    pickupStreetAddress?: SortOrder
    destinationContactName?: SortOrder
    destinationContactPhone?: SortOrder
    destinationContactEmail?: SortOrder
    destinationAddress?: SortOrder
    destinationLat?: SortOrder
    destinationLng?: SortOrder
    deliveryAddress?: SortOrder
    deliveryNotes?: SortOrder
    pickupDate?: SortOrder
    pickupTimeFrom?: SortOrder
    pickupTimeTo?: SortOrder
    deliveryDate?: SortOrder
    deliveryTimeFrom?: SortOrder
    deliveryTimeTo?: SortOrder
    distanceText?: SortOrder
    durationText?: SortOrder
    quotedPrice?: SortOrder
    shippingCost?: SortOrder
    totalCost?: SortOrder
    clientNameAtOrder?: SortOrder
    clientPhoneAtOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pickupDateTime?: SortOrder
    deliveryDateTime?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    repartidorId?: SortOrder
    serviceType?: SortOrder
    status?: SortOrder
    originFullName?: SortOrder
    originPhone?: SortOrder
    originAddress?: SortOrder
    originLat?: SortOrder
    originLng?: SortOrder
    pickupStreetAddress?: SortOrder
    destinationContactName?: SortOrder
    destinationContactPhone?: SortOrder
    destinationContactEmail?: SortOrder
    destinationAddress?: SortOrder
    destinationLat?: SortOrder
    destinationLng?: SortOrder
    deliveryAddress?: SortOrder
    deliveryNotes?: SortOrder
    pickupDate?: SortOrder
    pickupTimeFrom?: SortOrder
    pickupTimeTo?: SortOrder
    deliveryDate?: SortOrder
    deliveryTimeFrom?: SortOrder
    deliveryTimeTo?: SortOrder
    distanceText?: SortOrder
    durationText?: SortOrder
    quotedPrice?: SortOrder
    shippingCost?: SortOrder
    totalCost?: SortOrder
    clientNameAtOrder?: SortOrder
    clientPhoneAtOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pickupDateTime?: SortOrder
    deliveryDateTime?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    repartidorId?: SortOrder
    originLat?: SortOrder
    originLng?: SortOrder
    destinationLat?: SortOrder
    destinationLng?: SortOrder
    quotedPrice?: SortOrder
    shippingCost?: SortOrder
    totalCost?: SortOrder
  }

  export type EnumServiceTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceTypeEnum | EnumServiceTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceTypeEnum[] | ListEnumServiceTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceTypeEnum[] | ListEnumServiceTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.ServiceTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeEnumFilter<$PrismaModel>
  }

  export type EnumOrderStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatusEnum | EnumOrderStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatusEnum[] | ListEnumOrderStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatusEnum[] | ListEnumOrderStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusEnumFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EtiquetaListRelationFilter = {
    every?: EtiquetaWhereInput
    some?: EtiquetaWhereInput
    none?: EtiquetaWhereInput
  }

  export type EtiquetaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RepartidorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    vehicleType?: SortOrder
    licensePlate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepartidorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RepartidorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    vehicleType?: SortOrder
    licensePlate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepartidorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    vehicleType?: SortOrder
    licensePlate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RepartidorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type PriceRangeServiceTypeDistanciaMinKmDistanciaMaxKmCompoundUniqueInput = {
    serviceType: $Enums.ServiceTypeEnum
    distanciaMinKm: Decimal | DecimalJsLike | number | string
    distanciaMaxKm: Decimal | DecimalJsLike | number | string
  }

  export type PriceRangeCountOrderByAggregateInput = {
    id?: SortOrder
    serviceType?: SortOrder
    distanciaMinKm?: SortOrder
    distanciaMaxKm?: SortOrder
    precioRango?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceRangeAvgOrderByAggregateInput = {
    id?: SortOrder
    distanciaMinKm?: SortOrder
    distanciaMaxKm?: SortOrder
    precioRango?: SortOrder
  }

  export type PriceRangeMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceType?: SortOrder
    distanciaMinKm?: SortOrder
    distanciaMaxKm?: SortOrder
    precioRango?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceRangeMinOrderByAggregateInput = {
    id?: SortOrder
    serviceType?: SortOrder
    distanciaMinKm?: SortOrder
    distanciaMaxKm?: SortOrder
    precioRango?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PriceRangeSumOrderByAggregateInput = {
    id?: SortOrder
    distanciaMinKm?: SortOrder
    distanciaMaxKm?: SortOrder
    precioRango?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumEtiquetaStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EtiquetaStatus | EnumEtiquetaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EtiquetaStatus[] | ListEnumEtiquetaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EtiquetaStatus[] | ListEnumEtiquetaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEtiquetaStatusFilter<$PrismaModel> | $Enums.EtiquetaStatus
  }

  export type EtiquetaCountOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    tipoEnvio?: SortOrder
    remitenteNombre?: SortOrder
    remitenteDireccion?: SortOrder
    remitenteNotas?: SortOrder
    destinatarioNombre?: SortOrder
    destinatarioDireccion?: SortOrder
    destinatarioTelefono?: SortOrder
    montoACobrar?: SortOrder
    destinatarioNotas?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveryStartTime?: SortOrder
    deliveryEndTime?: SortOrder
    repartidorId?: SortOrder
  }

  export type EtiquetaAvgOrderByAggregateInput = {
    id?: SortOrder
    montoACobrar?: SortOrder
    repartidorId?: SortOrder
  }

  export type EtiquetaMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    tipoEnvio?: SortOrder
    remitenteNombre?: SortOrder
    remitenteDireccion?: SortOrder
    remitenteNotas?: SortOrder
    destinatarioNombre?: SortOrder
    destinatarioDireccion?: SortOrder
    destinatarioTelefono?: SortOrder
    montoACobrar?: SortOrder
    destinatarioNotas?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveryStartTime?: SortOrder
    deliveryEndTime?: SortOrder
    repartidorId?: SortOrder
  }

  export type EtiquetaMinOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    tipoEnvio?: SortOrder
    remitenteNombre?: SortOrder
    remitenteDireccion?: SortOrder
    remitenteNotas?: SortOrder
    destinatarioNombre?: SortOrder
    destinatarioDireccion?: SortOrder
    destinatarioTelefono?: SortOrder
    montoACobrar?: SortOrder
    destinatarioNotas?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveryStartTime?: SortOrder
    deliveryEndTime?: SortOrder
    repartidorId?: SortOrder
  }

  export type EtiquetaSumOrderByAggregateInput = {
    id?: SortOrder
    montoACobrar?: SortOrder
    repartidorId?: SortOrder
  }

  export type EnumEtiquetaStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EtiquetaStatus | EnumEtiquetaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EtiquetaStatus[] | ListEnumEtiquetaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EtiquetaStatus[] | ListEnumEtiquetaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEtiquetaStatusWithAggregatesFilter<$PrismaModel> | $Enums.EtiquetaStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEtiquetaStatusFilter<$PrismaModel>
    _max?: NestedEnumEtiquetaStatusFilter<$PrismaModel>
  }

  export type EnumSocialPlatformEnumFieldUpdateOperationsInput = {
    set?: $Enums.SocialPlatformEnum
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderCreateNestedManyWithoutClientInput = {
    create?: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput> | OrderCreateWithoutClientInput[] | OrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutClientInput | OrderCreateOrConnectWithoutClientInput[]
    createMany?: OrderCreateManyClientInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput> | OrderCreateWithoutClientInput[] | OrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutClientInput | OrderCreateOrConnectWithoutClientInput[]
    createMany?: OrderCreateManyClientInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OrderUpdateManyWithoutClientNestedInput = {
    create?: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput> | OrderCreateWithoutClientInput[] | OrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutClientInput | OrderCreateOrConnectWithoutClientInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutClientInput | OrderUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: OrderCreateManyClientInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutClientInput | OrderUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutClientInput | OrderUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput> | OrderCreateWithoutClientInput[] | OrderUncheckedCreateWithoutClientInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutClientInput | OrderCreateOrConnectWithoutClientInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutClientInput | OrderUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: OrderCreateManyClientInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutClientInput | OrderUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutClientInput | OrderUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ClientCreateWithoutOrdersInput, ClientUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutOrdersInput
    connect?: ClientWhereUniqueInput
  }

  export type RepartidorCreateNestedOneWithoutOrdersInput = {
    create?: XOR<RepartidorCreateWithoutOrdersInput, RepartidorUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: RepartidorCreateOrConnectWithoutOrdersInput
    connect?: RepartidorWhereUniqueInput
  }

  export type EnumServiceTypeEnumFieldUpdateOperationsInput = {
    set?: $Enums.ServiceTypeEnum
  }

  export type EnumOrderStatusEnumFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatusEnum
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ClientUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<ClientCreateWithoutOrdersInput, ClientUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutOrdersInput
    upsert?: ClientUpsertWithoutOrdersInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutOrdersInput, ClientUpdateWithoutOrdersInput>, ClientUncheckedUpdateWithoutOrdersInput>
  }

  export type RepartidorUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<RepartidorCreateWithoutOrdersInput, RepartidorUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: RepartidorCreateOrConnectWithoutOrdersInput
    upsert?: RepartidorUpsertWithoutOrdersInput
    disconnect?: RepartidorWhereInput | boolean
    delete?: RepartidorWhereInput | boolean
    connect?: RepartidorWhereUniqueInput
    update?: XOR<XOR<RepartidorUpdateToOneWithWhereWithoutOrdersInput, RepartidorUpdateWithoutOrdersInput>, RepartidorUncheckedUpdateWithoutOrdersInput>
  }

  export type OrderCreateNestedManyWithoutRepartidorInput = {
    create?: XOR<OrderCreateWithoutRepartidorInput, OrderUncheckedCreateWithoutRepartidorInput> | OrderCreateWithoutRepartidorInput[] | OrderUncheckedCreateWithoutRepartidorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRepartidorInput | OrderCreateOrConnectWithoutRepartidorInput[]
    createMany?: OrderCreateManyRepartidorInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type EtiquetaCreateNestedManyWithoutRepartidorInput = {
    create?: XOR<EtiquetaCreateWithoutRepartidorInput, EtiquetaUncheckedCreateWithoutRepartidorInput> | EtiquetaCreateWithoutRepartidorInput[] | EtiquetaUncheckedCreateWithoutRepartidorInput[]
    connectOrCreate?: EtiquetaCreateOrConnectWithoutRepartidorInput | EtiquetaCreateOrConnectWithoutRepartidorInput[]
    createMany?: EtiquetaCreateManyRepartidorInputEnvelope
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutRepartidorInput = {
    create?: XOR<OrderCreateWithoutRepartidorInput, OrderUncheckedCreateWithoutRepartidorInput> | OrderCreateWithoutRepartidorInput[] | OrderUncheckedCreateWithoutRepartidorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRepartidorInput | OrderCreateOrConnectWithoutRepartidorInput[]
    createMany?: OrderCreateManyRepartidorInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type EtiquetaUncheckedCreateNestedManyWithoutRepartidorInput = {
    create?: XOR<EtiquetaCreateWithoutRepartidorInput, EtiquetaUncheckedCreateWithoutRepartidorInput> | EtiquetaCreateWithoutRepartidorInput[] | EtiquetaUncheckedCreateWithoutRepartidorInput[]
    connectOrCreate?: EtiquetaCreateOrConnectWithoutRepartidorInput | EtiquetaCreateOrConnectWithoutRepartidorInput[]
    createMany?: EtiquetaCreateManyRepartidorInputEnvelope
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
  }

  export type OrderUpdateManyWithoutRepartidorNestedInput = {
    create?: XOR<OrderCreateWithoutRepartidorInput, OrderUncheckedCreateWithoutRepartidorInput> | OrderCreateWithoutRepartidorInput[] | OrderUncheckedCreateWithoutRepartidorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRepartidorInput | OrderCreateOrConnectWithoutRepartidorInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutRepartidorInput | OrderUpsertWithWhereUniqueWithoutRepartidorInput[]
    createMany?: OrderCreateManyRepartidorInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutRepartidorInput | OrderUpdateWithWhereUniqueWithoutRepartidorInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutRepartidorInput | OrderUpdateManyWithWhereWithoutRepartidorInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type EtiquetaUpdateManyWithoutRepartidorNestedInput = {
    create?: XOR<EtiquetaCreateWithoutRepartidorInput, EtiquetaUncheckedCreateWithoutRepartidorInput> | EtiquetaCreateWithoutRepartidorInput[] | EtiquetaUncheckedCreateWithoutRepartidorInput[]
    connectOrCreate?: EtiquetaCreateOrConnectWithoutRepartidorInput | EtiquetaCreateOrConnectWithoutRepartidorInput[]
    upsert?: EtiquetaUpsertWithWhereUniqueWithoutRepartidorInput | EtiquetaUpsertWithWhereUniqueWithoutRepartidorInput[]
    createMany?: EtiquetaCreateManyRepartidorInputEnvelope
    set?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
    disconnect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
    delete?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
    update?: EtiquetaUpdateWithWhereUniqueWithoutRepartidorInput | EtiquetaUpdateWithWhereUniqueWithoutRepartidorInput[]
    updateMany?: EtiquetaUpdateManyWithWhereWithoutRepartidorInput | EtiquetaUpdateManyWithWhereWithoutRepartidorInput[]
    deleteMany?: EtiquetaScalarWhereInput | EtiquetaScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutRepartidorNestedInput = {
    create?: XOR<OrderCreateWithoutRepartidorInput, OrderUncheckedCreateWithoutRepartidorInput> | OrderCreateWithoutRepartidorInput[] | OrderUncheckedCreateWithoutRepartidorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRepartidorInput | OrderCreateOrConnectWithoutRepartidorInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutRepartidorInput | OrderUpsertWithWhereUniqueWithoutRepartidorInput[]
    createMany?: OrderCreateManyRepartidorInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutRepartidorInput | OrderUpdateWithWhereUniqueWithoutRepartidorInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutRepartidorInput | OrderUpdateManyWithWhereWithoutRepartidorInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type EtiquetaUncheckedUpdateManyWithoutRepartidorNestedInput = {
    create?: XOR<EtiquetaCreateWithoutRepartidorInput, EtiquetaUncheckedCreateWithoutRepartidorInput> | EtiquetaCreateWithoutRepartidorInput[] | EtiquetaUncheckedCreateWithoutRepartidorInput[]
    connectOrCreate?: EtiquetaCreateOrConnectWithoutRepartidorInput | EtiquetaCreateOrConnectWithoutRepartidorInput[]
    upsert?: EtiquetaUpsertWithWhereUniqueWithoutRepartidorInput | EtiquetaUpsertWithWhereUniqueWithoutRepartidorInput[]
    createMany?: EtiquetaCreateManyRepartidorInputEnvelope
    set?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
    disconnect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
    delete?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
    connect?: EtiquetaWhereUniqueInput | EtiquetaWhereUniqueInput[]
    update?: EtiquetaUpdateWithWhereUniqueWithoutRepartidorInput | EtiquetaUpdateWithWhereUniqueWithoutRepartidorInput[]
    updateMany?: EtiquetaUpdateManyWithWhereWithoutRepartidorInput | EtiquetaUpdateManyWithWhereWithoutRepartidorInput[]
    deleteMany?: EtiquetaScalarWhereInput | EtiquetaScalarWhereInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type RepartidorCreateNestedOneWithoutEtiquetasInput = {
    create?: XOR<RepartidorCreateWithoutEtiquetasInput, RepartidorUncheckedCreateWithoutEtiquetasInput>
    connectOrCreate?: RepartidorCreateOrConnectWithoutEtiquetasInput
    connect?: RepartidorWhereUniqueInput
  }

  export type EnumEtiquetaStatusFieldUpdateOperationsInput = {
    set?: $Enums.EtiquetaStatus
  }

  export type RepartidorUpdateOneWithoutEtiquetasNestedInput = {
    create?: XOR<RepartidorCreateWithoutEtiquetasInput, RepartidorUncheckedCreateWithoutEtiquetasInput>
    connectOrCreate?: RepartidorCreateOrConnectWithoutEtiquetasInput
    upsert?: RepartidorUpsertWithoutEtiquetasInput
    disconnect?: RepartidorWhereInput | boolean
    delete?: RepartidorWhereInput | boolean
    connect?: RepartidorWhereUniqueInput
    update?: XOR<XOR<RepartidorUpdateToOneWithWhereWithoutEtiquetasInput, RepartidorUpdateWithoutEtiquetasInput>, RepartidorUncheckedUpdateWithoutEtiquetasInput>
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

  export type NestedEnumSocialPlatformEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.SocialPlatformEnum | EnumSocialPlatformEnumFieldRefInput<$PrismaModel>
    in?: $Enums.SocialPlatformEnum[] | ListEnumSocialPlatformEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.SocialPlatformEnum[] | ListEnumSocialPlatformEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumSocialPlatformEnumFilter<$PrismaModel> | $Enums.SocialPlatformEnum
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

  export type NestedEnumSocialPlatformEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SocialPlatformEnum | EnumSocialPlatformEnumFieldRefInput<$PrismaModel>
    in?: $Enums.SocialPlatformEnum[] | ListEnumSocialPlatformEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.SocialPlatformEnum[] | ListEnumSocialPlatformEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumSocialPlatformEnumWithAggregatesFilter<$PrismaModel> | $Enums.SocialPlatformEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSocialPlatformEnumFilter<$PrismaModel>
    _max?: NestedEnumSocialPlatformEnumFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumServiceTypeEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceTypeEnum | EnumServiceTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceTypeEnum[] | ListEnumServiceTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceTypeEnum[] | ListEnumServiceTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeEnumFilter<$PrismaModel> | $Enums.ServiceTypeEnum
  }

  export type NestedEnumOrderStatusEnumFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatusEnum | EnumOrderStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatusEnum[] | ListEnumOrderStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatusEnum[] | ListEnumOrderStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusEnumFilter<$PrismaModel> | $Enums.OrderStatusEnum
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumServiceTypeEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServiceTypeEnum | EnumServiceTypeEnumFieldRefInput<$PrismaModel>
    in?: $Enums.ServiceTypeEnum[] | ListEnumServiceTypeEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.ServiceTypeEnum[] | ListEnumServiceTypeEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumServiceTypeEnumWithAggregatesFilter<$PrismaModel> | $Enums.ServiceTypeEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumServiceTypeEnumFilter<$PrismaModel>
    _max?: NestedEnumServiceTypeEnumFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusEnumWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatusEnum | EnumOrderStatusEnumFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatusEnum[] | ListEnumOrderStatusEnumFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatusEnum[] | ListEnumOrderStatusEnumFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusEnumWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatusEnum
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusEnumFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusEnumFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumEtiquetaStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EtiquetaStatus | EnumEtiquetaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EtiquetaStatus[] | ListEnumEtiquetaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EtiquetaStatus[] | ListEnumEtiquetaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEtiquetaStatusFilter<$PrismaModel> | $Enums.EtiquetaStatus
  }

  export type NestedEnumEtiquetaStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EtiquetaStatus | EnumEtiquetaStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EtiquetaStatus[] | ListEnumEtiquetaStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EtiquetaStatus[] | ListEnumEtiquetaStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEtiquetaStatusWithAggregatesFilter<$PrismaModel> | $Enums.EtiquetaStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEtiquetaStatusFilter<$PrismaModel>
    _max?: NestedEnumEtiquetaStatusFilter<$PrismaModel>
  }

  export type OrderCreateWithoutClientInput = {
    serviceType: $Enums.ServiceTypeEnum
    status?: $Enums.OrderStatusEnum
    originFullName: string
    originPhone: string
    originAddress: string
    originLat?: Decimal | DecimalJsLike | number | string | null
    originLng?: Decimal | DecimalJsLike | number | string | null
    pickupStreetAddress?: string | null
    destinationContactName: string
    destinationContactPhone: string
    destinationContactEmail?: string | null
    destinationAddress: string
    destinationLat?: Decimal | DecimalJsLike | number | string | null
    destinationLng?: Decimal | DecimalJsLike | number | string | null
    deliveryAddress?: string | null
    deliveryNotes?: string | null
    pickupDate?: Date | string | null
    pickupTimeFrom?: string | null
    pickupTimeTo?: string | null
    deliveryDate?: Date | string | null
    deliveryTimeFrom?: string | null
    deliveryTimeTo?: string | null
    distanceText?: string | null
    durationText?: string | null
    quotedPrice?: Decimal | DecimalJsLike | number | string | null
    shippingCost?: Decimal | DecimalJsLike | number | string | null
    totalCost?: Decimal | DecimalJsLike | number | string | null
    clientNameAtOrder?: string | null
    clientPhoneAtOrder?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pickupDateTime?: Date | string | null
    deliveryDateTime?: Date | string | null
    repartidor?: RepartidorCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutClientInput = {
    id?: number
    repartidorId?: number | null
    serviceType: $Enums.ServiceTypeEnum
    status?: $Enums.OrderStatusEnum
    originFullName: string
    originPhone: string
    originAddress: string
    originLat?: Decimal | DecimalJsLike | number | string | null
    originLng?: Decimal | DecimalJsLike | number | string | null
    pickupStreetAddress?: string | null
    destinationContactName: string
    destinationContactPhone: string
    destinationContactEmail?: string | null
    destinationAddress: string
    destinationLat?: Decimal | DecimalJsLike | number | string | null
    destinationLng?: Decimal | DecimalJsLike | number | string | null
    deliveryAddress?: string | null
    deliveryNotes?: string | null
    pickupDate?: Date | string | null
    pickupTimeFrom?: string | null
    pickupTimeTo?: string | null
    deliveryDate?: Date | string | null
    deliveryTimeFrom?: string | null
    deliveryTimeTo?: string | null
    distanceText?: string | null
    durationText?: string | null
    quotedPrice?: Decimal | DecimalJsLike | number | string | null
    shippingCost?: Decimal | DecimalJsLike | number | string | null
    totalCost?: Decimal | DecimalJsLike | number | string | null
    clientNameAtOrder?: string | null
    clientPhoneAtOrder?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pickupDateTime?: Date | string | null
    deliveryDateTime?: Date | string | null
  }

  export type OrderCreateOrConnectWithoutClientInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput>
  }

  export type OrderCreateManyClientInputEnvelope = {
    data: OrderCreateManyClientInput | OrderCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutClientInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutClientInput, OrderUncheckedUpdateWithoutClientInput>
    create: XOR<OrderCreateWithoutClientInput, OrderUncheckedCreateWithoutClientInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutClientInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutClientInput, OrderUncheckedUpdateWithoutClientInput>
  }

  export type OrderUpdateManyWithWhereWithoutClientInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutClientInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    clientId?: IntNullableFilter<"Order"> | number | null
    repartidorId?: IntNullableFilter<"Order"> | number | null
    serviceType?: EnumServiceTypeEnumFilter<"Order"> | $Enums.ServiceTypeEnum
    status?: EnumOrderStatusEnumFilter<"Order"> | $Enums.OrderStatusEnum
    originFullName?: StringFilter<"Order"> | string
    originPhone?: StringFilter<"Order"> | string
    originAddress?: StringFilter<"Order"> | string
    originLat?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    originLng?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    pickupStreetAddress?: StringNullableFilter<"Order"> | string | null
    destinationContactName?: StringFilter<"Order"> | string
    destinationContactPhone?: StringFilter<"Order"> | string
    destinationContactEmail?: StringNullableFilter<"Order"> | string | null
    destinationAddress?: StringFilter<"Order"> | string
    destinationLat?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    destinationLng?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    deliveryAddress?: StringNullableFilter<"Order"> | string | null
    deliveryNotes?: StringNullableFilter<"Order"> | string | null
    pickupDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    pickupTimeFrom?: StringNullableFilter<"Order"> | string | null
    pickupTimeTo?: StringNullableFilter<"Order"> | string | null
    deliveryDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    deliveryTimeFrom?: StringNullableFilter<"Order"> | string | null
    deliveryTimeTo?: StringNullableFilter<"Order"> | string | null
    distanceText?: StringNullableFilter<"Order"> | string | null
    durationText?: StringNullableFilter<"Order"> | string | null
    quotedPrice?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    shippingCost?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    totalCost?: DecimalNullableFilter<"Order"> | Decimal | DecimalJsLike | number | string | null
    clientNameAtOrder?: StringNullableFilter<"Order"> | string | null
    clientPhoneAtOrder?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    pickupDateTime?: DateTimeNullableFilter<"Order"> | Date | string | null
    deliveryDateTime?: DateTimeNullableFilter<"Order"> | Date | string | null
  }

  export type ClientCreateWithoutOrdersInput = {
    name: string
    lastName?: string | null
    phone?: string | null
    email?: string | null
    address: string
    addressLat?: Decimal | DecimalJsLike | number | string | null
    addressLng?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    lastName?: string | null
    phone?: string | null
    email?: string | null
    address: string
    addressLat?: Decimal | DecimalJsLike | number | string | null
    addressLng?: Decimal | DecimalJsLike | number | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClientCreateOrConnectWithoutOrdersInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutOrdersInput, ClientUncheckedCreateWithoutOrdersInput>
  }

  export type RepartidorCreateWithoutOrdersInput = {
    name: string
    phone: string
    vehicleType: string
    licensePlate: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    etiquetas?: EtiquetaCreateNestedManyWithoutRepartidorInput
  }

  export type RepartidorUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    phone: string
    vehicleType: string
    licensePlate: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    etiquetas?: EtiquetaUncheckedCreateNestedManyWithoutRepartidorInput
  }

  export type RepartidorCreateOrConnectWithoutOrdersInput = {
    where: RepartidorWhereUniqueInput
    create: XOR<RepartidorCreateWithoutOrdersInput, RepartidorUncheckedCreateWithoutOrdersInput>
  }

  export type ClientUpsertWithoutOrdersInput = {
    update: XOR<ClientUpdateWithoutOrdersInput, ClientUncheckedUpdateWithoutOrdersInput>
    create: XOR<ClientCreateWithoutOrdersInput, ClientUncheckedCreateWithoutOrdersInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutOrdersInput, ClientUncheckedUpdateWithoutOrdersInput>
  }

  export type ClientUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    addressLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    addressLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    addressLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    addressLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepartidorUpsertWithoutOrdersInput = {
    update: XOR<RepartidorUpdateWithoutOrdersInput, RepartidorUncheckedUpdateWithoutOrdersInput>
    create: XOR<RepartidorCreateWithoutOrdersInput, RepartidorUncheckedCreateWithoutOrdersInput>
    where?: RepartidorWhereInput
  }

  export type RepartidorUpdateToOneWithWhereWithoutOrdersInput = {
    where?: RepartidorWhereInput
    data: XOR<RepartidorUpdateWithoutOrdersInput, RepartidorUncheckedUpdateWithoutOrdersInput>
  }

  export type RepartidorUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    etiquetas?: EtiquetaUpdateManyWithoutRepartidorNestedInput
  }

  export type RepartidorUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    etiquetas?: EtiquetaUncheckedUpdateManyWithoutRepartidorNestedInput
  }

  export type OrderCreateWithoutRepartidorInput = {
    serviceType: $Enums.ServiceTypeEnum
    status?: $Enums.OrderStatusEnum
    originFullName: string
    originPhone: string
    originAddress: string
    originLat?: Decimal | DecimalJsLike | number | string | null
    originLng?: Decimal | DecimalJsLike | number | string | null
    pickupStreetAddress?: string | null
    destinationContactName: string
    destinationContactPhone: string
    destinationContactEmail?: string | null
    destinationAddress: string
    destinationLat?: Decimal | DecimalJsLike | number | string | null
    destinationLng?: Decimal | DecimalJsLike | number | string | null
    deliveryAddress?: string | null
    deliveryNotes?: string | null
    pickupDate?: Date | string | null
    pickupTimeFrom?: string | null
    pickupTimeTo?: string | null
    deliveryDate?: Date | string | null
    deliveryTimeFrom?: string | null
    deliveryTimeTo?: string | null
    distanceText?: string | null
    durationText?: string | null
    quotedPrice?: Decimal | DecimalJsLike | number | string | null
    shippingCost?: Decimal | DecimalJsLike | number | string | null
    totalCost?: Decimal | DecimalJsLike | number | string | null
    clientNameAtOrder?: string | null
    clientPhoneAtOrder?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pickupDateTime?: Date | string | null
    deliveryDateTime?: Date | string | null
    client?: ClientCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutRepartidorInput = {
    id?: number
    clientId?: number | null
    serviceType: $Enums.ServiceTypeEnum
    status?: $Enums.OrderStatusEnum
    originFullName: string
    originPhone: string
    originAddress: string
    originLat?: Decimal | DecimalJsLike | number | string | null
    originLng?: Decimal | DecimalJsLike | number | string | null
    pickupStreetAddress?: string | null
    destinationContactName: string
    destinationContactPhone: string
    destinationContactEmail?: string | null
    destinationAddress: string
    destinationLat?: Decimal | DecimalJsLike | number | string | null
    destinationLng?: Decimal | DecimalJsLike | number | string | null
    deliveryAddress?: string | null
    deliveryNotes?: string | null
    pickupDate?: Date | string | null
    pickupTimeFrom?: string | null
    pickupTimeTo?: string | null
    deliveryDate?: Date | string | null
    deliveryTimeFrom?: string | null
    deliveryTimeTo?: string | null
    distanceText?: string | null
    durationText?: string | null
    quotedPrice?: Decimal | DecimalJsLike | number | string | null
    shippingCost?: Decimal | DecimalJsLike | number | string | null
    totalCost?: Decimal | DecimalJsLike | number | string | null
    clientNameAtOrder?: string | null
    clientPhoneAtOrder?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pickupDateTime?: Date | string | null
    deliveryDateTime?: Date | string | null
  }

  export type OrderCreateOrConnectWithoutRepartidorInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutRepartidorInput, OrderUncheckedCreateWithoutRepartidorInput>
  }

  export type OrderCreateManyRepartidorInputEnvelope = {
    data: OrderCreateManyRepartidorInput | OrderCreateManyRepartidorInput[]
    skipDuplicates?: boolean
  }

  export type EtiquetaCreateWithoutRepartidorInput = {
    orderNumber?: string | null
    tipoEnvio: $Enums.ServiceTypeEnum
    remitenteNombre: string
    remitenteDireccion: string
    remitenteNotas?: string | null
    destinatarioNombre: string
    destinatarioDireccion: string
    destinatarioTelefono: string
    montoACobrar?: Decimal | DecimalJsLike | number | string | null
    destinatarioNotas?: string | null
    status?: $Enums.EtiquetaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveryStartTime?: string | null
    deliveryEndTime?: string | null
  }

  export type EtiquetaUncheckedCreateWithoutRepartidorInput = {
    id?: number
    orderNumber?: string | null
    tipoEnvio: $Enums.ServiceTypeEnum
    remitenteNombre: string
    remitenteDireccion: string
    remitenteNotas?: string | null
    destinatarioNombre: string
    destinatarioDireccion: string
    destinatarioTelefono: string
    montoACobrar?: Decimal | DecimalJsLike | number | string | null
    destinatarioNotas?: string | null
    status?: $Enums.EtiquetaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveryStartTime?: string | null
    deliveryEndTime?: string | null
  }

  export type EtiquetaCreateOrConnectWithoutRepartidorInput = {
    where: EtiquetaWhereUniqueInput
    create: XOR<EtiquetaCreateWithoutRepartidorInput, EtiquetaUncheckedCreateWithoutRepartidorInput>
  }

  export type EtiquetaCreateManyRepartidorInputEnvelope = {
    data: EtiquetaCreateManyRepartidorInput | EtiquetaCreateManyRepartidorInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutRepartidorInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutRepartidorInput, OrderUncheckedUpdateWithoutRepartidorInput>
    create: XOR<OrderCreateWithoutRepartidorInput, OrderUncheckedCreateWithoutRepartidorInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutRepartidorInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutRepartidorInput, OrderUncheckedUpdateWithoutRepartidorInput>
  }

  export type OrderUpdateManyWithWhereWithoutRepartidorInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutRepartidorInput>
  }

  export type EtiquetaUpsertWithWhereUniqueWithoutRepartidorInput = {
    where: EtiquetaWhereUniqueInput
    update: XOR<EtiquetaUpdateWithoutRepartidorInput, EtiquetaUncheckedUpdateWithoutRepartidorInput>
    create: XOR<EtiquetaCreateWithoutRepartidorInput, EtiquetaUncheckedCreateWithoutRepartidorInput>
  }

  export type EtiquetaUpdateWithWhereUniqueWithoutRepartidorInput = {
    where: EtiquetaWhereUniqueInput
    data: XOR<EtiquetaUpdateWithoutRepartidorInput, EtiquetaUncheckedUpdateWithoutRepartidorInput>
  }

  export type EtiquetaUpdateManyWithWhereWithoutRepartidorInput = {
    where: EtiquetaScalarWhereInput
    data: XOR<EtiquetaUpdateManyMutationInput, EtiquetaUncheckedUpdateManyWithoutRepartidorInput>
  }

  export type EtiquetaScalarWhereInput = {
    AND?: EtiquetaScalarWhereInput | EtiquetaScalarWhereInput[]
    OR?: EtiquetaScalarWhereInput[]
    NOT?: EtiquetaScalarWhereInput | EtiquetaScalarWhereInput[]
    id?: IntFilter<"Etiqueta"> | number
    orderNumber?: StringNullableFilter<"Etiqueta"> | string | null
    tipoEnvio?: EnumServiceTypeEnumFilter<"Etiqueta"> | $Enums.ServiceTypeEnum
    remitenteNombre?: StringFilter<"Etiqueta"> | string
    remitenteDireccion?: StringFilter<"Etiqueta"> | string
    remitenteNotas?: StringNullableFilter<"Etiqueta"> | string | null
    destinatarioNombre?: StringFilter<"Etiqueta"> | string
    destinatarioDireccion?: StringFilter<"Etiqueta"> | string
    destinatarioTelefono?: StringFilter<"Etiqueta"> | string
    montoACobrar?: DecimalNullableFilter<"Etiqueta"> | Decimal | DecimalJsLike | number | string | null
    destinatarioNotas?: StringNullableFilter<"Etiqueta"> | string | null
    status?: EnumEtiquetaStatusFilter<"Etiqueta"> | $Enums.EtiquetaStatus
    createdAt?: DateTimeFilter<"Etiqueta"> | Date | string
    updatedAt?: DateTimeFilter<"Etiqueta"> | Date | string
    deliveryStartTime?: StringNullableFilter<"Etiqueta"> | string | null
    deliveryEndTime?: StringNullableFilter<"Etiqueta"> | string | null
    repartidorId?: IntNullableFilter<"Etiqueta"> | number | null
  }

  export type RepartidorCreateWithoutEtiquetasInput = {
    name: string
    phone: string
    vehicleType: string
    licensePlate: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutRepartidorInput
  }

  export type RepartidorUncheckedCreateWithoutEtiquetasInput = {
    id?: number
    name: string
    phone: string
    vehicleType: string
    licensePlate: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutRepartidorInput
  }

  export type RepartidorCreateOrConnectWithoutEtiquetasInput = {
    where: RepartidorWhereUniqueInput
    create: XOR<RepartidorCreateWithoutEtiquetasInput, RepartidorUncheckedCreateWithoutEtiquetasInput>
  }

  export type RepartidorUpsertWithoutEtiquetasInput = {
    update: XOR<RepartidorUpdateWithoutEtiquetasInput, RepartidorUncheckedUpdateWithoutEtiquetasInput>
    create: XOR<RepartidorCreateWithoutEtiquetasInput, RepartidorUncheckedCreateWithoutEtiquetasInput>
    where?: RepartidorWhereInput
  }

  export type RepartidorUpdateToOneWithWhereWithoutEtiquetasInput = {
    where?: RepartidorWhereInput
    data: XOR<RepartidorUpdateWithoutEtiquetasInput, RepartidorUncheckedUpdateWithoutEtiquetasInput>
  }

  export type RepartidorUpdateWithoutEtiquetasInput = {
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutRepartidorNestedInput
  }

  export type RepartidorUncheckedUpdateWithoutEtiquetasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutRepartidorNestedInput
  }

  export type OrderCreateManyClientInput = {
    id?: number
    repartidorId?: number | null
    serviceType: $Enums.ServiceTypeEnum
    status?: $Enums.OrderStatusEnum
    originFullName: string
    originPhone: string
    originAddress: string
    originLat?: Decimal | DecimalJsLike | number | string | null
    originLng?: Decimal | DecimalJsLike | number | string | null
    pickupStreetAddress?: string | null
    destinationContactName: string
    destinationContactPhone: string
    destinationContactEmail?: string | null
    destinationAddress: string
    destinationLat?: Decimal | DecimalJsLike | number | string | null
    destinationLng?: Decimal | DecimalJsLike | number | string | null
    deliveryAddress?: string | null
    deliveryNotes?: string | null
    pickupDate?: Date | string | null
    pickupTimeFrom?: string | null
    pickupTimeTo?: string | null
    deliveryDate?: Date | string | null
    deliveryTimeFrom?: string | null
    deliveryTimeTo?: string | null
    distanceText?: string | null
    durationText?: string | null
    quotedPrice?: Decimal | DecimalJsLike | number | string | null
    shippingCost?: Decimal | DecimalJsLike | number | string | null
    totalCost?: Decimal | DecimalJsLike | number | string | null
    clientNameAtOrder?: string | null
    clientPhoneAtOrder?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pickupDateTime?: Date | string | null
    deliveryDateTime?: Date | string | null
  }

  export type OrderUpdateWithoutClientInput = {
    serviceType?: EnumServiceTypeEnumFieldUpdateOperationsInput | $Enums.ServiceTypeEnum
    status?: EnumOrderStatusEnumFieldUpdateOperationsInput | $Enums.OrderStatusEnum
    originFullName?: StringFieldUpdateOperationsInput | string
    originPhone?: StringFieldUpdateOperationsInput | string
    originAddress?: StringFieldUpdateOperationsInput | string
    originLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    originLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pickupStreetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    destinationContactName?: StringFieldUpdateOperationsInput | string
    destinationContactPhone?: StringFieldUpdateOperationsInput | string
    destinationContactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    destinationLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryNotes?: NullableStringFieldUpdateOperationsInput | string | null
    pickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickupTimeFrom?: NullableStringFieldUpdateOperationsInput | string | null
    pickupTimeTo?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveryTimeFrom?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryTimeTo?: NullableStringFieldUpdateOperationsInput | string | null
    distanceText?: NullableStringFieldUpdateOperationsInput | string | null
    durationText?: NullableStringFieldUpdateOperationsInput | string | null
    quotedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    shippingCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clientNameAtOrder?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhoneAtOrder?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveryDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    repartidor?: RepartidorUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    repartidorId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceType?: EnumServiceTypeEnumFieldUpdateOperationsInput | $Enums.ServiceTypeEnum
    status?: EnumOrderStatusEnumFieldUpdateOperationsInput | $Enums.OrderStatusEnum
    originFullName?: StringFieldUpdateOperationsInput | string
    originPhone?: StringFieldUpdateOperationsInput | string
    originAddress?: StringFieldUpdateOperationsInput | string
    originLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    originLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pickupStreetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    destinationContactName?: StringFieldUpdateOperationsInput | string
    destinationContactPhone?: StringFieldUpdateOperationsInput | string
    destinationContactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    destinationLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryNotes?: NullableStringFieldUpdateOperationsInput | string | null
    pickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickupTimeFrom?: NullableStringFieldUpdateOperationsInput | string | null
    pickupTimeTo?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveryTimeFrom?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryTimeTo?: NullableStringFieldUpdateOperationsInput | string | null
    distanceText?: NullableStringFieldUpdateOperationsInput | string | null
    durationText?: NullableStringFieldUpdateOperationsInput | string | null
    quotedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    shippingCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clientNameAtOrder?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhoneAtOrder?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveryDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    repartidorId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceType?: EnumServiceTypeEnumFieldUpdateOperationsInput | $Enums.ServiceTypeEnum
    status?: EnumOrderStatusEnumFieldUpdateOperationsInput | $Enums.OrderStatusEnum
    originFullName?: StringFieldUpdateOperationsInput | string
    originPhone?: StringFieldUpdateOperationsInput | string
    originAddress?: StringFieldUpdateOperationsInput | string
    originLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    originLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pickupStreetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    destinationContactName?: StringFieldUpdateOperationsInput | string
    destinationContactPhone?: StringFieldUpdateOperationsInput | string
    destinationContactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    destinationLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryNotes?: NullableStringFieldUpdateOperationsInput | string | null
    pickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickupTimeFrom?: NullableStringFieldUpdateOperationsInput | string | null
    pickupTimeTo?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveryTimeFrom?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryTimeTo?: NullableStringFieldUpdateOperationsInput | string | null
    distanceText?: NullableStringFieldUpdateOperationsInput | string | null
    durationText?: NullableStringFieldUpdateOperationsInput | string | null
    quotedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    shippingCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clientNameAtOrder?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhoneAtOrder?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveryDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderCreateManyRepartidorInput = {
    id?: number
    clientId?: number | null
    serviceType: $Enums.ServiceTypeEnum
    status?: $Enums.OrderStatusEnum
    originFullName: string
    originPhone: string
    originAddress: string
    originLat?: Decimal | DecimalJsLike | number | string | null
    originLng?: Decimal | DecimalJsLike | number | string | null
    pickupStreetAddress?: string | null
    destinationContactName: string
    destinationContactPhone: string
    destinationContactEmail?: string | null
    destinationAddress: string
    destinationLat?: Decimal | DecimalJsLike | number | string | null
    destinationLng?: Decimal | DecimalJsLike | number | string | null
    deliveryAddress?: string | null
    deliveryNotes?: string | null
    pickupDate?: Date | string | null
    pickupTimeFrom?: string | null
    pickupTimeTo?: string | null
    deliveryDate?: Date | string | null
    deliveryTimeFrom?: string | null
    deliveryTimeTo?: string | null
    distanceText?: string | null
    durationText?: string | null
    quotedPrice?: Decimal | DecimalJsLike | number | string | null
    shippingCost?: Decimal | DecimalJsLike | number | string | null
    totalCost?: Decimal | DecimalJsLike | number | string | null
    clientNameAtOrder?: string | null
    clientPhoneAtOrder?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    pickupDateTime?: Date | string | null
    deliveryDateTime?: Date | string | null
  }

  export type EtiquetaCreateManyRepartidorInput = {
    id?: number
    orderNumber?: string | null
    tipoEnvio: $Enums.ServiceTypeEnum
    remitenteNombre: string
    remitenteDireccion: string
    remitenteNotas?: string | null
    destinatarioNombre: string
    destinatarioDireccion: string
    destinatarioTelefono: string
    montoACobrar?: Decimal | DecimalJsLike | number | string | null
    destinatarioNotas?: string | null
    status?: $Enums.EtiquetaStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveryStartTime?: string | null
    deliveryEndTime?: string | null
  }

  export type OrderUpdateWithoutRepartidorInput = {
    serviceType?: EnumServiceTypeEnumFieldUpdateOperationsInput | $Enums.ServiceTypeEnum
    status?: EnumOrderStatusEnumFieldUpdateOperationsInput | $Enums.OrderStatusEnum
    originFullName?: StringFieldUpdateOperationsInput | string
    originPhone?: StringFieldUpdateOperationsInput | string
    originAddress?: StringFieldUpdateOperationsInput | string
    originLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    originLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pickupStreetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    destinationContactName?: StringFieldUpdateOperationsInput | string
    destinationContactPhone?: StringFieldUpdateOperationsInput | string
    destinationContactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    destinationLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryNotes?: NullableStringFieldUpdateOperationsInput | string | null
    pickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickupTimeFrom?: NullableStringFieldUpdateOperationsInput | string | null
    pickupTimeTo?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveryTimeFrom?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryTimeTo?: NullableStringFieldUpdateOperationsInput | string | null
    distanceText?: NullableStringFieldUpdateOperationsInput | string | null
    durationText?: NullableStringFieldUpdateOperationsInput | string | null
    quotedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    shippingCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clientNameAtOrder?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhoneAtOrder?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveryDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientUpdateOneWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutRepartidorInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceType?: EnumServiceTypeEnumFieldUpdateOperationsInput | $Enums.ServiceTypeEnum
    status?: EnumOrderStatusEnumFieldUpdateOperationsInput | $Enums.OrderStatusEnum
    originFullName?: StringFieldUpdateOperationsInput | string
    originPhone?: StringFieldUpdateOperationsInput | string
    originAddress?: StringFieldUpdateOperationsInput | string
    originLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    originLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pickupStreetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    destinationContactName?: StringFieldUpdateOperationsInput | string
    destinationContactPhone?: StringFieldUpdateOperationsInput | string
    destinationContactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    destinationLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryNotes?: NullableStringFieldUpdateOperationsInput | string | null
    pickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickupTimeFrom?: NullableStringFieldUpdateOperationsInput | string | null
    pickupTimeTo?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveryTimeFrom?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryTimeTo?: NullableStringFieldUpdateOperationsInput | string | null
    distanceText?: NullableStringFieldUpdateOperationsInput | string | null
    durationText?: NullableStringFieldUpdateOperationsInput | string | null
    quotedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    shippingCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clientNameAtOrder?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhoneAtOrder?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveryDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderUncheckedUpdateManyWithoutRepartidorInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientId?: NullableIntFieldUpdateOperationsInput | number | null
    serviceType?: EnumServiceTypeEnumFieldUpdateOperationsInput | $Enums.ServiceTypeEnum
    status?: EnumOrderStatusEnumFieldUpdateOperationsInput | $Enums.OrderStatusEnum
    originFullName?: StringFieldUpdateOperationsInput | string
    originPhone?: StringFieldUpdateOperationsInput | string
    originAddress?: StringFieldUpdateOperationsInput | string
    originLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    originLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    pickupStreetAddress?: NullableStringFieldUpdateOperationsInput | string | null
    destinationContactName?: StringFieldUpdateOperationsInput | string
    destinationContactPhone?: StringFieldUpdateOperationsInput | string
    destinationContactEmail?: NullableStringFieldUpdateOperationsInput | string | null
    destinationAddress?: StringFieldUpdateOperationsInput | string
    destinationLat?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    destinationLng?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    deliveryAddress?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryNotes?: NullableStringFieldUpdateOperationsInput | string | null
    pickupDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pickupTimeFrom?: NullableStringFieldUpdateOperationsInput | string | null
    pickupTimeTo?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveryTimeFrom?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryTimeTo?: NullableStringFieldUpdateOperationsInput | string | null
    distanceText?: NullableStringFieldUpdateOperationsInput | string | null
    durationText?: NullableStringFieldUpdateOperationsInput | string | null
    quotedPrice?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    shippingCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    totalCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    clientNameAtOrder?: NullableStringFieldUpdateOperationsInput | string | null
    clientPhoneAtOrder?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pickupDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveryDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EtiquetaUpdateWithoutRepartidorInput = {
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tipoEnvio?: EnumServiceTypeEnumFieldUpdateOperationsInput | $Enums.ServiceTypeEnum
    remitenteNombre?: StringFieldUpdateOperationsInput | string
    remitenteDireccion?: StringFieldUpdateOperationsInput | string
    remitenteNotas?: NullableStringFieldUpdateOperationsInput | string | null
    destinatarioNombre?: StringFieldUpdateOperationsInput | string
    destinatarioDireccion?: StringFieldUpdateOperationsInput | string
    destinatarioTelefono?: StringFieldUpdateOperationsInput | string
    montoACobrar?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    destinatarioNotas?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEtiquetaStatusFieldUpdateOperationsInput | $Enums.EtiquetaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryEndTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EtiquetaUncheckedUpdateWithoutRepartidorInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tipoEnvio?: EnumServiceTypeEnumFieldUpdateOperationsInput | $Enums.ServiceTypeEnum
    remitenteNombre?: StringFieldUpdateOperationsInput | string
    remitenteDireccion?: StringFieldUpdateOperationsInput | string
    remitenteNotas?: NullableStringFieldUpdateOperationsInput | string | null
    destinatarioNombre?: StringFieldUpdateOperationsInput | string
    destinatarioDireccion?: StringFieldUpdateOperationsInput | string
    destinatarioTelefono?: StringFieldUpdateOperationsInput | string
    montoACobrar?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    destinatarioNotas?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEtiquetaStatusFieldUpdateOperationsInput | $Enums.EtiquetaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryEndTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EtiquetaUncheckedUpdateManyWithoutRepartidorInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderNumber?: NullableStringFieldUpdateOperationsInput | string | null
    tipoEnvio?: EnumServiceTypeEnumFieldUpdateOperationsInput | $Enums.ServiceTypeEnum
    remitenteNombre?: StringFieldUpdateOperationsInput | string
    remitenteDireccion?: StringFieldUpdateOperationsInput | string
    remitenteNotas?: NullableStringFieldUpdateOperationsInput | string | null
    destinatarioNombre?: StringFieldUpdateOperationsInput | string
    destinatarioDireccion?: StringFieldUpdateOperationsInput | string
    destinatarioTelefono?: StringFieldUpdateOperationsInput | string
    montoACobrar?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    destinatarioNotas?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumEtiquetaStatusFieldUpdateOperationsInput | $Enums.EtiquetaStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryStartTime?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryEndTime?: NullableStringFieldUpdateOperationsInput | string | null
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