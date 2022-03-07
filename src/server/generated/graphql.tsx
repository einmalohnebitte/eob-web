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
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: any;
  Hex: any;
  /** Raw JSON value */
  Json: any;
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  RGBAHue: any;
  RGBATransparency: any;
  /** Slate-compatible RichText AST */
  RichTextAST: any;
};

export type Aggregate = {
  __typename?: 'Aggregate';
  count: Scalars['Int'];
};

/** Asset system model */
export type Asset = Node & {
  __typename?: 'Asset';
  category?: Maybe<Category>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  dataProtectionFormShop: Array<Shop>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars['String'];
  /** The file handle */
  handle: Scalars['String'];
  /** The height of the file */
  height?: Maybe<Scalars['Float']>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  logoCityPartner: Array<CityPartner>;
  logoNetwork: Array<Network>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars['String']>;
  photoPressPhoto: Array<PressPhoto>;
  photoPressReport: Array<PressReport>;
  pictureMember: Array<Member>;
  picturePageSection: Array<PageSection>;
  pictureSupporter: Array<Supporter>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars['Float']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars['String'];
  /** The file width */
  width?: Maybe<Scalars['Float']>;
};


/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetDataProtectionFormShopArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ShopOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShopWhereInput>;
};


/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


/** Asset system model */
export type AssetLogoCityPartnerArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CityPartnerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CityPartnerWhereInput>;
};


/** Asset system model */
export type AssetLogoNetworkArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<NetworkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NetworkWhereInput>;
};


/** Asset system model */
export type AssetPhotoPressPhotoArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PressPhotoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PressPhotoWhereInput>;
};


/** Asset system model */
export type AssetPhotoPressReportArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PressReportOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PressReportWhereInput>;
};


/** Asset system model */
export type AssetPictureMemberArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<MemberOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MemberWhereInput>;
};


/** Asset system model */
export type AssetPicturePageSectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PageSectionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageSectionWhereInput>;
};


/** Asset system model */
export type AssetPictureSupporterArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<SupporterOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SupporterWhereInput>;
};


/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


/** Asset system model */
export type AssetUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  category?: InputMaybe<Category>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dataProtectionFormShop?: InputMaybe<ShopCreateManyInlineInput>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  logoCityPartner?: InputMaybe<CityPartnerCreateManyInlineInput>;
  logoNetwork?: InputMaybe<NetworkCreateManyInlineInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  photoPressPhoto?: InputMaybe<PressPhotoCreateManyInlineInput>;
  photoPressReport?: InputMaybe<PressReportCreateManyInlineInput>;
  pictureMember?: InputMaybe<MemberCreateManyInlineInput>;
  picturePageSection?: InputMaybe<PageSectionCreateManyInlineInput>;
  pictureSupporter?: InputMaybe<SupporterCreateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  fileName: Scalars['String'];
  handle: Scalars['String'];
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Category>;
  /** All values that are contained in given list. */
  category_in?: InputMaybe<Array<Category>>;
  /** All values that are not equal to given value. */
  category_not?: InputMaybe<Category>;
  /** All values that are not contained in given list. */
  category_not_in?: InputMaybe<Array<Category>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  dataProtectionFormShop_every?: InputMaybe<ShopWhereInput>;
  dataProtectionFormShop_none?: InputMaybe<ShopWhereInput>;
  dataProtectionFormShop_some?: InputMaybe<ShopWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  logoCityPartner_every?: InputMaybe<CityPartnerWhereInput>;
  logoCityPartner_none?: InputMaybe<CityPartnerWhereInput>;
  logoCityPartner_some?: InputMaybe<CityPartnerWhereInput>;
  logoNetwork_every?: InputMaybe<NetworkWhereInput>;
  logoNetwork_none?: InputMaybe<NetworkWhereInput>;
  logoNetwork_some?: InputMaybe<NetworkWhereInput>;
  photoPressPhoto_every?: InputMaybe<PressPhotoWhereInput>;
  photoPressPhoto_none?: InputMaybe<PressPhotoWhereInput>;
  photoPressPhoto_some?: InputMaybe<PressPhotoWhereInput>;
  photoPressReport_every?: InputMaybe<PressReportWhereInput>;
  photoPressReport_none?: InputMaybe<PressReportWhereInput>;
  photoPressReport_some?: InputMaybe<PressReportWhereInput>;
  pictureMember_every?: InputMaybe<MemberWhereInput>;
  pictureMember_none?: InputMaybe<MemberWhereInput>;
  pictureMember_some?: InputMaybe<MemberWhereInput>;
  picturePageSection_every?: InputMaybe<PageSectionWhereInput>;
  picturePageSection_none?: InputMaybe<PageSectionWhereInput>;
  picturePageSection_some?: InputMaybe<PageSectionWhereInput>;
  pictureSupporter_every?: InputMaybe<SupporterWhereInput>;
  pictureSupporter_none?: InputMaybe<SupporterWhereInput>;
  pictureSupporter_some?: InputMaybe<SupporterWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']>;
};

export type AssetUpdateInput = {
  category?: InputMaybe<Category>;
  dataProtectionFormShop?: InputMaybe<ShopUpdateManyInlineInput>;
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  logoCityPartner?: InputMaybe<CityPartnerUpdateManyInlineInput>;
  logoNetwork?: InputMaybe<NetworkUpdateManyInlineInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  photoPressPhoto?: InputMaybe<PressPhotoUpdateManyInlineInput>;
  photoPressReport?: InputMaybe<PressReportUpdateManyInlineInput>;
  pictureMember?: InputMaybe<MemberUpdateManyInlineInput>;
  picturePageSection?: InputMaybe<PageSectionUpdateManyInlineInput>;
  pictureSupporter?: InputMaybe<SupporterUpdateManyInlineInput>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  category?: InputMaybe<Category>;
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Category>;
  /** All values that are contained in given list. */
  category_in?: InputMaybe<Array<Category>>;
  /** All values that are not equal to given value. */
  category_not?: InputMaybe<Category>;
  /** All values that are not contained in given list. */
  category_not_in?: InputMaybe<Array<Category>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  dataProtectionFormShop_every?: InputMaybe<ShopWhereInput>;
  dataProtectionFormShop_none?: InputMaybe<ShopWhereInput>;
  dataProtectionFormShop_some?: InputMaybe<ShopWhereInput>;
  fileName?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  fileName_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  handle_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  height_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<Scalars['Float']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  logoCityPartner_every?: InputMaybe<CityPartnerWhereInput>;
  logoCityPartner_none?: InputMaybe<CityPartnerWhereInput>;
  logoCityPartner_some?: InputMaybe<CityPartnerWhereInput>;
  logoNetwork_every?: InputMaybe<NetworkWhereInput>;
  logoNetwork_none?: InputMaybe<NetworkWhereInput>;
  logoNetwork_some?: InputMaybe<NetworkWhereInput>;
  mimeType?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  mimeType_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']>;
  photoPressPhoto_every?: InputMaybe<PressPhotoWhereInput>;
  photoPressPhoto_none?: InputMaybe<PressPhotoWhereInput>;
  photoPressPhoto_some?: InputMaybe<PressPhotoWhereInput>;
  photoPressReport_every?: InputMaybe<PressReportWhereInput>;
  photoPressReport_none?: InputMaybe<PressReportWhereInput>;
  photoPressReport_some?: InputMaybe<PressReportWhereInput>;
  pictureMember_every?: InputMaybe<MemberWhereInput>;
  pictureMember_none?: InputMaybe<MemberWhereInput>;
  pictureMember_some?: InputMaybe<MemberWhereInput>;
  picturePageSection_every?: InputMaybe<PageSectionWhereInput>;
  picturePageSection_none?: InputMaybe<PageSectionWhereInput>;
  picturePageSection_some?: InputMaybe<PageSectionWhereInput>;
  pictureSupporter_every?: InputMaybe<SupporterWhereInput>;
  pictureSupporter_none?: InputMaybe<SupporterWhereInput>;
  pictureSupporter_some?: InputMaybe<SupporterWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  size_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<Scalars['Float']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars['Float']>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<Scalars['Float']>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']>;
  /** All values that are not equal to given value. */
  width_not?: InputMaybe<Scalars['Float']>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<Scalars['Float']>>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type BatchPayload = {
  __typename?: 'BatchPayload';
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long'];
};

export type Blog = Node & {
  __typename?: 'Blog';
  abstract?: Maybe<Scalars['String']>;
  content?: Maybe<RichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  date?: Maybe<Scalars['Date']>;
  /** Get the document in other stages */
  documentInStages: Array<Blog>;
  /** List of Blog versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Blog>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type BlogCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type BlogCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type BlogDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type BlogHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type BlogLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type BlogPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type BlogPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type BlogScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type BlogUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type BlogUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type BlogConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: BlogWhereUniqueInput;
};

/** A connection to a list of items. */
export type BlogConnection = {
  __typename?: 'BlogConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<BlogEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type BlogCreateInput = {
  /** abstract input for default locale (de) */
  abstract?: InputMaybe<Scalars['String']>;
  /** content input for default locale (de) */
  content?: InputMaybe<Scalars['RichTextAST']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date?: InputMaybe<Scalars['Date']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<BlogCreateLocalizationsInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** title input for default locale (de) */
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BlogCreateLocalizationDataInput = {
  abstract?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['RichTextAST']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type BlogCreateLocalizationInput = {
  /** Localization input */
  data: BlogCreateLocalizationDataInput;
  locale: Locale;
};

export type BlogCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<BlogCreateLocalizationInput>>;
};

export type BlogCreateManyInlineInput = {
  /** Connect multiple existing Blog documents */
  connect?: InputMaybe<Array<BlogWhereUniqueInput>>;
  /** Create and connect multiple existing Blog documents */
  create?: InputMaybe<Array<BlogCreateInput>>;
};

export type BlogCreateOneInlineInput = {
  /** Connect one existing Blog document */
  connect?: InputMaybe<BlogWhereUniqueInput>;
  /** Create and connect one Blog document */
  create?: InputMaybe<BlogCreateInput>;
};

/** An edge in a connection. */
export type BlogEdge = {
  __typename?: 'BlogEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Blog;
};

/** Identifies documents */
export type BlogManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BlogWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BlogWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BlogWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  date_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<Scalars['Date']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum BlogOrderByInput {
  AbstractAsc = 'abstract_ASC',
  AbstractDesc = 'abstract_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type BlogUpdateInput = {
  /** abstract input for default locale (de) */
  abstract?: InputMaybe<Scalars['String']>;
  /** content input for default locale (de) */
  content?: InputMaybe<Scalars['RichTextAST']>;
  date?: InputMaybe<Scalars['Date']>;
  /** Manage document localizations */
  localizations?: InputMaybe<BlogUpdateLocalizationsInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** title input for default locale (de) */
  title?: InputMaybe<Scalars['String']>;
};

export type BlogUpdateLocalizationDataInput = {
  abstract?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type BlogUpdateLocalizationInput = {
  data: BlogUpdateLocalizationDataInput;
  locale: Locale;
};

export type BlogUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<BlogCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<BlogUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<BlogUpsertLocalizationInput>>;
};

export type BlogUpdateManyInlineInput = {
  /** Connect multiple existing Blog documents */
  connect?: InputMaybe<Array<BlogConnectInput>>;
  /** Create and connect multiple Blog documents */
  create?: InputMaybe<Array<BlogCreateInput>>;
  /** Delete multiple Blog documents */
  delete?: InputMaybe<Array<BlogWhereUniqueInput>>;
  /** Disconnect multiple Blog documents */
  disconnect?: InputMaybe<Array<BlogWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Blog documents */
  set?: InputMaybe<Array<BlogWhereUniqueInput>>;
  /** Update multiple Blog documents */
  update?: InputMaybe<Array<BlogUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Blog documents */
  upsert?: InputMaybe<Array<BlogUpsertWithNestedWhereUniqueInput>>;
};

export type BlogUpdateManyInput = {
  /** abstract input for default locale (de) */
  abstract?: InputMaybe<Scalars['String']>;
  /** content input for default locale (de) */
  content?: InputMaybe<Scalars['RichTextAST']>;
  date?: InputMaybe<Scalars['Date']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<BlogUpdateManyLocalizationsInput>;
  /** title input for default locale (de) */
  title?: InputMaybe<Scalars['String']>;
};

export type BlogUpdateManyLocalizationDataInput = {
  abstract?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type BlogUpdateManyLocalizationInput = {
  data: BlogUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type BlogUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<BlogUpdateManyLocalizationInput>>;
};

export type BlogUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: BlogUpdateManyInput;
  /** Document search */
  where: BlogWhereInput;
};

export type BlogUpdateOneInlineInput = {
  /** Connect existing Blog document */
  connect?: InputMaybe<BlogWhereUniqueInput>;
  /** Create and connect one Blog document */
  create?: InputMaybe<BlogCreateInput>;
  /** Delete currently connected Blog document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Blog document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Blog document */
  update?: InputMaybe<BlogUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Blog document */
  upsert?: InputMaybe<BlogUpsertWithNestedWhereUniqueInput>;
};

export type BlogUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: BlogUpdateInput;
  /** Unique document search */
  where: BlogWhereUniqueInput;
};

export type BlogUpsertInput = {
  /** Create document if it didn't exist */
  create: BlogCreateInput;
  /** Update document if it exists */
  update: BlogUpdateInput;
};

export type BlogUpsertLocalizationInput = {
  create: BlogCreateLocalizationDataInput;
  locale: Locale;
  update: BlogUpdateLocalizationDataInput;
};

export type BlogUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: BlogUpsertInput;
  /** Unique document search */
  where: BlogWhereUniqueInput;
};

/** Identifies documents */
export type BlogWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<BlogWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<BlogWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<BlogWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  abstract?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  abstract_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  abstract_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  abstract_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  abstract_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  abstract_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  abstract_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  abstract_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  abstract_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  abstract_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  date_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<Scalars['Date']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Blog record uniquely */
export type BlogWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export enum Category {
  Cookies = 'cookies',
  Docs = 'docs',
  Download = 'download',
  Footer = 'footer',
  Form = 'form',
  Header = 'header',
  Home = 'home',
  Map = 'map',
  Members = 'members',
  Press = 'press',
  Uberuns = 'uberuns'
}

export type CityPartner = Node & {
  __typename?: 'CityPartner';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<CityPartner>;
  /** List of CityPartner versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<CityPartner>;
  logo?: Maybe<Asset>;
  name?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type CityPartnerCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type CityPartnerCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CityPartnerDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type CityPartnerHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type CityPartnerLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type CityPartnerLogoArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CityPartnerPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type CityPartnerPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type CityPartnerScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type CityPartnerUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type CityPartnerUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type CityPartnerConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CityPartnerWhereUniqueInput;
};

/** A connection to a list of items. */
export type CityPartnerConnection = {
  __typename?: 'CityPartnerConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CityPartnerEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CityPartnerCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  link?: InputMaybe<Scalars['String']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<CityPartnerCreateLocalizationsInput>;
  logo?: InputMaybe<AssetCreateOneInlineInput>;
  /** name input for default locale (de) */
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CityPartnerCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type CityPartnerCreateLocalizationInput = {
  /** Localization input */
  data: CityPartnerCreateLocalizationDataInput;
  locale: Locale;
};

export type CityPartnerCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<CityPartnerCreateLocalizationInput>>;
};

export type CityPartnerCreateManyInlineInput = {
  /** Connect multiple existing CityPartner documents */
  connect?: InputMaybe<Array<CityPartnerWhereUniqueInput>>;
  /** Create and connect multiple existing CityPartner documents */
  create?: InputMaybe<Array<CityPartnerCreateInput>>;
};

export type CityPartnerCreateOneInlineInput = {
  /** Connect one existing CityPartner document */
  connect?: InputMaybe<CityPartnerWhereUniqueInput>;
  /** Create and connect one CityPartner document */
  create?: InputMaybe<CityPartnerCreateInput>;
};

/** An edge in a connection. */
export type CityPartnerEdge = {
  __typename?: 'CityPartnerEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: CityPartner;
};

/** Identifies documents */
export type CityPartnerManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CityPartnerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CityPartnerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CityPartnerWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  link_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CityPartnerOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type CityPartnerUpdateInput = {
  link?: InputMaybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: InputMaybe<CityPartnerUpdateLocalizationsInput>;
  logo?: InputMaybe<AssetUpdateOneInlineInput>;
  /** name input for default locale (de) */
  name?: InputMaybe<Scalars['String']>;
};

export type CityPartnerUpdateLocalizationDataInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type CityPartnerUpdateLocalizationInput = {
  data: CityPartnerUpdateLocalizationDataInput;
  locale: Locale;
};

export type CityPartnerUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<CityPartnerCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<CityPartnerUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<CityPartnerUpsertLocalizationInput>>;
};

export type CityPartnerUpdateManyInlineInput = {
  /** Connect multiple existing CityPartner documents */
  connect?: InputMaybe<Array<CityPartnerConnectInput>>;
  /** Create and connect multiple CityPartner documents */
  create?: InputMaybe<Array<CityPartnerCreateInput>>;
  /** Delete multiple CityPartner documents */
  delete?: InputMaybe<Array<CityPartnerWhereUniqueInput>>;
  /** Disconnect multiple CityPartner documents */
  disconnect?: InputMaybe<Array<CityPartnerWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing CityPartner documents */
  set?: InputMaybe<Array<CityPartnerWhereUniqueInput>>;
  /** Update multiple CityPartner documents */
  update?: InputMaybe<Array<CityPartnerUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple CityPartner documents */
  upsert?: InputMaybe<Array<CityPartnerUpsertWithNestedWhereUniqueInput>>;
};

export type CityPartnerUpdateManyInput = {
  link?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<CityPartnerUpdateManyLocalizationsInput>;
  /** name input for default locale (de) */
  name?: InputMaybe<Scalars['String']>;
};

export type CityPartnerUpdateManyLocalizationDataInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type CityPartnerUpdateManyLocalizationInput = {
  data: CityPartnerUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type CityPartnerUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<CityPartnerUpdateManyLocalizationInput>>;
};

export type CityPartnerUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CityPartnerUpdateManyInput;
  /** Document search */
  where: CityPartnerWhereInput;
};

export type CityPartnerUpdateOneInlineInput = {
  /** Connect existing CityPartner document */
  connect?: InputMaybe<CityPartnerWhereUniqueInput>;
  /** Create and connect one CityPartner document */
  create?: InputMaybe<CityPartnerCreateInput>;
  /** Delete currently connected CityPartner document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected CityPartner document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single CityPartner document */
  update?: InputMaybe<CityPartnerUpdateWithNestedWhereUniqueInput>;
  /** Upsert single CityPartner document */
  upsert?: InputMaybe<CityPartnerUpsertWithNestedWhereUniqueInput>;
};

export type CityPartnerUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CityPartnerUpdateInput;
  /** Unique document search */
  where: CityPartnerWhereUniqueInput;
};

export type CityPartnerUpsertInput = {
  /** Create document if it didn't exist */
  create: CityPartnerCreateInput;
  /** Update document if it exists */
  update: CityPartnerUpdateInput;
};

export type CityPartnerUpsertLocalizationInput = {
  create: CityPartnerCreateLocalizationDataInput;
  locale: Locale;
  update: CityPartnerUpdateLocalizationDataInput;
};

export type CityPartnerUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CityPartnerUpsertInput;
  /** Unique document search */
  where: CityPartnerWhereUniqueInput;
};

/** Identifies documents */
export type CityPartnerWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CityPartnerWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CityPartnerWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CityPartnerWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  link_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References CityPartner record uniquely */
export type CityPartnerWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color';
  css: Scalars['String'];
  hex: Scalars['Hex'];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']>;
};

export enum DocumentFileTypes {
  Doc = 'doc',
  Docx = 'docx',
  Html = 'html',
  Jpg = 'jpg',
  Odp = 'odp',
  Ods = 'ods',
  Odt = 'odt',
  Pdf = 'pdf',
  Png = 'png',
  Ppt = 'ppt',
  Pptx = 'pptx',
  Svg = 'svg',
  Txt = 'txt',
  Webp = 'webp',
  Xls = 'xls',
  Xlsx = 'xlsx'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  __typename?: 'DocumentVersion';
  createdAt: Scalars['DateTime'];
  data?: Maybe<Scalars['Json']>;
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type Faq = Node & {
  __typename?: 'Faq';
  answer?: Maybe<RichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Faq>;
  /** List of Faq versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Faq>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  question: Scalars['String'];
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type FaqCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type FaqCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type FaqDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type FaqHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type FaqLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type FaqPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type FaqPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type FaqScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type FaqUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type FaqUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type FaqConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: FaqWhereUniqueInput;
};

/** A connection to a list of items. */
export type FaqConnection = {
  __typename?: 'FaqConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<FaqEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type FaqCreateInput = {
  /** answer input for default locale (de) */
  answer?: InputMaybe<Scalars['RichTextAST']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<FaqCreateLocalizationsInput>;
  /** question input for default locale (de) */
  question: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FaqCreateLocalizationDataInput = {
  answer?: InputMaybe<Scalars['RichTextAST']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  question: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type FaqCreateLocalizationInput = {
  /** Localization input */
  data: FaqCreateLocalizationDataInput;
  locale: Locale;
};

export type FaqCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<FaqCreateLocalizationInput>>;
};

export type FaqCreateManyInlineInput = {
  /** Connect multiple existing Faq documents */
  connect?: InputMaybe<Array<FaqWhereUniqueInput>>;
  /** Create and connect multiple existing Faq documents */
  create?: InputMaybe<Array<FaqCreateInput>>;
};

export type FaqCreateOneInlineInput = {
  /** Connect one existing Faq document */
  connect?: InputMaybe<FaqWhereUniqueInput>;
  /** Create and connect one Faq document */
  create?: InputMaybe<FaqCreateInput>;
};

/** An edge in a connection. */
export type FaqEdge = {
  __typename?: 'FaqEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Faq;
};

/** Identifies documents */
export type FaqManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FaqWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FaqWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FaqWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum FaqOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  QuestionAsc = 'question_ASC',
  QuestionDesc = 'question_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type FaqUpdateInput = {
  /** answer input for default locale (de) */
  answer?: InputMaybe<Scalars['RichTextAST']>;
  /** Manage document localizations */
  localizations?: InputMaybe<FaqUpdateLocalizationsInput>;
  /** question input for default locale (de) */
  question?: InputMaybe<Scalars['String']>;
};

export type FaqUpdateLocalizationDataInput = {
  answer?: InputMaybe<Scalars['RichTextAST']>;
  question?: InputMaybe<Scalars['String']>;
};

export type FaqUpdateLocalizationInput = {
  data: FaqUpdateLocalizationDataInput;
  locale: Locale;
};

export type FaqUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<FaqCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<FaqUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<FaqUpsertLocalizationInput>>;
};

export type FaqUpdateManyInlineInput = {
  /** Connect multiple existing Faq documents */
  connect?: InputMaybe<Array<FaqConnectInput>>;
  /** Create and connect multiple Faq documents */
  create?: InputMaybe<Array<FaqCreateInput>>;
  /** Delete multiple Faq documents */
  delete?: InputMaybe<Array<FaqWhereUniqueInput>>;
  /** Disconnect multiple Faq documents */
  disconnect?: InputMaybe<Array<FaqWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Faq documents */
  set?: InputMaybe<Array<FaqWhereUniqueInput>>;
  /** Update multiple Faq documents */
  update?: InputMaybe<Array<FaqUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Faq documents */
  upsert?: InputMaybe<Array<FaqUpsertWithNestedWhereUniqueInput>>;
};

export type FaqUpdateManyInput = {
  /** answer input for default locale (de) */
  answer?: InputMaybe<Scalars['RichTextAST']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<FaqUpdateManyLocalizationsInput>;
  /** question input for default locale (de) */
  question?: InputMaybe<Scalars['String']>;
};

export type FaqUpdateManyLocalizationDataInput = {
  answer?: InputMaybe<Scalars['RichTextAST']>;
  question?: InputMaybe<Scalars['String']>;
};

export type FaqUpdateManyLocalizationInput = {
  data: FaqUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type FaqUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<FaqUpdateManyLocalizationInput>>;
};

export type FaqUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: FaqUpdateManyInput;
  /** Document search */
  where: FaqWhereInput;
};

export type FaqUpdateOneInlineInput = {
  /** Connect existing Faq document */
  connect?: InputMaybe<FaqWhereUniqueInput>;
  /** Create and connect one Faq document */
  create?: InputMaybe<FaqCreateInput>;
  /** Delete currently connected Faq document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Faq document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Faq document */
  update?: InputMaybe<FaqUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Faq document */
  upsert?: InputMaybe<FaqUpsertWithNestedWhereUniqueInput>;
};

