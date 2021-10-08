export const MOCK_HOST = "api";

export const ISMOCK = true;

export const HTTP_ROOT: string =
  `${import.meta.env.VITE_APP_CONTEXT || "/rp_protal_web"}` + "/rest/service/";
console.log(import.meta)

export const HEADER_APPLICATION = "application/json;charset=UTF-8";

export const HTTP_TIMEOUT = 3000;

/**
 * 请求的公共参数
 */
export const conmomParams: any = {country: "China"}; // {country: "China"}