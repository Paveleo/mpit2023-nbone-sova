import * as Client from '@prisma/client'

import { Context } from './context'

import { GraphQLResolveInfo } from 'graphql'

type Resolver<T extends {}, A extends {}, R extends any> = (
  parent: T,
  args: A,
  context: Context,
  info: GraphQLResolveInfo,
) => Promise<R>

export interface Resolvers {
  [key: string]: { [key: string]: Resolver<any, any, any> }
  User?: User
  Contractor?: Contractor
  Feedback?: Feedback
  Services?: Services
  Category?: Category
  Query?: Query
  Mutation?: Mutation
  AggregateUser?: AggregateUser
  UserGroupByOutputType?: UserGroupByOutputType
  AggregateContractor?: AggregateContractor
  ContractorGroupByOutputType?: ContractorGroupByOutputType
  AggregateFeedback?: AggregateFeedback
  FeedbackGroupByOutputType?: FeedbackGroupByOutputType
  AggregateServices?: AggregateServices
  ServicesGroupByOutputType?: ServicesGroupByOutputType
  AggregateCategory?: AggregateCategory
  CategoryGroupByOutputType?: CategoryGroupByOutputType
  AffectedRowsOutput?: AffectedRowsOutput
  UserCountOutputType?: UserCountOutputType
  UserCountAggregateOutputType?: UserCountAggregateOutputType
  UserMinAggregateOutputType?: UserMinAggregateOutputType
  UserMaxAggregateOutputType?: UserMaxAggregateOutputType
  ContractorCountOutputType?: ContractorCountOutputType
  ContractorCountAggregateOutputType?: ContractorCountAggregateOutputType
  ContractorMinAggregateOutputType?: ContractorMinAggregateOutputType
  ContractorMaxAggregateOutputType?: ContractorMaxAggregateOutputType
  FeedbackCountAggregateOutputType?: FeedbackCountAggregateOutputType
  FeedbackAvgAggregateOutputType?: FeedbackAvgAggregateOutputType
  FeedbackSumAggregateOutputType?: FeedbackSumAggregateOutputType
  FeedbackMinAggregateOutputType?: FeedbackMinAggregateOutputType
  FeedbackMaxAggregateOutputType?: FeedbackMaxAggregateOutputType
  ServicesCountAggregateOutputType?: ServicesCountAggregateOutputType
  ServicesAvgAggregateOutputType?: ServicesAvgAggregateOutputType
  ServicesSumAggregateOutputType?: ServicesSumAggregateOutputType
  ServicesMinAggregateOutputType?: ServicesMinAggregateOutputType
  ServicesMaxAggregateOutputType?: ServicesMaxAggregateOutputType
  CategoryCountOutputType?: CategoryCountOutputType
  CategoryCountAggregateOutputType?: CategoryCountAggregateOutputType
  CategoryMinAggregateOutputType?: CategoryMinAggregateOutputType
  CategoryMaxAggregateOutputType?: CategoryMaxAggregateOutputType
}

export interface User {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.User, {}, string>
  createdAt?: Resolver<Client.User, {}, Date>
  updatedAt?: Resolver<Client.User, {}, Date>
  isConfirmed?: Resolver<Client.User, {}, boolean>
  phone?: Resolver<Client.User, {}, string | null>
  email?: Resolver<Client.User, {}, string | null>
  code?: Resolver<Client.User, {}, string | null>
  avatar?: Resolver<Client.User, {}, string | null>
  name?: Resolver<Client.User, {}, string | null>
  address?: Resolver<Client.User, {}, string | null>
  locality?: Resolver<Client.User, {}, string | null>
  birthdayDate?: Resolver<Client.User, {}, Date | null>
  inContractorMode?: Resolver<Client.User, {}, boolean>
  contractorProfile?: Resolver<Client.User, {}, Client.Contractor | null>
  services?: Resolver<Client.User, UserServicesArgs, Client.Services[] | null>
  feedback?: Resolver<Client.User, UserFeedbackArgs, Client.Feedback[] | null>
  _count?: Resolver<Client.User, {}, Client.Prisma.UserCountOutputType>
}

export interface Contractor {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Contractor, {}, string>
  createdAt?: Resolver<Client.Contractor, {}, Date>
  updatedAt?: Resolver<Client.Contractor, {}, Date>
  user?: Resolver<Client.Contractor, {}, Client.User | null>
  userId?: Resolver<Client.Contractor, {}, string | null>
  services?: Resolver<
    Client.Contractor,
    ContractorServicesArgs,
    Client.Services[] | null
  >
  servicesId?: Resolver<Client.Contractor, {}, string | null>
  feedback?: Resolver<
    Client.Contractor,
    ContractorFeedbackArgs,
    Client.Feedback[] | null
  >
  _count?: Resolver<
    Client.Contractor,
    {},
    Client.Prisma.ContractorCountOutputType
  >
}

export interface Feedback {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Feedback, {}, string>
  createdAt?: Resolver<Client.Feedback, {}, Date>
  updatedAt?: Resolver<Client.Feedback, {}, Date>
  score?: Resolver<Client.Feedback, {}, number>
  decription?: Resolver<Client.Feedback, {}, string | null>
  user?: Resolver<Client.Feedback, {}, Client.User | null>
  userId?: Resolver<Client.Feedback, {}, string | null>
  contractor?: Resolver<Client.Feedback, {}, Client.Contractor | null>
  contractorId?: Resolver<Client.Feedback, {}, string | null>
}

export interface Services {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Services, {}, string>
  createdAt?: Resolver<Client.Services, {}, Date>
  updatedAt?: Resolver<Client.Services, {}, Date>
  img?: Resolver<Client.Services, {}, string[] | null>
  title?: Resolver<Client.Services, {}, string | null>
  locality?: Resolver<Client.Services, {}, string | null>
  description?: Resolver<Client.Services, {}, string>
  cost?: Resolver<Client.Services, {}, number>
  isProvide?: Resolver<Client.Services, {}, boolean>
  status?: Resolver<Client.Services, {}, Client.ServicesStatusEnum>
  canCallMe?: Resolver<Client.Services, {}, boolean>
  contractor?: Resolver<Client.Services, {}, Client.Contractor | null>
  contractorId?: Resolver<Client.Services, {}, string | null>
  customer?: Resolver<Client.Services, {}, Client.User | null>
  customerid?: Resolver<Client.Services, {}, string | null>
  category?: Resolver<Client.Services, {}, Client.Category | null>
  categoryId?: Resolver<Client.Services, {}, string | null>
}

export interface Category {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Category, {}, string>
  createdAt?: Resolver<Client.Category, {}, Date>
  updatedAt?: Resolver<Client.Category, {}, Date>
  title?: Resolver<Client.Category, {}, string>
  services?: Resolver<
    Client.Category,
    CategoryServicesArgs,
    Client.Services[] | null
  >
  _count?: Resolver<Client.Category, {}, Client.Prisma.CategoryCountOutputType>
}

export interface Query {
  [key: string]: Resolver<any, any, any>
  findFirstUser?: Resolver<{}, FindFirstUserArgs, Client.User | null>
  findManyUser?: Resolver<{}, FindManyUserArgs, Client.User[]>
  findManyUserCount?: Resolver<{}, FindManyUserArgs, number>
  aggregateUser?: Resolver<
    {},
    AggregateUserArgs,
    Client.Prisma.GetUserAggregateType<AggregateUserArgs>
  >
  groupByUser?: Resolver<
    {},
    GroupByUserArgs,
    Client.Prisma.UserGroupByOutputType[]
  >
  findUniqueUser?: Resolver<{}, FindUniqueUserArgs, Client.User | null>
  findFirstContractor?: Resolver<
    {},
    FindFirstContractorArgs,
    Client.Contractor | null
  >
  findManyContractor?: Resolver<{}, FindManyContractorArgs, Client.Contractor[]>
  findManyContractorCount?: Resolver<{}, FindManyContractorArgs, number>
  aggregateContractor?: Resolver<
    {},
    AggregateContractorArgs,
    Client.Prisma.GetContractorAggregateType<AggregateContractorArgs>
  >
  groupByContractor?: Resolver<
    {},
    GroupByContractorArgs,
    Client.Prisma.ContractorGroupByOutputType[]
  >
  findUniqueContractor?: Resolver<
    {},
    FindUniqueContractorArgs,
    Client.Contractor | null
  >
  findFirstFeedback?: Resolver<
    {},
    FindFirstFeedbackArgs,
    Client.Feedback | null
  >
  findManyFeedback?: Resolver<{}, FindManyFeedbackArgs, Client.Feedback[]>
  findManyFeedbackCount?: Resolver<{}, FindManyFeedbackArgs, number>
  aggregateFeedback?: Resolver<
    {},
    AggregateFeedbackArgs,
    Client.Prisma.GetFeedbackAggregateType<AggregateFeedbackArgs>
  >
  groupByFeedback?: Resolver<
    {},
    GroupByFeedbackArgs,
    Client.Prisma.FeedbackGroupByOutputType[]
  >
  findUniqueFeedback?: Resolver<
    {},
    FindUniqueFeedbackArgs,
    Client.Feedback | null
  >
  findFirstServices?: Resolver<
    {},
    FindFirstServicesArgs,
    Client.Services | null
  >
  findManyServices?: Resolver<{}, FindManyServicesArgs, Client.Services[]>
  findManyServicesCount?: Resolver<{}, FindManyServicesArgs, number>
  aggregateServices?: Resolver<
    {},
    AggregateServicesArgs,
    Client.Prisma.GetServicesAggregateType<AggregateServicesArgs>
  >
  groupByServices?: Resolver<
    {},
    GroupByServicesArgs,
    Client.Prisma.ServicesGroupByOutputType[]
  >
  findUniqueServices?: Resolver<
    {},
    FindUniqueServicesArgs,
    Client.Services | null
  >
  findFirstCategory?: Resolver<
    {},
    FindFirstCategoryArgs,
    Client.Category | null
  >
  findManyCategory?: Resolver<{}, FindManyCategoryArgs, Client.Category[]>
  findManyCategoryCount?: Resolver<{}, FindManyCategoryArgs, number>
  aggregateCategory?: Resolver<
    {},
    AggregateCategoryArgs,
    Client.Prisma.GetCategoryAggregateType<AggregateCategoryArgs>
  >
  groupByCategory?: Resolver<
    {},
    GroupByCategoryArgs,
    Client.Prisma.CategoryGroupByOutputType[]
  >
  findUniqueCategory?: Resolver<
    {},
    FindUniqueCategoryArgs,
    Client.Category | null
  >
}

export interface Mutation {
  [key: string]: Resolver<any, any, any>
  createOneUser?: Resolver<{}, CreateOneUserArgs, Client.User>
  upsertOneUser?: Resolver<{}, UpsertOneUserArgs, Client.User>
  createManyUser?: Resolver<{}, CreateManyUserArgs, Client.Prisma.BatchPayload>
  deleteOneUser?: Resolver<{}, DeleteOneUserArgs, Client.User | null>
  updateOneUser?: Resolver<{}, UpdateOneUserArgs, Client.User | null>
  updateManyUser?: Resolver<{}, UpdateManyUserArgs, Client.Prisma.BatchPayload>
  deleteManyUser?: Resolver<{}, DeleteManyUserArgs, Client.Prisma.BatchPayload>
  createOneContractor?: Resolver<{}, CreateOneContractorArgs, Client.Contractor>
  upsertOneContractor?: Resolver<{}, UpsertOneContractorArgs, Client.Contractor>
  createManyContractor?: Resolver<
    {},
    CreateManyContractorArgs,
    Client.Prisma.BatchPayload
  >
  deleteOneContractor?: Resolver<
    {},
    DeleteOneContractorArgs,
    Client.Contractor | null
  >
  updateOneContractor?: Resolver<
    {},
    UpdateOneContractorArgs,
    Client.Contractor | null
  >
  updateManyContractor?: Resolver<
    {},
    UpdateManyContractorArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyContractor?: Resolver<
    {},
    DeleteManyContractorArgs,
    Client.Prisma.BatchPayload
  >
  createOneFeedback?: Resolver<{}, CreateOneFeedbackArgs, Client.Feedback>
  upsertOneFeedback?: Resolver<{}, UpsertOneFeedbackArgs, Client.Feedback>
  createManyFeedback?: Resolver<
    {},
    CreateManyFeedbackArgs,
    Client.Prisma.BatchPayload
  >
  deleteOneFeedback?: Resolver<
    {},
    DeleteOneFeedbackArgs,
    Client.Feedback | null
  >
  updateOneFeedback?: Resolver<
    {},
    UpdateOneFeedbackArgs,
    Client.Feedback | null
  >
  updateManyFeedback?: Resolver<
    {},
    UpdateManyFeedbackArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyFeedback?: Resolver<
    {},
    DeleteManyFeedbackArgs,
    Client.Prisma.BatchPayload
  >
  createOneServices?: Resolver<{}, CreateOneServicesArgs, Client.Services>
  upsertOneServices?: Resolver<{}, UpsertOneServicesArgs, Client.Services>
  createManyServices?: Resolver<
    {},
    CreateManyServicesArgs,
    Client.Prisma.BatchPayload
  >
  deleteOneServices?: Resolver<
    {},
    DeleteOneServicesArgs,
    Client.Services | null
  >
  updateOneServices?: Resolver<
    {},
    UpdateOneServicesArgs,
    Client.Services | null
  >
  updateManyServices?: Resolver<
    {},
    UpdateManyServicesArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyServices?: Resolver<
    {},
    DeleteManyServicesArgs,
    Client.Prisma.BatchPayload
  >
  createOneCategory?: Resolver<{}, CreateOneCategoryArgs, Client.Category>
  upsertOneCategory?: Resolver<{}, UpsertOneCategoryArgs, Client.Category>
  createManyCategory?: Resolver<
    {},
    CreateManyCategoryArgs,
    Client.Prisma.BatchPayload
  >
  deleteOneCategory?: Resolver<
    {},
    DeleteOneCategoryArgs,
    Client.Category | null
  >
  updateOneCategory?: Resolver<
    {},
    UpdateOneCategoryArgs,
    Client.Category | null
  >
  updateManyCategory?: Resolver<
    {},
    UpdateManyCategoryArgs,
    Client.Prisma.BatchPayload
  >
  deleteManyCategory?: Resolver<
    {},
    DeleteManyCategoryArgs,
    Client.Prisma.BatchPayload
  >
  executeRaw?: Resolver<{}, ExecuteRawArgs, any>
  queryRaw?: Resolver<{}, QueryRawArgs, any>
}

export interface AggregateUser {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateUser,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >
}

export interface UserGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string>
  createdAt?: Resolver<Client.Prisma.UserGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.UserGroupByOutputType, {}, Date>
  isConfirmed?: Resolver<Client.Prisma.UserGroupByOutputType, {}, boolean>
  phone?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>
  email?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>
  code?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>
  avatar?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>
  name?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>
  address?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>
  locality?: Resolver<Client.Prisma.UserGroupByOutputType, {}, string | null>
  birthdayDate?: Resolver<Client.Prisma.UserGroupByOutputType, {}, Date | null>
  inContractorMode?: Resolver<Client.Prisma.UserGroupByOutputType, {}, boolean>
  _count?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.UserGroupByOutputType,
    {},
    Client.Prisma.UserMaxAggregateOutputType | null
  >
}