export type FaqUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: FaqUpdateInput;
  /** Unique document search */
  where: FaqWhereUniqueInput;
};

export type FaqUpsertInput = {
  /** Create document if it didn't exist */
  create: FaqCreateInput;
  /** Update document if it exists */
  update: FaqUpdateInput;
};

export type FaqUpsertLocalizationInput = {
  create: FaqCreateLocalizationDataInput;
  locale: Locale;
  update: FaqUpdateLocalizationDataInput;
};

export type FaqUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: FaqUpsertInput;
  /** Unique document search */
  where: FaqWhereUniqueInput;
};

/** Identifies documents */
export type FaqWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<FaqWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<FaqWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<FaqWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  question?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  question_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  question_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  question_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  question_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  question_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  question_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  question_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  question_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  question_starts_with?: InputMaybe<Scalars['String']>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Faq record uniquely */
export type FaqWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

export type Kpi = Node & {
  __typename?: 'Kpi';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Kpi>;
  /** List of Kpi versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Kpi>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  text?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  value?: Maybe<Scalars['Int']>;
};


export type KpiCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type KpiCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type KpiDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type KpiHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type KpiLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type KpiPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type KpiPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type KpiScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type KpiUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type KpiUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type KpiConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: KpiWhereUniqueInput;
};

/** A connection to a list of items. */
export type KpiConnection = {
  __typename?: 'KpiConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<KpiEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type KpiCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<KpiCreateLocalizationsInput>;
  /** text input for default locale (de) */
  text?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type KpiCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  text?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type KpiCreateLocalizationInput = {
  /** Localization input */
  data: KpiCreateLocalizationDataInput;
  locale: Locale;
};

export type KpiCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<KpiCreateLocalizationInput>>;
};

export type KpiCreateManyInlineInput = {
  /** Connect multiple existing Kpi documents */
  connect?: InputMaybe<Array<KpiWhereUniqueInput>>;
  /** Create and connect multiple existing Kpi documents */
  create?: InputMaybe<Array<KpiCreateInput>>;
};

export type KpiCreateOneInlineInput = {
  /** Connect one existing Kpi document */
  connect?: InputMaybe<KpiWhereUniqueInput>;
  /** Create and connect one Kpi document */
  create?: InputMaybe<KpiCreateInput>;
};

/** An edge in a connection. */
export type KpiEdge = {
  __typename?: 'KpiEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Kpi;
};

/** Identifies documents */
export type KpiManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<KpiWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<KpiWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<KpiWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  value?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  value_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  value_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  value_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  value_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  value_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  value_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  value_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum KpiOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type KpiUpdateInput = {
  /** Manage document localizations */
  localizations?: InputMaybe<KpiUpdateLocalizationsInput>;
  /** text input for default locale (de) */
  text?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type KpiUpdateLocalizationDataInput = {
  text?: InputMaybe<Scalars['String']>;
};

export type KpiUpdateLocalizationInput = {
  data: KpiUpdateLocalizationDataInput;
  locale: Locale;
};

export type KpiUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<KpiCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<KpiUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<KpiUpsertLocalizationInput>>;
};

export type KpiUpdateManyInlineInput = {
  /** Connect multiple existing Kpi documents */
  connect?: InputMaybe<Array<KpiConnectInput>>;
  /** Create and connect multiple Kpi documents */
  create?: InputMaybe<Array<KpiCreateInput>>;
  /** Delete multiple Kpi documents */
  delete?: InputMaybe<Array<KpiWhereUniqueInput>>;
  /** Disconnect multiple Kpi documents */
  disconnect?: InputMaybe<Array<KpiWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Kpi documents */
  set?: InputMaybe<Array<KpiWhereUniqueInput>>;
  /** Update multiple Kpi documents */
  update?: InputMaybe<Array<KpiUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Kpi documents */
  upsert?: InputMaybe<Array<KpiUpsertWithNestedWhereUniqueInput>>;
};

export type KpiUpdateManyInput = {
  /** Optional updates to localizations */
  localizations?: InputMaybe<KpiUpdateManyLocalizationsInput>;
  /** text input for default locale (de) */
  text?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['Int']>;
};

export type KpiUpdateManyLocalizationDataInput = {
  text?: InputMaybe<Scalars['String']>;
};

export type KpiUpdateManyLocalizationInput = {
  data: KpiUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type KpiUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<KpiUpdateManyLocalizationInput>>;
};

export type KpiUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: KpiUpdateManyInput;
  /** Document search */
  where: KpiWhereInput;
};

export type KpiUpdateOneInlineInput = {
  /** Connect existing Kpi document */
  connect?: InputMaybe<KpiWhereUniqueInput>;
  /** Create and connect one Kpi document */
  create?: InputMaybe<KpiCreateInput>;
  /** Delete currently connected Kpi document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Kpi document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Kpi document */
  update?: InputMaybe<KpiUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Kpi document */
  upsert?: InputMaybe<KpiUpsertWithNestedWhereUniqueInput>;
};

export type KpiUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: KpiUpdateInput;
  /** Unique document search */
  where: KpiWhereUniqueInput;
};

export type KpiUpsertInput = {
  /** Create document if it didn't exist */
  create: KpiCreateInput;
  /** Update document if it exists */
  update: KpiUpdateInput;
};

export type KpiUpsertLocalizationInput = {
  create: KpiCreateLocalizationDataInput;
  locale: Locale;
  update: KpiUpdateLocalizationDataInput;
};

export type KpiUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: KpiUpsertInput;
  /** Unique document search */
  where: KpiWhereUniqueInput;
};

/** Identifies documents */
export type KpiWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<KpiWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<KpiWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<KpiWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  text?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  text_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  text_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  text_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  text_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  text_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  text_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  text_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  text_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  text_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  value?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  value_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  value_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  value_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  value_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  value_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  value_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  value_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

/** References Kpi record uniquely */
export type KpiWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  De = 'de',
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location';
  distance: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};


/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type Member = Node & {
  __typename?: 'Member';
  abstract?: Maybe<Scalars['String']>;
  bio?: Maybe<RichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Member>;
  /** List of Member versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Member>;
  name?: Maybe<Scalars['String']>;
  order: Scalars['Int'];
  picture?: Maybe<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type MemberCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type MemberCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type MemberDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type MemberHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type MemberLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type MemberPictureArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type MemberPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type MemberPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type MemberScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type MemberUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type MemberUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type MemberConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: MemberWhereUniqueInput;
};

/** A connection to a list of items. */
export type MemberConnection = {
  __typename?: 'MemberConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<MemberEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type MemberCreateInput = {
  /** abstract input for default locale (de) */
  abstract?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['RichTextAST']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<MemberCreateLocalizationsInput>;
  name?: InputMaybe<Scalars['String']>;
  order: Scalars['Int'];
  picture?: InputMaybe<AssetCreateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MemberCreateLocalizationDataInput = {
  abstract?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MemberCreateLocalizationInput = {
  /** Localization input */
  data: MemberCreateLocalizationDataInput;
  locale: Locale;
};

export type MemberCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<MemberCreateLocalizationInput>>;
};

export type MemberCreateManyInlineInput = {
  /** Connect multiple existing Member documents */
  connect?: InputMaybe<Array<MemberWhereUniqueInput>>;
  /** Create and connect multiple existing Member documents */
  create?: InputMaybe<Array<MemberCreateInput>>;
};

export type MemberCreateOneInlineInput = {
  /** Connect one existing Member document */
  connect?: InputMaybe<MemberWhereUniqueInput>;
  /** Create and connect one Member document */
  create?: InputMaybe<MemberCreateInput>;
};

/** An edge in a connection. */
export type MemberEdge = {
  __typename?: 'MemberEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Member;
};

/** Identifies documents */
export type MemberManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MemberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MemberWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MemberWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  order_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  order_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  order_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  order_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  order_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  order_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  order_not_in?: InputMaybe<Array<Scalars['Int']>>;
  picture?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum MemberOrderByInput {
  AbstractAsc = 'abstract_ASC',
  AbstractDesc = 'abstract_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OrderAsc = 'order_ASC',
  OrderDesc = 'order_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type MemberUpdateInput = {
  /** abstract input for default locale (de) */
  abstract?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['RichTextAST']>;
  /** Manage document localizations */
  localizations?: InputMaybe<MemberUpdateLocalizationsInput>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  picture?: InputMaybe<AssetUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
};

export type MemberUpdateLocalizationDataInput = {
  abstract?: InputMaybe<Scalars['String']>;
};

export type MemberUpdateLocalizationInput = {
  data: MemberUpdateLocalizationDataInput;
  locale: Locale;
};

export type MemberUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<MemberCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<MemberUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<MemberUpsertLocalizationInput>>;
};

export type MemberUpdateManyInlineInput = {
  /** Connect multiple existing Member documents */
  connect?: InputMaybe<Array<MemberConnectInput>>;
  /** Create and connect multiple Member documents */
  create?: InputMaybe<Array<MemberCreateInput>>;
  /** Delete multiple Member documents */
  delete?: InputMaybe<Array<MemberWhereUniqueInput>>;
  /** Disconnect multiple Member documents */
  disconnect?: InputMaybe<Array<MemberWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Member documents */
  set?: InputMaybe<Array<MemberWhereUniqueInput>>;
  /** Update multiple Member documents */
  update?: InputMaybe<Array<MemberUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Member documents */
  upsert?: InputMaybe<Array<MemberUpsertWithNestedWhereUniqueInput>>;
};

export type MemberUpdateManyInput = {
  /** abstract input for default locale (de) */
  abstract?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['RichTextAST']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<MemberUpdateManyLocalizationsInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type MemberUpdateManyLocalizationDataInput = {
  abstract?: InputMaybe<Scalars['String']>;
};

export type MemberUpdateManyLocalizationInput = {
  data: MemberUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type MemberUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<MemberUpdateManyLocalizationInput>>;
};

export type MemberUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: MemberUpdateManyInput;
  /** Document search */
  where: MemberWhereInput;
};

export type MemberUpdateOneInlineInput = {
  /** Connect existing Member document */
  connect?: InputMaybe<MemberWhereUniqueInput>;
  /** Create and connect one Member document */
  create?: InputMaybe<MemberCreateInput>;
  /** Delete currently connected Member document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Member document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Member document */
  update?: InputMaybe<MemberUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Member document */
  upsert?: InputMaybe<MemberUpsertWithNestedWhereUniqueInput>;
};

export type MemberUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: MemberUpdateInput;
  /** Unique document search */
  where: MemberWhereUniqueInput;
};

export type MemberUpsertInput = {
  /** Create document if it didn't exist */
  create: MemberCreateInput;
  /** Update document if it exists */
  update: MemberUpdateInput;
};

export type MemberUpsertLocalizationInput = {
  create: MemberCreateLocalizationDataInput;
  locale: Locale;
  update: MemberUpdateLocalizationDataInput;
};

export type MemberUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: MemberUpsertInput;
  /** Unique document search */
  where: MemberWhereUniqueInput;
};

/** Identifies documents */
export type MemberWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<MemberWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<MemberWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<MemberWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  abstract?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  abstract_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  abstract_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  abstract_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  abstract_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  abstract_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  abstract_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  abstract_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  abstract_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  abstract_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  order_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  order_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  order_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  order_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  order_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  order_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  order_not_in?: InputMaybe<Array<Scalars['Int']>>;
  picture?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Member record uniquely */
