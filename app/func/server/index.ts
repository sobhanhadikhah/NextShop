export function getUrlParam(url:string | undefined, index = 1):string | undefined {
  const id = url?.slice(url.lastIndexOf("/") + index);
  return id;
}
export function setOff(isOff:boolean, offPercent:number |null, price:number):number {
  if (isOff && offPercent) {
    const discountedPrice = price - (price * (offPercent / 100));
    return discountedPrice;
  }
  return price;
}
export function getQueryParam(url: string | undefined, paramName: string): string {
  const urlInstance = new URL(url ?? "");
  return urlInstance.searchParams.get(paramName) ?? "";
}