export interface AggregateContractor {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregateContractor,
    {},
    Client.Prisma.ContractorCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateContractor,
    {},
    Client.Prisma.ContractorMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateContractor,
    {},
    Client.Prisma.ContractorMaxAggregateOutputType | null
  >
}

export interface ContractorGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.ContractorGroupByOutputType, {}, string>
  createdAt?: Resolver<Client.Prisma.ContractorGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.ContractorGroupByOutputType, {}, Date>
  userId?: Resolver<
    Client.Prisma.ContractorGroupByOutputType,
    {},
    string | null
  >
  servicesId?: Resolver<
    Client.Prisma.ContractorGroupByOutputType,
    {},
    string | null
  >
  _count?: Resolver<
    Client.Prisma.ContractorGroupByOutputType,
    {},
    Client.Prisma.ContractorCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.ContractorGroupByOutputType,
    {},
    Client.Prisma.ContractorMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.ContractorGroupByOutputType,
    {},
    Client.Prisma.ContractorMaxAggregateOutputType | null
  >
}

export interface AggregateFeedback {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregateFeedback,
    {},
    Client.Prisma.FeedbackCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.AggregateFeedback,
    {},
    Client.Prisma.FeedbackAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.AggregateFeedback,
    {},
    Client.Prisma.FeedbackSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateFeedback,
    {},
    Client.Prisma.FeedbackMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateFeedback,
    {},
    Client.Prisma.FeedbackMaxAggregateOutputType | null
  >
}

export interface FeedbackGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.FeedbackGroupByOutputType, {}, string>
  createdAt?: Resolver<Client.Prisma.FeedbackGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.FeedbackGroupByOutputType, {}, Date>
  score?: Resolver<Client.Prisma.FeedbackGroupByOutputType, {}, number>
  decription?: Resolver<
    Client.Prisma.FeedbackGroupByOutputType,
    {},
    string | null
  >
  userId?: Resolver<Client.Prisma.FeedbackGroupByOutputType, {}, string | null>
  contractorId?: Resolver<
    Client.Prisma.FeedbackGroupByOutputType,
    {},
    string | null
  >
  _count?: Resolver<
    Client.Prisma.FeedbackGroupByOutputType,
    {},
    Client.Prisma.FeedbackCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.FeedbackGroupByOutputType,
    {},
    Client.Prisma.FeedbackAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.FeedbackGroupByOutputType,
    {},
    Client.Prisma.FeedbackSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.FeedbackGroupByOutputType,
    {},
    Client.Prisma.FeedbackMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.FeedbackGroupByOutputType,
    {},
    Client.Prisma.FeedbackMaxAggregateOutputType | null
  >
}

export interface AggregateServices {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregateServices,
    {},
    Client.Prisma.ServicesCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.AggregateServices,
    {},
    Client.Prisma.ServicesAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.AggregateServices,
    {},
    Client.Prisma.ServicesSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateServices,
    {},
    Client.Prisma.ServicesMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateServices,
    {},
    Client.Prisma.ServicesMaxAggregateOutputType | null
  >
}

export interface ServicesGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.ServicesGroupByOutputType, {}, string>
  createdAt?: Resolver<Client.Prisma.ServicesGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.ServicesGroupByOutputType, {}, Date>
  img?: Resolver<Client.Prisma.ServicesGroupByOutputType, {}, string[] | null>
  title?: Resolver<Client.Prisma.ServicesGroupByOutputType, {}, string | null>
  locality?: Resolver<
    Client.Prisma.ServicesGroupByOutputType,
    {},
    string | null
  >
  description?: Resolver<Client.Prisma.ServicesGroupByOutputType, {}, string>
  cost?: Resolver<Client.Prisma.ServicesGroupByOutputType, {}, number>
  isProvide?: Resolver<Client.Prisma.ServicesGroupByOutputType, {}, boolean>
  status?: Resolver<
    Client.Prisma.ServicesGroupByOutputType,
    {},
    Client.ServicesStatusEnum
  >
  canCallMe?: Resolver<Client.Prisma.ServicesGroupByOutputType, {}, boolean>
  contractorId?: Resolver<
    Client.Prisma.ServicesGroupByOutputType,
    {},
    string | null
  >
  customerid?: Resolver<
    Client.Prisma.ServicesGroupByOutputType,
    {},
    string | null
  >
  categoryId?: Resolver<
    Client.Prisma.ServicesGroupByOutputType,
    {},
    string | null
  >
  _count?: Resolver<
    Client.Prisma.ServicesGroupByOutputType,
    {},
    Client.Prisma.ServicesCountAggregateOutputType | null
  >
  _avg?: Resolver<
    Client.Prisma.ServicesGroupByOutputType,
    {},
    Client.Prisma.ServicesAvgAggregateOutputType | null
  >
  _sum?: Resolver<
    Client.Prisma.ServicesGroupByOutputType,
    {},
    Client.Prisma.ServicesSumAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.ServicesGroupByOutputType,
    {},
    Client.Prisma.ServicesMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.ServicesGroupByOutputType,
    {},
    Client.Prisma.ServicesMaxAggregateOutputType | null
  >
}

export interface AggregateCategory {
  [key: string]: Resolver<any, any, any>
  _count?: Resolver<
    Client.Prisma.AggregateCategory,
    {},
    Client.Prisma.CategoryCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.AggregateCategory,
    {},
    Client.Prisma.CategoryMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.AggregateCategory,
    {},
    Client.Prisma.CategoryMaxAggregateOutputType | null
  >
}

export interface CategoryGroupByOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.CategoryGroupByOutputType, {}, string>
  createdAt?: Resolver<Client.Prisma.CategoryGroupByOutputType, {}, Date>
  updatedAt?: Resolver<Client.Prisma.CategoryGroupByOutputType, {}, Date>
  title?: Resolver<Client.Prisma.CategoryGroupByOutputType, {}, string>
  _count?: Resolver<
    Client.Prisma.CategoryGroupByOutputType,
    {},
    Client.Prisma.CategoryCountAggregateOutputType | null
  >
  _min?: Resolver<
    Client.Prisma.CategoryGroupByOutputType,
    {},
    Client.Prisma.CategoryMinAggregateOutputType | null
  >
  _max?: Resolver<
    Client.Prisma.CategoryGroupByOutputType,
    {},
    Client.Prisma.CategoryMaxAggregateOutputType | null
  >
}

export interface AffectedRowsOutput {
  [key: string]: Resolver<any, any, any>
  count?: Resolver<Client.Prisma.BatchPayload, {}, number>
}

export interface UserCountOutputType {
  [key: string]: Resolver<any, any, any>
  services?: Resolver<Client.Prisma.UserCountOutputType, {}, number>
  feedback?: Resolver<Client.Prisma.UserCountOutputType, {}, number>
}

export interface UserCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  createdAt?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  updatedAt?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  isConfirmed?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  phone?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  email?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  code?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  avatar?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  name?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  address?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  locality?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
  birthdayDate?: Resolver<
    Client.Prisma.UserCountAggregateOutputType,
    {},
    number
  >
  inContractorMode?: Resolver<
    Client.Prisma.UserCountAggregateOutputType,
    {},
    number
  >
  _all?: Resolver<Client.Prisma.UserCountAggregateOutputType, {}, number>
}

export interface UserMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    Date | null
  >
  isConfirmed?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    boolean | null
  >
  phone?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  email?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  code?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  avatar?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  name?: Resolver<Client.Prisma.UserMinAggregateOutputType, {}, string | null>
  address?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    string | null
  >
  locality?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    string | null
  >
  birthdayDate?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    Date | null
  >
  inContractorMode?: Resolver<
    Client.Prisma.UserMinAggregateOutputType,
    {},
    boolean | null
  >
}

export interface UserMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    Date | null
  >
  isConfirmed?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    boolean | null
  >
  phone?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  email?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  code?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  avatar?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  name?: Resolver<Client.Prisma.UserMaxAggregateOutputType, {}, string | null>
  address?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    string | null
  >
  locality?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    string | null
  >
  birthdayDate?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    Date | null
  >
  inContractorMode?: Resolver<
    Client.Prisma.UserMaxAggregateOutputType,
    {},
    boolean | null
  >
}

export interface ContractorCountOutputType {
  [key: string]: Resolver<any, any, any>
  services?: Resolver<Client.Prisma.ContractorCountOutputType, {}, number>
  feedback?: Resolver<Client.Prisma.ContractorCountOutputType, {}, number>
}

export interface ContractorCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.ContractorCountAggregateOutputType, {}, number>
  createdAt?: Resolver<
    Client.Prisma.ContractorCountAggregateOutputType,
    {},
    number
  >
  updatedAt?: Resolver<
    Client.Prisma.ContractorCountAggregateOutputType,
    {},
    number
  >
  userId?: Resolver<
    Client.Prisma.ContractorCountAggregateOutputType,
    {},
    number
  >
  servicesId?: Resolver<
    Client.Prisma.ContractorCountAggregateOutputType,
    {},
    number
  >
  _all?: Resolver<Client.Prisma.ContractorCountAggregateOutputType, {}, number>
}

export interface ContractorMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<
    Client.Prisma.ContractorMinAggregateOutputType,
    {},
    string | null
  >
  createdAt?: Resolver<
    Client.Prisma.ContractorMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.ContractorMinAggregateOutputType,
    {},
    Date | null
  >
  userId?: Resolver<
    Client.Prisma.ContractorMinAggregateOutputType,
    {},
    string | null
  >
  servicesId?: Resolver<
    Client.Prisma.ContractorMinAggregateOutputType,
    {},
    string | null
  >
}

export interface ContractorMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<
    Client.Prisma.ContractorMaxAggregateOutputType,
    {},
    string | null
  >
  createdAt?: Resolver<
    Client.Prisma.ContractorMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.ContractorMaxAggregateOutputType,
    {},
    Date | null
  >
  userId?: Resolver<
    Client.Prisma.ContractorMaxAggregateOutputType,
    {},
    string | null
  >
  servicesId?: Resolver<
    Client.Prisma.ContractorMaxAggregateOutputType,
    {},
    string | null
  >
}

export interface FeedbackCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.FeedbackCountAggregateOutputType, {}, number>
  createdAt?: Resolver<
    Client.Prisma.FeedbackCountAggregateOutputType,
    {},
    number
  >
  updatedAt?: Resolver<
    Client.Prisma.FeedbackCountAggregateOutputType,
    {},
    number
  >
  score?: Resolver<Client.Prisma.FeedbackCountAggregateOutputType, {}, number>
  decription?: Resolver<
    Client.Prisma.FeedbackCountAggregateOutputType,
    {},
    number
  >
  userId?: Resolver<Client.Prisma.FeedbackCountAggregateOutputType, {}, number>
  contractorId?: Resolver<
    Client.Prisma.FeedbackCountAggregateOutputType,
    {},
    number
  >
  _all?: Resolver<Client.Prisma.FeedbackCountAggregateOutputType, {}, number>
}

export interface FeedbackAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  score?: Resolver<
    Client.Prisma.FeedbackAvgAggregateOutputType,
    {},
    number | null
  >
}

export interface FeedbackSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  score?: Resolver<
    Client.Prisma.FeedbackSumAggregateOutputType,
    {},
    number | null
  >
}

export interface FeedbackMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.FeedbackMinAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.FeedbackMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.FeedbackMinAggregateOutputType,
    {},
    Date | null
  >
  score?: Resolver<
    Client.Prisma.FeedbackMinAggregateOutputType,
    {},
    number | null
  >
  decription?: Resolver<
    Client.Prisma.FeedbackMinAggregateOutputType,
    {},
    string | null
  >
  userId?: Resolver<
    Client.Prisma.FeedbackMinAggregateOutputType,
    {},
    string | null
  >
  contractorId?: Resolver<
    Client.Prisma.FeedbackMinAggregateOutputType,
    {},
    string | null
  >
}

export interface FeedbackMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.FeedbackMaxAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.FeedbackMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.FeedbackMaxAggregateOutputType,
    {},
    Date | null
  >
  score?: Resolver<
    Client.Prisma.FeedbackMaxAggregateOutputType,
    {},
    number | null
  >
  decription?: Resolver<
    Client.Prisma.FeedbackMaxAggregateOutputType,
    {},
    string | null
  >
  userId?: Resolver<
    Client.Prisma.FeedbackMaxAggregateOutputType,
    {},
    string | null
  >
  contractorId?: Resolver<
    Client.Prisma.FeedbackMaxAggregateOutputType,
    {},
    string | null
  >
}

export interface ServicesCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.ServicesCountAggregateOutputType, {}, number>
  createdAt?: Resolver<
    Client.Prisma.ServicesCountAggregateOutputType,
    {},
    number
  >
  updatedAt?: Resolver<
    Client.Prisma.ServicesCountAggregateOutputType,
    {},
    number
  >
  img?: Resolver<Client.Prisma.ServicesCountAggregateOutputType, {}, number>
  title?: Resolver<Client.Prisma.ServicesCountAggregateOutputType, {}, number>
  locality?: Resolver<
    Client.Prisma.ServicesCountAggregateOutputType,
    {},
    number
  >
  description?: Resolver<
    Client.Prisma.ServicesCountAggregateOutputType,
    {},
    number
  >
  cost?: Resolver<Client.Prisma.ServicesCountAggregateOutputType, {}, number>
  isProvide?: Resolver<
    Client.Prisma.ServicesCountAggregateOutputType,
    {},
    number
  >
  status?: Resolver<Client.Prisma.ServicesCountAggregateOutputType, {}, number>
  canCallMe?: Resolver<
    Client.Prisma.ServicesCountAggregateOutputType,
    {},
    number
  >
  contractorId?: Resolver<
    Client.Prisma.ServicesCountAggregateOutputType,
    {},
    number
  >
  customerid?: Resolver<
    Client.Prisma.ServicesCountAggregateOutputType,
    {},
    number
  >
  categoryId?: Resolver<
    Client.Prisma.ServicesCountAggregateOutputType,
    {},
    number
  >
  _all?: Resolver<Client.Prisma.ServicesCountAggregateOutputType, {}, number>
}

export interface ServicesAvgAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  cost?: Resolver<
    Client.Prisma.ServicesAvgAggregateOutputType,
    {},
    number | null
  >
}

export interface ServicesSumAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  cost?: Resolver<
    Client.Prisma.ServicesSumAggregateOutputType,
    {},
    number | null
  >
}

export interface ServicesMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.ServicesMinAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.ServicesMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.ServicesMinAggregateOutputType,
    {},
    Date | null
  >
  title?: Resolver<
    Client.Prisma.ServicesMinAggregateOutputType,
    {},
    string | null
  >
  locality?: Resolver<
    Client.Prisma.ServicesMinAggregateOutputType,
    {},
    string | null
  >
  description?: Resolver<
    Client.Prisma.ServicesMinAggregateOutputType,
    {},
    string | null
  >
  cost?: Resolver<
    Client.Prisma.ServicesMinAggregateOutputType,
    {},
    number | null
  >
  isProvide?: Resolver<
    Client.Prisma.ServicesMinAggregateOutputType,
    {},
    boolean | null
  >
  status?: Resolver<
    Client.Prisma.ServicesMinAggregateOutputType,
    {},
    Client.ServicesStatusEnum | null
  >
  canCallMe?: Resolver<
    Client.Prisma.ServicesMinAggregateOutputType,
    {},
    boolean | null
  >
  contractorId?: Resolver<
    Client.Prisma.ServicesMinAggregateOutputType,
    {},
    string | null
  >
  customerid?: Resolver<
    Client.Prisma.ServicesMinAggregateOutputType,
    {},
    string | null
  >
  categoryId?: Resolver<
    Client.Prisma.ServicesMinAggregateOutputType,
    {},
    string | null
  >
}

