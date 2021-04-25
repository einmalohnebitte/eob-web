export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  sellEmail: Scalars['Boolean'];
  spreadEmail: Scalars['Boolean'];
  newsletter: Scalars['Boolean'];
};


export type MutationSellEmailArgs = {
  email: SellEmailReq;
};


export type MutationSpreadEmailArgs = {
  email: SpreadEmailReq;
};


export type MutationNewsletterArgs = {
  user: NewsletterReq;
};

export type NewsletterReq = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  hello?: Maybe<Scalars['String']>;
};

export type SellEmailReq = {
  shop: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  address: Scalars['String'];
  postCode: Scalars['Int'];
  town: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  sticker: Scalars['String'];
  email: Scalars['String'];
};

export type SpreadEmailReq = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  postCode: Scalars['Int'];
  town: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  email: Scalars['String'];
};