export type MemberWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  order?: InputMaybe<Scalars['Int']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one blog */
  createBlog?: Maybe<Blog>;
  /** Create one cityPartner */
  createCityPartner?: Maybe<CityPartner>;
  /** Create one faq */
  createFaq?: Maybe<Faq>;
  /** Create one kpi */
  createKpi?: Maybe<Kpi>;
  /** Create one member */
  createMember?: Maybe<Member>;
  /** Create one network */
  createNetwork?: Maybe<Network>;
  /** Create one page */
  createPage?: Maybe<Page>;
  /** Create one pageSection */
  createPageSection?: Maybe<PageSection>;
  /** Create one pressArticle */
  createPressArticle?: Maybe<PressArticle>;
  /** Create one pressPhoto */
  createPressPhoto?: Maybe<PressPhoto>;
  /** Create one pressReport */
  createPressReport?: Maybe<PressReport>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Create one shop */
  createShop?: Maybe<Shop>;
  /** Create one shopBundesland */
  createShopBundesland?: Maybe<ShopBundesland>;
  /** Create one shopCategory */
  createShopCategory?: Maybe<ShopCategory>;
  /** Create one shopStatus */
  createShopStatus?: Maybe<ShopStatus>;
  /** Create one shopTown */
  createShopTown?: Maybe<ShopTown>;
  /** Create one shopType */
  createShopType?: Maybe<ShopType>;
  /** Create one supporter */
  createSupporter?: Maybe<Supporter>;
  /** Create one translation */
  createTranslation?: Maybe<Translation>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one blog from _all_ existing stages. Returns deleted document. */
  deleteBlog?: Maybe<Blog>;
  /** Delete one cityPartner from _all_ existing stages. Returns deleted document. */
  deleteCityPartner?: Maybe<CityPartner>;
  /** Delete one faq from _all_ existing stages. Returns deleted document. */
  deleteFaq?: Maybe<Faq>;
  /** Delete one kpi from _all_ existing stages. Returns deleted document. */
  deleteKpi?: Maybe<Kpi>;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Blog documents
   * @deprecated Please use the new paginated many mutation (deleteManyBlogsConnection)
   */
  deleteManyBlogs: BatchPayload;
  /** Delete many Blog documents, return deleted documents */
  deleteManyBlogsConnection: BlogConnection;
  /**
   * Delete many CityPartner documents
   * @deprecated Please use the new paginated many mutation (deleteManyCityPartnersConnection)
   */
  deleteManyCityPartners: BatchPayload;
  /** Delete many CityPartner documents, return deleted documents */
  deleteManyCityPartnersConnection: CityPartnerConnection;
  /**
   * Delete many Faq documents
   * @deprecated Please use the new paginated many mutation (deleteManyFaqsConnection)
   */
  deleteManyFaqs: BatchPayload;
  /** Delete many Faq documents, return deleted documents */
  deleteManyFaqsConnection: FaqConnection;
  /**
   * Delete many Kpi documents
   * @deprecated Please use the new paginated many mutation (deleteManyKpisConnection)
   */
  deleteManyKpis: BatchPayload;
  /** Delete many Kpi documents, return deleted documents */
  deleteManyKpisConnection: KpiConnection;
  /**
   * Delete many Member documents
   * @deprecated Please use the new paginated many mutation (deleteManyMembersConnection)
   */
  deleteManyMembers: BatchPayload;
  /** Delete many Member documents, return deleted documents */
  deleteManyMembersConnection: MemberConnection;
  /**
   * Delete many Network documents
   * @deprecated Please use the new paginated many mutation (deleteManyNetworksConnection)
   */
  deleteManyNetworks: BatchPayload;
  /** Delete many Network documents, return deleted documents */
  deleteManyNetworksConnection: NetworkConnection;
  /**
   * Delete many PageSection documents
   * @deprecated Please use the new paginated many mutation (deleteManyPageSectionsConnection)
   */
  deleteManyPageSections: BatchPayload;
  /** Delete many PageSection documents, return deleted documents */
  deleteManyPageSectionsConnection: PageSectionConnection;
  /**
   * Delete many Page documents
   * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
   */
  deleteManyPages: BatchPayload;
  /** Delete many Page documents, return deleted documents */
  deleteManyPagesConnection: PageConnection;
  /**
   * Delete many PressArticle documents
   * @deprecated Please use the new paginated many mutation (deleteManyPressArticlesConnection)
   */
  deleteManyPressArticles: BatchPayload;
  /** Delete many PressArticle documents, return deleted documents */
  deleteManyPressArticlesConnection: PressArticleConnection;
  /**
   * Delete many PressPhoto documents
   * @deprecated Please use the new paginated many mutation (deleteManyPressPhotosConnection)
   */
  deleteManyPressPhotos: BatchPayload;
  /** Delete many PressPhoto documents, return deleted documents */
  deleteManyPressPhotosConnection: PressPhotoConnection;
  /**
   * Delete many PressReport documents
   * @deprecated Please use the new paginated many mutation (deleteManyPressReportsConnection)
   */
  deleteManyPressReports: BatchPayload;
  /** Delete many PressReport documents, return deleted documents */
  deleteManyPressReportsConnection: PressReportConnection;
  /**
   * Delete many ShopBundesland documents
   * @deprecated Please use the new paginated many mutation (deleteManyShopBundeslandsConnection)
   */
  deleteManyShopBundeslands: BatchPayload;
  /** Delete many ShopBundesland documents, return deleted documents */
  deleteManyShopBundeslandsConnection: ShopBundeslandConnection;
  /**
   * Delete many ShopCategory documents
   * @deprecated Please use the new paginated many mutation (deleteManyShopCategoriesConnection)
   */
  deleteManyShopCategories: BatchPayload;
  /** Delete many ShopCategory documents, return deleted documents */
  deleteManyShopCategoriesConnection: ShopCategoryConnection;
  /**
   * Delete many ShopStatus documents
   * @deprecated Please use the new paginated many mutation (deleteManyShopStatusesConnection)
   */
  deleteManyShopStatuses: BatchPayload;
  /** Delete many ShopStatus documents, return deleted documents */
  deleteManyShopStatusesConnection: ShopStatusConnection;
  /**
   * Delete many ShopTown documents
   * @deprecated Please use the new paginated many mutation (deleteManyShopTownsConnection)
   */
  deleteManyShopTowns: BatchPayload;
  /** Delete many ShopTown documents, return deleted documents */
  deleteManyShopTownsConnection: ShopTownConnection;
  /**
   * Delete many ShopType documents
   * @deprecated Please use the new paginated many mutation (deleteManyShopTypesConnection)
   */
  deleteManyShopTypes: BatchPayload;
  /** Delete many ShopType documents, return deleted documents */
  deleteManyShopTypesConnection: ShopTypeConnection;
  /**
   * Delete many Shop documents
   * @deprecated Please use the new paginated many mutation (deleteManyShopsConnection)
   */
  deleteManyShops: BatchPayload;
  /** Delete many Shop documents, return deleted documents */
  deleteManyShopsConnection: ShopConnection;
  /**
   * Delete many Supporter documents
   * @deprecated Please use the new paginated many mutation (deleteManySupportersConnection)
   */
  deleteManySupporters: BatchPayload;
  /** Delete many Supporter documents, return deleted documents */
  deleteManySupportersConnection: SupporterConnection;
  /**
   * Delete many Translation documents
   * @deprecated Please use the new paginated many mutation (deleteManyTranslationsConnection)
   */
  deleteManyTranslations: BatchPayload;
  /** Delete many Translation documents, return deleted documents */
  deleteManyTranslationsConnection: TranslationConnection;
  /** Delete one member from _all_ existing stages. Returns deleted document. */
  deleteMember?: Maybe<Member>;
  /** Delete one network from _all_ existing stages. Returns deleted document. */
  deleteNetwork?: Maybe<Network>;
  /** Delete one page from _all_ existing stages. Returns deleted document. */
  deletePage?: Maybe<Page>;
  /** Delete one pageSection from _all_ existing stages. Returns deleted document. */
  deletePageSection?: Maybe<PageSection>;
  /** Delete one pressArticle from _all_ existing stages. Returns deleted document. */
  deletePressArticle?: Maybe<PressArticle>;
  /** Delete one pressPhoto from _all_ existing stages. Returns deleted document. */
  deletePressPhoto?: Maybe<PressPhoto>;
  /** Delete one pressReport from _all_ existing stages. Returns deleted document. */
  deletePressReport?: Maybe<PressReport>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one shop from _all_ existing stages. Returns deleted document. */
  deleteShop?: Maybe<Shop>;
  /** Delete one shopBundesland from _all_ existing stages. Returns deleted document. */
  deleteShopBundesland?: Maybe<ShopBundesland>;
  /** Delete one shopCategory from _all_ existing stages. Returns deleted document. */
  deleteShopCategory?: Maybe<ShopCategory>;
  /** Delete one shopStatus from _all_ existing stages. Returns deleted document. */
  deleteShopStatus?: Maybe<ShopStatus>;
  /** Delete one shopTown from _all_ existing stages. Returns deleted document. */
  deleteShopTown?: Maybe<ShopTown>;
  /** Delete one shopType from _all_ existing stages. Returns deleted document. */
  deleteShopType?: Maybe<ShopType>;
  /** Delete one supporter from _all_ existing stages. Returns deleted document. */
  deleteSupporter?: Maybe<Supporter>;
  /** Delete one translation from _all_ existing stages. Returns deleted document. */
  deleteTranslation?: Maybe<Translation>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one blog */
  publishBlog?: Maybe<Blog>;
  /** Publish one cityPartner */
  publishCityPartner?: Maybe<CityPartner>;
  /** Publish one faq */
  publishFaq?: Maybe<Faq>;
  /** Publish one kpi */
  publishKpi?: Maybe<Kpi>;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Blog documents
   * @deprecated Please use the new paginated many mutation (publishManyBlogsConnection)
   */
  publishManyBlogs: BatchPayload;
  /** Publish many Blog documents */
  publishManyBlogsConnection: BlogConnection;
  /**
   * Publish many CityPartner documents
   * @deprecated Please use the new paginated many mutation (publishManyCityPartnersConnection)
   */
  publishManyCityPartners: BatchPayload;
  /** Publish many CityPartner documents */
  publishManyCityPartnersConnection: CityPartnerConnection;
  /**
   * Publish many Faq documents
   * @deprecated Please use the new paginated many mutation (publishManyFaqsConnection)
   */
  publishManyFaqs: BatchPayload;
  /** Publish many Faq documents */
  publishManyFaqsConnection: FaqConnection;
  /**
   * Publish many Kpi documents
   * @deprecated Please use the new paginated many mutation (publishManyKpisConnection)
   */
  publishManyKpis: BatchPayload;
  /** Publish many Kpi documents */
  publishManyKpisConnection: KpiConnection;
  /**
   * Publish many Member documents
   * @deprecated Please use the new paginated many mutation (publishManyMembersConnection)
   */
  publishManyMembers: BatchPayload;
  /** Publish many Member documents */
  publishManyMembersConnection: MemberConnection;
  /**
   * Publish many Network documents
   * @deprecated Please use the new paginated many mutation (publishManyNetworksConnection)
   */
  publishManyNetworks: BatchPayload;
  /** Publish many Network documents */
  publishManyNetworksConnection: NetworkConnection;
  /**
   * Publish many PageSection documents
   * @deprecated Please use the new paginated many mutation (publishManyPageSectionsConnection)
   */
  publishManyPageSections: BatchPayload;
  /** Publish many PageSection documents */
  publishManyPageSectionsConnection: PageSectionConnection;
  /**
   * Publish many Page documents
   * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
   */
  publishManyPages: BatchPayload;
  /** Publish many Page documents */
  publishManyPagesConnection: PageConnection;
  /**
   * Publish many PressArticle documents
   * @deprecated Please use the new paginated many mutation (publishManyPressArticlesConnection)
   */
  publishManyPressArticles: BatchPayload;
  /** Publish many PressArticle documents */
  publishManyPressArticlesConnection: PressArticleConnection;
  /**
   * Publish many PressPhoto documents
   * @deprecated Please use the new paginated many mutation (publishManyPressPhotosConnection)
   */
  publishManyPressPhotos: BatchPayload;
  /** Publish many PressPhoto documents */
  publishManyPressPhotosConnection: PressPhotoConnection;
  /**
   * Publish many PressReport documents
   * @deprecated Please use the new paginated many mutation (publishManyPressReportsConnection)
   */
  publishManyPressReports: BatchPayload;
  /** Publish many PressReport documents */
  publishManyPressReportsConnection: PressReportConnection;
  /**
   * Publish many ShopBundesland documents
   * @deprecated Please use the new paginated many mutation (publishManyShopBundeslandsConnection)
   */
  publishManyShopBundeslands: BatchPayload;
  /** Publish many ShopBundesland documents */
  publishManyShopBundeslandsConnection: ShopBundeslandConnection;
  /**
   * Publish many ShopCategory documents
   * @deprecated Please use the new paginated many mutation (publishManyShopCategoriesConnection)
   */
  publishManyShopCategories: BatchPayload;
  /** Publish many ShopCategory documents */
  publishManyShopCategoriesConnection: ShopCategoryConnection;
  /**
   * Publish many ShopStatus documents
   * @deprecated Please use the new paginated many mutation (publishManyShopStatusesConnection)
   */
  publishManyShopStatuses: BatchPayload;
  /** Publish many ShopStatus documents */
  publishManyShopStatusesConnection: ShopStatusConnection;
  /**
   * Publish many ShopTown documents
   * @deprecated Please use the new paginated many mutation (publishManyShopTownsConnection)
   */
  publishManyShopTowns: BatchPayload;
  /** Publish many ShopTown documents */
  publishManyShopTownsConnection: ShopTownConnection;
  /**
   * Publish many ShopType documents
   * @deprecated Please use the new paginated many mutation (publishManyShopTypesConnection)
   */
  publishManyShopTypes: BatchPayload;
  /** Publish many ShopType documents */
  publishManyShopTypesConnection: ShopTypeConnection;
  /**
   * Publish many Shop documents
   * @deprecated Please use the new paginated many mutation (publishManyShopsConnection)
   */
  publishManyShops: BatchPayload;
  /** Publish many Shop documents */
  publishManyShopsConnection: ShopConnection;
  /**
   * Publish many Supporter documents
   * @deprecated Please use the new paginated many mutation (publishManySupportersConnection)
   */
  publishManySupporters: BatchPayload;
  /** Publish many Supporter documents */
  publishManySupportersConnection: SupporterConnection;
  /**
   * Publish many Translation documents
   * @deprecated Please use the new paginated many mutation (publishManyTranslationsConnection)
   */
  publishManyTranslations: BatchPayload;
  /** Publish many Translation documents */
  publishManyTranslationsConnection: TranslationConnection;
  /** Publish one member */
  publishMember?: Maybe<Member>;
  /** Publish one network */
  publishNetwork?: Maybe<Network>;
  /** Publish one page */
  publishPage?: Maybe<Page>;
  /** Publish one pageSection */
  publishPageSection?: Maybe<PageSection>;
  /** Publish one pressArticle */
  publishPressArticle?: Maybe<PressArticle>;
  /** Publish one pressPhoto */
  publishPressPhoto?: Maybe<PressPhoto>;
  /** Publish one pressReport */
  publishPressReport?: Maybe<PressReport>;
  /** Publish one shop */
  publishShop?: Maybe<Shop>;
  /** Publish one shopBundesland */
  publishShopBundesland?: Maybe<ShopBundesland>;
  /** Publish one shopCategory */
  publishShopCategory?: Maybe<ShopCategory>;
  /** Publish one shopStatus */
  publishShopStatus?: Maybe<ShopStatus>;
  /** Publish one shopTown */
  publishShopTown?: Maybe<ShopTown>;
  /** Publish one shopType */
  publishShopType?: Maybe<ShopType>;
  /** Publish one supporter */
  publishSupporter?: Maybe<Supporter>;
  /** Publish one translation */
  publishTranslation?: Maybe<Translation>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one blog */
  schedulePublishBlog?: Maybe<Blog>;
  /** Schedule to publish one cityPartner */
  schedulePublishCityPartner?: Maybe<CityPartner>;
  /** Schedule to publish one faq */
  schedulePublishFaq?: Maybe<Faq>;
  /** Schedule to publish one kpi */
  schedulePublishKpi?: Maybe<Kpi>;
  /** Schedule to publish one member */
  schedulePublishMember?: Maybe<Member>;
  /** Schedule to publish one network */
  schedulePublishNetwork?: Maybe<Network>;
  /** Schedule to publish one page */
  schedulePublishPage?: Maybe<Page>;
  /** Schedule to publish one pageSection */
  schedulePublishPageSection?: Maybe<PageSection>;
  /** Schedule to publish one pressArticle */
  schedulePublishPressArticle?: Maybe<PressArticle>;
  /** Schedule to publish one pressPhoto */
  schedulePublishPressPhoto?: Maybe<PressPhoto>;
  /** Schedule to publish one pressReport */
  schedulePublishPressReport?: Maybe<PressReport>;
  /** Schedule to publish one shop */
  schedulePublishShop?: Maybe<Shop>;
  /** Schedule to publish one shopBundesland */
  schedulePublishShopBundesland?: Maybe<ShopBundesland>;
  /** Schedule to publish one shopCategory */
  schedulePublishShopCategory?: Maybe<ShopCategory>;
  /** Schedule to publish one shopStatus */
  schedulePublishShopStatus?: Maybe<ShopStatus>;
  /** Schedule to publish one shopTown */
  schedulePublishShopTown?: Maybe<ShopTown>;
  /** Schedule to publish one shopType */
  schedulePublishShopType?: Maybe<ShopType>;
  /** Schedule to publish one supporter */
  schedulePublishSupporter?: Maybe<Supporter>;
  /** Schedule to publish one translation */
  schedulePublishTranslation?: Maybe<Translation>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one blog from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishBlog?: Maybe<Blog>;
  /** Unpublish one cityPartner from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCityPartner?: Maybe<CityPartner>;
  /** Unpublish one faq from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishFaq?: Maybe<Faq>;
  /** Unpublish one kpi from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishKpi?: Maybe<Kpi>;
  /** Unpublish one member from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishMember?: Maybe<Member>;
  /** Unpublish one network from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishNetwork?: Maybe<Network>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPage?: Maybe<Page>;
  /** Unpublish one pageSection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPageSection?: Maybe<PageSection>;
  /** Unpublish one pressArticle from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPressArticle?: Maybe<PressArticle>;
  /** Unpublish one pressPhoto from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPressPhoto?: Maybe<PressPhoto>;
  /** Unpublish one pressReport from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishPressReport?: Maybe<PressReport>;
  /** Unpublish one shop from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishShop?: Maybe<Shop>;
  /** Unpublish one shopBundesland from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishShopBundesland?: Maybe<ShopBundesland>;
  /** Unpublish one shopCategory from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishShopCategory?: Maybe<ShopCategory>;
  /** Unpublish one shopStatus from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishShopStatus?: Maybe<ShopStatus>;
  /** Unpublish one shopTown from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishShopTown?: Maybe<ShopTown>;
  /** Unpublish one shopType from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishShopType?: Maybe<ShopType>;
  /** Unpublish one supporter from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishSupporter?: Maybe<Supporter>;
  /** Unpublish one translation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTranslation?: Maybe<Translation>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one blog from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishBlog?: Maybe<Blog>;
  /** Unpublish one cityPartner from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCityPartner?: Maybe<CityPartner>;
  /** Unpublish one faq from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishFaq?: Maybe<Faq>;
  /** Unpublish one kpi from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishKpi?: Maybe<Kpi>;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Blog documents
   * @deprecated Please use the new paginated many mutation (unpublishManyBlogsConnection)
   */
  unpublishManyBlogs: BatchPayload;
  /** Find many Blog documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyBlogsConnection: BlogConnection;
  /**
   * Unpublish many CityPartner documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCityPartnersConnection)
   */
  unpublishManyCityPartners: BatchPayload;
  /** Find many CityPartner documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCityPartnersConnection: CityPartnerConnection;
  /**
   * Unpublish many Faq documents
   * @deprecated Please use the new paginated many mutation (unpublishManyFaqsConnection)
   */
  unpublishManyFaqs: BatchPayload;
  /** Find many Faq documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyFaqsConnection: FaqConnection;
  /**
   * Unpublish many Kpi documents
   * @deprecated Please use the new paginated many mutation (unpublishManyKpisConnection)
   */
  unpublishManyKpis: BatchPayload;
  /** Find many Kpi documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyKpisConnection: KpiConnection;
  /**
   * Unpublish many Member documents
   * @deprecated Please use the new paginated many mutation (unpublishManyMembersConnection)
   */
  unpublishManyMembers: BatchPayload;
  /** Find many Member documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyMembersConnection: MemberConnection;
  /**
   * Unpublish many Network documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNetworksConnection)
   */
  unpublishManyNetworks: BatchPayload;
  /** Find many Network documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyNetworksConnection: NetworkConnection;
  /**
   * Unpublish many PageSection documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPageSectionsConnection)
   */
  unpublishManyPageSections: BatchPayload;
  /** Find many PageSection documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPageSectionsConnection: PageSectionConnection;
  /**
   * Unpublish many Page documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
   */
  unpublishManyPages: BatchPayload;
  /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPagesConnection: PageConnection;
  /**
   * Unpublish many PressArticle documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPressArticlesConnection)
   */
  unpublishManyPressArticles: BatchPayload;
  /** Find many PressArticle documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPressArticlesConnection: PressArticleConnection;
  /**
   * Unpublish many PressPhoto documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPressPhotosConnection)
   */
  unpublishManyPressPhotos: BatchPayload;
  /** Find many PressPhoto documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPressPhotosConnection: PressPhotoConnection;
  /**
   * Unpublish many PressReport documents
   * @deprecated Please use the new paginated many mutation (unpublishManyPressReportsConnection)
   */
  unpublishManyPressReports: BatchPayload;
  /** Find many PressReport documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyPressReportsConnection: PressReportConnection;
  /**
   * Unpublish many ShopBundesland documents
   * @deprecated Please use the new paginated many mutation (unpublishManyShopBundeslandsConnection)
   */
  unpublishManyShopBundeslands: BatchPayload;
  /** Find many ShopBundesland documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyShopBundeslandsConnection: ShopBundeslandConnection;
  /**
   * Unpublish many ShopCategory documents
   * @deprecated Please use the new paginated many mutation (unpublishManyShopCategoriesConnection)
   */
  unpublishManyShopCategories: BatchPayload;
  /** Find many ShopCategory documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyShopCategoriesConnection: ShopCategoryConnection;
  /**
   * Unpublish many ShopStatus documents
   * @deprecated Please use the new paginated many mutation (unpublishManyShopStatusesConnection)
   */
  unpublishManyShopStatuses: BatchPayload;
  /** Find many ShopStatus documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyShopStatusesConnection: ShopStatusConnection;
  /**
   * Unpublish many ShopTown documents
   * @deprecated Please use the new paginated many mutation (unpublishManyShopTownsConnection)
   */
  unpublishManyShopTowns: BatchPayload;
  /** Find many ShopTown documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyShopTownsConnection: ShopTownConnection;
  /**
   * Unpublish many ShopType documents
   * @deprecated Please use the new paginated many mutation (unpublishManyShopTypesConnection)
   */
  unpublishManyShopTypes: BatchPayload;
  /** Find many ShopType documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyShopTypesConnection: ShopTypeConnection;
  /**
   * Unpublish many Shop documents
   * @deprecated Please use the new paginated many mutation (unpublishManyShopsConnection)
   */
  unpublishManyShops: BatchPayload;
  /** Find many Shop documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyShopsConnection: ShopConnection;
  /**
   * Unpublish many Supporter documents
   * @deprecated Please use the new paginated many mutation (unpublishManySupportersConnection)
   */
  unpublishManySupporters: BatchPayload;
  /** Find many Supporter documents that match criteria in specified stage and unpublish from target stages */
  unpublishManySupportersConnection: SupporterConnection;
  /**
   * Unpublish many Translation documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTranslationsConnection)
   */
  unpublishManyTranslations: BatchPayload;
  /** Find many Translation documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTranslationsConnection: TranslationConnection;
  /** Unpublish one member from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishMember?: Maybe<Member>;
  /** Unpublish one network from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishNetwork?: Maybe<Network>;
  /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPage?: Maybe<Page>;
  /** Unpublish one pageSection from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPageSection?: Maybe<PageSection>;
  /** Unpublish one pressArticle from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPressArticle?: Maybe<PressArticle>;
  /** Unpublish one pressPhoto from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPressPhoto?: Maybe<PressPhoto>;
  /** Unpublish one pressReport from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishPressReport?: Maybe<PressReport>;
  /** Unpublish one shop from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishShop?: Maybe<Shop>;
  /** Unpublish one shopBundesland from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishShopBundesland?: Maybe<ShopBundesland>;
  /** Unpublish one shopCategory from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishShopCategory?: Maybe<ShopCategory>;
  /** Unpublish one shopStatus from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishShopStatus?: Maybe<ShopStatus>;
  /** Unpublish one shopTown from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishShopTown?: Maybe<ShopTown>;
  /** Unpublish one shopType from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishShopType?: Maybe<ShopType>;
  /** Unpublish one supporter from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishSupporter?: Maybe<Supporter>;
  /** Unpublish one translation from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTranslation?: Maybe<Translation>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one blog */
  updateBlog?: Maybe<Blog>;
  /** Update one cityPartner */
  updateCityPartner?: Maybe<CityPartner>;
  /** Update one faq */
  updateFaq?: Maybe<Faq>;
  /** Update one kpi */
  updateKpi?: Maybe<Kpi>;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many blogs
   * @deprecated Please use the new paginated many mutation (updateManyBlogsConnection)
   */
  updateManyBlogs: BatchPayload;
  /** Update many Blog documents */
  updateManyBlogsConnection: BlogConnection;
  /**
   * Update many cityPartners
   * @deprecated Please use the new paginated many mutation (updateManyCityPartnersConnection)
   */
  updateManyCityPartners: BatchPayload;
  /** Update many CityPartner documents */
  updateManyCityPartnersConnection: CityPartnerConnection;
  /**
   * Update many faqs
   * @deprecated Please use the new paginated many mutation (updateManyFaqsConnection)
   */
  updateManyFaqs: BatchPayload;
  /** Update many Faq documents */
  updateManyFaqsConnection: FaqConnection;
  /**
   * Update many kpis
   * @deprecated Please use the new paginated many mutation (updateManyKpisConnection)
   */
  updateManyKpis: BatchPayload;
  /** Update many Kpi documents */
  updateManyKpisConnection: KpiConnection;
  /**
   * Update many members
   * @deprecated Please use the new paginated many mutation (updateManyMembersConnection)
   */
  updateManyMembers: BatchPayload;
  /** Update many Member documents */
  updateManyMembersConnection: MemberConnection;
  /**
   * Update many networks
   * @deprecated Please use the new paginated many mutation (updateManyNetworksConnection)
   */
  updateManyNetworks: BatchPayload;
  /** Update many Network documents */
  updateManyNetworksConnection: NetworkConnection;
  /**
   * Update many pageSections
   * @deprecated Please use the new paginated many mutation (updateManyPageSectionsConnection)
   */
  updateManyPageSections: BatchPayload;
  /** Update many PageSection documents */
  updateManyPageSectionsConnection: PageSectionConnection;
  /**
   * Update many pages
   * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
   */
  updateManyPages: BatchPayload;
  /** Update many Page documents */
  updateManyPagesConnection: PageConnection;
  /**
   * Update many pressArticles
   * @deprecated Please use the new paginated many mutation (updateManyPressArticlesConnection)
   */
  updateManyPressArticles: BatchPayload;
  /** Update many PressArticle documents */
  updateManyPressArticlesConnection: PressArticleConnection;
  /**
   * Update many pressPhotos
   * @deprecated Please use the new paginated many mutation (updateManyPressPhotosConnection)
   */
  updateManyPressPhotos: BatchPayload;
  /** Update many PressPhoto documents */
  updateManyPressPhotosConnection: PressPhotoConnection;
  /**
   * Update many pressReports
   * @deprecated Please use the new paginated many mutation (updateManyPressReportsConnection)
   */
  updateManyPressReports: BatchPayload;
  /** Update many PressReport documents */
  updateManyPressReportsConnection: PressReportConnection;
  /**
   * Update many shopBundeslands
   * @deprecated Please use the new paginated many mutation (updateManyShopBundeslandsConnection)
   */
  updateManyShopBundeslands: BatchPayload;
  /** Update many ShopBundesland documents */
  updateManyShopBundeslandsConnection: ShopBundeslandConnection;
  /**
   * Update many shopCategories
   * @deprecated Please use the new paginated many mutation (updateManyShopCategoriesConnection)
   */
  updateManyShopCategories: BatchPayload;
  /** Update many ShopCategory documents */
  updateManyShopCategoriesConnection: ShopCategoryConnection;
  /**
   * Update many shopStatuses
   * @deprecated Please use the new paginated many mutation (updateManyShopStatusesConnection)
   */
  updateManyShopStatuses: BatchPayload;
  /** Update many ShopStatus documents */
  updateManyShopStatusesConnection: ShopStatusConnection;
  /**
   * Update many shopTowns
   * @deprecated Please use the new paginated many mutation (updateManyShopTownsConnection)
   */
  updateManyShopTowns: BatchPayload;
  /** Update many ShopTown documents */
  updateManyShopTownsConnection: ShopTownConnection;
  /**
   * Update many shopTypes
   * @deprecated Please use the new paginated many mutation (updateManyShopTypesConnection)
   */
  updateManyShopTypes: BatchPayload;
  /** Update many ShopType documents */
  updateManyShopTypesConnection: ShopTypeConnection;
  /**
   * Update many shops
   * @deprecated Please use the new paginated many mutation (updateManyShopsConnection)
   */
  updateManyShops: BatchPayload;
  /** Update many Shop documents */
  updateManyShopsConnection: ShopConnection;
  /**
   * Update many supporters
   * @deprecated Please use the new paginated many mutation (updateManySupportersConnection)
   */
  updateManySupporters: BatchPayload;
  /** Update many Supporter documents */
  updateManySupportersConnection: SupporterConnection;
  /**
   * Update many translations
   * @deprecated Please use the new paginated many mutation (updateManyTranslationsConnection)
   */
  updateManyTranslations: BatchPayload;
  /** Update many Translation documents */
  updateManyTranslationsConnection: TranslationConnection;
  /** Update one member */
  updateMember?: Maybe<Member>;
  /** Update one network */
  updateNetwork?: Maybe<Network>;
  /** Update one page */
  updatePage?: Maybe<Page>;
  /** Update one pageSection */
  updatePageSection?: Maybe<PageSection>;
  /** Update one pressArticle */
  updatePressArticle?: Maybe<PressArticle>;
  /** Update one pressPhoto */
  updatePressPhoto?: Maybe<PressPhoto>;
  /** Update one pressReport */
  updatePressReport?: Maybe<PressReport>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Update one shop */
  updateShop?: Maybe<Shop>;
  /** Update one shopBundesland */
  updateShopBundesland?: Maybe<ShopBundesland>;
  /** Update one shopCategory */
  updateShopCategory?: Maybe<ShopCategory>;
  /** Update one shopStatus */
  updateShopStatus?: Maybe<ShopStatus>;
  /** Update one shopTown */
  updateShopTown?: Maybe<ShopTown>;
  /** Update one shopType */
  updateShopType?: Maybe<ShopType>;
  /** Update one supporter */
  updateSupporter?: Maybe<Supporter>;
  /** Update one translation */
  updateTranslation?: Maybe<Translation>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one blog */
  upsertBlog?: Maybe<Blog>;
  /** Upsert one cityPartner */
  upsertCityPartner?: Maybe<CityPartner>;
  /** Upsert one faq */
  upsertFaq?: Maybe<Faq>;
  /** Upsert one kpi */
  upsertKpi?: Maybe<Kpi>;
  /** Upsert one member */
  upsertMember?: Maybe<Member>;
  /** Upsert one network */
  upsertNetwork?: Maybe<Network>;
  /** Upsert one page */
  upsertPage?: Maybe<Page>;
  /** Upsert one pageSection */
  upsertPageSection?: Maybe<PageSection>;
  /** Upsert one pressArticle */
  upsertPressArticle?: Maybe<PressArticle>;
  /** Upsert one pressPhoto */
  upsertPressPhoto?: Maybe<PressPhoto>;
  /** Upsert one pressReport */
  upsertPressReport?: Maybe<PressReport>;
  /** Upsert one shop */
  upsertShop?: Maybe<Shop>;
  /** Upsert one shopBundesland */
  upsertShopBundesland?: Maybe<ShopBundesland>;
  /** Upsert one shopCategory */
  upsertShopCategory?: Maybe<ShopCategory>;
  /** Upsert one shopStatus */
  upsertShopStatus?: Maybe<ShopStatus>;
  /** Upsert one shopTown */
  upsertShopTown?: Maybe<ShopTown>;
  /** Upsert one shopType */
  upsertShopType?: Maybe<ShopType>;
  /** Upsert one supporter */
  upsertSupporter?: Maybe<Supporter>;
  /** Upsert one translation */
  upsertTranslation?: Maybe<Translation>;
};


export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};


export type MutationCreateBlogArgs = {
  data: BlogCreateInput;
};


export type MutationCreateCityPartnerArgs = {
  data: CityPartnerCreateInput;
};


export type MutationCreateFaqArgs = {
  data: FaqCreateInput;
};


export type MutationCreateKpiArgs = {
  data: KpiCreateInput;
};


export type MutationCreateMemberArgs = {
  data: MemberCreateInput;
};


export type MutationCreateNetworkArgs = {
  data: NetworkCreateInput;
};


export type MutationCreatePageArgs = {
  data: PageCreateInput;
};


export type MutationCreatePageSectionArgs = {
  data: PageSectionCreateInput;
};


export type MutationCreatePressArticleArgs = {
  data: PressArticleCreateInput;
};


export type MutationCreatePressPhotoArgs = {
  data: PressPhotoCreateInput;
};


export type MutationCreatePressReportArgs = {
  data: PressReportCreateInput;
};


export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};


export type MutationCreateShopArgs = {
  data: ShopCreateInput;
};


export type MutationCreateShopBundeslandArgs = {
  data: ShopBundeslandCreateInput;
};


export type MutationCreateShopCategoryArgs = {
  data: ShopCategoryCreateInput;
};


export type MutationCreateShopStatusArgs = {
  data: ShopStatusCreateInput;
};


export type MutationCreateShopTownArgs = {
  data: ShopTownCreateInput;
};


export type MutationCreateShopTypeArgs = {
  data: ShopTypeCreateInput;
};


export type MutationCreateSupporterArgs = {
  data: SupporterCreateInput;
};


export type MutationCreateTranslationArgs = {
  data: TranslationCreateInput;
};


export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};


export type MutationDeleteBlogArgs = {
  where: BlogWhereUniqueInput;
};


export type MutationDeleteCityPartnerArgs = {
  where: CityPartnerWhereUniqueInput;
};


export type MutationDeleteFaqArgs = {
  where: FaqWhereUniqueInput;
};


export type MutationDeleteKpiArgs = {
  where: KpiWhereUniqueInput;
};


export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationDeleteManyBlogsArgs = {
  where?: InputMaybe<BlogManyWhereInput>;
};


export type MutationDeleteManyBlogsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogManyWhereInput>;
};


export type MutationDeleteManyCityPartnersArgs = {
  where?: InputMaybe<CityPartnerManyWhereInput>;
};


export type MutationDeleteManyCityPartnersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CityPartnerManyWhereInput>;
};


export type MutationDeleteManyFaqsArgs = {
  where?: InputMaybe<FaqManyWhereInput>;
};


export type MutationDeleteManyFaqsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FaqManyWhereInput>;
};


export type MutationDeleteManyKpisArgs = {
  where?: InputMaybe<KpiManyWhereInput>;
};


export type MutationDeleteManyKpisConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<KpiManyWhereInput>;
};


export type MutationDeleteManyMembersArgs = {
  where?: InputMaybe<MemberManyWhereInput>;
};


export type MutationDeleteManyMembersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MemberManyWhereInput>;
};


export type MutationDeleteManyNetworksArgs = {
  where?: InputMaybe<NetworkManyWhereInput>;
};


export type MutationDeleteManyNetworksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NetworkManyWhereInput>;
};


export type MutationDeleteManyPageSectionsArgs = {
  where?: InputMaybe<PageSectionManyWhereInput>;
};


export type MutationDeleteManyPageSectionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageSectionManyWhereInput>;
};


export type MutationDeleteManyPagesArgs = {
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationDeleteManyPressArticlesArgs = {
  where?: InputMaybe<PressArticleManyWhereInput>;
};


export type MutationDeleteManyPressArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PressArticleManyWhereInput>;
};


export type MutationDeleteManyPressPhotosArgs = {
  where?: InputMaybe<PressPhotoManyWhereInput>;
};


export type MutationDeleteManyPressPhotosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PressPhotoManyWhereInput>;
};


export type MutationDeleteManyPressReportsArgs = {
  where?: InputMaybe<PressReportManyWhereInput>;
};


export type MutationDeleteManyPressReportsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PressReportManyWhereInput>;
};


export type MutationDeleteManyShopBundeslandsArgs = {
  where?: InputMaybe<ShopBundeslandManyWhereInput>;
};


export type MutationDeleteManyShopBundeslandsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShopBundeslandManyWhereInput>;
};


export type MutationDeleteManyShopCategoriesArgs = {
  where?: InputMaybe<ShopCategoryManyWhereInput>;
};


export type MutationDeleteManyShopCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShopCategoryManyWhereInput>;
};


export type MutationDeleteManyShopStatusesArgs = {
  where?: InputMaybe<ShopStatusManyWhereInput>;
};


export type MutationDeleteManyShopStatusesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShopStatusManyWhereInput>;
};


export type MutationDeleteManyShopTownsArgs = {
  where?: InputMaybe<ShopTownManyWhereInput>;
};


export type MutationDeleteManyShopTownsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShopTownManyWhereInput>;
};


export type MutationDeleteManyShopTypesArgs = {
  where?: InputMaybe<ShopTypeManyWhereInput>;
};


export type MutationDeleteManyShopTypesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShopTypeManyWhereInput>;
};


export type MutationDeleteManyShopsArgs = {
  where?: InputMaybe<ShopManyWhereInput>;
};


export type MutationDeleteManyShopsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShopManyWhereInput>;
};


export type MutationDeleteManySupportersArgs = {
  where?: InputMaybe<SupporterManyWhereInput>;
};


export type MutationDeleteManySupportersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SupporterManyWhereInput>;
};


export type MutationDeleteManyTranslationsArgs = {
  where?: InputMaybe<TranslationManyWhereInput>;
};


export type MutationDeleteManyTranslationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TranslationManyWhereInput>;
};


export type MutationDeleteMemberArgs = {
  where: MemberWhereUniqueInput;
};


export type MutationDeleteNetworkArgs = {
  where: NetworkWhereUniqueInput;
};


export type MutationDeletePageArgs = {
  where: PageWhereUniqueInput;
};


export type MutationDeletePageSectionArgs = {
  where: PageSectionWhereUniqueInput;
};


export type MutationDeletePressArticleArgs = {
  where: PressArticleWhereUniqueInput;
};


export type MutationDeletePressPhotoArgs = {
  where: PressPhotoWhereUniqueInput;
};


export type MutationDeletePressReportArgs = {
  where: PressReportWhereUniqueInput;
};


export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};


export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationDeleteShopArgs = {
  where: ShopWhereUniqueInput;
};


export type MutationDeleteShopBundeslandArgs = {
  where: ShopBundeslandWhereUniqueInput;
};


export type MutationDeleteShopCategoryArgs = {
  where: ShopCategoryWhereUniqueInput;
};


export type MutationDeleteShopStatusArgs = {
  where: ShopStatusWhereUniqueInput;
};


export type MutationDeleteShopTownArgs = {
  where: ShopTownWhereUniqueInput;
};


export type MutationDeleteShopTypeArgs = {
  where: ShopTypeWhereUniqueInput;
};


export type MutationDeleteSupporterArgs = {
  where: SupporterWhereUniqueInput;
};


export type MutationDeleteTranslationArgs = {
  where: TranslationWhereUniqueInput;
};


export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishBlogArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: BlogWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishCityPartnerArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: CityPartnerWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishFaqArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: FaqWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishKpiArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: KpiWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyBlogsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<BlogManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyBlogsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<BlogManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyCityPartnersArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<CityPartnerManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyCityPartnersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<CityPartnerManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyFaqsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<FaqManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyFaqsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<FaqManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyKpisArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<KpiManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyKpisConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<KpiManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyMembersArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<MemberManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyMembersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<MemberManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyNetworksArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<NetworkManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyNetworksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<NetworkManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyPageSectionsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<PageSectionManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyPageSectionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<PageSectionManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyPagesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<PageManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyPressArticlesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<PressArticleManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyPressArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<PressArticleManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyPressPhotosArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<PressPhotoManyWhereInput>;
};


export type MutationPublishManyPressPhotosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<PressPhotoManyWhereInput>;
};


export type MutationPublishManyPressReportsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<PressReportManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyPressReportsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<PressReportManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyShopBundeslandsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ShopBundeslandManyWhereInput>;
};


export type MutationPublishManyShopBundeslandsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ShopBundeslandManyWhereInput>;
};


export type MutationPublishManyShopCategoriesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<ShopCategoryManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyShopCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ShopCategoryManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyShopStatusesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<ShopStatusManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyShopStatusesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ShopStatusManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyShopTownsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<ShopTownManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyShopTownsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ShopTownManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyShopTypesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<ShopTypeManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyShopTypesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ShopTypeManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyShopsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ShopManyWhereInput>;
};


export type MutationPublishManyShopsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<ShopManyWhereInput>;
};


export type MutationPublishManySupportersArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<SupporterManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManySupportersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<SupporterManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyTranslationsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where?: InputMaybe<TranslationManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishManyTranslationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  to?: Array<Stage>;
  where?: InputMaybe<TranslationManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishMemberArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: MemberWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishNetworkArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: NetworkWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishPageSectionArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: PageSectionWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishPressArticleArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: PressArticleWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishPressPhotoArgs = {
  to?: Array<Stage>;
  where: PressPhotoWhereUniqueInput;
};


export type MutationPublishPressReportArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: PressReportWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishShopArgs = {
  to?: Array<Stage>;
  where: ShopWhereUniqueInput;
};


export type MutationPublishShopBundeslandArgs = {
  to?: Array<Stage>;
  where: ShopBundeslandWhereUniqueInput;
};


export type MutationPublishShopCategoryArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: ShopCategoryWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishShopStatusArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: ShopStatusWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishShopTownArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: ShopTownWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishShopTypeArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: ShopTypeWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishSupporterArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: SupporterWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationPublishTranslationArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  to?: Array<Stage>;
  where: TranslationWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishBlogArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: BlogWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishCityPartnerArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: CityPartnerWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishFaqArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: FaqWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishKpiArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: KpiWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishMemberArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: MemberWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishNetworkArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: NetworkWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PageWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishPageSectionArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PageSectionWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishPressArticleArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PressArticleWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishPressPhotoArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PressPhotoWhereUniqueInput;
};


export type MutationSchedulePublishPressReportArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: PressReportWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishShopArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ShopWhereUniqueInput;
};


export type MutationSchedulePublishShopBundeslandArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ShopBundeslandWhereUniqueInput;
};


export type MutationSchedulePublishShopCategoryArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ShopCategoryWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishShopStatusArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ShopStatusWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishShopTownArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ShopTownWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishShopTypeArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: ShopTypeWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishSupporterArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: SupporterWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSchedulePublishTranslationArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  to?: Array<Stage>;
  where: TranslationWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars['Boolean']>;
};


export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationScheduleUnpublishBlogArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: BlogWhereUniqueInput;
};


export type MutationScheduleUnpublishCityPartnerArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: CityPartnerWhereUniqueInput;
};


export type MutationScheduleUnpublishFaqArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: FaqWhereUniqueInput;
};


export type MutationScheduleUnpublishKpiArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: KpiWhereUniqueInput;
};


export type MutationScheduleUnpublishMemberArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: MemberWhereUniqueInput;
};


export type MutationScheduleUnpublishNetworkArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: NetworkWhereUniqueInput;
};


export type MutationScheduleUnpublishPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: PageWhereUniqueInput;
};


export type MutationScheduleUnpublishPageSectionArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: PageSectionWhereUniqueInput;
};


export type MutationScheduleUnpublishPressArticleArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: PressArticleWhereUniqueInput;
};


export type MutationScheduleUnpublishPressPhotoArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: PressPhotoWhereUniqueInput;
};


export type MutationScheduleUnpublishPressReportArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: PressReportWhereUniqueInput;
};


export type MutationScheduleUnpublishShopArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ShopWhereUniqueInput;
};


export type MutationScheduleUnpublishShopBundeslandArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  where: ShopBundeslandWhereUniqueInput;
};


export type MutationScheduleUnpublishShopCategoryArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: ShopCategoryWhereUniqueInput;
};


export type MutationScheduleUnpublishShopStatusArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: ShopStatusWhereUniqueInput;
};


export type MutationScheduleUnpublishShopTownArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: ShopTownWhereUniqueInput;
};


export type MutationScheduleUnpublishShopTypeArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: ShopTypeWhereUniqueInput;
};


export type MutationScheduleUnpublishSupporterArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: SupporterWhereUniqueInput;
};


export type MutationScheduleUnpublishTranslationArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  releaseId?: InputMaybe<Scalars['String']>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: TranslationWhereUniqueInput;
};


export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: AssetWhereUniqueInput;
};


export type MutationUnpublishBlogArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: BlogWhereUniqueInput;
};


export type MutationUnpublishCityPartnerArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: CityPartnerWhereUniqueInput;
};


export type MutationUnpublishFaqArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: FaqWhereUniqueInput;
};


export type MutationUnpublishKpiArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: KpiWhereUniqueInput;
};


export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUnpublishManyBlogsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<BlogManyWhereInput>;
};


export type MutationUnpublishManyBlogsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<BlogManyWhereInput>;
};


export type MutationUnpublishManyCityPartnersArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CityPartnerManyWhereInput>;
};


export type MutationUnpublishManyCityPartnersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<CityPartnerManyWhereInput>;
};


export type MutationUnpublishManyFaqsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<FaqManyWhereInput>;
};


export type MutationUnpublishManyFaqsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<FaqManyWhereInput>;
};


export type MutationUnpublishManyKpisArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<KpiManyWhereInput>;
};


export type MutationUnpublishManyKpisConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<KpiManyWhereInput>;
};


export type MutationUnpublishManyMembersArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MemberManyWhereInput>;
};


export type MutationUnpublishManyMembersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MemberManyWhereInput>;
};


export type MutationUnpublishManyNetworksArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NetworkManyWhereInput>;
};


export type MutationUnpublishManyNetworksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<NetworkManyWhereInput>;
};


export type MutationUnpublishManyPageSectionsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageSectionManyWhereInput>;
};


export type MutationUnpublishManyPageSectionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageSectionManyWhereInput>;
};


export type MutationUnpublishManyPagesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUnpublishManyPressArticlesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PressArticleManyWhereInput>;
};


export type MutationUnpublishManyPressArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PressArticleManyWhereInput>;
};


export type MutationUnpublishManyPressPhotosArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<PressPhotoManyWhereInput>;
};


export type MutationUnpublishManyPressPhotosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<PressPhotoManyWhereInput>;
};


export type MutationUnpublishManyPressReportsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PressReportManyWhereInput>;
};


export type MutationUnpublishManyPressReportsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<PressReportManyWhereInput>;
};


export type MutationUnpublishManyShopBundeslandsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ShopBundeslandManyWhereInput>;
};


export type MutationUnpublishManyShopBundeslandsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ShopBundeslandManyWhereInput>;
};


export type MutationUnpublishManyShopCategoriesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ShopCategoryManyWhereInput>;
};


export type MutationUnpublishManyShopCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ShopCategoryManyWhereInput>;
};


export type MutationUnpublishManyShopStatusesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ShopStatusManyWhereInput>;
};


export type MutationUnpublishManyShopStatusesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ShopStatusManyWhereInput>;
};


export type MutationUnpublishManyShopTownsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ShopTownManyWhereInput>;
};


export type MutationUnpublishManyShopTownsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ShopTownManyWhereInput>;
};


export type MutationUnpublishManyShopTypesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ShopTypeManyWhereInput>;
};


export type MutationUnpublishManyShopTypesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<ShopTypeManyWhereInput>;
};


export type MutationUnpublishManyShopsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ShopManyWhereInput>;
};


export type MutationUnpublishManyShopsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ShopManyWhereInput>;
};


export type MutationUnpublishManySupportersArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<SupporterManyWhereInput>;
};


export type MutationUnpublishManySupportersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<SupporterManyWhereInput>;
};


export type MutationUnpublishManyTranslationsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TranslationManyWhereInput>;
};


export type MutationUnpublishManyTranslationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  first?: InputMaybe<Scalars['Int']>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TranslationManyWhereInput>;
};


export type MutationUnpublishMemberArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: MemberWhereUniqueInput;
};


export type MutationUnpublishNetworkArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: NetworkWhereUniqueInput;
};


export type MutationUnpublishPageArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: PageWhereUniqueInput;
};


export type MutationUnpublishPageSectionArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: PageSectionWhereUniqueInput;
};


export type MutationUnpublishPressArticleArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: PressArticleWhereUniqueInput;
};


export type MutationUnpublishPressPhotoArgs = {
  from?: Array<Stage>;
  where: PressPhotoWhereUniqueInput;
};


export type MutationUnpublishPressReportArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: PressReportWhereUniqueInput;
};


export type MutationUnpublishShopArgs = {
  from?: Array<Stage>;
  where: ShopWhereUniqueInput;
};


export type MutationUnpublishShopBundeslandArgs = {
  from?: Array<Stage>;
  where: ShopBundeslandWhereUniqueInput;
};


export type MutationUnpublishShopCategoryArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: ShopCategoryWhereUniqueInput;
};


export type MutationUnpublishShopStatusArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: ShopStatusWhereUniqueInput;
};


export type MutationUnpublishShopTownArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: ShopTownWhereUniqueInput;
};


export type MutationUnpublishShopTypeArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: ShopTypeWhereUniqueInput;
};


export type MutationUnpublishSupporterArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: SupporterWhereUniqueInput;
};


export type MutationUnpublishTranslationArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars['Boolean']>;
  where: TranslationWhereUniqueInput;
};


export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpdateBlogArgs = {
  data: BlogUpdateInput;
  where: BlogWhereUniqueInput;
};


export type MutationUpdateCityPartnerArgs = {
  data: CityPartnerUpdateInput;
  where: CityPartnerWhereUniqueInput;
};


export type MutationUpdateFaqArgs = {
  data: FaqUpdateInput;
  where: FaqWhereUniqueInput;
};


export type MutationUpdateKpiArgs = {
  data: KpiUpdateInput;
  where: KpiWhereUniqueInput;
};


export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetManyWhereInput>;
};


export type MutationUpdateManyBlogsArgs = {
  data: BlogUpdateManyInput;
  where?: InputMaybe<BlogManyWhereInput>;
};


export type MutationUpdateManyBlogsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: BlogUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<BlogManyWhereInput>;
};


export type MutationUpdateManyCityPartnersArgs = {
  data: CityPartnerUpdateManyInput;
  where?: InputMaybe<CityPartnerManyWhereInput>;
};


export type MutationUpdateManyCityPartnersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: CityPartnerUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CityPartnerManyWhereInput>;
};


export type MutationUpdateManyFaqsArgs = {
  data: FaqUpdateManyInput;
  where?: InputMaybe<FaqManyWhereInput>;
};


export type MutationUpdateManyFaqsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: FaqUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FaqManyWhereInput>;
};


export type MutationUpdateManyKpisArgs = {
  data: KpiUpdateManyInput;
  where?: InputMaybe<KpiManyWhereInput>;
};


export type MutationUpdateManyKpisConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: KpiUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<KpiManyWhereInput>;
};


export type MutationUpdateManyMembersArgs = {
  data: MemberUpdateManyInput;
  where?: InputMaybe<MemberManyWhereInput>;
};


export type MutationUpdateManyMembersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: MemberUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MemberManyWhereInput>;
};


export type MutationUpdateManyNetworksArgs = {
  data: NetworkUpdateManyInput;
  where?: InputMaybe<NetworkManyWhereInput>;
};


export type MutationUpdateManyNetworksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: NetworkUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NetworkManyWhereInput>;
};


export type MutationUpdateManyPageSectionsArgs = {
  data: PageSectionUpdateManyInput;
  where?: InputMaybe<PageSectionManyWhereInput>;
};


export type MutationUpdateManyPageSectionsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: PageSectionUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageSectionManyWhereInput>;
};


export type MutationUpdateManyPagesArgs = {
  data: PageUpdateManyInput;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateManyPagesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: PageUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageManyWhereInput>;
};


export type MutationUpdateManyPressArticlesArgs = {
  data: PressArticleUpdateManyInput;
  where?: InputMaybe<PressArticleManyWhereInput>;
};


export type MutationUpdateManyPressArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: PressArticleUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PressArticleManyWhereInput>;
};


export type MutationUpdateManyPressPhotosArgs = {
  data: PressPhotoUpdateManyInput;
  where?: InputMaybe<PressPhotoManyWhereInput>;
};


export type MutationUpdateManyPressPhotosConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: PressPhotoUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PressPhotoManyWhereInput>;
};


export type MutationUpdateManyPressReportsArgs = {
  data: PressReportUpdateManyInput;
  where?: InputMaybe<PressReportManyWhereInput>;
};


export type MutationUpdateManyPressReportsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: PressReportUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PressReportManyWhereInput>;
};


export type MutationUpdateManyShopBundeslandsArgs = {
  data: ShopBundeslandUpdateManyInput;
  where?: InputMaybe<ShopBundeslandManyWhereInput>;
};


export type MutationUpdateManyShopBundeslandsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ShopBundeslandUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShopBundeslandManyWhereInput>;
};


export type MutationUpdateManyShopCategoriesArgs = {
  data: ShopCategoryUpdateManyInput;
  where?: InputMaybe<ShopCategoryManyWhereInput>;
};


export type MutationUpdateManyShopCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ShopCategoryUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShopCategoryManyWhereInput>;
};


export type MutationUpdateManyShopStatusesArgs = {
  data: ShopStatusUpdateManyInput;
  where?: InputMaybe<ShopStatusManyWhereInput>;
};


export type MutationUpdateManyShopStatusesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ShopStatusUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShopStatusManyWhereInput>;
};


export type MutationUpdateManyShopTownsArgs = {
  data: ShopTownUpdateManyInput;
  where?: InputMaybe<ShopTownManyWhereInput>;
};


export type MutationUpdateManyShopTownsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ShopTownUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShopTownManyWhereInput>;
};


export type MutationUpdateManyShopTypesArgs = {
  data: ShopTypeUpdateManyInput;
  where?: InputMaybe<ShopTypeManyWhereInput>;
};


export type MutationUpdateManyShopTypesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ShopTypeUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShopTypeManyWhereInput>;
};


export type MutationUpdateManyShopsArgs = {
  data: ShopUpdateManyInput;
  where?: InputMaybe<ShopManyWhereInput>;
};


export type MutationUpdateManyShopsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: ShopUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShopManyWhereInput>;
};


export type MutationUpdateManySupportersArgs = {
  data: SupporterUpdateManyInput;
  where?: InputMaybe<SupporterManyWhereInput>;
};


export type MutationUpdateManySupportersConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: SupporterUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SupporterManyWhereInput>;
};


export type MutationUpdateManyTranslationsArgs = {
  data: TranslationUpdateManyInput;
  where?: InputMaybe<TranslationManyWhereInput>;
};


export type MutationUpdateManyTranslationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']>;
  before?: InputMaybe<Scalars['ID']>;
  data: TranslationUpdateManyInput;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TranslationManyWhereInput>;
};


export type MutationUpdateMemberArgs = {
  data: MemberUpdateInput;
  where: MemberWhereUniqueInput;
};


export type MutationUpdateNetworkArgs = {
  data: NetworkUpdateInput;
  where: NetworkWhereUniqueInput;
};


export type MutationUpdatePageArgs = {
  data: PageUpdateInput;
  where: PageWhereUniqueInput;
};


export type MutationUpdatePageSectionArgs = {
  data: PageSectionUpdateInput;
  where: PageSectionWhereUniqueInput;
};


export type MutationUpdatePressArticleArgs = {
  data: PressArticleUpdateInput;
  where: PressArticleWhereUniqueInput;
};


export type MutationUpdatePressPhotoArgs = {
  data: PressPhotoUpdateInput;
  where: PressPhotoWhereUniqueInput;
};


export type MutationUpdatePressReportArgs = {
  data: PressReportUpdateInput;
  where: PressReportWhereUniqueInput;
};


export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};


export type MutationUpdateShopArgs = {
  data: ShopUpdateInput;
  where: ShopWhereUniqueInput;
};


export type MutationUpdateShopBundeslandArgs = {
  data: ShopBundeslandUpdateInput;
  where: ShopBundeslandWhereUniqueInput;
};


export type MutationUpdateShopCategoryArgs = {
  data: ShopCategoryUpdateInput;
  where: ShopCategoryWhereUniqueInput;
};


export type MutationUpdateShopStatusArgs = {
  data: ShopStatusUpdateInput;
  where: ShopStatusWhereUniqueInput;
};


export type MutationUpdateShopTownArgs = {
  data: ShopTownUpdateInput;
  where: ShopTownWhereUniqueInput;
};


export type MutationUpdateShopTypeArgs = {
  data: ShopTypeUpdateInput;
  where: ShopTypeWhereUniqueInput;
};


export type MutationUpdateSupporterArgs = {
  data: SupporterUpdateInput;
  where: SupporterWhereUniqueInput;
};


export type MutationUpdateTranslationArgs = {
  data: TranslationUpdateInput;
  where: TranslationWhereUniqueInput;
};


export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};


export type MutationUpsertBlogArgs = {
  upsert: BlogUpsertInput;
  where: BlogWhereUniqueInput;
};


export type MutationUpsertCityPartnerArgs = {
  upsert: CityPartnerUpsertInput;
  where: CityPartnerWhereUniqueInput;
};


export type MutationUpsertFaqArgs = {
  upsert: FaqUpsertInput;
  where: FaqWhereUniqueInput;
};


export type MutationUpsertKpiArgs = {
  upsert: KpiUpsertInput;
  where: KpiWhereUniqueInput;
};


export type MutationUpsertMemberArgs = {
  upsert: MemberUpsertInput;
  where: MemberWhereUniqueInput;
};


export type MutationUpsertNetworkArgs = {
  upsert: NetworkUpsertInput;
  where: NetworkWhereUniqueInput;
};


export type MutationUpsertPageArgs = {
  upsert: PageUpsertInput;
  where: PageWhereUniqueInput;
};


export type MutationUpsertPageSectionArgs = {
  upsert: PageSectionUpsertInput;
  where: PageSectionWhereUniqueInput;
};


export type MutationUpsertPressArticleArgs = {
  upsert: PressArticleUpsertInput;
  where: PressArticleWhereUniqueInput;
};


export type MutationUpsertPressPhotoArgs = {
  upsert: PressPhotoUpsertInput;
  where: PressPhotoWhereUniqueInput;
};


export type MutationUpsertPressReportArgs = {
  upsert: PressReportUpsertInput;
  where: PressReportWhereUniqueInput;
};


export type MutationUpsertShopArgs = {
  upsert: ShopUpsertInput;
  where: ShopWhereUniqueInput;
};


export type MutationUpsertShopBundeslandArgs = {
  upsert: ShopBundeslandUpsertInput;
  where: ShopBundeslandWhereUniqueInput;
};


export type MutationUpsertShopCategoryArgs = {
  upsert: ShopCategoryUpsertInput;
  where: ShopCategoryWhereUniqueInput;
};


export type MutationUpsertShopStatusArgs = {
  upsert: ShopStatusUpsertInput;
  where: ShopStatusWhereUniqueInput;
};


export type MutationUpsertShopTownArgs = {
  upsert: ShopTownUpsertInput;
  where: ShopTownWhereUniqueInput;
};


export type MutationUpsertShopTypeArgs = {
  upsert: ShopTypeUpsertInput;
  where: ShopTypeWhereUniqueInput;
};


export type MutationUpsertSupporterArgs = {
  upsert: SupporterUpsertInput;
  where: SupporterWhereUniqueInput;
};


export type MutationUpsertTranslationArgs = {
  upsert: TranslationUpsertInput;
  where: TranslationWhereUniqueInput;
};

