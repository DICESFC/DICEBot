//getScriptProperties().getProperty("なんたらかんたら")
//って書いてあるやつはGAS側でプロパティの設定が必要です

export const constants = {
  //ワークスペースの投稿などの権限を司るトークン
  slackBotToken: {
    newWorkspace:
      PropertiesService.getScriptProperties().getProperty("BOT_TOKEN"),
    oldWorkspace: "",
  },

  //ワークスペースからのリクエストが本物かどうか判断するやつ
  slackVerifyToken: {
    newWorkspace:
      PropertiesService.getScriptProperties().getProperty("VERIFY_TOKEN"),
    oldWorkspace: "",
  },
};
