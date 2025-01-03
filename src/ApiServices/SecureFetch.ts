interface SecureFetchParams {
  method: "POST" | "PATCH" | "GET" | "PUT" | "DELETE";
  body?: string;
  header: Record<string, string>;
  url: string;
}

const SecureFetch = async ({
  url,
  method,
  header,
  body,
}: SecureFetchParams) => {
  const request = await fetch(url, {
    method: method,
    headers: header,
    body: body ? body : undefined,
  });

  //all the reeors from the back end will be handred from here
  //eg : statuc code 500.., 400.. and many more

  return request;
};
export default SecureFetch;