export type Network = Node & {
  __typename?: 'Network';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<RichText>;
  /** Get the document in other stages */
  documentInStages: Array<Network>;
  /** List of Network versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Network>;
  logo?: Maybe<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type NetworkCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type NetworkCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type NetworkDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type NetworkHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type NetworkLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type NetworkLogoArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type NetworkPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type NetworkPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type NetworkScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type NetworkUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type NetworkUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type NetworkConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NetworkWhereUniqueInput;
};

/** A connection to a list of items. */
export type NetworkConnection = {
  __typename?: 'NetworkConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NetworkEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NetworkCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** description input for default locale (de) */
  description?: InputMaybe<Scalars['RichTextAST']>;
  link?: InputMaybe<Scalars['String']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<NetworkCreateLocalizationsInput>;
  logo?: InputMaybe<AssetCreateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type NetworkCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type NetworkCreateLocalizationInput = {
  /** Localization input */
  data: NetworkCreateLocalizationDataInput;
  locale: Locale;
};

export type NetworkCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<NetworkCreateLocalizationInput>>;
};

export type NetworkCreateManyInlineInput = {
  /** Connect multiple existing Network documents */
  connect?: InputMaybe<Array<NetworkWhereUniqueInput>>;
  /** Create and connect multiple existing Network documents */
  create?: InputMaybe<Array<NetworkCreateInput>>;
};

export type NetworkCreateOneInlineInput = {
  /** Connect one existing Network document */
  connect?: InputMaybe<NetworkWhereUniqueInput>;
  /** Create and connect one Network document */
  create?: InputMaybe<NetworkCreateInput>;
};

/** An edge in a connection. */
export type NetworkEdge = {
  __typename?: 'NetworkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Network;
};

/** Identifies documents */
export type NetworkManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NetworkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NetworkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NetworkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  link_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum NetworkOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type NetworkUpdateInput = {
  /** description input for default locale (de) */
  description?: InputMaybe<Scalars['RichTextAST']>;
  link?: InputMaybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: InputMaybe<NetworkUpdateLocalizationsInput>;
  logo?: InputMaybe<AssetUpdateOneInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type NetworkUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']>;
};

export type NetworkUpdateLocalizationInput = {
  data: NetworkUpdateLocalizationDataInput;
  locale: Locale;
};

export type NetworkUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<NetworkCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<NetworkUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<NetworkUpsertLocalizationInput>>;
};

export type NetworkUpdateManyInlineInput = {
  /** Connect multiple existing Network documents */
  connect?: InputMaybe<Array<NetworkConnectInput>>;
  /** Create and connect multiple Network documents */
  create?: InputMaybe<Array<NetworkCreateInput>>;
  /** Delete multiple Network documents */
  delete?: InputMaybe<Array<NetworkWhereUniqueInput>>;
  /** Disconnect multiple Network documents */
  disconnect?: InputMaybe<Array<NetworkWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Network documents */
  set?: InputMaybe<Array<NetworkWhereUniqueInput>>;
  /** Update multiple Network documents */
  update?: InputMaybe<Array<NetworkUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Network documents */
  upsert?: InputMaybe<Array<NetworkUpsertWithNestedWhereUniqueInput>>;
};

export type NetworkUpdateManyInput = {
  /** description input for default locale (de) */
  description?: InputMaybe<Scalars['RichTextAST']>;
  link?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<NetworkUpdateManyLocalizationsInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type NetworkUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']>;
};

export type NetworkUpdateManyLocalizationInput = {
  data: NetworkUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type NetworkUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<NetworkUpdateManyLocalizationInput>>;
};

export type NetworkUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NetworkUpdateManyInput;
  /** Document search */
  where: NetworkWhereInput;
};

export type NetworkUpdateOneInlineInput = {
  /** Connect existing Network document */
  connect?: InputMaybe<NetworkWhereUniqueInput>;
  /** Create and connect one Network document */
  create?: InputMaybe<NetworkCreateInput>;
  /** Delete currently connected Network document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Network document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Network document */
  update?: InputMaybe<NetworkUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Network document */
  upsert?: InputMaybe<NetworkUpsertWithNestedWhereUniqueInput>;
};

export type NetworkUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NetworkUpdateInput;
  /** Unique document search */
  where: NetworkWhereUniqueInput;
};

export type NetworkUpsertInput = {
  /** Create document if it didn't exist */
  create: NetworkCreateInput;
  /** Update document if it exists */
  update: NetworkUpdateInput;
};

export type NetworkUpsertLocalizationInput = {
  create: NetworkCreateLocalizationDataInput;
  locale: Locale;
  update: NetworkUpdateLocalizationDataInput;
};

export type NetworkUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NetworkUpsertInput;
  /** Unique document search */
  where: NetworkWhereUniqueInput;
};

/** Identifies documents */
export type NetworkWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NetworkWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NetworkWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NetworkWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  link_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Network record uniquely */
export type NetworkWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
  /** The Stage of an object */
  stage: Stage;
};

export type Page = Node & {
  __typename?: 'Page';
  content?: Maybe<RichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Page>;
  /** List of Page versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Page>;
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  pageSections: Array<PageSection>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  vibrantColor?: Maybe<Color>;
};


export type PageCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PageCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PageDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PageHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type PageLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type PagePageSectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<PageSectionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageSectionWhereInput>;
};


export type PagePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PagePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PageScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PageUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PageUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PageConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageConnection = {
  __typename?: 'PageConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageCreateInput = {
  /** content input for default locale (de) */
  content?: InputMaybe<Scalars['RichTextAST']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<PageCreateLocalizationsInput>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaKeywords?: InputMaybe<Scalars['String']>;
  pageSections?: InputMaybe<PageSectionCreateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** title input for default locale (de) */
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  vibrantColor?: InputMaybe<ColorInput>;
};

export type PageCreateLocalizationDataInput = {
  content?: InputMaybe<Scalars['RichTextAST']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PageCreateLocalizationInput = {
  /** Localization input */
  data: PageCreateLocalizationDataInput;
  locale: Locale;
};

export type PageCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<PageCreateLocalizationInput>>;
};

export type PageCreateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Create and connect multiple existing Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
};

export type PageCreateOneInlineInput = {
  /** Connect one existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
};

/** An edge in a connection. */
export type PageEdge = {
  __typename?: 'PageEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Page;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Identifies documents */
export type PageManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  metaDescription_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaDescription_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaDescription_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  metaDescription_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaDescription_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  metaDescription_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metaDescription_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  metaDescription_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaDescription_starts_with?: InputMaybe<Scalars['String']>;
  metaKeywords?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  metaKeywords_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaKeywords_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaKeywords_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  metaKeywords_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaKeywords_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  metaKeywords_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metaKeywords_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  metaKeywords_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaKeywords_starts_with?: InputMaybe<Scalars['String']>;
  pageSections_every?: InputMaybe<PageSectionWhereInput>;
  pageSections_none?: InputMaybe<PageSectionWhereInput>;
  pageSections_some?: InputMaybe<PageSectionWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  MetaKeywordsAsc = 'metaKeywords_ASC',
  MetaKeywordsDesc = 'metaKeywords_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PageSection = Node & {
  __typename?: 'PageSection';
  code?: Maybe<Scalars['String']>;
  content: RichText;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<PageSection>;
  /** List of PageSection versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<PageSection>;
  page?: Maybe<Page>;
  picture: Array<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title: Scalars['String'];
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PageSectionCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PageSectionCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PageSectionDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PageSectionHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type PageSectionLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type PageSectionPageArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PageSectionPictureArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetWhereInput>;
};


export type PageSectionPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PageSectionPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PageSectionScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PageSectionUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PageSectionUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PageSectionConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PageSectionWhereUniqueInput;
};

/** A connection to a list of items. */
export type PageSectionConnection = {
  __typename?: 'PageSectionConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PageSectionEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PageSectionCreateInput = {
  code?: InputMaybe<Scalars['String']>;
  /** content input for default locale (de) */
  content: Scalars['RichTextAST'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<PageSectionCreateLocalizationsInput>;
  page?: InputMaybe<PageCreateOneInlineInput>;
  picture?: InputMaybe<AssetCreateManyInlineInput>;
  /** title input for default locale (de) */
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PageSectionCreateLocalizationDataInput = {
  content: Scalars['RichTextAST'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PageSectionCreateLocalizationInput = {
  /** Localization input */
  data: PageSectionCreateLocalizationDataInput;
  locale: Locale;
};

export type PageSectionCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<PageSectionCreateLocalizationInput>>;
};

export type PageSectionCreateManyInlineInput = {
  /** Connect multiple existing PageSection documents */
  connect?: InputMaybe<Array<PageSectionWhereUniqueInput>>;
  /** Create and connect multiple existing PageSection documents */
  create?: InputMaybe<Array<PageSectionCreateInput>>;
};

export type PageSectionCreateOneInlineInput = {
  /** Connect one existing PageSection document */
  connect?: InputMaybe<PageSectionWhereUniqueInput>;
  /** Create and connect one PageSection document */
  create?: InputMaybe<PageSectionCreateInput>;
};

/** An edge in a connection. */
export type PageSectionEdge = {
  __typename?: 'PageSectionEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PageSection;
};

/** Identifies documents */
export type PageSectionManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  code_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  code_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  code_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  code_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  code_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  code_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  code_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  code_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  code_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  page?: InputMaybe<PageWhereInput>;
  picture_every?: InputMaybe<AssetWhereInput>;
  picture_none?: InputMaybe<AssetWhereInput>;
  picture_some?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PageSectionOrderByInput {
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PageSectionUpdateInput = {
  code?: InputMaybe<Scalars['String']>;
  /** content input for default locale (de) */
  content?: InputMaybe<Scalars['RichTextAST']>;
  /** Manage document localizations */
  localizations?: InputMaybe<PageSectionUpdateLocalizationsInput>;
  page?: InputMaybe<PageUpdateOneInlineInput>;
  picture?: InputMaybe<AssetUpdateManyInlineInput>;
  /** title input for default locale (de) */
  title?: InputMaybe<Scalars['String']>;
};

export type PageSectionUpdateLocalizationDataInput = {
  content?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PageSectionUpdateLocalizationInput = {
  data: PageSectionUpdateLocalizationDataInput;
  locale: Locale;
};

export type PageSectionUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<PageSectionCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<PageSectionUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<PageSectionUpsertLocalizationInput>>;
};

export type PageSectionUpdateManyInlineInput = {
  /** Connect multiple existing PageSection documents */
  connect?: InputMaybe<Array<PageSectionConnectInput>>;
  /** Create and connect multiple PageSection documents */
  create?: InputMaybe<Array<PageSectionCreateInput>>;
  /** Delete multiple PageSection documents */
  delete?: InputMaybe<Array<PageSectionWhereUniqueInput>>;
  /** Disconnect multiple PageSection documents */
  disconnect?: InputMaybe<Array<PageSectionWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PageSection documents */
  set?: InputMaybe<Array<PageSectionWhereUniqueInput>>;
  /** Update multiple PageSection documents */
  update?: InputMaybe<Array<PageSectionUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PageSection documents */
  upsert?: InputMaybe<Array<PageSectionUpsertWithNestedWhereUniqueInput>>;
};

export type PageSectionUpdateManyInput = {
  code?: InputMaybe<Scalars['String']>;
  /** content input for default locale (de) */
  content?: InputMaybe<Scalars['RichTextAST']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<PageSectionUpdateManyLocalizationsInput>;
  /** title input for default locale (de) */
  title?: InputMaybe<Scalars['String']>;
};

export type PageSectionUpdateManyLocalizationDataInput = {
  content?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PageSectionUpdateManyLocalizationInput = {
  data: PageSectionUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PageSectionUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<PageSectionUpdateManyLocalizationInput>>;
};

export type PageSectionUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageSectionUpdateManyInput;
  /** Document search */
  where: PageSectionWhereInput;
};

export type PageSectionUpdateOneInlineInput = {
  /** Connect existing PageSection document */
  connect?: InputMaybe<PageSectionWhereUniqueInput>;
  /** Create and connect one PageSection document */
  create?: InputMaybe<PageSectionCreateInput>;
  /** Delete currently connected PageSection document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected PageSection document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single PageSection document */
  update?: InputMaybe<PageSectionUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PageSection document */
  upsert?: InputMaybe<PageSectionUpsertWithNestedWhereUniqueInput>;
};

export type PageSectionUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageSectionUpdateInput;
  /** Unique document search */
  where: PageSectionWhereUniqueInput;
};

export type PageSectionUpsertInput = {
  /** Create document if it didn't exist */
  create: PageSectionCreateInput;
  /** Update document if it exists */
  update: PageSectionUpdateInput;
};

export type PageSectionUpsertLocalizationInput = {
  create: PageSectionCreateLocalizationDataInput;
  locale: Locale;
  update: PageSectionUpdateLocalizationDataInput;
};

export type PageSectionUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageSectionUpsertInput;
  /** Unique document search */
  where: PageSectionWhereUniqueInput;
};

/** Identifies documents */
export type PageSectionWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageSectionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageSectionWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageSectionWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  code_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  code_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  code_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  code_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  code_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  code_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  code_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  code_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  code_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  page?: InputMaybe<PageWhereInput>;
  picture_every?: InputMaybe<AssetWhereInput>;
  picture_none?: InputMaybe<AssetWhereInput>;
  picture_some?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References PageSection record uniquely */
export type PageSectionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type PageUpdateInput = {
  /** content input for default locale (de) */
  content?: InputMaybe<Scalars['RichTextAST']>;
  /** Manage document localizations */
  localizations?: InputMaybe<PageUpdateLocalizationsInput>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaKeywords?: InputMaybe<Scalars['String']>;
  pageSections?: InputMaybe<PageSectionUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** title input for default locale (de) */
  title?: InputMaybe<Scalars['String']>;
  vibrantColor?: InputMaybe<ColorInput>;
};

export type PageUpdateLocalizationDataInput = {
  content?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PageUpdateLocalizationInput = {
  data: PageUpdateLocalizationDataInput;
  locale: Locale;
};

export type PageUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<PageCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<PageUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<PageUpsertLocalizationInput>>;
};

export type PageUpdateManyInlineInput = {
  /** Connect multiple existing Page documents */
  connect?: InputMaybe<Array<PageConnectInput>>;
  /** Create and connect multiple Page documents */
  create?: InputMaybe<Array<PageCreateInput>>;
  /** Delete multiple Page documents */
  delete?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Disconnect multiple Page documents */
  disconnect?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Page documents */
  set?: InputMaybe<Array<PageWhereUniqueInput>>;
  /** Update multiple Page documents */
  update?: InputMaybe<Array<PageUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Page documents */
  upsert?: InputMaybe<Array<PageUpsertWithNestedWhereUniqueInput>>;
};

export type PageUpdateManyInput = {
  /** content input for default locale (de) */
  content?: InputMaybe<Scalars['RichTextAST']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<PageUpdateManyLocalizationsInput>;
  metaDescription?: InputMaybe<Scalars['String']>;
  metaKeywords?: InputMaybe<Scalars['String']>;
  /** title input for default locale (de) */
  title?: InputMaybe<Scalars['String']>;
  vibrantColor?: InputMaybe<ColorInput>;
};

export type PageUpdateManyLocalizationDataInput = {
  content?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PageUpdateManyLocalizationInput = {
  data: PageUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PageUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<PageUpdateManyLocalizationInput>>;
};

export type PageUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PageUpdateManyInput;
  /** Document search */
  where: PageWhereInput;
};

export type PageUpdateOneInlineInput = {
  /** Connect existing Page document */
  connect?: InputMaybe<PageWhereUniqueInput>;
  /** Create and connect one Page document */
  create?: InputMaybe<PageCreateInput>;
  /** Delete currently connected Page document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Page document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Page document */
  update?: InputMaybe<PageUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Page document */
  upsert?: InputMaybe<PageUpsertWithNestedWhereUniqueInput>;
};

export type PageUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PageUpdateInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

export type PageUpsertInput = {
  /** Create document if it didn't exist */
  create: PageCreateInput;
  /** Update document if it exists */
  update: PageUpdateInput;
};

export type PageUpsertLocalizationInput = {
  create: PageCreateLocalizationDataInput;
  locale: Locale;
  update: PageUpdateLocalizationDataInput;
};

export type PageUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PageUpsertInput;
  /** Unique document search */
  where: PageWhereUniqueInput;
};

/** Identifies documents */
export type PageWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PageWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PageWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PageWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  metaDescription?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  metaDescription_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaDescription_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaDescription_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  metaDescription_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaDescription_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  metaDescription_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metaDescription_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  metaDescription_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaDescription_starts_with?: InputMaybe<Scalars['String']>;
  metaKeywords?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  metaKeywords_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  metaKeywords_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  metaKeywords_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  metaKeywords_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  metaKeywords_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  metaKeywords_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  metaKeywords_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  metaKeywords_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  metaKeywords_starts_with?: InputMaybe<Scalars['String']>;
  pageSections_every?: InputMaybe<PageSectionWhereInput>;
  pageSections_none?: InputMaybe<PageSectionWhereInput>;
  pageSections_some?: InputMaybe<PageSectionWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References Page record uniquely */
export type PageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};

export type PressArticle = Node & {
  __typename?: 'PressArticle';
  abstract?: Maybe<RichText>;
  content?: Maybe<PressArticleContentRichText>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  date?: Maybe<Scalars['Date']>;
  /** Get the document in other stages */
  documentInStages: Array<PressArticle>;
  /** List of PressArticle versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<PressArticle>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug?: Maybe<Scalars['String']>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PressArticleCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PressArticleCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PressArticleDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PressArticleHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type PressArticleLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type PressArticlePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PressArticlePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PressArticleScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PressArticleUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PressArticleUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PressArticleConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PressArticleWhereUniqueInput;
};

/** A connection to a list of items. */
export type PressArticleConnection = {
  __typename?: 'PressArticleConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PressArticleEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PressArticleContentRichText = {
  __typename?: 'PressArticleContentRichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  json: Scalars['RichTextAST'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** @deprecated Please use the 'json' field */
  raw: Scalars['RichTextAST'];
  references: Array<PressArticleContentRichTextEmbeddedTypes>;
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

export type PressArticleContentRichTextEmbeddedTypes = Asset;

export type PressArticleCreateInput = {
  /** abstract input for default locale (de) */
  abstract?: InputMaybe<Scalars['RichTextAST']>;
  /** content input for default locale (de) */
  content?: InputMaybe<Scalars['RichTextAST']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  date?: InputMaybe<Scalars['Date']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<PressArticleCreateLocalizationsInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** title input for default locale (de) */
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PressArticleCreateLocalizationDataInput = {
  abstract?: InputMaybe<Scalars['RichTextAST']>;
  content?: InputMaybe<Scalars['RichTextAST']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PressArticleCreateLocalizationInput = {
  /** Localization input */
  data: PressArticleCreateLocalizationDataInput;
  locale: Locale;
};

export type PressArticleCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<PressArticleCreateLocalizationInput>>;
};

export type PressArticleCreateManyInlineInput = {
  /** Connect multiple existing PressArticle documents */
  connect?: InputMaybe<Array<PressArticleWhereUniqueInput>>;
  /** Create and connect multiple existing PressArticle documents */
  create?: InputMaybe<Array<PressArticleCreateInput>>;
};

export type PressArticleCreateOneInlineInput = {
  /** Connect one existing PressArticle document */
  connect?: InputMaybe<PressArticleWhereUniqueInput>;
  /** Create and connect one PressArticle document */
  create?: InputMaybe<PressArticleCreateInput>;
};

/** An edge in a connection. */
export type PressArticleEdge = {
  __typename?: 'PressArticleEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PressArticle;
};

/** Identifies documents */
export type PressArticleManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PressArticleWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PressArticleWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PressArticleWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  date_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<Scalars['Date']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PressArticleOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PressArticleUpdateInput = {
  /** abstract input for default locale (de) */
  abstract?: InputMaybe<Scalars['RichTextAST']>;
  /** content input for default locale (de) */
  content?: InputMaybe<Scalars['RichTextAST']>;
  date?: InputMaybe<Scalars['Date']>;
  /** Manage document localizations */
  localizations?: InputMaybe<PressArticleUpdateLocalizationsInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** title input for default locale (de) */
  title?: InputMaybe<Scalars['String']>;
};

export type PressArticleUpdateLocalizationDataInput = {
  abstract?: InputMaybe<Scalars['RichTextAST']>;
  content?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PressArticleUpdateLocalizationInput = {
  data: PressArticleUpdateLocalizationDataInput;
  locale: Locale;
};

export type PressArticleUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<PressArticleCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<PressArticleUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<PressArticleUpsertLocalizationInput>>;
};

export type PressArticleUpdateManyInlineInput = {
  /** Connect multiple existing PressArticle documents */
  connect?: InputMaybe<Array<PressArticleConnectInput>>;
  /** Create and connect multiple PressArticle documents */
  create?: InputMaybe<Array<PressArticleCreateInput>>;
  /** Delete multiple PressArticle documents */
  delete?: InputMaybe<Array<PressArticleWhereUniqueInput>>;
  /** Disconnect multiple PressArticle documents */
  disconnect?: InputMaybe<Array<PressArticleWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PressArticle documents */
  set?: InputMaybe<Array<PressArticleWhereUniqueInput>>;
  /** Update multiple PressArticle documents */
  update?: InputMaybe<Array<PressArticleUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PressArticle documents */
  upsert?: InputMaybe<Array<PressArticleUpsertWithNestedWhereUniqueInput>>;
};

export type PressArticleUpdateManyInput = {
  /** abstract input for default locale (de) */
  abstract?: InputMaybe<Scalars['RichTextAST']>;
  /** content input for default locale (de) */
  content?: InputMaybe<Scalars['RichTextAST']>;
  date?: InputMaybe<Scalars['Date']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<PressArticleUpdateManyLocalizationsInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** title input for default locale (de) */
  title?: InputMaybe<Scalars['String']>;
};

export type PressArticleUpdateManyLocalizationDataInput = {
  abstract?: InputMaybe<Scalars['RichTextAST']>;
  content?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PressArticleUpdateManyLocalizationInput = {
  data: PressArticleUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PressArticleUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<PressArticleUpdateManyLocalizationInput>>;
};

export type PressArticleUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PressArticleUpdateManyInput;
  /** Document search */
  where: PressArticleWhereInput;
};

export type PressArticleUpdateOneInlineInput = {
  /** Connect existing PressArticle document */
  connect?: InputMaybe<PressArticleWhereUniqueInput>;
  /** Create and connect one PressArticle document */
  create?: InputMaybe<PressArticleCreateInput>;
  /** Delete currently connected PressArticle document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected PressArticle document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single PressArticle document */
  update?: InputMaybe<PressArticleUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PressArticle document */
  upsert?: InputMaybe<PressArticleUpsertWithNestedWhereUniqueInput>;
};

export type PressArticleUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PressArticleUpdateInput;
  /** Unique document search */
  where: PressArticleWhereUniqueInput;
};

export type PressArticleUpsertInput = {
  /** Create document if it didn't exist */
  create: PressArticleCreateInput;
  /** Update document if it exists */
  update: PressArticleUpdateInput;
};

export type PressArticleUpsertLocalizationInput = {
  create: PressArticleCreateLocalizationDataInput;
  locale: Locale;
  update: PressArticleUpdateLocalizationDataInput;
};

export type PressArticleUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PressArticleUpsertInput;
  /** Unique document search */
  where: PressArticleWhereUniqueInput;
};

/** Identifies documents */
export type PressArticleWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PressArticleWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PressArticleWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PressArticleWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  date?: InputMaybe<Scalars['Date']>;
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']>;
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']>;
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<Scalars['Date']>>;
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']>;
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']>;
  /** All values that are not equal to given value. */
  date_not?: InputMaybe<Scalars['Date']>;
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<Scalars['Date']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  slug_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References PressArticle record uniquely */
export type PressArticleWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type PressPhoto = Node & {
  __typename?: 'PressPhoto';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<PressPhoto>;
  /** List of PressPhoto versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  photo?: Maybe<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PressPhotoCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PressPhotoDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PressPhotoHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type PressPhotoPhotoArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PressPhotoPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PressPhotoScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PressPhotoUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PressPhotoConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PressPhotoWhereUniqueInput;
};

/** A connection to a list of items. */
export type PressPhotoConnection = {
  __typename?: 'PressPhotoConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PressPhotoEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PressPhotoCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<AssetCreateOneInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PressPhotoCreateManyInlineInput = {
  /** Connect multiple existing PressPhoto documents */
  connect?: InputMaybe<Array<PressPhotoWhereUniqueInput>>;
  /** Create and connect multiple existing PressPhoto documents */
  create?: InputMaybe<Array<PressPhotoCreateInput>>;
};

export type PressPhotoCreateOneInlineInput = {
  /** Connect one existing PressPhoto document */
  connect?: InputMaybe<PressPhotoWhereUniqueInput>;
  /** Create and connect one PressPhoto document */
  create?: InputMaybe<PressPhotoCreateInput>;
};

/** An edge in a connection. */
export type PressPhotoEdge = {
  __typename?: 'PressPhotoEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PressPhoto;
};

/** Identifies documents */
export type PressPhotoManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PressPhotoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PressPhotoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PressPhotoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  photo?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PressPhotoOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PressPhotoUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<AssetUpdateOneInlineInput>;
};

export type PressPhotoUpdateManyInlineInput = {
  /** Connect multiple existing PressPhoto documents */
  connect?: InputMaybe<Array<PressPhotoConnectInput>>;
  /** Create and connect multiple PressPhoto documents */
  create?: InputMaybe<Array<PressPhotoCreateInput>>;
  /** Delete multiple PressPhoto documents */
  delete?: InputMaybe<Array<PressPhotoWhereUniqueInput>>;
  /** Disconnect multiple PressPhoto documents */
  disconnect?: InputMaybe<Array<PressPhotoWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PressPhoto documents */
  set?: InputMaybe<Array<PressPhotoWhereUniqueInput>>;
  /** Update multiple PressPhoto documents */
  update?: InputMaybe<Array<PressPhotoUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PressPhoto documents */
  upsert?: InputMaybe<Array<PressPhotoUpsertWithNestedWhereUniqueInput>>;
};

export type PressPhotoUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
};

export type PressPhotoUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PressPhotoUpdateManyInput;
  /** Document search */
  where: PressPhotoWhereInput;
};

export type PressPhotoUpdateOneInlineInput = {
  /** Connect existing PressPhoto document */
  connect?: InputMaybe<PressPhotoWhereUniqueInput>;
  /** Create and connect one PressPhoto document */
  create?: InputMaybe<PressPhotoCreateInput>;
  /** Delete currently connected PressPhoto document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected PressPhoto document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single PressPhoto document */
  update?: InputMaybe<PressPhotoUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PressPhoto document */
  upsert?: InputMaybe<PressPhotoUpsertWithNestedWhereUniqueInput>;
};

export type PressPhotoUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PressPhotoUpdateInput;
  /** Unique document search */
  where: PressPhotoWhereUniqueInput;
};