export interface ServicesMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.ServicesMaxAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.ServicesMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.ServicesMaxAggregateOutputType,
    {},
    Date | null
  >
  title?: Resolver<
    Client.Prisma.ServicesMaxAggregateOutputType,
    {},
    string | null
  >
  locality?: Resolver<
    Client.Prisma.ServicesMaxAggregateOutputType,
    {},
    string | null
  >
  description?: Resolver<
    Client.Prisma.ServicesMaxAggregateOutputType,
    {},
    string | null
  >
  cost?: Resolver<
    Client.Prisma.ServicesMaxAggregateOutputType,
    {},
    number | null
  >
  isProvide?: Resolver<
    Client.Prisma.ServicesMaxAggregateOutputType,
    {},
    boolean | null
  >
  status?: Resolver<
    Client.Prisma.ServicesMaxAggregateOutputType,
    {},
    Client.ServicesStatusEnum | null
  >
  canCallMe?: Resolver<
    Client.Prisma.ServicesMaxAggregateOutputType,
    {},
    boolean | null
  >
  contractorId?: Resolver<
    Client.Prisma.ServicesMaxAggregateOutputType,
    {},
    string | null
  >
  customerid?: Resolver<
    Client.Prisma.ServicesMaxAggregateOutputType,
    {},
    string | null
  >
  categoryId?: Resolver<
    Client.Prisma.ServicesMaxAggregateOutputType,
    {},
    string | null
  >
}

export interface CategoryCountOutputType {
  [key: string]: Resolver<any, any, any>
  services?: Resolver<Client.Prisma.CategoryCountOutputType, {}, number>
}

export interface CategoryCountAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.CategoryCountAggregateOutputType, {}, number>
  createdAt?: Resolver<
    Client.Prisma.CategoryCountAggregateOutputType,
    {},
    number
  >
  updatedAt?: Resolver<
    Client.Prisma.CategoryCountAggregateOutputType,
    {},
    number
  >
  title?: Resolver<Client.Prisma.CategoryCountAggregateOutputType, {}, number>
  _all?: Resolver<Client.Prisma.CategoryCountAggregateOutputType, {}, number>
}

export interface CategoryMinAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.CategoryMinAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.CategoryMinAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.CategoryMinAggregateOutputType,
    {},
    Date | null
  >
  title?: Resolver<
    Client.Prisma.CategoryMinAggregateOutputType,
    {},
    string | null
  >
}

export interface CategoryMaxAggregateOutputType {
  [key: string]: Resolver<any, any, any>
  id?: Resolver<Client.Prisma.CategoryMaxAggregateOutputType, {}, string | null>
  createdAt?: Resolver<
    Client.Prisma.CategoryMaxAggregateOutputType,
    {},
    Date | null
  >
  updatedAt?: Resolver<
    Client.Prisma.CategoryMaxAggregateOutputType,
    {},
    Date | null
  >
  title?: Resolver<
    Client.Prisma.CategoryMaxAggregateOutputType,
    {},
    string | null
  >
}

export interface UserServicesArgs {
  where?: ServicesWhereInput | null
  orderBy?: ServicesOrderByWithRelationInput[] | null
  cursor?: ServicesWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: ServicesScalarFieldEnum[] | null
}

export interface UserFeedbackArgs {
  where?: FeedbackWhereInput | null
  orderBy?: FeedbackOrderByWithRelationInput[] | null
  cursor?: FeedbackWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: FeedbackScalarFieldEnum[] | null
}

export interface ContractorServicesArgs {
  where?: ServicesWhereInput | null
  orderBy?: ServicesOrderByWithRelationInput[] | null
  cursor?: ServicesWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: ServicesScalarFieldEnum[] | null
}

export interface ContractorFeedbackArgs {
  where?: FeedbackWhereInput | null
  orderBy?: FeedbackOrderByWithRelationInput[] | null
  cursor?: FeedbackWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: FeedbackScalarFieldEnum[] | null
}

export interface CategoryServicesArgs {
  where?: ServicesWhereInput | null
  orderBy?: ServicesOrderByWithRelationInput[] | null
  cursor?: ServicesWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: ServicesScalarFieldEnum[] | null
}

export interface FindFirstUserArgs {
  where?: UserWhereInput | null
  orderBy?: UserOrderByWithRelationInput[] | null
  cursor?: UserWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: UserScalarFieldEnum[] | null
}

export interface FindManyUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  distinct?: UserScalarFieldEnum[]
}

export interface AggregateUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByWithRelationInput[]
  cursor?: UserWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.UserCountAggregateInputType
  _min?: Client.Prisma.UserMinAggregateInputType
  _max?: Client.Prisma.UserMaxAggregateInputType
}

export interface GroupByUserArgs {
  where?: UserWhereInput
  orderBy?: UserOrderByWithAggregationInput[]
  by: UserScalarFieldEnum[]
  having?: UserScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueUserArgs {
  where: UserWhereUniqueInput | null
}

export interface FindFirstContractorArgs {
  where?: ContractorWhereInput | null
  orderBy?: ContractorOrderByWithRelationInput[] | null
  cursor?: ContractorWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: ContractorScalarFieldEnum[] | null
}

export interface FindManyContractorArgs {
  where?: ContractorWhereInput
  orderBy?: ContractorOrderByWithRelationInput[]
  cursor?: ContractorWhereUniqueInput
  take?: number
  skip?: number
  distinct?: ContractorScalarFieldEnum[]
}

export interface AggregateContractorArgs {
  where?: ContractorWhereInput
  orderBy?: ContractorOrderByWithRelationInput[]
  cursor?: ContractorWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.ContractorCountAggregateInputType
  _min?: Client.Prisma.ContractorMinAggregateInputType
  _max?: Client.Prisma.ContractorMaxAggregateInputType
}

export interface GroupByContractorArgs {
  where?: ContractorWhereInput
  orderBy?: ContractorOrderByWithAggregationInput[]
  by: ContractorScalarFieldEnum[]
  having?: ContractorScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueContractorArgs {
  where: ContractorWhereUniqueInput | null
}

export interface FindFirstFeedbackArgs {
  where?: FeedbackWhereInput | null
  orderBy?: FeedbackOrderByWithRelationInput[] | null
  cursor?: FeedbackWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: FeedbackScalarFieldEnum[] | null
}

export interface FindManyFeedbackArgs {
  where?: FeedbackWhereInput
  orderBy?: FeedbackOrderByWithRelationInput[]
  cursor?: FeedbackWhereUniqueInput
  take?: number
  skip?: number
  distinct?: FeedbackScalarFieldEnum[]
}

export interface AggregateFeedbackArgs {
  where?: FeedbackWhereInput
  orderBy?: FeedbackOrderByWithRelationInput[]
  cursor?: FeedbackWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.FeedbackCountAggregateInputType
  _avg?: Client.Prisma.FeedbackAvgAggregateInputType
  _sum?: Client.Prisma.FeedbackSumAggregateInputType
  _min?: Client.Prisma.FeedbackMinAggregateInputType
  _max?: Client.Prisma.FeedbackMaxAggregateInputType
}

export interface GroupByFeedbackArgs {
  where?: FeedbackWhereInput
  orderBy?: FeedbackOrderByWithAggregationInput[]
  by: FeedbackScalarFieldEnum[]
  having?: FeedbackScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueFeedbackArgs {
  where: FeedbackWhereUniqueInput | null
}

export interface FindFirstServicesArgs {
  where?: ServicesWhereInput | null
  orderBy?: ServicesOrderByWithRelationInput[] | null
  cursor?: ServicesWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: ServicesScalarFieldEnum[] | null
}

export interface FindManyServicesArgs {
  where?: ServicesWhereInput
  orderBy?: ServicesOrderByWithRelationInput[]
  cursor?: ServicesWhereUniqueInput
  take?: number
  skip?: number
  distinct?: ServicesScalarFieldEnum[]
}

export interface AggregateServicesArgs {
  where?: ServicesWhereInput
  orderBy?: ServicesOrderByWithRelationInput[]
  cursor?: ServicesWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.ServicesCountAggregateInputType
  _avg?: Client.Prisma.ServicesAvgAggregateInputType
  _sum?: Client.Prisma.ServicesSumAggregateInputType
  _min?: Client.Prisma.ServicesMinAggregateInputType
  _max?: Client.Prisma.ServicesMaxAggregateInputType
}

export interface GroupByServicesArgs {
  where?: ServicesWhereInput
  orderBy?: ServicesOrderByWithAggregationInput[]
  by: ServicesScalarFieldEnum[]
  having?: ServicesScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueServicesArgs {
  where: ServicesWhereUniqueInput | null
}

export interface FindFirstCategoryArgs {
  where?: CategoryWhereInput | null
  orderBy?: CategoryOrderByWithRelationInput[] | null
  cursor?: CategoryWhereUniqueInput | null
  take?: number | null
  skip?: number | null
  distinct?: CategoryScalarFieldEnum[] | null
}

export interface FindManyCategoryArgs {
  where?: CategoryWhereInput
  orderBy?: CategoryOrderByWithRelationInput[]
  cursor?: CategoryWhereUniqueInput
  take?: number
  skip?: number
  distinct?: CategoryScalarFieldEnum[]
}

export interface AggregateCategoryArgs {
  where?: CategoryWhereInput
  orderBy?: CategoryOrderByWithRelationInput[]
  cursor?: CategoryWhereUniqueInput
  take?: number
  skip?: number
  _count?: Client.Prisma.CategoryCountAggregateInputType
  _min?: Client.Prisma.CategoryMinAggregateInputType
  _max?: Client.Prisma.CategoryMaxAggregateInputType
}

export interface GroupByCategoryArgs {
  where?: CategoryWhereInput
  orderBy?: CategoryOrderByWithAggregationInput[]
  by: CategoryScalarFieldEnum[]
  having?: CategoryScalarWhereWithAggregatesInput
  take?: number
  skip?: number
}

export interface FindUniqueCategoryArgs {
  where: CategoryWhereUniqueInput | null
}

export interface CreateOneUserArgs {
  data: UserCreateInput
}

export interface UpsertOneUserArgs {
  where: UserWhereUniqueInput
  create: UserCreateInput
  update: UserUpdateInput
}

export interface CreateManyUserArgs {
  data: UserCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOneUserArgs {
  where: UserWhereUniqueInput | null
}

export interface UpdateOneUserArgs {
  data: UserUpdateInput | null
  where: UserWhereUniqueInput | null
}

export interface UpdateManyUserArgs {
  data: UserUpdateManyMutationInput
  where?: UserWhereInput
}

export interface DeleteManyUserArgs {
  where?: UserWhereInput
}

export interface CreateOneContractorArgs {
  data: ContractorCreateInput
}

export interface UpsertOneContractorArgs {
  where: ContractorWhereUniqueInput
  create: ContractorCreateInput
  update: ContractorUpdateInput
}

export interface CreateManyContractorArgs {
  data: ContractorCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOneContractorArgs {
  where: ContractorWhereUniqueInput | null
}

export interface UpdateOneContractorArgs {
  data: ContractorUpdateInput | null
  where: ContractorWhereUniqueInput | null
}

export interface UpdateManyContractorArgs {
  data: ContractorUpdateManyMutationInput
  where?: ContractorWhereInput
}

export interface DeleteManyContractorArgs {
  where?: ContractorWhereInput
}

export interface CreateOneFeedbackArgs {
  data: FeedbackCreateInput
}

export interface UpsertOneFeedbackArgs {
  where: FeedbackWhereUniqueInput
  create: FeedbackCreateInput
  update: FeedbackUpdateInput
}

export interface CreateManyFeedbackArgs {
  data: FeedbackCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOneFeedbackArgs {
  where: FeedbackWhereUniqueInput | null
}

export interface UpdateOneFeedbackArgs {
  data: FeedbackUpdateInput | null
  where: FeedbackWhereUniqueInput | null
}

export interface UpdateManyFeedbackArgs {
  data: FeedbackUpdateManyMutationInput
  where?: FeedbackWhereInput
}

export interface DeleteManyFeedbackArgs {
  where?: FeedbackWhereInput
}

export interface CreateOneServicesArgs {
  data: ServicesCreateInput
}

export interface UpsertOneServicesArgs {
  where: ServicesWhereUniqueInput
  create: ServicesCreateInput
  update: ServicesUpdateInput
}

export interface CreateManyServicesArgs {
  data: ServicesCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOneServicesArgs {
  where: ServicesWhereUniqueInput | null
}

export interface UpdateOneServicesArgs {
  data: ServicesUpdateInput | null
  where: ServicesWhereUniqueInput | null
}

export interface UpdateManyServicesArgs {
  data: ServicesUpdateManyMutationInput
  where?: ServicesWhereInput
}

export interface DeleteManyServicesArgs {
  where?: ServicesWhereInput
}

export interface CreateOneCategoryArgs {
  data: CategoryCreateInput
}

export interface UpsertOneCategoryArgs {
  where: CategoryWhereUniqueInput
  create: CategoryCreateInput
  update: CategoryUpdateInput
}

export interface CreateManyCategoryArgs {
  data: CategoryCreateManyInput[]
  skipDuplicates?: boolean
}

export interface DeleteOneCategoryArgs {
  where: CategoryWhereUniqueInput | null
}

export interface UpdateOneCategoryArgs {
  data: CategoryUpdateInput | null
  where: CategoryWhereUniqueInput | null
}

export interface UpdateManyCategoryArgs {
  data: CategoryUpdateManyMutationInput
  where?: CategoryWhereInput
}

export interface DeleteManyCategoryArgs {
  where?: CategoryWhereInput
}

export interface ExecuteRawArgs {
  query: string
  parameters?: any
}

export interface QueryRawArgs {
  query: string
  parameters?: any
}

export interface UserWhereInput {
  AND?: UserWhereInput[]
  OR?: UserWhereInput[]
  NOT?: UserWhereInput[]
  id?: StringFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  isConfirmed?: BoolFilter
  phone?: StringNullableFilter | null
  email?: StringNullableFilter | null
  code?: StringNullableFilter | null
  avatar?: StringNullableFilter | null
  name?: StringNullableFilter | null
  address?: StringNullableFilter | null
  locality?: StringNullableFilter | null
  birthdayDate?: DateTimeNullableFilter | null
  inContractorMode?: BoolFilter
  contractorProfile?: ContractorWhereInput | null
  services?: ServicesListRelationFilter
  feedback?: FeedbackListRelationFilter
}

export interface UserOrderByWithRelationInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  isConfirmed?: SortOrder
  phone?: SortOrder
  email?: SortOrder
  code?: SortOrder
  avatar?: SortOrder
  name?: SortOrder
  address?: SortOrder
  locality?: SortOrder
  birthdayDate?: SortOrder
  inContractorMode?: SortOrder
  contractorProfile?: ContractorOrderByWithRelationInput
  services?: ServicesOrderByRelationAggregateInput
  feedback?: FeedbackOrderByRelationAggregateInput
}

export interface UserWhereUniqueInput {
  id?: string
  phone?: string
  email?: string
}

export interface UserOrderByWithAggregationInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  isConfirmed?: SortOrder
  phone?: SortOrder
  email?: SortOrder
  code?: SortOrder
  avatar?: SortOrder
  name?: SortOrder
  address?: SortOrder
  locality?: SortOrder
  birthdayDate?: SortOrder
  inContractorMode?: SortOrder
  _count?: UserCountOrderByAggregateInput
  _max?: UserMaxOrderByAggregateInput
  _min?: UserMinOrderByAggregateInput
}

export interface UserScalarWhereWithAggregatesInput {
  AND?: UserScalarWhereWithAggregatesInput[]
  OR?: UserScalarWhereWithAggregatesInput[]
  NOT?: UserScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
  isConfirmed?: BoolWithAggregatesFilter
  phone?: StringNullableWithAggregatesFilter | null
  email?: StringNullableWithAggregatesFilter | null
  code?: StringNullableWithAggregatesFilter | null
  avatar?: StringNullableWithAggregatesFilter | null
  name?: StringNullableWithAggregatesFilter | null
  address?: StringNullableWithAggregatesFilter | null
  locality?: StringNullableWithAggregatesFilter | null
  birthdayDate?: DateTimeNullableWithAggregatesFilter | null
  inContractorMode?: BoolWithAggregatesFilter
}

export interface ContractorWhereInput {
  AND?: ContractorWhereInput[]
  OR?: ContractorWhereInput[]
  NOT?: ContractorWhereInput[]
  id?: StringFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  user?: UserWhereInput | null
  userId?: StringNullableFilter | null
  services?: ServicesListRelationFilter
  servicesId?: StringNullableFilter | null
  feedback?: FeedbackListRelationFilter
}

export interface ContractorOrderByWithRelationInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  user?: UserOrderByWithRelationInput
  userId?: SortOrder
  services?: ServicesOrderByRelationAggregateInput
  servicesId?: SortOrder
  feedback?: FeedbackOrderByRelationAggregateInput
}

export interface ContractorWhereUniqueInput {
  id?: string
  userId?: string
}

export interface ContractorOrderByWithAggregationInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  userId?: SortOrder
  servicesId?: SortOrder
  _count?: ContractorCountOrderByAggregateInput
  _max?: ContractorMaxOrderByAggregateInput
  _min?: ContractorMinOrderByAggregateInput
}

export interface ContractorScalarWhereWithAggregatesInput {
  AND?: ContractorScalarWhereWithAggregatesInput[]
  OR?: ContractorScalarWhereWithAggregatesInput[]
  NOT?: ContractorScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
  userId?: StringNullableWithAggregatesFilter | null
  servicesId?: StringNullableWithAggregatesFilter | null
}

export interface FeedbackWhereInput {
  AND?: FeedbackWhereInput[]
  OR?: FeedbackWhereInput[]
  NOT?: FeedbackWhereInput[]
  id?: StringFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  score?: IntFilter
  decription?: StringNullableFilter | null
  user?: UserWhereInput | null
  userId?: StringNullableFilter | null
  contractor?: ContractorWhereInput | null
  contractorId?: StringNullableFilter | null
}

export interface FeedbackOrderByWithRelationInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  score?: SortOrder
  decription?: SortOrder
  user?: UserOrderByWithRelationInput
  userId?: SortOrder
  contractor?: ContractorOrderByWithRelationInput
  contractorId?: SortOrder
}

export interface FeedbackWhereUniqueInput {
  id?: string
}

export interface FeedbackOrderByWithAggregationInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  score?: SortOrder
  decription?: SortOrder
  userId?: SortOrder
  contractorId?: SortOrder
  _count?: FeedbackCountOrderByAggregateInput
  _avg?: FeedbackAvgOrderByAggregateInput
  _max?: FeedbackMaxOrderByAggregateInput
  _min?: FeedbackMinOrderByAggregateInput
  _sum?: FeedbackSumOrderByAggregateInput
}

export interface FeedbackScalarWhereWithAggregatesInput {
  AND?: FeedbackScalarWhereWithAggregatesInput[]
  OR?: FeedbackScalarWhereWithAggregatesInput[]
  NOT?: FeedbackScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
  score?: IntWithAggregatesFilter
  decription?: StringNullableWithAggregatesFilter | null
  userId?: StringNullableWithAggregatesFilter | null
  contractorId?: StringNullableWithAggregatesFilter | null
}

export interface ServicesWhereInput {
  AND?: ServicesWhereInput[]
  OR?: ServicesWhereInput[]
  NOT?: ServicesWhereInput[]
  id?: StringFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  img?: StringNullableListFilter
  title?: StringNullableFilter | null
  locality?: StringNullableFilter | null
  description?: StringFilter
  cost?: FloatFilter
  isProvide?: BoolFilter
  status?: EnumServicesStatusEnumFilter
  canCallMe?: BoolFilter
  contractor?: ContractorWhereInput | null
  contractorId?: StringNullableFilter | null
  customer?: UserWhereInput | null
  customerid?: StringNullableFilter | null
  category?: CategoryWhereInput | null
  categoryId?: StringNullableFilter | null
}

export interface ServicesOrderByWithRelationInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  img?: SortOrder
  title?: SortOrder
  locality?: SortOrder
  description?: SortOrder
  cost?: SortOrder
  isProvide?: SortOrder
  status?: SortOrder
  canCallMe?: SortOrder
  contractor?: ContractorOrderByWithRelationInput
  contractorId?: SortOrder
  customer?: UserOrderByWithRelationInput
  customerid?: SortOrder
  category?: CategoryOrderByWithRelationInput
  categoryId?: SortOrder
}

export interface ServicesWhereUniqueInput {
  id?: string
}

export interface ServicesOrderByWithAggregationInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  img?: SortOrder
  title?: SortOrder
  locality?: SortOrder
  description?: SortOrder
  cost?: SortOrder
  isProvide?: SortOrder
  status?: SortOrder
  canCallMe?: SortOrder
  contractorId?: SortOrder
  customerid?: SortOrder
  categoryId?: SortOrder
  _count?: ServicesCountOrderByAggregateInput
  _avg?: ServicesAvgOrderByAggregateInput
  _max?: ServicesMaxOrderByAggregateInput
  _min?: ServicesMinOrderByAggregateInput
  _sum?: ServicesSumOrderByAggregateInput
}

