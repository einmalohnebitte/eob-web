export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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

export type EmailReq = {
  email: Scalars['String'];
  html: Scalars['String'];
  subject: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  newsletter: Scalars['Boolean'];
  sendEmail: Scalars['Boolean'];
};


export type MutationNewsletterArgs = {
  user: NewsletterReq;
};


export type MutationSendEmailArgs = {
  email: EmailReq;
};

export type NewsletterReq = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  hello?: Maybe<Scalars['String']>;
};

export type SellEmailReq = {
  address: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  message?: InputMaybe<Scalars['String']>;
  postCode: Scalars['Int'];
  shop: Scalars['String'];
  sticker: Scalars['String'];
  town: Scalars['String'];
};

export type SpreadEmailReq = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  message?: InputMaybe<Scalars['String']>;
  postCode: Scalars['Int'];
  town: Scalars['String'];
};