export type PressPhotoUpsertInput = {
  /** Create document if it didn't exist */
  create: PressPhotoCreateInput;
  /** Update document if it exists */
  update: PressPhotoUpdateInput;
};

export type PressPhotoUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PressPhotoUpsertInput;
  /** Unique document search */
  where: PressPhotoWhereUniqueInput;
};

/** Identifies documents */
export type PressPhotoWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PressPhotoWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PressPhotoWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PressPhotoWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  photo?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References PressPhoto record uniquely */
export type PressPhotoWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type PressReport = Node & {
  __typename?: 'PressReport';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description?: Maybe<RichText>;
  /** Get the document in other stages */
  documentInStages: Array<PressReport>;
  /** List of PressReport versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<PressReport>;
  photo?: Maybe<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type PressReportCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PressReportCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PressReportDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type PressReportHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type PressReportLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type PressReportPhotoArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PressReportPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PressReportPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type PressReportScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type PressReportUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type PressReportUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type PressReportConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: PressReportWhereUniqueInput;
};

/** A connection to a list of items. */
export type PressReportConnection = {
  __typename?: 'PressReportConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<PressReportEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type PressReportCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** description input for default locale (de) */
  description?: InputMaybe<Scalars['RichTextAST']>;
  link?: InputMaybe<Scalars['String']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<PressReportCreateLocalizationsInput>;
  photo?: InputMaybe<AssetCreateOneInlineInput>;
  /** title input for default locale (de) */
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PressReportCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PressReportCreateLocalizationInput = {
  /** Localization input */
  data: PressReportCreateLocalizationDataInput;
  locale: Locale;
};

export type PressReportCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<PressReportCreateLocalizationInput>>;
};

export type PressReportCreateManyInlineInput = {
  /** Connect multiple existing PressReport documents */
  connect?: InputMaybe<Array<PressReportWhereUniqueInput>>;
  /** Create and connect multiple existing PressReport documents */
  create?: InputMaybe<Array<PressReportCreateInput>>;
};

export type PressReportCreateOneInlineInput = {
  /** Connect one existing PressReport document */
  connect?: InputMaybe<PressReportWhereUniqueInput>;
  /** Create and connect one PressReport document */
  create?: InputMaybe<PressReportCreateInput>;
};

/** An edge in a connection. */
export type PressReportEdge = {
  __typename?: 'PressReportEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: PressReport;
};

/** Identifies documents */
export type PressReportManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PressReportWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PressReportWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PressReportWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  link_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum PressReportOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type PressReportUpdateInput = {
  /** description input for default locale (de) */
  description?: InputMaybe<Scalars['RichTextAST']>;
  link?: InputMaybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: InputMaybe<PressReportUpdateLocalizationsInput>;
  photo?: InputMaybe<AssetUpdateOneInlineInput>;
  /** title input for default locale (de) */
  title?: InputMaybe<Scalars['String']>;
};

export type PressReportUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PressReportUpdateLocalizationInput = {
  data: PressReportUpdateLocalizationDataInput;
  locale: Locale;
};

export type PressReportUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<PressReportCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<PressReportUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<PressReportUpsertLocalizationInput>>;
};

export type PressReportUpdateManyInlineInput = {
  /** Connect multiple existing PressReport documents */
  connect?: InputMaybe<Array<PressReportConnectInput>>;
  /** Create and connect multiple PressReport documents */
  create?: InputMaybe<Array<PressReportCreateInput>>;
  /** Delete multiple PressReport documents */
  delete?: InputMaybe<Array<PressReportWhereUniqueInput>>;
  /** Disconnect multiple PressReport documents */
  disconnect?: InputMaybe<Array<PressReportWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing PressReport documents */
  set?: InputMaybe<Array<PressReportWhereUniqueInput>>;
  /** Update multiple PressReport documents */
  update?: InputMaybe<Array<PressReportUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple PressReport documents */
  upsert?: InputMaybe<Array<PressReportUpsertWithNestedWhereUniqueInput>>;
};

export type PressReportUpdateManyInput = {
  /** description input for default locale (de) */
  description?: InputMaybe<Scalars['RichTextAST']>;
  link?: InputMaybe<Scalars['String']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<PressReportUpdateManyLocalizationsInput>;
  /** title input for default locale (de) */
  title?: InputMaybe<Scalars['String']>;
};

export type PressReportUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars['RichTextAST']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PressReportUpdateManyLocalizationInput = {
  data: PressReportUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type PressReportUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<PressReportUpdateManyLocalizationInput>>;
};

export type PressReportUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: PressReportUpdateManyInput;
  /** Document search */
  where: PressReportWhereInput;
};

export type PressReportUpdateOneInlineInput = {
  /** Connect existing PressReport document */
  connect?: InputMaybe<PressReportWhereUniqueInput>;
  /** Create and connect one PressReport document */
  create?: InputMaybe<PressReportCreateInput>;
  /** Delete currently connected PressReport document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected PressReport document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single PressReport document */
  update?: InputMaybe<PressReportUpdateWithNestedWhereUniqueInput>;
  /** Upsert single PressReport document */
  upsert?: InputMaybe<PressReportUpsertWithNestedWhereUniqueInput>;
};

export type PressReportUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: PressReportUpdateInput;
  /** Unique document search */
  where: PressReportWhereUniqueInput;
};

export type PressReportUpsertInput = {
  /** Create document if it didn't exist */
  create: PressReportCreateInput;
  /** Update document if it exists */
  update: PressReportUpdateInput;
};

export type PressReportUpsertLocalizationInput = {
  create: PressReportCreateLocalizationDataInput;
  locale: Locale;
  update: PressReportUpdateLocalizationDataInput;
};

export type PressReportUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: PressReportUpsertInput;
  /** Unique document search */
  where: PressReportWhereUniqueInput;
};

/** Identifies documents */
export type PressReportWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<PressReportWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<PressReportWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<PressReportWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  link?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  link_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  link_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  link_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  link_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  link_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  link_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  link_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  link_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  link_starts_with?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References PressReport record uniquely */
export type PressReportWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  __typename?: 'Query';
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve a single blog */
  blog?: Maybe<Blog>;
  /** Retrieve document version */
  blogVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple blogs */
  blogs: Array<Blog>;
  /** Retrieve multiple blogs using the Relay connection interface */
  blogsConnection: BlogConnection;
  /** Retrieve a single cityPartner */
  cityPartner?: Maybe<CityPartner>;
  /** Retrieve document version */
  cityPartnerVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple cityPartners */
  cityPartners: Array<CityPartner>;
  /** Retrieve multiple cityPartners using the Relay connection interface */
  cityPartnersConnection: CityPartnerConnection;
  /** Retrieve a single faq */
  faq?: Maybe<Faq>;
  /** Retrieve document version */
  faqVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple faqs */
  faqs: Array<Faq>;
  /** Retrieve multiple faqs using the Relay connection interface */
  faqsConnection: FaqConnection;
  /** Retrieve a single kpi */
  kpi?: Maybe<Kpi>;
  /** Retrieve document version */
  kpiVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple kpis */
  kpis: Array<Kpi>;
  /** Retrieve multiple kpis using the Relay connection interface */
  kpisConnection: KpiConnection;
  /** Retrieve a single member */
  member?: Maybe<Member>;
  /** Retrieve document version */
  memberVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple members */
  members: Array<Member>;
  /** Retrieve multiple members using the Relay connection interface */
  membersConnection: MemberConnection;
  /** Retrieve a single network */
  network?: Maybe<Network>;
  /** Retrieve document version */
  networkVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple networks */
  networks: Array<Network>;
  /** Retrieve multiple networks using the Relay connection interface */
  networksConnection: NetworkConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single page */
  page?: Maybe<Page>;
  /** Retrieve a single pageSection */
  pageSection?: Maybe<PageSection>;
  /** Retrieve document version */
  pageSectionVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pageSections */
  pageSections: Array<PageSection>;
  /** Retrieve multiple pageSections using the Relay connection interface */
  pageSectionsConnection: PageSectionConnection;
  /** Retrieve document version */
  pageVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pages */
  pages: Array<Page>;
  /** Retrieve multiple pages using the Relay connection interface */
  pagesConnection: PageConnection;
  /** Retrieve a single pressArticle */
  pressArticle?: Maybe<PressArticle>;
  /** Retrieve document version */
  pressArticleVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pressArticles */
  pressArticles: Array<PressArticle>;
  /** Retrieve multiple pressArticles using the Relay connection interface */
  pressArticlesConnection: PressArticleConnection;
  /** Retrieve a single pressPhoto */
  pressPhoto?: Maybe<PressPhoto>;
  /** Retrieve document version */
  pressPhotoVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pressPhotos */
  pressPhotos: Array<PressPhoto>;
  /** Retrieve multiple pressPhotos using the Relay connection interface */
  pressPhotosConnection: PressPhotoConnection;
  /** Retrieve a single pressReport */
  pressReport?: Maybe<PressReport>;
  /** Retrieve document version */
  pressReportVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple pressReports */
  pressReports: Array<PressReport>;
  /** Retrieve multiple pressReports using the Relay connection interface */
  pressReportsConnection: PressReportConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single shop */
  shop?: Maybe<Shop>;
  /** Retrieve a single shopBundesland */
  shopBundesland?: Maybe<ShopBundesland>;
  /** Retrieve document version */
  shopBundeslandVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple shopBundeslands */
  shopBundeslands: Array<ShopBundesland>;
  /** Retrieve multiple shopBundeslands using the Relay connection interface */
  shopBundeslandsConnection: ShopBundeslandConnection;
  /** Retrieve multiple shopCategories */
  shopCategories: Array<ShopCategory>;
  /** Retrieve multiple shopCategories using the Relay connection interface */
  shopCategoriesConnection: ShopCategoryConnection;
  /** Retrieve a single shopCategory */
  shopCategory?: Maybe<ShopCategory>;
  /** Retrieve document version */
  shopCategoryVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single shopStatus */
  shopStatus?: Maybe<ShopStatus>;
  /** Retrieve document version */
  shopStatusVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple shopStatuses */
  shopStatuses: Array<ShopStatus>;
  /** Retrieve multiple shopStatuses using the Relay connection interface */
  shopStatusesConnection: ShopStatusConnection;
  /** Retrieve a single shopTown */
  shopTown?: Maybe<ShopTown>;
  /** Retrieve document version */
  shopTownVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple shopTowns */
  shopTowns: Array<ShopTown>;
  /** Retrieve multiple shopTowns using the Relay connection interface */
  shopTownsConnection: ShopTownConnection;
  /** Retrieve a single shopType */
  shopType?: Maybe<ShopType>;
  /** Retrieve document version */
  shopTypeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple shopTypes */
  shopTypes: Array<ShopType>;
  /** Retrieve multiple shopTypes using the Relay connection interface */
  shopTypesConnection: ShopTypeConnection;
  /** Retrieve document version */
  shopVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple shops */
  shops: Array<Shop>;
  /** Retrieve multiple shops using the Relay connection interface */
  shopsConnection: ShopConnection;
  /** Retrieve a single supporter */
  supporter?: Maybe<Supporter>;
  /** Retrieve document version */
  supporterVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple supporters */
  supporters: Array<Supporter>;
  /** Retrieve multiple supporters using the Relay connection interface */
  supportersConnection: SupporterConnection;
  /** Retrieve a single translation */
  translation?: Maybe<Translation>;
  /** Retrieve document version */
  translationVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple translations */
  translations: Array<Translation>;
  /** Retrieve multiple translations using the Relay connection interface */
  translationsConnection: TranslationConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};


export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};


export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};


export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};


export type QueryBlogArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: BlogWhereUniqueInput;
};


export type QueryBlogVersionArgs = {
  where: VersionWhereInput;
};


export type QueryBlogsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BlogOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<BlogWhereInput>;
};


export type QueryBlogsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<BlogOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<BlogWhereInput>;
};


export type QueryCityPartnerArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CityPartnerWhereUniqueInput;
};


export type QueryCityPartnerVersionArgs = {
  where: VersionWhereInput;
};


export type QueryCityPartnersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CityPartnerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CityPartnerWhereInput>;
};


export type QueryCityPartnersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CityPartnerOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<CityPartnerWhereInput>;
};


export type QueryFaqArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: FaqWhereUniqueInput;
};


export type QueryFaqVersionArgs = {
  where: VersionWhereInput;
};


export type QueryFaqsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FaqOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<FaqWhereInput>;
};


export type QueryFaqsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<FaqOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<FaqWhereInput>;
};


export type QueryKpiArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: KpiWhereUniqueInput;
};


export type QueryKpiVersionArgs = {
  where: VersionWhereInput;
};


export type QueryKpisArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<KpiOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<KpiWhereInput>;
};


export type QueryKpisConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<KpiOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<KpiWhereInput>;
};


export type QueryMemberArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: MemberWhereUniqueInput;
};


export type QueryMemberVersionArgs = {
  where: VersionWhereInput;
};


export type QueryMembersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<MemberOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<MemberWhereInput>;
};


export type QueryMembersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<MemberOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<MemberWhereInput>;
};


export type QueryNetworkArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: NetworkWhereUniqueInput;
};


export type QueryNetworkVersionArgs = {
  where: VersionWhereInput;
};


export type QueryNetworksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NetworkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<NetworkWhereInput>;
};


export type QueryNetworksConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NetworkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<NetworkWhereInput>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
  locales?: Array<Locale>;
  stage?: Stage;
};


export type QueryPageArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PageWhereUniqueInput;
};


export type QueryPageSectionArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PageSectionWhereUniqueInput;
};


export type QueryPageSectionVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPageSectionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageSectionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PageSectionWhereInput>;
};


export type QueryPageSectionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageSectionOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PageSectionWhereInput>;
};


export type QueryPageVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryPagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PageOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PageWhereInput>;
};


export type QueryPressArticleArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PressArticleWhereUniqueInput;
};


export type QueryPressArticleVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPressArticlesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PressArticleOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PressArticleWhereInput>;
};


export type QueryPressArticlesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PressArticleOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PressArticleWhereInput>;
};


export type QueryPressPhotoArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PressPhotoWhereUniqueInput;
};


export type QueryPressPhotoVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPressPhotosArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PressPhotoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PressPhotoWhereInput>;
};


export type QueryPressPhotosConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PressPhotoOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PressPhotoWhereInput>;
};


export type QueryPressReportArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: PressReportWhereUniqueInput;
};


export type QueryPressReportVersionArgs = {
  where: VersionWhereInput;
};


export type QueryPressReportsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PressReportOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PressReportWhereInput>;
};


export type QueryPressReportsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<PressReportOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<PressReportWhereInput>;
};


export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};


export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};


export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};


export type QueryShopArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ShopWhereUniqueInput;
};


export type QueryShopBundeslandArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ShopBundeslandWhereUniqueInput;
};


export type QueryShopBundeslandVersionArgs = {
  where: VersionWhereInput;
};


export type QueryShopBundeslandsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ShopBundeslandOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ShopBundeslandWhereInput>;
};


export type QueryShopBundeslandsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ShopBundeslandOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ShopBundeslandWhereInput>;
};


export type QueryShopCategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ShopCategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ShopCategoryWhereInput>;
};


export type QueryShopCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ShopCategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ShopCategoryWhereInput>;
};


export type QueryShopCategoryArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ShopCategoryWhereUniqueInput;
};


export type QueryShopCategoryVersionArgs = {
  where: VersionWhereInput;
};


export type QueryShopStatusArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ShopStatusWhereUniqueInput;
};


export type QueryShopStatusVersionArgs = {
  where: VersionWhereInput;
};


export type QueryShopStatusesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ShopStatusOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ShopStatusWhereInput>;
};


export type QueryShopStatusesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ShopStatusOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ShopStatusWhereInput>;
};


export type QueryShopTownArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ShopTownWhereUniqueInput;
};


export type QueryShopTownVersionArgs = {
  where: VersionWhereInput;
};


export type QueryShopTownsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ShopTownOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ShopTownWhereInput>;
};


export type QueryShopTownsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ShopTownOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ShopTownWhereInput>;
};


export type QueryShopTypeArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ShopTypeWhereUniqueInput;
};


export type QueryShopTypeVersionArgs = {
  where: VersionWhereInput;
};


export type QueryShopTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ShopTypeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ShopTypeWhereInput>;
};


export type QueryShopTypesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ShopTypeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ShopTypeWhereInput>;
};


export type QueryShopVersionArgs = {
  where: VersionWhereInput;
};


export type QueryShopsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ShopOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ShopWhereInput>;
};


export type QueryShopsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ShopOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<ShopWhereInput>;
};


export type QuerySupporterArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: SupporterWhereUniqueInput;
};


export type QuerySupporterVersionArgs = {
  where: VersionWhereInput;
};


export type QuerySupportersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SupporterOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<SupporterWhereInput>;
};


export type QuerySupportersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<SupporterOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<SupporterWhereInput>;
};


export type QueryTranslationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: TranslationWhereUniqueInput;
};


export type QueryTranslationVersionArgs = {
  where: VersionWhereInput;
};


export type QueryTranslationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TranslationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TranslationWhereInput>;
};


export type QueryTranslationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<TranslationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<TranslationWhereInput>;
};


export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA';
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency'];
  b: Scalars['RGBAHue'];
  g: Scalars['RGBAHue'];
  r: Scalars['RGBAHue'];
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText';
  /** Returns HTMl representation */
  html: Scalars['String'];
  /** Returns Markdown representation */
  markdown: Scalars['String'];
  /** Returns AST representation */
  raw: Scalars['RichTextAST'];
  /** Returns plain-text contents of RichText */
  text: Scalars['String'];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  __typename?: 'ScheduledOperation';
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars['Json'];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
};


/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument = Asset | Blog | CityPartner | Faq | Kpi | Member | Network | Page | PageSection | PressArticle | PressPhoto | PressReport | Shop | ShopBundesland | ShopCategory | ShopStatus | ShopTown | ShopType | Supporter | Translation;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledOperationStatus>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  __typename?: 'ScheduledRelease';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars['String']>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars['String']>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Whether scheduled release should be run */
  isActive: Scalars['Boolean'];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars['Boolean'];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars['String']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  description_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']>;
  errorMessage?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  errorMessage_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isImplicit?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  /** All values that are not equal to given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<ScheduledReleaseStatus>>;
  title?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  title_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Shop = Node & {
  __typename?: 'Shop';
  address?: Maybe<Scalars['String']>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  dataProtectionForm?: Maybe<Asset>;
  /** Get the document in other stages */
  documentInStages: Array<Shop>;
  email?: Maybe<Scalars['String']>;
  /** List of Shop versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  infoflyer?: Maybe<Scalars['Int']>;
  location?: Maybe<Location>;
  name?: Maybe<Scalars['String']>;
  newsletter?: Maybe<Scalars['Boolean']>;
  /** This private and just for internal notes. */
  notes?: Maybe<Scalars['String']>;
  openinghours?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  shopBundesland?: Maybe<ShopBundesland>;
  shopStatus?: Maybe<ShopStatus>;
  shopTown?: Maybe<ShopTown>;
  shopType: Array<ShopType>;
  shopcategories: Array<ShopCategory>;
  /** System stage field */
  stage: Stage;
  stickerBack?: Maybe<Scalars['Int']>;
  stickerFront?: Maybe<Scalars['Int']>;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  website?: Maybe<Scalars['String']>;
};


export type ShopCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ShopDataProtectionFormArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ShopDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ShopHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ShopPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ShopScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ShopShopBundeslandArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ShopShopStatusArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ShopShopTownArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ShopShopTypeArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ShopTypeOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShopTypeWhereInput>;
};


export type ShopShopcategoriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ShopCategoryOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShopCategoryWhereInput>;
};


export type ShopUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ShopBundesland = Node & {
  __typename?: 'ShopBundesland';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<ShopBundesland>;
  /** List of ShopBundesland versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  location?: Maybe<Location>;
  name?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  shops: Array<Shop>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  zoom?: Maybe<Scalars['Int']>;
};


export type ShopBundeslandCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ShopBundeslandDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ShopBundeslandHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ShopBundeslandPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ShopBundeslandScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ShopBundeslandShopsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ShopOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShopWhereInput>;
};


export type ShopBundeslandUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ShopBundeslandConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ShopBundeslandWhereUniqueInput;
};

/** A connection to a list of items. */
export type ShopBundeslandConnection = {
  __typename?: 'ShopBundeslandConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ShopBundeslandEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ShopBundeslandCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  location?: InputMaybe<LocationInput>;
  name?: InputMaybe<Scalars['String']>;
  shops?: InputMaybe<ShopCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  zoom?: InputMaybe<Scalars['Int']>;
};

export type ShopBundeslandCreateManyInlineInput = {
  /** Connect multiple existing ShopBundesland documents */
  connect?: InputMaybe<Array<ShopBundeslandWhereUniqueInput>>;
  /** Create and connect multiple existing ShopBundesland documents */
  create?: InputMaybe<Array<ShopBundeslandCreateInput>>;
};

export type ShopBundeslandCreateOneInlineInput = {
  /** Connect one existing ShopBundesland document */
  connect?: InputMaybe<ShopBundeslandWhereUniqueInput>;
  /** Create and connect one ShopBundesland document */
  create?: InputMaybe<ShopBundeslandCreateInput>;
};

/** An edge in a connection. */
export type ShopBundeslandEdge = {
  __typename?: 'ShopBundeslandEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ShopBundesland;
};

/** Identifies documents */
export type ShopBundeslandManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ShopBundeslandWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ShopBundeslandWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ShopBundeslandWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  shops_every?: InputMaybe<ShopWhereInput>;
  shops_none?: InputMaybe<ShopWhereInput>;
  shops_some?: InputMaybe<ShopWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  zoom?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  zoom_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  zoom_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  zoom_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  zoom_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  zoom_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  zoom_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  zoom_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export enum ShopBundeslandOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ZoomAsc = 'zoom_ASC',
  ZoomDesc = 'zoom_DESC'
}

export type ShopBundeslandUpdateInput = {
  location?: InputMaybe<LocationInput>;
  name?: InputMaybe<Scalars['String']>;
  shops?: InputMaybe<ShopUpdateManyInlineInput>;
  zoom?: InputMaybe<Scalars['Int']>;
};