export interface ServicesScalarWhereWithAggregatesInput {
  AND?: ServicesScalarWhereWithAggregatesInput[]
  OR?: ServicesScalarWhereWithAggregatesInput[]
  NOT?: ServicesScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
  img?: StringNullableListFilter
  title?: StringNullableWithAggregatesFilter | null
  locality?: StringNullableWithAggregatesFilter | null
  description?: StringWithAggregatesFilter
  cost?: FloatWithAggregatesFilter
  isProvide?: BoolWithAggregatesFilter
  status?: EnumServicesStatusEnumWithAggregatesFilter
  canCallMe?: BoolWithAggregatesFilter
  contractorId?: StringNullableWithAggregatesFilter | null
  customerid?: StringNullableWithAggregatesFilter | null
  categoryId?: StringNullableWithAggregatesFilter | null
}

export interface CategoryWhereInput {
  AND?: CategoryWhereInput[]
  OR?: CategoryWhereInput[]
  NOT?: CategoryWhereInput[]
  id?: StringFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  title?: StringFilter
  services?: ServicesListRelationFilter
}

export interface CategoryOrderByWithRelationInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  title?: SortOrder
  services?: ServicesOrderByRelationAggregateInput
}

export interface CategoryWhereUniqueInput {
  id?: string
}

export interface CategoryOrderByWithAggregationInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  title?: SortOrder
  _count?: CategoryCountOrderByAggregateInput
  _max?: CategoryMaxOrderByAggregateInput
  _min?: CategoryMinOrderByAggregateInput
}

export interface CategoryScalarWhereWithAggregatesInput {
  AND?: CategoryScalarWhereWithAggregatesInput[]
  OR?: CategoryScalarWhereWithAggregatesInput[]
  NOT?: CategoryScalarWhereWithAggregatesInput[]
  id?: StringWithAggregatesFilter
  createdAt?: DateTimeWithAggregatesFilter
  updatedAt?: DateTimeWithAggregatesFilter
  title?: StringWithAggregatesFilter
}

export interface UserCreateInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  isConfirmed?: boolean
  phone?: string | null
  email?: string | null
  code?: string | null
  avatar?: string | null
  name?: string | null
  address?: string | null
  locality?: string | null
  birthdayDate?: Date | null
  inContractorMode?: boolean
  contractorProfile?: ContractorCreateNestedOneWithoutUserInput
  services?: ServicesCreateNestedManyWithoutCustomerInput
  feedback?: FeedbackCreateNestedManyWithoutUserInput
}

export interface UserUncheckedCreateInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  isConfirmed?: boolean
  phone?: string | null
  email?: string | null
  code?: string | null
  avatar?: string | null
  name?: string | null
  address?: string | null
  locality?: string | null
  birthdayDate?: Date | null
  inContractorMode?: boolean
  contractorProfile?: ContractorUncheckedCreateNestedOneWithoutUserInput
  services?: ServicesUncheckedCreateNestedManyWithoutCustomerInput
  feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput
}

export interface UserUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  isConfirmed?: BoolFieldUpdateOperationsInput
  phone?: NullableStringFieldUpdateOperationsInput | null
  email?: NullableStringFieldUpdateOperationsInput | null
  code?: NullableStringFieldUpdateOperationsInput | null
  avatar?: NullableStringFieldUpdateOperationsInput | null
  name?: NullableStringFieldUpdateOperationsInput | null
  address?: NullableStringFieldUpdateOperationsInput | null
  locality?: NullableStringFieldUpdateOperationsInput | null
  birthdayDate?: NullableDateTimeFieldUpdateOperationsInput | null
  inContractorMode?: BoolFieldUpdateOperationsInput
  contractorProfile?: ContractorUpdateOneWithoutUserInput
  services?: ServicesUpdateManyWithoutCustomerInput
  feedback?: FeedbackUpdateManyWithoutUserInput
}

export interface UserUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  isConfirmed?: BoolFieldUpdateOperationsInput
  phone?: NullableStringFieldUpdateOperationsInput | null
  email?: NullableStringFieldUpdateOperationsInput | null
  code?: NullableStringFieldUpdateOperationsInput | null
  avatar?: NullableStringFieldUpdateOperationsInput | null
  name?: NullableStringFieldUpdateOperationsInput | null
  address?: NullableStringFieldUpdateOperationsInput | null
  locality?: NullableStringFieldUpdateOperationsInput | null
  birthdayDate?: NullableDateTimeFieldUpdateOperationsInput | null
  inContractorMode?: BoolFieldUpdateOperationsInput
  contractorProfile?: ContractorUncheckedUpdateOneWithoutUserInput
  services?: ServicesUncheckedUpdateManyWithoutCustomerInput
  feedback?: FeedbackUncheckedUpdateManyWithoutUserInput
}

export interface UserCreateManyInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  isConfirmed?: boolean
  phone?: string | null
  email?: string | null
  code?: string | null
  avatar?: string | null
  name?: string | null
  address?: string | null
  locality?: string | null
  birthdayDate?: Date | null
  inContractorMode?: boolean
}

export interface UserUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  isConfirmed?: BoolFieldUpdateOperationsInput
  phone?: NullableStringFieldUpdateOperationsInput | null
  email?: NullableStringFieldUpdateOperationsInput | null
  code?: NullableStringFieldUpdateOperationsInput | null
  avatar?: NullableStringFieldUpdateOperationsInput | null
  name?: NullableStringFieldUpdateOperationsInput | null
  address?: NullableStringFieldUpdateOperationsInput | null
  locality?: NullableStringFieldUpdateOperationsInput | null
  birthdayDate?: NullableDateTimeFieldUpdateOperationsInput | null
  inContractorMode?: BoolFieldUpdateOperationsInput
}

export interface UserUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  isConfirmed?: BoolFieldUpdateOperationsInput
  phone?: NullableStringFieldUpdateOperationsInput | null
  email?: NullableStringFieldUpdateOperationsInput | null
  code?: NullableStringFieldUpdateOperationsInput | null
  avatar?: NullableStringFieldUpdateOperationsInput | null
  name?: NullableStringFieldUpdateOperationsInput | null
  address?: NullableStringFieldUpdateOperationsInput | null
  locality?: NullableStringFieldUpdateOperationsInput | null
  birthdayDate?: NullableDateTimeFieldUpdateOperationsInput | null
  inContractorMode?: BoolFieldUpdateOperationsInput
}

export interface ContractorCreateInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  user?: UserCreateNestedOneWithoutContractorProfileInput
  services?: ServicesCreateNestedManyWithoutContractorInput
  servicesId?: string | null
  feedback?: FeedbackCreateNestedManyWithoutContractorInput
}

export interface ContractorUncheckedCreateInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  userId?: string | null
  services?: ServicesUncheckedCreateNestedManyWithoutContractorInput
  servicesId?: string | null
  feedback?: FeedbackUncheckedCreateNestedManyWithoutContractorInput
}

export interface ContractorUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  user?: UserUpdateOneWithoutContractorProfileInput
  services?: ServicesUpdateManyWithoutContractorInput
  servicesId?: NullableStringFieldUpdateOperationsInput | null
  feedback?: FeedbackUpdateManyWithoutContractorInput
}

export interface ContractorUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  userId?: NullableStringFieldUpdateOperationsInput | null
  services?: ServicesUncheckedUpdateManyWithoutContractorInput
  servicesId?: NullableStringFieldUpdateOperationsInput | null
  feedback?: FeedbackUncheckedUpdateManyWithoutContractorInput
}

export interface ContractorCreateManyInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  userId?: string | null
  servicesId?: string | null
}

export interface ContractorUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  servicesId?: NullableStringFieldUpdateOperationsInput | null
}

export interface ContractorUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  userId?: NullableStringFieldUpdateOperationsInput | null
  servicesId?: NullableStringFieldUpdateOperationsInput | null
}

export interface FeedbackCreateInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  score: number
  decription?: string | null
  user?: UserCreateNestedOneWithoutFeedbackInput
  contractor?: ContractorCreateNestedOneWithoutFeedbackInput
}

export interface FeedbackUncheckedCreateInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  score: number
  decription?: string | null
  userId?: string | null
  contractorId?: string | null
}

export interface FeedbackUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  score?: IntFieldUpdateOperationsInput
  decription?: NullableStringFieldUpdateOperationsInput | null
  user?: UserUpdateOneWithoutFeedbackInput
  contractor?: ContractorUpdateOneWithoutFeedbackInput
}

export interface FeedbackUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  score?: IntFieldUpdateOperationsInput
  decription?: NullableStringFieldUpdateOperationsInput | null
  userId?: NullableStringFieldUpdateOperationsInput | null
  contractorId?: NullableStringFieldUpdateOperationsInput | null
}

export interface FeedbackCreateManyInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  score: number
  decription?: string | null
  userId?: string | null
  contractorId?: string | null
}

export interface FeedbackUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  score?: IntFieldUpdateOperationsInput
  decription?: NullableStringFieldUpdateOperationsInput | null
}

export interface FeedbackUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  score?: IntFieldUpdateOperationsInput
  decription?: NullableStringFieldUpdateOperationsInput | null
  userId?: NullableStringFieldUpdateOperationsInput | null
  contractorId?: NullableStringFieldUpdateOperationsInput | null
}

