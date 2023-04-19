import DoPost = GoogleAppsScript.Events.DoPost;

//POST全般をここで受け取る
export const doPost = (req: DoPost) => {
  console.log(req);
};

export const add = (a: number, b: number) => {
  return a + b;
};
