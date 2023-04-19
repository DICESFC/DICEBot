//import DoPost = GoogleAppsScript.Events.DoPost;

//POST全般をここで受け取る
export const doPost = (req: any) => {
  const params = JSON.parse(req.postData.getDataAsString());
  console.error(params);
  return ContentService.createTextOutput(params.challenge);
};

export const add = (a: number, b: number) => {
  return a + b;
};