export interface ServicesCreateInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  img?: ServicesCreateimgInput
  title?: string | null
  locality?: string | null
  description: string
  cost: number
  isProvide?: boolean
  status?: ServicesStatusEnum
  canCallMe?: boolean
  contractor?: ContractorCreateNestedOneWithoutServicesInput
  customer?: UserCreateNestedOneWithoutServicesInput
  category?: CategoryCreateNestedOneWithoutServicesInput
}

export interface ServicesUncheckedCreateInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  img?: ServicesCreateimgInput
  title?: string | null
  locality?: string | null
  description: string
  cost: number
  isProvide?: boolean
  status?: ServicesStatusEnum
  canCallMe?: boolean
  contractorId?: string | null
  customerid?: string | null
  categoryId?: string | null
}

export interface ServicesUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  img?: ServicesUpdateimgInput
  title?: NullableStringFieldUpdateOperationsInput | null
  locality?: NullableStringFieldUpdateOperationsInput | null
  description?: StringFieldUpdateOperationsInput
  cost?: FloatFieldUpdateOperationsInput
  isProvide?: BoolFieldUpdateOperationsInput
  status?: EnumServicesStatusEnumFieldUpdateOperationsInput
  canCallMe?: BoolFieldUpdateOperationsInput
  contractor?: ContractorUpdateOneWithoutServicesInput
  customer?: UserUpdateOneWithoutServicesInput
  category?: CategoryUpdateOneWithoutServicesInput
}

export interface ServicesUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  img?: ServicesUpdateimgInput
  title?: NullableStringFieldUpdateOperationsInput | null
  locality?: NullableStringFieldUpdateOperationsInput | null
  description?: StringFieldUpdateOperationsInput
  cost?: FloatFieldUpdateOperationsInput
  isProvide?: BoolFieldUpdateOperationsInput
  status?: EnumServicesStatusEnumFieldUpdateOperationsInput
  canCallMe?: BoolFieldUpdateOperationsInput
  contractorId?: NullableStringFieldUpdateOperationsInput | null
  customerid?: NullableStringFieldUpdateOperationsInput | null
  categoryId?: NullableStringFieldUpdateOperationsInput | null
}

export interface ServicesCreateManyInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  img?: ServicesCreateimgInput
  title?: string | null
  locality?: string | null
  description: string
  cost: number
  isProvide?: boolean
  status?: ServicesStatusEnum
  canCallMe?: boolean
  contractorId?: string | null
  customerid?: string | null
  categoryId?: string | null
}

export interface ServicesUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  img?: ServicesUpdateimgInput
  title?: NullableStringFieldUpdateOperationsInput | null
  locality?: NullableStringFieldUpdateOperationsInput | null
  description?: StringFieldUpdateOperationsInput
  cost?: FloatFieldUpdateOperationsInput
  isProvide?: BoolFieldUpdateOperationsInput
  status?: EnumServicesStatusEnumFieldUpdateOperationsInput
  canCallMe?: BoolFieldUpdateOperationsInput
}

export interface ServicesUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  img?: ServicesUpdateimgInput
  title?: NullableStringFieldUpdateOperationsInput | null
  locality?: NullableStringFieldUpdateOperationsInput | null
  description?: StringFieldUpdateOperationsInput
  cost?: FloatFieldUpdateOperationsInput
  isProvide?: BoolFieldUpdateOperationsInput
  status?: EnumServicesStatusEnumFieldUpdateOperationsInput
  canCallMe?: BoolFieldUpdateOperationsInput
  contractorId?: NullableStringFieldUpdateOperationsInput | null
  customerid?: NullableStringFieldUpdateOperationsInput | null
  categoryId?: NullableStringFieldUpdateOperationsInput | null
}

export interface CategoryCreateInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  title: string
  services?: ServicesCreateNestedManyWithoutCategoryInput
}

export interface CategoryUncheckedCreateInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  title: string
  services?: ServicesUncheckedCreateNestedManyWithoutCategoryInput
}

export interface CategoryUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  services?: ServicesUpdateManyWithoutCategoryInput
}

export interface CategoryUncheckedUpdateInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
  services?: ServicesUncheckedUpdateManyWithoutCategoryInput
}

export interface CategoryCreateManyInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  title: string
}

export interface CategoryUpdateManyMutationInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
}

export interface CategoryUncheckedUpdateManyInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
}

export interface StringFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringFilter
}

export interface DateTimeFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeFilter
}

export interface BoolFilter {
  equals?: boolean
  not?: NestedBoolFilter
}

export interface StringNullableFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringNullableFilter | null
}

export interface DateTimeNullableFilter {
  equals?: Date | null
  in?: Date[] | null
  notIn?: Date[] | null
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeNullableFilter | null
}

export interface ContractorRelationFilter {
  is?: ContractorWhereInput | null
  isNot?: ContractorWhereInput | null
}

export interface ServicesListRelationFilter {
  every?: ServicesWhereInput
  some?: ServicesWhereInput
  none?: ServicesWhereInput
}

export interface FeedbackListRelationFilter {
  every?: FeedbackWhereInput
  some?: FeedbackWhereInput
  none?: FeedbackWhereInput
}

export interface ServicesOrderByRelationAggregateInput {
  _count?: SortOrder
}

export interface FeedbackOrderByRelationAggregateInput {
  _count?: SortOrder
}

export interface UserCountOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  isConfirmed?: SortOrder
  phone?: SortOrder
  email?: SortOrder
  code?: SortOrder
  avatar?: SortOrder
  name?: SortOrder
  address?: SortOrder
  locality?: SortOrder
  birthdayDate?: SortOrder
  inContractorMode?: SortOrder
}

export interface UserMaxOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  isConfirmed?: SortOrder
  phone?: SortOrder
  email?: SortOrder
  code?: SortOrder
  avatar?: SortOrder
  name?: SortOrder
  address?: SortOrder
  locality?: SortOrder
  birthdayDate?: SortOrder
  inContractorMode?: SortOrder
}

export interface UserMinOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  isConfirmed?: SortOrder
  phone?: SortOrder
  email?: SortOrder
  code?: SortOrder
  avatar?: SortOrder
  name?: SortOrder
  address?: SortOrder
  locality?: SortOrder
  birthdayDate?: SortOrder
  inContractorMode?: SortOrder
}

export interface StringWithAggregatesFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedStringFilter
  _max?: NestedStringFilter
}

export interface DateTimeWithAggregatesFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedDateTimeFilter
  _max?: NestedDateTimeFilter
}

export interface BoolWithAggregatesFilter {
  equals?: boolean
  not?: NestedBoolWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedBoolFilter
  _max?: NestedBoolFilter
}

export interface StringNullableWithAggregatesFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  mode?: QueryMode
  not?: NestedStringNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _min?: NestedStringNullableFilter
  _max?: NestedStringNullableFilter
}

export interface DateTimeNullableWithAggregatesFilter {
  equals?: Date | null
  in?: Date[] | null
  notIn?: Date[] | null
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _min?: NestedDateTimeNullableFilter
  _max?: NestedDateTimeNullableFilter
}

export interface UserRelationFilter {
  is?: UserWhereInput | null
  isNot?: UserWhereInput | null
}

export interface ContractorCountOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  userId?: SortOrder
  servicesId?: SortOrder
}

export interface ContractorMaxOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  userId?: SortOrder
  servicesId?: SortOrder
}

export interface ContractorMinOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  userId?: SortOrder
  servicesId?: SortOrder
}

export interface IntFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntFilter
}

export interface FeedbackCountOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  score?: SortOrder
  decription?: SortOrder
  userId?: SortOrder
  contractorId?: SortOrder
}

export interface FeedbackAvgOrderByAggregateInput {
  score?: SortOrder
}

export interface FeedbackMaxOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  score?: SortOrder
  decription?: SortOrder
  userId?: SortOrder
  contractorId?: SortOrder
}

export interface FeedbackMinOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  score?: SortOrder
  decription?: SortOrder
  userId?: SortOrder
  contractorId?: SortOrder
}

export interface FeedbackSumOrderByAggregateInput {
  score?: SortOrder
}

export interface IntWithAggregatesFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntWithAggregatesFilter
  _count?: NestedIntFilter
  _avg?: NestedFloatFilter
  _sum?: NestedIntFilter
  _min?: NestedIntFilter
  _max?: NestedIntFilter
}

export interface StringNullableListFilter {
  equals?: string[] | null
  has?: string | null
  hasEvery?: string[]
  hasSome?: string[]
  isEmpty?: boolean
}

export interface FloatFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedFloatFilter
}

export interface EnumServicesStatusEnumFilter {
  equals?: ServicesStatusEnum
  in?: ServicesStatusEnum[]
  notIn?: ServicesStatusEnum[]
  not?: NestedEnumServicesStatusEnumFilter
}

export interface CategoryRelationFilter {
  is?: CategoryWhereInput | null
  isNot?: CategoryWhereInput | null
}

export interface ServicesCountOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  img?: SortOrder
  title?: SortOrder
  locality?: SortOrder
  description?: SortOrder
  cost?: SortOrder
  isProvide?: SortOrder
  status?: SortOrder
  canCallMe?: SortOrder
  contractorId?: SortOrder
  customerid?: SortOrder
  categoryId?: SortOrder
}

export interface ServicesAvgOrderByAggregateInput {
  cost?: SortOrder
}

export interface ServicesMaxOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  title?: SortOrder
  locality?: SortOrder
  description?: SortOrder
  cost?: SortOrder
  isProvide?: SortOrder
  status?: SortOrder
  canCallMe?: SortOrder
  contractorId?: SortOrder
  customerid?: SortOrder
  categoryId?: SortOrder
}

export interface ServicesMinOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  title?: SortOrder
  locality?: SortOrder
  description?: SortOrder
  cost?: SortOrder
  isProvide?: SortOrder
  status?: SortOrder
  canCallMe?: SortOrder
  contractorId?: SortOrder
  customerid?: SortOrder
  categoryId?: SortOrder
}

export interface ServicesSumOrderByAggregateInput {
  cost?: SortOrder
}

export interface FloatWithAggregatesFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedFloatWithAggregatesFilter
  _count?: NestedIntFilter
  _avg?: NestedFloatFilter
  _sum?: NestedFloatFilter
  _min?: NestedFloatFilter
  _max?: NestedFloatFilter
}

export interface EnumServicesStatusEnumWithAggregatesFilter {
  equals?: ServicesStatusEnum
  in?: ServicesStatusEnum[]
  notIn?: ServicesStatusEnum[]
  not?: NestedEnumServicesStatusEnumWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedEnumServicesStatusEnumFilter
  _max?: NestedEnumServicesStatusEnumFilter
}

export interface CategoryCountOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  title?: SortOrder
}

export interface CategoryMaxOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  title?: SortOrder
}

export interface CategoryMinOrderByAggregateInput {
  id?: SortOrder
  createdAt?: SortOrder
  updatedAt?: SortOrder
  title?: SortOrder
}

export interface ContractorCreateNestedOneWithoutUserInput {
  create?: ContractorUncheckedCreateWithoutUserInput
  connectOrCreate?: ContractorCreateOrConnectWithoutUserInput
  connect?: ContractorWhereUniqueInput
}

export interface ServicesCreateNestedManyWithoutCustomerInput {
  create?: ServicesCreateWithoutCustomerInput[]
  connectOrCreate?: ServicesCreateOrConnectWithoutCustomerInput[]
  createMany?: ServicesCreateManyCustomerInputEnvelope
  connect?: ServicesWhereUniqueInput[]
}

export interface FeedbackCreateNestedManyWithoutUserInput {
  create?: FeedbackCreateWithoutUserInput[]
  connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput[]
  createMany?: FeedbackCreateManyUserInputEnvelope
  connect?: FeedbackWhereUniqueInput[]
}

export interface ContractorUncheckedCreateNestedOneWithoutUserInput {
  create?: ContractorUncheckedCreateWithoutUserInput
  connectOrCreate?: ContractorCreateOrConnectWithoutUserInput
  connect?: ContractorWhereUniqueInput
}

export interface ServicesUncheckedCreateNestedManyWithoutCustomerInput {
  create?: ServicesCreateWithoutCustomerInput[]
  connectOrCreate?: ServicesCreateOrConnectWithoutCustomerInput[]
  createMany?: ServicesCreateManyCustomerInputEnvelope
  connect?: ServicesWhereUniqueInput[]
}

export interface FeedbackUncheckedCreateNestedManyWithoutUserInput {
  create?: FeedbackCreateWithoutUserInput[]
  connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput[]
  createMany?: FeedbackCreateManyUserInputEnvelope
  connect?: FeedbackWhereUniqueInput[]
}

export interface StringFieldUpdateOperationsInput {
  set?: string
}

export interface DateTimeFieldUpdateOperationsInput {
  set?: Date
}

export interface BoolFieldUpdateOperationsInput {
  set?: boolean
}

export interface NullableStringFieldUpdateOperationsInput {
  set?: string | null
}

export interface NullableDateTimeFieldUpdateOperationsInput {
  set?: Date | null
}

export interface ContractorUpdateOneWithoutUserInput {
  create?: ContractorUncheckedCreateWithoutUserInput
  connectOrCreate?: ContractorCreateOrConnectWithoutUserInput
  upsert?: ContractorUpsertWithoutUserInput
  disconnect?: boolean
  delete?: boolean
  connect?: ContractorWhereUniqueInput
  update?: ContractorUncheckedUpdateWithoutUserInput
}

export interface ServicesUpdateManyWithoutCustomerInput {
  create?: ServicesCreateWithoutCustomerInput[]
  connectOrCreate?: ServicesCreateOrConnectWithoutCustomerInput[]
  upsert?: ServicesUpsertWithWhereUniqueWithoutCustomerInput[]
  createMany?: ServicesCreateManyCustomerInputEnvelope
  set?: ServicesWhereUniqueInput[]
  disconnect?: ServicesWhereUniqueInput[]
  delete?: ServicesWhereUniqueInput[]
  connect?: ServicesWhereUniqueInput[]
  update?: ServicesUpdateWithWhereUniqueWithoutCustomerInput[]
  updateMany?: ServicesUpdateManyWithWhereWithoutCustomerInput[]
  deleteMany?: ServicesScalarWhereInput[]
}

export interface FeedbackUpdateManyWithoutUserInput {
  create?: FeedbackCreateWithoutUserInput[]
  connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput[]
  upsert?: FeedbackUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: FeedbackCreateManyUserInputEnvelope
  set?: FeedbackWhereUniqueInput[]
  disconnect?: FeedbackWhereUniqueInput[]
  delete?: FeedbackWhereUniqueInput[]
  connect?: FeedbackWhereUniqueInput[]
  update?: FeedbackUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: FeedbackUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: FeedbackScalarWhereInput[]
}

export interface ContractorUncheckedUpdateOneWithoutUserInput {
  create?: ContractorUncheckedCreateWithoutUserInput
  connectOrCreate?: ContractorCreateOrConnectWithoutUserInput
  upsert?: ContractorUpsertWithoutUserInput
  disconnect?: boolean
  delete?: boolean
  connect?: ContractorWhereUniqueInput
  update?: ContractorUncheckedUpdateWithoutUserInput
}