export type ShopBundeslandUpdateManyInlineInput = {
  /** Connect multiple existing ShopBundesland documents */
  connect?: InputMaybe<Array<ShopBundeslandConnectInput>>;
  /** Create and connect multiple ShopBundesland documents */
  create?: InputMaybe<Array<ShopBundeslandCreateInput>>;
  /** Delete multiple ShopBundesland documents */
  delete?: InputMaybe<Array<ShopBundeslandWhereUniqueInput>>;
  /** Disconnect multiple ShopBundesland documents */
  disconnect?: InputMaybe<Array<ShopBundeslandWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ShopBundesland documents */
  set?: InputMaybe<Array<ShopBundeslandWhereUniqueInput>>;
  /** Update multiple ShopBundesland documents */
  update?: InputMaybe<Array<ShopBundeslandUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ShopBundesland documents */
  upsert?: InputMaybe<Array<ShopBundeslandUpsertWithNestedWhereUniqueInput>>;
};

export type ShopBundeslandUpdateManyInput = {
  location?: InputMaybe<LocationInput>;
  name?: InputMaybe<Scalars['String']>;
  zoom?: InputMaybe<Scalars['Int']>;
};

export type ShopBundeslandUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ShopBundeslandUpdateManyInput;
  /** Document search */
  where: ShopBundeslandWhereInput;
};

export type ShopBundeslandUpdateOneInlineInput = {
  /** Connect existing ShopBundesland document */
  connect?: InputMaybe<ShopBundeslandWhereUniqueInput>;
  /** Create and connect one ShopBundesland document */
  create?: InputMaybe<ShopBundeslandCreateInput>;
  /** Delete currently connected ShopBundesland document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ShopBundesland document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ShopBundesland document */
  update?: InputMaybe<ShopBundeslandUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ShopBundesland document */
  upsert?: InputMaybe<ShopBundeslandUpsertWithNestedWhereUniqueInput>;
};

export type ShopBundeslandUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ShopBundeslandUpdateInput;
  /** Unique document search */
  where: ShopBundeslandWhereUniqueInput;
};

export type ShopBundeslandUpsertInput = {
  /** Create document if it didn't exist */
  create: ShopBundeslandCreateInput;
  /** Update document if it exists */
  update: ShopBundeslandUpdateInput;
};

export type ShopBundeslandUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ShopBundeslandUpsertInput;
  /** Unique document search */
  where: ShopBundeslandWhereUniqueInput;
};

/** Identifies documents */
export type ShopBundeslandWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ShopBundeslandWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ShopBundeslandWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ShopBundeslandWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  shops_every?: InputMaybe<ShopWhereInput>;
  shops_none?: InputMaybe<ShopWhereInput>;
  shops_some?: InputMaybe<ShopWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  zoom?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  zoom_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  zoom_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  zoom_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  zoom_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  zoom_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  zoom_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  zoom_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

/** References ShopBundesland record uniquely */
export type ShopBundeslandWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ShopCategory = Node & {
  __typename?: 'ShopCategory';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<ShopCategory>;
  /** List of ShopCategory versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  isMain?: Maybe<Scalars['Boolean']>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<ShopCategory>;
  name?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  shop: Array<Shop>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ShopCategoryCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ShopCategoryCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ShopCategoryDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ShopCategoryHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ShopCategoryLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type ShopCategoryPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ShopCategoryPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ShopCategoryScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ShopCategoryShopArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ShopOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShopWhereInput>;
};


export type ShopCategoryUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ShopCategoryUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ShopCategoryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ShopCategoryWhereUniqueInput;
};

/** A connection to a list of items. */
export type ShopCategoryConnection = {
  __typename?: 'ShopCategoryConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ShopCategoryEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ShopCategoryCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  isMain?: InputMaybe<Scalars['Boolean']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ShopCategoryCreateLocalizationsInput>;
  /** name input for default locale (de) */
  name?: InputMaybe<Scalars['String']>;
  shop?: InputMaybe<ShopCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ShopCategoryCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ShopCategoryCreateLocalizationInput = {
  /** Localization input */
  data: ShopCategoryCreateLocalizationDataInput;
  locale: Locale;
};

export type ShopCategoryCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ShopCategoryCreateLocalizationInput>>;
};

export type ShopCategoryCreateManyInlineInput = {
  /** Connect multiple existing ShopCategory documents */
  connect?: InputMaybe<Array<ShopCategoryWhereUniqueInput>>;
  /** Create and connect multiple existing ShopCategory documents */
  create?: InputMaybe<Array<ShopCategoryCreateInput>>;
};

export type ShopCategoryCreateOneInlineInput = {
  /** Connect one existing ShopCategory document */
  connect?: InputMaybe<ShopCategoryWhereUniqueInput>;
  /** Create and connect one ShopCategory document */
  create?: InputMaybe<ShopCategoryCreateInput>;
};

/** An edge in a connection. */
export type ShopCategoryEdge = {
  __typename?: 'ShopCategoryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ShopCategory;
};

/** Identifies documents */
export type ShopCategoryManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ShopCategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ShopCategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ShopCategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isMain?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isMain_not?: InputMaybe<Scalars['Boolean']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  shop_every?: InputMaybe<ShopWhereInput>;
  shop_none?: InputMaybe<ShopWhereInput>;
  shop_some?: InputMaybe<ShopWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ShopCategoryOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsMainAsc = 'isMain_ASC',
  IsMainDesc = 'isMain_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ShopCategoryUpdateInput = {
  isMain?: InputMaybe<Scalars['Boolean']>;
  /** Manage document localizations */
  localizations?: InputMaybe<ShopCategoryUpdateLocalizationsInput>;
  /** name input for default locale (de) */
  name?: InputMaybe<Scalars['String']>;
  shop?: InputMaybe<ShopUpdateManyInlineInput>;
};

export type ShopCategoryUpdateLocalizationDataInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type ShopCategoryUpdateLocalizationInput = {
  data: ShopCategoryUpdateLocalizationDataInput;
  locale: Locale;
};

export type ShopCategoryUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ShopCategoryCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ShopCategoryUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ShopCategoryUpsertLocalizationInput>>;
};

export type ShopCategoryUpdateManyInlineInput = {
  /** Connect multiple existing ShopCategory documents */
  connect?: InputMaybe<Array<ShopCategoryConnectInput>>;
  /** Create and connect multiple ShopCategory documents */
  create?: InputMaybe<Array<ShopCategoryCreateInput>>;
  /** Delete multiple ShopCategory documents */
  delete?: InputMaybe<Array<ShopCategoryWhereUniqueInput>>;
  /** Disconnect multiple ShopCategory documents */
  disconnect?: InputMaybe<Array<ShopCategoryWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ShopCategory documents */
  set?: InputMaybe<Array<ShopCategoryWhereUniqueInput>>;
  /** Update multiple ShopCategory documents */
  update?: InputMaybe<Array<ShopCategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ShopCategory documents */
  upsert?: InputMaybe<Array<ShopCategoryUpsertWithNestedWhereUniqueInput>>;
};

export type ShopCategoryUpdateManyInput = {
  isMain?: InputMaybe<Scalars['Boolean']>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<ShopCategoryUpdateManyLocalizationsInput>;
  /** name input for default locale (de) */
  name?: InputMaybe<Scalars['String']>;
};

export type ShopCategoryUpdateManyLocalizationDataInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type ShopCategoryUpdateManyLocalizationInput = {
  data: ShopCategoryUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ShopCategoryUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ShopCategoryUpdateManyLocalizationInput>>;
};

export type ShopCategoryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ShopCategoryUpdateManyInput;
  /** Document search */
  where: ShopCategoryWhereInput;
};

export type ShopCategoryUpdateOneInlineInput = {
  /** Connect existing ShopCategory document */
  connect?: InputMaybe<ShopCategoryWhereUniqueInput>;
  /** Create and connect one ShopCategory document */
  create?: InputMaybe<ShopCategoryCreateInput>;
  /** Delete currently connected ShopCategory document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ShopCategory document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ShopCategory document */
  update?: InputMaybe<ShopCategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ShopCategory document */
  upsert?: InputMaybe<ShopCategoryUpsertWithNestedWhereUniqueInput>;
};

export type ShopCategoryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ShopCategoryUpdateInput;
  /** Unique document search */
  where: ShopCategoryWhereUniqueInput;
};

export type ShopCategoryUpsertInput = {
  /** Create document if it didn't exist */
  create: ShopCategoryCreateInput;
  /** Update document if it exists */
  update: ShopCategoryUpdateInput;
};

export type ShopCategoryUpsertLocalizationInput = {
  create: ShopCategoryCreateLocalizationDataInput;
  locale: Locale;
  update: ShopCategoryUpdateLocalizationDataInput;
};

export type ShopCategoryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ShopCategoryUpsertInput;
  /** Unique document search */
  where: ShopCategoryWhereUniqueInput;
};

/** Identifies documents */
export type ShopCategoryWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ShopCategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ShopCategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ShopCategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isMain?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isMain_not?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  shop_every?: InputMaybe<ShopWhereInput>;
  shop_none?: InputMaybe<ShopWhereInput>;
  shop_some?: InputMaybe<ShopWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ShopCategory record uniquely */
export type ShopCategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ShopConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ShopWhereUniqueInput;
};

/** A connection to a list of items. */
export type ShopConnection = {
  __typename?: 'ShopConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ShopEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ShopCreateInput = {
  address?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  dataProtectionForm?: InputMaybe<AssetCreateOneInlineInput>;
  email?: InputMaybe<Scalars['String']>;
  infoflyer?: InputMaybe<Scalars['Int']>;
  location?: InputMaybe<LocationInput>;
  name?: InputMaybe<Scalars['String']>;
  newsletter?: InputMaybe<Scalars['Boolean']>;
  notes?: InputMaybe<Scalars['String']>;
  openinghours?: InputMaybe<Scalars['String']>;
  shopBundesland?: InputMaybe<ShopBundeslandCreateOneInlineInput>;
  shopStatus?: InputMaybe<ShopStatusCreateOneInlineInput>;
  shopTown?: InputMaybe<ShopTownCreateOneInlineInput>;
  shopType?: InputMaybe<ShopTypeCreateManyInlineInput>;
  shopcategories?: InputMaybe<ShopCategoryCreateManyInlineInput>;
  stickerBack?: InputMaybe<Scalars['Int']>;
  stickerFront?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
};

export type ShopCreateManyInlineInput = {
  /** Connect multiple existing Shop documents */
  connect?: InputMaybe<Array<ShopWhereUniqueInput>>;
  /** Create and connect multiple existing Shop documents */
  create?: InputMaybe<Array<ShopCreateInput>>;
};

export type ShopCreateOneInlineInput = {
  /** Connect one existing Shop document */
  connect?: InputMaybe<ShopWhereUniqueInput>;
  /** Create and connect one Shop document */
  create?: InputMaybe<ShopCreateInput>;
};

/** An edge in a connection. */
export type ShopEdge = {
  __typename?: 'ShopEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Shop;
};

/** Identifies documents */
export type ShopManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ShopWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ShopWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ShopWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  address_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  address_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  address_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  address_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  address_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  address_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  address_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  address_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  dataProtectionForm?: InputMaybe<AssetWhereInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  infoflyer?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  infoflyer_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  infoflyer_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  infoflyer_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  infoflyer_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  infoflyer_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  infoflyer_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  infoflyer_not_in?: InputMaybe<Array<Scalars['Int']>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  newsletter?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newsletter_not?: InputMaybe<Scalars['Boolean']>;
  notes?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  notes_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  notes_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  notes_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  notes_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  notes_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  notes_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  notes_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  notes_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  notes_starts_with?: InputMaybe<Scalars['String']>;
  openinghours?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  openinghours_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  openinghours_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  openinghours_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  openinghours_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  openinghours_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  openinghours_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  openinghours_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  openinghours_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  openinghours_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  shopBundesland?: InputMaybe<ShopBundeslandWhereInput>;
  shopStatus?: InputMaybe<ShopStatusWhereInput>;
  shopTown?: InputMaybe<ShopTownWhereInput>;
  shopType_every?: InputMaybe<ShopTypeWhereInput>;
  shopType_none?: InputMaybe<ShopTypeWhereInput>;
  shopType_some?: InputMaybe<ShopTypeWhereInput>;
  shopcategories_every?: InputMaybe<ShopCategoryWhereInput>;
  shopcategories_none?: InputMaybe<ShopCategoryWhereInput>;
  shopcategories_some?: InputMaybe<ShopCategoryWhereInput>;
  stickerBack?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stickerBack_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stickerBack_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stickerBack_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  stickerBack_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stickerBack_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stickerBack_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stickerBack_not_in?: InputMaybe<Array<Scalars['Int']>>;
  stickerFront?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stickerFront_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stickerFront_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stickerFront_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  stickerFront_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stickerFront_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stickerFront_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stickerFront_not_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  website?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  website_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  website_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  website_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  website_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  website_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  website_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  website_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  website_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  website_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ShopOrderByInput {
  AddressAsc = 'address_ASC',
  AddressDesc = 'address_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  InfoflyerAsc = 'infoflyer_ASC',
  InfoflyerDesc = 'infoflyer_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NewsletterAsc = 'newsletter_ASC',
  NewsletterDesc = 'newsletter_DESC',
  NotesAsc = 'notes_ASC',
  NotesDesc = 'notes_DESC',
  OpeninghoursAsc = 'openinghours_ASC',
  OpeninghoursDesc = 'openinghours_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StickerBackAsc = 'stickerBack_ASC',
  StickerBackDesc = 'stickerBack_DESC',
  StickerFrontAsc = 'stickerFront_ASC',
  StickerFrontDesc = 'stickerFront_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC'
}

export type ShopStatus = Node & {
  __typename?: 'ShopStatus';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<ShopStatus>;
  /** List of ShopStatus versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<ShopStatus>;
  name?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  shops: Array<Shop>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ShopStatusCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ShopStatusCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ShopStatusDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ShopStatusHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ShopStatusLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type ShopStatusPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ShopStatusPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ShopStatusScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ShopStatusShopsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ShopOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShopWhereInput>;
};


export type ShopStatusUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ShopStatusUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ShopStatusConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ShopStatusWhereUniqueInput;
};

/** A connection to a list of items. */
export type ShopStatusConnection = {
  __typename?: 'ShopStatusConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ShopStatusEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ShopStatusCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ShopStatusCreateLocalizationsInput>;
  /** name input for default locale (de) */
  name?: InputMaybe<Scalars['String']>;
  shops?: InputMaybe<ShopCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ShopStatusCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ShopStatusCreateLocalizationInput = {
  /** Localization input */
  data: ShopStatusCreateLocalizationDataInput;
  locale: Locale;
};

export type ShopStatusCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ShopStatusCreateLocalizationInput>>;
};

export type ShopStatusCreateManyInlineInput = {
  /** Connect multiple existing ShopStatus documents */
  connect?: InputMaybe<Array<ShopStatusWhereUniqueInput>>;
  /** Create and connect multiple existing ShopStatus documents */
  create?: InputMaybe<Array<ShopStatusCreateInput>>;
};

export type ShopStatusCreateOneInlineInput = {
  /** Connect one existing ShopStatus document */
  connect?: InputMaybe<ShopStatusWhereUniqueInput>;
  /** Create and connect one ShopStatus document */
  create?: InputMaybe<ShopStatusCreateInput>;
};

/** An edge in a connection. */
export type ShopStatusEdge = {
  __typename?: 'ShopStatusEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ShopStatus;
};

/** Identifies documents */
export type ShopStatusManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ShopStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ShopStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ShopStatusWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  shops_every?: InputMaybe<ShopWhereInput>;
  shops_none?: InputMaybe<ShopWhereInput>;
  shops_some?: InputMaybe<ShopWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ShopStatusOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ShopStatusUpdateInput = {
  /** Manage document localizations */
  localizations?: InputMaybe<ShopStatusUpdateLocalizationsInput>;
  /** name input for default locale (de) */
  name?: InputMaybe<Scalars['String']>;
  shops?: InputMaybe<ShopUpdateManyInlineInput>;
};

export type ShopStatusUpdateLocalizationDataInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type ShopStatusUpdateLocalizationInput = {
  data: ShopStatusUpdateLocalizationDataInput;
  locale: Locale;
};

export type ShopStatusUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ShopStatusCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ShopStatusUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ShopStatusUpsertLocalizationInput>>;
};

export type ShopStatusUpdateManyInlineInput = {
  /** Connect multiple existing ShopStatus documents */
  connect?: InputMaybe<Array<ShopStatusConnectInput>>;
  /** Create and connect multiple ShopStatus documents */
  create?: InputMaybe<Array<ShopStatusCreateInput>>;
  /** Delete multiple ShopStatus documents */
  delete?: InputMaybe<Array<ShopStatusWhereUniqueInput>>;
  /** Disconnect multiple ShopStatus documents */
  disconnect?: InputMaybe<Array<ShopStatusWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ShopStatus documents */
  set?: InputMaybe<Array<ShopStatusWhereUniqueInput>>;
  /** Update multiple ShopStatus documents */
  update?: InputMaybe<Array<ShopStatusUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ShopStatus documents */
  upsert?: InputMaybe<Array<ShopStatusUpsertWithNestedWhereUniqueInput>>;
};

export type ShopStatusUpdateManyInput = {
  /** Optional updates to localizations */
  localizations?: InputMaybe<ShopStatusUpdateManyLocalizationsInput>;
  /** name input for default locale (de) */
  name?: InputMaybe<Scalars['String']>;
};

export type ShopStatusUpdateManyLocalizationDataInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type ShopStatusUpdateManyLocalizationInput = {
  data: ShopStatusUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ShopStatusUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ShopStatusUpdateManyLocalizationInput>>;
};

export type ShopStatusUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ShopStatusUpdateManyInput;
  /** Document search */
  where: ShopStatusWhereInput;
};

export type ShopStatusUpdateOneInlineInput = {
  /** Connect existing ShopStatus document */
  connect?: InputMaybe<ShopStatusWhereUniqueInput>;
  /** Create and connect one ShopStatus document */
  create?: InputMaybe<ShopStatusCreateInput>;
  /** Delete currently connected ShopStatus document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ShopStatus document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ShopStatus document */
  update?: InputMaybe<ShopStatusUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ShopStatus document */
  upsert?: InputMaybe<ShopStatusUpsertWithNestedWhereUniqueInput>;
};

export type ShopStatusUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ShopStatusUpdateInput;
  /** Unique document search */
  where: ShopStatusWhereUniqueInput;
};

export type ShopStatusUpsertInput = {
  /** Create document if it didn't exist */
  create: ShopStatusCreateInput;
  /** Update document if it exists */
  update: ShopStatusUpdateInput;
};

export type ShopStatusUpsertLocalizationInput = {
  create: ShopStatusCreateLocalizationDataInput;
  locale: Locale;
  update: ShopStatusUpdateLocalizationDataInput;
};

export type ShopStatusUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ShopStatusUpsertInput;
  /** Unique document search */
  where: ShopStatusWhereUniqueInput;
};

/** Identifies documents */
export type ShopStatusWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ShopStatusWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ShopStatusWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ShopStatusWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  shops_every?: InputMaybe<ShopWhereInput>;
  shops_none?: InputMaybe<ShopWhereInput>;
  shops_some?: InputMaybe<ShopWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ShopStatus record uniquely */
export type ShopStatusWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ShopTown = Node & {
  __typename?: 'ShopTown';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<ShopTown>;
  /** List of ShopTown versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<ShopTown>;
  location?: Maybe<Location>;
  name?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  shop: Array<Shop>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ShopTownCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ShopTownCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ShopTownDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ShopTownHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ShopTownLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type ShopTownPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ShopTownPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ShopTownScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ShopTownShopArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ShopOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShopWhereInput>;
};


export type ShopTownUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ShopTownUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ShopTownConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ShopTownWhereUniqueInput;
};

/** A connection to a list of items. */
export type ShopTownConnection = {
  __typename?: 'ShopTownConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ShopTownEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ShopTownCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ShopTownCreateLocalizationsInput>;
  location?: InputMaybe<LocationInput>;
  /** name input for default locale (de) */
  name?: InputMaybe<Scalars['String']>;
  shop?: InputMaybe<ShopCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ShopTownCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ShopTownCreateLocalizationInput = {
  /** Localization input */
  data: ShopTownCreateLocalizationDataInput;
  locale: Locale;
};

export type ShopTownCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ShopTownCreateLocalizationInput>>;
};

export type ShopTownCreateManyInlineInput = {
  /** Connect multiple existing ShopTown documents */
  connect?: InputMaybe<Array<ShopTownWhereUniqueInput>>;
  /** Create and connect multiple existing ShopTown documents */
  create?: InputMaybe<Array<ShopTownCreateInput>>;
};

export type ShopTownCreateOneInlineInput = {
  /** Connect one existing ShopTown document */
  connect?: InputMaybe<ShopTownWhereUniqueInput>;
  /** Create and connect one ShopTown document */
  create?: InputMaybe<ShopTownCreateInput>;
};

/** An edge in a connection. */
export type ShopTownEdge = {
  __typename?: 'ShopTownEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ShopTown;
};

/** Identifies documents */
export type ShopTownManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ShopTownWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ShopTownWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ShopTownWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  shop_every?: InputMaybe<ShopWhereInput>;
  shop_none?: InputMaybe<ShopWhereInput>;
  shop_some?: InputMaybe<ShopWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ShopTownOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ShopTownUpdateInput = {
  /** Manage document localizations */
  localizations?: InputMaybe<ShopTownUpdateLocalizationsInput>;
  location?: InputMaybe<LocationInput>;
  /** name input for default locale (de) */
  name?: InputMaybe<Scalars['String']>;
  shop?: InputMaybe<ShopUpdateManyInlineInput>;
};

export type ShopTownUpdateLocalizationDataInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type ShopTownUpdateLocalizationInput = {
  data: ShopTownUpdateLocalizationDataInput;
  locale: Locale;
};

export type ShopTownUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ShopTownCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ShopTownUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ShopTownUpsertLocalizationInput>>;
};

export type ShopTownUpdateManyInlineInput = {
  /** Connect multiple existing ShopTown documents */
  connect?: InputMaybe<Array<ShopTownConnectInput>>;
  /** Create and connect multiple ShopTown documents */
  create?: InputMaybe<Array<ShopTownCreateInput>>;
  /** Delete multiple ShopTown documents */
  delete?: InputMaybe<Array<ShopTownWhereUniqueInput>>;
  /** Disconnect multiple ShopTown documents */
  disconnect?: InputMaybe<Array<ShopTownWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ShopTown documents */
  set?: InputMaybe<Array<ShopTownWhereUniqueInput>>;
  /** Update multiple ShopTown documents */
  update?: InputMaybe<Array<ShopTownUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ShopTown documents */
  upsert?: InputMaybe<Array<ShopTownUpsertWithNestedWhereUniqueInput>>;
};

export type ShopTownUpdateManyInput = {
  /** Optional updates to localizations */
  localizations?: InputMaybe<ShopTownUpdateManyLocalizationsInput>;
  location?: InputMaybe<LocationInput>;
  /** name input for default locale (de) */
  name?: InputMaybe<Scalars['String']>;
};

export type ShopTownUpdateManyLocalizationDataInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type ShopTownUpdateManyLocalizationInput = {
  data: ShopTownUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ShopTownUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ShopTownUpdateManyLocalizationInput>>;
};

export type ShopTownUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ShopTownUpdateManyInput;
  /** Document search */
  where: ShopTownWhereInput;
};

export type ShopTownUpdateOneInlineInput = {
  /** Connect existing ShopTown document */
  connect?: InputMaybe<ShopTownWhereUniqueInput>;
  /** Create and connect one ShopTown document */
  create?: InputMaybe<ShopTownCreateInput>;
  /** Delete currently connected ShopTown document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ShopTown document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ShopTown document */
  update?: InputMaybe<ShopTownUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ShopTown document */
  upsert?: InputMaybe<ShopTownUpsertWithNestedWhereUniqueInput>;
};

export type ShopTownUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ShopTownUpdateInput;
  /** Unique document search */
  where: ShopTownWhereUniqueInput;
};

export type ShopTownUpsertInput = {
  /** Create document if it didn't exist */
  create: ShopTownCreateInput;
  /** Update document if it exists */
  update: ShopTownUpdateInput;
};

export type ShopTownUpsertLocalizationInput = {
  create: ShopTownCreateLocalizationDataInput;
  locale: Locale;
  update: ShopTownUpdateLocalizationDataInput;
};

export type ShopTownUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ShopTownUpsertInput;
  /** Unique document search */
  where: ShopTownWhereUniqueInput;
};

/** Identifies documents */
export type ShopTownWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ShopTownWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ShopTownWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ShopTownWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  shop_every?: InputMaybe<ShopWhereInput>;
  shop_none?: InputMaybe<ShopWhereInput>;
  shop_some?: InputMaybe<ShopWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ShopTown record uniquely */
