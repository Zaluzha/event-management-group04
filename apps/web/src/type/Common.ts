export enum Status {
  BAD_REQUEST = 'BAD_REQUEST',
  ERROR_DB = 'ERROR_DB',
  OK = 'OK',
  UNAUTHENTICATED = 'UNAUTHENTICATED',
}

export enum TypePlayer {
  VOD = 'VOD',
  LIVETV = 'LIVETV',
  CATCHUP = 'CATCHUP',
}

export enum TypeVod {
  SERIES = 'SERIES',
  SINGLE = 'SINGLE',
}

export interface GetCommonQueryStringProps {
  id: string;
  prodid: string;
  epsid?: string;
}

export enum SetStep {
  PREVIOUS = 'PREVIOUS',
  NEXT = 'NEXT',
}

export enum Status {
  ACTIVE = 'Y',
  INACTIVE = 'N',
}

export type ApiResponseStatus = 'success' | 'error';

export interface CommonErrorApiResponse {
  code: string;
  details: string;
}

export interface CommonApiResponse {
  message: string;
  status: ApiResponseStatus;
  error: CommonErrorApiResponse | null;
}

export enum MasterDataCondition {
  PRODUCT_TYPE = 'TipeProduk',
  PAYMENT_METHOD = 'MetodeBayar',
  BUSINESS_TYPE = 'JenisUsaha',
  ADDRESS_FILL_TYPE = 'DasarPengisianAlamat',
  URUTAN_LEVEL_TYPE = 'UrutanLevel',
}

export interface GetMasterDataReq {
  condition: MasterDataCondition;
}

export enum UnitDuration {
  MONTH = 'MONTH',
}

export enum PaymentMethodType {
  DEPOSIT = '1|Deposit|12',
}

export enum AddressFillType {
  POSTAL_CODE = '1',
  PROVINCE = '2',
}

export enum RoleId {
  ADMIN = '1',
}

export enum Mode {
  EDIT = 'edit',
}

export enum StatusType {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export enum ThemeType {
  DARK = 'DARK',
  LIGHT = 'LIGHT',
}