export interface ServicesUncheckedUpdateManyWithoutCustomerInput {
  create?: ServicesCreateWithoutCustomerInput[]
  connectOrCreate?: ServicesCreateOrConnectWithoutCustomerInput[]
  upsert?: ServicesUpsertWithWhereUniqueWithoutCustomerInput[]
  createMany?: ServicesCreateManyCustomerInputEnvelope
  set?: ServicesWhereUniqueInput[]
  disconnect?: ServicesWhereUniqueInput[]
  delete?: ServicesWhereUniqueInput[]
  connect?: ServicesWhereUniqueInput[]
  update?: ServicesUpdateWithWhereUniqueWithoutCustomerInput[]
  updateMany?: ServicesUpdateManyWithWhereWithoutCustomerInput[]
  deleteMany?: ServicesScalarWhereInput[]
}

export interface FeedbackUncheckedUpdateManyWithoutUserInput {
  create?: FeedbackCreateWithoutUserInput[]
  connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput[]
  upsert?: FeedbackUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: FeedbackCreateManyUserInputEnvelope
  set?: FeedbackWhereUniqueInput[]
  disconnect?: FeedbackWhereUniqueInput[]
  delete?: FeedbackWhereUniqueInput[]
  connect?: FeedbackWhereUniqueInput[]
  update?: FeedbackUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: FeedbackUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: FeedbackScalarWhereInput[]
}

export interface UserCreateNestedOneWithoutContractorProfileInput {
  create?: UserUncheckedCreateWithoutContractorProfileInput
  connectOrCreate?: UserCreateOrConnectWithoutContractorProfileInput
  connect?: UserWhereUniqueInput
}

export interface ServicesCreateNestedManyWithoutContractorInput {
  create?: ServicesCreateWithoutContractorInput[]
  connectOrCreate?: ServicesCreateOrConnectWithoutContractorInput[]
  createMany?: ServicesCreateManyContractorInputEnvelope
  connect?: ServicesWhereUniqueInput[]
}

export interface FeedbackCreateNestedManyWithoutContractorInput {
  create?: FeedbackCreateWithoutContractorInput[]
  connectOrCreate?: FeedbackCreateOrConnectWithoutContractorInput[]
  createMany?: FeedbackCreateManyContractorInputEnvelope
  connect?: FeedbackWhereUniqueInput[]
}

export interface ServicesUncheckedCreateNestedManyWithoutContractorInput {
  create?: ServicesCreateWithoutContractorInput[]
  connectOrCreate?: ServicesCreateOrConnectWithoutContractorInput[]
  createMany?: ServicesCreateManyContractorInputEnvelope
  connect?: ServicesWhereUniqueInput[]
}

export interface FeedbackUncheckedCreateNestedManyWithoutContractorInput {
  create?: FeedbackCreateWithoutContractorInput[]
  connectOrCreate?: FeedbackCreateOrConnectWithoutContractorInput[]
  createMany?: FeedbackCreateManyContractorInputEnvelope
  connect?: FeedbackWhereUniqueInput[]
}

export interface UserUpdateOneWithoutContractorProfileInput {
  create?: UserUncheckedCreateWithoutContractorProfileInput
  connectOrCreate?: UserCreateOrConnectWithoutContractorProfileInput
  upsert?: UserUpsertWithoutContractorProfileInput
  disconnect?: boolean
  delete?: boolean
  connect?: UserWhereUniqueInput
  update?: UserUncheckedUpdateWithoutContractorProfileInput
}

export interface ServicesUpdateManyWithoutContractorInput {
  create?: ServicesCreateWithoutContractorInput[]
  connectOrCreate?: ServicesCreateOrConnectWithoutContractorInput[]
  upsert?: ServicesUpsertWithWhereUniqueWithoutContractorInput[]
  createMany?: ServicesCreateManyContractorInputEnvelope
  set?: ServicesWhereUniqueInput[]
  disconnect?: ServicesWhereUniqueInput[]
  delete?: ServicesWhereUniqueInput[]
  connect?: ServicesWhereUniqueInput[]
  update?: ServicesUpdateWithWhereUniqueWithoutContractorInput[]
  updateMany?: ServicesUpdateManyWithWhereWithoutContractorInput[]
  deleteMany?: ServicesScalarWhereInput[]
}

export interface FeedbackUpdateManyWithoutContractorInput {
  create?: FeedbackCreateWithoutContractorInput[]
  connectOrCreate?: FeedbackCreateOrConnectWithoutContractorInput[]
  upsert?: FeedbackUpsertWithWhereUniqueWithoutContractorInput[]
  createMany?: FeedbackCreateManyContractorInputEnvelope
  set?: FeedbackWhereUniqueInput[]
  disconnect?: FeedbackWhereUniqueInput[]
  delete?: FeedbackWhereUniqueInput[]
  connect?: FeedbackWhereUniqueInput[]
  update?: FeedbackUpdateWithWhereUniqueWithoutContractorInput[]
  updateMany?: FeedbackUpdateManyWithWhereWithoutContractorInput[]
  deleteMany?: FeedbackScalarWhereInput[]
}

export interface ServicesUncheckedUpdateManyWithoutContractorInput {
  create?: ServicesCreateWithoutContractorInput[]
  connectOrCreate?: ServicesCreateOrConnectWithoutContractorInput[]
  upsert?: ServicesUpsertWithWhereUniqueWithoutContractorInput[]
  createMany?: ServicesCreateManyContractorInputEnvelope
  set?: ServicesWhereUniqueInput[]
  disconnect?: ServicesWhereUniqueInput[]
  delete?: ServicesWhereUniqueInput[]
  connect?: ServicesWhereUniqueInput[]
  update?: ServicesUpdateWithWhereUniqueWithoutContractorInput[]
  updateMany?: ServicesUpdateManyWithWhereWithoutContractorInput[]
  deleteMany?: ServicesScalarWhereInput[]
}

export interface FeedbackUncheckedUpdateManyWithoutContractorInput {
  create?: FeedbackCreateWithoutContractorInput[]
  connectOrCreate?: FeedbackCreateOrConnectWithoutContractorInput[]
  upsert?: FeedbackUpsertWithWhereUniqueWithoutContractorInput[]
  createMany?: FeedbackCreateManyContractorInputEnvelope
  set?: FeedbackWhereUniqueInput[]
  disconnect?: FeedbackWhereUniqueInput[]
  delete?: FeedbackWhereUniqueInput[]
  connect?: FeedbackWhereUniqueInput[]
  update?: FeedbackUpdateWithWhereUniqueWithoutContractorInput[]
  updateMany?: FeedbackUpdateManyWithWhereWithoutContractorInput[]
  deleteMany?: FeedbackScalarWhereInput[]
}

export interface UserCreateNestedOneWithoutFeedbackInput {
  create?: UserUncheckedCreateWithoutFeedbackInput
  connectOrCreate?: UserCreateOrConnectWithoutFeedbackInput
  connect?: UserWhereUniqueInput
}

export interface ContractorCreateNestedOneWithoutFeedbackInput {
  create?: ContractorUncheckedCreateWithoutFeedbackInput
  connectOrCreate?: ContractorCreateOrConnectWithoutFeedbackInput
  connect?: ContractorWhereUniqueInput
}

export interface IntFieldUpdateOperationsInput {
  set?: number
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}

export interface UserUpdateOneWithoutFeedbackInput {
  create?: UserUncheckedCreateWithoutFeedbackInput
  connectOrCreate?: UserCreateOrConnectWithoutFeedbackInput
  upsert?: UserUpsertWithoutFeedbackInput
  disconnect?: boolean
  delete?: boolean
  connect?: UserWhereUniqueInput
  update?: UserUncheckedUpdateWithoutFeedbackInput
}

export interface ContractorUpdateOneWithoutFeedbackInput {
  create?: ContractorUncheckedCreateWithoutFeedbackInput
  connectOrCreate?: ContractorCreateOrConnectWithoutFeedbackInput
  upsert?: ContractorUpsertWithoutFeedbackInput
  disconnect?: boolean
  delete?: boolean
  connect?: ContractorWhereUniqueInput
  update?: ContractorUncheckedUpdateWithoutFeedbackInput
}

export interface ServicesCreateimgInput {
  set: string[]
}

export interface ContractorCreateNestedOneWithoutServicesInput {
  create?: ContractorUncheckedCreateWithoutServicesInput
  connectOrCreate?: ContractorCreateOrConnectWithoutServicesInput
  connect?: ContractorWhereUniqueInput
}

export interface UserCreateNestedOneWithoutServicesInput {
  create?: UserUncheckedCreateWithoutServicesInput
  connectOrCreate?: UserCreateOrConnectWithoutServicesInput
  connect?: UserWhereUniqueInput
}

export interface CategoryCreateNestedOneWithoutServicesInput {
  create?: CategoryUncheckedCreateWithoutServicesInput
  connectOrCreate?: CategoryCreateOrConnectWithoutServicesInput
  connect?: CategoryWhereUniqueInput
}

export interface ServicesUpdateimgInput {
  set?: string[]
  push?: string
}

export interface FloatFieldUpdateOperationsInput {
  set?: number
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}

export interface EnumServicesStatusEnumFieldUpdateOperationsInput {
  set?: ServicesStatusEnum
}

export interface ContractorUpdateOneWithoutServicesInput {
  create?: ContractorUncheckedCreateWithoutServicesInput
  connectOrCreate?: ContractorCreateOrConnectWithoutServicesInput
  upsert?: ContractorUpsertWithoutServicesInput
  disconnect?: boolean
  delete?: boolean
  connect?: ContractorWhereUniqueInput
  update?: ContractorUncheckedUpdateWithoutServicesInput
}

export interface UserUpdateOneWithoutServicesInput {
  create?: UserUncheckedCreateWithoutServicesInput
  connectOrCreate?: UserCreateOrConnectWithoutServicesInput
  upsert?: UserUpsertWithoutServicesInput
  disconnect?: boolean
  delete?: boolean
  connect?: UserWhereUniqueInput
  update?: UserUncheckedUpdateWithoutServicesInput
}

export interface CategoryUpdateOneWithoutServicesInput {
  create?: CategoryUncheckedCreateWithoutServicesInput
  connectOrCreate?: CategoryCreateOrConnectWithoutServicesInput
  upsert?: CategoryUpsertWithoutServicesInput
  disconnect?: boolean
  delete?: boolean
  connect?: CategoryWhereUniqueInput
  update?: CategoryUncheckedUpdateWithoutServicesInput
}

export interface ServicesCreateNestedManyWithoutCategoryInput {
  create?: ServicesCreateWithoutCategoryInput[]
  connectOrCreate?: ServicesCreateOrConnectWithoutCategoryInput[]
  createMany?: ServicesCreateManyCategoryInputEnvelope
  connect?: ServicesWhereUniqueInput[]
}

export interface ServicesUncheckedCreateNestedManyWithoutCategoryInput {
  create?: ServicesCreateWithoutCategoryInput[]
  connectOrCreate?: ServicesCreateOrConnectWithoutCategoryInput[]
  createMany?: ServicesCreateManyCategoryInputEnvelope
  connect?: ServicesWhereUniqueInput[]
}

export interface ServicesUpdateManyWithoutCategoryInput {
  create?: ServicesCreateWithoutCategoryInput[]
  connectOrCreate?: ServicesCreateOrConnectWithoutCategoryInput[]
  upsert?: ServicesUpsertWithWhereUniqueWithoutCategoryInput[]
  createMany?: ServicesCreateManyCategoryInputEnvelope
  set?: ServicesWhereUniqueInput[]
  disconnect?: ServicesWhereUniqueInput[]
  delete?: ServicesWhereUniqueInput[]
  connect?: ServicesWhereUniqueInput[]
  update?: ServicesUpdateWithWhereUniqueWithoutCategoryInput[]
  updateMany?: ServicesUpdateManyWithWhereWithoutCategoryInput[]
  deleteMany?: ServicesScalarWhereInput[]
}

export interface ServicesUncheckedUpdateManyWithoutCategoryInput {
  create?: ServicesCreateWithoutCategoryInput[]
  connectOrCreate?: ServicesCreateOrConnectWithoutCategoryInput[]
  upsert?: ServicesUpsertWithWhereUniqueWithoutCategoryInput[]
  createMany?: ServicesCreateManyCategoryInputEnvelope
  set?: ServicesWhereUniqueInput[]
  disconnect?: ServicesWhereUniqueInput[]
  delete?: ServicesWhereUniqueInput[]
  connect?: ServicesWhereUniqueInput[]
  update?: ServicesUpdateWithWhereUniqueWithoutCategoryInput[]
  updateMany?: ServicesUpdateManyWithWhereWithoutCategoryInput[]
  deleteMany?: ServicesScalarWhereInput[]
}

export interface NestedStringFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringFilter
}

export interface NestedDateTimeFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeFilter
}

export interface NestedBoolFilter {
  equals?: boolean
  not?: NestedBoolFilter
}

export interface NestedStringNullableFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringNullableFilter | null
}

export interface NestedDateTimeNullableFilter {
  equals?: Date | null
  in?: Date[] | null
  notIn?: Date[] | null
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeNullableFilter | null
}

export interface NestedStringWithAggregatesFilter {
  equals?: string
  in?: string[]
  notIn?: string[]
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedStringFilter
  _max?: NestedStringFilter
}

export interface NestedIntFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntFilter
}

export interface NestedDateTimeWithAggregatesFilter {
  equals?: Date
  in?: Date[]
  notIn?: Date[]
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedDateTimeFilter
  _max?: NestedDateTimeFilter
}

export interface NestedBoolWithAggregatesFilter {
  equals?: boolean
  not?: NestedBoolWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedBoolFilter
  _max?: NestedBoolFilter
}

export interface NestedStringNullableWithAggregatesFilter {
  equals?: string | null
  in?: string[] | null
  notIn?: string[] | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: NestedStringNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _min?: NestedStringNullableFilter
  _max?: NestedStringNullableFilter
}

export interface NestedIntNullableFilter {
  equals?: number | null
  in?: number[] | null
  notIn?: number[] | null
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntNullableFilter | null
}

export interface NestedDateTimeNullableWithAggregatesFilter {
  equals?: Date | null
  in?: Date[] | null
  notIn?: Date[] | null
  lt?: Date
  lte?: Date
  gt?: Date
  gte?: Date
  not?: NestedDateTimeNullableWithAggregatesFilter | null
  _count?: NestedIntNullableFilter
  _min?: NestedDateTimeNullableFilter
  _max?: NestedDateTimeNullableFilter
}

export interface NestedIntWithAggregatesFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedIntWithAggregatesFilter
  _count?: NestedIntFilter
  _avg?: NestedFloatFilter
  _sum?: NestedIntFilter
  _min?: NestedIntFilter
  _max?: NestedIntFilter
}

export interface NestedFloatFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedFloatFilter
}

export interface NestedEnumServicesStatusEnumFilter {
  equals?: ServicesStatusEnum
  in?: ServicesStatusEnum[]
  notIn?: ServicesStatusEnum[]
  not?: NestedEnumServicesStatusEnumFilter
}

export interface NestedFloatWithAggregatesFilter {
  equals?: number
  in?: number[]
  notIn?: number[]
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: NestedFloatWithAggregatesFilter
  _count?: NestedIntFilter
  _avg?: NestedFloatFilter
  _sum?: NestedFloatFilter
  _min?: NestedFloatFilter
  _max?: NestedFloatFilter
}