export type ShopTownWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ShopType = Node & {
  __typename?: 'ShopType';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<ShopType>;
  /** List of ShopType versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<ShopType>;
  name?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  shops: Array<Shop>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};


export type ShopTypeCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ShopTypeCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ShopTypeDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type ShopTypeHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type ShopTypeLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type ShopTypePublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ShopTypePublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type ShopTypeScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type ShopTypeShopsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ShopOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ShopWhereInput>;
};


export type ShopTypeUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type ShopTypeUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type ShopTypeConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ShopTypeWhereUniqueInput;
};

/** A connection to a list of items. */
export type ShopTypeConnection = {
  __typename?: 'ShopTypeConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ShopTypeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ShopTypeCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ShopTypeCreateLocalizationsInput>;
  /** name input for default locale (de) */
  name?: InputMaybe<Scalars['String']>;
  shops?: InputMaybe<ShopCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ShopTypeCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type ShopTypeCreateLocalizationInput = {
  /** Localization input */
  data: ShopTypeCreateLocalizationDataInput;
  locale: Locale;
};

export type ShopTypeCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ShopTypeCreateLocalizationInput>>;
};

export type ShopTypeCreateManyInlineInput = {
  /** Connect multiple existing ShopType documents */
  connect?: InputMaybe<Array<ShopTypeWhereUniqueInput>>;
  /** Create and connect multiple existing ShopType documents */
  create?: InputMaybe<Array<ShopTypeCreateInput>>;
};

export type ShopTypeCreateOneInlineInput = {
  /** Connect one existing ShopType document */
  connect?: InputMaybe<ShopTypeWhereUniqueInput>;
  /** Create and connect one ShopType document */
  create?: InputMaybe<ShopTypeCreateInput>;
};

/** An edge in a connection. */
export type ShopTypeEdge = {
  __typename?: 'ShopTypeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: ShopType;
};

/** Identifies documents */
export type ShopTypeManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ShopTypeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ShopTypeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ShopTypeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  shops_every?: InputMaybe<ShopWhereInput>;
  shops_none?: InputMaybe<ShopWhereInput>;
  shops_some?: InputMaybe<ShopWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ShopTypeOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type ShopTypeUpdateInput = {
  /** Manage document localizations */
  localizations?: InputMaybe<ShopTypeUpdateLocalizationsInput>;
  /** name input for default locale (de) */
  name?: InputMaybe<Scalars['String']>;
  shops?: InputMaybe<ShopUpdateManyInlineInput>;
};

export type ShopTypeUpdateLocalizationDataInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type ShopTypeUpdateLocalizationInput = {
  data: ShopTypeUpdateLocalizationDataInput;
  locale: Locale;
};

export type ShopTypeUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ShopTypeCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ShopTypeUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ShopTypeUpsertLocalizationInput>>;
};

export type ShopTypeUpdateManyInlineInput = {
  /** Connect multiple existing ShopType documents */
  connect?: InputMaybe<Array<ShopTypeConnectInput>>;
  /** Create and connect multiple ShopType documents */
  create?: InputMaybe<Array<ShopTypeCreateInput>>;
  /** Delete multiple ShopType documents */
  delete?: InputMaybe<Array<ShopTypeWhereUniqueInput>>;
  /** Disconnect multiple ShopType documents */
  disconnect?: InputMaybe<Array<ShopTypeWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ShopType documents */
  set?: InputMaybe<Array<ShopTypeWhereUniqueInput>>;
  /** Update multiple ShopType documents */
  update?: InputMaybe<Array<ShopTypeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ShopType documents */
  upsert?: InputMaybe<Array<ShopTypeUpsertWithNestedWhereUniqueInput>>;
};

export type ShopTypeUpdateManyInput = {
  /** Optional updates to localizations */
  localizations?: InputMaybe<ShopTypeUpdateManyLocalizationsInput>;
  /** name input for default locale (de) */
  name?: InputMaybe<Scalars['String']>;
};

export type ShopTypeUpdateManyLocalizationDataInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type ShopTypeUpdateManyLocalizationInput = {
  data: ShopTypeUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ShopTypeUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ShopTypeUpdateManyLocalizationInput>>;
};

export type ShopTypeUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ShopTypeUpdateManyInput;
  /** Document search */
  where: ShopTypeWhereInput;
};

export type ShopTypeUpdateOneInlineInput = {
  /** Connect existing ShopType document */
  connect?: InputMaybe<ShopTypeWhereUniqueInput>;
  /** Create and connect one ShopType document */
  create?: InputMaybe<ShopTypeCreateInput>;
  /** Delete currently connected ShopType document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected ShopType document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single ShopType document */
  update?: InputMaybe<ShopTypeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ShopType document */
  upsert?: InputMaybe<ShopTypeUpsertWithNestedWhereUniqueInput>;
};

export type ShopTypeUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ShopTypeUpdateInput;
  /** Unique document search */
  where: ShopTypeWhereUniqueInput;
};

export type ShopTypeUpsertInput = {
  /** Create document if it didn't exist */
  create: ShopTypeCreateInput;
  /** Update document if it exists */
  update: ShopTypeUpdateInput;
};

export type ShopTypeUpsertLocalizationInput = {
  create: ShopTypeCreateLocalizationDataInput;
  locale: Locale;
  update: ShopTypeUpdateLocalizationDataInput;
};

export type ShopTypeUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ShopTypeUpsertInput;
  /** Unique document search */
  where: ShopTypeWhereUniqueInput;
};

/** Identifies documents */
export type ShopTypeWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ShopTypeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ShopTypeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ShopTypeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  shops_every?: InputMaybe<ShopWhereInput>;
  shops_none?: InputMaybe<ShopWhereInput>;
  shops_some?: InputMaybe<ShopWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ShopType record uniquely */
export type ShopTypeWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type ShopUpdateInput = {
  address?: InputMaybe<Scalars['String']>;
  dataProtectionForm?: InputMaybe<AssetUpdateOneInlineInput>;
  email?: InputMaybe<Scalars['String']>;
  infoflyer?: InputMaybe<Scalars['Int']>;
  location?: InputMaybe<LocationInput>;
  name?: InputMaybe<Scalars['String']>;
  newsletter?: InputMaybe<Scalars['Boolean']>;
  notes?: InputMaybe<Scalars['String']>;
  openinghours?: InputMaybe<Scalars['String']>;
  shopBundesland?: InputMaybe<ShopBundeslandUpdateOneInlineInput>;
  shopStatus?: InputMaybe<ShopStatusUpdateOneInlineInput>;
  shopTown?: InputMaybe<ShopTownUpdateOneInlineInput>;
  shopType?: InputMaybe<ShopTypeUpdateManyInlineInput>;
  shopcategories?: InputMaybe<ShopCategoryUpdateManyInlineInput>;
  stickerBack?: InputMaybe<Scalars['Int']>;
  stickerFront?: InputMaybe<Scalars['Int']>;
  website?: InputMaybe<Scalars['String']>;
};

export type ShopUpdateManyInlineInput = {
  /** Connect multiple existing Shop documents */
  connect?: InputMaybe<Array<ShopConnectInput>>;
  /** Create and connect multiple Shop documents */
  create?: InputMaybe<Array<ShopCreateInput>>;
  /** Delete multiple Shop documents */
  delete?: InputMaybe<Array<ShopWhereUniqueInput>>;
  /** Disconnect multiple Shop documents */
  disconnect?: InputMaybe<Array<ShopWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Shop documents */
  set?: InputMaybe<Array<ShopWhereUniqueInput>>;
  /** Update multiple Shop documents */
  update?: InputMaybe<Array<ShopUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Shop documents */
  upsert?: InputMaybe<Array<ShopUpsertWithNestedWhereUniqueInput>>;
};

export type ShopUpdateManyInput = {
  address?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  infoflyer?: InputMaybe<Scalars['Int']>;
  location?: InputMaybe<LocationInput>;
  name?: InputMaybe<Scalars['String']>;
  newsletter?: InputMaybe<Scalars['Boolean']>;
  notes?: InputMaybe<Scalars['String']>;
  openinghours?: InputMaybe<Scalars['String']>;
  stickerBack?: InputMaybe<Scalars['Int']>;
  stickerFront?: InputMaybe<Scalars['Int']>;
  website?: InputMaybe<Scalars['String']>;
};

export type ShopUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ShopUpdateManyInput;
  /** Document search */
  where: ShopWhereInput;
};

export type ShopUpdateOneInlineInput = {
  /** Connect existing Shop document */
  connect?: InputMaybe<ShopWhereUniqueInput>;
  /** Create and connect one Shop document */
  create?: InputMaybe<ShopCreateInput>;
  /** Delete currently connected Shop document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Shop document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Shop document */
  update?: InputMaybe<ShopUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Shop document */
  upsert?: InputMaybe<ShopUpsertWithNestedWhereUniqueInput>;
};

export type ShopUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ShopUpdateInput;
  /** Unique document search */
  where: ShopWhereUniqueInput;
};

export type ShopUpsertInput = {
  /** Create document if it didn't exist */
  create: ShopCreateInput;
  /** Update document if it exists */
  update: ShopUpdateInput;
};

export type ShopUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ShopUpsertInput;
  /** Unique document search */
  where: ShopWhereUniqueInput;
};

/** Identifies documents */
export type ShopWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ShopWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ShopWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ShopWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  address_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  address_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  address_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  address_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  address_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  address_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  address_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  address_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  address_starts_with?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  dataProtectionForm?: InputMaybe<AssetWhereInput>;
  email?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  email_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  infoflyer?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  infoflyer_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  infoflyer_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  infoflyer_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  infoflyer_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  infoflyer_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  infoflyer_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  infoflyer_not_in?: InputMaybe<Array<Scalars['Int']>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  newsletter?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  newsletter_not?: InputMaybe<Scalars['Boolean']>;
  notes?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  notes_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  notes_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  notes_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  notes_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  notes_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  notes_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  notes_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  notes_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  notes_starts_with?: InputMaybe<Scalars['String']>;
  openinghours?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  openinghours_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  openinghours_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  openinghours_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  openinghours_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  openinghours_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  openinghours_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  openinghours_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  openinghours_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  openinghours_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  shopBundesland?: InputMaybe<ShopBundeslandWhereInput>;
  shopStatus?: InputMaybe<ShopStatusWhereInput>;
  shopTown?: InputMaybe<ShopTownWhereInput>;
  shopType_every?: InputMaybe<ShopTypeWhereInput>;
  shopType_none?: InputMaybe<ShopTypeWhereInput>;
  shopType_some?: InputMaybe<ShopTypeWhereInput>;
  shopcategories_every?: InputMaybe<ShopCategoryWhereInput>;
  shopcategories_none?: InputMaybe<ShopCategoryWhereInput>;
  shopcategories_some?: InputMaybe<ShopCategoryWhereInput>;
  stickerBack?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stickerBack_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stickerBack_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stickerBack_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  stickerBack_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stickerBack_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stickerBack_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stickerBack_not_in?: InputMaybe<Array<Scalars['Int']>>;
  stickerFront?: InputMaybe<Scalars['Int']>;
  /** All values greater than the given value. */
  stickerFront_gt?: InputMaybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  stickerFront_gte?: InputMaybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  stickerFront_in?: InputMaybe<Array<Scalars['Int']>>;
  /** All values less than the given value. */
  stickerFront_lt?: InputMaybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  stickerFront_lte?: InputMaybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  stickerFront_not?: InputMaybe<Scalars['Int']>;
  /** All values that are not contained in given list. */
  stickerFront_not_in?: InputMaybe<Array<Scalars['Int']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  website?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  website_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  website_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  website_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  website_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  website_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  website_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  website_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  website_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  website_starts_with?: InputMaybe<Scalars['String']>;
};

/** References Shop record uniquely */
export type ShopWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export type Supporter = Node & {
  __typename?: 'Supporter';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Supporter>;
  /** List of Supporter versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Supporter>;
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Asset>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  website?: Maybe<Scalars['String']>;
};


export type SupporterCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type SupporterCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type SupporterDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type SupporterHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type SupporterLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type SupporterPictureArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type SupporterPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type SupporterPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type SupporterScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type SupporterUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type SupporterUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type SupporterConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: SupporterWhereUniqueInput;
};

/** A connection to a list of items. */
export type SupporterConnection = {
  __typename?: 'SupporterConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<SupporterEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type SupporterCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<SupporterCreateLocalizationsInput>;
  /** name input for default locale (de) */
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<AssetCreateOneInlineInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** website input for default locale (de) */
  website?: InputMaybe<Scalars['String']>;
};

export type SupporterCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  website?: InputMaybe<Scalars['String']>;
};

export type SupporterCreateLocalizationInput = {
  /** Localization input */
  data: SupporterCreateLocalizationDataInput;
  locale: Locale;
};

export type SupporterCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<SupporterCreateLocalizationInput>>;
};

export type SupporterCreateManyInlineInput = {
  /** Connect multiple existing Supporter documents */
  connect?: InputMaybe<Array<SupporterWhereUniqueInput>>;
  /** Create and connect multiple existing Supporter documents */
  create?: InputMaybe<Array<SupporterCreateInput>>;
};

export type SupporterCreateOneInlineInput = {
  /** Connect one existing Supporter document */
  connect?: InputMaybe<SupporterWhereUniqueInput>;
  /** Create and connect one Supporter document */
  create?: InputMaybe<SupporterCreateInput>;
};

/** An edge in a connection. */
export type SupporterEdge = {
  __typename?: 'SupporterEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Supporter;
};

/** Identifies documents */
export type SupporterManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SupporterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SupporterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SupporterWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  picture?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum SupporterOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC'
}

export type SupporterUpdateInput = {
  /** Manage document localizations */
  localizations?: InputMaybe<SupporterUpdateLocalizationsInput>;
  /** name input for default locale (de) */
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<AssetUpdateOneInlineInput>;
  /** website input for default locale (de) */
  website?: InputMaybe<Scalars['String']>;
};

export type SupporterUpdateLocalizationDataInput = {
  name?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type SupporterUpdateLocalizationInput = {
  data: SupporterUpdateLocalizationDataInput;
  locale: Locale;
};

export type SupporterUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<SupporterCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<SupporterUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<SupporterUpsertLocalizationInput>>;
};

export type SupporterUpdateManyInlineInput = {
  /** Connect multiple existing Supporter documents */
  connect?: InputMaybe<Array<SupporterConnectInput>>;
  /** Create and connect multiple Supporter documents */
  create?: InputMaybe<Array<SupporterCreateInput>>;
  /** Delete multiple Supporter documents */
  delete?: InputMaybe<Array<SupporterWhereUniqueInput>>;
  /** Disconnect multiple Supporter documents */
  disconnect?: InputMaybe<Array<SupporterWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Supporter documents */
  set?: InputMaybe<Array<SupporterWhereUniqueInput>>;
  /** Update multiple Supporter documents */
  update?: InputMaybe<Array<SupporterUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Supporter documents */
  upsert?: InputMaybe<Array<SupporterUpsertWithNestedWhereUniqueInput>>;
};

export type SupporterUpdateManyInput = {
  /** Optional updates to localizations */
  localizations?: InputMaybe<SupporterUpdateManyLocalizationsInput>;
  /** name input for default locale (de) */
  name?: InputMaybe<Scalars['String']>;
  /** website input for default locale (de) */
  website?: InputMaybe<Scalars['String']>;
};

export type SupporterUpdateManyLocalizationDataInput = {
  name?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type SupporterUpdateManyLocalizationInput = {
  data: SupporterUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type SupporterUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<SupporterUpdateManyLocalizationInput>>;
};

export type SupporterUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: SupporterUpdateManyInput;
  /** Document search */
  where: SupporterWhereInput;
};

export type SupporterUpdateOneInlineInput = {
  /** Connect existing Supporter document */
  connect?: InputMaybe<SupporterWhereUniqueInput>;
  /** Create and connect one Supporter document */
  create?: InputMaybe<SupporterCreateInput>;
  /** Delete currently connected Supporter document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Supporter document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Supporter document */
  update?: InputMaybe<SupporterUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Supporter document */
  upsert?: InputMaybe<SupporterUpsertWithNestedWhereUniqueInput>;
};

export type SupporterUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: SupporterUpdateInput;
  /** Unique document search */
  where: SupporterWhereUniqueInput;
};

export type SupporterUpsertInput = {
  /** Create document if it didn't exist */
  create: SupporterCreateInput;
  /** Update document if it exists */
  update: SupporterUpdateInput;
};

export type SupporterUpsertLocalizationInput = {
  create: SupporterCreateLocalizationDataInput;
  locale: Locale;
  update: SupporterUpdateLocalizationDataInput;
};

export type SupporterUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: SupporterUpsertInput;
  /** Unique document search */
  where: SupporterWhereUniqueInput;
};

/** Identifies documents */
export type SupporterWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<SupporterWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<SupporterWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<SupporterWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<AssetWhereInput>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  website?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  website_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  website_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  website_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  website_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  website_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  website_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  website_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  website_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  website_starts_with?: InputMaybe<Scalars['String']>;
};

/** References Supporter record uniquely */
export type SupporterWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type Translation = Node & {
  __typename?: 'Translation';
  category?: Maybe<Category>;
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Translation>;
  /** List of Translation versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars['ID'];
  key: Scalars['String'];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Translation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  value?: Maybe<Scalars['String']>;
};


export type TranslationCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type TranslationCreatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type TranslationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};


export type TranslationHistoryArgs = {
  limit?: Scalars['Int'];
  skip?: Scalars['Int'];
  stageOverride?: InputMaybe<Stage>;
};


export type TranslationLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean'];
  locales?: Array<Locale>;
};


export type TranslationPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type TranslationPublishedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};


export type TranslationScheduledInArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};


export type TranslationUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};


export type TranslationUpdatedByArgs = {
  locales?: InputMaybe<Array<Locale>>;
};

export type TranslationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: TranslationWhereUniqueInput;
};

/** A connection to a list of items. */
export type TranslationConnection = {
  __typename?: 'TranslationConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<TranslationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type TranslationCreateInput = {
  category?: InputMaybe<Category>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  key: Scalars['String'];
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<TranslationCreateLocalizationsInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** value input for default locale (de) */
  value?: InputMaybe<Scalars['String']>;
};

export type TranslationCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  value?: InputMaybe<Scalars['String']>;
};

export type TranslationCreateLocalizationInput = {
  /** Localization input */
  data: TranslationCreateLocalizationDataInput;
  locale: Locale;
};

export type TranslationCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<TranslationCreateLocalizationInput>>;
};

export type TranslationCreateManyInlineInput = {
  /** Connect multiple existing Translation documents */
  connect?: InputMaybe<Array<TranslationWhereUniqueInput>>;
  /** Create and connect multiple existing Translation documents */
  create?: InputMaybe<Array<TranslationCreateInput>>;
};

export type TranslationCreateOneInlineInput = {
  /** Connect one existing Translation document */
  connect?: InputMaybe<TranslationWhereUniqueInput>;
  /** Create and connect one Translation document */
  create?: InputMaybe<TranslationCreateInput>;
};

/** An edge in a connection. */
export type TranslationEdge = {
  __typename?: 'TranslationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: Translation;
};

/** Identifies documents */
export type TranslationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TranslationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TranslationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TranslationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Category>;
  /** All values that are contained in given list. */
  category_in?: InputMaybe<Array<Category>>;
  /** All values that are not equal to given value. */
  category_not?: InputMaybe<Category>;
  /** All values that are not contained in given list. */
  category_not_in?: InputMaybe<Array<Category>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  key?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  key_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  key_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  key_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  key_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  key_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  key_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  key_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  key_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  key_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum TranslationOrderByInput {
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  KeyAsc = 'key_ASC',
  KeyDesc = 'key_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC'
}

export type TranslationUpdateInput = {
  category?: InputMaybe<Category>;
  key?: InputMaybe<Scalars['String']>;
  /** Manage document localizations */
  localizations?: InputMaybe<TranslationUpdateLocalizationsInput>;
  /** value input for default locale (de) */
  value?: InputMaybe<Scalars['String']>;
};

export type TranslationUpdateLocalizationDataInput = {
  value?: InputMaybe<Scalars['String']>;
};

export type TranslationUpdateLocalizationInput = {
  data: TranslationUpdateLocalizationDataInput;
  locale: Locale;
};

export type TranslationUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<TranslationCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<TranslationUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<TranslationUpsertLocalizationInput>>;
};

export type TranslationUpdateManyInlineInput = {
  /** Connect multiple existing Translation documents */
  connect?: InputMaybe<Array<TranslationConnectInput>>;
  /** Create and connect multiple Translation documents */
  create?: InputMaybe<Array<TranslationCreateInput>>;
  /** Delete multiple Translation documents */
  delete?: InputMaybe<Array<TranslationWhereUniqueInput>>;
  /** Disconnect multiple Translation documents */
  disconnect?: InputMaybe<Array<TranslationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Translation documents */
  set?: InputMaybe<Array<TranslationWhereUniqueInput>>;
  /** Update multiple Translation documents */
  update?: InputMaybe<Array<TranslationUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Translation documents */
  upsert?: InputMaybe<Array<TranslationUpsertWithNestedWhereUniqueInput>>;
};

export type TranslationUpdateManyInput = {
  category?: InputMaybe<Category>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<TranslationUpdateManyLocalizationsInput>;
  /** value input for default locale (de) */
  value?: InputMaybe<Scalars['String']>;
};

export type TranslationUpdateManyLocalizationDataInput = {
  value?: InputMaybe<Scalars['String']>;
};

export type TranslationUpdateManyLocalizationInput = {
  data: TranslationUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type TranslationUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<TranslationUpdateManyLocalizationInput>>;
};

export type TranslationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TranslationUpdateManyInput;
  /** Document search */
  where: TranslationWhereInput;
};

export type TranslationUpdateOneInlineInput = {
  /** Connect existing Translation document */
  connect?: InputMaybe<TranslationWhereUniqueInput>;
  /** Create and connect one Translation document */
  create?: InputMaybe<TranslationCreateInput>;
  /** Delete currently connected Translation document */
  delete?: InputMaybe<Scalars['Boolean']>;
  /** Disconnect currently connected Translation document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
  /** Update single Translation document */
  update?: InputMaybe<TranslationUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Translation document */
  upsert?: InputMaybe<TranslationUpsertWithNestedWhereUniqueInput>;
};

export type TranslationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TranslationUpdateInput;
  /** Unique document search */
  where: TranslationWhereUniqueInput;
};

export type TranslationUpsertInput = {
  /** Create document if it didn't exist */
  create: TranslationCreateInput;
  /** Update document if it exists */
  update: TranslationUpdateInput;
};

export type TranslationUpsertLocalizationInput = {
  create: TranslationCreateLocalizationDataInput;
  locale: Locale;
  update: TranslationUpdateLocalizationDataInput;
};

export type TranslationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TranslationUpsertInput;
  /** Unique document search */
  where: TranslationWhereUniqueInput;
};

/** Identifies documents */
export type TranslationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TranslationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TranslationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TranslationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Category>;
  /** All values that are contained in given list. */
  category_in?: InputMaybe<Array<Category>>;
  /** All values that are not equal to given value. */
  category_not?: InputMaybe<Category>;
  /** All values that are not contained in given list. */
  category_not_in?: InputMaybe<Array<Category>>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdBy?: InputMaybe<UserWhereInput>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  key?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  key_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  key_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  key_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  key_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  key_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  key_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  key_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  key_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  key_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedBy?: InputMaybe<UserWhereInput>;
  value?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  value_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  value_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  value_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  value_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  value_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  value_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  value_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  value_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  value_starts_with?: InputMaybe<Scalars['String']>;
};

/** References Translation record uniquely */
export type TranslationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  key?: InputMaybe<Scalars['String']>;
};

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  __typename?: 'User';
  /** The time the document was created */
  createdAt: Scalars['DateTime'];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars['ID'];
  /** Flag to determine if user is active or not */
  isActive: Scalars['Boolean'];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars['String'];
  /** Profile Picture url */
  picture?: Maybe<Scalars['String']>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars['DateTime']>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars['DateTime'];
};


/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean'];
  inheritLocale?: Scalars['Boolean'];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id?: InputMaybe<Scalars['ID']>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values that are not equal to given value. */
  id_not?: InputMaybe<Scalars['ID']>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  /** All values that are not equal to given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<UserKind>>;
  /** All values that are not equal to given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<UserKind>>;
  name?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  name_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values that are not equal to given value. */
  picture_not?: InputMaybe<Scalars['String']>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<Scalars['String']>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Version = {
  __typename?: 'Version';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars['ID'];
  revision: Scalars['Int'];
  stage: Stage;
};

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}
