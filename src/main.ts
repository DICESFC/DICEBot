//import DoPost = GoogleAppsScript.Events.DoPost;

//POST全般をここで受け取る
export const doPost = (req: any) => {
  console.log(req.postData.getDataAsString());
};

export const add = (a: number, b: number) => {
  return a + b;
};