export interface NestedEnumServicesStatusEnumWithAggregatesFilter {
  equals?: ServicesStatusEnum
  in?: ServicesStatusEnum[]
  notIn?: ServicesStatusEnum[]
  not?: NestedEnumServicesStatusEnumWithAggregatesFilter
  _count?: NestedIntFilter
  _min?: NestedEnumServicesStatusEnumFilter
  _max?: NestedEnumServicesStatusEnumFilter
}

export interface ContractorCreateWithoutUserInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  services?: ServicesCreateNestedManyWithoutContractorInput
  servicesId?: string | null
  feedback?: FeedbackCreateNestedManyWithoutContractorInput
}

export interface ContractorUncheckedCreateWithoutUserInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  services?: ServicesUncheckedCreateNestedManyWithoutContractorInput
  servicesId?: string | null
  feedback?: FeedbackUncheckedCreateNestedManyWithoutContractorInput
}

export interface ContractorCreateOrConnectWithoutUserInput {
  where: ContractorWhereUniqueInput
  create: ContractorUncheckedCreateWithoutUserInput
}

export interface ServicesCreateWithoutCustomerInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  img?: ServicesCreateimgInput
  title?: string | null
  locality?: string | null
  description: string
  cost: number
  isProvide?: boolean
  status?: ServicesStatusEnum
  canCallMe?: boolean
  contractor?: ContractorCreateNestedOneWithoutServicesInput
  category?: CategoryCreateNestedOneWithoutServicesInput
}

export interface ServicesUncheckedCreateWithoutCustomerInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  img?: ServicesCreateimgInput
  title?: string | null
  locality?: string | null
  description: string
  cost: number
  isProvide?: boolean
  status?: ServicesStatusEnum
  canCallMe?: boolean
  contractorId?: string | null
  categoryId?: string | null
}

export interface ServicesCreateOrConnectWithoutCustomerInput {
  where: ServicesWhereUniqueInput
  create: ServicesUncheckedCreateWithoutCustomerInput
}

export interface ServicesCreateManyCustomerInputEnvelope {
  data: ServicesCreateManyCustomerInput[]
  skipDuplicates?: boolean
}

export interface FeedbackCreateWithoutUserInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  score: number
  decription?: string | null
  contractor?: ContractorCreateNestedOneWithoutFeedbackInput
}

export interface FeedbackUncheckedCreateWithoutUserInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  score: number
  decription?: string | null
  contractorId?: string | null
}

export interface FeedbackCreateOrConnectWithoutUserInput {
  where: FeedbackWhereUniqueInput
  create: FeedbackUncheckedCreateWithoutUserInput
}

export interface FeedbackCreateManyUserInputEnvelope {
  data: FeedbackCreateManyUserInput[]
  skipDuplicates?: boolean
}

export interface ContractorUpsertWithoutUserInput {
  update: ContractorUncheckedUpdateWithoutUserInput
  create: ContractorUncheckedCreateWithoutUserInput
}

export interface ContractorUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  services?: ServicesUpdateManyWithoutContractorInput
  servicesId?: NullableStringFieldUpdateOperationsInput | null
  feedback?: FeedbackUpdateManyWithoutContractorInput
}

export interface ContractorUncheckedUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  services?: ServicesUncheckedUpdateManyWithoutContractorInput
  servicesId?: NullableStringFieldUpdateOperationsInput | null
  feedback?: FeedbackUncheckedUpdateManyWithoutContractorInput
}

export interface ServicesUpsertWithWhereUniqueWithoutCustomerInput {
  where: ServicesWhereUniqueInput
  update: ServicesUncheckedUpdateWithoutCustomerInput
  create: ServicesUncheckedCreateWithoutCustomerInput
}

export interface ServicesUpdateWithWhereUniqueWithoutCustomerInput {
  where: ServicesWhereUniqueInput
  data: ServicesUncheckedUpdateWithoutCustomerInput
}

export interface ServicesUpdateManyWithWhereWithoutCustomerInput {
  where: ServicesScalarWhereInput
  data: ServicesUncheckedUpdateManyWithoutServicesInput
}

export interface ServicesScalarWhereInput {
  AND?: ServicesScalarWhereInput[]
  OR?: ServicesScalarWhereInput[]
  NOT?: ServicesScalarWhereInput[]
  id?: StringFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  img?: StringNullableListFilter
  title?: StringNullableFilter | null
  locality?: StringNullableFilter | null
  description?: StringFilter
  cost?: FloatFilter
  isProvide?: BoolFilter
  status?: EnumServicesStatusEnumFilter
  canCallMe?: BoolFilter
  contractorId?: StringNullableFilter | null
  customerid?: StringNullableFilter | null
  categoryId?: StringNullableFilter | null
}

export interface FeedbackUpsertWithWhereUniqueWithoutUserInput {
  where: FeedbackWhereUniqueInput
  update: FeedbackUncheckedUpdateWithoutUserInput
  create: FeedbackUncheckedCreateWithoutUserInput
}

export interface FeedbackUpdateWithWhereUniqueWithoutUserInput {
  where: FeedbackWhereUniqueInput
  data: FeedbackUncheckedUpdateWithoutUserInput
}

export interface FeedbackUpdateManyWithWhereWithoutUserInput {
  where: FeedbackScalarWhereInput
  data: FeedbackUncheckedUpdateManyWithoutFeedbackInput
}

export interface FeedbackScalarWhereInput {
  AND?: FeedbackScalarWhereInput[]
  OR?: FeedbackScalarWhereInput[]
  NOT?: FeedbackScalarWhereInput[]
  id?: StringFilter
  createdAt?: DateTimeFilter
  updatedAt?: DateTimeFilter
  score?: IntFilter
  decription?: StringNullableFilter | null
  userId?: StringNullableFilter | null
  contractorId?: StringNullableFilter | null
}

export interface UserCreateWithoutContractorProfileInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  isConfirmed?: boolean
  phone?: string | null
  email?: string | null
  code?: string | null
  avatar?: string | null
  name?: string | null
  address?: string | null
  locality?: string | null
  birthdayDate?: Date | null
  inContractorMode?: boolean
  services?: ServicesCreateNestedManyWithoutCustomerInput
  feedback?: FeedbackCreateNestedManyWithoutUserInput
}

export interface UserUncheckedCreateWithoutContractorProfileInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  isConfirmed?: boolean
  phone?: string | null
  email?: string | null
  code?: string | null
  avatar?: string | null
  name?: string | null
  address?: string | null
  locality?: string | null
  birthdayDate?: Date | null
  inContractorMode?: boolean
  services?: ServicesUncheckedCreateNestedManyWithoutCustomerInput
  feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput
}

export interface UserCreateOrConnectWithoutContractorProfileInput {
  where: UserWhereUniqueInput
  create: UserUncheckedCreateWithoutContractorProfileInput
}

export interface ServicesCreateWithoutContractorInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  img?: ServicesCreateimgInput
  title?: string | null
  locality?: string | null
  description: string
  cost: number
  isProvide?: boolean
  status?: ServicesStatusEnum
  canCallMe?: boolean
  customer?: UserCreateNestedOneWithoutServicesInput
  category?: CategoryCreateNestedOneWithoutServicesInput
}

export interface ServicesUncheckedCreateWithoutContractorInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  img?: ServicesCreateimgInput
  title?: string | null
  locality?: string | null
  description: string
  cost: number
  isProvide?: boolean
  status?: ServicesStatusEnum
  canCallMe?: boolean
  customerid?: string | null
  categoryId?: string | null
}

export interface ServicesCreateOrConnectWithoutContractorInput {
  where: ServicesWhereUniqueInput
  create: ServicesUncheckedCreateWithoutContractorInput
}

export interface ServicesCreateManyContractorInputEnvelope {
  data: ServicesCreateManyContractorInput[]
  skipDuplicates?: boolean
}

export interface FeedbackCreateWithoutContractorInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  score: number
  decription?: string | null
  user?: UserCreateNestedOneWithoutFeedbackInput
}

export interface FeedbackUncheckedCreateWithoutContractorInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  score: number
  decription?: string | null
  userId?: string | null
}

export interface FeedbackCreateOrConnectWithoutContractorInput {
  where: FeedbackWhereUniqueInput
  create: FeedbackUncheckedCreateWithoutContractorInput
}

export interface FeedbackCreateManyContractorInputEnvelope {
  data: FeedbackCreateManyContractorInput[]
  skipDuplicates?: boolean
}

export interface UserUpsertWithoutContractorProfileInput {
  update: UserUncheckedUpdateWithoutContractorProfileInput
  create: UserUncheckedCreateWithoutContractorProfileInput
}

export interface UserUpdateWithoutContractorProfileInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  isConfirmed?: BoolFieldUpdateOperationsInput
  phone?: NullableStringFieldUpdateOperationsInput | null
  email?: NullableStringFieldUpdateOperationsInput | null
  code?: NullableStringFieldUpdateOperationsInput | null
  avatar?: NullableStringFieldUpdateOperationsInput | null
  name?: NullableStringFieldUpdateOperationsInput | null
  address?: NullableStringFieldUpdateOperationsInput | null
  locality?: NullableStringFieldUpdateOperationsInput | null
  birthdayDate?: NullableDateTimeFieldUpdateOperationsInput | null
  inContractorMode?: BoolFieldUpdateOperationsInput
  services?: ServicesUpdateManyWithoutCustomerInput
  feedback?: FeedbackUpdateManyWithoutUserInput
}

export interface UserUncheckedUpdateWithoutContractorProfileInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  isConfirmed?: BoolFieldUpdateOperationsInput
  phone?: NullableStringFieldUpdateOperationsInput | null
  email?: NullableStringFieldUpdateOperationsInput | null
  code?: NullableStringFieldUpdateOperationsInput | null
  avatar?: NullableStringFieldUpdateOperationsInput | null
  name?: NullableStringFieldUpdateOperationsInput | null
  address?: NullableStringFieldUpdateOperationsInput | null
  locality?: NullableStringFieldUpdateOperationsInput | null
  birthdayDate?: NullableDateTimeFieldUpdateOperationsInput | null
  inContractorMode?: BoolFieldUpdateOperationsInput
  services?: ServicesUncheckedUpdateManyWithoutCustomerInput
  feedback?: FeedbackUncheckedUpdateManyWithoutUserInput
}

export interface ServicesUpsertWithWhereUniqueWithoutContractorInput {
  where: ServicesWhereUniqueInput
  update: ServicesUncheckedUpdateWithoutContractorInput
  create: ServicesUncheckedCreateWithoutContractorInput
}

export interface ServicesUpdateWithWhereUniqueWithoutContractorInput {
  where: ServicesWhereUniqueInput
  data: ServicesUncheckedUpdateWithoutContractorInput
}

export interface ServicesUpdateManyWithWhereWithoutContractorInput {
  where: ServicesScalarWhereInput
  data: ServicesUncheckedUpdateManyWithoutServicesInput
}

export interface FeedbackUpsertWithWhereUniqueWithoutContractorInput {
  where: FeedbackWhereUniqueInput
  update: FeedbackUncheckedUpdateWithoutContractorInput
  create: FeedbackUncheckedCreateWithoutContractorInput
}

export interface FeedbackUpdateWithWhereUniqueWithoutContractorInput {
  where: FeedbackWhereUniqueInput
  data: FeedbackUncheckedUpdateWithoutContractorInput
}

export interface FeedbackUpdateManyWithWhereWithoutContractorInput {
  where: FeedbackScalarWhereInput
  data: FeedbackUncheckedUpdateManyWithoutFeedbackInput
}

export interface UserCreateWithoutFeedbackInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  isConfirmed?: boolean
  phone?: string | null
  email?: string | null
  code?: string | null
  avatar?: string | null
  name?: string | null
  address?: string | null
  locality?: string | null
  birthdayDate?: Date | null
  inContractorMode?: boolean
  contractorProfile?: ContractorCreateNestedOneWithoutUserInput
  services?: ServicesCreateNestedManyWithoutCustomerInput
}

export interface UserUncheckedCreateWithoutFeedbackInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  isConfirmed?: boolean
  phone?: string | null
  email?: string | null
  code?: string | null
  avatar?: string | null
  name?: string | null
  address?: string | null
  locality?: string | null
  birthdayDate?: Date | null
  inContractorMode?: boolean
  contractorProfile?: ContractorUncheckedCreateNestedOneWithoutUserInput
  services?: ServicesUncheckedCreateNestedManyWithoutCustomerInput
}

export interface UserCreateOrConnectWithoutFeedbackInput {
  where: UserWhereUniqueInput
  create: UserUncheckedCreateWithoutFeedbackInput
}

export interface ContractorCreateWithoutFeedbackInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  user?: UserCreateNestedOneWithoutContractorProfileInput
  services?: ServicesCreateNestedManyWithoutContractorInput
  servicesId?: string | null
}

export interface ContractorUncheckedCreateWithoutFeedbackInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  userId?: string | null
  services?: ServicesUncheckedCreateNestedManyWithoutContractorInput
  servicesId?: string | null
}

export interface ContractorCreateOrConnectWithoutFeedbackInput {
  where: ContractorWhereUniqueInput
  create: ContractorUncheckedCreateWithoutFeedbackInput
}

export interface UserUpsertWithoutFeedbackInput {
  update: UserUncheckedUpdateWithoutFeedbackInput
  create: UserUncheckedCreateWithoutFeedbackInput
}

export interface UserUpdateWithoutFeedbackInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  isConfirmed?: BoolFieldUpdateOperationsInput
  phone?: NullableStringFieldUpdateOperationsInput | null
  email?: NullableStringFieldUpdateOperationsInput | null
  code?: NullableStringFieldUpdateOperationsInput | null
  avatar?: NullableStringFieldUpdateOperationsInput | null
  name?: NullableStringFieldUpdateOperationsInput | null
  address?: NullableStringFieldUpdateOperationsInput | null
  locality?: NullableStringFieldUpdateOperationsInput | null
  birthdayDate?: NullableDateTimeFieldUpdateOperationsInput | null
  inContractorMode?: BoolFieldUpdateOperationsInput
  contractorProfile?: ContractorUpdateOneWithoutUserInput
  services?: ServicesUpdateManyWithoutCustomerInput
}

export interface UserUncheckedUpdateWithoutFeedbackInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  isConfirmed?: BoolFieldUpdateOperationsInput
  phone?: NullableStringFieldUpdateOperationsInput | null
  email?: NullableStringFieldUpdateOperationsInput | null
  code?: NullableStringFieldUpdateOperationsInput | null
  avatar?: NullableStringFieldUpdateOperationsInput | null
  name?: NullableStringFieldUpdateOperationsInput | null
  address?: NullableStringFieldUpdateOperationsInput | null
  locality?: NullableStringFieldUpdateOperationsInput | null
  birthdayDate?: NullableDateTimeFieldUpdateOperationsInput | null
  inContractorMode?: BoolFieldUpdateOperationsInput
  contractorProfile?: ContractorUncheckedUpdateOneWithoutUserInput
  services?: ServicesUncheckedUpdateManyWithoutCustomerInput
}

export interface ContractorUpsertWithoutFeedbackInput {
  update: ContractorUncheckedUpdateWithoutFeedbackInput
  create: ContractorUncheckedCreateWithoutFeedbackInput
}

export interface ContractorUpdateWithoutFeedbackInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  user?: UserUpdateOneWithoutContractorProfileInput
  services?: ServicesUpdateManyWithoutContractorInput
  servicesId?: NullableStringFieldUpdateOperationsInput | null
}

