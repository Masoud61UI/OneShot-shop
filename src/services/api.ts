import axios from "axios";

const apiUrl = axios.create({
  baseURL: "http://localhost:8001",
});

export async function getProducts() {
  const { data } = await apiUrl("/allproducts");

  return data;
}

export async function getProduct(id: string | number) {
  const { data } = await apiUrl(`/allproducts/${id}`);

  return data;
}

export async function logIn(username: string, password: string) {
  const { data } = await apiUrl({
    method: "POST",
    url: "/login",
    data: {
      username,
      password,
    },
  });

  return data;
}
