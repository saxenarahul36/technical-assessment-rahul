import api from "../axios/index";
import { licensesMock } from "../mock";

export const getLicenses = () => {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res(licensesMock);
    }, 300);
  });
  return promise;
};

export const postLicensesRegistertion = (book) => {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res({ submited: true });
    }, 500);
  });
  return promise;
};