export interface ContractorUncheckedUpdateWithoutFeedbackInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  userId?: NullableStringFieldUpdateOperationsInput | null
  services?: ServicesUncheckedUpdateManyWithoutContractorInput
  servicesId?: NullableStringFieldUpdateOperationsInput | null
}

export interface ContractorCreateWithoutServicesInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  user?: UserCreateNestedOneWithoutContractorProfileInput
  servicesId?: string | null
  feedback?: FeedbackCreateNestedManyWithoutContractorInput
}

export interface ContractorUncheckedCreateWithoutServicesInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  userId?: string | null
  servicesId?: string | null
  feedback?: FeedbackUncheckedCreateNestedManyWithoutContractorInput
}

export interface ContractorCreateOrConnectWithoutServicesInput {
  where: ContractorWhereUniqueInput
  create: ContractorUncheckedCreateWithoutServicesInput
}

export interface UserCreateWithoutServicesInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  isConfirmed?: boolean
  phone?: string | null
  email?: string | null
  code?: string | null
  avatar?: string | null
  name?: string | null
  address?: string | null
  locality?: string | null
  birthdayDate?: Date | null
  inContractorMode?: boolean
  contractorProfile?: ContractorCreateNestedOneWithoutUserInput
  feedback?: FeedbackCreateNestedManyWithoutUserInput
}

export interface UserUncheckedCreateWithoutServicesInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  isConfirmed?: boolean
  phone?: string | null
  email?: string | null
  code?: string | null
  avatar?: string | null
  name?: string | null
  address?: string | null
  locality?: string | null
  birthdayDate?: Date | null
  inContractorMode?: boolean
  contractorProfile?: ContractorUncheckedCreateNestedOneWithoutUserInput
  feedback?: FeedbackUncheckedCreateNestedManyWithoutUserInput
}

export interface UserCreateOrConnectWithoutServicesInput {
  where: UserWhereUniqueInput
  create: UserUncheckedCreateWithoutServicesInput
}

export interface CategoryCreateWithoutServicesInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  title: string
}

export interface CategoryUncheckedCreateWithoutServicesInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  title: string
}

export interface CategoryCreateOrConnectWithoutServicesInput {
  where: CategoryWhereUniqueInput
  create: CategoryUncheckedCreateWithoutServicesInput
}

export interface ContractorUpsertWithoutServicesInput {
  update: ContractorUncheckedUpdateWithoutServicesInput
  create: ContractorUncheckedCreateWithoutServicesInput
}

export interface ContractorUpdateWithoutServicesInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  user?: UserUpdateOneWithoutContractorProfileInput
  servicesId?: NullableStringFieldUpdateOperationsInput | null
  feedback?: FeedbackUpdateManyWithoutContractorInput
}

export interface ContractorUncheckedUpdateWithoutServicesInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  userId?: NullableStringFieldUpdateOperationsInput | null
  servicesId?: NullableStringFieldUpdateOperationsInput | null
  feedback?: FeedbackUncheckedUpdateManyWithoutContractorInput
}

export interface UserUpsertWithoutServicesInput {
  update: UserUncheckedUpdateWithoutServicesInput
  create: UserUncheckedCreateWithoutServicesInput
}

export interface UserUpdateWithoutServicesInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  isConfirmed?: BoolFieldUpdateOperationsInput
  phone?: NullableStringFieldUpdateOperationsInput | null
  email?: NullableStringFieldUpdateOperationsInput | null
  code?: NullableStringFieldUpdateOperationsInput | null
  avatar?: NullableStringFieldUpdateOperationsInput | null
  name?: NullableStringFieldUpdateOperationsInput | null
  address?: NullableStringFieldUpdateOperationsInput | null
  locality?: NullableStringFieldUpdateOperationsInput | null
  birthdayDate?: NullableDateTimeFieldUpdateOperationsInput | null
  inContractorMode?: BoolFieldUpdateOperationsInput
  contractorProfile?: ContractorUpdateOneWithoutUserInput
  feedback?: FeedbackUpdateManyWithoutUserInput
}

export interface UserUncheckedUpdateWithoutServicesInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  isConfirmed?: BoolFieldUpdateOperationsInput
  phone?: NullableStringFieldUpdateOperationsInput | null
  email?: NullableStringFieldUpdateOperationsInput | null
  code?: NullableStringFieldUpdateOperationsInput | null
  avatar?: NullableStringFieldUpdateOperationsInput | null
  name?: NullableStringFieldUpdateOperationsInput | null
  address?: NullableStringFieldUpdateOperationsInput | null
  locality?: NullableStringFieldUpdateOperationsInput | null
  birthdayDate?: NullableDateTimeFieldUpdateOperationsInput | null
  inContractorMode?: BoolFieldUpdateOperationsInput
  contractorProfile?: ContractorUncheckedUpdateOneWithoutUserInput
  feedback?: FeedbackUncheckedUpdateManyWithoutUserInput
}

export interface CategoryUpsertWithoutServicesInput {
  update: CategoryUncheckedUpdateWithoutServicesInput
  create: CategoryUncheckedCreateWithoutServicesInput
}

export interface CategoryUpdateWithoutServicesInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
}

export interface CategoryUncheckedUpdateWithoutServicesInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  title?: StringFieldUpdateOperationsInput
}

export interface ServicesCreateWithoutCategoryInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  img?: ServicesCreateimgInput
  title?: string | null
  locality?: string | null
  description: string
  cost: number
  isProvide?: boolean
  status?: ServicesStatusEnum
  canCallMe?: boolean
  contractor?: ContractorCreateNestedOneWithoutServicesInput
  customer?: UserCreateNestedOneWithoutServicesInput
}

export interface ServicesUncheckedCreateWithoutCategoryInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  img?: ServicesCreateimgInput
  title?: string | null
  locality?: string | null
  description: string
  cost: number
  isProvide?: boolean
  status?: ServicesStatusEnum
  canCallMe?: boolean
  contractorId?: string | null
  customerid?: string | null
}

export interface ServicesCreateOrConnectWithoutCategoryInput {
  where: ServicesWhereUniqueInput
  create: ServicesUncheckedCreateWithoutCategoryInput
}

export interface ServicesCreateManyCategoryInputEnvelope {
  data: ServicesCreateManyCategoryInput[]
  skipDuplicates?: boolean
}

export interface ServicesUpsertWithWhereUniqueWithoutCategoryInput {
  where: ServicesWhereUniqueInput
  update: ServicesUncheckedUpdateWithoutCategoryInput
  create: ServicesUncheckedCreateWithoutCategoryInput
}

export interface ServicesUpdateWithWhereUniqueWithoutCategoryInput {
  where: ServicesWhereUniqueInput
  data: ServicesUncheckedUpdateWithoutCategoryInput
}

export interface ServicesUpdateManyWithWhereWithoutCategoryInput {
  where: ServicesScalarWhereInput
  data: ServicesUncheckedUpdateManyWithoutServicesInput
}

export interface ServicesCreateManyCustomerInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  img?: ServicesCreateimgInput
  title?: string | null
  locality?: string | null
  description: string
  cost: number
  isProvide?: boolean
  status?: ServicesStatusEnum
  canCallMe?: boolean
  contractorId?: string | null
  categoryId?: string | null
}

export interface FeedbackCreateManyUserInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  score: number
  decription?: string | null
  contractorId?: string | null
}

export interface ServicesUpdateWithoutCustomerInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  img?: ServicesUpdateimgInput
  title?: NullableStringFieldUpdateOperationsInput | null
  locality?: NullableStringFieldUpdateOperationsInput | null
  description?: StringFieldUpdateOperationsInput
  cost?: FloatFieldUpdateOperationsInput
  isProvide?: BoolFieldUpdateOperationsInput
  status?: EnumServicesStatusEnumFieldUpdateOperationsInput
  canCallMe?: BoolFieldUpdateOperationsInput
  contractor?: ContractorUpdateOneWithoutServicesInput
  category?: CategoryUpdateOneWithoutServicesInput
}

export interface ServicesUncheckedUpdateWithoutCustomerInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  img?: ServicesUpdateimgInput
  title?: NullableStringFieldUpdateOperationsInput | null
  locality?: NullableStringFieldUpdateOperationsInput | null
  description?: StringFieldUpdateOperationsInput
  cost?: FloatFieldUpdateOperationsInput
  isProvide?: BoolFieldUpdateOperationsInput
  status?: EnumServicesStatusEnumFieldUpdateOperationsInput
  canCallMe?: BoolFieldUpdateOperationsInput
  contractorId?: NullableStringFieldUpdateOperationsInput | null
  categoryId?: NullableStringFieldUpdateOperationsInput | null
}

export interface ServicesUncheckedUpdateManyWithoutServicesInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  img?: ServicesUpdateimgInput
  title?: NullableStringFieldUpdateOperationsInput | null
  locality?: NullableStringFieldUpdateOperationsInput | null
  description?: StringFieldUpdateOperationsInput
  cost?: FloatFieldUpdateOperationsInput
  isProvide?: BoolFieldUpdateOperationsInput
  status?: EnumServicesStatusEnumFieldUpdateOperationsInput
  canCallMe?: BoolFieldUpdateOperationsInput
  contractorId?: NullableStringFieldUpdateOperationsInput | null
  categoryId?: NullableStringFieldUpdateOperationsInput | null
}

export interface FeedbackUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  score?: IntFieldUpdateOperationsInput
  decription?: NullableStringFieldUpdateOperationsInput | null
  contractor?: ContractorUpdateOneWithoutFeedbackInput
}

export interface FeedbackUncheckedUpdateWithoutUserInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  score?: IntFieldUpdateOperationsInput
  decription?: NullableStringFieldUpdateOperationsInput | null
  contractorId?: NullableStringFieldUpdateOperationsInput | null
}

export interface FeedbackUncheckedUpdateManyWithoutFeedbackInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  score?: IntFieldUpdateOperationsInput
  decription?: NullableStringFieldUpdateOperationsInput | null
  contractorId?: NullableStringFieldUpdateOperationsInput | null
}

export interface ServicesCreateManyContractorInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  img?: ServicesCreateimgInput
  title?: string | null
  locality?: string | null
  description: string
  cost: number
  isProvide?: boolean
  status?: ServicesStatusEnum
  canCallMe?: boolean
  customerid?: string | null
  categoryId?: string | null
}

export interface FeedbackCreateManyContractorInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  score: number
  decription?: string | null
  userId?: string | null
}

export interface ServicesUpdateWithoutContractorInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  img?: ServicesUpdateimgInput
  title?: NullableStringFieldUpdateOperationsInput | null
  locality?: NullableStringFieldUpdateOperationsInput | null
  description?: StringFieldUpdateOperationsInput
  cost?: FloatFieldUpdateOperationsInput
  isProvide?: BoolFieldUpdateOperationsInput
  status?: EnumServicesStatusEnumFieldUpdateOperationsInput
  canCallMe?: BoolFieldUpdateOperationsInput
  customer?: UserUpdateOneWithoutServicesInput
  category?: CategoryUpdateOneWithoutServicesInput
}

export interface ServicesUncheckedUpdateWithoutContractorInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  img?: ServicesUpdateimgInput
  title?: NullableStringFieldUpdateOperationsInput | null
  locality?: NullableStringFieldUpdateOperationsInput | null
  description?: StringFieldUpdateOperationsInput
  cost?: FloatFieldUpdateOperationsInput
  isProvide?: BoolFieldUpdateOperationsInput
  status?: EnumServicesStatusEnumFieldUpdateOperationsInput
  canCallMe?: BoolFieldUpdateOperationsInput
  customerid?: NullableStringFieldUpdateOperationsInput | null
  categoryId?: NullableStringFieldUpdateOperationsInput | null
}

export interface FeedbackUpdateWithoutContractorInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  score?: IntFieldUpdateOperationsInput
  decription?: NullableStringFieldUpdateOperationsInput | null
  user?: UserUpdateOneWithoutFeedbackInput
}

export interface FeedbackUncheckedUpdateWithoutContractorInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  score?: IntFieldUpdateOperationsInput
  decription?: NullableStringFieldUpdateOperationsInput | null
  userId?: NullableStringFieldUpdateOperationsInput | null
}

export interface ServicesCreateManyCategoryInput {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  img?: ServicesCreateimgInput
  title?: string | null
  locality?: string | null
  description: string
  cost: number
  isProvide?: boolean
  status?: ServicesStatusEnum
  canCallMe?: boolean
  contractorId?: string | null
  customerid?: string | null
}

export interface ServicesUpdateWithoutCategoryInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  img?: ServicesUpdateimgInput
  title?: NullableStringFieldUpdateOperationsInput | null
  locality?: NullableStringFieldUpdateOperationsInput | null
  description?: StringFieldUpdateOperationsInput
  cost?: FloatFieldUpdateOperationsInput
  isProvide?: BoolFieldUpdateOperationsInput
  status?: EnumServicesStatusEnumFieldUpdateOperationsInput
  canCallMe?: BoolFieldUpdateOperationsInput
  contractor?: ContractorUpdateOneWithoutServicesInput
  customer?: UserUpdateOneWithoutServicesInput
}

export interface ServicesUncheckedUpdateWithoutCategoryInput {
  id?: StringFieldUpdateOperationsInput
  createdAt?: DateTimeFieldUpdateOperationsInput
  updatedAt?: DateTimeFieldUpdateOperationsInput
  img?: ServicesUpdateimgInput
  title?: NullableStringFieldUpdateOperationsInput | null
  locality?: NullableStringFieldUpdateOperationsInput | null
  description?: StringFieldUpdateOperationsInput
  cost?: FloatFieldUpdateOperationsInput
  isProvide?: BoolFieldUpdateOperationsInput
  status?: EnumServicesStatusEnumFieldUpdateOperationsInput
  canCallMe?: BoolFieldUpdateOperationsInput
  contractorId?: NullableStringFieldUpdateOperationsInput | null
  customerid?: NullableStringFieldUpdateOperationsInput | null
}

export enum UserScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  isConfirmed = 'isConfirmed',
  phone = 'phone',
  email = 'email',
  code = 'code',
  avatar = 'avatar',
  name = 'name',
  address = 'address',
  locality = 'locality',
  birthdayDate = 'birthdayDate',
  inContractorMode = 'inContractorMode',
}
export enum ContractorScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  userId = 'userId',
  servicesId = 'servicesId',
}
export enum FeedbackScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  score = 'score',
  decription = 'decription',
  userId = 'userId',
  contractorId = 'contractorId',
}
export enum ServicesScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  img = 'img',
  title = 'title',
  locality = 'locality',
  description = 'description',
  cost = 'cost',
  isProvide = 'isProvide',
  status = 'status',
  canCallMe = 'canCallMe',
  contractorId = 'contractorId',
  customerid = 'customerid',
  categoryId = 'categoryId',
}
export enum CategoryScalarFieldEnum {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  title = 'title',
}
export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}
export enum QueryMode {
  default = 'default',
  insensitive = 'insensitive',
}
export enum ServicesStatusEnum {
  SEARCH_CONTRACTOR = 'SEARCH_CONTRACTOR',
  TAKED = 'TAKED',
  IN_PROCESS = 'IN_PROCESS',
  DONE = 'DONE',
}
