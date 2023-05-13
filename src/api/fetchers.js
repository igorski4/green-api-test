import { api } from "./api";

export const fetcherGet = async ({ url }) => {
  const res = await api
    .get(`waInstance${url.idInstance}/ReceiveNotification/${url.apiTokenInstance}`)
    .then((res) => res.data);
  if (res) await api.delete(`waInstance${url.idInstance}/DeleteNotification/${url.apiTokenInstance}/${res.receiptId}`);
  return res;
};

export const fetcherPost = async ({ url, data }) =>
  await api.post(`waInstance${url.idInstance}/SendMessage/${url.apiTokenInstance}`, data);

export const fetcherDelete = async ({ url }) =>
  await api.delete(`waInstance${url.idInstance}/DeleteNotification/${url.apiTokenInstance}/${url.receiptId}`);
